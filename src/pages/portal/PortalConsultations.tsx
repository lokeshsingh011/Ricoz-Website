import { useEffect } from "react"
import { Link } from "react-router"
import { usePortalAuth } from "@/auth/PortalAuthContext"
import { useNoIndex } from "@/lib/seo"
import type { ConsultationRecord } from "@/data/admin/types"

const STATUS_LABEL: Record<string, string> = {
  booked: "Booked",
  confirmed: "Confirmed",
  "reminder-sent": "Reminder Sent",
  meeting: "Meeting",
  "follow-up": "Follow-up",
  completed: "Completed",
}

const STATUS_COLOUR: Record<string, string> = {
  booked: "bg-blue-50 text-blue-700",
  confirmed: "bg-green-50 text-green-700",
  "reminder-sent": "bg-yellow-50 text-yellow-700",
  meeting: "bg-purple-50 text-purple-700",
  "follow-up": "bg-orange-50 text-orange-700",
  completed: "bg-[#F7F5F1] text-[#9B9B97]",
}

const PURPOSE_LABEL: Record<string, string> = {
  "product-demo": "Product Demo",
  "service-inquiry": "Service Inquiry",
  "solution-discovery": "Solution Discovery",
  general: "General",
}

function ConsultationCard({ con }: { con: ConsultationRecord }) {
  const date = con.scheduledDate ?? con.preferredDate
  const time = con.scheduledTime ?? con.preferredTime

  return (
    <div className="border border-[#E5E5E0] rounded-[4px] bg-white px-5 py-5">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B97] mb-1">
            {PURPOSE_LABEL[con.purpose] ?? con.purpose}
          </p>
          <p className="text-sm font-medium text-[#111110]">{date}</p>
          <p className="text-xs text-[#6B6B67]">{time}</p>
        </div>
        <span
          className={[
            "text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-[2px] shrink-0",
            STATUS_COLOUR[con.status] ?? "bg-[#F7F5F1] text-[#9B9B97]",
          ].join(" ")}
        >
          {STATUS_LABEL[con.status] ?? con.status}
        </span>
      </div>
      {con.notes && (
        <p className="text-sm text-[#6B6B67] leading-relaxed border-t border-[#F0EDE8] pt-3 mt-2">
          {con.notes}
        </p>
      )}
      {(con.productSlug || con.serviceSlug || con.solutionSlug) && (
        <p className="text-xs text-[#9B9B97] mt-2">
          Ref:{" "}
          <span className="font-mono">
            {con.productSlug ?? con.serviceSlug ?? con.solutionSlug}
          </span>
        </p>
      )}
    </div>
  )
}

export default function PortalConsultations() {
  useNoIndex()
  const { consultations } = usePortalAuth()

  useEffect(() => {
    document.title = "Consultations — Ricoz Customer Portal"
  }, [])

  return (
    <div className="max-w-3xl">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="font-display font-semibold text-2xl lg:text-3xl text-[#111110] mb-1">
            Consultations
          </h1>
          <p className="text-sm text-[#6B6B67]">
            Your scheduled and past consultations with Ricoz.
          </p>
        </div>
        <Link
          to="/consultation"
          className="shrink-0 inline-flex items-center text-sm font-medium bg-[#C41230] text-white px-4 py-2 rounded-[4px] hover:bg-[#A50F28] transition-colors min-h-[44px]"
        >
          Book Consultation
        </Link>
      </div>

      {consultations.length === 0 ? (
        <div className="border border-[#E5E5E0] rounded-[4px] bg-white p-10 text-center">
          <div className="w-10 h-10 rounded-full bg-[#F7F5F1] border border-[#E5E5E0] flex items-center justify-center mx-auto mb-4">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="4"
                width="12"
                height="11"
                rx="1.5"
                stroke="#9B9B97"
                strokeWidth="1.5"
              />
              <path
                d="M6 2v2M12 2v2M3 8h12"
                stroke="#9B9B97"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-[#3A3A3A] mb-2">
            No consultations scheduled.
          </p>
          <p className="text-sm text-[#6B6B67] mb-6 max-w-[36ch] mx-auto">
            Schedule a consultation to discuss your requirements with the Ricoz
            team.
          </p>
          <Link
            to="/consultation"
            className="inline-flex items-center text-sm font-medium bg-[#C41230] text-white px-5 py-2.5 rounded-[4px] hover:bg-[#A50F28] transition-colors min-h-[44px]"
          >
            Schedule a Consultation
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {consultations.map((con) => (
            <ConsultationCard key={con.id} con={con} />
          ))}
        </div>
      )}
    </div>
  )
}
