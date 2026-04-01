import type { ReactNode } from "react";
import { useLanguage } from "../../LanguageContext";
import { useChannelTypewriter } from "./useChannelTypewriter";
import { DockBookIcon, DockDatabaseIcon, DockHeartIcon, DockUsersIcon } from "./Step2DockIcons";
import { IconInstagram, IconMessenger, IconWebChat, IconWhatsApp } from "./Step2ChannelIcons";
import { Step3ConnectVisual } from "./Step3ConnectVisual";
import { Step4DashboardMock } from "./Step4DashboardMock";

const cardClass =
  "relative overflow-visible rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_2px_24px_rgba(15,23,42,0.06)] md:p-8";

function StepBadge({ n }: { n: number }) {
  return (
    <span className="absolute end-5 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-md ring-2 ring-white md:end-6 md:top-6">
      {n}
    </span>
  );
}

function ConnectChannelBar({
  prefix,
  words,
}: {
  prefix: string;
  words: readonly string[];
}) {
  const typed = useChannelTypewriter(words);
  return (
    <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2.5 shadow-sm">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-lg font-light leading-none text-slate-400">
        +
      </span>
      <div
        className="min-h-[1.5rem] min-w-0 flex-1 text-start text-sm font-medium leading-snug"
        dir="ltr"
        lang="en"
      >
        <span className="text-slate-500">{prefix}</span>
        <span className="font-semibold text-accent">{typed}</span>
        <span
          className="how-cursor-blink ms-px inline-block h-4 w-px translate-y-0.5 bg-accent align-middle"
          aria-hidden
        />
      </div>
    </div>
  );
}

function Chip({ children, ok }: { children: ReactNode; ok?: boolean }) {
  if (ok) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-accent/70 bg-accent/5 px-2.5 py-1 text-[11px] font-medium text-accent">
        {children}
        <span>✓</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[11px] font-medium text-ink-muted">
      {children}
      <span className="text-gray-400">×</span>
    </span>
  );
}

function ChannelDock() {
  const iconWrap = "flex h-9 w-9 shrink-0 items-center justify-center text-slate-400";
  return (
    <div className="flex w-fit max-w-full items-center gap-0.5 rounded-full border border-slate-200 bg-white px-2 py-2 shadow-[0_10px_40px_rgba(15,23,42,0.12)]">
      <span className={iconWrap} aria-hidden>
        <DockUsersIcon className="h-[18px] w-[18px]" />
      </span>
      <span className={iconWrap} aria-hidden>
        <DockDatabaseIcon className="h-[18px] w-[18px]" />
      </span>
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 text-slate-600"
        aria-hidden
      >
        <DockHeartIcon className="h-[15px] w-[15px]" />
      </span>
      <span className={iconWrap} aria-hidden>
        <DockBookIcon className="h-[18px] w-[18px]" />
      </span>
      <span className="ms-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-xl font-light leading-none text-white shadow-md">
        +
      </span>
    </div>
  );
}

function ChannelTileBrand({ label, icon }: { label: string; icon: ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-[14px] border border-gray-100 bg-white p-3 shadow-sm sm:shadow-md">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] ring-1 ring-slate-200/60">
        {icon}
      </div>
      <div className="min-w-0 flex-1 space-y-1.5 pt-0.5">
        <div className="h-1.5 w-[88%] rounded-full bg-slate-200" />
        <div className="h-1.5 w-[70%] rounded-full bg-slate-200/85" />
        <div className="h-1.5 w-[46%] rounded-full bg-slate-100" />
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );
}

