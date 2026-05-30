import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { useAuthUser } from "@/hooks/useAuthUser";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#founder", label: "Founder" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { user } = useAuthUser();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span
            className="inline-block size-3 rounded-sm shadow-glow animate-pulse-glow"
            style={{ background: "var(--gradient-primary)" }}
          />
          <span className="font-display font-bold tracking-tight text-lg">
            Vibely<span className="text-primary">.</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setMenu((v) => !v)}
                className="hidden sm:flex items-center gap-2 rounded-full border border-border bg-card px-2 py-1.5 text-sm hover:bg-accent transition-colors"
              >
                <span className="size-7 grid place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {(user.user_metadata?.full_name || user.email || "?").charAt(0).toUpperCase()}
                </span>
                <span className="pr-2 max-w-[140px] truncate text-muted-foreground">
                  {user.user_metadata?.full_name || user.email}
                </span>
              </button>
              {menu && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg border border-border bg-background shadow-xl overflow-hidden">
                  <div className="px-3 py-2 text-xs text-muted-foreground border-b border-border truncate">{user.email}</div>
                  <button
                    onClick={async () => { await supabase.auth.signOut(); setMenu(false); }}
                    className="block w-full text-left px-3 py-2 text-sm hover:bg-accent"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="hidden sm:inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors px-3"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary-glow transition-colors shadow-glow"
              >
                Get started
                <span aria-hidden>→</span>
              </Link>
            </>
          )}
          <button
            aria-label="Toggle menu"
            className="md:hidden size-9 rounded-md border border-border grid place-items-center"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="i">☰</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1 text-sm text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            {user ? (
              <button
                onClick={async () => { await supabase.auth.signOut(); setOpen(false); }}
                className="py-1 text-left text-sm text-muted-foreground hover:text-foreground"
              >
                Sign out
              </button>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)} className="py-1 text-sm text-muted-foreground hover:text-foreground">Sign in</Link>
                <Link to="/signup" onClick={() => setOpen(false)} className="py-1 text-sm text-primary">Get started →</Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}