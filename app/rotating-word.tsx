"use client";

import { useEffect, useState } from "react";

const words = ["Design", "Build", "Print"];
const typeDelay = 190;
const deleteDelay = 115;
const holdDelay = 2200;
const restartDelay = 420;

export default function RotatingWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const isComplete = text === word;
    const isEmpty = text.length === 0;

    const delay = isDeleting
      ? isEmpty
        ? restartDelay
        : deleteDelay
      : isComplete
        ? holdDelay
        : typeDelay;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setWordIndex((currentIndex) => (currentIndex + 1) % words.length);
        setIsDeleting(false);
        return;
      }

      setText((currentText) =>
        isDeleting
          ? currentText.slice(0, -1)
          : word.slice(0, currentText.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, text, wordIndex]);

  return (
    <span aria-label="Design, Build, Print" className="inline-block min-w-[6ch]">
      <span aria-hidden="true">{text}</span>
      <span
        aria-hidden="true"
        className="typewriter-cursor ml-[0.025em] inline-block h-[0.82em] w-[0.018em] translate-y-[0.08em] bg-current"
      />
    </span>
  );
}
