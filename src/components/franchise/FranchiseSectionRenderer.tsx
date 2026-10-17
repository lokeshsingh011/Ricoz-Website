import { Link } from "react-router"
import type { Franchise, FranchiseSection } from "@/data/franchises/types"
import { getProductBySlug } from "@/data/products"
import { getServiceBySlug } from "@/data/services"
import { getSolutionBySlug } from "@/data/solutions"
import { getAllFranchises } from "@/data/franchises/registry"
import FranchiseCTA from "./FranchiseCTA"
import FranchiseDirectorImage from "./FranchiseDirectorImage"

// ─── Local Introduction ──────────────────────────────────────────────────────

function SectionLocalIntroduction({
  section,
}: {
  section: Extract<FranchiseSection, { type: "local-introduction" }>
}) {
  return (
    <section className="py-10 sm:py-16 lg:py-28 bg-[#FAFAF8] border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C41230] mb-8">
              {"eyebrow" in section ? section.eyebrow : ""}
            </p>
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.1] tracking-tight text-[#111110]">
              {section.headline}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base lg:text-lg text-[#6B6B67] leading-relaxed">
              {section.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Challenges ─────────────────────────────────────────────────────────────

function SectionChallenges({
  section,
}: {
  section: Extract<FranchiseSection, { type: "challenges" }>
}) {
  return (
    <section className="py-10 sm:py-16 lg:py-28 border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-16 max-w-3xl">
          <h2 className="font-display font-semibold text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight text-[#111110] mb-4">
            {section.headline}
          </h2>
          <p className="text-base text-[#6B6B67] leading-relaxed max-w-[58ch]">
            {section.subheadline}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#E5E5E0] rounded-[4px] overflow-hidden">
          {section.items.map((item, i) => (
            <div
              key={i}
              className="p-6 lg:p-8 border-b border-r border-[#E5E5E0] last:border-r-0 [&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#C41230] mb-3">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display font-semibold text-lg text-[#111110] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#6B6B67] leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Capabilities ────────────────────────────────────────────────────────────

function SectionCapabilities({
  section,
}: {
  section: Extract<FranchiseSection, { type: "capabilities" }>
}) {
  return (
    <section className="py-10 sm:py-16 lg:py-28 bg-[#F5F3EE] border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-semibold text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight text-[#111110] mb-12 lg:mb-16">
          {section.headline}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[#E5E5E0] rounded-[4px] overflow-hidden bg-white">
          {section.pillars.map((pillar, i) => (
            <div
              key={i}
              className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#E5E5E0] last:border-0 flex flex-col gap-4"
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#6B6B67]">
                {String(i + 1).padStart(2, "0")} — Capability
              </p>
              <h3 className="font-display font-semibold text-2xl text-[#111110]">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#6B6B67] leading-relaxed flex-1">
                {pillar.description}
              </p>
              <Link
                to={pillar.cta.href}
                className="text-sm font-medium text-[#C41230] hover:text-[#A50F28] transition-colors flex items-center gap-1"
              >
                {pillar.cta.label}
                <span aria-hidden="true"> →</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Products ────────────────────────────────────────────────────────────────

function SectionProducts({
  section,
}: {
  section: Extract<FranchiseSection, { type: "products" }>
}) {
  const products = section.productSlugs
    .map((slug) => getProductBySlug(slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getProductBySlug>>[]

  return (
    <section className="py-10 sm:py-16 lg:py-28 border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12 lg:mb-16">
          <div>
            <h2 className="font-display font-semibold text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight text-[#111110] mb-3">
              {section.headline}
            </h2>
            <p className="text-base text-[#6B6B67] max-w-[52ch]">
              {section.statement}
            </p>
          </div>
          <Link
            to={section.cta.href}
            className="shrink-0 text-sm font-medium text-[#C41230] hover:text-[#A50F28] transition-colors"
          >
            {section.cta.label} →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Link
              key={product.slug}
              to={`/products/${product.slug}`}
              className="group border border-[#E5E5E0] rounded-[4px] p-6 hover:border-[#C41230] transition-colors duration-150"
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#6B6B67] mb-3">
                {product.category}
              </p>
              <h3 className="font-display font-semibold text-lg text-[#111110] mb-2 group-hover:text-[#C41230] transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-[#6B6B67] leading-relaxed line-clamp-3">
                {product.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Services ────────────────────────────────────────────────────────────────

function SectionServices({
  section,
}: {
  section: Extract<FranchiseSection, { type: "services" }>
}) {
  const services = section.serviceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getServiceBySlug>>[]

  return (
    <section className="py-10 sm:py-16 lg:py-28 bg-[#F5F3EE] border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12 lg:mb-16">
          <div>
            <h2 className="font-display font-semibold text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight text-[#111110] mb-3">
              {section.headline}
            </h2>
            <p className="text-base text-[#6B6B67] max-w-[52ch]">
              {section.statement}
            </p>
          </div>
          <Link
            to={section.cta.href}
            className="shrink-0 text-sm font-medium text-[#C41230] hover:text-[#A50F28] transition-colors"
          >
            {section.cta.label} →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-[#E5E5E0] rounded-[4px] overflow-hidden bg-white">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group flex items-start gap-4 p-6 border-b border-r border-[#E5E5E0] [&:nth-child(2n)]:border-r-0 last:border-b-0 hover:bg-[#FAFAF8] transition-colors duration-150"
            >
              <span className="text-[10px] font-mono text-[#C5C5C0] mt-0.5 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#6B6B67] mb-1">
                  {service.category}
                </p>
                <h3 className="text-sm font-semibold text-[#111110] group-hover:text-[#C41230] transition-colors">
                  {service.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Solutions ───────────────────────────────────────────────────────────────

function SectionSolutions({
  section,
}: {
  section: Extract<FranchiseSection, { type: "solutions" }>
}) {
  const solutions = section.solutionSlugs
    .map((slug) => getSolutionBySlug(slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getSolutionBySlug>>[]

  return (
    <section className="py-10 sm:py-16 lg:py-28 border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12 lg:mb-16">
          <div>
            <h2 className="font-display font-semibold text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight text-[#111110] mb-3">
              {section.headline}
            </h2>
            <p className="text-base text-[#6B6B67] max-w-[52ch]">
              {section.statement}
            </p>
          </div>
          <Link
            to={section.cta.href}
            className="shrink-0 text-sm font-medium text-[#C41230] hover:text-[#A50F28] transition-colors"
          >
            {section.cta.label} →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((solution) => (
            <Link
              key={solution.slug}
              to={`/solutions/${solution.slug}`}
              className="group border border-[#E5E5E0] rounded-[4px] p-6 hover:border-[#C41230] transition-colors duration-150"
            >
              <h3 className="font-display font-semibold text-lg text-[#111110] mb-2 group-hover:text-[#C41230] transition-colors">
                {solution.name}
              </h3>
              <p className="text-sm text-[#6B6B67] leading-relaxed line-clamp-3">
                {solution.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Industries ──────────────────────────────────────────────────────────────

function SectionIndustries({
  section,
}: {
  section: Extract<FranchiseSection, { type: "industries" }>
}) {
  return (
    <section className="py-10 sm:py-16 lg:py-28 bg-[#F5F3EE] border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-16 max-w-3xl">
          <h2 className="font-display font-semibold text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight text-[#111110] mb-4">
            {section.headline}
          </h2>
          <p className="text-base text-[#6B6B67] leading-relaxed max-w-[52ch]">
            {section.statement}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {section.industries.map((industry, i) => (
            <div
              key={i}
              className="border border-[#E5E5E0] bg-white rounded-[4px] px-5 py-3"
            >
              <span className="text-sm font-medium text-[#111110]">
                {industry.name}
              </span>
              {industry.description && (
                <p className="text-xs text-[#6B6B67] mt-1">
                  {industry.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── How We Work ─────────────────────────────────────────────────────────────

function SectionHowWeWork({
  section,
}: {
  section: Extract<FranchiseSection, { type: "how-we-work" }>
}) {
  return (
    <section className="py-10 sm:py-16 lg:py-28 border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-semibold text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight text-[#111110] mb-12 lg:mb-16">
          {section.headline}
        </h2>
        {/* Desktop timeline */}
        <div className="hidden lg:block">
          <div className="relative flex gap-0 border border-[#E5E5E0] rounded-[4px] overflow-hidden">
            {section.steps.map((step, i) => (
              <div
                key={i}
                className="flex-1 p-8 xl:p-10 border-r border-[#E5E5E0] last:border-r-0 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-display font-semibold text-[#E5E5E0]">
                    {step.number}
                  </span>
                  <div
                    className="flex-1 h-px bg-[#E5E5E0]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display font-semibold text-xl text-[#111110]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B6B67] leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile vertical */}
        <div className="lg:hidden flex flex-col gap-0 border border-[#E5E5E0] rounded-[4px] overflow-hidden">
          {section.steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-5 p-6 border-b border-[#E5E5E0] last:border-b-0"
            >
              <span className="text-lg font-display font-semibold text-[#C41230] shrink-0 w-8">
                {step.number}
              </span>
              <div>
                <h3 className="font-semibold text-[#111110] mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B6B67] leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Director ────────────────────────────────────────────────────────────────

function SectionDirector({
  section,
  franchise,
}: {
  section: Extract<FranchiseSection, { type: "director" }>
  franchise: Franchise
}) {
  const { director } = franchise

  return (
    <section className="py-10 sm:py-16 lg:py-28 bg-[#F5F3EE] border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <div className="lg:col-span-4">
            <div className="aspect-[3/4] rounded-[4px] overflow-hidden relative">
              <FranchiseDirectorImage
                image={director.portrait}
                franchiseName={franchise.name}
                city={franchise.city}
                directorName={director.name}
                className="w-full h-full"
              />
            </div>
          </div>
          {/* Bio */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h2 className="font-display font-semibold text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight text-[#111110] mb-8">
              {section.headline}
            </h2>
            {director.name && (
              <div className="mb-6">
                <p className="font-display font-semibold text-xl text-[#111110]">
                  {director.name}
                </p>
                <p className="text-sm text-[#6B6B67] mt-0.5">
                  {director.designation}
                </p>
              </div>
            )}
            {director.shortBio && (
              <p className="text-base text-[#6B6B67] leading-relaxed max-w-[60ch] mb-6">
                {director.shortBio}
              </p>
            )}
            {director.statement && (
              <blockquote className="border-l-2 border-[#C41230] pl-6 italic text-[#111110] text-lg leading-relaxed max-w-[52ch]">
                {director.statement}
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Ecosystem ───────────────────────────────────────────────────────────────

function SectionEcosystem({
  section,
}: {
  section: Extract<FranchiseSection, { type: "ecosystem" }>
}) {
  return (
    <section className="py-10 sm:py-16 lg:py-28 border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-semibold text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight text-[#111110] mb-12">
          {section.headline}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {section.links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group border border-[#E5E5E0] rounded-[4px] px-5 py-4 text-sm font-medium text-[#111110] hover:border-[#C41230] hover:text-[#C41230] transition-colors duration-150"
            >
              {link.label}
              <span className="block text-[#C5C5C0] group-hover:text-[#C41230] transition-colors text-xs mt-0.5 font-normal">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Franchise Network ───────────────────────────────────────────────────────

function SectionFranchiseNetwork({
  section,
}: {
  section: Extract<FranchiseSection, { type: "franchise-network" }>
}) {
  const all = getAllFranchises()

  return (
    <section className="py-10 sm:py-16 lg:py-28 bg-[#F5F3EE] border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-display font-semibold text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight text-[#111110] mb-3">
            {section.headline}
          </h2>
          {section.statement && (
            <p className="text-base text-[#6B6B67] max-w-[52ch]">
              {section.statement}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-3 mb-8">
          {all.map((f) => {
            const isCurrent = f.slug === section.currentSlug
            return (
              <Link
                key={f.slug}
                to={`/franchise/${f.slug}`}
                className={[
                  "border rounded-[4px] px-5 py-3 text-sm font-medium transition-colors duration-150",
                  isCurrent
                    ? "border-[#C41230] text-[#C41230] bg-white"
                    : "border-[#E5E5E0] text-[#6B6B67] bg-white hover:border-[#111110] hover:text-[#111110]",
                ].join(" ")}
              >
                {f.city}
                {f.status === "coming-soon" && (
                  <span className="text-[10px] font-normal text-[#A0A09B] ml-1.5">
                    Soon
                  </span>
                )}
              </Link>
            )
          })}
        </div>
        <Link
          to="/franchise"
          className="text-sm font-medium text-[#C41230] hover:text-[#A50F28] transition-colors"
        >
          Explore the Ricoz franchise network →
        </Link>
      </div>
    </section>
  )
}

// ─── Root renderer ───────────────────────────────────────────────────────────

interface Props {
  sections: FranchiseSection[]
  franchise: Franchise
}

export default function FranchiseSectionRenderer({
  sections,
  franchise,
}: Props) {
  return (
    <>
      {sections.map((section, i) => {
        switch (section.type) {
          case "local-introduction":
            return <SectionLocalIntroduction key={i} section={section} />
          case "challenges":
            return <SectionChallenges key={i} section={section} />
          case "capabilities":
            return <SectionCapabilities key={i} section={section} />
          case "products":
            return <SectionProducts key={i} section={section} />
          case "services":
            return <SectionServices key={i} section={section} />
          case "solutions":
            return <SectionSolutions key={i} section={section} />
          case "industries":
            return <SectionIndustries key={i} section={section} />
          case "how-we-work":
            return <SectionHowWeWork key={i} section={section} />
          case "director":
            return (
              <SectionDirector
                key={i}
                section={section}
                franchise={franchise}
              />
            )
          case "ecosystem":
            return <SectionEcosystem key={i} section={section} />
          case "conversion":
            return <FranchiseCTA key={i} section={section} />
          case "franchise-network":
            return <SectionFranchiseNetwork key={i} section={section} />
          default:
            return null
        }
      })}
    </>
  )
}
