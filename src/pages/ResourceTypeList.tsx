import { useParams } from "react-router"
import { resources, resourceTypeMeta, type Resource } from "@/data/resources"
import { ResourceCard } from "@/components/cards/ResourceCard"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Button from "@/components/ui/Button"
import NotFound from "@/pages/NotFound"
import { usePageMeta, breadcrumbSchema } from "@/lib/seo"

const validTypes: Resource["type"][] = [
  "insight",
  "guide",
  "article",
  "report",
  "faq",
  "knowledge",
]

export default function ResourceTypeList() {
  const { type } = useParams<{ type: string }>()
  const resourceType = type as Resource["type"]

  if (!validTypes.includes(resourceType)) return <NotFound />

  const meta = resourceTypeMeta[resourceType]
  const typeResources = resources.filter((r) => r.type === resourceType)

  usePageMeta({
    title: `${meta.plural} — ${meta.description} | Ricoz`,
    description: meta.description,
    canonical: `/resources/type/${resourceType}/`,
  })

  const breadcrumb = breadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources/" },
    { label: meta.plural, href: `/resources/type/${resourceType}/` },
  ])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="relative border-b border-border bg-card overflow-hidden">
        <div className="absolute inset-0 bg-secondary/50" />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8 relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: meta.plural },
            ]}
            className="mb-8"
          />
          <div className="max-w-2xl">
            <h1 className="mb-6 font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
              {meta.plural}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {meta.description}
            </p>
          </div>
        </div>
      </section>

      {/* Listing */}
      <section className="flex-1 py-16 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {typeResources.length > 0 ? (
            <>
              <p className="text-sm text-muted-foreground mb-8">
                <span className="font-medium text-foreground">
                  {typeResources.length}
                </span>{" "}
                {typeResources.length === 1
                  ? meta.label.toLowerCase()
                  : meta.plural.toLowerCase()}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {typeResources.map((r) => (
                  <ResourceCard key={r.id} resource={r} />
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
              <p className="mb-3 text-lg font-semibold text-foreground">
                No {meta.plural.toLowerCase()} yet
              </p>
              <p className="mb-6 text-sm text-muted-foreground">
                Check back soon — new content is published regularly.
              </p>
              <Button as="link" to="/resources" variant="secondary">
                Explore all resources
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Other types */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            More resource types
          </p>
          <div className="flex flex-wrap gap-3">
            {(Object.keys(resourceTypeMeta) as Resource["type"][])
              .filter((t) => t !== resourceType)
              .map((t) => {
                const count = resources.filter((r) => r.type === t).length
                return (
                  <a
                    key={t}
                    href={`/resources/type/${t}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-foreground/30 hover:bg-secondary/50 hover:text-foreground"
                  >
                    {resourceTypeMeta[t].plural}
                    {count > 0 && (
                      <span className="flex size-5 items-center justify-center rounded-full bg-secondary text-xs">
                        {count}
                      </span>
                    )}
                  </a>
                )
              })}
          </div>
        </div>
      </section>
    </div>
  )
}
