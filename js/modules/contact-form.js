/**
 * contact-form.js
 * Contact form handling with Web3Forms integration
 * Handles form submission feedback and validationWorks with Web3Forms API for email delivery
 */

export function initContactForm() {
  const form = document.querySelector(".contact-form form");
  const sendBtn = document.querySelector(".btn-send");

  if (!form || !sendBtn) return;

  form.addEventListener("submit", (e) => {
    // Show loading state
    const originalText = sendBtn.textContent;
    sendBtn.textContent = "Sending...";
    sendBtn.disabled = true;

    // Web3Forms will handle the actual submission
    // Page redirects or form is cleared based on their response
  });

  // Optional: Handle Web3Forms redirect
  // Add ?redirect=https://yoursite.com/thank-you to the form action for custom redirects
}
