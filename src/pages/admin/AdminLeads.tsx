import { useState, useMemo } from "react"
import { Link } from "react-router"
import { demoEnquiries } from "@/data/admin/demoData"
import type { EnquiryStatus } from "@/data/admin/types"

const STATUS_LABELS: Record<EnquiryStatus, string> = {
  new: "New",
  "in-review": "In Review",
  contacted: "Contacted",
  "follow-up": "Follow-up",
  closed: "Closed",
}

const STATUS_COLORS: Record<EnquiryStatus, string> = {
  new: "text-primary border-primary/30 bg-primary/5",
  "in-review": "text-foreground border-border bg-secondary",
  contacted: "text-foreground border-border bg-secondary",
  "follow-up": "text-foreground border-amber-300/60 bg-amber-50",
  closed: "text-muted-foreground border-border bg-secondary",
}

const ALL_STATUSES: EnquiryStatus[] = [
  "new",
  "in-review",
  "contacted",
  "follow-up",
  "closed",
]

export default function AdminLeads() {
  const [query, setQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<EnquiryStatus | "">("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return demoEnquiries.filter((e) => {
      if (statusFilter && e.status !== statusFilter) return false
      if (!q) return true
      return (
        e.name.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q) ||
        (e.company ?? "").toLowerCase().includes(q) ||
        e.message.toLowerCase().includes(q) ||
        (e.productSlug ?? "").includes(q) ||
        (e.serviceSlug ?? "").includes(q) ||
        (e.solutionSlug ?? "").includes(q)
      )
    })
  }, [query, statusFilter])

  function fmtDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Operations
        </p>
        <h1 className="text-2xl font-display text-foreground mb-1">
          Lead Management
        </h1>
        <p className="text-sm text-muted-foreground">
          Enquiries and their progression through the customer lifecycle.
          <span className="ml-2 text-[11px] text-muted-foreground/70">
            {demoEnquiries.length}{" "}
            {demoEnquiries.length === 1 ? "record" : "records"} (prototype data)
          </span>
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 max-w-sm">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search leads…"
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
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value as EnquiryStatus | "")
          }
          className="px-3 py-2 text-sm bg-background border border-border rounded-[var(--radius)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring text-foreground"
        >
          <option value="">All statuses</option>
          {ALL_STATUSES.map((s) => (
            <option key={s} value={s}>
              {STATUS_LABELS[s]}
            </option>
          ))}
        </select>
      </div>

      {/* Count */}
      <p className="text-xs text-muted-foreground mb-4">
        {filtered.length} {filtered.length === 1 ? "lead" : "leads"}
        {query || statusFilter ? " matching filters" : ""}
      </p>

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center border border-border rounded-[var(--radius-md)]">
          <p className="text-sm text-muted-foreground">
            No leads match the current filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("")
              setStatusFilter("")
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
                  Contact
                </th>
                <th className="text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-4 py-3 hidden sm:table-cell">
                  Context
                </th>
                <th className="text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-4 py-3">
                  Status
                </th>
                <th className="text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-4 py-3 hidden md:table-cell">
                  Submitted
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((e) => (
                <tr
                  key={e.id}
                  className="border-b border-border last:border-0 hover:bg-secondary/40 transition-colors"
                >
                  <td className="px-4 py-3">
                    <p className="font-medium text-foreground">{e.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {e.company ?? e.email}
                    </p>
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    {e.productSlug ? (
                      <span className="text-xs text-muted-foreground">
                        Product:{" "}
                        <span className="text-foreground">{e.productSlug}</span>
                      </span>
                    ) : e.serviceSlug ? (
                      <span className="text-xs text-muted-foreground">
                        Service:{" "}
                        <span className="text-foreground">{e.serviceSlug}</span>
                      </span>
                    ) : e.solutionSlug ? (
                      <span className="text-xs text-muted-foreground">
                        Solution:{" "}
                        <span className="text-foreground">
                          {e.solutionSlug}
                        </span>
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground">
                        General
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={[
                        "text-[11px] font-medium px-1.5 py-0.5 rounded border",
                        STATUS_COLORS[e.status],
                      ].join(" ")}
                    >
                      {STATUS_LABELS[e.status]}
                    </span>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell text-xs text-muted-foreground">
                    {fmtDate(e.submittedAt)}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      to={`/admin/leads/${e.id}`}
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
