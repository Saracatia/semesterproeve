
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const btn = document.querySelector(".sidebar__toggle");

  if (!sidebar || !btn) return;

  btn.addEventListener("click", () => {
    sidebar.classList.toggle("is-closed");

    btn.textContent = sidebar.classList.contains("is-closed") ? "▶" : "◀";
  });
});


btn.textContent = sidebar.classList.contains("is-closed") ? "❯" : "❮";
