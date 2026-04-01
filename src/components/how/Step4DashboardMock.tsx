import { useChannelTypewriter } from "./useChannelTypewriter";

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        fill="currentColor"
        d="M12 4l1.85 5.6h6l-4.85 3.5 1.85 5.6L12 15.2 7.15 18.7 9 13.1 4.1 9.6h6L12 4z"
      />
    </svg>
  );
}

function IconBarChartGreen({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <rect x="4.5" y="14" width="4" height="6.5" rx="1" fill="#22C55E" />
      <rect x="10" y="10" width="4" height="10.5" rx="1" fill="#22C55E" />
      <rect x="15.5" y="6" width="4" height="14.5" rx="1" fill="#22C55E" />
    </svg>
  );
}

function IconCalendarGreen({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="5.5" width="16" height="15" rx="2" stroke="#22C55E" strokeWidth="1.5" />
      <path stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" d="M4 10h16" />
      <path stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" d="M8 3.5v4M16 3.5v4" />
      <circle cx="9" cy="14" r="1.1" fill="#22C55E" />
      <circle cx="12" cy="14" r="1.1" fill="#22C55E" />
      <circle cx="15" cy="14" r="1.1" fill="#22C55E" />
    </svg>
  );
}

function IconPieGreen({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="7.25" fill="none" stroke="#22C55E" strokeWidth="1.5" />
      <path fill="#22C55E" d="M12 12V4.75a7.25 7.25 0 017.1 5.9H12z" />
    </svg>
  );
}

function DashboardOptimizeBar({
  prefix,
  highlight,
  suffixes,
}: {
  prefix: string;
  highlight: string;
  suffixes: readonly string[];
}) {
  const typed = useChannelTypewriter(suffixes);
  return (
    <div className="flex w-full items-center gap-2.5 rounded-full border border-accent bg-white px-3 py-2.5 shadow-sm">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-sm">
        <SparkleIcon className="h-4 w-4" />
      </span>
      <div
        className="min-h-[1.35rem] min-w-0 flex-1 text-start text-sm font-medium leading-snug text-slate-700"
        dir="ltr"
        lang="en"
      >
        <span className="text-slate-700">{prefix}</span>
        <span className="font-semibold text-accent">{highlight}</span>
        <span className="font-semibold text-accent">{typed}</span>
        <span
          className="how-cursor-blink ms-0.5 inline-block h-[0.95rem] w-px translate-y-0.5 bg-accent align-middle"
          aria-hidden
        />
      </div>
    </div>
  );
}

export function Step4DashboardMock({
  dashboardLabel,
  optimizeFooter,
  barPrefix,
  barHighlight,
  barSuffixes,
}: {
  dashboardLabel: string;
  optimizeFooter: string;
  barPrefix: string;
  barHighlight: string;
  barSuffixes: readonly string[];
}) {
  const tile =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm";

  return (
    <div className="relative mt-7 px-1 sm:px-2">
      <div
        className="pointer-events-none absolute left-1 right-1 top-10 z-0 min-h-[280px] rounded-[26px] bg-[#F3F4F6] sm:left-2 sm:right-2 sm:top-12"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-md rounded-2xl border border-gray-200/90 bg-white p-5 shadow-[0_10px_40px_rgba(15,23,42,0.08)] sm:p-6">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
          <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
          {dashboardLabel}
        </div>

        <div className="mt-5 flex justify-center gap-3 sm:gap-4">
          <div className={tile}>
            <IconBarChartGreen className="h-6 w-6" />
          </div>
          <div className={tile}>
            <IconCalendarGreen className="h-6 w-6" />
          </div>
          <div className={tile}>
            <IconPieGreen className="h-6 w-6" />
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-gray-200" />
            <div className="h-1.5 w-[58%] rounded-full bg-gray-200" />
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-[92%] rounded-full bg-gray-200" />
            <div className="h-1.5 w-[44%] rounded-full bg-gray-200" />
          </div>
        </div>

        <div className="mt-6">
          <DashboardOptimizeBar prefix={barPrefix} highlight={barHighlight} suffixes={barSuffixes} />
        </div>
        <p className="mt-3 text-center text-xs text-slate-400">{optimizeFooter}</p>
      </div>
    </div>
  );
}
