/**
 * projects.js
 * Project deck carousel with filtering, keyboard, and touch support
 * Handles card rendering, navigation, and slide transitions
 */

const PROJECTS = [
  {
    num: "01",
    title: "ChurnGuard: Customer Churn Prediction",
    desc: "Telecom churn classifier using SMOTE, stratified cross-validation, and ensemble model comparison. Improved minority-class recall from 0% to 61% with 78% overall accuracy.",
    tags: ["scikit-learn", "SMOTE", "Ensemble", "Flask"],
    category: "ml",
    img: "images/Churn.png",
    github:
      "https://github.com/Mohit26-BM/Python_Machine_Learning/tree/main/Customer_Churn",
    live: "https://customer-churn-prediction-x9i2.onrender.com/",
  },
  {
    num: "02",
    title: "RainCast: Rainfall Prediction System",
    desc: "Weather prediction model using Decision Trees, Random Forest, and XGBoost with class weighting and GridSearch optimisation. Achieves 86% F1 score with a tuned Random Forest model.",
    tags: ["XGBoost", "Random Forest", "GridSearch", "EDA"],
    category: "ml",
    img: "images/raincast.png",
    github:
      "https://github.com/Mohit26-BM/Python_Machine_Learning/tree/main/RainFall_Prediction",
    live: "https://raincast-rainfall-predictor.onrender.com/",
  },
  {
    num: "03",
    title: "InsurePredict: Medical Insurance Cost Estimator",
    desc: "Regression-based cost prediction using Linear Regression and XGBoost with hyperparameter tuning. EDA identified smoking status and BMI as primary drivers. Achieves R² = 0.864.",
    tags: ["XGBoost", "Regression", "EDA", "Hyperparameter Tuning"],
    category: "ml",
    img: "images/insurance.png",
    github:
      "https://github.com/Mohit26-BM/Python_Machine_Learning/tree/main/Medical_Health_Insurance_Prediction",
    live: "https://insurance-predictor1.onrender.com/",
  },
  {
    num: "04",
    title: "LoanIQ: Loan Approval Predictor",
    desc: "Credit eligibility classifier using Logistic Regression, SVM, and ensemble models with balanced class weighting. Delivers 85.4% accuracy with strong precision–recall balance.",
    tags: ["SVM", "Logistic Regression", "Class Balancing", "Flask"],
    category: "ml",
    img: "images/loan.png",
    github:
      "https://github.com/Mohit26-BM/Python_Machine_Learning/tree/main/Loan_Prediction_SVC",
    live: "https://loan-approval-1-2wn7.onrender.com/",
  },
  {
    num: "05",
    title: "BigMart Sales Prediction",
    desc: "Full-stack ML app predicting retail product sales with XGBoost. Features a what-if simulator, outlet comparison tool, and analytics dashboard. Supabase integration for live prediction storage.",
    tags: ["XGBoost", "Regression", "Supabase", "Flask"],
    category: "ml",
    img: "images/bigmart.png",
    github:
      "https://github.com/Mohit26-BM/Python_Machine_Learning/tree/main/Big_Mart_Sales_Prediction",
    live: "https://bigmartsales-urlm.onrender.com/",
  },
  {
    num: "06",
    title: "N-Queens Visualizer",
    desc: "Interactive backtracking visualiser with step-by-step queen placement. Real-time animation control with adjustable speed, pause/resume, and fullscreen exploration.",
    tags: ["JavaScript", "Backtracking", "CSS Animation", "Algorithms"],
    category: "web",
    img: "images/N-Queens.png",
    github: "https://github.com/Mohit26-BM/N-Queens-Visualizer/tree/main",
    live: "https://n-queens-visualizer-mohit26.netlify.app/",
  },
  {
    num: "07",
    title: "LitMatch: Semantic Book Recommendation System",
    desc: "Transformer-powered recommendation engine using Sentence Transformers, LangChain, and ChromaDB. Hybrid ranking with embedding similarity and emotional tone filtering. 5,000+ books indexed.",
    tags: ["Sentence Transformers", "LangChain", "ChromaDB", "Hugging Face"],
    category: "nlp",
    img: "images/Litmatch.png",
    github: "https://github.com/Mohit26-BM/LitMatch-Book-Recommender",
    live: "https://huggingface.co/spaces/Mohit26BM/LitMatch-Recommender",
  },
  {
    num: "08",
    title: "QuickLink: Django URL Shortener",
    desc: "URL shortening app using Django and Bitly API. Implements form validation, error handling, and secure token management via environment variables.",
    tags: ["Django", "Bitly API", "Python", "REST"],
    category: "web",
    img: "images/quicklink.png",
    github: "https://github.com/Mohit26-BM/URL_Shortner_Django",
    live: "https://url-shortner-django-1.onrender.com",
  },
  {
    num: "09",
    title: "Omnifood: AI-Powered Meal Delivery Landing Page",
    desc: "Fully responsive landing page for an AI-driven meal subscription service using HTML5, CSS3, Flexbox, and Grid. Mobile-first with smooth scrolling and sticky navigation.",
    tags: ["HTML5", "CSS3", "Flexbox", "Grid"],
    category: "web",
    img: "images/omnifood.png",
    github: "https://github.com/Mohit26-BM/Omnifood-Website",
    live: "https://omnifood-mohit26.netlify.app/",
  },
  {
    num: "10",
    title: "Bibliotheca: Library Management System",
    desc: "Full-stack library platform with authentication, catalog management, loan tracking, reviews, and analytics dashboards using Vanilla JS + Supabase (PostgreSQL). Includes role-based admin controls for books, users, and borrowing activity.",
    tags: ["JavaScript", "Supabase", "PostgreSQL", "Chart.js"],
    category: "web",
    img: "images/library.png",
    github: "",
    live: "",
  },
];

