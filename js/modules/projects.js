/**
 * projects.js
 * Project grid with modal view and filtering
 * Shows top 6 projects initially with "Show More" button
 */

const PROJECTS = [
  // TOP 6 (Priority Display)
  {
    num: "01",
    title: "ChurnGuard: Customer Churn Prediction",
    desc: "Telecom churn classifier using SMOTE, stratified cross-validation, and ensemble model comparison. Improved minority-class recall from 0% to 61% with 78% overall accuracy.",
    tags: ["scikit-learn", "SMOTE", "Ensemble", "Flask"],
    category: "ml",
    img: "images/Churn.png",
    github: "https://github.com/Mohit26-BM/Python_Machine_Learning/tree/main/Customer_Churn",
    live: "https://customer-churn-prediction-x9i2.onrender.com/",
  },
  {
    num: "02",
    title: "LitMatch: Semantic Book Recommendation System",
    desc: "Transformer-powered recommendation engine using Sentence Transformers, LangChain, and ChromaDB. Hybrid ranking with embedding similarity and emotional tone filtering. 5,000+ books indexed.",
    tags: ["Sentence Transformers", "LangChain", "ChromaDB", "Hugging Face"],
    category: "nlp",
    img: "images/Litmatch.png",
    github: "https://github.com/Mohit26-BM/LitMatch-Book-Recommender",
    live: "https://huggingface.co/spaces/Mohit26BM/LitMatch-Recommender",
  },
  {
    num: "03",
    title: "Global Compass: Decoding What Makes Nations Happy",
    desc: "Interactive R Shiny dashboard analyzing global happiness drivers with classification and regression models. Enables live predictions, country comparisons, feature importance analysis, and model performance visualizations.",
    tags: ["R Shiny", "ML", "Classification", "Regression"],
    category: "ml",
    img: "images/compass.png",
    github: "https://github.com/Mohit26-BM/Global-Compass",
    live: "https://datavizs.shinyapps.io/global-compass/",
  },
  {
    num: "04",
    title: "BigMart Sales Prediction",
    desc: "Full-stack ML app predicting retail product sales with XGBoost. Features a what-if simulator, outlet comparison tool, and analytics dashboard. Supabase integration for live prediction storage.",
    tags: ["XGBoost", "Regression", "Supabase", "Flask"],
    category: "ml",
    img: "images/bigmart.png",
    github: "https://github.com/Mohit26-BM/Python_Machine_Learning/tree/main/Big_Mart_Sales_Prediction",
    live: "https://bigmartsales-urlm.onrender.com/",
  },
  {
    num: "05",
    title: "RainCast: Rainfall Prediction System",
    desc: "Weather prediction model using Decision Trees, Random Forest, and XGBoost with class weighting and GridSearch optimisation. Achieves 86% F1 score with a tuned Random Forest model.",
    tags: ["XGBoost", "Random Forest", "GridSearch", "EDA"],
    category: "ml",
    img: "images/raincast.png",
    github: "https://github.com/Mohit26-BM/Python_Machine_Learning/tree/main/RainFall_Prediction",
    live: "https://raincast-rainfall-predictor.onrender.com/",
  },
  {
    num: "06",
    title: "Bibliotheca: Library Management System",
    desc: "Full-stack library platform with authentication, catalog management, loan tracking, reviews, and analytics dashboards using Vanilla JS + Supabase (PostgreSQL). Includes role-based admin controls for books, users, and borrowing activity.",
    tags: ["JavaScript", "Supabase", "PostgreSQL", "Chart.js"],
    category: "web",
    img: "images/library.png",
    github: "",
    live: "",
  },

  // ADDITIONAL PROJECTS (Show More)
  {
    num: "07",
    title: "LoanIQ: Loan Approval Predictor",
    desc: "Credit eligibility classifier using Logistic Regression, SVM, and ensemble models with balanced class weighting. Delivers 85.4% accuracy with strong precision–recall balance.",
    tags: ["SVM", "Logistic Regression", "Class Balancing", "Flask"],
    category: "ml",
    img: "images/loan.png",
    github: "https://github.com/Mohit26-BM/Python_Machine_Learning/tree/main/Loan_Prediction_SVC",
    live: "https://loan-approval-1-2wn7.onrender.com/",
  },
  {
    num: "08",
    title: "InsurePredict: Medical Insurance Cost Estimator",
    desc: "Regression-based cost prediction using Linear Regression and XGBoost with hyperparameter tuning. EDA identified smoking status and BMI as primary drivers. Achieves R² = 0.864.",
    tags: ["XGBoost", "Regression", "EDA", "Hyperparameter Tuning"],
    category: "ml",
    img: "images/insurance.png",
    github: "https://github.com/Mohit26-BM/Python_Machine_Learning/tree/main/Medical_Health_Insurance_Prediction",
    live: "https://insurance-predictor1.onrender.com/",
  },
  {
    num: "09",
    title: "N-Queens Visualizer",
    desc: "Interactive backtracking visualiser with step-by-step queen placement. Real-time animation control with adjustable speed, pause/resume, and fullscreen exploration.",
    tags: ["JavaScript", "Backtracking", "CSS Animation", "Algorithms"],
    category: "web",
    img: "images/N-Queens.png",
    github: "https://github.com/Mohit26-BM/N-Queens-Visualizer/tree/main",
    live: "https://n-queens-visualizer-mohit26.netlify.app/",
  },
  {
    num: "10",
    title: "QuickLink: Django URL Shortener",
    desc: "URL shortening app using Django and Bitly API. Implements form validation, error handling, and secure token management via environment variables.",
    tags: ["Django", "Bitly API", "Python", "REST"],
    category: "web",
    img: "images/quicklink.png",
    github: "https://github.com/Mohit26-BM/URL_Shortner_Django",
    live: "https://url-shortner-django-1.onrender.com",
  },
  {
    num: "11",
    title: "Omnifood: AI-Powered Meal Delivery Landing Page",
    desc: "Fully responsive landing page for an AI-driven meal subscription service using HTML5, CSS3, Flexbox, and Grid. Mobile-first with smooth scrolling and sticky navigation.",
    tags: ["HTML5", "CSS3", "Flexbox", "Grid"],
    category: "web",
    img: "images/omnifood.png",
    github: "https://github.com/Mohit26-BM/Omnifood-Website",
    live: "https://omnifood-mohit26.netlify.app/",
  },
];

