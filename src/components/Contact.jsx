"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend, FiTwitter } from "react-icons/fi";
import { personal, socials } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Floating-label input. The label lifts up when the field is focused
 * or has a value, and the underline animates in on focus.
 */
function Field({ id, label, type = "text", textarea = false, value, onChange }) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;
  const Tag = textarea ? "textarea" : "input";

  return (
    <div className="relative">
      <Tag
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
        rows={textarea ? 5 : undefined}
        className="peer w-full rounded-xl border border-border bg-surface px-4 pb-3 pt-6 text-text outline-none transition-all duration-300 focus:border-accent-2 focus:bg-accent-2/5 focus:shadow-lg focus:shadow-accent-2/10"
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all duration-300 ${
          lifted ? "top-2 text-xs text-accent-1" : "top-4 text-sm text-muted"
        }`}
      >
        {label}
      </label>
      {/* Animated underline */}
      <span
        className={`gradient-bg absolute bottom-0 left-3 right-3 h-0.5 origin-left rounded-full transition-transform duration-300 ${
          focused ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </div>
  );
}

const socialLinks = [
  { icon: FiGithub, href: socials.github, label: "GitHub" },
  { icon: FiLinkedin, href: socials.linkedin, label: "LinkedIn" },
  { icon: FiTwitter, href: socials.twitter, label: "Twitter" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  /**
   * Replace this with a real submission (e.g. a Next.js route handler,
   * Formspree, EmailJS or Resend). Currently it just simulates a request.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="section relative">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-accent-1/10 blur-[140px]"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-12 md:grid-cols-5">
          {/* ---------- Left: info + socials ---------- */}
          <Reveal direction="right" className="md:col-span-2">
            <h3 className="mb-4 text-2xl font-semibold">Get in touch</h3>
            <p className="mb-8 leading-relaxed text-muted">
              I&apos;m currently open to freelance projects and full-time opportunities.
              Whether you have a question or just want to connect, feel free to reach out.
            </p>

            <ul className="mb-8 space-y-4">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="group flex items-center gap-4 text-muted transition-colors duration-300 hover:text-white"
                >
                  <span className="glass flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:border-accent-1 group-hover:text-accent-1">
                    <FiMail />
                  </span>
                  {personal.email}
                </a>
              </li>
              <li className="flex items-center gap-4 text-muted">
                <span className="glass flex h-11 w-11 items-center justify-center rounded-xl">
                  <FiMapPin />
                </span>
                {personal.location}
              </li>
            </ul>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glass flex h-11 w-11 items-center justify-center rounded-xl text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent-2 hover:bg-accent-2/10 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </Reveal>

          {/* ---------- Right: form ---------- */}
          <Reveal direction="left" delay={0.1} className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass space-y-5 rounded-3xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Your Name" value={form.name} onChange={update} />
                <Field id="email" label="Your Email" type="email" value={form.email} onChange={update} />
              </div>
              <Field id="message" label="Your Message" textarea value={form.message} onChange={update} />

              <button
                type="submit"
                disabled={status !== "idle"}
                className="gradient-bg group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white shadow-lg shadow-accent-2/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-2/40 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={status}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center gap-2"
                  >
                    {status === "idle" && (
                      <>
                        Send Message
                        <FiSend className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </>
                    )}
                    {status === "sending" && "Sending…"}
                    {status === "sent" && "Message sent ✓"}
                  </motion.span>
                </AnimatePresence>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
