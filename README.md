# Portafolio — Miguel Suárez

Landing page para el servicio de creación de webs para restaurantes y negocios locales.

Sitio estático (HTML/CSS/JS puro, sin build tools), bilingüe ES/EN con toggle en el header.

## Estructura

```
index.html
css/styles.css
js/main.js
.github/workflows/deploy.yml   ← despliegue automático a GitHub Pages
```

## Pendientes antes de publicar

1. ~~**Formulario de contacto (Formspree)**~~ — ya configurado (`https://formspree.io/f/mnqyejpo`).
2. **Activar GitHub Pages:** en el repo, ve a `Settings → Pages → Build and deployment → Source` y
   selecciona **GitHub Actions**. El workflow en `.github/workflows/deploy.yml` se encarga del resto
   en cada push a la rama por defecto (`claude/portfolio-landing-page-jvka43`).

## Desarrollo local

No requiere instalación. Abre `index.html` directamente en el navegador, o sirve la carpeta con
cualquier servidor estático (ej. `npx serve .`).
