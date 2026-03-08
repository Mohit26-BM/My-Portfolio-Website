/**
 * terminal.js
 * Terminal typing animation with syntax highlighting
 * Cycles through code snippets with live output simulation
 */

const CODE_SNIPPETS = [
  {
    code: `# Prime Checker\nis_prime = lambda n: n > 1 and all(n % i for i in range(2, int(n**0.5) + 1))\nprint(f"17 is prime: {is_prime(17)}")`,
    output: `<div class="output-success">✓ Result: <span class="metric-value">True</span></div><div class="output-metric">Checked in O(√n)</div>`,
  },
  {
    code: `# Classification\nfrom sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier(n_estimators=100)\nmodel.fit(X_train, y_train)\naccuracy = model.score(X_test, y_test)\nprint(f"Accuracy: {accuracy:.1%}")`,
    output: `<div class="output-success">✓ Training done</div><div class="output-metric">Accuracy: <span class="metric-value">94.3%</span></div>`,
  },
  {
    code: `# Data Visualization\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nsns.scatterplot(data=df, x="age", y="income")\nplt.savefig("viz.png", dpi=300)\nprint("Chart saved")`,
    output: `<div class="output-success">✓ Visualization created</div><div class="output-metric">File: <span class="metric-value">viz.png</span> (DPI: 300)</div>`,
  },
  {
    code: `# Flask API\nfrom flask import Flask, jsonify\napp = Flask(__name__)\n@app.route('/predict', methods=['POST'])\ndef predict():\n    return jsonify({'result': model.predict(data)})\napp.run()`,
    output: `<div class="output-success">✓ Server ready</div><div class="output-metric">Running: <span class="metric-value">localhost:5000</span></div>`,
  },
  {
    code: `# NLP Processing\nfrom transformers import pipeline\nsentiment = pipeline('sentiment-analysis')\nresult = sentiment("Great product!")\nprint(f"{result[0]['label']}: {result[0]['score']:.1%}")`,
    output: `<div class="output-success">✓ Processed</div><div class="output-metric">Sentiment: <span class="metric-value">POSITIVE 99.2%</span></div>`,
  },
];

const TIMING = {
  typeSpeed: 30,
  pauseAfterCode: 800,
  displayOutputTime: 3500,
  pauseBeforeNext: 1000,
  startDelay: 1500,
};

export function initTerminal() {
  const terminalCode = document.getElementById("terminalCode");
  const terminalOutput = document.getElementById("terminalOutput");

  if (!terminalCode || !terminalOutput) return;

  let currentSnippet = 0;
  let charIndex = 0;

  /**
   * Clear terminal display
   */
  function clearTerminal() {
    terminalCode.innerHTML = "";
    terminalOutput.innerHTML = "";
    charIndex = 0;
  }

  /**
   * Type out code character by character
   */
  function typeCode() {
    const snippet = CODE_SNIPPETS[currentSnippet];
    const lines = snippet.code.split("\n");
    let fullText = lines.join("\n");

    if (charIndex < fullText.length) {
      const char = fullText[charIndex];

      if (char === "\n") {
        terminalCode.innerHTML += "<br>";
      } else {
        terminalCode.innerHTML += char;
      }

      charIndex++;
      setTimeout(typeCode, TIMING.typeSpeed);
    } else {
      // Finished typing
      applySyntaxHighlighting();
      setTimeout(showOutput, TIMING.pauseAfterCode);
    }
  }

  /**
   * Apply syntax highlighting to code
   */
  function applySyntaxHighlighting() {
    let html = terminalCode.innerHTML;

    // Keywords
    html = html.replace(
      /\b(from|import|def|return|class|if|else|for|while|in|print|with)\b/g,
      '<span class="syntax-keyword">$1</span>'
    );

    // Strings
    html = html.replace(
      /(['"])(.*?)\1/g,
      '<span class="syntax-string">$1$2$1</span>'
    );

    // Comments
    html = html.replace(
      /(#.*?)(<br>|$)/g,
      '<span class="syntax-comment">$1</span>$2'
    );

    // Numbers
    html = html.replace(/\b(\d+\.?\d*)\b/g, '<span class="syntax-number">$1</span>');

    // Function calls
    html = html.replace(
      /\b([a-zA-Z_][a-zA-Z0-9_]*)(?=\()/g,
      '<span class="syntax-function">$1</span>'
    );

    terminalCode.innerHTML = html;
  }

  /**
   * Display output and animate any progress bars/charts
   */
  function showOutput() {
    const snippet = CODE_SNIPPETS[currentSnippet];
    terminalOutput.innerHTML = snippet.output;
    terminalOutput.style.display = "block";

    // Animate progress bars/charts
    setTimeout(() => {
      const fills = terminalOutput.querySelectorAll(".progress-fill, .bar-fill");
      fills.forEach((fill) => fill.classList.add("animate"));
    }, 100);

    setTimeout(nextSnippet, TIMING.displayOutputTime);
  }

  /**
   * Move to next code snippet
   */
  function nextSnippet() {
    currentSnippet = (currentSnippet + 1) % CODE_SNIPPETS.length;
    clearTerminal();
    setTimeout(typeCode, TIMING.pauseBeforeNext);
  }

  // Start the animation loop
  setTimeout(typeCode, TIMING.startDelay);
}
