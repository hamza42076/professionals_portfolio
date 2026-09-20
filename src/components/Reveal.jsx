"use client";
import { motion } from "framer-motion";

/**
 * Scroll-triggered reveal wrapper (fade + slide).
 * Uses framer-motion's `whileInView`, which is built on IntersectionObserver.
 *
 * Props:
 *  - direction: "up" | "down" | "left" | "right"
 *  - delay: seconds
 *  - once: animate only the first time it enters the viewport
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  className = "",
  ...rest
}) {
  const offset = 40;
  const from = {
    up: { y: offset },
    down: { y: -offset },
    left: { x: offset },
    right: { x: -offset },
  }[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
