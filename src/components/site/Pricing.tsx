import { SectionHeading } from "./SectionHeading";

const tiers = [
  {
    name: "Starter",
    price: "₹15K",
    desc: "Perfect for small businesses and personal brands ready to launch.",
    items: ["1-page modern website", "Mobile-first design", "Basic SEO + analytics", "1 round of revisions"],
    accent: false,
  },
  {
    name: "Growth",
    price: "₹60K",
    desc: "Multi-page sites with automation hooks for businesses that want to scale.",
    items: ["Up to 8 pages", "CMS integration", "WhatsApp / lead automation", "AI chatbot prep"],
    accent: true,
  },
  {
    name: "Enterprise",
    price: "Let's talk",
    desc: "Custom platforms, AI workflows, and dedicated engineering capacity.",
    items: ["Custom app or platform", "AI agents & integrations", "Ongoing maintenance", "Direct founder access"],
    accent: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-14">
        <SectionHeading
          eyebrow="Engagements"
          title="Transparent starting points. Custom from there."
          description="Every project is unique. These are starting bands — final scope is shaped together."
          align="center"
        />
        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-8 border transition-colors ${
                t.accent
                  ? "border-primary/50 bg-card shadow-glow"
                  : "border-border bg-card/40 hover:border-primary/30"
              }`}
            >
              {t.accent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-mono-ui uppercase tracking-widest bg-primary text-primary-foreground">
                  Most popular
                </div>
              )}
              <h3 className="font-display text-xl font-bold">{t.name}</h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-xs font-mono-ui text-muted-foreground">starting from</span>
              </div>
              <div className="font-display text-4xl font-extrabold mt-1">{t.price}</div>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{t.desc}</p>
              <ul className="mt-6 space-y-2.5 text-sm border-t border-border pt-5">
                {t.items.map((i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className={`mt-1 size-1.5 rounded-full ${t.accent ? "bg-primary" : "bg-accent"}`} />
                    <span className="text-foreground/80">{i}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-colors ${
                  t.accent
                    ? "bg-primary text-primary-foreground hover:bg-primary-glow"
                    : "border border-border hover:bg-card"
                }`}
              >
                Start a conversation →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}