import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { SiteNav } from "@/components/site/SiteNav";
import { Field } from "./login";

export const Route = createFileRoute("/reset-password")({
  head: () => ({ meta: [{ title: "Reset password — Vibely Studio" }] }),
  component: ResetPage,
});

function ResetPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErr(null);
    const parsed = z.string().min(6).max(128).safeParse(password);
    if (!parsed.success) { setErr("Use at least 6 characters"); return; }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: parsed.data });
    setLoading(false);
    if (error) { setErr(error.message); return; }
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-md mx-auto">
          <h1 className="font-display text-3xl font-bold tracking-tight">Set a new password</h1>
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <Field label="New password" type="password" value={password} onChange={setPassword} placeholder="••••••••" />
            {err && <p className="text-sm text-destructive">{err}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-primary text-primary-foreground font-semibold px-4 py-3 text-sm shadow-glow hover:bg-primary-glow disabled:opacity-60"
            >
              {loading ? "Saving…" : "Update password"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}