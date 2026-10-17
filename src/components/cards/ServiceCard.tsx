import { Link } from "react-router"
import type { Service } from "@/data/services"
import Icon, { getCategoryIcon } from "@/components/ui/Icon"

interface ServiceCardProps {
  service: Service
  variant?: "default" | "featured"
}

export default function ServiceCard({
  service,
  variant = "default",
}: ServiceCardProps) {
  if (variant === "featured") {
    return (
      <Link
        to={`/services/${service.slug}`}
        className="group grid gap-6 bg-charcoal p-7 text-background transition-colors hover:bg-foreground sm:grid-cols-[auto_1fr_auto] sm:items-start sm:p-9"
        aria-label={`${service.name} — ${service.tagline}`}
      >
        <span className="flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Icon name={getCategoryIcon(service.category)} size={22} />
        </span>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-background/55">
            {service.category}
          </p>
          <h3 className="mb-3 font-display text-3xl text-background sm:text-4xl">
            {service.name}
          </h3>
          <p className="max-w-xl text-sm leading-relaxed text-background/70">
            {service.shortDescription}
          </p>
        </div>
        <Icon
          name="arrow"
          size={18}
          className="text-background/60 transition-transform group-hover:translate-x-1 group-hover:text-background"
        />
      </Link>
    )
  }

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group grid gap-5 border-b border-border py-7 transition-colors sm:grid-cols-[auto_1fr_auto] sm:items-start"
      aria-label={`${service.name} — ${service.tagline}`}
    >
      <span className="flex size-10 items-center justify-center rounded-md bg-rose text-primary">
        <Icon name={getCategoryIcon(service.category)} size={19} />
      </span>
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {service.category}
        </p>
        <h3 className="font-display text-2xl text-foreground transition-colors group-hover:text-primary">
          {service.name}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {service.shortDescription}
        </p>
      </div>
      <Icon
        name="arrow"
        size={15}
        className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
      />
    </Link>
  )
}
