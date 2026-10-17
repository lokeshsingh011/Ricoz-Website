import { usePageMeta } from "@/lib/seo"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Button from "@/components/ui/Button"
import Icon from "@/components/ui/Icon"
import { CompanySubNav } from "./About"

const LEADERSHIP_IMAGE =
  "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1600&q=85"

const ACCOUNTABILITIES = [
  {
    title: "Platform direction",
    description:
      "Keeping products, services, and solutions aligned to a coherent enterprise platform.",
    icon: "compass" as const,
  },
  {
    title: "Delivery quality",
    description:
      "Setting clear standards for discovery, implementation, handover, and ongoing support.",
    icon: "strategy" as const,
  },
  {
    title: "Customer stewardship",
    description:
      "Ensuring decisions remain grounded in the context and outcomes of each organisation.",
    icon: "people" as const,
  },
  {
    title: "Responsible growth",
    description:
      "Expanding capabilities and the franchise network without compromising platform integrity.",
    icon: "integration" as const,
  },
]

export default function Leadership() {
  usePageMeta({
    title: "Leadership & Governance — Ricoz",
    description:
      "Learn how leadership responsibilities, decisions, and accountability are structured across the Ricoz ecosystem.",
    canonical: "/leadership/",
  })

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Company", href: "/about" },
              { label: "Leadership" },
            ]}
            className="mb-8"
          />
          <CompanySubNav />
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                Leadership & governance
              </p>
              <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
                Accountability across a connected ecosystem.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Ricoz operates across platform capabilities and locally led
                franchises. Leadership is responsible for keeping those parts
                aligned around quality, clarity, and responsible delivery.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg bg-secondary lg:col-span-6">
              <img
                src={LEADERSHIP_IMAGE}
                alt="Colleagues in a focused team discussion"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Core accountabilities
              </p>
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                What leadership owns
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {ACCOUNTABILITIES.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-border bg-card p-6 sm:p-8"
                >
                  <Icon name={item.icon} size={22} className="mb-6 text-primary" />
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-charcoal py-14 text-soft-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                Decision principles
              </p>
              <h2 className="font-display text-3xl sm:text-4xl">
                Make the reasoning visible.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-soft-white/60">
                Platform decisions should be grounded in customer context,
                evidence, delivery realities, and long-term maintainability.
                Clear ownership and documented next steps matter as much as the
                decision itself.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-soft-white/10 lg:col-span-5">
              {["Customer context", "Evidence", "Clear ownership", "Long-term value"].map(
                (principle, index) => (
                  <div key={principle} className="bg-charcoal p-5">
                    <p className="text-xs text-primary">0{index + 1}</p>
                    <p className="mt-5 text-sm font-medium">{principle}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-secondary/50 p-6 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Leadership profiles
              </p>
              <h2 className="mt-3 font-display text-3xl text-foreground">
                Verified profiles will be published here.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We do not publish placeholder names, portraits, or biographies.
                Individual profiles will appear when the relevant information
                has been confirmed for public use.
              </p>
            </div>
            <div className="mt-7 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
              <Button as="link" to="/about" variant="secondary">
                About Ricoz
              </Button>
              <Button as="link" to="/contact" variant="primary">
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
