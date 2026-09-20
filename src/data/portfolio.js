/**
 * ============================================================
 *  PORTFOLIO CONTENT — EDIT THIS FILE TO CUSTOMIZE YOUR SITE
 * ============================================================
 *  Everything shown on the page (name, bio, projects, skills,
 *  experience, links) lives here. Components only read from
 *  this file, so you rarely need to touch the JSX.
 */

export const personal = {
  name: "Muhammad Hamza",
  // Your photo: put the file in /public (e.g. /public/profile.jpg) and set
  // photo: "/profile.jpg". Leave as null to show an initials avatar instead.
  photo: "/profile.webp",
  // Roles cycled by the typing effect in the Hero section
  roles: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Engineer",
  ],
  tagline:
    "I build fast, scalable web applications with MongoDB, Express, React and Node.js — from clean UI to robust APIs.",
  email: "hello@example.com",
  location: "Pakistan",
  resumeUrl: "#", // link to your CV / resume PDF (put it in /public and use "/resume.pdf")
  bio: [
    "I'm a Full Stack Developer specialising in the MERN stack. I enjoy turning complex problems into simple, elegant solutions and shipping products that people actually use.",
    "With experience across the whole stack — from designing MongoDB schemas and building REST APIs with Express and Node, to crafting responsive React interfaces — I focus on performance, clean code and great user experience.",
  ],
  // Quick facts shown in the About section
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Happy Clients", value: "10+" },
  ],
};

export const socials = {
  github: "https://github.com/hamza42076?tab=repositories",
  linkedin: "https://www.linkedin.com/in/muhammad-hamza-4831552bb/",
  twitter: "https://twitter.com/your-username",
};

// Tag cloud in the About section — animates in one by one
export const skillTags = [
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Redux",
  "REST APIs",
  "Socket.io",
  "JWT Auth",
  "Git & GitHub",
  "Docker",
  "Postman",
  "Vercel",
];

// Skill meters (Skills section). level = 0–100
export const skills = [
  { name: "React / Next.js", level: 90 },
  { name: "Node.js / Express", level: 88 },
  { name: "MongoDB / Mongoose", level: 85 },
  { name: "JavaScript (ES6+)", level: 92 },
  { name: "TypeScript", level: 75 },
  { name: "Tailwind / CSS", level: 88 },
  { name: "REST & WebSockets", level: 82 },
  { name: "Git / CI-CD", level: 80 },
];

// Project cards
export const projects = [
  {
    title: "Screen Tracking System",
    description:
      "A MERN application for a textile facility that tracks production screens in real time — status, location, maintenance history and usage analytics — with role-based dashboards for operators and managers.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "Chart.js"],
    github: "https://github.com/your-username/screen-tracker",
    live: "https://screen-tracker-demo.vercel.app",
    // Gradient + emoji used for the card thumbnail when no `image` is set
    gradient: "from-teal-500/40 via-cyan-500/20 to-transparent",
    emoji: "🏭",
  },
  {
    title: "Whisper Transcriber",
    description:
      "Upload audio or video and get accurate, timestamped transcripts powered by the OpenAI Whisper API. Transcripts are stored in MongoDB, searchable, and exportable as SRT / TXT.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Whisper API", "FFmpeg"],
    github: "https://github.com/hamza42076/video-transcript-app",
    live: "https://video-transcript-app.vercel.app/",
    // Screenshot shown on the card (put files in /public/projects). Omit to show the gradient + emoji instead.
    image: "/projects/transcript-app.webp",
    gradient: "from-purple-500/40 via-fuchsia-500/20 to-transparent",
    emoji: "🎙️",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured store with product catalogue, cart, Stripe checkout, order tracking and an admin panel for inventory management. Built with JWT auth and server-side pagination.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux Toolkit", "Tailwind"],
    github: "https://github.com/your-username/ecommerce",
    live: "https://ecommerce-demo.vercel.app",
    gradient: "from-blue-500/40 via-indigo-500/20 to-transparent",
    emoji: "🛒",
  },
];

// Vertical timeline (Experience section) — newest first
export const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Remote",
    period: "2023 — Present",
    description:
      "Designing and delivering MERN applications for clients across manufacturing, media and e-commerce. Responsible for architecture, API design, database modelling and deployment.",
  },
  {
    role: "MERN Stack Developer",
    company: "Tech Solutions Ltd.",
    period: "2022 — 2023",
    description:
      "Built and maintained internal dashboards and customer-facing portals. Improved API response times by 40% through query optimisation and caching.",
  },
  {
    role: "Frontend Developer (Intern)",
    company: "Startup Studio",
    period: "2021 — 2022",
    description:
      "Converted Figma designs into responsive React components, introduced a shared UI library and wrote unit tests with Jest and React Testing Library.",
  },
];

// Navbar links — ids must match the section ids in the components
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
