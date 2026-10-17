import { Link } from "react-router"
import type { FranchiseSection } from "@/data/franchises/types"

type ConversionSection = Extract<FranchiseSection, { type: "conversion" }>

interface Props {
  section: ConversionSection
}

export default function FranchiseCTA({ section }: Props) {
  return (
    <section className="bg-[#111110] py-10 sm:py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C41230] mb-6">
            {section.eyebrow}
          </p>
          <h2 className="font-display font-semibold text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.1] tracking-tight text-white mb-6">
            {section.headline}
          </h2>
          <p className="text-base lg:text-lg text-[#A0A09B] leading-relaxed mb-10 max-w-[52ch]">
            {section.statement}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to={section.primaryCta.href}
              className="inline-flex items-center justify-center bg-[#C41230] text-white text-sm font-medium px-6 py-3 rounded-[4px] hover:bg-[#A50F28] transition-colors duration-150"
            >
              {section.primaryCta.label}
            </Link>
            <Link
              to={section.secondaryCta.href}
              className="inline-flex items-center justify-center border border-white/20 text-white text-sm font-medium px-6 py-3 rounded-[4px] hover:border-white/50 transition-colors duration-150"
            >
              {section.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
