document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const navLinks = [...document.querySelectorAll(".section-nav a, .project-nav nav a")];
const sections = navLinks.map((link) => document.querySelector(link.hash)).filter(Boolean);
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-15% 0px -60% 0px", threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}

const galleryControls = document.querySelector("#gallery-controls");
if (galleryControls) {
  const updateGallery = () => {
    const selected = galleryControls.querySelector("input:checked").value;
    document.querySelectorAll("[data-gallery]").forEach((panel) => {
      panel.hidden = panel.dataset.gallery !== selected;
    });
  };
  galleryControls.hidden = false;
  galleryControls.addEventListener("change", updateGallery);
  updateGallery();
}

const resultsControls = document.querySelector("#results-controls");
if (resultsControls) {
  const updateResults = () => {
    const selected = resultsControls.querySelector("input[name=dataset]:checked").value;
    const detector = document.querySelector("#detector-filter").value;
    document.querySelectorAll("[data-dataset]").forEach((panel) => {
      panel.hidden = panel.dataset.dataset !== selected;
      panel.querySelectorAll("[data-detector]").forEach((row) => {
        row.hidden = detector !== "all" && row.dataset.detector !== detector;
      });
    });
  };
  resultsControls.hidden = false;
  resultsControls.addEventListener("change", updateResults);
  updateResults();
}

const copyButton = document.querySelector("#copy-citation");
if (copyButton) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    const code = document.querySelector("#bibtex");
    const status = document.querySelector("#copy-status");
    try {
      await navigator.clipboard.writeText(code.textContent);
      status.textContent = "Citation copied.";
    } catch {
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = "Automatic copy is unavailable. Citation selected for copying.";
    }
  });
}

const figureDialog = document.querySelector(".figure-dialog");
if (figureDialog && typeof figureDialog.showModal === "function") {
  let previousFocus;
  document.querySelectorAll("[data-zoom]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      previousFocus = link;
      const figure = figureDialog.querySelector("#expanded-figure");
      figure.src = link.href;
      figure.alt = link.querySelector("img").alt;
      figureDialog.querySelector("#figure-original").href = link.href;
      figureDialog.showModal();
    });
  });
  figureDialog.querySelector("#close-figure").addEventListener("click", () => figureDialog.close());
  figureDialog.addEventListener("click", (event) => {
    if (event.target !== figureDialog) return;
    const box = figureDialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) figureDialog.close();
  });
  figureDialog.addEventListener("close", () => previousFocus?.focus({ preventScroll: true }));
}
