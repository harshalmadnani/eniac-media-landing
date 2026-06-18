# Eniac Media — Landing Page

A clean, modern landing page for [Eniac Media](https://eniacmedia.com/), a crypto-native
Web3 marketing agency. Styled after [valid.co](https://valid.co) with a dark, minimal,
modular aesthetic, real-time scroll animations, and an interactive 3D centerpiece.

## Tech stack

- **React 19** + **Vite** — fast SPA tooling
- **Tailwind CSS** — design system and styling
- **Framer Motion** — scroll reveals, staggered text, micro-interactions
- **react-three-fiber** + **drei** + **three.js** — interactive 3D hero (distorted
  metallic token, wireframe shell, orbiting particles, mouse parallax)
- **lucide-react** — icons

## Sections

Hero (3D) · Operating principle · Partners marquee · About (mission/vision) ·
Animated stats · Services · Process · Case studies · Influencer network · Values ·
Contact form · Footer

## Local development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Deployment

Deployed as a static site on [Render](https://render.com).

- **Build command:** `npm install && npm run build`
- **Publish directory:** `dist`
