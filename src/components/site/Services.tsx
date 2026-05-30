import { SectionHeading } from "./SectionHeading";

const services = [
  {
    code: "01",
    title: "Website Development",
    desc: "High-performance business sites and platforms designed for conversion.",
    features: ["Business sites", "Landing pages", "Portfolio", "E-commerce"],
    tone: "primary" as const,
  },
  {
    code: "02",
    title: "Mobile App Development",
    desc: "Cross-platform mobile experiences that feel native and ship fast.",
    features: ["Android & iOS", "Flutter / RN", "SaaS MVPs", "Play Store launch"],
    tone: "accent" as const,
  },
  {
    code: "03",
    title: "AI Automation",
    desc: "Custom LLM workflows that eliminate manual overhead across teams.",
    features: ["AI chatbots", "Lead automation", "WhatsApp bots", "CRM sync"],
    tone: "primary" as const,
  },
  {
    code: "04",
    title: "E-Commerce Solutions",
    desc: "End-to-end online stores optimized for sales and operational sanity.",
    features: ["Product mgmt", "Payments", "Inventory", "Headless commerce"],
    tone: "accent" as const,
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-14">
        <SectionHeading
          eyebrow="Capabilities"
          title={<>Everything your business needs <span className="text-gradient">to grow</span>.</>}
          description="From first prototype to production scale. We design, build, and operate the digital systems modern businesses run on."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative p-6 rounded-2xl glass hover:border-primary/40 transition-colors overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 size-40 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity"
                style={{
                  background:
                    s.tone === "primary"
                      ? "color-mix(in oklab, var(--primary) 50%, transparent)"
                      : "color-mix(in oklab, var(--accent) 50%, transparent)",
                }}
              />
              <div className="flex items-center justify-between">
                <span
                  className={`font-mono-ui text-xs ${
                    s.tone === "primary" ? "text-primary-glow" : "text-accent"
                  }`}
                >
                  /{s.code}
                </span>
                <span className="size-8 rounded-lg border border-border grid place-items-center text-xs">
                  →
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mt-6">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
              <ul className="mt-5 space-y-1.5 text-xs text-muted-foreground border-t border-border pt-4">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span
                      className={`size-1 rounded-full ${
                        s.tone === "primary" ? "bg-primary" : "bg-accent"
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}