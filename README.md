# Dhivya Dharshini — Portfolio

This is a lightweight, static portfolio site for Dhivya Dharshini. Open `index.html` to view locally.

## Preview locally

```bash
# from repo root
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a repository on GitHub (e.g. `dhivya-dharshini.github.io` for a user site).
2. Push this project to the repository.
3. In GitHub repository Settings → Pages, set the source to the `main` branch and root folder `/`.
4. Wait a few minutes — your site will be available at `https://<username>.github.io/`.

For a project site (not user site), enable Pages from the `gh-pages` branch or `main` branch `/docs` folder.

## Deploy to nefty.app (nefty is simple drag-and-drop)

1. Zip the repository build (or just `index.html`, `styles.css`, `script.js`, and `resume.html`).
2. Go to https://nefty.app and create an account.
3. Create a new site and upload the zip or drag-and-drop the files.

## Notes
- If you'd like, I can set up a GitHub repo, push the code, and enable Pages for you. Provide GitHub credentials or create a repo and give me access.# Dhivya Dharshini — Static Portfolio

This is a standalone static portfolio/resume site. Open `index.html` in your browser to view.

Quick preview:

1. Double-click `index.html` to open it in your browser.
2. Or serve it locally with a static server, e.g.:

```bash
npx serve .
```

If you want this hosted for free, push to GitHub and enable GitHub Pages, or drag the folder into Netlify for instant deployment.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
