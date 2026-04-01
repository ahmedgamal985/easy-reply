type BrandMarkProps = {
  /** Header: larger lockup. Footer: slightly smaller. Compare: compact for table header. */
  variant?: "header" | "footer" | "compare";
};

const imgSizes = {
  /** Taller than wordmark — reads clearly above the text line */
  header:
    "h-16 w-16 min-h-16 min-w-16 shrink-0 sm:h-[4.5rem] sm:w-[4.5rem] sm:min-h-[4.5rem] sm:min-w-[4.5rem]",
  footer:
    "h-14 w-14 min-h-14 min-w-14 shrink-0 sm:h-16 sm:w-16 sm:min-h-16 sm:min-w-16 md:h-[4.25rem] md:w-[4.25rem] md:min-h-[4.25rem] md:min-w-[4.25rem]",
  compare: "h-9 w-9 min-h-9 min-w-9 shrink-0 sm:h-10 sm:w-10 sm:min-h-10 sm:min-w-10",
} as const;

const textSizes = {
  header:
    "whitespace-nowrap text-[1.0625rem] leading-tight sm:text-lg sm:leading-tight md:text-xl md:leading-tight",
  footer:
    "whitespace-nowrap text-base leading-tight sm:text-lg sm:leading-tight md:text-xl md:leading-tight",
  compare: "whitespace-nowrap text-[0.9375rem] leading-none sm:text-base sm:leading-none",
} as const;

/**
 * Logo + wordmark lockup for Easy Reply (header / footer / compact variants).
 */
export function BrandMark({ variant = "header" }: BrandMarkProps) {
  const size = variant === "header" ? 72 : variant === "compare" ? 40 : 64;
  const inner = (
    <>
      <img
        src="/logo.png"
        alt=""
        width={size}
        height={size}
        className={`-me-1.5 object-contain object-center sm:-me-2 ${imgSizes[variant]}`}
        decoding="async"
      />
      <span
        className={`font-display font-black tracking-[-0.045em] text-black antialiased ${textSizes[variant]}`}
      >
        Easy Reply
      </span>
    </>
  );

  if (variant === "compare") {
    return <div className="inline-flex shrink-0 items-center justify-center gap-0">{inner}</div>;
  }

  return <div className="group inline-flex shrink-0 items-center gap-0">{inner}</div>;
}