export function initProjects() {
  const viewport = document.getElementById("deckViewport");
  const dotsWrap = document.getElementById("deckDots");
  const prevBtn = document.getElementById("deckPrev");
  const nextBtn = document.getElementById("deckNext");
  const counterEl = document.getElementById("deckCurrent");
  const totalEl = document.getElementById("deckTotal");

  if (!viewport || !dotsWrap || !prevBtn || !nextBtn) return;

  let deck = [...PROJECTS];
  let idx = 0;
  let isAnimating = false;

  /**
   * Build a single project card DOM node
   */
  function makeCard(project) {
    const githubLink = project.github
      ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub →</a>`
      : `<span class="link-disabled">GitHub (coming soon)</span>`;
    const liveLink = project.live
      ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer">Live →</a>`
      : `<span class="link-disabled">Live (coming soon)</span>`;

    const card = document.createElement("div");
    card.className = "project-card card-hidden";
    card.dataset.category = project.category;
    card.innerHTML = `
      <div class="card-img">
        <img src="${project.img}" alt="${project.title} screenshot"
          onerror="this.parentElement.innerHTML='<div class=\\'card-img-placeholder\\'><span>📊</span><span>Screenshot coming soon</span></div>'"
        >
      </div>
      <div class="card-info">
        <div class="card-num">${project.num}</div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.desc}</p>
        <div class="card-tags">${project.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="card-links">
          ${githubLink}
          ${liveLink}
        </div>
      </div>`;
    return card;
  }

  /**
   * Rebuild deck for the current filter
   */
  function buildDeck(filter) {
    deck =
      filter === "all"
        ? [...PROJECTS]
        : PROJECTS.filter((p) => p.category === filter);
    idx = 0;
    viewport.innerHTML = "";
    dotsWrap.innerHTML = "";

    deck.forEach((project, i) => {
      const card = makeCard(project);
      if (i === 0) card.className = "project-card card-current";
      viewport.appendChild(card);

      const dot = document.createElement("button");
      dot.className = "deck-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("aria-label", `Go to project ${i + 1}`);
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
    });

    updateUI();
  }

  /**
   * Update counter, dots, and button states
   */
  function updateUI() {
    if (counterEl) counterEl.textContent = idx + 1;
    if (totalEl) totalEl.textContent = deck.length;
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === deck.length - 1;
    document.querySelectorAll(".deck-dot").forEach((d, i) => {
      d.classList.toggle("active", i === idx);
    });
  }

  /**
   * Animate transition between cards
   */
  function goTo(newIdx) {
    if (isAnimating || newIdx === idx) return;
    isAnimating = true;

    const cards = viewport.querySelectorAll(".project-card");
    const outCard = cards[idx];
    const inCard = cards[newIdx];
    const goingForward = newIdx > idx;

    inCard.className = `project-card ${goingForward ? "card-enter-right" : "card-enter-left"}`;

    // Force reflow to ensure initial state is painted
    void inCard.offsetWidth;

    outCard.className = `project-card ${goingForward ? "card-exit-left" : "card-exit-right"}`;
    inCard.className = "project-card card-current";

    idx = newIdx;
    updateUI();

    setTimeout(() => {
      outCard.className = "project-card card-hidden";
      isAnimating = false;
    }, 460);
  }

  function next() {
    if (idx < deck.length - 1) goTo(idx + 1);
  }

  function prev() {
    if (idx > 0) goTo(idx - 1);
  }

  // Navigation controls
  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });

  // Touch/swipe support
  let dragStart = null;

  viewport.addEventListener("mousedown", (e) => {
    dragStart = e.clientX;
  });

  viewport.addEventListener(
    "touchstart",
    (e) => {
      dragStart = e.touches[0].clientX;
    },
    { passive: true }
  );

  viewport.addEventListener("mouseup", (e) => {
    if (dragStart === null) return;
    const delta = e.clientX - dragStart;
    if (delta < -50) next();
    else if (delta > 50) prev();
    dragStart = null;
  });

  viewport.addEventListener("touchend", (e) => {
    if (dragStart === null) return;
    const delta = e.changedTouches[0].clientX - dragStart;
    if (delta < -50) next();
    else if (delta > 50) prev();
    dragStart = null;
  });

  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      buildDeck(btn.dataset.filter);
    });
  });

  // Initial build
  buildDeck("all");
}
