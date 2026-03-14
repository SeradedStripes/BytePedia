(function () {
    function toTitleCase(slug) {
        return slug
            .split(/[-_\s]+/)
            .filter(Boolean)
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join(' ');
    }

    function renderResults(resultsEl, languages) {
        if (!languages.length) {
            resultsEl.innerHTML = '<tr><td colspan="2">No languages found.</td></tr>';
            return;
        }

        resultsEl.innerHTML = languages
            .map(lang => {
                return `<tr><td><a href="/langs/${lang.slug}/">${lang.name}</a></td><td><a href="/langs/${lang.slug}/">/langs/${lang.slug}/</a></td></tr>`;
            })
            .join('');
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
