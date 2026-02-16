# Personal website

React single-page site (Vite + React).

- **Run locally:** `npm run dev`
- **Build:** `npm run build`
- **Preview build:** `npm run preview`

Edit content in `src/components/` and styles in `src/index.css`. Put the CV PDF in `public/` and icon assets in `public/assets/icons/`.

## Hosting on GitHub Pages

1. In **Settings → Pages**, set **Source** to **GitHub Actions**.
2. Push to `main`; the workflow builds and deploys the React app. The site will be at `https://<username>.github.io/personal-website/` (base path is set in `vite.config.js` for this repo name).
3. To use a different repo name, change `'/personal-website/'` in `vite.config.js` to `'/<your-repo-name>/'`.

The `public/.nojekyll` file is included in the build so GitHub serves the site without Jekyll.