export function HowItWorksSection() {
  const { L } = useLanguage();
  const h = L.how;
  const ui = h.ui;
  const steps = h.steps;
  const channels = h.typewriterChannels;

  return (
    <section id="how" className="bg-[#f6f7f9] px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-accent">
          <span className="me-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" aria-hidden />
          {h.badge}
        </p>
        <h2 className="text-center font-display text-3xl font-bold text-ink md:text-4xl">{h.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-ink-muted">{h.subtitle}</p>

        <ul className="mt-12 grid list-none grid-cols-1 gap-6 p-0 md:mt-14 md:grid-cols-2 md:gap-8">
          {/* Step 1 */}
          <li className={cardClass}>
            <StepBadge n={1} />
            <h3 className="max-w-[85%] text-start font-display text-lg font-bold text-ink md:text-xl">
              {steps[0].title}
            </h3>
            <p className="mt-2 text-start text-sm leading-relaxed text-ink-muted md:text-base">{steps[0].desc}</p>
            <div className="mt-6 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 text-xs font-semibold text-ink">
                <span>{ui.addLinks}</span>
                <span className="text-gray-400">···</span>
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-lg border border-dashed border-gray-200 bg-gray-50/90 px-4 py-5 text-start text-xs text-ink-muted">
                <span className="how-pulse-dot inline-block h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>{ui.customInstructions}</span>
              </div>
              <button
                type="button"
                className="how-shimmer-btn mt-3 w-full rounded-xl bg-gradient-to-r from-accent via-emerald-400 to-accent py-3 text-sm font-semibold text-white shadow-md"
              >
                {ui.generateAi} ✨
              </button>
              <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-accent">
                <span className="text-accent" aria-hidden>
                  🔗
                </span>
                <span dir="ltr" className="truncate">
                  {ui.siteUrl}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Chip>{ui.chipSearch}</Chip>
                <Chip>{ui.chipBooking}</Chip>
                <Chip ok>{ui.chipFollow}</Chip>
              </div>
            </div>
          </li>

          {/* Step 2 */}
          <li className={cardClass}>
            <StepBadge n={2} />
            <h3 className="max-w-[85%] text-start font-display text-lg font-bold text-ink md:text-xl">
              {steps[1].title}
            </h3>
            <p className="mt-2 text-start text-sm leading-relaxed text-ink-muted md:text-base">{steps[1].desc}</p>
            <div className="relative mt-6 pb-7">
              <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-[0_8px_40px_rgba(15,23,42,0.08)] md:p-6">
                <ConnectChannelBar prefix={h.connectPrefix} words={channels} />
                <div className="mt-5 flex items-center gap-2 text-xs font-bold text-slate-800">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
                  {ui.connected}
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  <ChannelTileBrand label="WhatsApp" icon={<IconWhatsApp className="h-full w-full" />} />
                  <ChannelTileBrand label="Instagram" icon={<IconInstagram className="h-full w-full" />} />
                  <ChannelTileBrand label="Messenger" icon={<IconMessenger className="h-full w-full" />} />
                  <ChannelTileBrand label="Website chat" icon={<IconWebChat className="h-full w-full" />} />
                </div>
              </div>
              <div className="absolute -bottom-1 left-0 right-0 z-10 flex justify-center px-2">
                <ChannelDock />
              </div>
            </div>
          </li>

          {/* Step 3 */}
          <li className={cardClass}>
            <StepBadge n={3} />
            <h3 className="max-w-[85%] text-start font-display text-lg font-bold text-ink md:text-xl">
              {steps[2].title}
            </h3>
            <p className="mt-2 text-start text-sm leading-relaxed text-ink-muted md:text-base">{steps[2].desc}</p>
            <div className="w-full">
              <Step3ConnectVisual
                yourAgentLabel={ui.yourAgent}
                step1={ui.step1}
                step2={ui.step2}
                step3={ui.step3}
                launchLabel={ui.launch}
              />
            </div>
          </li>

          {/* Step 4 */}
          <li className={cardClass}>
            <StepBadge n={4} />
            <h3 className="max-w-[85%] text-start font-display text-lg font-bold text-ink md:text-xl">
              {steps[3].title}
            </h3>
            <p className="mt-2 text-start text-sm leading-relaxed text-ink-muted md:text-base">{steps[3].desc}</p>
            <Step4DashboardMock
              dashboardLabel={ui.dashboard}
              optimizeFooter={ui.optimize}
              barPrefix={ui.optimizeBarPrefix}
              barHighlight={ui.optimizeBarHighlight}
              barSuffixes={ui.optimizeBarSuffixes}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
