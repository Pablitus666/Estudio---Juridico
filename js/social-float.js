/**
 * Módulo de redes sociales flotantes.
 * Muestra/oculta el panel lateral de redes sociales según el scroll.
 */
export function initSocialFloat() {
  const panel = document.querySelector("#social-float");
  if (!panel) return;

  let ticking = false;

  const update = () => {
    const scrolled = window.scrollY > 300;
    panel.classList.toggle("is-visible", scrolled);
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  });

  // Estado inicial
  update();
}