import { Link } from "react-router"
import { caseStudies } from "@/data/resources"
import { CaseStudyCard } from "@/components/cards/ResourceCard"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Button from "@/components/ui/Button"
import { usePageMeta } from "@/lib/seo"
import { CatalogCta } from "@/components/catalog/CatalogUI"

export default function CaseStudies() {
  usePageMeta({
    title: "Case Studies — Results and Outcomes | Ricoz",
    description:
      "Explore Ricoz case studies showing how organizations have used our products and services to solve complex challenges and achieve meaningful outcomes.",
    canonical: "/resources/case-studies/",
  })

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <section className="relative border-b border-border bg-card overflow-hidden">
        <div className="absolute inset-0 bg-secondary/50" />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8 relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Case Studies" },
            ]}
            className="mb-8"
          />
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Selected Work
            </p>
            <h1 className="mb-6 font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
              Results that come from real engagement
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Each case study documents a specific challenge, the approach we
              took, and the outcomes the organization achieved using Ricoz
              products and services.
            </p>
            <p className="text-sm font-medium text-foreground">
              {caseStudies.length}{" "}
              {caseStudies.length === 1 ? "case study" : "case studies"}{" "}
              available
            </p>
          </div>
        </div>
      </section>

      {/* Featured case study */}
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <CaseStudyCard caseStudy={caseStudies[0]} variant="featured" />
            </div>
            <div className="lg:col-span-2 flex flex-col gap-6 lg:gap-8">
              {caseStudies.slice(1).map((cs) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry coverage */}
      <section className="py-16 lg:py-24 bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="mb-4 font-display text-3xl text-foreground">
              Industries represented
            </h2>
            <p className="text-muted-foreground">
              Our work spans a range of sectors where enterprise complexity
              demands thoughtful capability and structured delivery.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {Array.from(new Set(caseStudies.map((c) => c.industry))).map(
              (industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground hover:bg-secondary/50"
                >
                  {industry}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CatalogCta
        title="Ready to discuss your challenge?"
        copy="Schedule a consultation to explore how Ricoz products and services apply to your specific context."
        primaryLabel="Schedule a Consultation"
        primaryTo="/consultation"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </div>
  )
}
