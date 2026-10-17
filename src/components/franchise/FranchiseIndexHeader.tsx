import { Link } from "react-router"

export default function FranchiseIndexHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          to="/franchise"
          className="flex items-center gap-2"
          aria-label="Ricoz Franchise Network"
        >
          <span className="font-display font-semibold text-sm tracking-tight text-foreground leading-none">
            RICOZ
          </span>
          <span className="text-primary font-semibold text-sm leading-none select-none">
            /
          </span>
          <span className="font-display font-semibold text-sm tracking-tight text-primary leading-none uppercase">
            FRANCHISE NETWORK
          </span>
        </Link>
        <nav
          className="flex items-center gap-4"
          aria-label="Franchise index navigation"
        >
          <Link
            to="/portal"
            className="hidden text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-150 sm:block"
          >
            Login
          </Link>
          <Link
            to="/"
            className="text-[13px] font-medium text-foreground border border-border hover:border-primary px-4 py-2 rounded-[4px] transition-colors duration-150"
          >
            <span aria-hidden="true">←</span> Ricoz
          </Link>
        </nav>
      </div>
    </header>
  )
}
