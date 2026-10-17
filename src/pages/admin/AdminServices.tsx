import { useState, useMemo } from "react"
import { Link } from "react-router"
import { services } from "@/data/services"
import { serviceCategorySlugMap } from "@/lib/utils"

const categoryNames = Object.keys(serviceCategorySlugMap)

export default function AdminServices() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return services.filter((s) => {
      const matchesSearch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.tagline.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.overview.toLowerCase().includes(q)
      const matchesCategory = category === "All" || s.category === category
      return matchesSearch && matchesCategory
    })
  }, [search, category])

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
            <span className="text-foreground">Services</span>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">
                Service Management
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Manage the Ricoz service catalogue
              </p>
            </div>
            <span className="text-xs font-medium px-2.5 py-1 bg-secondary border border-border rounded-[var(--radius)] text-muted-foreground">
              {services.length} services
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by name, tagline, category, or overview…"
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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 text-sm bg-background border border-border rounded-[var(--radius)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring min-w-[200px]"
          >
            <option value="All">All Categories</option>
            {categoryNames.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Result count */}
        <div className="text-xs text-muted-foreground mb-3">
          Showing {filtered.length} of {services.length} services
          {(search || category !== "All") && (
            <button
              onClick={() => {
                setSearch("")
                setCategory("All")
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
              No services match your filters.
            </p>
            <button
              onClick={() => {
                setSearch("")
                setCategory("All")
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
                    Name
                  </th>
                  <th className="text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground hidden md:table-cell">
                    Category
                  </th>
                  <th className="text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground hidden lg:table-cell">
                    Tagline
                  </th>
                  <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((service) => (
                  <tr
                    key={service.id}
                    className="border-b border-border hover:bg-secondary/40 transition-colors last:border-b-0"
                  >
                    <td className="px-4 py-3">
                      <span className="font-medium text-foreground text-sm">
                        {service.name}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-xs text-muted-foreground">
                        {service.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className="text-xs text-muted-foreground line-clamp-1 max-w-xs">
                        {service.tagline}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        to={`/admin/services/${service.slug}`}
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
