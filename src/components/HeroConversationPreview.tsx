import { useEffect, useMemo, useState } from "react";
import type { Copy, Lang } from "../locales";

type Showcase = Copy["heroShowcase"];

type FlatLine = { from: "lead" | "agent"; text: string };

function flattenMessages(messages: Showcase["messages"]): FlatLine[] {
  const out: FlatLine[] = [];
  for (const m of messages) {
    for (const text of m.chunks) {
      out.push({ from: m.from, text });
    }
  }
  return out;
}

function wait(ms: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal.aborted) {
      reject(new DOMException("Aborted", "AbortError"));
      return;
    }
    const id = window.setTimeout(() => {
      if (signal.aborted) reject(new DOMException("Aborted", "AbortError"));
      else resolve();
    }, ms);
    signal.addEventListener(
      "abort",
      () => {
        window.clearTimeout(id);
        reject(new DOMException("Aborted", "AbortError"));
      },
      { once: true },
    );
  });
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

function TypingDots() {
  return (
    <div className="flex justify-end">
      <div
        className="flex gap-1 rounded-2xl rounded-se-sm bg-accent/15 px-3 py-2.5"
        aria-hidden
      >
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:0ms]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:150ms]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:300ms]" />
      </div>
    </div>
  );
}

function Bubble({
  from,
  text,
  showCursor,
  animateEntry = true,
}: {
  from: "lead" | "agent";
  text: string;
  showCursor?: boolean;
  animateEntry?: boolean;
}) {
  const isLead = from === "lead";
  return (
    <div
      className={`flex w-full ${isLead ? "justify-start" : "justify-end"} ${
        animateEntry ? "animate-[bubbleIn_0.35s_ease-out_both]" : ""
      }`}
    >
      <div
        className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-start text-sm leading-relaxed shadow-sm sm:max-w-[85%] sm:text-[0.9375rem] ${
          isLead
            ? "rounded-ss-sm border border-gray-100 bg-white text-ink"
            : "rounded-se-sm bg-accent text-white"
        }`}
      >
        <span className="whitespace-pre-wrap">{text}</span>
        {showCursor ? (
          <span
            className={`ms-0.5 inline-block h-4 w-px align-[-2px] animate-pulse ${
              isLead ? "bg-ink/50" : "bg-white/80"
            }`}
            aria-hidden
          />
        ) : null}
      </div>
    </div>
  );
}

export function HeroConversationPreview({
  showcase,
  lang,
}: {
  showcase: Showcase;
  lang: Lang;
}) {
  const dir = lang === "ar" ? "rtl" : "ltr";
  const flat = useMemo(() => flattenMessages(showcase.messages), [showcase.messages]);
  const reducedMotion = usePrefersReducedMotion();

  const [doneLines, setDoneLines] = useState<FlatLine[]>([]);
  const [partial, setPartial] = useState<{ from: "lead" | "agent"; text: string; len: number } | null>(
    null,
  );
  const [agentTyping, setAgentTyping] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setDoneLines(flat);
      setPartial(null);
      setAgentTyping(false);
      return;
    }

    const ac = new AbortController();
    const signal = ac.signal;

    const run = async () => {
      try {
        while (!signal.aborted) {
          setDoneLines([]);
          setPartial(null);
          setAgentTyping(false);

          for (let i = 0; i < flat.length; i++) {
            if (signal.aborted) return;
            const line = flat[i];
            const prev = flat[i - 1];

            if (i > 0) {
              const gap =
                line.from === "agent" && prev?.from === "agent"
                  ? 420 + Math.floor(Math.random() * 280)
                  : 240 + Math.floor(Math.random() * 120);
              if (line.from === "agent" && prev?.from === "agent") {
                setAgentTyping(true);
                await wait(gap, signal);
                setAgentTyping(false);
              } else {
                await wait(gap, signal);
              }
            }

            const msChar = line.from === "lead" ? (lang === "ar" ? 26 : 22) : lang === "ar" ? 20 : 17;

            for (let len = 1; len <= line.text.length; len++) {
              if (signal.aborted) return;
              setPartial({ from: line.from, text: line.text, len });
              await wait(msChar, signal);
            }

            setDoneLines((d) => [...d, line]);
            setPartial(null);
            await wait(180, signal);
          }

          await wait(2800, signal);
        }
      } catch {
        /* aborted */
      }
    };

    run();
    return () => ac.abort();
  }, [flat, lang, reducedMotion]);

  return (
    <div className="mx-auto w-full max-w-md px-2 sm:max-w-lg" dir={dir}>
      <style>{`
        @keyframes bubbleIn {
          from { opacity: 0; transform: translateY(6px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {showcase.eyebrow}
      </p>
      <p className="mx-auto mb-6 max-w-md text-center text-sm font-medium text-ink-muted md:text-base">
        {showcase.tagline}
      </p>

      <div className="overflow-hidden rounded-[1.35rem] border border-gray-200/90 bg-white shadow-[0_22px_55px_-28px_rgba(15,23,42,0.35),0_0_0_1px_rgba(255,255,255,0.8)_inset]">
        <div className="flex items-center justify-between border-b border-gray-100 bg-gradient-to-r from-gray-50/95 to-white px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-semibold text-ink">{showcase.windowTitle}</span>
          </div>
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-gray-200" />
            <span className="h-2 w-2 rounded-full bg-gray-200" />
            <span className="h-2 w-2 rounded-full bg-gray-200" />
          </div>
        </div>

        <div className="min-h-[280px] space-y-3 bg-gradient-to-b from-surface-muted/60 via-white to-white px-4 py-5 sm:min-h-[300px] sm:px-5 sm:py-6">
          {doneLines.map((m, i) => (
            <Bubble key={`${i}-${m.text.slice(0, 12)}`} from={m.from} text={m.text} />
          ))}
          {agentTyping ? <TypingDots /> : null}
          {partial ? (
            <Bubble
              from={partial.from}
              text={partial.text.slice(0, partial.len)}
              showCursor
              animateEntry={false}
            />
          ) : null}
        </div>

        <div className="border-t border-gray-100 bg-gray-50/50 px-4 py-2.5 text-center">
          <p className="text-[11px] font-medium text-ink-muted sm:text-xs">{showcase.footerNote}</p>
        </div>
      </div>
    </div>
  );
}
