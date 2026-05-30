import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", t: "Discovery", d: "Understand business goals, audience, and constraints." },
  { n: "02", t: "Strategy", d: "Roadmap, architecture, and a technical north star." },
  { n: "03", t: "Build", d: "Engineer, design, and test in tight feedback loops." },
  { n: "04", t: "Launch", d: "Deploy, instrument, and harden for real traffic." },
  { n: "05", t: "Scale", d: "Automate growth, monitor, and iterate forever." },
];

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-14">
        <SectionHeading
          eyebrow="Process"
          title="A repeatable system. Built for momentum."
          description="No vague timelines. No mystery handoffs. Every project moves through five sharp phases."
        />

        <div className="relative">
          <div
            aria-hidden
            className="absolute top-12 left-0 right-0 h-px hidden lg:block"
            style={{ background: "var(--gradient-primary)", opacity: 0.4 }}
          />
          <div className="grid lg:grid-cols-5 gap-6 relative">
            {steps.map((s, idx) => (
              <div key={s.n} className="space-y-4">
                <div className="relative">
                  <div className="size-24 rounded-2xl glass grid place-items-center font-display text-3xl font-extrabold text-gradient">
                    {s.n}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-px overflow-hidden">
                      <div className="h-full w-1/3 bg-accent/60 animate-flow" />
                    </div>
                  )}
                </div>
                <h3 className="font-display text-lg font-bold">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}