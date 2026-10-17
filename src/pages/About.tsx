import { Link, useLocation } from "react-router"
import { usePageMeta } from "@/lib/seo"
import Breadcrumb from "@/components/ui/Breadcrumb"
import { products } from "@/data/products"
import { services } from "@/data/services"
import { solutions } from "@/data/solutions"
import { productCategorySlugMap, serviceCategorySlugMap } from "@/lib/utils"
import { CatalogCta, CatalogVisual } from "@/components/catalog/CatalogUI"
import Icon from "@/components/ui/Icon"

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1682962232755-f1d051ddb638?auto=format&fit=crop&w=1600&q=85"

const COMPANY_NAV = [
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
]

export function CompanySubNav() {
  const { pathname } = useLocation()
  return (
    <nav
      aria-label="Company navigation"
      className="mb-12 flex flex-wrap gap-x-8 gap-y-3 border-b border-border pb-6"
    >
      {COMPANY_NAV.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            to={item.href}
            aria-current={isActive ? "page" : undefined}
            className={[
              "relative text-sm font-medium transition-colors duration-200",
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground",
            ].join(" ")}
          >
            {item.label}
            {isActive && (
              <span className="absolute -bottom-[25px] left-0 h-0.5 w-full bg-primary" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}

const PRINCIPLES = [
  {
    name: "Depth over breadth",
    description:
      "We invest in genuine expertise across every capability we offer. Each product, service, and solution in our ecosystem reflects specific domain knowledge, not surface-level coverage.",
    icon: "knowledge" as const,
  },
  {
    name: "Ecosystem thinking",
    description:
      "Products, services, and solutions are designed to work together. We build connections across the catalogue so organisations can move between capabilities without losing context.",
    icon: "integration" as const,
  },
  {
    name: "Clarity in complexity",
    description:
      "Enterprise technology is inherently complex. We believe that complexity should be absorbed by the platform, not passed on to the people using it.",
    icon: "strategy" as const,
  },
  {
    name: "Long-term partnership",
    description:
      "We approach every engagement as a relationship, not a transaction. The goal is lasting capability improvement, not a delivered project that the team struggles to maintain.",
    icon: "people" as const,
  },
  {
    name: "Responsible implementation",
    description:
      "We are deliberate about what we build and how we deploy it. Security, compliance, and ethical considerations are woven into our approach from the outset.",
    icon: "security" as const,
  },
]

const SERVICE_CATEGORIES = Object.entries(serviceCategorySlugMap)
const PRODUCT_CATEGORIES = Object.entries(productCategorySlugMap)

export default function About() {
  usePageMeta({
    title: "About Ricoz — Enterprise Technology Platform",
    description:
      "Learn about Ricoz — who we are, how we work, and the enterprise product, service, and solution ecosystem we have built.",
    canonical: "/about/",
    ogTitle: "About Ricoz",
    ogDescription:
      "An enterprise technology platform built around depth, ecosystem thinking, and long-term partnership.",
  })

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero */}
      <section className="relative border-b border-border bg-card overflow-hidden">
        <div className="absolute inset-0 bg-secondary/50" />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8 relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Company", href: "/about" },
              { label: "About" },
            ]}
            className="mb-8"
          />
          <CompanySubNav />
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <h1 className="mb-6 font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
                About Ricoz
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Ricoz is an enterprise technology platform. We bring together a
                curated ecosystem of products, professional services, and
                integrated solutions built around the needs of modern
                organisations.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg bg-secondary lg:col-span-6">
              <img
                src={ABOUT_IMAGE}
                alt="A team exchanging ideas around a shared table"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                Our Story
              </p>
              <h2 className="font-display text-3xl text-foreground">
                How we got here
              </h2>
            </div>
            <div className="flex flex-col gap-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Ricoz was founded on a straightforward observation:
                organisations investing in enterprise technology consistently
                faced the same friction — catalogues of products that don't
                connect, services that arrive without context, and solutions
                that require significant internal effort to assemble.
              </p>
              <p>
                The platform was built to address that. Rather than offering
                discrete tools in isolation, Ricoz organises capabilities into a
                coherent ecosystem where products are supported by services,
                services are contextualised by solutions, and every path
                connects back to a clear outcome for the organisation.
              </p>
              <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-card p-6">
                  <p className="text-3xl font-display text-foreground">{products.length}</p>
                  <p className="text-sm font-medium text-muted-foreground mt-1">Products across {PRODUCT_CATEGORIES.length} categories</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <p className="text-3xl font-display text-foreground">{services.length}</p>
                  <p className="text-sm font-medium text-muted-foreground mt-1">Services across {SERVICE_CATEGORIES.length} areas</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <p className="text-3xl font-display text-foreground">{solutions.length}</p>
                  <p className="text-sm font-medium text-muted-foreground mt-1">Integrated solutions</p>
                </div>
              </div>
              <p>
                Every addition to the catalogue is evaluated against the same
                criteria: does it deepen our capability in a meaningful way, and
                does it integrate cleanly with what is already here?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-16 lg:py-24 border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Our Principles
            </p>
            <h2 className="font-display text-3xl text-foreground">
              How we work
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.name} className="flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/20">
                <div className="mb-5 flex size-12 items-center justify-center rounded-lg bg-rose text-primary">
                  <Icon name={p.icon} size={24} />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Our Capabilities
            </p>
            <h2 className="mb-4 font-display text-3xl text-foreground">
              The ecosystem
            </h2>
            <p className="text-muted-foreground">
              The Ricoz platform is organised across three connected capability
              areas. Each area is supported by dedicated product lines,
              professional services, and integrated solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Products */}
            <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-sm">
              <CatalogVisual kind="product" category="Software" label="Products" />
              <div className="flex flex-1 flex-col p-6 lg:p-8">
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  {products.length} products spanning {PRODUCT_CATEGORIES.length} categories — from analytics and automation to security and collaboration infrastructure.
                </p>
                <div className="mb-6 flex flex-col gap-2">
                  {PRODUCT_CATEGORIES.slice(0, 4).map(([name, slug]) => (
                    <Link
                      key={slug}
                      to={`/products/category/${slug}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto pt-6 border-t border-border">
                  <Link
                    to="/products"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-[#A50F28] transition-colors"
                  >
                    Explore all products <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-sm">
              <CatalogVisual kind="service" category="Professional" label="Services" />
              <div className="flex flex-1 flex-col p-6 lg:p-8">
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  {services.length} professional services across {SERVICE_CATEGORIES.length} practice areas — strategy, implementation, data, security, operations, and more.
                </p>
                <div className="mb-6 flex flex-col gap-2">
                  {SERVICE_CATEGORIES.slice(0, 4).map(([name, slug]) => (
                    <Link
                      key={slug}
                      to={`/services/category/${slug}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto pt-6 border-t border-border">
                  <Link
                    to="/services"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-[#A50F28] transition-colors"
                  >
                    Explore all services <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-sm">
              <CatalogVisual kind="solution" category="Integrated" label="Solutions" />
              <div className="flex flex-1 flex-col p-6 lg:p-8">
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  {solutions.length} integrated solutions that combine products and services into coherent capability bundles aligned to specific business outcomes.
                </p>
                <div className="mt-auto pt-6 border-t border-border">
                  <Link
                    to="/solutions"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-[#A50F28] transition-colors"
                  >
                    Explore all solutions <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CatalogCta
        title="Work with Ricoz"
        copy="Whether you have a specific capability need or want to understand how the ecosystem can support your organisation, we are happy to have that conversation."
        primaryLabel="Schedule a Consultation"
        primaryTo="/consultation"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </div>
  )
}
