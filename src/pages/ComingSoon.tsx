import { useLocation } from "react-router"
import Button from "@/components/ui/Button"
import Icon from "@/components/ui/Icon"

const pageNames: Record<string, string> = {
  "/solutions": "Solutions",
  "/resources": "Resources",
  "/company": "Company",
  "/consultation/confirmed": "Booking Confirmed",
}

export default function ComingSoon() {
  const { pathname } = useLocation()
  const pageName = pageNames[pathname] ?? "This page"

  if (pathname === "/consultation/confirmed") {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <section className="flex flex-1 items-center py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center rounded-2xl border border-border bg-card p-10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-rose text-primary">
                <Icon name="people" size={24} />
              </div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                Confirmed
              </p>
              <h1 className="mb-4 font-display text-3xl text-foreground sm:text-4xl">
                Your booking request has been received
              </h1>
              <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                A member of our team will review your request and send a
                confirmation with session details within one business day.
              </p>
              <Button as="link" to="/" variant="primary">
                Return to home
              </Button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <section className="flex flex-1 items-center py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center rounded-2xl border border-border bg-card p-10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-secondary text-muted-foreground">
              <Icon name="knowledge" size={24} />
            </div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              {pageName}
            </p>
            <h1 className="mb-4 font-display text-3xl text-foreground sm:text-4xl">
              Coming soon
            </h1>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              The {pageName} section is part of the Ricoz ecosystem and will be
              available shortly. In the meantime, explore our products and
              services or get in touch with our team.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button as="link" to="/products" variant="primary">
                Explore Products
              </Button>
              <Button as="link" to="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
