import { useLanguage } from "../LanguageContext";

export function FaqSection() {
  const { L } = useLanguage();

  return (
    <section id="faq" className="border-t border-gray-100 bg-white px-3 py-16 sm:px-4 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-center text-2xl font-bold text-ink md:text-3xl">{L.faq.title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-ink-muted">{L.faq.subtitle}</p>
        <dl className="mt-10 space-y-6">
          {L.faq.items.map((item) => (
            <div key={item.q} className="rounded-2xl border border-gray-100 bg-[#fafdfb] p-5 shadow-sm">
              <dt className="font-display text-base font-semibold text-ink md:text-lg">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
