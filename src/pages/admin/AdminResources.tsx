import { useState, useMemo } from "react"
import { Link } from "react-router"
import { resources } from "@/data/resources"
import type { Resource } from "@/data/resources"

const RESOURCE_TYPES: Resource["type"][] = [
  "insight",
  "guide",
  "article",
  "report",
  "faq",
  "knowledge",
]

const typeBadgeClass: Record<Resource["type"], string> = {
  insight: "bg-blue-50 border-blue-200 text-blue-700",
  guide: "bg-purple-50 border-purple-200 text-purple-700",
  article: "bg-secondary border-border text-muted-foreground",
  report: "bg-amber-50 border-amber-200 text-amber-700",
  faq: "bg-green-50 border-green-200 text-green-700",
  knowledge: "bg-orange-50 border-orange-200 text-orange-700",
}

export default function AdminResources() {
  const [search, setSearch] = useState("")
  const [typeFilter, setTypeFilter] = useState<"all" | Resource["type"]>("all")
  const [showNewComingSoon, setShowNewComingSoon] = useState(false)

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return resources.filter((r) => {
      const matchesSearch =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.excerpt.toLowerCase().includes(q) ||
        r.type.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q) ||
        r.topics.some((t) => t.toLowerCase().includes(q))
      const matchesType = typeFilter === "all" || r.type === typeFilter
      return matchesSearch && matchesType
    })
  }, [search, typeFilter])

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
            <Link
              to="/admin"
              className="hover:text-foreground transition-colors"
            >
              Admin
            </Link>
            <span>/</span>
            <span className="text-foreground">Resources</span>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">
                Content Management
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Manage Ricoz resources and content library
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium px-2.5 py-1 bg-secondary border border-border rounded-[var(--radius)] text-muted-foreground">
                {resources.length} resources
              </span>
              <div className="relative">
                <Link
                  to="/admin/resources/new"
                  onClick={(e) => {
                    e.preventDefault()
                    setShowNewComingSoon(true)
                    setTimeout(() => setShowNewComingSoon(false), 2500)
                  }}
                  className="text-xs font-medium px-3 py-1.5 bg-primary text-white rounded-[var(--radius)] hover:opacity-90 transition-opacity"
                >
                  New Resource
                </Link>
                {showNewComingSoon && (
                  <div className="absolute right-0 top-full mt-2 bg-foreground text-background text-[11px] px-3 py-2 rounded-[var(--radius)] whitespace-nowrap z-10">
                    Coming Soon
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search title, excerpt, type, category, or topics…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-background border border-border rounded-[var(--radius)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring pr-8"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors text-xs"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          <select
            value={typeFilter}
            onChange={(e) =>
              setTypeFilter(e.target.value as "all" | Resource["type"])
            }
            className="px-3 py-2 text-sm bg-background border border-border rounded-[var(--radius)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring min-w-[160px]"
          >
            <option value="all">All Types</option>
            {RESOURCE_TYPES.map((t) => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Result count */}
        <div className="text-xs text-muted-foreground mb-3">
          Showing {filtered.length} of {resources.length} resources
          {(search || typeFilter !== "all") && (
            <button
              onClick={() => {
                setSearch("")
                setTypeFilter("all")
              }}
              className="ml-2 underline hover:text-foreground transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Table */}
        {filtered.length === 0 ? (
          <div className="border border-border rounded-[var(--radius-md)] p-16 text-center">
            <p className="text-sm text-muted-foreground">
              No resources match your filters.
            </p>
            <button
              onClick={() => {
                setSearch("")
                setTypeFilter("all")
              }}
              className="mt-3 text-xs underline text-muted-foreground hover:text-foreground transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="border border-border rounded-[var(--radius-md)] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/60">
                  <th className="text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Title
                  </th>
                  <th className="text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground hidden sm:table-cell">
                    Type
                  </th>
                  <th className="text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground hidden md:table-cell">
                    Category
                  </th>
                  <th className="text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground hidden lg:table-cell">
                    Excerpt
                  </th>
                  <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((resource) => (
                  <tr
                    key={resource.id}
                    className="border-b border-border hover:bg-secondary/40 transition-colors last:border-b-0"
                  >
                    <td className="px-4 py-3">
                      <span className="font-medium text-foreground text-sm line-clamp-1 max-w-[200px]">
                        {resource.title}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span
                        className={`text-[11px] font-medium px-1.5 py-0.5 rounded border ${typeBadgeClass[resource.type]}`}
                      >
                        {resource.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-xs text-muted-foreground">
                        {resource.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className="text-xs text-muted-foreground line-clamp-1 max-w-xs">
                        {resource.excerpt}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        to={`/admin/resources/${resource.slug}`}
                        className="text-xs font-medium text-primary hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
