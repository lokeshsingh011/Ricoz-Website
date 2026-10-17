import { useEffect } from "react"
import { Link } from "react-router"
import { usePortalAuth } from "@/auth/PortalAuthContext"
import { useNoIndex } from "@/lib/seo"

const QUICK_ACTIONS = [
  {
    label: "Start an Enquiry",
    desc: "Tell us what you need.",
    href: "/contact",
    primary: true,
  },
  {
    label: "Book a Consultation",
    desc: "Schedule time with us.",
    href: "/consultation",
    primary: false,
  },
  {
    label: "Explore Products",
    desc: "Browse our product catalogue.",
    href: "/products",
    primary: false,
  },
  {
    label: "Explore Services",
    desc: "Find the right service.",
    href: "/services",
    primary: false,
  },
]

const ENQUIRY_STATUS_LABEL: Record<string, string> = {
  new: "New",
  "in-review": "In Review",
  contacted: "Contacted",
  "follow-up": "Follow-up",
  closed: "Closed",
}

const CONSULTATION_STATUS_LABEL: Record<string, string> = {
  booked: "Booked",
  confirmed: "Confirmed",
  "reminder-sent": "Reminder Sent",
  meeting: "Meeting",
  "follow-up": "Follow-up",
  completed: "Completed",
}

function EmptyModuleLink({
  title,
  message,
  cta,
  ctaHref,
}: {
  title: string
  message: string
  cta: string
  ctaHref: string
}) {
  return (
    <div className="border border-[#E5E5E0] rounded-[4px] p-6 bg-white">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B97] mb-3">
        {title}
      </p>
      <p className="text-sm text-[#6B6B67] mb-4">{message}</p>
      <Link
        to={ctaHref}
        className="text-sm font-medium text-[#C41230] hover:text-[#A50F28] transition-colors"
      >
        {cta} →
      </Link>
    </div>
  )
}

export default function PortalDashboard() {
  useNoIndex()
  const { user, enquiries, consultations } = usePortalAuth()

  useEffect(() => {
    document.title = "Dashboard — Ricoz Customer Portal"
  }, [])

  const openEnquiries = enquiries.filter((e) => e.status !== "closed")
  const upcomingConsultations = consultations.filter(
    (c) =>
      c.status === "booked" ||
      c.status === "confirmed" ||
      c.status === "reminder-sent",
  )

  return (
    <div className="max-w-4xl">
      {/* Page heading */}
      <div className="mb-8">
        <h1 className="font-display font-semibold text-2xl lg:text-3xl text-[#111110] mb-1">
          Welcome back
          {user?.displayName ? `, ${user.displayName.split(" ")[0]}` : ""}.
        </h1>
        <p className="text-sm text-[#6B6B67]">
          {user?.company ? `${user.company} — ` : ""}Your Ricoz customer
          workspace.
        </p>
      </div>

      {/* Quick actions */}
      <section className="mb-10" aria-labelledby="quick-actions-heading">
        <h2
          id="quick-actions-heading"
          className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B97] mb-4"
        >
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {QUICK_ACTIONS.map((action) => (
            <Link
              key={action.label}
              to={action.href}
              className={[
                "flex flex-col gap-1 px-5 py-4 rounded-[4px] border transition-colors duration-150 min-h-[80px]",
                action.primary
                  ? "bg-[#C41230] border-[#C41230] text-white hover:bg-[#A50F28] hover:border-[#A50F28]"
                  : "bg-white border-[#E5E5E0] hover:border-[#C41230]",
              ].join(" ")}
            >
              <span
                className={[
                  "text-sm font-medium",
                  action.primary ? "text-white" : "text-[#111110]",
                ].join(" ")}
              >
                {action.label}
              </span>
              <span
                className={[
                  "text-xs",
                  action.primary ? "text-white/80" : "text-[#6B6B67]",
                ].join(" ")}
              >
                {action.desc}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Overview modules */}
      <section aria-labelledby="overview-heading">
        <h2
          id="overview-heading"
          className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B97] mb-4"
        >
          Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Open enquiries */}
          {openEnquiries.length > 0 ? (
            <div className="border border-[#E5E5E0] rounded-[4px] bg-white p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B97]">
                  Open Enquiries
                </p>
                <Link
                  to="/portal/enquiries"
                  className="text-xs text-[#C41230] hover:text-[#A50F28] transition-colors"
                >
                  View all →
                </Link>
              </div>
              <ul className="flex flex-col gap-3">
                {openEnquiries.slice(0, 2).map((enq) => (
                  <li
                    key={enq.id}
                    className="flex items-start justify-between gap-3"
                  >
                    <p className="text-sm text-[#3A3A3A] leading-snug line-clamp-1 flex-1 min-w-0">
                      {enq.message}
                    </p>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B97] shrink-0 pt-0.5">
                      {ENQUIRY_STATUS_LABEL[enq.status] ?? enq.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <EmptyModuleLink
              title="Open Enquiries"
              message="No open enquiries. Your conversations with Ricoz will appear here."
              cta="Start a conversation"
              ctaHref="/contact"
            />
          )}

          {/* Upcoming consultations */}
          {upcomingConsultations.length > 0 ? (
            <div className="border border-[#E5E5E0] rounded-[4px] bg-white p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B97]">
                  Upcoming Consultations
                </p>
                <Link
                  to="/portal/consultations"
                  className="text-xs text-[#C41230] hover:text-[#A50F28] transition-colors"
                >
                  View all →
                </Link>
              </div>
              <ul className="flex flex-col gap-3">
                {upcomingConsultations.slice(0, 2).map((con) => (
                  <li
                    key={con.id}
                    className="flex items-start justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#3A3A3A]">
                        {con.scheduledDate ?? con.preferredDate}
                      </p>
                      <p className="text-xs text-[#6B6B67]">
                        {con.scheduledTime ?? con.preferredTime}
                      </p>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B97] shrink-0 pt-0.5">
                      {CONSULTATION_STATUS_LABEL[con.status] ?? con.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <EmptyModuleLink
              title="Upcoming Consultations"
              message="No consultations scheduled. Book a session to discuss your requirements."
              cta="Schedule a Consultation"
              ctaHref="/consultation"
            />
          )}

          <EmptyModuleLink
            title="Active Services"
            message="Services engaged with Ricoz will appear here."
            cta="Explore Services"
            ctaHref="/services"
          />
          <EmptyModuleLink
            title="Recommended Products"
            message="Product recommendations from your Ricoz team will appear here."
            cta="Browse Products"
            ctaHref="/products"
          />
        </div>
      </section>
    </div>
  )
}
