const versionButton1 = document.createElement("button");
versionButton1.textContent = "1.01.0 Alpha"
versionButton1.addEventListener("click", () => {
    require("./versions/1.01.0-alpha/main.js")
})