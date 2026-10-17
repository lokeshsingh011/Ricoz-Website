import { useState, useMemo } from "react"
import { Link } from "react-router"
import { demoCustomers } from "@/data/admin/demoData"
import type { RelationshipStage } from "@/data/admin/types"

const STAGE_LABELS: Record<RelationshipStage, string> = {
  new: "New",
  engaged: "Engaged",
  "follow-up": "Follow-up",
  ongoing: "Ongoing",
}

const STAGE_COLORS: Record<RelationshipStage, string> = {
  new: "text-primary border-primary/30 bg-primary/5",
  engaged: "text-foreground border-border bg-secondary",
  "follow-up": "text-foreground border-amber-300/60 bg-amber-50",
  ongoing: "text-foreground border-border bg-secondary",
}

const ALL_STAGES: RelationshipStage[] = [
  "new",
  "engaged",
  "follow-up",
  "ongoing",
]

export default function AdminCustomers() {
  const [query, setQuery] = useState("")
  const [stageFilter, setStageFilter] = useState<RelationshipStage | "">("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return demoCustomers.filter((c) => {
      if (stageFilter && c.stage !== stageFilter) return false
      if (!q) return true
      return (
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        (c.company ?? "").toLowerCase().includes(q)
      )
    })
  }, [query, stageFilter])

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Operations
        </p>
        <h1 className="text-2xl font-display text-foreground mb-1">
          Customer Management
        </h1>
        <p className="text-sm text-muted-foreground">
          Customer relationships and their interaction history.
          <span className="ml-2 text-[11px] text-muted-foreground/70">
            {demoCustomers.length}{" "}
            {demoCustomers.length === 1 ? "record" : "records"} (prototype data)
          </span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 max-w-sm">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search customers…"
            className="w-full pl-8 pr-3 py-2 text-sm bg-background border border-border rounded-[var(--radius)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          <svg
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
            width="14"
            height="14"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="8"
              cy="8"
              r="5.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12.5 12.5l3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <select
          value={stageFilter}
          onChange={(e) =>
            setStageFilter(e.target.value as RelationshipStage | "")
          }
          className="px-3 py-2 text-sm bg-background border border-border rounded-[var(--radius)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring text-foreground"
        >
          <option value="">All stages</option>
          {ALL_STAGES.map((s) => (
            <option key={s} value={s}>
              {STAGE_LABELS[s]}
            </option>
          ))}
        </select>
      </div>

      <p className="text-xs text-muted-foreground mb-4">
        {filtered.length} {filtered.length === 1 ? "customer" : "customers"}
        {query || stageFilter ? " matching filters" : ""}
      </p>

      {filtered.length === 0 ? (
        <div className="py-16 text-center border border-border rounded-[var(--radius-md)]">
          <p className="text-sm text-muted-foreground">
            No customers match the current filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("")
              setStageFilter("")
            }}
            className="mt-3 text-xs text-primary hover:text-[#A50F28]"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="border border-border rounded-[var(--radius-md)] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-4 py-3">
                  Customer
                </th>
                <th className="text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-4 py-3 hidden sm:table-cell">
                  Activity
                </th>
                <th className="text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-4 py-3">
                  Stage
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr
                  key={c.id}
                  className="border-b border-border last:border-0 hover:bg-secondary/40 transition-colors"
                >
                  <td className="px-4 py-3">
                    <p className="font-medium text-foreground">{c.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {c.company ?? c.email}
                    </p>
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    <div className="flex gap-3 text-xs text-muted-foreground">
                      {c.enquiryIds.length > 0 && (
                        <span>
                          {c.enquiryIds.length}{" "}
                          {c.enquiryIds.length === 1 ? "enquiry" : "enquiries"}
                        </span>
                      )}
                      {c.consultationIds.length > 0 && (
                        <span>
                          {c.consultationIds.length}{" "}
                          {c.consultationIds.length === 1
                            ? "consultation"
                            : "consultations"}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={[
                        "text-[11px] font-medium px-1.5 py-0.5 rounded border",
                        STAGE_COLORS[c.stage],
                      ].join(" ")}
                    >
                      {STAGE_LABELS[c.stage]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      to={`/admin/customers/${c.id}`}
                      className="text-xs font-medium text-primary hover:text-[#A50F28] transition-colors"
                    >
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
