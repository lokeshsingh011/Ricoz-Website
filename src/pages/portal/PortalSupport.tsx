import { useEffect } from "react"
import { useNoIndex } from "@/lib/seo"
import { Link } from "react-router"

const SUPPORT_OPTIONS = [
  {
    title: "Contact Ricoz",
    desc: "Send us a message and we'll be in touch.",
    href: "/contact",
    primary: true,
  },
  {
    title: "Start an Enquiry",
    desc: "Tell us about a specific requirement.",
    href: "/contact",
    primary: false,
  },
  {
    title: "Schedule a Consultation",
    desc: "Book time with the Ricoz team.",
    href: "/consultation",
    primary: false,
  },
  {
    title: "Explore Resources",
    desc: "Guides, insights and knowledge articles.",
    href: "/resources",
    primary: false,
  },
]

export default function PortalSupport() {
  useNoIndex()
  useEffect(() => {
    document.title = "Support — Ricoz Customer Portal"
  }, [])

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="font-display font-semibold text-2xl lg:text-3xl text-[#111110] mb-1">
          Support
        </h1>
        <p className="text-sm text-[#6B6B67]">
          Need help? We're here to assist.
        </p>
      </div>

      {/* Help intro */}
      <div className="border border-[#E5E5E0] rounded-[4px] bg-white px-6 py-6 mb-8">
        <h2 className="text-base font-medium text-[#111110] mb-2">
          How can we help?
        </h2>
        <p className="text-sm text-[#6B6B67] leading-relaxed">
          Tell us what you need and we'll help you find the right next step.
          Whether it's a question about your services, a new requirement, or
          something else — reach out directly.
        </p>
      </div>

      {/* Support options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SUPPORT_OPTIONS.map((option) => (
          <Link
            key={option.title}
            to={option.href}
            className={[
              "flex flex-col gap-1.5 px-5 py-4 rounded-[4px] border transition-colors min-h-[80px]",
              option.primary
                ? "bg-[#C41230] border-[#C41230] hover:bg-[#A50F28] hover:border-[#A50F28]"
                : "bg-white border-[#E5E5E0] hover:border-[#C41230]",
            ].join(" ")}
          >
            <span
              className={[
                "text-sm font-medium",
                option.primary ? "text-white" : "text-[#111110]",
              ].join(" ")}
            >
              {option.title}
            </span>
            <span
              className={[
                "text-xs",
                option.primary ? "text-white/80" : "text-[#6B6B67]",
              ].join(" ")}
            >
              {option.desc}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
