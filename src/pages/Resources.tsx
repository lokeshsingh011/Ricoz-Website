import { useState, useMemo } from "react"
import { Link } from "react-router"
import { usePageMeta, breadcrumbSchema } from "@/lib/seo"
import {
  resources,
  resourceTopics,
  resourceTypeMeta,
  getFeaturedResource,
  type Resource,
} from "@/data/resources"
import { ResourceCard } from "@/components/cards/ResourceCard"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Icon from "@/components/ui/Icon"
import {
  SearchField,
  FilterChips,
  CatalogCta,
  CatalogVisual,
  CategoryLinkCard,
} from "@/components/catalog/CatalogUI"

const typeOrder: Resource["type"][] = [
  "insight",
  "guide",
  "article",
  "report",
  "faq",
  "knowledge",
]

export default function Resources() {
  const [activeType, setActiveType] = useState<Resource["type"] | null>(null)
  const [activeTopic, setActiveTopic] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  usePageMeta({
    title: "Resources — Ideas, Insights and Knowledge | Ricoz",
    description:
      "Explore Ricoz resources covering technology, business operations, AI, data, cybersecurity, automation, and digital transformation — designed to help organisations build what comes next.",
    canonical: "/resources/",
  })

  const breadcrumb = breadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources/" },
  ])

  const featuredResource = getFeaturedResource()
  const trimmedQuery = searchQuery.trim().toLowerCase()
  const hasSearch = trimmedQuery.length > 0
  const hasFilter = activeType !== null || activeTopic !== null
  const hasAnyFilter = hasFilter || hasSearch

  const topicFilters = useMemo(() => {
    return resourceTopics
      .map((topic) => ({
        name: topic,
        count: resources.filter((r) => r.topics.includes(topic)).length,
      }))
      .filter((t) => t.count > 0)
  }, [])

  const filtered = useMemo(() => {
    let list = resources.filter((r) => {
      if (r.slug === featuredResource.slug && !hasAnyFilter) return false
      if (activeType && r.type !== activeType) return false
      if (activeTopic && !r.topics.includes(activeTopic)) return false
      return true
    })
    if (hasSearch) {
      const q = trimmedQuery
      list = list
        .map((r) => {
          const title = r.title.toLowerCase()
          const excerpt = r.excerpt.toLowerCase()
          const category = r.category.toLowerCase()
          const topics = r.topics.map((t) => t.toLowerCase()).join(" ")
          const tags = (r.tags ?? []).join(" ").toLowerCase()
          let score = 0
          if (title === q) score = 100
          else if (title.startsWith(q)) score = 80
          else if (title.includes(q)) score = 60
          else if (r.type === q || category.includes(q)) score = 50
          else if (topics.includes(q) || tags.includes(q)) score = 40
          else if (excerpt.includes(q)) score = 20
          return { r, score }
        })
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .map(({ r }) => r)
    }
    return list
  }, [
    activeType,
    activeTopic,
    hasAnyFilter,
    featuredResource.slug,
    hasSearch,
    trimmedQuery,
  ])

  const allFiltered = useMemo(() => {
    let list = resources.filter((r) => {
      if (activeType && r.type !== activeType) return false
      if (activeTopic && !r.topics.includes(activeTopic)) return false
      return true
    })
    if (hasSearch) {
      const q = trimmedQuery
      list = list.filter((r) => {
        const title = r.title.toLowerCase()
        const excerpt = r.excerpt.toLowerCase()
        const category = r.category.toLowerCase()
        const topics = r.topics.map((t) => t.toLowerCase()).join(" ")
        const tags = (r.tags ?? []).join(" ").toLowerCase()
        return (
          title.includes(q) ||
          r.type === q ||
          category.includes(q) ||
          topics.includes(q) ||
          tags.includes(q) ||
          excerpt.includes(q)
        )
      })
    }
    return list
  }, [activeType, activeTopic, hasSearch, trimmedQuery])

  function clearFilters() {
    setActiveType(null)
    setActiveTopic(null)
    setSearchQuery("")
  }

  const toggleTopic = (topic: string) => {
    setActiveTopic((prev) => (prev === topic ? null : topic))
  }

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
          <Breadcrumb items={[{ label: "Resources" }]} className="mb-8" />
          <div className="max-w-3xl">
            <h1 className="mb-6 font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
              Ideas, insights and knowledge for building what comes next.
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Ricoz resources cover the full range of enterprise challenges —
              from technology modernisation and AI readiness to business
              operations, cybersecurity, data strategy, and growth. Designed to
              inform, not sell.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Resource ── */}
      {!hasFilter && (
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-3">
                Featured
              </p>
            </div>
            
            <Link
              to={`/resources/${featuredResource.slug}`}
              className="group flex flex-col lg:flex-row gap-10 rounded-2xl border border-border bg-card p-6 sm:p-10 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="flex-1 lg:max-w-xl">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
                    {resourceTypeMeta[featuredResource.type].label}
                  </span>
                  {featuredResource.topics[0] && (
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      {featuredResource.topics[0]}
                    </span>
                  )}
                </div>
                <h2 className="mb-5 font-display text-3xl leading-tight text-foreground transition-colors group-hover:text-primary sm:text-4xl">
                  {featuredResource.title}
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                  {featuredResource.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  Read {resourceTypeMeta[featuredResource.type].label}
                  <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              
              <div className="lg:w-80 shrink-0">
                <div className="rounded-xl border border-border bg-secondary/50 p-6">
                  <dl className="space-y-4">
                    {[
                      {
                        label: "Type",
                        value: resourceTypeMeta[featuredResource.type].label,
                      },
                      {
                        label: "Reading time",
                        value: featuredResource.readingTime,
                      },
                      {
                        label: "Published",
                        value: featuredResource.publishedDate,
                      },
                      featuredResource.author
                        ? {
                            label: "Author",
                            value: `${featuredResource.author.name} · ${featuredResource.author.role}`,
                          }
                        : null,
                    ]
                      .filter(Boolean)
                      .map((item) => (
                        <div key={item!.label} className="flex justify-between border-b border-border/50 pb-4 last:border-0 last:pb-0">
                          <dt className="text-sm text-muted-foreground">{item!.label}</dt>
                          <dd className="text-sm font-medium text-foreground text-right max-w-[150px] truncate">{item!.value}</dd>
                        </div>
                      ))}
                  </dl>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Filter bar + Listing ── */}
      <section id="discover" className="flex-1 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:flex md:items-end md:justify-between md:gap-8">
            <div className="mb-8 max-w-2xl md:mb-0">
              <h2 className="mb-4 font-display text-3xl text-foreground">
                All Resources
              </h2>
              <p className="text-muted-foreground">
                Search or filter our complete library of knowledge and insights.
              </p>
            </div>
            <div className="w-full md:max-w-md shrink-0">
              <SearchField
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search resources..."
                label="Search resources"
              />
            </div>
          </div>

          <div className="mb-8 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveType(null)}
                className={[
                  "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                  activeType === null
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                ].join(" ")}
              >
                All Types
              </button>
              {typeOrder.map((type) => {
                const count = resources.filter((r) => r.type === type).length
                if (count === 0) return null
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setActiveType(prev => prev === type ? null : type)}
                    className={[
                      "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                      activeType === type
                        ? "border-primary bg-rose text-primary"
                        : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                    ].join(" ")}
                  >
                    {resourceTypeMeta[type].plural}
                  </button>
                )
              })}
            </div>
            
            <FilterChips
              items={topicFilters}
              active={activeTopic ? [activeTopic] : []}
              onToggle={toggleTopic}
              onClear={clearFilters}
            />
          </div>

          {filtered.length > 0 || allFiltered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(hasAnyFilter ? allFiltered : filtered).map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                <Icon name="search" size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                No resources found
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

      {/* ── Explore by Type ── */}
      {!hasAnyFilter && (
        <section className="border-t border-border bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-display text-3xl text-foreground">
                Explore by content type
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {typeOrder.map((type) => {
                const count = resources.filter((r) => r.type === type).length
                const meta = resourceTypeMeta[type]
                return (
                  <CategoryLinkCard
                    key={type}
                    name={meta.plural}
                    description={meta.description}
                    count={count}
                    href={`/resources/type/${type}`}
                  />
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Case Studies & CTA ── */}
      <CatalogCta
        title="Ready to build what comes next?"
        copy="See how organisations use Ricoz products and services to solve real challenges. Resources help you build a view, a Ricoz consultation helps you build a plan."
        primaryLabel="Book a consultation"
        primaryTo="/consultation"
        secondaryLabel="View Case Studies"
        secondaryTo="/resources/case-studies"
      />
    </div>
  )
}
