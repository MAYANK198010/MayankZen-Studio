export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-14">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-sm" style={{ background: "var(--gradient-primary)" }} />
            <span className="font-display font-bold tracking-tight text-lg">
              Vibely<span className="text-primary">.</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Vibely Studio (MayankZen Studios) — building digital systems that
            actually move business metrics.
          </p>
        </div>
        <div>
          <div className="font-mono-ui text-[11px] uppercase tracking-widest text-muted-foreground mb-4">Studio</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-primary-glow">Services</a></li>
            <li><a href="#process" className="hover:text-primary-glow">Process</a></li>
            <li><a href="#work" className="hover:text-primary-glow">Work</a></li>
            <li><a href="#pricing" className="hover:text-primary-glow">Pricing</a></li>
          </ul>
        </div>
        <div>
          <div className="font-mono-ui text-[11px] uppercase tracking-widest text-muted-foreground mb-4">Capabilities</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>AI Automation</li>
            <li>E-Commerce</li>
          </ul>
        </div>
        <div>
          <div className="font-mono-ui text-[11px] uppercase tracking-widest text-muted-foreground mb-4">Social</div>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.linkedin.com/in/mayank-kumar-83a489379" target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/maynix_studios" target="_blank" rel="noreferrer" className="hover:text-accent">Instagram</a></li>
            <li><a href="https://youtube.com/@sysfactzone" target="_blank" rel="noreferrer" className="hover:text-accent">YouTube</a></li>
            <li><a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs font-mono-ui text-muted-foreground">
        <span>© 2026 VIBELY STUDIO · MAYANKZEN STUDIOS</span>
        <span>SYSTEM_V1.0 · BUILDING DIGITAL WORLDS</span>
      </div>
    </footer>
  );
}