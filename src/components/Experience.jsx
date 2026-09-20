"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { experience } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Vertical timeline. The centre line "draws" itself as the user scrolls
 * (useScroll + scaleY), and each entry slides in from alternating sides.
 */
export default function Experience() {
  const ref = useRef(null);

  // Progress of this section through the viewport (0 → 1)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="section relative">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="My Journey"
          subtitle="Where I've worked and what I've done along the way."
        />

        <div ref={ref} className="relative">
          {/* Track line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />
          {/* Animated progress line */}
          <motion.div
            style={{ scaleY }}
            className="gradient-bg absolute left-5 top-0 h-full w-0.5 origin-top md:left-1/2 md:-translate-x-1/2"
          />

          <ul className="space-y-12">
            {experience.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={item.role + item.period} className="relative md:grid md:grid-cols-2 md:gap-12">
                  {/* Node on the line */}
                  <Reveal
                    delay={0.1}
                    className="absolute left-5 top-1 z-10 -translate-x-1/2 md:left-1/2"
                  >
                    <span className="gradient-bg flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg shadow-accent-2/40 ring-4 ring-bg">
                      <FiBriefcase size={16} />
                    </span>
                  </Reveal>

                  {/* Card — alternates sides on desktop, always right of line on mobile */}
                  <Reveal
                    direction={isLeft ? "right" : "left"}
                    delay={0.15}
                    className={`ml-14 md:ml-0 ${
                      isLeft ? "md:col-start-1 md:text-right" : "md:col-start-2"
                    }`}
                  >
                    <article className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-2/40 hover:shadow-xl hover:shadow-accent-2/10">
                      <span className="mb-2 inline-block rounded-full bg-accent-2/10 px-3 py-1 text-xs font-medium text-accent-2">
                        {item.period}
                      </span>
                      <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-accent-1">
                        {item.role}
                      </h3>
                      <p className="mb-3 text-sm font-medium text-muted">{item.company}</p>
                      <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
