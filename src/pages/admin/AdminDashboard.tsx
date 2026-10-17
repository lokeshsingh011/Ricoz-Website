import { Link } from "react-router"
import { useAuth } from "@/auth/AuthContext"
import { products } from "@/data/products"
import { services } from "@/data/services"
import { resources } from "@/data/resources"
import {
  demoEnquiries,
  demoConsultations,
  demoCustomers,
} from "@/data/admin/demoData"

const modules = [
  {
    label: "Products",
    href: "/admin/products",
    count: products.length,
    desc: "Manage the product catalogue",
  },
  {
    label: "Services",
    href: "/admin/services",
    count: services.length,
    desc: "Manage professional services",
  },
  {
    label: "Resources",
    href: "/admin/resources",
    count: resources.length,
    desc: "Manage content and resources",
  },
  {
    label: "Leads",
    href: "/admin/leads",
    count: demoEnquiries.length,
    desc: "Enquiries and lead lifecycle",
  },
  {
    label: "Consultations",
    href: "/admin/consultations",
    count: demoConsultations.length,
    desc: "Booked appointments",
  },
  {
    label: "Customers",
    href: "/admin/customers",
    count: demoCustomers.length,
    desc: "Customer relationships",
  },
]

const openLeads = demoEnquiries.filter(
  (e) => e.status === "new" || e.status === "in-review",
).length
const pendingConsultations = demoConsultations.filter(
  (c) => c.status === "booked" || c.status === "confirmed",
).length

export default function AdminDashboard() {
  const { user } = useAuth()

  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Operations Console
        </p>
        <h1 className="text-2xl font-display text-foreground mb-1">
          {user
            ? `Welcome back, ${user.displayName.split(" ")[0]}`
            : "Dashboard"}
        </h1>
        <p className="text-sm text-muted-foreground">
          Ricoz internal operations system.
        </p>
      </div>

      {/* Status strip */}
      {(openLeads > 0 || pendingConsultations > 0) && (
        <div className="flex flex-wrap gap-3 mb-8">
          {openLeads > 0 && (
            <Link
              to="/admin/leads"
              className="flex items-center gap-2 px-3 py-2 border border-border rounded-[var(--radius)] bg-background hover:border-foreground/20 transition-colors duration-150"
            >
              <span
                className="size-1.5 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span className="text-sm text-foreground font-medium">
                {openLeads}
              </span>
              <span className="text-sm text-muted-foreground">
                open {openLeads === 1 ? "lead" : "leads"}
              </span>
            </Link>
          )}
          {pendingConsultations > 0 && (
            <Link
              to="/admin/consultations"
              className="flex items-center gap-2 px-3 py-2 border border-border rounded-[var(--radius)] bg-background hover:border-foreground/20 transition-colors duration-150"
            >
              <span
                className="size-1.5 rounded-full bg-foreground/30"
                aria-hidden="true"
              />
              <span className="text-sm text-foreground font-medium">
                {pendingConsultations}
              </span>
              <span className="text-sm text-muted-foreground">
                pending{" "}
                {pendingConsultations === 1 ? "consultation" : "consultations"}
              </span>
            </Link>
          )}
        </div>
      )}

      {/* Module grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((m) => (
          <Link
            key={m.href}
            to={m.href}
            className="block border border-border rounded-[var(--radius-md)] p-5 bg-background hover:border-foreground/20 hover:shadow-sm transition-all duration-150 group"
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {m.label}
              </p>
              <span className="text-[11px] font-medium text-muted-foreground bg-secondary border border-border px-1.5 py-0.5 rounded shrink-0">
                {m.count}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{m.desc}</p>
          </Link>
        ))}
      </div>

      <p className="mt-8 text-xs text-muted-foreground">
        Prototype mode — operational data is demonstration only and is not
        persisted.
      </p>
    </div>
  )
}
