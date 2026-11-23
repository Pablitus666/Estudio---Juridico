/**
 * Carrusel de profesionales - versión simple y robusta
 * Paso dinámico basado en dimensiones reales de tarjetas y separación.
 * Indicadores (dots) funcionales y sincronizados con botones de navegación.
 */
export function initCarousel() {
  const track = document.querySelector(".team-carousel-track");
  const prev = document.querySelector(".carousel-prev");
  const next = document.querySelector(".carousel-next");
  const dots = document.querySelectorAll(".carousel-dot");

  if (!track || !prev || !next) {
    return;
  }

  const cards = track.querySelectorAll(".team-card");
  if (cards.length === 0) return;

  let index = 0;

  // Obtener el gap real del track (CSS gap: 20px)
  const trackStyle = getComputedStyle(track);
  const gap = parseFloat(trackStyle.gap) || 20;

  // Calcular el paso dinámicamente: ancho de tarjeta + gap
  function getStep() {
    if (cards.length === 0) return 0;
    return cards[0].offsetWidth + gap;
  }

  // Cantidad máxima de índice permitida (una tarjeta a la vez)
  function getMaxIndex() {
    return cards.length - 1;
  }

  function move() {
    const step = getStep();
    track.style.transform = "translateX(-" + (index * step) + "px)";
  }

  function updateDots() {
    dots.forEach((dot, i) => {
      const isActive = i === index;
      dot.setAttribute("aria-selected", isActive ? "true" : "false");
      dot.classList.toggle("is-active", isActive);
    });
  }

  function updateButtons() {
    const maxIndex = getMaxIndex();
    prev.disabled = index <= 0;
    next.disabled = index >= maxIndex;
    prev.setAttribute("aria-disabled", index <= 0);
    next.setAttribute("aria-disabled", index >= maxIndex);
  }

  function goTo(newIndex) {
    const maxIndex = getMaxIndex();
    if (newIndex < 0) newIndex = 0;
    if (newIndex > maxIndex) newIndex = maxIndex;
    index = newIndex;
    move();
    updateDots();
    updateButtons();
  }

  next.addEventListener("click", function (e) {
    e.preventDefault();
    goTo(index + 1);
  });

  prev.addEventListener("click", function (e) {
    e.preventDefault();
    goTo(index - 1);
  });

  // Indicadores (dots) funcionales
  dots.forEach((dot, i) => {
    dot.addEventListener("click", function (e) {
      e.preventDefault();
      goTo(i);
    });
    // Accesibilidad por teclado: Enter o Espacio activan el dot
    dot.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        goTo(i);
      }
    });
  });

  // Recalcular paso al cambiar el tamaño de la ventana
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      // Ajustar índice si el nuevo máximo es menor al actual
      const maxIndex = getMaxIndex();
      if (index > maxIndex) {
        goTo(maxIndex);
      } else {
        move();
        updateButtons();
      }
    }, 150);
  });

  // Inicializar
  goTo(0);
}
