import { useState, useMemo } from "react"
import { Link } from "react-router"
import { demoConsultations } from "@/data/admin/demoData"
import type { ConsultationStatus } from "@/data/admin/types"

const STATUS_LABELS: Record<ConsultationStatus, string> = {
  booked: "Booked",
  confirmed: "Confirmed",
  "reminder-sent": "Reminder Sent",
  meeting: "Meeting",
  "follow-up": "Follow-up",
  completed: "Completed",
}

const STATUS_COLORS: Record<ConsultationStatus, string> = {
  booked: "text-primary border-primary/30 bg-primary/5",
  confirmed: "text-foreground border-border bg-secondary",
  "reminder-sent": "text-foreground border-border bg-secondary",
  meeting: "text-foreground border-amber-300/60 bg-amber-50",
  "follow-up": "text-foreground border-amber-300/60 bg-amber-50",
  completed: "text-muted-foreground border-border bg-secondary",
}

const PURPOSE_LABELS: Record<string, string> = {
  "product-demo": "Product Demo",
  "service-inquiry": "Service Inquiry",
  "solution-discovery": "Solution Discovery",
  general: "General",
}

const ALL_STATUSES = Object.keys(STATUS_LABELS) as ConsultationStatus[]

export default function AdminConsultations() {
  const [query, setQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<ConsultationStatus | "">("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return demoConsultations.filter((c) => {
      if (statusFilter && c.status !== statusFilter) return false
      if (!q) return true
      return (
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        (c.company ?? "").toLowerCase().includes(q) ||
        c.preferredDate.toLowerCase().includes(q) ||
        (c.productSlug ?? "").includes(q) ||
        (c.serviceSlug ?? "").includes(q)
      )
    })
  }, [query, statusFilter])

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Operations
        </p>
        <h1 className="text-2xl font-display text-foreground mb-1">
          Consultation Management
        </h1>
        <p className="text-sm text-muted-foreground">
          Booked appointments and their operational lifecycle.
          <span className="ml-2 text-[11px] text-muted-foreground/70">
            {demoConsultations.length}{" "}
            {demoConsultations.length === 1 ? "record" : "records"} (prototype
            data)
          </span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 max-w-sm">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search consultations…"
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
            setStatusFilter(e.target.value as ConsultationStatus | "")
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

      <p className="text-xs text-muted-foreground mb-4">
        {filtered.length}{" "}
        {filtered.length === 1 ? "consultation" : "consultations"}
        {query || statusFilter ? " matching filters" : ""}
      </p>

      {filtered.length === 0 ? (
        <div className="py-16 text-center border border-border rounded-[var(--radius-md)]">
          <p className="text-sm text-muted-foreground">
            No consultations match the current filters.
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
                  Customer
                </th>
                <th className="text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-4 py-3 hidden sm:table-cell">
                  Purpose
                </th>
                <th className="text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-4 py-3 hidden md:table-cell">
                  Date
                </th>
                <th className="text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-4 py-3">
                  Status
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
                  <td className="px-4 py-3 hidden sm:table-cell text-xs text-muted-foreground">
                    {PURPOSE_LABELS[c.purpose] ?? c.purpose}
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell text-xs text-muted-foreground">
                    {c.preferredDate} · {c.preferredTime}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={[
                        "text-[11px] font-medium px-1.5 py-0.5 rounded border",
                        STATUS_COLORS[c.status],
                      ].join(" ")}
                    >
                      {STATUS_LABELS[c.status]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      to={`/admin/consultations/${c.id}`}
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
