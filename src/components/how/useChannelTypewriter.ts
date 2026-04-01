import { useEffect, useRef, useState } from "react";

const TYPE_MS = 88;
const DELETE_MS = 46;
const PAUSE_FULL_MS = 1700;
const PAUSE_EMPTY_MS = 480;

/**
 * Types each word in `words`, pauses, deletes letter-by-letter, then moves to the next word.
 */
export function useChannelTypewriter(words: readonly string[]) {
  const [text, setText] = useState("");
  const wordRef = useRef(0);
  const posRef = useRef(0);
  const modeRef = useRef<"type" | "pause" | "delete">("type");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let cancelled = false;

    const later = (ms: number, fn: () => void) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        if (!cancelled) fn();
      }, ms);
    };

    const tick = () => {
      if (cancelled) return;
      const w = words[wordRef.current % words.length];

      if (modeRef.current === "type") {
        if (posRef.current < w.length) {
          posRef.current += 1;
          setText(w.slice(0, posRef.current));
          later(TYPE_MS, tick);
        } else {
          modeRef.current = "pause";
          later(PAUSE_FULL_MS, () => {
            modeRef.current = "delete";
            tick();
          });
        }
      } else if (modeRef.current === "delete") {
        if (posRef.current > 0) {
          posRef.current -= 1;
          setText(w.slice(0, posRef.current));
          later(DELETE_MS, tick);
        } else {
          modeRef.current = "type";
          wordRef.current += 1;
          later(PAUSE_EMPTY_MS, tick);
        }
      }
    };

    later(PAUSE_EMPTY_MS, tick);
    return () => {
      cancelled = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [words]);

  return text;
}
