export default function PaperSkeleton() {
  return (
    <main
      className="mx-auto max-w-5xl px-4 py-8"
      aria-busy="true"
      aria-label="Loading paper"
    >
      <div className="mb-4 h-4 w-28 animate-pulse rounded bg-muted" />

      <header className="mb-4">
        <div className="h-7 w-2/3 max-w-md animate-pulse rounded bg-muted" />
      </header>

      <div className="overflow-hidden rounded-lg border border-border bg-white text-black shadow-sm">
        <div className="flex h-8 items-center gap-2 border-b border-black/10 bg-neutral-100 px-4">
          <div className="size-2 rounded-full bg-neutral-300 animate-pulse" />
          <div className="size-2 rounded-full bg-neutral-300 animate-pulse" />
          <div className="size-2 rounded-full bg-neutral-300 animate-pulse" />
        </div>

        <article className="mx-auto space-y-4 px-10 py-12">
          <div className="h-4 w-full animate-pulse rounded bg-neutral-200" />
          <div className="h-4 w-11/12 animate-pulse rounded bg-neutral-200" />
          <div className="h-4 w-4/5 animate-pulse rounded bg-neutral-200" />
          <div className="h-4 w-full animate-pulse rounded bg-neutral-200" />
          <div className="h-4 w-10/12 animate-pulse rounded bg-neutral-200" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-neutral-200" />
          <div className="h-4 w-full animate-pulse rounded bg-neutral-200" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-neutral-200" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-neutral-200" />
        </article>
      </div>
    </main>
  );
}
