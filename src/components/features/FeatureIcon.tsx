import type { ReactNode } from "react";

export type FeatureGlyph =
  | "sell"
  | "calendar"
  | "glasses"
  | "books"
  | "brain"
  | "plane"
  | "link"
  | "roi";

const wrap = "h-6 w-6 text-white";

export function FeatureIconGlyph({ name }: { name: FeatureGlyph }): ReactNode {
  switch (name) {
    case "sell":
      return (
        <svg className={wrap} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case "calendar":
      return (
        <svg className={wrap} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
          <path d="M8 14h2M12 14h2M8 17h4" strokeLinecap="round" />
        </svg>
      );
    case "glasses":
      return (
        <svg className={wrap} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="8" cy="14" r="3.5" />
          <circle cx="16" cy="14" r="3.5" />
          <path d="M11.5 14h1M4.5 14H6M18 14h1.5" strokeLinecap="round" />
        </svg>
      );
    case "books":
      return (
        <svg className={wrap} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M5 4h5v16H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
          <path d="M10 4h9a1 1 0 011 1v14a1 1 0 01-1 1h-9" />
          <path d="M7 8h2M14 8h3M7 12h2M14 12h3" strokeLinecap="round" />
        </svg>
      );
    case "brain":
      return (
        <svg className={wrap} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M12 5c-2 0-3.5 1.2-4 3-.5-1-1.8-2-3.5-2C2.5 6 2 8.2 3.2 9.5 2.4 10 2 11 2 12c0 2 1.5 3.5 3.5 3.5.8 0 1.5-.2 2-.5.5 2 2.2 3.5 4.5 3.5s4-1.5 4.5-3.5c.5.3 1.2.5 2 .5 2 0 3.5-1.5 3.5-3.5 0-1-.4-2-1.2-2.5C21.5 8.2 21 6 18.3 6c-1.7 0-3 1-3.5 2-.5-1.8-2-3-4-3z" />
        </svg>
      );
    case "plane":
      return (
        <svg className={wrap} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M3 11l18-6-6 18-3-7-7-3z" strokeLinejoin="round" />
        </svg>
      );
    case "link":
      return (
        <svg className={wrap} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M10 13a5 5 0 007.07.07l1.42-1.42a5 5 0 00-7.07-7.07L9.88 5.88" strokeLinecap="round" />
          <path d="M14 11a5 5 0 00-7.07-.07L5.51 12.35a5 5 0 007.07 7.07l1.41-1.41" strokeLinecap="round" />
        </svg>
      );
    case "roi":
      return <span className="text-2xl font-bold leading-none text-white">$</span>;
    default:
      return null;
  }
}

export function FeatureIconCircle({ name }: { name: FeatureGlyph }) {
  return (
    <span className="inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-md ring-4 ring-white">
      <FeatureIconGlyph name={name} />
    </span>
  );
}
