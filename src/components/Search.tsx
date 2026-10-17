import { useState, useEffect, useRef } from "react"
import { Link } from "react-router"
import { products } from "@/data/products"
import { services } from "@/data/services"
import { resources, caseStudies } from "@/data/resources"
import { solutions } from "@/data/solutions"

// ─── Types ───────────────────────────────────────────────────────────────────

const RECENT_KEY = "ricoz_recent_searches"
const MAX_RECENT = 5

type FilterType = "all" | "product" | "service" | "solution" | "resource" | "case-study"

type ResultItem = {
  type: "product" | "service" | "solution" | "resource" | "case-study"
  title: string
  category: string
  description: string
  href: string
  score: number
}

// ─── Ranking ─────────────────────────────────────────────────────────────────

function scoreText(text: string, q: string): number {
  if (!text) return 0
  const t = text.toLowerCase()
  if (t === q) return 10
  if (t.startsWith(q)) return 7
  if (t.includes(q)) return 4
  // multi-word partial match
  if (q.length >= 4) {
    const words = q.split(/\s+/).filter((w) => w.length >= 3)
    if (words.length > 0 && words.every((w) => t.includes(w))) return 2
  }
  return 0
}

function searchAll(query: string): ResultItem[] {
  const q = query.toLowerCase().trim()
  if (!q) return []

  const results: ResultItem[] = []

  products.forEach((p) => {
    let score = 0
    score += scoreText(p.name, q) * 3
    score += scoreText(p.category, q) * 1.5
    score += scoreText(p.shortDescription, q) * 1.5
    score += scoreText(p.overview ?? "", q)
    if (p.capabilities?.some((c) => c.toLowerCase().includes(q))) score += 1
    if (p.tagline && scoreText(p.tagline, q) > 0) score += 0.5
    if (score > 0) {
      results.push({
        type: "product",
        title: p.name,
        category: p.category,
        description: p.shortDescription,
        href: `/products/${p.slug}`,
        score,
      })
    }
  })

  services.forEach((s) => {
    let score = 0
    score += scoreText(s.name, q) * 3
    score += scoreText(s.category, q) * 1.5
    score += scoreText(s.shortDescription, q) * 1.5
    score += scoreText(s.overview ?? "", q)
    if (
      s.capabilities?.some(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q),
      )
    )
      score += 1
    if (score > 0) {
      results.push({
        type: "service",
        title: s.name,
        category: s.category,
        description: s.shortDescription,
        href: `/services/${s.slug}`,
        score,
      })
    }
  })

  resources.forEach((r) => {
    let score = 0
    score += scoreText(r.title, q) * 3
    score += scoreText(r.category, q) * 1.5
    score += scoreText(r.excerpt, q) * 1.5
    score += scoreText(r.type, q)
    if (r.topics?.some((t) => t.toLowerCase().includes(q))) score += 1.2
    if (r.tags?.some((t) => t.toLowerCase().includes(q))) score += 0.8
    if (score > 0) {
      results.push({
        type: "resource",
        title: r.title,
        category: r.category,
        description: r.excerpt,
        href: `/resources/${r.slug}`,
        score,
      })
    }
  })

  solutions.forEach((s) => {
    let score = 0
    score += scoreText(s.name, q) * 3
    score += scoreText(s.category, q) * 1.5
    score += scoreText(s.description, q) * 1.5
    score += scoreText(s.problem, q)
    if (s.keywords?.some((k) => k.toLowerCase().includes(q))) score += 1
    if (s.capabilities?.some((c) => c.toLowerCase().includes(q))) score += 0.8
    if (s.outcomes?.some((o) => o.toLowerCase().includes(q))) score += 0.5
    if (score > 0) {
      results.push({
        type: "solution",
        title: s.name,
        category: s.category,
        description: s.tagline,
        href: `/solutions/${s.slug}`,
        score,
      })
    }
  })

  caseStudies.forEach((c) => {
    let score = 0
    score += scoreText(c.title, q) * 3
    score += scoreText(c.client, q) * 2
    score += scoreText(c.industry, q) * 1.5
    score += scoreText(c.challenge ?? "", q)
    if (score > 0) {
      results.push({
        type: "case-study",
        title: c.title,
        category: c.industry,
        description: c.challenge ?? "",
        href: `/resources/case-studies/${c.slug}`,
        score,
      })
    }
  })

  return results.sort((a, b) => b.score - a.score)
}

// ─── Recent searches (localStorage) ──────────────────────────────────────────

function getRecent(): string[] {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) ?? "[]")
  } catch {
    return []
  }
}

function saveRecent(term: string) {
  const next = [term, ...getRecent().filter((r) => r !== term)].slice(
    0,
    MAX_RECENT,
  )
  localStorage.setItem(RECENT_KEY, JSON.stringify(next))
}

function deleteRecent(term: string) {
  localStorage.setItem(
    RECENT_KEY,
    JSON.stringify(getRecent().filter((r) => r !== term)),
  )
}

// ─── Constants ────────────────────────────────────────────────────────────────

