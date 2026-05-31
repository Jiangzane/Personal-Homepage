const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const icon = document.querySelector(".theme-icon");
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");
const year = document.querySelector("#year");

const setTheme = (theme) => {
  root.dataset.theme = theme;
  if (icon) {
    icon.textContent = theme === "dark" ? "☾" : "☼";
  }
};

setTheme(savedTheme || (prefersDark ? "dark" : "light"));

if (year) {
  year.textContent = new Date().getFullYear();
}

if (toggle) {
  toggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  });
}

if ("IntersectionObserver" in window && sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === `#${entry.target.id}`,
          );
        });
      });
    },
    { rootMargin: "-38% 0px -52% 0px", threshold: 0.01 },
  );

  sections.forEach((section) => observer.observe(section));
}
