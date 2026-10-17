import { Link } from "react-router"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={["flex items-center gap-2", className].join(" ")}
    >
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={i} className="flex items-center gap-2">
              {isLast || !item.href ? (
                <span
                  className="text-xs text-muted-foreground"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              )}
              {!isLast && (
                <span className="text-xs text-border select-none">/</span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