const TYPE_BADGE: Record<ResultItem["type"], string> = {
  product: "Product",
  service: "Service",
  solution: "Solution",
  resource: "Resource",
  "case-study": "Case Study",
}

const TYPE_GROUP: Record<ResultItem["type"], string> = {
  product: "Products",
  service: "Services",
  solution: "Solutions",
  resource: "Resources",
  "case-study": "Case Studies",
}

const TYPE_ORDER: ResultItem["type"][] = [
  "solution",
  "product",
  "service",
  "resource",
  "case-study",
]

const FILTER_OPTIONS: { id: FilterType; label: string }[] = [
  { id: "all", label: "All" },
  { id: "solution", label: "Solutions" },
  { id: "product", label: "Products" },
  { id: "service", label: "Services" },
  { id: "resource", label: "Resources" },
  { id: "case-study", label: "Case Studies" },
]

const EXPLORE_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/resources" },
  { label: "Case Studies", href: "/resources/case-studies" },
]

const FEATURED_ITEMS = [
  {
    type: "product" as const,
    title: products[0].name,
    category: products[0].category,
    href: `/products/${products[0].slug}`,
  },
  {
    type: "product" as const,
    title: products[1].name,
    category: products[1].category,
    href: `/products/${products[1].slug}`,
  },
  {
    type: "service" as const,
    title: services[0].name,
    category: services[0].category,
    href: `/services/${services[0].slug}`,
  },
]

// ─── Arrow icon ───────────────────────────────────────────────────────────────

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

interface SearchProps {
  isOpen: boolean
  onClose: () => void
}

