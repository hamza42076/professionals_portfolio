"use client";
import { useEffect, useState } from "react";

/**
 * Uses IntersectionObserver to report which section id is
 * currently in view. Used by the navbar for active-link highlighting.
 */
export default function useActiveSection(ids, rootMargin = "-40% 0px -55% 0px") {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return active;
}
