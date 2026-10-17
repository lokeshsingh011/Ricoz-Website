import Icon from "@/components/ui/Icon"

export function EcosystemVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-md"
      aria-label="Products and services connect through solutions in the Ricoz ecosystem"
      role="img"
    >
      <div className="absolute inset-12 rounded-full border border-border bg-background sm:inset-16" />
      <div className="absolute inset-24 rounded-full border border-dashed border-primary/40 sm:inset-28" />
      <div className="absolute left-1/2 top-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-foreground text-background shadow-xl sm:size-32">
        <Icon name="solution" size={26} />
        <span className="mt-2 text-xs font-semibold uppercase tracking-widest">
          Solutions
        </span>
      </div>
      <div className="absolute left-0 top-1/2 flex -translate-y-1/2 items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm">
        <span className="flex size-10 items-center justify-center rounded-md bg-rose text-primary">
          <Icon name="product" size={20} />
        </span>
        <span className="text-sm font-semibold text-foreground">Products</span>
      </div>
      <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm">
        <span className="flex size-10 items-center justify-center rounded-md bg-rose text-primary">
          <Icon name="service" size={20} />
        </span>
        <span className="text-sm font-semibold text-foreground">Services</span>
      </div>
      <span className="absolute left-1/2 top-4 -translate-x-1/2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Start anywhere
      </span>
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Keep the context
      </span>
    </div>
  )
}

export function JourneyVisual() {
  const steps = [
    { icon: "search" as const, label: "Explore" },
    { icon: "knowledge" as const, label: "Review" },
    { icon: "people" as const, label: "Connect" },
  ]

  return (
    <div
      className="relative grid grid-cols-3 gap-3"
      aria-label="Explore, review and connect"
      role="img"
    >
      <div
        className="absolute left-1/6 right-1/6 top-7 border-t border-dashed border-primary/40"
        aria-hidden="true"
      />
      {steps.map((step, index) => (
        <div
          key={step.label}
          className="relative flex flex-col items-center text-center"
        >
          <span className="relative z-10 flex size-14 items-center justify-center rounded-full border border-border bg-card text-primary shadow-sm">
            <Icon name={step.icon} size={21} />
          </span>
          <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-foreground">
            {step.label}
          </span>
          <span className="mt-1 text-xs text-muted-foreground">
            0{index + 1}
          </span>
        </div>
      ))}
    </div>
  )
}
