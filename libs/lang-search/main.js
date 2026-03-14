(function () {
    function toTitleCase(slug) {
        return slug
            .split(/[-_\s]+/)
            .filter(Boolean)
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join(' ');
    }

    function openPreview(lang) {
        const panel = document.getElementById('lang-preview-panel');
        const title = document.getElementById('lang-preview-title');
        const content = document.getElementById('lang-preview-content');
        const sources = document.getElementById('lang-preview-sources');
        if (!panel || !content || !sources) return;

        if (title) title.textContent = lang.name;
        panel.hidden = false;
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' });

        BytePedia.loadMarkdown(`/langs/${lang.slug}/main.md`, 'lang-preview-content');
        BytePedia.loadMarkdown(`/langs/${lang.slug}/sources.md`, 'lang-preview-sources');
    }

    function renderResults(resultsEl, languages) {
        if (!languages.length) {
            resultsEl.innerHTML = '<tr><td colspan="2">No languages found.</td></tr>';
            return;
        }

        resultsEl.innerHTML = languages
            .map(lang => {
                const esc = s => s.replace(/&/g,'&amp;').replace(/"/g,'&quot;');
                return `<tr class="lang-row" data-slug="${esc(lang.slug)}" data-name="${esc(lang.name)}" tabindex="0" role="button" aria-label="Open ${esc(lang.name)}"><td>${lang.name}</td><td>/langs/${esc(lang.slug)}/</td></tr>`;
            })
            .join('');

        resultsEl.addEventListener('click', handleRowClick);
        resultsEl.addEventListener('keydown', handleRowKeydown);
    }

    function getRowLang(row) {
        return { slug: row.dataset.slug, name: row.dataset.name };
    }

    function handleRowClick(e) {
        const row = e.target.closest('tr.lang-row');
        if (row) openPreview(getRowLang(row));
    }

    function handleRowKeydown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const row = e.target.closest('tr.lang-row');
            if (row) { e.preventDefault(); openPreview(getRowLang(row)); }
        }
    }

    function normaliseLanguage(entry) {
        if (typeof entry === 'string') {
            return {
                slug: entry,
                name: toTitleCase(entry)
            };
        }

        return {
            slug: String(entry.slug || '').trim(),
            name: String(entry.name || '').trim() || toTitleCase(String(entry.slug || ''))
        };
    }

    async function loadIndex(indexPath) {
        const response = await fetch(indexPath, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`Failed to load index: ${response.status}`);
        }

        const payload = await response.json();
        if (!Array.isArray(payload)) {
            throw new Error('Invalid language index format');
        }

        return payload
            .map(normaliseLanguage)
            .filter(item => item.slug.length > 0)
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    async function init(options) {
        const inputEl = document.getElementById(options.inputId);
        const resultsEl = document.getElementById(options.resultsId);

        if (!inputEl || !resultsEl) {
            return;
        }

        let languages = [];
        try {
            languages = await loadIndex(options.indexPath || '/langs/index.json');
        } catch (_err) {
            resultsEl.innerHTML = '<tr><td colspan="2">Unable to load languages right now.</td></tr>';
            return;
        }

        renderResults(resultsEl, languages);

        const closeBtn = document.getElementById('lang-preview-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                const panel = document.getElementById('lang-preview-panel');
                if (panel) panel.hidden = true;
            });
        }

        inputEl.addEventListener('input', () => {
            const needle = inputEl.value.trim().toLowerCase();
            if (!needle) {
                renderResults(resultsEl, languages);
                return;
            }

            const matches = languages.filter(lang => {
                return lang.name.toLowerCase().includes(needle)
                    || lang.slug.toLowerCase().includes(needle);
            });

            renderResults(resultsEl, matches);
        });
    }

    window.BytePediaLangSearch = { init };
})();
