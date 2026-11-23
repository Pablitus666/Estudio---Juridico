/**
 * Módulo sencillo para actualizar el año del copyright en el pie de página.
 */
export function initYear() {
  const yearEl = document.querySelector("#current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}