/**
 * BytePedia, custom Markdown parser
 */
(function () {
    function parseInline(text) {
        // Links  [text](url)
        text = text.replace(
            /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
            '<a href="$2" target="_blank" rel="noopener">$1</a>'
        );
        // Bare URLs
        text = text.replace(
            /(?<!href=")(https?:\/\/[^\s<>"]+)/g,
            '<a href="$1" target="_blank" rel="noopener">$1</a>'
        );
        // Bold
        text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        // Italics
        text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
        // Inline code
        text = text.replace(/``([^`]+)``/g, '<code>$1</code>');
        // Inline code
        text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
        // line break
        text = text.replace(/  \n/g, '<br>\n');
        return text;
    }

    function escHtml(s) {
        return s
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function tokenise(md) {
        const lines = md.split('\n');
        const tokens = [];
        let i = 0;

        while (i < lines.length) {
            const line = lines[i];

            // Fenced code block
            if (/^```/.test(line)) {
                const lang = line.slice(3).trim() || 'text';
                const codeLines = [];
                i++;
                while (i < lines.length && !/^```/.test(lines[i])) {
                    codeLines.push(lines[i]);
                    i++;
                }
                tokens.push({ type: 'code', lang, text: codeLines.join('\n') });
                i++;
                continue;
            }

            const hm = line.match(/^(#{1,6})\s+(.+)/);
            if (hm) {
                tokens.push({ type: 'heading', level: hm[1].length, text: hm[2].trim() });
                i++;
                continue;
            }

            if (/^>\s*$/.test(line)) {
                while (i < lines.length && /^>\s*$/.test(lines[i])) i++;
                tokens.push({ type: 'hr' });
                continue;
            }

            if (/^>\s*-\s/.test(line)) {
                const items = [];
                while (i < lines.length && /^>\s*-\s/.test(lines[i])) {
                    items.push(lines[i].replace(/^>\s*-\s/, ''));
                    i++;
                }
                tokens.push({ type: 'bqlist', items });
                continue;
            }

            if (line.startsWith('>')) {
                const bqLines = [];
                while (i < lines.length && lines[i].startsWith('>') && !/^>\s*$/.test(lines[i])) {
                    bqLines.push(lines[i].replace(/^>\s?/, ''));
                    i++;
                }
                tokens.push({ type: 'blockquote', text: bqLines.join('  \n') });
                continue;
            }

            if (/^-\s/.test(line)) {
                const items = [];
                while (i < lines.length && /^-\s/.test(lines[i])) {
                    items.push(lines[i].replace(/^-\s*/, ''));
                    i++;
                }
                tokens.push({ type: 'ul', items });
                continue;
            }

            if (line.trim() === '') {
                tokens.push({ type: 'blank' });
                i++;
                continue;
            }

            const paraLines = [];
            while (
                i < lines.length &&
                lines[i].trim() !== '' &&
                !/^#{1,6}\s/.test(lines[i]) &&
                !/^```/.test(lines[i]) &&
                !/^-\s/.test(lines[i]) &&
                !lines[i].startsWith('>')
            ) {
                paraLines.push(lines[i]);
                i++;
            }
            if (paraLines.length) {
                tokens.push({ type: 'para', text: paraLines.join('  \n') });
            }
        }

        return tokens;
    }

    function renderTokens(tokens) {
        let html = '';
        for (const tok of tokens) {
            switch (tok.type) {
                case 'hr':
                    html += '<hr>\n';
                    break;
                case 'heading':
                    html += `<h${tok.level}>${parseInline(tok.text)}</h${tok.level}>\n`;
                    break;
                case 'code':
                    html += `<pre><code class="lang-${tok.lang}">${escHtml(tok.text)}</code></pre>\n`;
                    break;
                case 'ul':
                    html += '<ul>\n'
                        + tok.items.map(it => `  <li>${parseInline(it)}</li>`).join('\n')
                        + '\n</ul>\n';
                    break;
                case 'blockquote':
                    html += `<blockquote><p>${parseInline(tok.text)}</p></blockquote>\n`;
                    break;
                case 'bqlist':
                    html += '<blockquote><ul>\n'
                        + tok.items.map(it => `  <li>${parseInline(it)}</li>`).join('\n')
                        + '\n</ul></blockquote>\n';
                    break;
                case 'para':
                    html += `<p>${parseInline(tok.text)}</p>\n`;
                    break;
                case 'blank':
                    break;
            }
        }
        return html;
    }

    function collectSources(html) {
        const re = /<a href="(https?:\/\/[^"]+)"[^>]*>([^<]+)<\/a>/g;
        const seen = new Set();
        const sources = [];
        let m;
        while ((m = re.exec(html)) !== null) {
            if (!seen.has(m[1])) {
                seen.add(m[1]);
                sources.push({ url: m[1], text: m[2] });
            }
        }
        return sources;
    }

    function loadMarkdown(mdPath, contentId, sourcesWrapperId, sourcesListId) {
        fetch(mdPath)
            .then(r => {
                if (!r.ok) throw new Error(r.status);
                return r.text();
            })
            .then(md => {
                const html = renderTokens(tokenise(md));
                document.getElementById(contentId).innerHTML = html;

                if (sourcesWrapperId && sourcesListId) {
                    const wrapper = document.getElementById(sourcesWrapperId);
                    const list    = document.getElementById(sourcesListId);
                    const sources = collectSources(html);

                    if (sources.length && list) {
                        list.innerHTML = sources
                            .map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.text}</a></li>`)
                            .join('\n');
                    } else if (wrapper) {
                        wrapper.remove();
                    }
                }
            })
            .catch(() => {
                const el = document.getElementById(contentId);
                if (el) el.textContent = 'Failed to load content.';
            });
    }

    window.BytePedia = { loadMarkdown };
})();