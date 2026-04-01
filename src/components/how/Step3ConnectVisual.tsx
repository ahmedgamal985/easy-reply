import { useId, type ReactNode } from "react";
import { IconInstagram, IconMessenger, IconWhatsApp } from "./Step2ChannelIcons";

function ChatBubbleSoftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        fill="#E0F2FE"
        stroke="#7DD3FC"
        strokeWidth="1.2"
        d="M5 5.5h14a2 2 0 012 2v6.5a2 2 0 01-2 2h-4.2L9 20.5v-4.5H5a2 2 0 01-2-2v-6.5a2 2 0 012-2z"
      />
    </svg>
  );
}

function ColorfulRocketIcon({ className }: { className?: string }) {
  const gid = useId().replace(/:/g, "");
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id={`rk-${gid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="45%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#rk-${gid})`}
        d="M12 3.2c1.1 1 1.8 2.4 2 4 .2 1.6-.1 3.1-.8 4.5L12 19.5l-1.2-7.8c-.7-1.4-1-2.9-.8-4.5.2-1.6.9-3 2-4zm0 6.3a1.35 1.35 0 110 .01v-.01z"
      />
      <circle cx="12" cy="9.5" r="1.35" fill="white" fillOpacity="0.95" />
    </svg>
  );
}

function OrbitIconWrap({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <div
      className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-100/80 sm:h-10 sm:w-10 ${className ?? ""}`}
      aria-hidden
    >
      {children}
      <span className="sr-only">{label}</span>
    </div>
  );
}

export function Step3ConnectVisual({
  yourAgentLabel,
  step1,
  step2,
  step3,
  launchLabel,
}: {
  yourAgentLabel: string;
  step1: string;
  step2: string;
  step3: string;
  launchLabel: string;
}) {
  return (
    <div className="mx-auto mt-6 w-full max-w-md" dir="ltr">
      <div className="relative px-1 sm:px-2">
        <div
          className="pointer-events-none absolute left-10 right-10 top-[45%] z-0 h-px bg-slate-200 sm:left-12 sm:right-12"
          aria-hidden
        />
        <div className="relative z-10 flex items-center justify-between gap-0.5 sm:gap-1">
          <OrbitIconWrap className="bg-transparent p-0 shadow-none ring-0" label="WhatsApp">
            <IconWhatsApp className="h-full w-full" />
          </OrbitIconWrap>
          <OrbitIconWrap className="bg-sky-50/90" label="Chat">
            <ChatBubbleSoftIcon className="h-6 w-6 sm:h-7 sm:w-7" />
          </OrbitIconWrap>
          <div className="relative z-10 flex shrink-0 flex-col items-center">
            <div className="relative flex h-[3.35rem] w-[3.35rem] items-center justify-center rounded-full bg-white shadow-[0_6px_20px_rgba(15,23,42,0.1)] ring-1 ring-slate-100 sm:h-[3.75rem] sm:w-[3.75rem]">
              <div
                className="pointer-events-none absolute -bottom-0.5 left-1/2 h-2.5 w-10 -translate-x-1/2 rounded-full bg-accent/25 blur-md"
                aria-hidden
              />
              <ColorfulRocketIcon className="relative z-10 h-8 w-8 sm:h-9 sm:w-9" />
            </div>
            <span className="sr-only">Launch</span>
          </div>
          <OrbitIconWrap className="bg-gradient-to-br from-fuchsia-50 to-orange-50 p-0.5" label="Instagram">
            <IconInstagram className="h-full w-full rounded-full" />
          </OrbitIconWrap>
          <OrbitIconWrap className="bg-blue-50/90 p-0.5" label="Messenger">
            <IconMessenger className="h-full w-full rounded-full" />
          </OrbitIconWrap>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="h-11 w-0 border-l-2 border-dotted border-accent" aria-hidden />
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_8px_32px_rgba(15,23,42,0.08)] sm:p-5">
        <div className="flex gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold text-slate-900 sm:text-sm">{yourAgentLabel}</p>
            <ul className="mt-3 space-y-2 text-[11px] font-medium text-slate-600 sm:text-xs">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {step1}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {step2}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {step3}
              </li>
            </ul>
          </div>
          <div className="min-w-0 max-w-[42%] flex-1 space-y-2 pt-1 sm:max-w-none">
            <div className="h-2 rounded-full bg-slate-200" />
            <div className="h-2 w-[88%] rounded-full bg-slate-100" />
            <div className="h-2 w-[72%] rounded-full bg-slate-100" />
            <div className="h-2 w-[80%] rounded-full bg-slate-100" />
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-light leading-none text-white shadow-md ring-2 ring-accent/20"
            aria-label="Add"
          >
            +
          </button>
          <span className="inline-flex min-w-0 flex-1 items-center justify-between gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-accent to-emerald-600 py-2.5 ps-5 pe-2 text-xs font-bold text-white shadow-md sm:text-sm">
            <span className="truncate">{launchLabel}</span>
            <span className="h-5 w-5 shrink-0 rounded-full bg-white shadow-inner ring-1 ring-white/50" aria-hidden />
          </span>
        </div>
      </div>
    </div>
  );
}
