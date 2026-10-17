import { Link } from "react-router"
import { products } from "@/data/products"
import { services } from "@/data/services"
import { solutions } from "@/data/solutions"
import { resources, caseStudies } from "@/data/resources"
import ProductCard from "@/components/cards/ProductCard"
import ServiceCard from "@/components/cards/ServiceCard"
import { ResourceCard, CaseStudyCard } from "@/components/cards/ResourceCard"
import Button from "@/components/ui/Button"
import Icon, { type IconName } from "@/components/ui/Icon"
import { EcosystemVisual, JourneyVisual } from "./HomeVisuals"
import architectureImage from "@/assets/home/ricoz-architecture.webp"
import collaborationImage from "@/assets/home/collaboration.webp"

const featuredProducts = products
  .filter((product) => product.featured)
  .slice(0, 3)
const featuredServices = services.slice(0, 3)
const featuredSolutions = solutions.slice(0, 4)
const featuredCaseStudy = caseStudies[0]
const supportingResources = resources.slice(0, 2)
const latestResources = resources.slice(3, 6)

const approachPrinciples = [
  {
    number: "01",
    title: "Depth over breadth",
    copy: "Every offering is documented around a specific capability, business need, and practical application—not a surface-level category label.",
  },
  {
    number: "02",
    title: "Ecosystem thinking",
    copy: "Products, services, solutions, and resources remain connected, so discovery does not lose the context that made an offering relevant.",
  },
  {
    number: "03",
    title: "Clarity in complexity",
    copy: "The catalogue is organised to help visitors move from a need to an offering, compare the detail, and choose an informed next step.",
  },
]

const challengePaths = [
  {
    need: "Automate repetitive work",
    description:
      "Connect workflow automation with process expertise to reduce manual handoffs and improve operational visibility.",
    solution: "Business Automation",
    solutionHref: "/solutions/business-automation",
    product: "RicozFlow",
    productHref: "/products/rico-flow",
    service: "Process Optimization",
    serviceHref: "/services/process-optimization",
  },
  {
    need: "Make better decisions",
    description:
      "Bring analytics, governed data, and specialist guidance together around more reliable business intelligence.",
    solution: "Data & Intelligence",
    solutionHref: "/solutions/data-intelligence",
    product: "RicozAnalytics",
    productHref: "/products/rico-analytics",
    service: "Data & Analytics Services",
    serviceHref: "/services/data-analytics-services",
  },
  {
    need: "Protect business systems",
    description:
      "Explore connected security products and advisory capabilities for identity, risk, compliance, and response.",
    solution: "Cybersecurity",
    solutionHref: "/solutions/cybersecurity",
    product: "RicozShield",
    productHref: "/products/rico-shield",
    service: "Cybersecurity Advisory",
    serviceHref: "/services/cybersecurity-advisory",
  },
]

const faqItems = [
  {
    question: "Where should I begin if I do not know which product I need?",
    answer:
      "Start with Solutions. They organise products and services around needs such as business automation, customer experience, data intelligence, and technology modernisation. You can also schedule a consultation for help identifying a relevant starting point.",
  },
  {
    question: "How are products, services, and solutions different?",
    answer:
      "Products are individual software capabilities. Services provide specialist advisory and delivery expertise. Solutions connect relevant products and services around a broader business need or outcome.",
  },
  {
    question: "Can I review an offering before contacting Ricoz?",
    answer:
      "Yes. Product, service, and solution pages explain the offering, its capabilities, related areas, and common questions. Resources and case studies provide additional context where available.",
  },
  {
    question: "How do I request a conversation?",
    answer:
      "Use the consultation page for a structured request about your needs, or the contact page for a general enquiry. Both routes are available throughout the platform.",
  },
]

