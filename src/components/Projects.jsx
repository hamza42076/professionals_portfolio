"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * A single project card with a 3D tilt-on-hover effect.
 * The tilt follows the cursor position using framer-motion springs.
 */
function ProjectCard({ project, index }) {
  const ref = useRef(null);

  // Raw mouse position (normalised -0.5 → 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth the values so the tilt feels natural
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  // Map position → rotation (max 8deg)
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Reveal delay={index * 0.12} className="h-full">
      <motion.article
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="group glass flex h-full flex-col overflow-hidden rounded-2xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-accent-2/20"
      >
        {/* Thumbnail — screenshot if `image` is set, otherwise gradient + emoji */}
        <div
          className={`relative flex h-44 items-center justify-center overflow-hidden bg-linear-to-br ${project.gradient}`}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span className="text-6xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
              {project.emoji}
            </span>
          )}
          {/* Hover overlay with links */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 bg-bg/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text transition-all duration-300 hover:scale-110 hover:border-accent-1 hover:text-accent-1"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label="Live demo"
              className="gradient-bg flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-300 hover:scale-110"
            >
              <FiExternalLink size={20} />
            </a>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-accent-1">
            {project.title}
          </h3>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          {/* Tech badges */}
          <ul className="mb-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-md border border-border bg-bg/60 px-2.5 py-1 text-xs font-medium text-muted"
              >
                {t}
              </li>
            ))}
          </ul>

          {/* Footer links */}
          <div className="flex items-center gap-5 border-t border-border pt-4 text-sm">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition-colors duration-300 hover:text-white"
            >
              <FiGithub /> Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition-colors duration-300 hover:text-accent-1"
            >
              <FiExternalLink /> Live Demo
            </a>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section relative">
      {/* Soft background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-3/10 blur-[140px]"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="A selection of things I've built — hover a card to see the links."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1200 }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
