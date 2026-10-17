import { type ReactNode } from "react"

type BadgeVariant = "default" | "muted" | "primary" | "outline"

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-secondary text-secondary-foreground",
  muted: "bg-muted text-muted-foreground",
  primary: "bg-primary text-primary-foreground",
  outline: "border border-border text-muted-foreground bg-transparent",
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center text-xs font-medium tracking-wide uppercase px-2.5 py-1 rounded-[var(--radius)]",
        variantClasses[variant],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  )
}