export default function Search({ isOpen, onClose }: SearchProps) {
  const [query, setQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState<FilterType>("all")
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const allResults = searchAll(query)
  const filteredResults =
    activeFilter === "all"
      ? allResults
      : allResults.filter((r) => r.type === activeFilter)
  const hasQuery = query.trim().length > 0
  const hasResults = filteredResults.length > 0

  // Group by type
  const grouped: Partial<Record<ResultItem["type"], ResultItem[]>> = {}
  for (const type of TYPE_ORDER) {
    const items = filteredResults.filter((r) => r.type === type)
    if (items.length > 0) grouped[type] = items
  }

  // Open/reset
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 60)
      setQuery("")
      setActiveFilter("all")
      setRecentSearches(getRecent())
    }
  }, [isOpen])

  // Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose()
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [isOpen, onClose])

  function handleResultClick() {
    const term = query.trim()
    if (term) {
      saveRecent(term)
    }
    onClose()
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const term = query.trim()
    if (term) {
      saveRecent(term)
      setRecentSearches(getRecent())
    }
  }

  function handleRecentClick(term: string) {
    setQuery(term)
    setActiveFilter("all")
    setTimeout(() => inputRef.current?.focus(), 10)
  }

  function handleRemoveRecent(e: React.MouseEvent, term: string) {
    e.stopPropagation()
    deleteRecent(term)
    setRecentSearches(getRecent())
  }

  function handleClear() {
    setQuery("")
    setActiveFilter("all")
    inputRef.current?.focus()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Search surface */}
      <div className="relative bg-background flex flex-col">
        {/* Input row */}
        <form onSubmit={handleSubmit}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 py-4 md:py-5">
              <svg
                className="shrink-0 text-muted-foreground"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="9"
                  cy="9"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M14 14l4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              <label className="sr-only" htmlFor="search-input">
                Search query
              </label>
              <input
                id="search-input"
                ref={inputRef}
                type="search"
                placeholder="Search products, services, solutions and resources..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 text-base md:text-xl bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
              />

              {hasQuery && (
                <button
                  type="button"
                  onClick={handleClear}
                  aria-label="Clear search"
                  className="shrink-0 p-1.5 text-muted-foreground hover:text-foreground transition-colors rounded-[var(--radius)] focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M5.5 5.5l5 5M10.5 5.5l-5 5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              )}

              <button
                type="button"
                onClick={onClose}
                aria-label="Close search"
                className="shrink-0 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-[var(--radius)] focus-visible:ring-2 focus-visible:ring-ring"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M4 4l10 10M14 4L4 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>

        <div className="border-t border-border" />

        {/* Scrollable results area */}
        <div
          className="overflow-y-auto"
          style={{ maxHeight: "min(calc(100vh - 80px), 68vh)" }}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* ── No query: initial discovery state ── */}
            {!hasQuery && (
              <div className="flex flex-col gap-8">
                {/* Explore */}
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    Explore
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {EXPLORE_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={onClose}
                        className="text-sm px-4 py-2 bg-secondary border border-border rounded-[var(--radius)] text-foreground hover:border-foreground/20 hover:bg-muted transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Featured */}
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    Featured
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {FEATURED_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={onClose}
                        className="group flex items-center justify-between gap-3 p-4 border border-border rounded-[var(--radius-md)] hover:border-foreground/20 hover:bg-secondary transition-colors"
                      >
                        <div className="min-w-0">
                          <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-wide">
                            {TYPE_BADGE[item.type]}
                          </p>
                          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                            {item.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5 truncate">
                            {item.category}
                          </p>
                        </div>
                        <ArrowRight className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Recent searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                      Recent
                    </p>
                    <ul className="flex flex-col">
                      {recentSearches.map((term) => (
                        <li
                          key={term}
                          className="border-t border-border first:border-t-0"
                        >
                          <div className="flex items-center justify-between gap-2 py-2.5">
                            <button
                              type="button"
                              onClick={() => handleRecentClick(term)}
                              className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors text-left flex-1"
                            >
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                aria-hidden="true"
                                className="shrink-0"
                              >
                                <circle
                                  cx="7"
                                  cy="7"
                                  r="5.5"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                />
                                <path
                                  d="M7 4.5V7l1.8 1.4"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              {term}
                            </button>
                            <button
                              type="button"
                              onClick={(e) => handleRemoveRecent(e, term)}
                              aria-label={`Remove "${term}" from recent searches`}
                              className="p-1 text-muted-foreground hover:text-foreground transition-colors rounded focus-visible:ring-2 focus-visible:ring-ring"
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                              >
                                <path
                                  d="M3 3l6 6M9 3L3 9"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </button>
                          </div>
                        </li>
                      ))}
                      <li className="border-t border-border" />
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* ── Has query: results state ── */}
            {hasQuery && (
              <div className="flex flex-col gap-5">
                {/* Filter bar */}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div
                    className="flex items-center gap-1.5 flex-wrap"
                    role="group"
                    aria-label="Filter results by type"
                  >
                    {FILTER_OPTIONS.map((opt) => {
                      const count =
                        opt.id === "all"
                          ? allResults.length
                          : allResults.filter((r) => r.type === opt.id).length
                      if (opt.id !== "all" && count === 0) return null
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setActiveFilter(opt.id)}
                          aria-pressed={activeFilter === opt.id}
                          className={[
                            "text-xs font-medium px-3 py-1.5 rounded-[var(--radius)] transition-colors",
                            activeFilter === opt.id
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted",
                          ].join(" ")}
                        >
                          {opt.label}
                          {count > 0 && (
                            <span className="ml-1.5 opacity-70 tabular-nums">
                              {count}
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                  <p className="text-xs text-muted-foreground shrink-0 tabular-nums">
                    {filteredResults.length} result
                    {filteredResults.length !== 1 ? "s" : ""}
                  </p>
                </div>

                {/* No results */}
                {!hasResults && (
                  <div className="py-10">
                    <p className="text-lg font-display text-foreground mb-2">
                      No results for "{query}"
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">Try:</p>
                    <ul className="text-sm text-muted-foreground mb-6 ml-4 flex flex-col gap-0.5">
                      <li>A broader search term</li>
                      <li>A product or service category name</li>
                      <li>A different keyword</li>
                    </ul>
                    <div className="flex flex-wrap gap-4">
                      <Link
                        to="/products"
                        onClick={onClose}
                        className="text-sm text-primary hover:text-[#A50F28] transition-colors"
                      >
                        Explore Products →
                      </Link>
                      <Link
                        to="/services"
                        onClick={onClose}
                        className="text-sm text-primary hover:text-[#A50F28] transition-colors"
                      >
                        Explore Services →
                      </Link>
                      <Link
                        to="/resources"
                        onClick={onClose}
                        className="text-sm text-primary hover:text-[#A50F28] transition-colors"
                      >
                        Explore Resources →
                      </Link>
                    </div>
                  </div>
                )}

                {/* Grouped results */}
                {hasResults && (
                  <div className="flex flex-col gap-7">
                    {TYPE_ORDER.map((type) => {
                      const items = grouped[type]
                      if (!items) return null
                      return (
                        <section key={type} aria-label={TYPE_GROUP[type]}>
                          <div className="flex items-center justify-between mb-3">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                              {TYPE_GROUP[type]}
                            </p>
                            <span className="text-xs text-muted-foreground tabular-nums">
                              {items.length}
                            </span>
                          </div>
                          <ul className="flex flex-col">
                            {items.slice(0, 5).map((item) => (
                              <li
                                key={item.href}
                                className="border-t border-border first:border-t-0"
                              >
                                <Link
                                  to={item.href}
                                  onClick={handleResultClick}
                                  className="group flex items-start justify-between gap-4 py-3.5 -mx-2 px-2 rounded-[var(--radius)] hover:bg-secondary transition-colors"
                                >
                                  <div className="min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground border border-border px-1.5 py-px rounded-sm shrink-0">
                                        {TYPE_BADGE[item.type]}
                                      </span>
                                      <span className="text-xs text-muted-foreground truncate">
                                        {item.category}
                                      </span>
                                    </div>
                                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                      {item.title}
                                    </p>
                                    {item.description && (
                                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                        {item.description}
                                      </p>
                                    )}
                                  </div>
                                  <ArrowRight className="shrink-0 mt-1 text-muted-foreground group-hover:text-primary transition-colors" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </section>
                      )
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
