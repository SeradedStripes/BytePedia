(function() {
  document.addEventListener("DOMContentLoaded", () => {
    const headElements = `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${window.langName || "BytePedia"} | BytePedia</title>
<link rel="stylesheet" href="/style.css">
<link rel="icon" href="/favicon.ico">
<meta name="description" content="${window.langDescription || "Programming languages encyclopedia"}">
<meta property="og:title" content="${window.langName || "BytePedia"} | BytePedia">
<meta property="og:description" content="${window.langDescription || "Programming languages encyclopedia"}">
<meta property="og:image" content="${window.langImage || "./logo.svg"}">
<meta property="og:url" content="${window.langUrl || window.location.href}">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${window.langName || "BytePedia"} | BytePedia">
<meta name="twitter:description" content="${window.langDescription || "Programming languages encyclopedia"}">
<meta name="twitter:image" content="${window.langImage || "./logo.svg"}">
<meta name="twitter:site" content="@BytePedia">
<meta name="twitter:creator" content="@SeradedStripes">
`;
    document.head.insertAdjacentHTML("afterbegin", headElements);

    const headerHTML = `
<header class="hero">
  <div class="container">
    <img src="/assets/logo.svg" alt="BytePedia Logo" width="72" height="72" style="vertical-align: middle; margin-right: 10px;">
    <nav class="header-nav" aria-label="Primary navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/langs/">Languages</a></li>
      </ul>
    </nav>
  </div>
</header>
`;
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  });
})();