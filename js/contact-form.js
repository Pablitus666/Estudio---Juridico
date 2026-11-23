/**
 * Módulo del formulario de contacto.
 * Valida los campos y abre WhatsApp con el mensaje prellenado.
 * No envía datos a ningún servidor.
 */
import { SITE_CONFIG, buildWhatsAppUrl, buildContactMessage } from "./config.js";

export function initContactForm() {
  const form = document.querySelector("#contact-form");
  const error = document.querySelector("#form-error");
  const topicSelect = document.querySelector("#contact-topic");
  if (!form) return;

  // Función para seleccionar un área en el desplegable
  function selectArea(area) {
    if (!topicSelect || !area) return;
    for (const option of topicSelect.options) {
      if (option.value === area) {
        option.selected = true;
        topicSelect.dispatchEvent(new Event("change"));
        break;
      }
    }
  }

  // Leer área preseleccionada desde sessionStorage (al cargar la página)
  const preselectedArea = sessionStorage.getItem("preselectedArea");
  if (preselectedArea) {
    selectArea(preselectedArea);
    sessionStorage.removeItem("preselectedArea");
  }

  // Capturar clics en enlaces "Consultar" de las tarjetas de práctica
  document.querySelectorAll("a[data-area]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const area = link.getAttribute("data-area");
      if (area) {
        sessionStorage.setItem("preselectedArea", area);
        // Seleccionar inmediatamente en el desplegable
        selectArea(area);
      }
      // Scroll suave a la sección de contacto
      const contactoSection = document.querySelector("#contacto");
      if (contactoSection) {
        contactoSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    error.textContent = "";

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const topic = String(data.get("topic") || "").trim();
    const message = String(data.get("message") || "").trim();

    // Validación
    if (name.length < 2 || !topic || message.length < 8) {
      error.textContent =
        "Completa tu nombre, selecciona un área y escribe un mensaje de al menos 8 caracteres.";
      return;
    }

    // Abrir WhatsApp con el mensaje
    const body = buildContactMessage({ name, topic, message });
    const url = buildWhatsAppUrl(body);

    window.open(url, "_blank", "noopener,noreferrer");
  });
}