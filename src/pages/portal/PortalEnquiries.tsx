import { useEffect } from "react"
import { Link } from "react-router"
import { usePortalAuth } from "@/auth/PortalAuthContext"
import { useNoIndex } from "@/lib/seo"
import type { Enquiry } from "@/data/admin/types"

const STATUS_LABEL: Record<string, string> = {
  new: "New",
  "in-review": "In Review",
  contacted: "Contacted",
  "follow-up": "Follow-up",
  closed: "Closed",
}

const STATUS_COLOUR: Record<string, string> = {
  new: "bg-blue-50 text-blue-700",
  "in-review": "bg-yellow-50 text-yellow-700",
  contacted: "bg-green-50 text-green-700",
  "follow-up": "bg-orange-50 text-orange-700",
  closed: "bg-[#F7F5F1] text-[#9B9B97]",
}

const TYPE_LABEL: Record<string, string> = {
  general: "General",
  product: "Product",
  service: "Service",
  solution: "Solution",
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  } catch {
    return iso
  }
}

function EnquiryRow({ enq }: { enq: Enquiry }) {
  return (
    <div className="border border-[#E5E5E0] rounded-[4px] bg-white px-5 py-5 flex flex-col sm:flex-row sm:items-start gap-4">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B97]">
            {TYPE_LABEL[enq.type] ?? enq.type}
          </span>
          <span className="text-[#D9D6D0]">·</span>
          <span className="text-[10px] text-[#9B9B97]">
            {formatDate(enq.submittedAt)}
          </span>
        </div>
        <p className="text-sm text-[#3A3A3A] leading-relaxed mb-2">
          {enq.message}
        </p>
        {(enq.productSlug || enq.serviceSlug || enq.solutionSlug) && (
          <p className="text-xs text-[#9B9B97]">
            Ref:{" "}
            <span className="font-mono">
              {enq.productSlug ?? enq.serviceSlug ?? enq.solutionSlug}
            </span>
          </p>
        )}
      </div>
      <div className="shrink-0">
        <span
          className={[
            "inline-block text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-[2px]",
            STATUS_COLOUR[enq.status] ?? "bg-[#F7F5F1] text-[#9B9B97]",
          ].join(" ")}
        >
          {STATUS_LABEL[enq.status] ?? enq.status}
        </span>
      </div>
    </div>
  )
}

export default function PortalEnquiries() {
  useNoIndex()
  const { enquiries } = usePortalAuth()

  useEffect(() => {
    document.title = "Enquiries — Ricoz Customer Portal"
  }, [])

  return (
    <div className="max-w-3xl">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="font-display font-semibold text-2xl lg:text-3xl text-[#111110] mb-1">
            My Enquiries
          </h1>
          <p className="text-sm text-[#6B6B67]">
            Your enquiries and conversations with Ricoz.
          </p>
        </div>
        <Link
          to="/contact"
          className="shrink-0 inline-flex items-center text-sm font-medium bg-[#C41230] text-white px-4 py-2 rounded-[4px] hover:bg-[#A50F28] transition-colors min-h-[44px]"
        >
          New Enquiry
        </Link>
      </div>

      {enquiries.length === 0 ? (
        <div className="border border-[#E5E5E0] rounded-[4px] bg-white p-10 text-center">
          <div className="w-10 h-10 rounded-full bg-[#F7F5F1] border border-[#E5E5E0] flex items-center justify-center mx-auto mb-4">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 4.5h12M3 9h9M3 13.5h6"
                stroke="#9B9B97"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-[#3A3A3A] mb-2">
            No enquiries yet.
          </p>
          <p className="text-sm text-[#6B6B67] mb-6 max-w-[36ch] mx-auto">
            Your enquiries will appear here once you contact Ricoz with a
            requirement or question.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center text-sm font-medium bg-[#C41230] text-white px-5 py-2.5 rounded-[4px] hover:bg-[#A50F28] transition-colors min-h-[44px]"
          >
            Start an Enquiry
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {enquiries.map((enq) => (
            <EnquiryRow key={enq.id} enq={enq} />
          ))}
        </div>
      )}
    </div>
  )
}
