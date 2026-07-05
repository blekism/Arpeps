export default function HomePage() {
  const features = [
    {
      title: "Fast",
      description: "Built with the Next.js App Router for optimal performance.",
    },
    {
      title: "Responsive",
      description: "Looks great on desktop, tablet, and mobile devices.",
    },
    {
      title: "Developer Friendly",
      description: "Simple structure that's easy to customize.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-1 text-sm text-slate-300">
            Next.js Starter
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Build modern web applications with{" "}
            <span className="text-sky-400">Next.js</span>
          </h1>

          <p className="mt-6 text-lg text-slate-400">
            A clean starter page with a hero section, feature cards, and a
            simple call-to-action.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-sky-500 px-6 py-3 font-medium transition hover:bg-sky-600">
              Get Started
            </button>

            <button className="rounded-lg border border-slate-700 px-6 py-3 transition hover:bg-slate-900">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="mb-8 text-3xl font-bold">Features</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>

              <p className="mt-3 text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-slate-900/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-16 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold">Ready to start building?</h2>

            <p className="mt-2 text-slate-400">
              Customize this page and make it your own.
            </p>
          </div>

          <button className="rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200">
            Create Project
          </button>
        </div>
      </section>
    </main>
  );
}
