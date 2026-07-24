// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll(
    ".research-card, .project-card, .skill-group, .pub-item, .stat-card, .about-text, .about-stats, .section-intro, h2"
  )
  .forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });

// Mobile navigation toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Close mobile navigation when a link is selected
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
  });
});

// Highlight active navigation link while scrolling
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 120) {
      currentSection = section.getAttribute("id") || "";
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "";

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.style.color = "var(--accent)";
    }
  });
});
