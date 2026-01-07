document.addEventListener("DOMContentLoaded", () => {
  const themeLink = document.getElementById("theme-css");
  const btn = document.getElementById("theme-toggle");

  if (!themeLink || !btn) return;

  const THEME_KEY = "theme";
  const paths = {
    light: "light.css",
    dark: "dark.css",
  };

  function setTheme(mode) {
    themeLink.setAttribute("href", paths[mode]);
    localStorage.setItem(THEME_KEY, mode);
    btn.textContent = mode === "dark" ? "☀" : "☾";
    btn.setAttribute(
      "aria-label",
      mode === "dark" ? "Skift til lyst tema" : "Skift til mørkt tema"
    );
  }

  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "dark" || saved === "light") setTheme(saved);
  else if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) setTheme("dark");
  else setTheme("light");

  btn.addEventListener("click", () => {
    const isDark = themeLink.getAttribute("href") === paths.dark;
    setTheme(isDark ? "light" : "dark");
  });
});

