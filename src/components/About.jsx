"use client";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiLayers, FiServer } from "react-icons/fi";
import { personal, skillTags } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Tag cloud: parent staggers, each tag pops in one by one
const cloud = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const tag = {
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

// Icons for the MERN "stack" card in the About visual
const stack = [
  { icon: FiDatabase, label: "MongoDB", color: "text-green-400" },
  { icon: FiServer, label: "Express", color: "text-gray-300" },
  { icon: FiCode, label: "React", color: "text-cyan-400" },
  { icon: FiLayers, label: "Node.js", color: "text-lime-400" },
];

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Who I Am"
          subtitle="A quick introduction to me and the tools I work with every day."
        />

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* ---------- Left: visual card ---------- */}
          <Reveal direction="right">
            <div className="relative mx-auto max-w-md">
              {/* Glow behind the card */}
              <div className="gradient-bg absolute -inset-1 rounded-3xl opacity-40 blur-2xl" />
              <div className="glass relative rounded-3xl p-8">
                <p className="mb-6 text-sm font-medium uppercase tracking-widest text-muted">
                  My Stack
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {stack.map(({ icon: Icon, label, color }) => (
                    <div
                      key={label}
                      className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-bg/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-2/50"
                    >
                      <Icon
                        size={30}
                        className={`${color} transition-transform duration-300 group-hover:scale-110`}
                      />
                      <span className="text-sm font-medium">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-6">
                  {personal.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="gradient-text text-2xl font-bold">{s.value}</div>
                      <div className="text-xs text-muted">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* ---------- Right: bio + tag cloud ---------- */}
          <div>
            {personal.bio.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="mb-5 leading-relaxed text-muted">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <h3 className="mb-4 mt-8 text-lg font-semibold">Technologies I work with</h3>
            </Reveal>

            <motion.ul
              variants={cloud}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap gap-2.5"
            >
              {skillTags.map((t) => (
                <motion.li
                  key={t}
                  variants={tag}
                  className="cursor-default rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-text transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-1 hover:bg-accent-1/10 hover:text-accent-1"
                >
                  {t}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
