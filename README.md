# LaserWorks Lebanon

A premium, responsive one-page marketing website for **LaserWorks**, a Lebanese laser cleaning & restoration company. Built with **Vite + React + Tailwind CSS**. Fully static — no backend, no contact form. All "Request a Quote" CTAs open WhatsApp.

- **Live target (GitHub Pages):** https://ghayzal.github.io/laserworkslb/
- **Production domain:** https://www.laserworkslb.com

## Features

- Bilingual **English / Arabic** with a navbar toggle and proper **RTL** layout (simple content-object i18n — no i18n library)
- Sections: Header, Hero, About, Applications, Gallery, Why Choose, Process, Industries, Customer Reviews, Contact, Footer
- Premium dark/industrial theme: black, dark gray, white, electric blue/cyan accents, deep dark-blue undertones
- Subtle animated laser line, scroll-reveal animations, hover glows
- Real laser-cleaning photography extracted from the supplied design files
- SEO: semantic HTML, meta description, Open Graph + Twitter tags, canonical URL, descriptive image `alt` text, lazy-loaded images
- Lightweight: ~77 KB JS (gzip) + optimized images

## Tech stack

| Tool | Purpose |
|------|---------|
| Vite | Build tool / dev server |
| React | UI components |
| Tailwind CSS | Styling |
| lucide-react | Icons |

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  components/      # Header, Hero, About, Applications, Gallery, WhyChoose,
                   # Process, Industries, Testimonials, Contact, Footer,
                   # LanguageToggle, Reveal
  data/
    content.js     # ALL text for EN + AR (edit copy here)
  assets/
    images/        # optimized web images used by the site
  App.jsx
  main.jsx
  index.css
public/
  CNAME            # custom domain for GitHub Pages
  favicon.svg
  og-image.jpg     # social-share preview image
design-source/     # raw .ai + .zip design files (git-ignored, never committed)
```

## Editing content

All copy lives in [`src/data/content.js`](src/data/content.js) as a single object with `en` and `ar` keys. Update text there and it applies to both the live UI and the language toggle. Images are imported directly inside the relevant component files.

## Deployment to GitHub Pages

This repo builds to a static `dist/` folder that can be served from GitHub Pages.

`vite.config.js` uses **`base: './'`** (relative asset paths) so the **same build works both** at the project sub-path (`/laserworkslb/`) **and** at the custom-domain root (`/`).

### One-command deploy

The [`gh-pages`](https://www.npmjs.com/package/gh-pages) package is installed and a `deploy` script is configured:

```json
"deploy": "npm run build && gh-pages -d dist"
```

To publish (after the repo's `origin` remote is set on GitHub):

```bash
npm run deploy
```

This builds the site and pushes the contents of `dist/` to a `gh-pages` branch.

**Then, one time, configure GitHub Pages** (repo **Settings → Pages → Build and deployment**):

| Setting | Value |
|---|---|
| **Source** | Deploy from a branch |
| **Branch** | `gh-pages` |
| **Folder** | `/ (root)` |

After that, every `npm run deploy` updates the live site automatically.

The `public/CNAME` file is copied into `dist/` on every build, so the custom domain setting persists across deploys.

## Custom domain (www.laserworkslb.com)

The site is configured for the custom domain **www.laserworkslb.com**:

1. **Enable GitHub Pages** in the repository: **Settings → Pages**, deploying from the `gh-pages` branch.
2. **Set the custom domain** to `www.laserworkslb.com` under **Settings → Pages → Custom domain**. (This is also pre-set via [`public/CNAME`](public/CNAME), which contains exactly `www.laserworkslb.com` — no `https://`.)
3. **Point DNS at GitHub Pages.** At your domain registrar, add a **`CNAME` record** for the `www` host pointing to **`ghayzal.github.io`**.
   - Optionally, to make the apex (`laserworkslb.com`) redirect to `www`, add the GitHub Pages apex `A`/`ALIAS` records per [GitHub's docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).
4. **Enable "Enforce HTTPS"** in Settings → Pages once the certificate is provisioned.

> **Note:** The domain registrar DNS setup will be completed later. Until DNS is pointed and propagated, use the GitHub Pages URL (https://ghayzal.github.io/laserworkslb/) for testing — it works with the same build.

## Company information

- **Phone / WhatsApp:** +961 70 046 602 — https://wa.me/96170046602
- **Email:** aounjunior@gmail.com
- **Instagram:** https://www.instagram.com/laserworkslb/
- **Location:** Furn El Chebbak, Mar Nohra Street, Lebanon

## Notes / what to replace before launch

- **Brand color** is the electric blue/cyan palette defined as `brand-*` in [`tailwind.config.js`](tailwind.config.js) (primary `brand-500` = `#00A8E8`), matching the navy LaserWorks van. Change `brand-500` there to re-tint the whole site.
- **Customer Reviews are placeholders** (marked in `src/data/content.js` and `Testimonials.jsx`). Replace with real, approved testimonials.
- **Logo** is a lightweight text + monogram mark. Drop a real logo SVG into `src/assets/logo/` and wire it into `Header.jsx` / `Footer.jsx` if desired.
- The **`design-source/` folder** (raw `.ai` and `.zip`) is git-ignored and must not be committed.
