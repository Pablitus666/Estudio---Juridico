# DLS Asociados Abogados — Sitio institucional

Sitio web estático, escalable, totalmente modular y de nivel profesional para **DLS Asociados Abogados**, Tarija, Bolivia.

## Estructura del proyecto

```
DLS-Asociados-Abogados/
├── index.html              # HTML semántico, SEO y datos estructurados (Schema.org)
├── README.md
│
├── assets/                 # Imágenes del sitio (usar exclusivamente esta carpeta)
│   ├── favicon.svg
│   ├── logo/
│   │   ├── logo portada.webp
│   │   └── logo-isotipo.svg
│   ├── Redes Sociales/
│   │   ├── facebook.svg
│   │   ├── instagram.svg
│   │   ├── whatsapp.svg
│   │   ├── telegram.svg
│   │   └── tiktok.svg
│   └── images/             # Imágenes de contenido (hero, equipo, etc.)
│       ├── moon.png
│       └── sun.png
│
├── css/                    # Hojas de estilo modulares
│   ├── tokens.css          # Design tokens: colores, tipografía, breakpoints, sombras
│   ├── base.css            # Reset, tipografía, utilidades, botones, accesibilidad
│   ├── components.css      # Componentes: header, hero, áreas, equipo, contacto, footer
│   └── responsive.css      # Adaptación tableta y móvil
│
├── js/                     # Módulos JavaScript (ES modules)
│   ├── main.js             # Punto de entrada; inicializa todos los módulos
│   ├── config.js           # Configuración centralizada (contacto, redes, áreas)
│   ├── navigation.js       # Menú móvil, header scroll, enlaces activos
│   ├── reveal.js           # Animaciones al hacer scroll (IntersectionObserver)
│   ├── contact-form.js     # Validación y enlace a WhatsApp
│   ├── social-float.js     # Panel flotante de redes sociales
│   └── year.js             # Año dinámico del copyright
│
└── images utilitarios/     # ⚠️ SOLO imágenes utilitarias. NO se usan en el sitio.
```

## Características técnicas

- **Arquitectura modular:** CSS separado por responsabilidades (tokens, base, componentes, responsive). JavaScript en módulos ES independientes.
- **Design tokens:** Colores, tipografía, espaciado y breakpoints centralizados en `css/tokens.css`.
- **Tipografía profesional:** Cormorant Garamond para títulos y Inter para cuerpo, con escala tipográfica fluida (`clamp`).
- **Diseño responsive:** Breakpoints en 1024px, 820px y 540px con menú móvil y diseños adaptados.
- **Accesibilidad:** Skip link, `aria-*`, focus visible, contrastes WCAG, navegación por teclado.
- **SEO:** Meta etiquetas, canonical, Open Graph listo, datos estructurados Schema.org (`LegalService`).
- **Modo oscuro:** Soporte para `prefers-color-scheme: dark` mediante variables CSS.
- **Preferencias de movimiento:** Respeta `prefers-reduced-motion`.
- **Iconos:** SVG de redes sociales desde `assets/Redes Sociales/`.
- **WhatsApp flotante:** Botón de contacto directo y panel de redes sociales lateral.

## Ejecutar localmente

Los módulos JavaScript deben servirse por HTTP. En PowerShell:

```powershell
cd D:\Estudio Juridico\DLS-Asociados-Abogados
py -m http.server 8080
```

Abrir `http://localhost:8080`.

## Contacto

Los datos están centralizados en `js/config.js`. El formulario no guarda ni envía datos a un servidor: prepara un mensaje en WhatsApp para revisión manual.

## Antes de publicar

1. Validar las descripciones de servicios con el titular del estudio.
2. Reemplazar los degradados de fondo por fotografías autorizadas del estudio, edificio y equipo (colocarlas en `assets/images/`).
3. Añadir los enlaces reales de redes sociales en `index.html` y `js/config.js`.
4. Confirmar la ubicación exacta del mapa de Google.
5. Añadir aviso de privacidad y verificar el tratamiento de consultas.
6. Probar en navegadores y dispositivos reales.
7. Reemplazar la marca tipográfica temporal por el logotipo oficial del cliente cuando se disponga del archivo original.