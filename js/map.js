/**
 * Módulo del mapa OpenStreetMap con Leaflet.
 * Muestra un marcador exacto en la oficina de DLS Asociados Abogados, Tarija, Bolivia.
 */
export function initMap() {
  const mapEl = document.getElementById("mapa-oficina");
  if (!mapEl) return;

  // Coordenadas exactas de la oficina
  const oficinaCoords = [-21.5323408, -64.7299151];

  // Inicializar el mapa
  const map = L.map("mapa-oficina", {
    center: oficinaCoords,
    zoom: 17,
    zoomControl: true,
    scrollWheelZoom: false,
  });

  // Capa base de OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  // Marcador con popup de la oficina
  const marker = L.marker(oficinaCoords).addTo(map);
  marker.bindPopup(
    "<b>DLS Asociados Abogados</b><br>" +
    "Av. Domingo Paz N.º E-0275<br>" +
    "Entre calles Suipacha y Méndez<br>" +
    "Tarija, Bolivia"
  ).openPopup();

  // Ajustar altura y tamaño del mapa al inicializar
  mapEl.style.height = "420px";
  map.invalidateSize();
}