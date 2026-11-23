# Sitio web DLS Asociados Abogados — versión 1.0

Primera versión del sitio web institucional del Estudio Jurídico DLS Asociados Abogados, ubicado en Tarija, Bolivia.

Este sitio estático presenta la identidad institucional, las áreas de práctica jurídica, el equipo de profesionales y los canales de contacto del estudio.

## Contenido del sitio

- **Página de inicio:** presentación del estudio, hero con logo y llamada a acción por WhatsApp.
- **El estudio:** información institucional y fotografía de la oficina.
- **Áreas de práctica:** Derecho Penal, Civil, Familia, Niñez y Adolescencia, Laboral, Administrativo, Constitucional y Empresarial.
- **Profesionales:** carrusel con fotografías y nombres del titular y asociados del estudio.
- **Contacto:** formulario que prepara un mensaje para WhatsApp, datos de contacto y ubicación en Google Maps.
- **Páginas legales:** Términos y Condiciones de Uso y Política de Privacidad.

## Archivos principales

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Página principal con todas las secciones del sitio. |
| `terms-of-service.html` | Términos y Condiciones de Uso. |
| `privacy-policy.html` | Política de Privacidad. |
| `css/tokens.css` | Variables de diseño: colores, tipografía, breakpoints, sombras. |
| `css/base.css` | Reset, tipografía, utilidades, botones, accesibilidad. |
| `css/components.css` | Componentes: header, hero, áreas, equipo, contacto, footer. |
| `css/responsive.css` | Adaptación para tablet y móvil. |
| `js/main.js` | Punto de entrada; inicializa todos los módulos. |
| `js/navigation.js` | Menú móvil, scroll del header, enlaces activos. |
| `js/reveal.js` | Animaciones al hacer scroll (IntersectionObserver). |
| `js/contact-form.js` | Validación y enlace a WhatsApp. |
| `js/carousel.js` | Carrusel de profesionales con indicadores. |
| `js/social-float.js` | Panel flotante de redes sociales. |
| `js/year.js` | Año dinámico del copyright. |
| `js/map.js` | Módulo para mapa con Leaflet (no importado actualmente). |
| `js/theme.js` | Tema removido (conservado por compatibilidad). |
| `js/config.js` | Configuración centralizada: contacto, redes, áreas. |
| `sitemap.xml` | Mapa del sitio para motores de búsqueda. |
| `robots.txt` | Directivas de rastreo. |
| `_headers` | Encabezados de seguridad para despliegue en Netlify. |

## Recursos gráficos

- `assets/logo/logo-isotipo.svg` — isotipo del estudio.
- `assets/logo/logo portada.webp` — logo para hero y metadatos.
- `assets/logo/apple-touch-icon.png` — ícono para dispositivos Apple (180×180).
- `assets/images/equipo/` — fotografías de los 7 profesionales del equipo.
- `assets/images/oficina.webp` — fotografía de la oficina.
- `assets/images/mapa.webp` — imagen estática de ubicación.
- `assets/Redes Sociales/` — íconos de Facebook, Instagram, Telegram, TikTok, WhatsApp.

## Características técnicas

- **Arquitectura:** HTML5 semántico, CSS3 modular, JavaScript nativo (ES Modules).
- **Diseño:** tema oscuro permanente con paleta institucional (azul tinto, burdeo, piedra).
- **Tipografía:** Cormorant Garamond para títulos, Inter para cuerpo.
- **Responsive:** breakpoints en 1024px, 820px, 540px y 400px con menú móvil.
- **Accesibilidad:** skip link, atributos ARIA, focus visible, contraste WCAG AA, navegación por teclado, prefers-reduced-motion.
- **SEO:** meta etiquetas, Open Graph, Twitter Cards, canonical, JSON-LD (LegalService), sitemap.xml, robots.txt.
- **Imágenes:** formato WebP, lazy loading, dimensiones explícitas, srcset y sizes para tarjetas del equipo.
- **Formulario:** no envía datos a servidor; prepara mensaje para WhatsApp.

## Despliegue

Sitio estático listo para desplegar en Netlify, Vercel, GitHub Pages o cualquier servidor estático. No requiere compilación ni dependencias de servidor.

## Licencia

Este sitio es propiedad del Estudio Jurídico DLS Asociados Abogados, Tarija, Bolivia.
