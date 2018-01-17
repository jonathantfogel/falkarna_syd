function addStylesheet(url) {
    var newStylesheet = document.createElement("link");
    newStylesheet.setAttribute("rel", "stylesheet");
    newStylesheet.setAttribute("href", url);
    document.head.insertAdjacentElement("afterbegin", newStylesheet);
}