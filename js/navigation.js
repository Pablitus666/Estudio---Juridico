/**
 * Módulo de navegación: menú móvil, scroll del header y estado activo
 * de los enlaces según la sección visible.
 */
import { SITE_CONFIG } from "./config.js";

export function initNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  const links = [...document.querySelectorAll(".primary-nav a[href^='#']")];

  // Cerrar menú y resetar estado del botón
  const close = () => {
    nav?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Abrir menú");
    document.body.classList.remove("menu-open");
  };

  // Toggle del menú móvil
  toggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    document.body.classList.toggle("menu-open", isOpen);
  });

  // Cerrar al hacer clic en un enlace interno
  links.forEach((a) => {
    a.addEventListener("click", close);
  });

  // Cerrar con tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // Cambiar estilo del header al hacer scroll
  const onScroll = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > SITE_CONFIG.scrollThreshold);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Resaltar enlace activo según sección visible (IntersectionObserver)
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            links.forEach((a) => {
              const isActive = a.hash === `#${id}`;
              a.classList.toggle("is-active", isActive);
              if (isActive) {
                a.setAttribute("aria-current", "page");
              } else {
                a.removeAttribute("aria-current");
              }
            });
          }
        });
      },
      { rootMargin: "-30% 0% -55% 0%" }
    );

    document.querySelectorAll("main section[id]").forEach((section) => {
      observer.observe(section);
    });
  }
}