import founderPortrait from "@/assets/founder-portrait.jpg";

export function Founder() {
  return (
    <section id="founder" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border border-border bg-card/50 overflow-hidden grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <img
              src={founderPortrait}
              alt="Mayank — Founder of Vibely Studio"
              loading="lazy"
              width={896}
              height={1152}
              className="w-full h-full object-cover aspect-[4/5]"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background to-transparent">
              <div className="flex flex-wrap gap-2">
                {["Founder", "Lead Architect", "Engineer"].map((c) => (
                  <span
                    key={c}
                    className="font-mono-ui text-[10px] uppercase tracking-widest border border-border bg-background/70 backdrop-blur px-2 py-1 rounded"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-10 lg:p-14 flex flex-col justify-center space-y-6">
            <div className="text-[11px] font-mono-ui uppercase tracking-[0.22em] text-accent">
              ── The Founder
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Hi, I'm <span className="text-gradient">Mayank</span> — developer, freelancer, and founder.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I started <strong className="text-foreground">MayankZen Studios</strong> on a simple belief:
              the future of freelancing isn't lone wolves — it's small, modern studios that
              ship like product teams. I build websites, automation, and AI-driven tools that
              actually move business metrics.
            </p>
            <blockquote className="border-l-2 border-primary pl-4 italic text-foreground/90">
              "I don't just build projects. I build systems that outlive the hype cycle."
            </blockquote>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Role</div>
                <div className="text-sm font-semibold mt-1">Developer · Founder</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Focus</div>
                <div className="text-sm font-semibold mt-1">Web · AI · Automation</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Vision</div>
                <div className="text-sm font-semibold mt-1">Limitless craft</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}