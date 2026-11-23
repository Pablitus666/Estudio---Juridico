/**
 * Punto de entrada del sitio DLS Asociados Abogados.
 * Inicializa todos los módulos de la aplicación una vez el DOM esté listo.
 */
import { initNavigation } from "./navigation.js";
import { initReveal } from "./reveal.js";
import { initContactForm } from "./contact-form.js";
import { initCarousel } from "./carousel.js";
import { initSocialFloat } from "./social-float.js";
import { initYear } from "./year.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initReveal();
  initContactForm();
  initCarousel();
  initSocialFloat();
  initYear();
});