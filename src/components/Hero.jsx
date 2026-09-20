"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { personal, socials } from "@/data/portfolio";
import useTypewriter from "@/hooks/useTypewriter";

// Stagger children on mount for the entrance animation
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const socialLinks = [
  { icon: FiGithub, href: socials.github, label: "GitHub" },
  { icon: FiLinkedin, href: socials.linkedin, label: "LinkedIn" },
  { icon: FiTwitter, href: socials.twitter, label: "Twitter" },
];

/**
 * Profile photo with an animated gradient ring and a gentle float.
 * Falls back to an initials avatar when `personal.photo` is not set.
 */
function ProfilePhoto() {
  const initials = personal.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-56 sm:w-64 md:w-80 lg:w-96"
    >
      {/* Rotating gradient ring */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-1.5 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, var(--accent-1), var(--accent-2), var(--accent-3), var(--accent-1))",
        }}
      />
      {/* Soft glow */}
      <div
        aria-hidden
        className="gradient-bg absolute -inset-6 -z-10 rounded-full opacity-40 blur-3xl"
      />

      {/* Photo (floats up and down) */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative aspect-square overflow-hidden rounded-full border-4 border-bg bg-bg-elevated"
      >
        {personal.photo ? (
          <Image
            src={personal.photo}
            alt={personal.name}
            fill
            priority
            sizes="(max-width: 640px) 224px, (max-width: 1024px) 320px, 384px"
            className="object-cover"
          />
        ) : (
          <div className="gradient-text flex h-full w-full items-center justify-center text-6xl font-bold md:text-8xl">
            {initials}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const role = useTypewriter(personal.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* ---------- Animated background (lightweight: 3 blurred blobs + grid) ---------- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob-a absolute -left-32 top-10 h-96 w-96 rounded-full bg-accent-1/25 blur-[120px]" />
        <div className="blob-b absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-accent-3/25 blur-[140px]" />
        <div className="blob-c absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent-2/25 blur-[120px]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1.2fr_1fr] md:gap-8">
        {/* ---------- Photo (shows first on mobile, right side on desktop) ---------- */}
        <div className="md:order-2">
          <ProfilePhoto />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:order-1"
        >
          {/* Availability pill */}
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-1 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-1" />
            </span>
            Available for freelance work
          </motion.div>

          <motion.p variants={item} className="mb-3 text-lg text-muted">
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={item}
            className="mb-4 text-4xl font-bold leading-tight sm:text-6xl md:text-7xl"
          >
            <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          {/* Typing effect */}
          <motion.h2
            variants={item}
            className="mb-6 h-[1.4em] text-2xl font-semibold text-text sm:text-4xl md:text-5xl"
          >
            {role}
            <span
              className="cursor-blink ml-1 inline-block w-[3px] bg-accent-2 align-middle"
              style={{ height: "1em" }}
            />
          </motion.h2>

          <motion.p
            variants={item}
            className="mb-10 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {personal.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="gradient-bg group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white shadow-lg shadow-accent-2/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-2/40"
            >
              View My Work
              <FiArrowDown className="transition-transform duration-300 group-hover:translate-y-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 font-semibold text-text backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent-2 hover:bg-accent-2/10"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-muted transition-all duration-300 hover:-translate-y-1 hover:text-accent-1"
              >
                <Icon size={22} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="bounce-soft absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors duration-300 hover:text-accent-1"
      >
        <FiArrowDown size={22} />
      </a>
    </section>
  );
}
