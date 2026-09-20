# Portfolio — Full Stack (MERN) Developer

A modern, dark-themed single-page portfolio built with **Next.js 16 (App Router)**, **Tailwind CSS v4** and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Customise your content

All text, projects, skills, experience and links live in **one file**:

```
src/data/portfolio.js
```

Edit `personal`, `socials`, `skillTags`, `skills`, `projects`, `experience` and `navLinks` there. You should not need to touch the components for normal edits.

### Colours / theme
Accent colours and the dark palette are CSS variables at the top of `src/app/globals.css` (`--accent-1`, `--accent-2`, `--accent-3`, `--bg`, …).

### Fonts
Loaded via `next/font/google` in `src/app/layout.js` (Inter for body, Poppins for headings). Swap them there.

### Project screenshots
Project cards currently show a gradient + emoji thumbnail. Drop screenshots into `public/` and replace the thumbnail block in `src/components/Projects.jsx` with `next/image`.

### Contact form
`src/components/Contact.jsx` simulates a submission. Wire `handleSubmit` to a Next.js route handler, Formspree, EmailJS or Resend to actually send mail.

## Project structure

```
src/
├── app/
│   ├── globals.css      # theme tokens, utilities, keyframes
│   ├── layout.js        # fonts + metadata
│   └── page.js          # assembles the sections
├── components/
│   ├── Navbar.jsx       # sticky nav, active link, mobile menu
│   ├── Hero.jsx         # typing effect, animated background, CTAs
│   ├── About.jsx        # bio, stats, animated skill tag cloud
│   ├── Projects.jsx     # 3D-tilt project cards
│   ├── Skills.jsx       # circular meters + progress bars
│   ├── Experience.jsx   # scroll-drawn vertical timeline
│   ├── Contact.jsx      # floating-label form + socials
│   ├── Footer.jsx
│   ├── Reveal.jsx       # reusable scroll-reveal wrapper
│   └── SectionHeading.jsx
├── data/
│   └── portfolio.js     # ← ALL YOUR CONTENT
└── hooks/
    ├── useTypewriter.js
    └── useActiveSection.js
```
