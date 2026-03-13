fetch('main.md')
    .then(r => r.text())
    .then(md => {
        document.getElementById('content').innerHTML = marked.parse(md);
    })
    .catch(() => {
        document.getElementById('content').textContent = 'Failed to load content.';
    });
fetch('sources.json')
  .then(r => r.json())
  .then(sources => {
    const list = document.getElementById('sources-list');
    sources.forEach(src => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = src.url;
      a.textContent = src.title;
      a.target = "_blank";
      li.appendChild(a);
      li.append(` — Accessed: ${src["date-accessed"]}`);
      list.appendChild(li);
    });
  })
  .catch(err => {
    document.getElementById('sources-list').textContent = 'Failed to load sources.';
    console.error(err);
  });