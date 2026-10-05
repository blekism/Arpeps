export default function VisualizerSkeleton() {
  return (
    <main
      className="mx-auto max-w-6xl px-4 py-8"
      aria-busy="true"
      aria-label="Loading concept graph"
    >
      <div className="mb-4 h-4 w-28 animate-pulse rounded bg-muted" />

      <header className="mb-4 space-y-2">
        <div className="h-7 w-40 animate-pulse rounded bg-muted" />
        <div className="h-3 w-full max-w-2xl animate-pulse rounded bg-muted" />
        <div className="h-3 w-5/6 max-w-xl animate-pulse rounded bg-muted" />
      </header>

      <section className="relative h-[min(70vh,640px)] min-h-[420px] overflow-hidden rounded-lg border border-border bg-panel shadow-sm"></section>
    </main>
  );
}
