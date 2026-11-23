/**
 * Configuración centralizada del sitio DLS Asociados Abogados.
 * Todos los datos de contacto, redes sociales y constantes del sitio
 * se definen aquí para facilitar el mantenimiento.
 */
export const SITE_CONFIG = Object.freeze({
  // Datos del estudio
  name: "DLS Asociados Abogados",
  founder: "Deymar Limachi Sarabia",
  whatsappNumber: "59172948935",
  email: "deydls@gmail.com",
  address: "Av. Domingo Paz N.º E-0275, entre calles Suipacha y Méndez, Tarija, Bolivia",
  city: "Tarija",
  country: "Bolivia",

  // Horarios
  openingHours: ["Lunes a sábado 08:00–12:00", "Lunes a sábado 15:00–19:00"],

  // Áreas de práctica
  practiceAreas: [
    "Derecho Penal",
    "Derecho Civil",
    "Derecho de Familia",
    "Niñez y Adolescencia",
    "Derecho Laboral",
    "Derecho Administrativo",
    "Derecho Constitucional",
    "Derecho Empresarial",
    "Otros servicios",
  ],

  // Redes sociales (usernames / handles)
  social: {
    facebook: "",
    instagram: "",
    whatsapp: "59172948935",
    telegram: "",
    tiktok: "",
  },

  // URLs
  mapsQuery: "Av.+Domingo+Paz+E-0275%2C+Tarija%2C+Bolivia",

  // Rutas de assets
  assets: {
    logo: "assets/logo/logo portada.webp",
    isotipo: "assets/logo/logo-isotipo.svg",
    favicon: "assets/favicon.svg",
  },

  // Umbrales de animación
  revealThreshold: 0.12,
  scrollThreshold: 12,
});

/**
 * Genera el enlace de WhatsApp con un mensaje predefinido.
 * @param {string} text - Texto del mensaje a enviar.
 * @returns {string} URL completa de WhatsApp.
 */
export function buildWhatsAppUrl(text) {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Genera el cuerpo del mensaje del formulario de contacto.
 * @param {Object} data - Datos del formulario.
 * @returns {string} Mensaje formateado.
 */
export function buildContactMessage(data) {
  const { name, topic, message } = data;
  return [
    `Hola, quisiera contactar con ${SITE_CONFIG.name}.`,
    "",
    `Nombre: ${name}`,
    `Área de consulta: ${topic}`,
    `Mensaje: ${message}`,
    "",
    "Enviado desde el sitio web.",
  ].join("\n");
}