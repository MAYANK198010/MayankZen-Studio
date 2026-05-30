import { SectionHeading } from "./SectionHeading";

type Status = "live" | "completed" | "coming";
const projects: { name: string; tag: string; status: Status; desc: string; grad: string }[] = [
  {
    name: "Maynix Studios",
    tag: "Brand Platform",
    status: "completed",
    desc: "Official portfolio platform — the home of MayankZen Studios.",
    grad: "from-primary/30 via-primary/10 to-transparent",
  },
  {
    name: "NextCart",
    tag: "E-Commerce",
    status: "live",
    desc: "Modern online shopping experience with edge-cached storefront.",
    grad: "from-accent/30 via-accent/10 to-transparent",
  },
  {
    name: "AI Chan",
    tag: "Desktop AI",
    status: "coming",
    desc: "Virtual desktop assistant with friendly conversational AI behavior.",
    grad: "from-primary/25 via-accent/10 to-transparent",
  },
  {
    name: "MS Messenger",
    tag: "Realtime Chat",
    status: "coming",
    desc: "Multi-user real-time chat system with end-to-end encryption.",
    grad: "from-accent/25 via-primary/10 to-transparent",
  },
  {
    name: "Rakshak",
    tag: "Safety App",
    status: "coming",
    desc: "Emergency safety app — shares location and video to trusted contacts.",
    grad: "from-destructive/25 via-primary/10 to-transparent",
  },
  {
    name: "Manamons World",
    tag: "3D Game",
    status: "coming",
    desc: "3D monster training and battle universe — built for explorers.",
    grad: "from-primary/30 via-accent/15 to-transparent",
  },
];

function StatusPill({ s }: { s: Status }) {
  const map = {
    live: { label: "Live", c: "bg-accent/15 text-accent border-accent/30" },
    completed: { label: "Completed", c: "bg-primary/15 text-primary-glow border-primary/30" },
    coming: { label: "Coming Soon", c: "bg-muted text-muted-foreground border-border" },
  } as const;
  const cfg = map[s];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono-ui uppercase tracking-widest border ${cfg.c}`}>
      <span className="size-1.5 rounded-full bg-current" />
      {cfg.label}
    </span>
  );
}

export function Portfolio() {
  return (
    <section id="work" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Selected Work"
            title={<>Projects built under <span className="text-gradient">MayankZen Studios</span>.</>}
          />
          <div className="font-mono-ui text-xs text-muted-foreground">
            TOTAL_RECORDS · 006
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className={`group relative rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-primary/40 transition-all ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.grad} overflow-hidden`}>
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="absolute top-4 left-4">
                  <StatusPill s={p.status} />
                </div>
                <div className="absolute bottom-4 right-4 font-mono-ui text-[10px] text-muted-foreground bg-background/60 px-2 py-1 rounded">
                  {p.tag}
                </div>
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-4xl md:text-5xl font-extrabold text-foreground/20 group-hover:text-foreground/40 transition-colors tracking-tight">
                    {p.name}
                  </span>
                </div>
              </div>
              <div className="p-6 border-t border-border">
                <h3 className="font-display text-lg font-bold">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}