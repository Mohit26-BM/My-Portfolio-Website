/**
 * reveal.js
 * Scroll reveal observer using IntersectionObserver
 * Animates elements into view on scroll
 */

export function initReveal() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        // Add visible class for animation
        entry.target.classList.add("visible");
      });
    },
    { threshold: 0.12 }
  );

  // Observe all reveal and timeline elements
  document
    .querySelectorAll(".reveal, .timeline-item")
    .forEach((el) => revealObserver.observe(el));
}
