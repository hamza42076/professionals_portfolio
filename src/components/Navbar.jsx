"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, personal } from "@/data/portfolio";
import useActiveSection from "@/hooks/useActiveSection";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

/**
 * Sticky navbar with:
 *  - glass background once the page is scrolled
 *  - active-link highlighting via IntersectionObserver
 *  - mobile hamburger menu with slide-in animation
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  // Add background once user scrolls past the top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const initials = personal.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2 text-lg font-bold">
          <span className="gradient-bg flex h-9 w-9 items-center justify-center rounded-lg text-sm text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
            {initials}
          </span>
          <span className="hidden sm:inline">{personal.name.split(" ")[0]}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-muted hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Animated underline that slides between active links */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="gradient-bg absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
          <li className="ml-3">
            <a
              href="#contact"
              className="gradient-bg rounded-full px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-accent-2/20 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-accent-2/40"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="rounded-md p-2 text-text transition-colors duration-300 hover:bg-surface md:hidden"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm md:hidden"
            />
            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-72 border-l border-border bg-bg-elevated p-6 md:hidden"
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const id = link.href.replace("#", "");
                  const isActive = active === id;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-lg px-4 py-3 text-base font-medium transition-all duration-300 ${
                          isActive
                            ? "gradient-bg text-white"
                            : "text-muted hover:bg-surface hover:text-white"
                        }`}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
