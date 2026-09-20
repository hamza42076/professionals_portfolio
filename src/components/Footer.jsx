import { FiArrowUp } from "react-icons/fi";
import { navLinks, personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:px-8 md:flex-row md:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} <span className="text-text">{personal.name}</span>. Built
          with Next.js &amp; Tailwind CSS.
        </p>

        <ul className="flex flex-wrap justify-center gap-5 text-sm">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted transition-colors duration-300 hover:text-accent-1"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#home"
          aria-label="Back to top"
          className="gradient-bg flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform duration-300 hover:-translate-y-1"
        >
          <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}
