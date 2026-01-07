(() => {
  const btn = document.getElementById("theme-toggle");
  const link = document.getElementById("theme-css");

  if (!btn || !link) return;

  const setTheme = (theme) => {
    link.setAttribute("href", theme === "dark" ? "dark.css" : "light.css");
    btn.textContent = theme === "dark" ? "☀" : "☾";
    localStorage.setItem("theme", theme);
  };

  // Load saved theme (default light)
  const saved = localStorage.getItem("theme");
  if (saved === "dark") setTheme("dark");

  btn.addEventListener("click", () => {
    const current = link.getAttribute("href");
    setTheme(current === "dark.css" ? "light" : "dark");
  });
})();
