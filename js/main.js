/**
 * main.js
 * Portfolio Application Entry Point
 * 
 * Imports and initializes all modules:
 * - Cursor tracking
 * - Scroll reveal animations
 * - Project carousel/deck
 * - Contact form handling
 * - Navigation active states
 * - Terminal typing animation
 */

import { initCursor } from "./modules/cursor.js";
import { initReveal } from "./modules/reveal.js";
import { initProjects } from "./modules/projects.js";
import { initContactForm } from "./modules/contact-form.js";
import { initNavigation } from "./modules/navigation.js";
import { initTerminal } from "./modules/terminal.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all modules
  initCursor();
  initReveal();
  initProjects();
  initContactForm();
  initNavigation();
  initTerminal();
});
