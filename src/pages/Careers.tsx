import { Link } from "react-router"
import { usePageMeta } from "@/lib/seo"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Button from "@/components/ui/Button"
import Icon from "@/components/ui/Icon"
import { CompanySubNav } from "./About"

const CAREER_IMAGE =
  "https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?auto=format&fit=crop&w=1600&q=85"

const PRACTICE_AREAS = [
  {
    title: "Product & engineering",
    description:
      "Design, build, and improve the digital products that connect the Ricoz ecosystem.",
    icon: "product" as const,
  },
  {
    title: "Consulting & delivery",
    description:
      "Turn complex business requirements into clear, practical technology programmes.",
    icon: "strategy" as const,
  },
  {
    title: "Data, AI & security",
    description:
      "Work on responsible data systems, intelligent automation, and resilient digital foundations.",
    icon: "data" as const,
  },
  {
    title: "Growth & customer success",
    description:
      "Help organisations discover the right capability and realise value from it over time.",
    icon: "people" as const,
  },
]

const HIRING_STEPS = [
  {
    number: "01",
    title: "Application review",
    description:
      "Applications are assessed against the requirements published with each role.",
  },
  {
    number: "02",
    title: "Introductory conversation",
    description:
      "A focused discussion about the role, your experience, and what you are looking for next.",
  },
  {
    number: "03",
    title: "Role assessment",
    description:
      "Where relevant, a practical discussion or exercise centred on the work—not trivia.",
  },
  {
    number: "04",
    title: "Final conversation",
    description:
      "A chance for both sides to clarify expectations, ways of working, and next steps.",
  },
]

export default function Careers() {
  usePageMeta({
    title: "Careers at Ricoz — Build Meaningful Digital Systems",
    description:
      "Learn how teams work at Ricoz, explore career disciplines, and view current opportunities.",
    canonical: "/careers/",
  })

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Company", href: "/about" },
              { label: "Careers" },
            ]}
            className="mb-8"
          />
          <CompanySubNav />
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                Careers at Ricoz
              </p>
              <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
                Do work that makes complex things clearer.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Ricoz brings products, services, and solutions into one
                connected enterprise ecosystem. That requires people who can
                think deeply, collaborate across disciplines, and turn
                ambiguity into useful outcomes.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button as="link" to="#open-roles" variant="primary">
                  View open roles
                </Button>
                <Button as="link" to="/about" variant="secondary">
                  Learn about Ricoz
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-secondary lg:col-span-6">
              <img
                src={CAREER_IMAGE}
                alt="A team collaborating around a table in a modern workplace"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent p-6 pt-20">
                <p className="max-w-sm text-sm leading-relaxed text-soft-white/90">
                  Different disciplines, one shared standard: thoughtful work
                  that is clear, useful, and built to last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Where you can contribute
              </p>
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                Work across the ecosystem
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Opportunities are organised around the capabilities required by
                the platform. Availability varies and is always shown in the
                open roles section.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:col-span-8">
              {PRACTICE_AREAS.map((area) => (
                <div key={area.title} className="bg-card p-6 sm:p-8">
                  <div className="mb-5 flex size-11 items-center justify-center rounded-md bg-rose text-primary">
                    <Icon name={area.icon} size={21} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Candidate journey
            </p>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              A clear, considered hiring process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The exact process may vary by role. Any role-specific steps will
              be explained before you begin.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HIRING_STEPS.map((step) => (
              <div
                key={step.number}
                className="rounded-lg border border-border bg-card p-6"
              >
                <p className="mb-8 font-mono text-xs text-primary">
                  {step.number}
                </p>
                <h3 className="text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="open-roles" className="scroll-mt-24 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="grid lg:grid-cols-12">
              <div className="border-b border-border p-6 sm:p-10 lg:col-span-7 lg:border-b-0 lg:border-r">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  Current opportunities
                </p>
                <h2 className="font-display text-3xl text-foreground">
                  No published openings right now
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  We do not list roles until the team, scope, and application
                  route are confirmed. When positions open, they will appear
                  here with responsibilities, requirements, location, and
                  employment details.
                </p>
              </div>
              <div className="bg-charcoal p-6 text-soft-white sm:p-10 lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Stay connected
                </p>
                <h3 className="mt-4 font-display text-2xl">
                  Interested in future roles?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-soft-white/60">
                  Send a short introduction and your professional profile. This
                  is not an application to a current vacancy, and receipt does
                  not guarantee a response or future role.
                </p>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-soft-white transition-colors hover:text-primary"
                >
                  Send a career enquiry
                  <Icon name="arrow" size={16} />
                </Link>
              </div>
            </div>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Questions about future opportunities can be sent through the{" "}
            <Link to="/contact" className="font-medium text-primary hover:underline">
              contact page
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
