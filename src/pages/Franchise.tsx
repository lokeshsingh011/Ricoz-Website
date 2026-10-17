import { useParams, Link } from "react-router"
import { getFranchise, getAllFranchises } from "@/data/franchises/registry"
import FranchisePage from "@/components/franchise/FranchisePage"
import FranchiseIndexHeader from "@/components/franchise/FranchiseIndexHeader"
import {
  usePageMeta,
  breadcrumbSchema,
  injectJsonLd,
  removeJsonLd,
} from "@/lib/seo"
import { useEffect } from "react"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Icon from "@/components/ui/Icon"

const FRANCHISE_IMAGE =
  "https://images.unsplash.com/photo-1573132223210-d65883b944aa?auto=format&fit=crop&w=1800&q=85"

export default function Franchise() {
  const { franchiseSlug } = useParams<{ franchiseSlug: string }>()
  const franchise = franchiseSlug ? getFranchise(franchiseSlug) : undefined

  if (!franchise) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <FranchiseIndexHeader />
        <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Not Found
          </p>
          <h1 className="font-display font-semibold text-3xl text-foreground mb-4">
            Franchise not found.
          </h1>
          <p className="text-muted-foreground mb-8 max-w-sm">
            The franchise location you are looking for does not exist or has not
            yet been established.
          </p>
          <Link
            to="/franchise"
            className="text-sm font-medium text-primary hover:underline transition-colors"
          >
            View all franchise locations →
          </Link>
        </div>
      </div>
    )
  }

  return <FranchisePage franchise={franchise} />
}

export function FranchiseIndex() {
  const franchises = getAllFranchises()
  const activeCount = franchises.filter((franchise) => franchise.status === "active").length
  const upcomingCount = franchises.length - activeCount

  usePageMeta({
    title: "Ricoz Franchise Network — Local Technology & Business Solutions",
    description:
      "Ricoz delivers technology, digital capability and business solutions locally through a growing franchise network across India. Find your nearest Ricoz franchise.",
    canonical: "/franchise/",
  })

  useEffect(() => {
    injectJsonLd(
      "franchise-index-breadcrumb",
      breadcrumbSchema([
        { label: "Home", href: "/" },
        { label: "Franchise Network", href: "/franchise/" },
      ]),
    )
    return () => removeJsonLd("franchise-index-breadcrumb")
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <FranchiseIndexHeader />
      <section className="relative overflow-hidden border-b border-border bg-charcoal text-soft-white">
        <img
          src={FRANCHISE_IMAGE}
          alt="Modern urban skyline in India"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-24 lg:px-8">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Franchises", href: "/franchise" }]}
            className="mb-8"
          />
          <div className="max-w-3xl py-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Franchise Network
            </p>
            <h1 className="mb-6 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
              Enterprise capability, with local context.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-soft-white/70 md:text-xl">
              Explore the Ricoz franchise network and connect with the location
              closest to your organisation. Every location links back to the
              same platform of products, services, and solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/50 py-8">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-lg border border-border bg-border px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { value: franchises.length, label: "Network locations" },
            { value: activeCount, label: "Active locations" },
            { value: upcomingCount, label: "Upcoming locations" },
          ].map((item) => (
            <div key={item.label} className="bg-card p-6">
              <p className="font-display text-3xl text-foreground">{item.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex-1 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Find your local Ricoz
            </p>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              Browse the network
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Status and contact availability come directly from each location
              profile. Upcoming locations can still be explored for their
              planned focus.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {franchises.map((f) => (
              <Link
                key={f.slug}
                to={`/franchise/${f.slug}`}
                className="group flex min-h-64 flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="relative h-24 overflow-hidden bg-charcoal p-5">
                  <div className="absolute -right-8 -top-16 font-display text-9xl text-soft-white/5">
                    {f.city.slice(0, 1)}
                  </div>
                  <p className="relative text-xs font-semibold uppercase tracking-widest text-soft-white/50">
                    Ricoz / {f.city}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {f.region}
                    </p>
                    <h2 className="font-display text-2xl text-foreground transition-colors group-hover:text-primary">
                      {f.city}
                    </h2>
                  </div>
                  <span
                    className={[
                      "rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-widest",
                      f.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-secondary text-muted-foreground",
                    ].join(" ")}
                  >
                    {f.status === "active" ? "Active" : "Coming soon"}
                  </span>
                </div>
                <p className="mt-auto text-sm leading-relaxed text-muted-foreground">
                  {f.shortDescription}
                </p>
                <div className="mt-6 flex items-center gap-2 border-t border-border pt-5 text-sm font-medium text-primary">
                  Explore {f.city}
                  <Icon
                    name="arrow"
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-charcoal py-14 text-soft-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
          <div className="lg:col-span-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              One connected ecosystem
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">
              Local conversations. Platform-wide capability.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-soft-white/60">
              Start with a local franchise or explore the platform directly.
              Your requirement can connect to Ricoz products, professional
              services, and integrated solutions without losing context.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Link
              to="/consultation"
              className="inline-flex items-center justify-center rounded bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Schedule a consultation
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded border border-soft-white/20 px-6 py-3 text-sm font-medium transition-colors hover:border-soft-white/60"
            >
              Contact Ricoz
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
