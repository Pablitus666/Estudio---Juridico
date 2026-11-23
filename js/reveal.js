/**
 * Módulo de animaciones de entrada con IntersectionObserver.
 * Los elementos con clase .reveal se animan al entrar al viewport.
 * Respetua prefers-reduced-motion.
 */
import { SITE_CONFIG } from "./config.js";

export function initReveal() {
  const nodes = document.querySelectorAll(".reveal");

  // Si no hay IntersectionObserver o el usuario prefiere sin movimiento,
  // mostrar todos los elementos de inmediato.
  const prefersReduced =
    matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || prefersReduced) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: SITE_CONFIG.revealThreshold }
  );

  nodes.forEach((node) => observer.observe(node));
}