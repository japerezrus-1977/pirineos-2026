# Pirineos 2026 · Diario de viaje

Álbum web del viaje de montaña a los Pirineos (26–29 de julio de 2026): 43 fotos seleccionadas de entre las 176 originales, organizadas día a día con una breve descripción de cada una.

## Ver la web en local

Al ser un sitio estático, basta con abrir `index.html` en el navegador, o servirlo con cualquier servidor estático, por ejemplo:

```
python3 -m http.server 8000
```

y abrir `http://localhost:8000`.

## Publicarla en GitHub Pages

**Opción A — por terminal** (si tienes `git` y `gh` instalados):

```
git init
git add .
git commit -m "Diario de viaje: Pirineos 2026"
gh repo create TU-USUARIO/pirineos-2026 --public --source=. --remote=origin --push
```

Luego activa Pages en **Settings → Pages → Deploy from a branch → main → / (root)**.

**Opción B — desde el navegador, sin terminal:**

1. Crea un repositorio nuevo en github.com (público, sin README).
2. En la página del repo, usa **Add file → Upload files** y arrastra todo el contenido de esta carpeta (`index.html`, `css/`, `js/`, `img/`).
3. Confirma el commit.
4. Activa **Settings → Pages → Deploy from a branch → main → / (root)**.

La web quedará en `https://TU-USUARIO.github.io/pirineos-2026/`.

## Estructura

```
index.html        página principal (generada)
css/style.css      estilos
js/main.js         navegación y visor de fotos (lightbox)
img/dia1..dia4/    fotos optimizadas para web, una carpeta por día
```
