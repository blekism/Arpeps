import { Paper } from "@/lib/types";

// Supabase-like table view of concept connections.
export default function ConceptTable({ paper }: { paper: Paper }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="flex items-center justify-between border-b border-border bg-panel-2 px-3 py-2">
        <div className="text-xs font-medium text-muted-foreground">
          public.<span className="text-foreground">connections</span>
        </div>
        <div className="text-[10px] text-muted-foreground">
          {paper.concept_relationships_tbl.length} rows
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-panel text-[11px] uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-3 py-2 font-medium">from</th>
              <th className="px-3 py-2 font-medium">to</th>
              <th className="px-3 py-2 font-medium">kind</th>
              <th className="px-3 py-2 font-medium">strength</th>
              <th className="px-3 py-2 font-medium">reason</th>
            </tr>
          </thead>
          <tbody>
            {paper.concept_relationships_tbl.map((c, key) => (
              <tr
                key={key}
                className="border-b border-border last:border-0 hover:bg-panel-2/60"
              >
                <td className="px-3 py-2 font-mono text-xs text-brand">
                  {c.from.concept_name}
                </td>
                <td className="px-3 py-2 font-mono text-xs text-brand">
                  {c.to.concept_name}
                </td>
                <td className="px-3 py-2">
                  <span
                    className={`rounded border px-1.5 py-0.5 text-[10px] uppercase ${
                      c.kind === 1
                        ? "border-emerald-500/40 text-emerald-400"
                        : "border-amber-500/40 text-amber-400"
                    }`}
                  >
                    {c.kind === 1 ? "Actual" : "Theoratical"  }
                  </span>
                </td>
                <td className="px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-20 overflow-hidden rounded bg-panel-2">
                      <div
                        className={`h-full ${c.kind === 1 ? "bg-brand" : "bg-amber-500/70"}`}
                        style={{ width: `${Math.round(c.strength * 100)}%` }}
                      />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {c.strength.toFixed(2)}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2 text-xs text-muted-foreground">
                  {c.reason}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
