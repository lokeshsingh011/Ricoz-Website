import { useParams, Link } from "react-router"
import { getSolutionBySlug, solutions } from "@/data/solutions"
import { products } from "@/data/products"
import { services } from "@/data/services"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import ProductCard from "@/components/cards/ProductCard"
import ServiceCard from "@/components/cards/ServiceCard"
import NotFound from "@/pages/NotFound"
import { usePageMeta, breadcrumbSchema, serviceSchema } from "@/lib/seo"

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

function CheckIcon({ className = "" }: { className?: string }) {
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
        d="M2.5 7l3.5 3.5L11.5 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>()
  const solution = slug ? getSolutionBySlug(slug) : undefined

  usePageMeta(
    solution
      ? {
          title: solution.seo.title,
          description: solution.seo.description,
          canonical: `/solutions/${solution.slug}/`,
        }
      : {
          title: "Solution not found | Ricoz",
          description: "",
          canonical: "/solutions/",
        },
  )

  if (!solution) return <NotFound />

  const schemaBreadcrumb = breadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: solution.name, href: `/solutions/${solution.slug}` },
  ])

  const solutionSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.name,
    description: solution.description,
    url: `https://ricoz.com/solutions/${solution.slug}/`,
    provider: { "@type": "Organization", name: "Ricoz" },
  }

  const relatedProducts = solution.productSlugs
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean) as typeof products

  const relatedServices = solution.serviceSlugs
    .map((s) => services.find((sv) => sv.slug === s))
    .filter(Boolean) as typeof services

  const relatedSolutions = solution.relatedSolutionSlugs
    .map((s) => solutions.find((sv) => sv.slug === s))
    .filter(Boolean) as typeof solutions

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      {/* ── Hero ── */}
      <section className="border-b border-border py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Solutions", href: "/solutions" },
              { label: solution.category, href: "/solutions" },
              { label: solution.name },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <Badge variant="primary" className="mb-5">
                {solution.category}
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-foreground leading-[1.1] mb-5">
                {solution.name}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3">
                {solution.tagline}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-xl">
                {solution.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  as="link"
                  to={`/contact?solution=${solution.slug}`}
                >
                  Discuss this solution
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  as="link"
                  to={`/consultation?solution=${solution.slug}`}
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>

            <div className="bg-secondary border border-border rounded-[var(--radius-md)] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Business outcomes
              </p>
              <ul className="flex flex-col gap-3">
                {solution.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2.5">
                    <CheckIcon className="shrink-0 mt-0.5 text-primary" />
                    <span className="text-sm text-foreground leading-relaxed">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Challenge ── */}
      <section className="border-b border-border py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-4">
              The Challenge
            </p>
            <p className="text-xl md:text-2xl font-display text-foreground leading-relaxed">
              {solution.problem}
            </p>
          </div>
        </div>
      </section>

      {/* ── What Ricoz Brings Together ── */}
      <section
        id="capabilities"
        className="border-b border-border bg-secondary py-12 md:py-16"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-3">
              What Ricoz Brings Together
            </p>
            <h2 className="text-2xl md:text-3xl font-display text-foreground">
              Connected capabilities, not separate products
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {solution.capabilities.map((cap) => (
              <div
                key={cap}
                className="flex items-center gap-3 bg-background border border-border rounded-[var(--radius)] px-4 py-3"
              >
                <CheckIcon className="shrink-0 text-primary" />
                <span className="text-sm text-foreground">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="border-b border-border py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-3">
              How It Works
            </p>
            <h2 className="text-2xl md:text-3xl font-display text-foreground">
              A structured path to capability
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {solution.howItWorks.map((step) => (
              <div key={step.step} className="bg-background p-6">
                <p className="text-3xl font-display text-border mb-4 leading-none">
                  {step.step}
                </p>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recommended Products ── */}
      {relatedProducts.length > 0 && (
        <section className="border-b border-border py-12 md:py-16">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Products
                </p>
                <h2 className="text-2xl font-display text-foreground">
                  Products that support this solution
                </h2>
              </div>
              <Link
                to="/products"
                className="hidden sm:flex items-center gap-1.5 text-sm text-primary hover:text-[#A50F28] transition-colors shrink-0"
              >
                All products <ArrowRight />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mb-8 max-w-xl">
              These products provide the technology and capabilities that
              underpin this solution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedProducts.slice(0, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {relatedProducts.length > 6 && (
              <p className="mt-6 text-sm text-muted-foreground">
                + {relatedProducts.length - 6} more products in this solution.{" "}
                <Link
                  to="/products"
                  className="text-primary hover:text-[#A50F28] transition-colors"
                >
                  Explore all products →
                </Link>
              </p>
            )}
          </div>
        </section>
      )}

      {/* ── Relevant Services ── */}
      {relatedServices.length > 0 && (
        <section className="border-b border-border bg-secondary py-12 md:py-16">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Services
              </p>
              <h2 className="text-2xl font-display text-foreground">
                Services that help deliver this solution
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mb-8 max-w-xl">
              These professional services can help you plan, implement, and
              improve the capabilities this solution requires.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related Solutions ── */}
      {relatedSolutions.length > 0 && (
        <section className="border-b border-border py-12 md:py-16">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Related Solutions
              </p>
              <h2 className="text-2xl font-display text-foreground">
                Solutions that work alongside this one
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedSolutions.map((s) => (
                <Link
                  key={s.slug}
                  to={`/solutions/${s.slug}`}
                  className="group flex items-center justify-between gap-4 p-5 bg-background border border-border rounded-[var(--radius-md)] hover:border-foreground/20 hover:bg-secondary transition-colors"
                >
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                      {s.category}
                    </p>
                    <p className="text-base font-display text-foreground group-hover:text-primary transition-colors mb-1">
                      {s.name}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {s.tagline}
                    </p>
                  </div>
                  <ArrowRight className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-border rounded-[var(--radius-md)] p-8 md:p-12 bg-secondary">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">
                Discuss {solution.name} with our team
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Every organisation's situation is different. A Ricoz consultant
                can help you understand which elements of the {solution.name}{" "}
                solution are most relevant to your context and how to get
                started.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  as="link"
                  to={`/contact?solution=${solution.slug}`}
                >
                  Discuss this solution
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  as="link"
                  to={`/consultation?solution=${solution.slug}`}
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