const INITIAL_VISIBLE_COUNT = 6;
const CATEGORY_MAP = {
  ml: "Machine Learning",
  nlp: "NLP / GenAI",
  web: "Web / Tools",
};

export function initProjects() {
  const grid = document.getElementById("projectsGrid");
  const showMoreWrapper = document.getElementById("showMoreWrapper");
  const btnShowMore = document.getElementById("btnShowMore");
  const showMoreText = document.getElementById("showMoreText");
  const modal = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalContent");
  const modalClose = document.getElementById("modalClose");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalPrev = document.getElementById("modalPrev");
  const modalNext = document.getElementById("modalNext");

  if (!grid || !modal) return;

  let filteredProjects = [...PROJECTS];
  let currentFilter = "all";
  let showingAll = false;
  let currentModalIndex = -1;

  /**
   * Build a thumbnail card DOM node
   */
  function makeThumbnail(project, index) {
    const thumb = document.createElement("div");
    thumb.className = "project-thumb";
    thumb.dataset.category = project.category;
    thumb.dataset.index = index;

    const categoryLabel = CATEGORY_MAP[project.category] || project.category;

    thumb.innerHTML = `
      <div class="thumb-img">
        <img src="${project.img}" alt="${project.title}" 
          onerror="this.style.display='none'">
        <div class="thumb-category">${categoryLabel}</div>
        <div class="thumb-overlay">View Project</div>
      </div>
      <div class="thumb-info">
        <div class="thumb-num">${project.num}</div>
        <h3 class="thumb-title">${project.title}</h3>
        <div class="thumb-tags">
          ${project.tags.slice(0, 3).map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    `;

    thumb.addEventListener("click", () => openModal(index));
    return thumb;
  }

  /**
   * Render grid with current filter and visibility
   */
  function renderGrid() {
    grid.innerHTML = "";
    filteredProjects.forEach((project, index) => {
      const thumb = makeThumbnail(project, index);
      grid.appendChild(thumb);
    });
    updateVisibility();
  }

  /**
   * Update which cards are visible
   */
  function updateVisibility() {
    const cards = grid.querySelectorAll(".project-thumb");
    const visibleCount = showingAll ? filteredProjects.length : Math.min(INITIAL_VISIBLE_COUNT, filteredProjects.length);

    cards.forEach((card, i) => {
      if (i < visibleCount) {
        card.classList.add("visible");
      } else {
        card.classList.remove("visible");
      }
    });

    // Show/hide "Show More" button
    if (filteredProjects.length <= INITIAL_VISIBLE_COUNT) {
      showMoreWrapper.classList.add("hidden");
    } else {
      showMoreWrapper.classList.remove("hidden");
      showMoreText.textContent = showingAll ? "Show Less" : "Show More Projects";
      btnShowMore.classList.toggle("expanded", showingAll);
    }
  }

  /**
   * Open modal with project details
   */
  function openModal(index) {
    currentModalIndex = index;
    const project = filteredProjects[index];
    const categoryLabel = CATEGORY_MAP[project.category] || project.category;

    const githubLink = project.github
      ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer">View GitHub →</a>`
      : `<span class="link-disabled">GitHub (coming soon)</span>`;
    const liveLink = project.live
      ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer">View Live →</a>`
      : `<span class="link-disabled">Live (coming soon)</span>`;

    modalContent.innerHTML = `
      <div class="modal-img-wrapper">
        <img src="${project.img}" alt="${project.title}" 
          onerror="this.style.display='none'">
      </div>
      <div class="modal-project-header">
        <span class="modal-num">${project.num}</span>
        <span class="modal-category">${categoryLabel}</span>
        <h2 class="modal-title">${project.title}</h2>
      </div>
      <p class="modal-desc">${project.desc}</p>
      <div class="modal-tags">
        ${project.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
      <div class="modal-links">
        ${githubLink}
        ${liveLink}
      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    updateModalNav();
  }

  /**
   * Close modal
   */
  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    currentModalIndex = -1;
  }

  /**
   * Navigate modal (prev/next)
   */
  function navigateModal(direction) {
    const newIndex = currentModalIndex + direction;
    if (newIndex >= 0 && newIndex < filteredProjects.length) {
      openModal(newIndex);
    }
  }

  /**
   * Update modal navigation button states
   */
  function updateModalNav() {
    modalPrev.disabled = currentModalIndex === 0;
    modalNext.disabled = currentModalIndex === filteredProjects.length - 1;
  }

  /**
   * Handle filter change
   */
  function applyFilter(filter) {
    currentFilter = filter;
    showingAll = false;

    filteredProjects =
      filter === "all"
        ? [...PROJECTS]
        : PROJECTS.filter((p) => p.category === filter);

    renderGrid();
  }

  /**
   * Toggle Show More
   */
  function toggleShowMore() {
    showingAll = !showingAll;
    updateVisibility();

    if (showingAll) {
      // Scroll to first hidden card smoothly
      setTimeout(() => {
        const cards = grid.querySelectorAll(".project-thumb");
        if (cards[INITIAL_VISIBLE_COUNT]) {
          cards[INITIAL_VISIBLE_COUNT].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
      }, 100);
    }
  }

  // Event Listeners
  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);
  modalPrev.addEventListener("click", () => navigateModal(-1));
  modalNext.addEventListener("click", () => navigateModal(1));

  if (btnShowMore) {
    btnShowMore.addEventListener("click", toggleShowMore);
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;

    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === "ArrowLeft") {
      navigateModal(-1);
    } else if (e.key === "ArrowRight") {
      navigateModal(1);
    }
  });

  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilter(btn.dataset.filter);
    });
  });

  // Initial render
  renderGrid();
}

