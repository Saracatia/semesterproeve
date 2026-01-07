const toggleBtn = document.getElementById("theme-toggle");
const themeLink = document.getElementById("theme-css");

if (toggleBtn && themeLink) {
  toggleBtn.addEventListener("click", () => {
    const isLight = themeLink.getAttribute("href") === "light.css";

    themeLink.setAttribute("href", isLight ? "dark.css" : "light.css");
  });
}
