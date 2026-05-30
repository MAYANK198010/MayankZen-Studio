import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { SiteNav } from "@/components/site/SiteNav";
import { Field, GoogleIcon } from "./login";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create account — Vibely Studio" },
      { name: "description", content: "Create your Vibely Studio account." },
    ],
  }),
  component: SignupPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name too short").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  password: z.string().min(6, "Use at least 6 characters").max(128),
});

function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErr(null);
    const parsed = schema.safeParse({ name, email, password });
    if (!parsed.success) { setErr(parsed.error.issues[0].message); return; }
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: { full_name: parsed.data.name },
      },
    });
    setLoading(false);
    if (error) { setErr(error.message); return; }
    if (data.session) navigate({ to: "/" });
    else setSent(true);
  };

  const onGoogle = async () => {
    setErr(null);
    const r = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (r.error) setErr(r.error.message);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-md mx-auto">
          <h1 className="font-display text-3xl font-bold tracking-tight">Create your account</h1>
          <p className="mt-2 text-sm text-muted-foreground">Join Vibely Studio in seconds.</p>

          {sent ? (
            <div className="mt-8 rounded-xl border border-border bg-card p-6">
              <h2 className="font-semibold">Check your inbox</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We sent a confirmation link to <span className="text-foreground">{email}</span>. Click it to activate your account.
              </p>
              <Link to="/login" className="mt-4 inline-block text-sm text-primary hover:underline">Back to sign in</Link>
            </div>
          ) : (
            <>
              <button
                onClick={onGoogle}
                className="mt-8 w-full inline-flex items-center justify-center gap-3 rounded-full border border-border bg-card hover:bg-accent transition-colors px-4 py-3 text-sm font-semibold"
              >
                <GoogleIcon /> Continue with Google
              </button>
              <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
                <div className="h-px flex-1 bg-border" /> or email <div className="h-px flex-1 bg-border" />
              </div>
              <form onSubmit={onSubmit} className="space-y-4">
                <Field label="Full name" value={name} onChange={setName} placeholder="Jane Doe" />
                <Field label="Email" type="email" value={email} onChange={setEmail} placeholder="you@company.com" />
                <Field label="Password" type="password" value={password} onChange={setPassword} placeholder="At least 6 characters" />
                {err && <p className="text-sm text-destructive">{err}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-primary text-primary-foreground font-semibold px-4 py-3 text-sm shadow-glow hover:bg-primary-glow transition-colors disabled:opacity-60"
                >
                  {loading ? "Creating…" : "Create account"}
                </button>
                <p className="text-xs text-muted-foreground">
                  We'll email you a confirmation link before you can sign in.
                </p>
              </form>
              <p className="mt-8 text-sm text-muted-foreground">
                Already have an account? <Link to="/login" className="text-primary hover:underline">Sign in</Link>
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  );
}