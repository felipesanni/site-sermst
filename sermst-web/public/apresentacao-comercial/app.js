(() => {
  const deck = document.querySelector("#presentation");
  const slides = [...document.querySelectorAll(".slide")];
  const dots = [...document.querySelectorAll(".progress-dots button")];
  const currentSlide = document.querySelector("#current-slide");
  const announcement = document.querySelector("#announcement");
  const previousButton = document.querySelector("#prev-slide");
  const nextButton = document.querySelector("#next-slide");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeIndex = 0;
  let touchStartX = null;
  let touchStartY = null;

  const number = (value) => String(value + 1).padStart(2, "0");

  function announce(index) {
    const title = slides[index]?.dataset.title || "Seção";
    currentSlide.textContent = number(index);
    announcement.textContent = `${number(index)} de ${slides.length}: ${title}`;
    dots.forEach((dot, dotIndex) => {
      dot.setAttribute("aria-current", String(dotIndex === index));
    });
    previousButton.disabled = index === 0;
    nextButton.disabled = index === slides.length - 1;
    nextButton.setAttribute("aria-label", index === slides.length - 1 ? "Última tela" : "Próxima tela");
    if (window.location.hash !== `#${slides[index].id}`) {
      history.replaceState(null, "", `#${slides[index].id}`);
    }
  }

  function goTo(index, options = {}) {
    const targetIndex = Math.max(0, Math.min(slides.length - 1, index));
    activeIndex = targetIndex;
    slides[targetIndex].scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    announce(targetIndex);
    if (options.focus) slides[targetIndex].focus({ preventScroll: true });
  }

  function next() { goTo(activeIndex + 1); }
  function previous() { goTo(activeIndex - 1); }

  dots.forEach((dot) => dot.addEventListener("click", () => goTo(Number(dot.dataset.go), { focus: true })));
  document.querySelectorAll("[data-go]").forEach((element) => {
    if (element.closest(".progress-dots")) return;
    element.addEventListener("click", () => goTo(Number(element.dataset.go), { focus: true }));
  });
  document.querySelectorAll("[data-next]").forEach((element) => element.addEventListener("click", next));
  previousButton.addEventListener("click", previous);
  nextButton.addEventListener("click", next);

  document.querySelectorAll(".section-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      const index = slides.findIndex((slide) => `#${slide.id}` === link.getAttribute("href"));
      if (index >= 0) goTo(index, { focus: true });
      link.closest("details").removeAttribute("open");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;
    if (["ArrowDown", "ArrowRight", "PageDown", " "].includes(event.key)) { event.preventDefault(); next(); }
    if (["ArrowUp", "ArrowLeft", "PageUp"].includes(event.key)) { event.preventDefault(); previous(); }
    if (event.key === "Home") { event.preventDefault(); goTo(0); }
    if (event.key === "End") { event.preventDefault(); goTo(slides.length - 1); }
  });

  deck.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
    touchStartY = event.changedTouches[0].clientY;
  }, { passive: true });
  deck.addEventListener("touchend", (event) => {
    if (touchStartX === null || touchStartY === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX;
    const deltaY = event.changedTouches[0].clientY - touchStartY;
    touchStartX = null;
    touchStartY = null;
    if (Math.abs(deltaY) < 36 || Math.abs(deltaY) < Math.abs(deltaX)) return;
    if (deltaY < 0) next(); else previous();
  }, { passive: true });

  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const index = slides.indexOf(visible.target);
    if (index >= 0 && index !== activeIndex) { activeIndex = index; announce(index); }
  }, { threshold: [0.55, 0.75] });
  slides.forEach((slide) => observer.observe(slide));

  const counters = new WeakSet();
  function animateCounter(element) {
    if (counters.has(element)) return;
    counters.add(element);
    const target = Number(element.dataset.count || 0);
    const suffix = element.dataset.suffix || "";
    if (reducedMotion) { element.textContent = `${target.toLocaleString("pt-BR")}${suffix}`; return; }
    const duration = 1000;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${Math.round(target * eased).toLocaleString("pt-BR")}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const metricObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.querySelectorAll("[data-count]").forEach(animateCounter);
    });
  }, { threshold: 0.65 });
  document.querySelectorAll(".slide").forEach((slide) => metricObserver.observe(slide));

  document.querySelectorAll("[data-accordion]").forEach((accordion) => {
    const trigger = accordion.querySelector(".accordion__trigger");
    trigger.addEventListener("click", () => {
      const open = accordion.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", String(open));
    });
  });

  const lightbox = document.querySelector("#lightbox");
  const lightboxImage = document.querySelector("#lightbox-image");
  const lightboxCaption = document.querySelector("#lightbox-caption");
  const closeLightbox = () => { if (lightbox.open) lightbox.close(); };
  document.querySelectorAll("[data-lightbox]").forEach((button) => {
    button.addEventListener("click", () => {
      lightboxImage.src = button.dataset.lightbox;
      lightboxImage.alt = button.querySelector("img")?.alt || "Imagem da unidade";
      lightboxCaption.textContent = button.dataset.caption || "";
      if (typeof lightbox.showModal === "function") lightbox.showModal();
    });
  });
  document.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });

  const hash = window.location.hash.slice(1);
  const initialIndex = slides.findIndex((slide) => slide.id === hash);
  if (initialIndex >= 0) {
    activeIndex = initialIndex;
    window.setTimeout(() => slides[initialIndex].scrollIntoView({ behavior: "auto", block: "start" }), 0);
  }
  announce(initialIndex >= 0 ? initialIndex : 0);
})();
