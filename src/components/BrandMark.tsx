type BrandMarkProps = {
  /** Header: larger lockup. Footer: slightly smaller. Compare: compact for table header. */
  variant?: "header" | "footer" | "compare";
};

const logoSizes = {
  header: "h-10 w-auto min-h-10 sm:h-11 md:h-12",
  footer: "h-9 w-auto min-h-9 sm:h-10 md:h-11",
  compare: "h-8 w-auto min-h-8 sm:h-9",
} as const;

const textSizes = {
  header:
    "w-full text-center whitespace-nowrap text-sm font-bold leading-none tracking-[-0.02em] text-ink sm:text-base md:text-[1.05rem]",
  footer:
    "w-full text-center whitespace-nowrap text-xs font-bold leading-none tracking-[-0.02em] text-ink-muted sm:text-sm",
  compare:
    "whitespace-nowrap text-[10px] font-semibold leading-none tracking-[-0.02em] text-ink sm:text-xs",
} as const;

const logoTone = "opacity-[0.92] saturate-[0.82] contrast-[0.94]";

/**
 * Logo + wordmark lockup for Easy Reply (header / footer / compact variants).
 */
export function BrandMark({ variant = "header" }: BrandMarkProps) {
  const isCompare = variant === "compare";

  return (
    <div
      className={`inline-flex shrink-0 text-ink ${
        isCompare ? "flex-row items-center gap-2" : "flex-col items-center gap-1.5 sm:gap-2"
      }`}
    >
      <img
        src="/logo.png"
        alt=""
        className={`shrink-0 object-contain object-center ${logoTone} ${logoSizes[variant]}`}
        decoding="async"
      />
      <span className={`font-display antialiased ${textSizes[variant]}`}>Easy Reply</span>
    </div>
  );
}
