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
The contact form sends messages through the `/api/contact` route using SMTP. To enable it locally, copy `.env.example` to `.env.local` and set `SMTP_USER` to your sending email address and `SMTP_PASS` to its SMTP password. For Gmail, use a Google App Password (2-Step Verification must be enabled); your normal Google password will not work. Keep these values server-side and never prefix them with `NEXT_PUBLIC_`.

The default SMTP settings are Gmail on port `587` with STARTTLS. If you use another provider, set `SMTP_HOST` and `SMTP_PORT` to its SMTP settings. Restart the development server after changing environment variables. In a deployment, add the same variables in the hosting provider's server-side environment settings.

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
