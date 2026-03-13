(function() {
    if (!window.langImage) window.langImage = "logo.svg";
    if (!window.langUrl) window.langUrl = window.location.href;

    const metaCharset = document.createElement("meta");
    metaCharset.setAttribute("charset", "UTF-8");
    document.head.prepend(metaCharset);

    const metaViewport = document.createElement("meta");
    metaViewport.setAttribute("name", "viewport");
    metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");
    document.head.appendChild(metaViewport);

    const linkCss = document.createElement("link");
    linkCss.setAttribute("rel", "stylesheet");
    linkCss.setAttribute("href", "/style.css");
    document.head.appendChild(linkCss);

    const linkFavicon = document.createElement("link");
    linkFavicon.setAttribute("rel", "icon");
    linkFavicon.setAttribute("href", "/favicon.ico");
    document.head.appendChild(linkFavicon);

    // Open Graph
    const ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.setAttribute("content", `${window.langName} | BytePedia`);
    document.head.appendChild(ogTitle);

    const ogDesc = document.createElement("meta");
    ogDesc.setAttribute("property", "og:description");
    ogDesc.setAttribute("content", window.langDescription);
    document.head.appendChild(ogDesc);

    const ogImage = document.createElement("meta");
    ogImage.setAttribute("property", "og:image");
    ogImage.setAttribute("content", window.langImage);
    document.head.appendChild(ogImage);

    const ogUrl = document.createElement("meta");
    ogUrl.setAttribute("property", "og:url");
    ogUrl.setAttribute("content", window.langUrl);
    document.head.appendChild(ogUrl);

    const ogType = document.createElement("meta");
    ogType.setAttribute("property", "og:type");
    ogType.setAttribute("content", "website");
    document.head.appendChild(ogType);

    // Twitter
    const twCard = document.createElement("meta");
    twCard.setAttribute("name", "twitter:card");
    twCard.setAttribute("content", "summary_large_image");
    document.head.appendChild(twCard);

    const twTitle = document.createElement("meta");
    twTitle.setAttribute("name", "twitter:title");
    twTitle.setAttribute("content", `${window.langName} | BytePedia`);
    document.head.appendChild(twTitle);

    const twDesc = document.createElement("meta");
    twDesc.setAttribute("name", "twitter:description");
    twDesc.setAttribute("content", window.langDescription);
    document.head.appendChild(twDesc);

    const twImage = document.createElement("meta");
    twImage.setAttribute("name", "twitter:image");
    twImage.setAttribute("content", window.langImage);
    document.head.appendChild(twImage);

    const twSite = document.createElement("meta");
    twSite.setAttribute("name", "twitter:site");
    twSite.setAttribute("content", "@BytePedia");
    document.head.appendChild(twSite);

    const twCreator = document.createElement("meta");
    twCreator.setAttribute("name", "twitter:creator");
    twCreator.setAttribute("content", "@SeradedStripes");
    document.head.appendChild(twCreator);
})();