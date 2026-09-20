"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Animated horizontal progress bar — fills when scrolled into view. */
function SkillBar({ name, level, index }) {
  return (
    <Reveal delay={index * 0.08}>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <motion.span
          className="text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 + index * 0.08 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-surface">
        <motion.div
          className="gradient-bg h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </Reveal>
  );
}

/** Circular skill meter (SVG ring) — used for the top 4 skills. */
function SkillRing({ name, level, index }) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;

  return (
    <Reveal delay={index * 0.1} className="flex flex-col items-center gap-3">
      <div className="relative h-28 w-28">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          <defs>
            <linearGradient id={`ring-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent-1)" />
              <stop offset="50%" stopColor="var(--accent-2)" />
              <stop offset="100%" stopColor="var(--accent-3)" />
            </linearGradient>
          </defs>
          {/* Track */}
          <circle cx="50" cy="50" r={radius} fill="none" stroke="var(--border)" strokeWidth="8" />
          {/* Progress */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={`url(#ring-${index})`}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference * (1 - level / 100) }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
          {level}%
        </span>
      </div>
      <span className="text-center text-sm font-medium text-muted">{name}</span>
    </Reveal>
  );
}

export default function Skills() {
  const top = skills.slice(0, 4);

  return (
    <section id="skills" className="section relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="What I'm Good At"
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        {/* Circular meters for headline skills */}
        <div className="mb-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {top.map((s, i) => (
            <SkillRing key={s.name} {...s} index={i} />
          ))}
        </div>

        {/* Progress bars for the full list */}
        <div className="glass grid gap-x-12 gap-y-7 rounded-3xl p-8 md:grid-cols-2 md:p-10">
          {skills.map((s, i) => (
            <SkillBar key={s.name} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
