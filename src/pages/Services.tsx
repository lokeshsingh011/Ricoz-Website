import { useMemo, useState } from "react"
import type { Service } from "@/data/services"
import { services, serviceCategories } from "@/data/services"
import { serviceCategorySlugMap } from "@/lib/utils"
import ServiceCard from "@/components/cards/ServiceCard"
import Icon from "@/components/ui/Icon"
import {
  CatalogCta,
  CatalogVisual,
  CategoryLinkCard,
  FilterChips,
  SearchField,
} from "@/components/catalog/CatalogUI"
import { usePageMeta } from "@/lib/seo"

function scoreService(service: Service, query: string): number {
  const value = query.toLowerCase().trim()
  if (!value) return 1
  let score = 0
  if (service.name.toLowerCase() === value) score += 10
  else if (service.name.toLowerCase().startsWith(value)) score += 6
  else if (service.name.toLowerCase().includes(value)) score += 4
  if (service.category.toLowerCase().includes(value)) score += 3
  if (service.tagline.toLowerCase().includes(value)) score += 2
  if (service.shortDescription.toLowerCase().includes(value)) score += 1.5
  if (service.overview.toLowerCase().includes(value)) score += 1
  if (
    service.capabilities.some(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.description.toLowerCase().includes(value),
    )
  )
    score += 1
  return score
}

export default function Services() {
  usePageMeta({
    title: "Services — Ricoz Professional Services",
    description:
      "Explore the Ricoz professional services catalogue. Strategy, implementation, data, security, and operational transformation for enterprise organizations.",
    canonical: "/services/",
  })

  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategories, setActiveCategories] = useState<string[]>([])

  const toggleCategory = (name: string) => {
    setActiveCategories((current) =>
      current.includes(name)
        ? current.filter((category) => category !== name)
        : [...current, name],
    )
  }

  const categories = useMemo(
    () =>
      serviceCategories.map((name) => {
        const members = services.filter((service) => service.category === name)
        return {
          name,
          slug:
            serviceCategorySlugMap[name] ??
            name.toLowerCase().replace(/\s+/g, "-"),
          count: members.length,
          description:
            members
              .slice(0, 2)
              .map((service) => service.name)
              .join(" · ") || `Explore ${name.toLowerCase()} services`,
        }
      }),
    [],
  )

  const filteredServices = useMemo(() => {
    const ranked = searchQuery.trim()
      ? services
          .map((service) => ({
            service,
            score: scoreService(service, searchQuery),
          }))
          .filter(({ score }) => score > 0)
          .sort((a, b) => b.score - a.score)
          .map(({ service }) => service)
      : services

    return activeCategories.length
      ? ranked.filter((service) => activeCategories.includes(service.category))
      : ranked
  }, [activeCategories, searchQuery])

  const featured = services.slice(0, 3)
  const hasFilters = searchQuery.trim() || activeCategories.length > 0

  return (
    <>
      <section className="overflow-hidden border-b border-border bg-rose py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
          <div className="lg:col-span-7">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary">
              Ricoz Professional Services
            </p>
            <h1 className="max-w-4xl font-display text-5xl leading-none text-foreground sm:text-6xl lg:text-7xl">
              Expertise for the work around complex change.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore advisory and delivery capabilities across strategy,
              implementation, data, security, operations, marketing, and
              content.
            </p>
            <div className="mt-9 max-w-2xl">
              <SearchField
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search services, expertise, or business needs"
                label="Search Ricoz professional services"
              />
            </div>
            <div className="mt-7 flex gap-8">
              <div>
                <p className="font-display text-3xl text-foreground">
                  {services.length}
                </p>
                <p className="text-xs text-muted-foreground">Services</p>
              </div>
              <div>
                <p className="font-display text-3xl text-foreground">
                  {serviceCategories.length}
                </p>
                <p className="text-xs text-muted-foreground">Practice areas</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <CatalogVisual
              kind="service"
              category="Professional services"
              label="Strategy, delivery, and specialist capability"
            />
          </div>
        </div>
      </section>

      {!hasFilters && (
        <>
          <section className="border-b border-border bg-charcoal py-16 text-background lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-10 max-w-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  Featured Services
                </p>
                <h2 className="font-display text-4xl leading-tight">
                  Begin with a defined need or a question that needs structure.
                </h2>
              </div>
              <div className="overflow-hidden rounded-lg border border-background/15">
                {featured.map((service) => (
                  <div
                    key={service.id}
                    className="border-b border-background/10 last:border-b-0"
                  >
                    <ServiceCard service={service} variant="featured" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-b border-border bg-soft-white py-16 lg:py-20">
            <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
              <div className="lg:col-span-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  Practice Areas
                </p>
                <h2 className="font-display text-4xl leading-tight text-foreground">
                  Navigate the portfolio by expertise.
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Each practice area groups services that address related
                  strategic, technical, or operational needs.
                </p>
              </div>
              <div className="lg:col-span-8">
                {categories.map((category) => (
                  <CategoryLinkCard
                    key={category.name}
                    name={category.name}
                    description={category.description}
                    count={category.count}
                    href={`/services/category/${category.slug}`}
                  />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                  Service Catalogue
                </p>
                <h2 className="font-display text-3xl text-foreground">
                  {filteredServices.length}{" "}
                  {filteredServices.length === 1 ? "service" : "services"}
                </h2>
              </div>
              {hasFilters && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategories([])
                  }}
                  className="self-start text-sm font-medium text-primary hover:underline sm:self-auto"
                >
                  Reset search and filters
                </button>
              )}
            </div>
            <FilterChips
              items={categories}
              active={activeCategories}
              onToggle={toggleCategory}
              onClear={() => setActiveCategories([])}
            />
          </div>

          {filteredServices.length > 0 ? (
            <div className="grid gap-x-10 md:grid-cols-2">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-secondary px-6 py-20 text-center">
              <Icon
                name="search"
                size={28}
                className="mx-auto mb-5 text-primary"
              />
              <h2 className="font-display text-3xl text-foreground">
                No services match this search
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                Clear the current search or filters to return to the complete
                professional services catalogue.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategories([])
                }}
                className="mt-6 text-sm font-semibold text-primary hover:underline"
              >
                Clear everything
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-border bg-cream py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              How to Explore
            </p>
            <h2 className="font-display text-4xl leading-tight text-foreground">
              Review the detail, then bring the context.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-7">
            {[
              ["01", "Find", "Search by service, capability, or need."],
              [
                "02",
                "Review",
                "Understand scope, process, and related offers.",
              ],
              ["03", "Connect", "Share your context through an enquiry."],
            ].map(([number, title, copy]) => (
              <div key={number} className="border-t border-foreground pt-5">
                <span className="text-xs font-semibold text-primary">
                  {number}
                </span>
                <h3 className="mt-8 text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CatalogCta
        title="Bring your requirements into focus."
        copy="Every service page provides a structured view of the need, scope, approach, and available next step. Share your context when you are ready."
        primaryLabel="Schedule a Consultation"
        primaryTo="/consultation"
        secondaryLabel="Contact Ricoz"
        secondaryTo="/contact"
      />
    </>
  )
}
