# Pranay Pratap Singh — Developer Portfolio

A responsive, dark editorial portfolio built with React, Vite, CSS, and Lucide icons. Content is based on the supplied resume; project cards are honest summaries rather than invented case-study outcomes.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The deployable static site is written to `dist/` after a successful build. It can be deployed to Netlify, Vercel, GitHub Pages (with base-path configuration if hosted under a repository path), or any static hosting provider.

## Personalize

- Main page and content: `src/main.jsx`
- Design system and responsive styling: `src/styles.css`
- Resume PDF: `public/assets/pranay-pratap-singh-resume.pdf`
- Site metadata and fonts: `index.html`

## Before publishing

- Add verified GitHub, LinkedIn, and LeetCode profile URLs if you want them linked.
- Add project repository/demo URLs and screenshots when available.
- Confirm which contact details you want public. This version publishes the resume email address, not the phone number.
- Add a portrait only if you want one; the current hero uses an abstract code illustration.

## Current implementation notes

Includes responsive navigation, Motion on/off control, animated section reveals with reduced-motion-style toggle, project filtering and search, project detail dialogs (Escape/backdrop close), resume download/view link, skills, education, experience, certifications, achievements, and email contact. No backend contact form is included; the email CTA opens the visitor's email client.

Build/test status: dependency installation was attempted in the authoring environment but timed out, so a production build could not be verified here. Run `npm install` and `npm run build` locally before deploying.
