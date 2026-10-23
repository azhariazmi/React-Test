# Azhari Galaxy

A mobile-first React homepage inspired by the soft, mint-green visual style of Miyomi, adapted for Azhari's web projects.

## Requirements

- Node.js 18 or newer
- npm

## Run locally

1. Extract this folder.
2. Open a terminal in the `azhari-galaxy` folder.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL Vite prints, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy

- **Netlify:** import the repository, use `npm run build` as the build command and `dist` as the publish directory.
- **Vercel:** import the repository; Vercel generally detects Vite automatically.
- **GitHub Pages:** configure the correct Vite `base` path if deploying to a project repository.

## Customize

- Project data and links: `src/App.jsx`, in the `projects` array.
- Visual design and responsive layout: `src/index.css`.
- SEO, favicon and browser theme: `index.html`.

This is a frontend-only starter. It does not include an admin dashboard, database, user accounts or a backend API.