// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener("DOMContentLoaded", (e) => {
    let btn = document.getElementById("urlBtn");
    btn.addEventListener("click", (e) => {
        let urlInput = document.getElementById("url");
        getShortUrl(urlInput.value);
    });
});
async function getShortUrl(fullUrl) {
    let response = await fetch("https://rubanlinkshortener.azurewebsites.net/api/set?href=" + fullUrl, { "method": "get" });
    if (response.ok === true) {
        let shortUrl = await response.text();
        let res = document.getElementById("res");
        let link = document.createElement("a");
        let newUrl = "https://rubanlinkshortener.azurewebsites.net/api/go/" + shortUrl;
        link.setAttribute("href", newUrl);
        link.append(newUrl);
        res.appendChild(link);
    }
}
