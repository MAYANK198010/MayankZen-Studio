import { SectionHeading } from "./SectionHeading";

const channels = [
  { label: "Call", value: "+91 99681 98010", href: "tel:+919968198010", code: "VOICE" },
  { label: "WhatsApp", value: "+91 99681 98010", href: "https://wa.me/919968198010", code: "DIRECT" },
  { label: "Email", value: "mayank198010@gmail.com", href: "mailto:mayank198010@gmail.com", code: "DATA" },
  { label: "LinkedIn", value: "Professional profile", href: "https://www.linkedin.com/in/mayank-kumar-83a489379", code: "PRO" },
  { label: "GitHub", value: "Open-source work", href: "https://github.com/", code: "CODE" },
  { label: "Instagram", value: "@maynix_studios", href: "https://www.instagram.com/maynix_studios", code: "FEED" },
  { label: "YouTube", value: "@sysfactzone", href: "https://youtube.com/@sysfactzone", code: "TUBE" },
  { label: "WA Channel", value: "Updates broadcast", href: "https://whatsapp.com/channel/0029Vb7UKlx6WaKr4b8Hpg2B", code: "BROADCAST" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-14">
        <SectionHeading
          eyebrow="Establish Connection"
          title={<>Let's <span className="text-gradient">work together.</span></>}
          description="Reach out on whatever channel feels natural. Replies usually inside 12 hours."
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative p-5 rounded-xl border border-border bg-card/40 hover:bg-card hover:border-primary/40 transition-colors overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -bottom-12 -right-12 size-32 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity"
                style={{ background: "color-mix(in oklab, var(--primary) 60%, transparent)" }}
              />
              <div className="font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground">
                /{c.code}
              </div>
              <div className="font-display text-lg font-bold mt-3">{c.label}</div>
              <div className="text-xs text-muted-foreground mt-1 truncate">{c.value}</div>
              <div className="mt-4 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Connect →
              </div>
            </a>
          ))}
        </div>

        <div className="relative rounded-3xl border border-border bg-card/40 p-10 md:p-16 text-center overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-60"
            style={{ background: "var(--gradient-glow)" }}
          />
          <h3 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto text-balance">
            Ready to modernize <span className="text-gradient">your business?</span>
          </h3>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Let's discuss how Vibely Studio can help your business grow through technology and automation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/919968198010"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-glow shadow-glow transition-colors"
            >
              Book Free Consultation →
            </a>
            <a
              href="mailto:mayank198010@gmail.com"
              className="px-7 py-3.5 rounded-xl border border-border bg-card/50 font-semibold hover:bg-card transition-colors"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}