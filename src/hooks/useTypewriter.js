"use client";
import { useEffect, useState } from "react";

/**
 * Cycles through `words`, typing and deleting each one.
 * Returns the current text to render.
 */
export default function useTypewriter(
  words,
  { typeSpeed = 80, deleteSpeed = 45, pause = 1600 } = {}
) {
  const [index, setIndex] = useState(0);      // which word
  const [text, setText] = useState("");        // visible substring
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout;

    if (!deleting && text === word) {
      // Finished typing — pause, then start deleting
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      // Finished deleting — short pause, then move to next word
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, 200);
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteSpeed : typeSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
