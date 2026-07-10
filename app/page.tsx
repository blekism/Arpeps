"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FileText, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { getSession } from "@/services/auth";
import { useRouter } from "next/navigation";

export default function AuthHandler() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (getSession()) router.push("/");
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "register") {
        if (name.trim().length < 2) throw new Error("Enter your name");
        if (password.length < 6)
          throw new Error("Password must be at least 6 characters");
        // const u = register(email.trim(), password, name.trim()); register function
        // seedDemoPaper(u.id);
        toast.success("Account created");
      } else {
        // login(email.trim(), password);
      }
      // navigate({ to: "/" }); replace with next link
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div className="grid min-h-screen place-items-center bg-background px-4">
      <div className="w-full max-w-sm">
        <Link
          href="/auth"
          className="mb-6 flex items-center justify-center gap-2"
        >
          <div className="grid size-7 place-items-center rounded bg-brand text-brand-foreground">
            <FileText className="size-4" />
          </div>
          <span className="text-sm font-semibold tracking-tight">
            PaperCheck
          </span>
        </Link>

        <div className="rounded-xl border border-border bg-panel p-6">
          <h1 className="text-lg font-semibold tracking-tight">
            {mode === "login" ? "Sign in" : "Create your account"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {mode === "login"
              ? "Access your paper analyses."
              : "Start checking papers for cohesion in seconds."}
          </p>

          <form onSubmit={onSubmit} className="mt-5 space-y-3">
            {mode === "register" && (
              <Field
                label="Name"
                value={name}
                onChange={setName}
                type="text"
                placeholder="Ada Lovelace"
                autoComplete="name"
              />
            )}
            <Field
              label="Email"
              value={email}
              onChange={setEmail}
              type="email"
              placeholder="you@school.edu"
              autoComplete="email"
              required
            />
            <Field
              label="Password"
              value={password}
              onChange={setPassword}
              type="password"
              placeholder="••••••••"
              autoComplete={
                mode === "login" ? "current-password" : "new-password"
              }
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand py-2 text-sm font-medium text-brand-foreground transition hover:opacity-90 disabled:opacity-50"
            >
              {loading && <Loader2 className="size-4 animate-spin" />}
              {mode === "login" ? "Sign in" : "Create account"}
            </button>
          </form>

          <div className="mt-4 text-center text-xs text-muted-foreground">
            {mode === "login" ? (
              <>
                No account?{" "}
                <button
                  className="text-brand hover:underline"
                  onClick={() => setMode("register")}
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  className="text-brand hover:underline"
                  onClick={() => setMode("login")}
                >
                  Sign in
                </button>
              </>
            )}
          </div>
        </div>

        <p className="mt-4 text-center text-[11px] text-muted-foreground">
          Mock authentication — data lives in your browser.
        </p>
      </div>
    </div>
  );
}

function Field(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <div className="mb-1 text-xs text-muted-foreground">{props.label}</div>
      <input
        className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
        type={props.type}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        required={props.required}
      />
    </label>
  );
}
