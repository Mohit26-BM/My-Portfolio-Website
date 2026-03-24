# Portfolio Website - Mohit Bali

A modern, interactive portfolio showcasing Machine Learning, Data Science, and Web Development projects.

## Overview

This is a fully responsive portfolio website built with vanilla HTML, CSS, and JavaScript. It features a clean notebook-inspired design, smooth animations, and an interactive project carousel.

**Live Site:** [Click here](https://mohit26portfolio.netlify.app/)

## Features

- **Interactive Hero Section** with terminal typing animation
- **Project Carousel** with swipe/keyboard navigation and filtering (ML/Regression, NLP/GenAI, Web/Tools)
- **Skills Section** with 3D flip cards on hover
- **Contact Form** integrated with Web3Forms API
- **Smooth Scroll Animations** using Intersection Observer
- **Custom Cursor** with smooth tracking
- **Fully Responsive** design for all screen sizes
- **Modular Architecture** for easy maintenance

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6 Modules)
- **Form Handling:** Web3Forms API
- **Animations:** CSS transforms, transitions, Intersection Observer
- **Design:** Flexbox, CSS Grid, Custom Properties (CSS Variables)

## Project Structure

```text
portfolio/
├── index.html              # Main HTML file
├── favicon.svg             # Site favicon
├── css/
│   ├── style.css           # Main entry point (imports all modules)
│   ├── variables.css       # Design tokens (colors, fonts)
│   ├── base.css            # Reset and global styles
│   ├── utilities.css       # Animations and utility classes
│   ├── components/         # Reusable UI components
│   │   ├── navigation.css
│   │   ├── buttons.css
│   │   └── forms.css
│   ├── sections/           # Section-specific styles
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── projects.css
│   │   ├── skills.css
│   │   ├── experience.css
│   │   ├── contact.css
│   │   └── footer.css
│   └── responsive.css      # Media queries
├── js/
│   ├── main.js             # Entry point with module imports
│   └── modules/            # Feature modules
│       ├── cursor.js       # Custom cursor tracking
│       ├── reveal.js       # Scroll reveal animations
│       ├── projects.js     # Project carousel logic
│       ├── contact-form.js # Form submission handling
│       ├── navigation.js   # Active nav on scroll
│       └── terminal.js     # Terminal typing animation
└── images/                 # Project screenshots
```

## Getting Started

### Prerequisites

- A modern web browser
- Git (for version control)
- A code editor (VS Code recommended)

## Customization

### Update Projects

Edit `js/modules/projects.js` to add/modify projects:

```javascript
{
  num: "11",
  title: "Your Project Name",
  desc: "Project description...",
  tags: ["Tag1", "Tag2"],
  category: "ml", // or "nlp" or "web"
  img: "images/your-image.png",
  github: "https://github.com/...",
  live: "https://...",
}
```

### Update Skills

Edit skill cards in `index.html` under the `#skills` section.

### Change Colors

Edit CSS variables in `css/variables.css`:

```css
--accent: #00e59b;  /* Primary accent color */
--ink: #0e0d0b;     /* Text color */
--paper: #f7f3ec;   /* Background color */
```

### Update Contact Form

Replace the Web3Forms access key in `index.html` (line 407):

```html
<input type="hidden" name="access_key" value="your-access-key-here">
```

Get your free access key at [Web3Forms](https://web3forms.com).

## Features Breakdown

### Project Carousel

- Swipe/drag support for touch devices
- Keyboard navigation (arrow keys)
- Filter by category
- Smooth slide transitions
- "Coming soon" handling for unpublished projects

### Skills Section

- 3D flip cards reveal details on hover
- Organized into 4 categories: Languages & Core, ML & Modeling, Data & Visualization, Tools & Deployment

### Contact Form

- Serverless form submission via Web3Forms
- Client-side validation
- Success/error handling

### Animations

- Scroll reveal with Intersection Observer
- Terminal typing effect
- Custom cursor tracking
- Smooth CSS transitions

## Contact

### Mohit Bali

- Email: [M26ohitbali@gmail.com](mailto:M26ohitbali@gmail.com)
- GitHub: [@Mohit26-BM](https://github.com/Mohit26-BM)
- LinkedIn: [mohit26bali](https://linkedin.com/in/mohit26bali)
