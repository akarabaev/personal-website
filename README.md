# Personal website

Single-page site. No build step.

- Replace placeholder text in `index.html` with your name, short bio, experience, skills, projects, and Medium links.
- Add your photo as `photo.jpg` in this folder (square works best; it's shown as a circle).
- Add your CV as `cv.pdf` in this folder (same level as `index.html`).

Open `index.html` in a browser or use a local server, e.g. `python3 -m http.server 8000` then visit http://localhost:8000.

## Hosting on GitHub Pages

1. Push this repo to GitHub (you already have a remote; use `git push`).
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch **main** and folder **/ (root)**. Save.
5. After a minute or two, the site is at:
   - **Project site:** `https://<username>.github.io/<repo-name>/`
   - **User/org site:** if the repo is named `<username>.github.io`, then `https://<username>.github.io/`

The `.nojekyll` file in the root tells GitHub to serve the files as-is (no Jekyll). All links use relative paths, so the single-page app works on both project and user Pages.
