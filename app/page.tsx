import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  FileText,
  ScanSearch,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Arpeps | See how your paper holds together",
  description:
    "Analyze your paper's structure, cohesion, and concepts before you submit.",
};

const checks = [
  "Trace the ideas running through your paper",
  "Spot gaps between sections before readers do",
  "Get a focused first pass, not a wall of feedback",
];

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <header className="flex h-20 items-center justify-between border-b border-border/70">
          <Link href="/landing" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-md bg-brand text-brand-foreground shadow-[0_0_24px_color-mix(in_oklab,var(--brand)_30%,transparent)]">
              <FileText className="size-4" />
            </span>
            <span className="text-sm font-semibold tracking-tight">Arpeps</span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="flex items-center gap-1 text-sm"
          >
            <Link
              href="/login"
              className="rounded-md px-3 py-2 text-muted-foreground transition hover:bg-panel hover:text-foreground"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="rounded-md bg-foreground px-3 py-2 font-medium text-background transition hover:bg-foreground/90"
            >
              Sign up
            </Link>
          </nav>
        </header>

        <section className="relative grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20">
          <div className="pointer-events-none absolute -left-40 top-10 size-96 rounded-full bg-brand/10 blur-3xl" />
          <div className="relative">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand">
              <Sparkles className="size-3.5" />A clearer first read
            </div>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl">
              Your paper has a shape. See it before you submit.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Arpeps gives your draft a focused cohesion check, helping you
              understand how your ideas connect from the first paragraph to the
              last.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2.5 text-sm font-medium text-brand-foreground transition hover:opacity-90"
              >
                Start with your paper
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/dashboard"
                className="rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-panel"
              >
                Open dashboard
              </Link>
            </div>
          </div>

          <div className="relative min-h-[370px] rounded-xl border border-border bg-panel p-4 shadow-2xl shadow-black/20 sm:p-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <ScanSearch className="size-4 text-brand" />
                Cohesion overview
              </div>
              <span className="text-xs text-muted-foreground">Draft 01</span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-lg border border-border bg-background p-4">
                <div className="text-xs text-muted-foreground">Readiness</div>
                <div className="mt-3 text-4xl font-semibold tracking-tight">
                  82%
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[82%] rounded-full bg-brand" />
                </div>
                <p className="mt-3 text-xs leading-5 text-muted-foreground">
                  Your main thread is strong. Two transitions need attention.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-4">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Idea flow
                  </span>
                  <span className="text-xs text-brand">Connected</span>
                </div>
                <div className="space-y-5">
                  {["Research question", "Evidence", "Conclusion"].map(
                    (label, index) => (
                      <div key={label} className="flex items-center gap-3">
                        <span className="grid size-7 shrink-0 place-items-center rounded-full border border-brand/50 bg-brand/10 text-xs text-brand">
                          0{index + 1}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-brand/60 to-border" />
                        <span className="text-xs text-muted-foreground">
                          {label}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-brand/20 bg-brand/5 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 grid size-5 place-items-center rounded-full bg-brand text-brand-foreground">
                  <Check className="size-3" />
                </div>
                <div>
                  <div className="text-sm font-medium">A useful next step</div>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Make the bridge between your evidence and conclusion more
                    explicit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border py-10 sm:py-14">
          <div className="grid gap-5 sm:grid-cols-3">
            {checks.map((check, index) => (
              <div key={check} className="flex gap-3">
                <span className="mt-0.5 text-xs font-medium text-brand">
                  0{index + 1}
                </span>
                <p className="max-w-xs text-sm leading-6 text-muted-foreground">
                  {check}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Arpeps · A calmer way to read your draft.</span>
          <Link
            href="/dashboard"
            className="text-foreground transition hover:text-brand"
          >
            Go to dashboard <span aria-hidden="true">-&gt;</span>
          </Link>
        </footer>
      </div>
    </main>
  );
}
