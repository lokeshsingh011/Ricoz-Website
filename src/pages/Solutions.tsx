import { useState, useMemo } from "react"
import { Link } from "react-router"
import { usePageMeta, breadcrumbSchema } from "@/lib/seo"
import {
  solutions,
  solutionCategoryMeta,
  businessNeeds,
  businessNeedReasonMap,
  getSolutionsForNeed,
  type BusinessNeed,
} from "@/data/solutions"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Icon from "@/components/ui/Icon"
import {
  SearchField,
  FilterChips,
  CatalogCta,
  CatalogVisual,
} from "@/components/catalog/CatalogUI"

export default function Solutions() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategories, setActiveCategories] = useState<string[]>([])
  const [selectedNeed, setSelectedNeed] = useState<BusinessNeed | null>(null)

  usePageMeta({
    title:
      "Solutions — Ricoz | Business Capabilities for Enterprise Organisations",
    description:
      "Explore how Ricoz connects products, services, and capabilities into solutions that solve real business problems — from revenue growth and automation to cybersecurity and AI.",
    canonical: "/solutions/",
  })

  const breadcrumb = breadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions/" },
  ])

  // Process filters
  const categoryFilters = useMemo(() => {
    return solutionCategoryMeta.map((cat) => ({
      name: cat.name,
      count: solutions.filter((s) => s.category === cat.name).length,
    }))
  }, [])

  const filteredSolutions = useMemo(() => {
    let result = solutions

    if (activeCategories.length > 0) {
      result = result.filter((s) => activeCategories.includes(s.category))
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.tagline.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q),
      )
    }

    return result
  }, [searchQuery, activeCategories])

  const toggleCategory = (name: string) => {
    setActiveCategories((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name],
    )
  }

  const clearFilters = () => {
    setActiveCategories([])
    setSearchQuery("")
  }

  const recommendedSolutions = selectedNeed
    ? getSolutionsForNeed(selectedNeed)
    : []

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* ── Hero ── */}
      <section className="relative border-b border-border bg-card overflow-hidden">
        <div className="absolute inset-0 bg-secondary/50" />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "Solutions" }]} className="mb-8" />
          <div className="max-w-3xl">
            <h1 className="mb-6 font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
              Solve the problem.
              <br />
              Build what comes next.
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Ricoz helps organisations solve operational, technology, and
              growth challenges through connected digital capabilities. Explore
              solutions based on business objectives, operational needs, or the
              outcomes you are working towards.
            </p>
          </div>
        </div>
      </section>

      {/* ── Business Need Discovery ── */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-3">
              Discovery
            </p>
            <h2 className="text-3xl font-display text-foreground mb-4">
              What are you trying to improve?
            </h2>
            <p className="text-muted-foreground">
              Select a primary objective to see relevant solution
              recommendations.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2 mb-12"
            role="group"
            aria-label="Select a business objective"
          >
            {businessNeeds.map((need) => (
              <button
                key={need.id}
                type="button"
                onClick={() =>
                  setSelectedNeed((prev) => (prev === need.id ? null : need.id))
                }
                aria-pressed={selectedNeed === need.id}
                className={[
                  "px-5 py-3 text-sm font-medium rounded-full border transition-all duration-200",
                  selectedNeed === need.id
                    ? "bg-foreground text-background border-foreground shadow-sm"
                    : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground hover:bg-secondary/50",
                ].join(" ")}
              >
                {need.label}
              </button>
            ))}
          </div>

          {/* Recommendations */}
          {selectedNeed && recommendedSolutions.length > 0 && (
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-8">
                <p className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                  <Icon name="compass" size={16} /> Recommended Starting Points
                </p>
                <p className="text-muted-foreground">
                  Based on what you are trying to achieve, these capabilities may
                  be the most relevant starting point.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedSolutions.map((solution) => {
                  const reason =
                    selectedNeed &&
                    businessNeedReasonMap[selectedNeed]?.[solution.slug]
                  return (
                    <Link
                      key={solution.slug}
                      to={`/solutions/${solution.slug}`}
                      className="group flex flex-col rounded-xl border border-border bg-background p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200"
                    >
                      <div className="mb-4">
                        <CatalogVisual
                          kind="solution"
                          category={solution.category}
                          label={solution.name}
                        />
                      </div>
                      
                      {reason && (
                        <div className="mb-4 flex items-start gap-2.5 rounded-lg bg-rose/50 p-3 text-sm text-foreground/80">
                          <Icon name="solution" size={16} className="mt-0.5 shrink-0 text-primary" />
                          <p className="leading-snug">{reason}</p>
                        </div>
                      )}
                      
                      <div className="mt-auto pt-4 border-t border-border flex items-center justify-between text-sm font-medium text-primary">
                        <span>Explore solution</span>
                        <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Catalog & Search ── */}
      <section id="discover" className="flex-1 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:flex md:items-end md:justify-between md:gap-8">
            <div className="mb-8 max-w-2xl md:mb-0">
              <h2 className="mb-4 font-display text-3xl text-foreground">
                All Solutions
              </h2>
              <p className="text-muted-foreground">
                Search or filter our complete list of solutions across {solutionCategoryMeta.length} capability areas.
              </p>
            </div>
            <div className="w-full md:max-w-md shrink-0">
              <SearchField
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search solutions..."
                label="Search solutions"
              />
            </div>
          </div>

          <div className="mb-12">
            <FilterChips
              items={categoryFilters}
              active={activeCategories}
              onToggle={toggleCategory}
              onClear={clearFilters}
            />
          </div>

          {filteredSolutions.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredSolutions.map((solution) => (
                <Link
                  key={solution.slug}
                  to={`/solutions/${solution.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/20 hover:shadow-sm"
                >
                  <CatalogVisual
                    kind="solution"
                    category={solution.category}
                    label={solution.name}
                  />
                  <div className="mt-6 flex-1">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {solution.category}
                    </p>
                    <h3 className="mb-3 font-display text-xl text-foreground transition-colors group-hover:text-primary">
                      {solution.name}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {solution.tagline}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                    Learn more
                    <Icon
                      name="arrow"
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                <Icon name="search" size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                No solutions found
              </h3>
              <p className="text-sm text-muted-foreground">
                Try adjusting your search or filters to see more results.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 font-medium text-primary hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <CatalogCta
        title="Ready to solve your business challenges?"
        copy="Ricoz works with organisations at every stage — from initial discovery through deployment and beyond. A consultation costs nothing and clarifies everything."
        primaryLabel="Book a consultation"
        primaryTo="/consultation"
        secondaryLabel="Contact sales"
        secondaryTo="/contact"
      />
    </div>
  )
}
