# Aula Abierta · Iniciación a JavaScript

Web educativa sencilla (HTML, CSS y JavaScript puro, sin dependencias) con:

- **Inicio** con la presentación.
- **Recursos**: PDF y vídeos, con filtro por tipo y botón de **Plan B**.
- **Foro** con [giscus](https://giscus.app/es) (usa GitHub Discussions).

## Publicar en GitHub Pages
1. Sube todo el contenido a la raíz del repositorio `web-educativa`.
2. En **Settings → Pages**: *Deploy from a branch* → rama `master` → carpeta `/ (root)` → Save.
3. En unos minutos estará en `https://CM-CA.github.io/web-educativa/`.

## Cómo añadir recursos
Edita `js/recursos-data.js`. Cada recurso tiene enlace principal (`url`) y alternativo (`planB`).
Las copias propias van en `assets/`.

## Activar el foro
1. **Settings → Features → Discussions**.
2. Instala la app de giscus: https://github.com/apps/giscus
3. En https://giscus.app/es introduce `CM-CA/web-educativa`, elige la categoría *Q&A* y copia
   `data-repo-id` y `data-category-id` en `foro.html`.

## Pruebas
Sigue `PRUEBAS.md` y ejecuta `node scripts/comprobar-enlaces.js`.
