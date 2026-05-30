const items = [
  { t: "Fast Delivery", d: "Tight scopes and clear sprints. Most projects ship in 2–4 weeks.", k: "01" },
  { t: "Modern Stack", d: "Latest frameworks, edge runtimes, and AI tooling baked in.", k: "02" },
  { t: "Business-Focused", d: "We measure success in ROI, not impressions or pixels.", k: "03" },
  { t: "End-to-End Support", d: "Strategy, build, launch, and ongoing optimization in one room.", k: "04" },
];

export function WhyChoose() {
  return (
    <section className="py-20 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-border rounded-2xl overflow-hidden bg-card/40">
          {items.map((i) => (
            <div
              key={i.k}
              className="p-8 border-b md:border-b-0 md:border-r last:border-r-0 border-border hover:bg-card transition-colors"
            >
              <div className="font-mono-ui text-xs text-primary-glow">/{i.k}</div>
              <h3 className="font-display text-xl font-bold mt-3">{i.t}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}