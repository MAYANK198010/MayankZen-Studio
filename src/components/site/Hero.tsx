import heroDashboard from "@/assets/hero-dashboard.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div className="animate-fade-in-up space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-[11px] font-mono-ui uppercase tracking-[0.18em] text-primary-glow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Now Booking · Q3 Engagements
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight text-balance">
            Build. Automate. <span className="text-gradient">Scale.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            We modernize businesses through custom engineering, intelligent AI workflows,
            and scalable digital ecosystems. Stop operating manually — start growing strategically.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary-glow transition-colors shadow-glow"
            >
              Book Free Consultation <span aria-hidden>→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border border-border bg-card/50 hover:bg-card transition-colors"
            >
              View Our Work
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6 max-w-md">
            {[
              { v: "10+", l: "Projects shipped" },
              { v: "100%", l: "On-time delivery" },
              { v: "24/7", l: "Founder access" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-bold text-foreground">{s.v}</div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-in-up" style={{ animationDelay: "150ms" }}>
          <div
            aria-hidden
            className="absolute -inset-10 -z-10 rounded-full blur-3xl"
            style={{ background: "var(--gradient-glow)" }}
          />
          <div className="glass rounded-2xl p-3 shadow-elevate">
            <div className="flex items-center justify-between px-3 py-2 border-b border-border">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-destructive/60" />
                <span className="size-2.5 rounded-full bg-accent/60" />
                <span className="size-2.5 rounded-full bg-primary/60" />
              </div>
              <span className="font-mono-ui text-[10px] tracking-widest text-muted-foreground">
                SYSTEM_STATUS · ACTIVE
              </span>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={heroDashboard}
                alt="AI automation dashboard with telemetry panels"
                width={1280}
                height={1024}
                className="w-full h-auto"
              />
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-x-0 h-px bg-accent/40 animate-scanline" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 w-56 shadow-elevate hidden sm:block">
            <div className="text-[10px] font-mono-ui uppercase tracking-widest text-muted-foreground">Lead Response</div>
            <div className="font-display text-2xl font-bold mt-1">12.4s</div>
            <div className="text-xs text-accent mt-1">▲ 94% faster</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 border-y border-border py-5 px-2">
        <ul className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 text-[11px] font-mono-ui uppercase tracking-[0.22em] text-muted-foreground">
          <li>● Modern Web</li>
          <li>● AI Automation</li>
          <li>● Mobile Apps</li>
          <li>● E-Commerce</li>
          <li>● Growth Systems</li>
        </ul>
      </div>
    </section>
  );
}