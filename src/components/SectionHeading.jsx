import Reveal from "./Reveal";

/** Consistent heading used at the top of every section. */
export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mb-14 text-center">
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.2em] text-accent-1">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-muted">{subtitle}</p>
      )}
      {/* Decorative underline */}
      <div className="gradient-bg mx-auto mt-6 h-1 w-20 rounded-full" />
    </Reveal>
  );
}