function Arrow({ className = "" }: { className?: string }) {
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

function Eyebrow({
  children,
  inverse = false,
}: {
  children: React.ReactNode
  inverse?: boolean
}) {
  return (
    <p
      className={[
        "mb-5 text-xs font-semibold uppercase tracking-widest",
        inverse ? "text-background/60" : "text-primary",
      ].join(" ")}
    >
      {children}
    </p>
  )
}

function TextLink({
  to,
  children,
  inverse = false,
}: {
  to: string
  children: React.ReactNode
  inverse?: boolean
}) {
  return (
    <Link
      to={to}
      className={[
        "group inline-flex items-center gap-2 text-sm font-medium transition-colors",
        inverse
          ? "text-background hover:text-primary"
          : "text-foreground hover:text-primary",
      ].join(" ")}
    >
      {children}
      <Arrow className="transition-transform group-hover:translate-x-1" />
    </Link>
  )
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border bg-background py-16 sm:py-20 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
        <div className="animate-fade-in-up lg:col-span-7">
          <Eyebrow>The Ricoz Ecosystem</Eyebrow>
          <h1
            id="hero-heading"
            className="max-w-4xl font-display text-5xl leading-none text-foreground sm:text-7xl lg:text-8xl"
          >
            Find the capability.
            <span className="block text-primary">Build what comes next.</span>
          </h1>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explore a connected platform of enterprise products, professional
            services, integrated solutions, and practical knowledge.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row lg:items-center">
            <Button as="link" to="/products" variant="primary" size="lg">
              Explore Products
            </Button>
            <TextLink to="/services">Explore Services</TextLink>
          </div>
        </div>
        <div className="animate-fade-in-up animation-delay-200 lg:col-span-5">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-cream p-3 shadow-xl lg:ml-auto">
            <img
              src={architectureImage}
              alt="Abstract red architecture with geometric lines"
              width="1200"
              height="1500"
              className="aspect-[4/5] w-full rounded-md object-cover"
              fetchPriority="high"
            />
            <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-md bg-background/90 p-4 backdrop-blur-sm">
              <span className="text-xs font-semibold uppercase tracking-widest text-foreground">
                Products · Services · Solutions
              </span>
              <Icon name="compass" size={18} className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EcosystemSection() {
  const ecosystem = [
    {
      label: "Products",
      count: products.length,
      copy: "Individual software capabilities across core business and technology functions.",
      href: "/products",
    },
    {
      label: "Services",
      count: services.length,
      copy: "Advisory, implementation, operations, data, security, and growth expertise.",
      href: "/services",
    },
    {
      label: "Solutions",
      count: solutions.length,
      copy: "Connected paths that organise capabilities around a business need.",
      href: "/solutions",
    },
  ]

  return (
    <section
      id="ecosystem"
      className="border-b border-border bg-soft-white py-20 lg:py-28"
      aria-labelledby="ecosystem-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Eyebrow>02 — The Ricoz Ecosystem</Eyebrow>
            <h2
              id="ecosystem-heading"
              className="font-display text-4xl leading-tight text-foreground sm:text-5xl"
            >
              One platform. Three ways to find what fits.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Start with a specific capability, the expertise required to move
              it forward, or the wider challenge you are trying to solve. Each
              path links back to related offerings and useful context.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {ecosystem.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="group rounded-lg border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-sm"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <Icon
                      name={item.label.toLowerCase().slice(0, -1) as IconName}
                      size={19}
                      className="text-primary"
                    />
                    <Arrow className="text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="font-display text-4xl text-foreground">
                    {item.count}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <EcosystemVisual />
          </div>
        </div>
      </div>
    </section>
  )
}

function WhoWeAreSection() {
  return (
    <section
      id="who-we-are"
      className="border-b border-border bg-charcoal py-20 text-background lg:py-28"
      aria-labelledby="who-we-are-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-20 lg:px-8">
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={collaborationImage}
              alt="Professionals collaborating around a computer in a naturally lit workspace"
              width="1200"
              height="825"
              className="aspect-[4/3] w-full object-cover grayscale"
              loading="lazy"
            />
            <div
              className="absolute inset-0 bg-primary/10"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <Eyebrow inverse>03 — Who We Are</Eyebrow>
          <h2
            id="who-we-are-heading"
            className="mb-8 max-w-3xl font-display text-4xl leading-tight text-background sm:text-5xl"
          >
            Ricoz brings products, expertise, and practical knowledge into one
            connected catalogue.
          </h2>
          <div className="grid gap-8 text-sm leading-relaxed text-background/65 sm:grid-cols-2">
            <p>
              Enterprise technology choices rarely happen in isolation. A
              product may need integration support, a service may depend on
              adjacent capabilities, and a broad objective may span several
              parts of the organisation.
            </p>
            <p>
              Ricoz preserves those relationships. Visitors can explore an
              individual offering in detail, follow its connections, or begin
              with a solution organised around the outcome they are considering.
            </p>
          </div>
          <div className="mt-10">
            <TextLink to="/about" inverse>
              Read more about Ricoz
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  return (
    <section
      id="products"
      className="border-b border-border bg-cream py-20 lg:py-28"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>04 — Explore Our Products</Eyebrow>
            <h2
              id="products-heading"
              className="font-display text-4xl leading-tight text-foreground sm:text-5xl"
            >
              Focused products for complex work.
            </h2>
          </div>
          <TextLink to="/products">
            Browse the complete product catalogue
          </TextLink>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={index === 0 ? "lg:col-span-6" : "lg:col-span-3"}
            >
              <ProductCard product={product} variant="featured" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="border-b border-border bg-rose"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto grid max-w-7xl lg:grid-cols-12">
        <div className="border-b border-primary/10 px-4 py-20 sm:px-6 lg:col-span-5 lg:border-b-0 lg:border-r lg:px-8 lg:py-28">
          <Eyebrow>05 — Services That Move Work Forward</Eyebrow>
          <h2
            id="services-heading"
            className="mb-7 font-display text-4xl leading-tight text-foreground sm:text-5xl"
          >
            Expertise for the work around the technology.
          </h2>
          <p className="mb-10 max-w-md text-base leading-relaxed text-muted-foreground">
            Ricoz services support strategy, implementation, integration,
            improvement, security, data, operations, and growth. Related
            products and solutions remain visible as you explore.
          </p>
          <TextLink to="/services">Browse all professional services</TextLink>
        </div>
        <div className="bg-charcoal lg:col-span-7">
          {featuredServices.map((service) => (
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
  )
}

function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="border-b border-border bg-soft-white py-20 lg:py-28"
      aria-labelledby="solutions-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>06 — Solutions for Different Needs</Eyebrow>
            <h2
              id="solutions-heading"
              className="font-display text-4xl leading-tight text-foreground sm:text-5xl"
            >
              Begin with the outcome, not the catalogue category.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-9">
            <p className="text-base leading-relaxed text-muted-foreground">
              Solutions combine relevant products and services into a coherent
              view of needs such as growth, customer experience, automation,
              workforce management, finance, data, technology, and security.
            </p>
          </div>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {featuredSolutions.map((solution, index) => (
            <Link
              key={solution.id}
              to={`/solutions/${solution.slug}`}
              className="group relative overflow-hidden rounded-lg border border-border bg-background p-7 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-sm"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-md bg-rose text-primary">
                  <Icon name="solution" size={20} />
                </span>
                <span className="text-xs text-muted-foreground">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mb-3 font-display text-3xl text-foreground transition-colors group-hover:text-primary">
                {solution.name}
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                {solution.tagline}
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground">
                Explore solution
                <Icon
                  name="arrow"
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <TextLink to="/solutions">Explore all solutions</TextLink>
        </div>
      </div>
    </section>
  )
}

function ChallengeSection() {
  return (
    <section
      id="challenges"
      className="border-b border-border bg-charcoal py-20 text-background lg:py-28"
      aria-labelledby="challenges-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary">
            07 — From Challenges to Possibilities
          </p>
          <h2
            id="challenges-heading"
            className="font-display text-4xl leading-tight sm:text-5xl"
          >
            See how a need connects across the ecosystem.
          </h2>
        </div>
        <div className="divide-y divide-background/15 border-y border-background/15">
          {challengePaths.map((path, index) => (
            <div
              key={path.need}
              className="grid gap-8 py-9 lg:grid-cols-12 lg:items-start"
            >
              <div className="flex items-start gap-5 lg:col-span-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-semibold text-primary-foreground">
                  0{index + 1}
                </span>
                <h3 className="font-display text-3xl">{path.need}</h3>
              </div>
              <p className="text-sm leading-relaxed text-background/65 lg:col-span-4">
                {path.description}
              </p>
              <div className="flex flex-col items-start gap-3 text-sm lg:col-span-4">
                <Link
                  to={path.solutionHref}
                  className="font-medium hover:underline"
                >
                  Solution: {path.solution}
                </Link>
                <Link
                  to={path.productHref}
                  className="text-background/60 hover:text-background"
                >
                  Product: {path.product}
                </Link>
                <Link
                  to={path.serviceHref}
                  className="text-background/60 hover:text-background"
                >
                  Service: {path.service}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      title: "Explore",
      copy: "Start with a product, service, solution, resource, or the search experience.",
    },
    {
      title: "Review",
      copy: "Use detail pages to understand capabilities, use cases, related offerings, and common questions.",
    },
    {
      title: "Connect",
      copy: "Contact Ricoz with a general enquiry or request a consultation with context about your needs.",
    },
  ]

  return (
    <section
      id="how-it-works"
      className="border-b border-border bg-secondary py-20 lg:py-28"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>08 — How Ricoz Works</Eyebrow>
            <h2
              id="how-it-works-heading"
              className="font-display text-4xl leading-tight text-foreground sm:text-5xl"
            >
              A simple path through a broad ecosystem.
            </h2>
            <div className="mt-12 rounded-lg border border-border bg-card p-7">
              <JourneyVisual />
            </div>
          </div>
          <div className="lg:col-span-7">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="grid gap-4 border-t border-border py-8 sm:grid-cols-12"
              >
                <span className="font-display text-3xl text-primary sm:col-span-2">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-semibold text-foreground sm:col-span-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-7">
                  {step.copy}
                </p>
              </div>
            ))}
            <div className="mt-5">
              <Button as="link" to="/consultation" variant="primary" size="md">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WorkResourcesSection() {
  return (
    <section
      id="work-resources"
      className="border-b border-border bg-secondary py-20 lg:py-28"
      aria-labelledby="work-resources-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>09 — Work, Insights and Resources</Eyebrow>
            <h2
              id="work-resources-heading"
              className="font-display text-4xl leading-tight text-foreground sm:text-5xl"
            >
              See the ecosystem in context.
            </h2>
          </div>
          <TextLink to="/resources">Explore the resource library</TextLink>
        </div>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <CaseStudyCard caseStudy={featuredCaseStudy} variant="featured" />
          </div>
          <div className="grid gap-1 lg:col-span-5">
            {supportingResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ApproachSection() {
  return (
    <section
      id="approach"
      className="border-b border-border bg-charcoal py-20 text-background lg:py-28"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow inverse>10 — The Ricoz Approach</Eyebrow>
            <h2
              id="approach-heading"
              className="font-display text-4xl leading-tight text-background sm:text-5xl"
            >
              Designed to make complex choices easier to understand.
            </h2>
          </div>
          <div className="lg:col-span-7">
            {approachPrinciples.map((principle) => (
              <div
                key={principle.number}
                className="grid gap-4 border-t border-background/15 py-8 sm:grid-cols-12"
              >
                <span className="text-xs font-semibold text-primary sm:col-span-2">
                  {principle.number}
                </span>
                <h3 className="text-base font-semibold text-background sm:col-span-4">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-background/60 sm:col-span-6">
                  {principle.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StartingPointSection() {
  const paths = [
    {
      icon: "product" as const,
      title: "I know the capability",
      copy: "Browse the product catalogue by category and compare individual product detail.",
      link: "Start with products",
      href: "/products",
    },
    {
      icon: "service" as const,
      title: "I need specialist support",
      copy: "Explore service practice areas spanning strategy, delivery, data, security, operations, and growth.",
      link: "Start with services",
      href: "/services",
    },
    {
      icon: "solution" as const,
      title: "I know the challenge",
      copy: "Use solutions to see related capabilities grouped around a broader business need.",
      link: "Start with solutions",
      href: "/solutions",
    },
  ]

  return (
    <section
      id="starting-point"
      className="border-b border-border bg-soft-white py-20 lg:py-28"
      aria-labelledby="starting-point-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <Eyebrow>11 — Find Your Starting Point</Eyebrow>
          <h2
            id="starting-point-heading"
            className="font-display text-4xl leading-tight text-foreground sm:text-5xl"
          >
            You do not need to understand the whole catalogue to begin.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {paths.map((path, index) => (
            <div
              key={path.title}
              className="rounded-lg border border-border bg-background p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-md bg-rose text-primary">
                  <Icon name={path.icon} size={20} />
                </span>
                <span className="text-xs text-muted-foreground">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mb-4 mt-10 font-display text-3xl text-foreground">
                {path.title}
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                {path.copy}
              </p>
              <TextLink to={path.href}>{path.link}</TextLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BuildWithRicozSection() {
  return (
    <section
      id="build-with-ricoz"
      className="border-b border-primary/10 bg-rose py-20 lg:py-28"
      aria-labelledby="build-with-ricoz-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-end lg:px-8">
        <div className="lg:col-span-8">
          <Eyebrow>12 — Build With Ricoz</Eyebrow>
          <h2
            id="build-with-ricoz-heading"
            className="max-w-3xl font-display text-4xl leading-tight text-foreground sm:text-6xl"
          >
            Bring a defined requirement—or the question you are still shaping.
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
            Use a consultation request to share the context around your need, or
            contact Ricoz for a more general conversation about the platform.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Button as="link" to="/consultation" variant="primary" size="md">
              Request a Consultation
            </Button>
            <TextLink to="/contact">Contact Ricoz</TextLink>
          </div>
        </div>
      </div>
    </section>
  )
}

function LatestInsightsSection() {
  return (
    <section
      id="latest-insights"
      className="border-b border-border bg-cream py-20 lg:py-28"
      aria-labelledby="latest-insights-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>13 — Latest Insights</Eyebrow>
            <h2
              id="latest-insights-heading"
              className="font-display text-4xl leading-tight text-foreground sm:text-5xl"
            >
              Continue the discovery.
            </h2>
          </div>
          <TextLink to="/resources/type/insight">View more insights</TextLink>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {latestResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section
      id="faq"
      className="border-b border-border bg-soft-white py-20 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <Eyebrow>14 — Frequently Asked Questions</Eyebrow>
          <h2
            id="faq-heading"
            className="font-display text-4xl leading-tight text-foreground sm:text-5xl"
          >
            A clear place to begin.
          </h2>
        </div>
        <div className="divide-y divide-border border-y border-border lg:col-span-8">
          {faqItems.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-foreground">
                {item.question}
                <span
                  className="text-2xl font-light text-primary transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pt-4 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-primary py-24 text-center text-primary-foreground lg:py-36"
      aria-labelledby="final-cta-heading"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Eyebrow inverse>15 — Start Here</Eyebrow>
        <h2
          id="final-cta-heading"
          className="mb-8 font-display text-5xl leading-none sm:text-7xl"
        >
          Find the right place to begin.
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-primary-foreground/75">
          Share what you are exploring and give the conversation a useful
          starting point.
        </p>
        <Button
          as="link"
          to="/consultation"
          variant="secondary"
          size="lg"
          className="border-primary-foreground bg-primary-foreground text-primary hover:bg-background hover:text-primary"
        >
          Schedule a Consultation
        </Button>
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-foreground/15"
        aria-hidden="true"
      />
    </section>
  )
}

export default function HomeSections() {
  return (
    <>
      <HeroSection />
      <EcosystemSection />
      <WhoWeAreSection />
      <ProductsSection />
      <ServicesSection />
      <SolutionsSection />
      <ChallengeSection />
      <HowItWorksSection />
      <WorkResourcesSection />
      <ApproachSection />
      <StartingPointSection />
      <BuildWithRicozSection />
      <LatestInsightsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  )
}
