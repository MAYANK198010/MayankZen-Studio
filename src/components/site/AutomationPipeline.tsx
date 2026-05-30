import { SectionHeading } from "./SectionHeading";

const nodes = [
  { label: "Lead Form", tag: "TRIGGER", tone: "primary" },
  { label: "CRM Sync", tag: "ACTION", tone: "accent" },
  { label: "AI Analysis", tag: "AGENT", tone: "primary" },
  { label: "WhatsApp Bot", tag: "REPLY", tone: "accent" },
  { label: "Sales Dashboard", tag: "REPORT", tone: "primary" },
] as const;

export function AutomationPipeline() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl border border-border bg-card/40 p-8 md:p-14 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-50"
            style={{ background: "var(--gradient-glow)" }}
          />
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Automation Engine"
                title={<>Reduce manual work to <span className="text-gradient">near zero.</span></>}
                description="We wire intelligent pipelines that capture, qualify, and respond to leads in seconds — while your team focuses on building."
              />
              <div className="mt-8 grid grid-cols-2 gap-5">
                {[
                  { v: "94%", l: "Faster lead reply" },
                  { v: "8h/wk", l: "Saved per teammate" },
                ].map((s) => (
                  <div key={s.l} className="glass rounded-xl p-4">
                    <div className="font-display text-2xl font-bold text-gradient">{s.v}</div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground">
                  WORKFLOW · lead_capture
                </span>
                <span className="font-mono-ui text-[10px] text-accent animate-pulse-glow">
                  ● LIVE
                </span>
              </div>
              <ol className="mt-4 space-y-3">
                {nodes.map((n, i) => (
                  <li key={n.label}>
                    <div className="flex items-center justify-between rounded-lg border border-border bg-background/40 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono-ui text-[10px] text-muted-foreground w-5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-medium">{n.label}</span>
                      </div>
                      <span
                        className={`font-mono-ui text-[10px] px-2 py-0.5 rounded ${
                          n.tone === "primary"
                            ? "bg-primary/15 text-primary-glow"
                            : "bg-accent/15 text-accent"
                        }`}
                      >
                        {n.tag}
                      </span>
                    </div>
                    {i < nodes.length - 1 && (
                      <div className="relative h-4 flex justify-center">
                        <div className="w-px h-full bg-border" />
                        <div className="absolute inset-y-0 w-px overflow-hidden">
                          <div className="w-px h-2 bg-accent animate-flow" />
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}