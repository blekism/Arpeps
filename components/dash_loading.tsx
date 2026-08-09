export function PaperListSkeleton() {
  return (
    <section className="mt-12">
      <div className="mb-3 flex items-baseline justify-between animate-pulse">
        <div className="h-6 w-48 rounded bg-muted" />
        <div className="h-6 w-23 bg-muted" />
      </div>

      <div className="space-y-2">
        <div className="group flex items-center gap-4 rounded-lg border border-border bg-panel p-4 transition animate-pulse">
          <div className="grid size-10 shrink-0 place-items-center rounded-md border border-border bg-panel-2 animate-pulse">
            <div className="size-4 bg-muted" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="h-7 w-38 rounded bg-muted" />
            <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
              <div className="h-5 w-15 rounded bg-muted" />
            </div>
          </div>
          <div className="h-4 w-10 rounded bg-muted" />

          <div className="size-3 bg-muted" />
        </div>
      </div>
    </section>
  );
}
