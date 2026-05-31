const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const icon = document.querySelector(".theme-icon");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  root.dataset.theme = savedTheme;
  icon.textContent = savedTheme === "dark" ? "☾" : "☼";
}

toggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
  icon.textContent = nextTheme === "dark" ? "☾" : "☼";
});
