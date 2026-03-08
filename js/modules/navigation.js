/**
 * navigation.js
 * Highlights active nav link based on scroll position
 * Uses scroll listener to track which section is in viewport
 */

export function initNavigation() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (sections.length === 0 || navLinks.length === 0) return;

  window.addEventListener(
    "scroll",
    () => {
      let current = "";

      // Find which section is currently in view
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.id;
        }
      });

      // Update active nav link
      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === "#" + current;
        link.classList.toggle("active", isActive);
      });
    },
    { passive: true }
  );
}
