export function CheckerSkeleton() {
  const skeletonBD = Array.from({ length: 5 }, (_, index) => ({
    concept_id: index,
    concepts_tbl: {
      concept_name: "Loading concept...",
    },
    extracted_content: "Loading extracted content...",
  }));
  const skeletonRows = Array.from({ length: 5 }, (_, index) => index);

  return (
    <>
      <header className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="h-10 w-60 rounded bg-muted animate-pulse mb-3" />
          <div className="h-6 w-25 rounded bg-muted animate-pulse" />
        </div>
      </header>

      <div className="space-y-8">
        <Section>
          <section className="grid gap-3 md:grid-cols-2">
            {skeletonBD.map((k) => (
              <div
                key={k.concept_id}
                className="rounded-lg border border-border bg-panel p-4 animate-pulse"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="h-8 w-48 rounded bg-muted animate-pulse" />
                </div>
                <div className="h-6 w-25 rounded bg-muted animate-pulse" />
              </div>
            ))}
          </section>
        </Section>

        <Section>
          <div className="overflow-hidden rounded-lg border border-border animate-pulse">
            <div className="flex items-center justify-between border-b border-border bg-panel-2 px-3 py-2">
              <div className="h-4 w-28 rounded bg-muted" />
              <div className="h-4 w-16 rounded bg-muted" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border bg-panel">
                  <tr>
                    {Array.from({ length: 6 }, (_, index) => (
                      <th key={index} className="px-3 py-2">
                        <div className="h-3 w-16 rounded bg-muted" />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {skeletonRows.map((row) => (
                    <tr
                      key={row}
                      className="border-b border-border last:border-0"
                    >
                      {Array.from({ length: 5 }, (_, col) => (
                        <td key={`${row}-${col}`} className="px-3 py-2">
                          <div
                            className="h-4 rounded bg-muted"
                            style={{
                              width: col === 4 ? "60%" : `${70 - col * 8}%`,
                            }}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        <Section>
          <div className="space-y-4">
            <div className="flex items-end justify-between rounded-lg border border-border bg-panel p-4 animate-pulse">
              <div className="space-y-2">
                <div className="h-3 w-24 rounded bg-muted" />
                <div className="h-8 w-32 rounded bg-muted" />
              </div>
              <div className="h-4 w-40 rounded bg-muted" />
            </div>

            <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-panel">
              {skeletonRows.map((row) => (
                <div
                  key={row}
                  className="flex items-start gap-3 p-4 animate-pulse"
                >
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-muted" />
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="h-4 w-32 rounded bg-muted" />
                    <div className="h-3 w-full rounded bg-muted" />
                    <div className="h-3 w-4/5 rounded bg-muted" />
                  </div>
                  <div className="h-5 w-16 rounded bg-muted" />
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-3">
        <div className="h-6 w-48 rounded bg-muted mb-2 animate-pulse" />
        <div className="h-4 w-60 rounded bg-muted animate-pulse" />
      </div>
      {children}
    </section>
  );
}
