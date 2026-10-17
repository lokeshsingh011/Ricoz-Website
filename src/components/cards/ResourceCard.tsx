import { Link } from "react-router"
import type { Resource, CaseStudy } from "@/data/resources"
import Icon from "@/components/ui/Icon"

interface ResourceCardProps {
  resource: Resource
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  variant?: "default" | "featured"
}

const typeLabels: Record<Resource["type"], string> = {
  insight: "Insight",
  article: "Article",
  guide: "Guide",
  report: "Report",
  faq: "FAQ",
  knowledge: "Knowledge",
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Link
      to={`/resources/${resource.slug}`}
      className="group flex h-full flex-col rounded-lg bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:bg-soft-white hover:shadow-sm"
      aria-label={resource.title}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="flex size-9 items-center justify-center rounded-md bg-rose text-primary">
          <Icon name="knowledge" size={17} />
        </span>
        <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-primary">
          {typeLabels[resource.type]}
        </span>
      </div>
      <h3 className="text-xl font-display text-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
        {resource.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
        {resource.excerpt}
      </p>
      <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
        <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
          {resource.readingTime} read
        </span>
        <span className="text-[11px] text-muted-foreground">
          {resource.publishedDate}
        </span>
      </div>
    </Link>
  )
}

export function CaseStudyCard({
  caseStudy,
  variant = "default",
}: CaseStudyCardProps) {
  if (variant === "featured") {
    return (
      <Link
        to={`/resources/case-studies/${caseStudy.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-lg bg-charcoal text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        aria-label={caseStudy.title}
      >
        <div className="relative h-48 overflow-hidden bg-primary p-8 sm:h-56">
          <div className="absolute -right-16 -top-16 size-56 rounded-full border border-primary-foreground/25" />
          <div className="absolute bottom-0 left-1/3 h-3/4 w-px rotate-12 bg-primary-foreground/20" />
          <div className="absolute bottom-0 left-1/2 h-full w-px -rotate-12 bg-primary-foreground/20" />
          <span className="relative flex size-12 items-center justify-center rounded-lg bg-primary-foreground text-primary">
            <Icon name="analytics" size={22} />
          </span>
          <p className="absolute bottom-7 left-8 text-xs font-semibold uppercase tracking-widest text-primary-foreground/75">
            {caseStudy.industry} case study
          </p>
        </div>
        <div className="flex flex-1 flex-col p-8 sm:p-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-background/50">
            {caseStudy.client}
          </p>
          <h3 className="mb-5 font-display text-3xl leading-tight text-background transition-colors group-hover:text-primary sm:text-4xl">
            {caseStudy.title}
          </h3>
          <p className="mb-8 line-clamp-3 text-sm leading-relaxed text-background/65">
            {caseStudy.challenge}
          </p>
          <div className="mt-auto grid grid-cols-2 gap-6 border-t border-background/15 pt-7">
            {caseStudy.outcomes.slice(0, 2).map((o) => (
              <div key={o.metric}>
                <p className="mb-2 font-display text-3xl text-background">
                  {o.metric}
                </p>
                <p className="text-xs leading-snug text-background/55">
                  {o.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      to={`/resources/case-studies/${caseStudy.slug}`}
      className="group flex flex-col rounded-lg bg-card p-6 transition-all duration-200 hover:bg-soft-white hover:shadow-sm"
      aria-label={caseStudy.title}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-primary">
          Case Study
        </span>
      </div>
      <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-2">
        {caseStudy.client}
      </p>
      <h3 className="text-xl font-display text-foreground leading-snug mb-4 group-hover:text-primary transition-colors">
        {caseStudy.title}
      </h3>
      <div className="flex items-center gap-6 mt-auto">
        {caseStudy.outcomes.slice(0, 1).map((o) => (
          <div key={o.metric}>
            <p className="text-xl font-display text-foreground">{o.metric}</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
              {o.description}
            </p>
          </div>
        ))}
      </div>
    </Link>
  )
}
