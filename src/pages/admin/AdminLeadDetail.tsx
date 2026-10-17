import { useState } from "react"
import { useParams, Link } from "react-router"
import { demoEnquiries } from "@/data/admin/demoData"
import type { EnquiryStatus } from "@/data/admin/types"

const STATUS_SEQUENCE: EnquiryStatus[] = [
  "new",
  "in-review",
  "contacted",
  "follow-up",
  "closed",
]
const STATUS_LABELS: Record<EnquiryStatus, string> = {
  new: "New",
  "in-review": "In Review",
  contacted: "Contacted",
  "follow-up": "Follow-up",
  closed: "Closed",
}

// In-memory status store — persists changes within the session
const statusStore = new Map<string, EnquiryStatus>()

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export default function AdminLeadDetail() {
  const { id } = useParams<{ id: string }>()
  const enquiry = demoEnquiries.find((e) => e.id === id)

  const [status, setStatus] = useState<EnquiryStatus>(
    enquiry ? (statusStore.get(enquiry.id) ?? enquiry.status) : "new",
  )
  const [followUp, setFollowUp] = useState(enquiry?.followUpRequired ?? false)
  const [saving, setSaving] = useState(false)
  const [savedMsg, setSavedMsg] = useState("")

  if (!enquiry) {
    return (
      <div className="max-w-xl">
        <Link
          to="/admin/leads"
          className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block"
        >
          ← Back to Leads
        </Link>
        <p className="text-foreground font-medium">Lead not found.</p>
      </div>
    )
  }

  async function handleSave() {
    if (saving) return
    setSaving(true)
    setSavedMsg("")
    await new Promise<void>((r) => setTimeout(r, 600))
    statusStore.set(enquiry!.id, status)
    setSaving(false)
    setSavedMsg("Status updated (prototype mode — not persisted).")
    setTimeout(() => setSavedMsg(""), 4000)
  }

  const typeLabel = enquiry.productSlug
    ? "Product enquiry"
    : enquiry.serviceSlug
      ? "Service enquiry"
      : enquiry.solutionSlug
        ? "Solution enquiry"
        : "General enquiry"

  return (
    <div className="max-w-2xl">
      <Link
        to="/admin/leads"
        className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block"
      >
        ← Lead Management
      </Link>

      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">
            Lead
          </p>
          <h1 className="text-2xl font-display text-foreground">
            {enquiry.name}
          </h1>
          {enquiry.company && (
            <p className="text-sm text-muted-foreground mt-0.5">
              {enquiry.company}
            </p>
          )}
        </div>
        <span className="text-xs font-medium text-muted-foreground bg-secondary border border-border px-2 py-1 rounded shrink-0">
          {typeLabel}
        </span>
      </div>

      {/* Contact info */}
      <section className="border border-border rounded-[var(--radius-md)] p-5 mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Contact Information
        </p>
        <dl className="flex flex-col gap-3">
          {[
            { label: "Name", value: enquiry.name },
            { label: "Email", value: enquiry.email },
            ...(enquiry.phone
              ? [{ label: "Phone", value: enquiry.phone }]
              : []),
            ...(enquiry.company
              ? [{ label: "Company", value: enquiry.company }]
              : []),
          ].map((row) => (
            <div key={row.label} className="flex items-start gap-4">
              <dt className="text-xs text-muted-foreground w-24 shrink-0">
                {row.label}
              </dt>
              <dd className="text-sm text-foreground">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Enquiry context */}
      <section className="border border-border rounded-[var(--radius-md)] p-5 mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Enquiry
        </p>
        <dl className="flex flex-col gap-3 mb-4">
          <div className="flex items-start gap-4">
            <dt className="text-xs text-muted-foreground w-24 shrink-0">
              Submitted
            </dt>
            <dd className="text-sm text-foreground">
              {fmtDate(enquiry.submittedAt)}
            </dd>
          </div>
          {enquiry.productSlug && (
            <div className="flex items-start gap-4">
              <dt className="text-xs text-muted-foreground w-24 shrink-0">
                Product
              </dt>
              <dd className="text-sm">
                <Link
                  to={`/admin/products/${enquiry.productSlug}`}
                  className="text-primary hover:text-[#A50F28]"
                >
                  {enquiry.productSlug}
                </Link>
              </dd>
            </div>
          )}
          {enquiry.serviceSlug && (
            <div className="flex items-start gap-4">
              <dt className="text-xs text-muted-foreground w-24 shrink-0">
                Service
              </dt>
              <dd className="text-sm">
                <Link
                  to={`/admin/services/${enquiry.serviceSlug}`}
                  className="text-primary hover:text-[#A50F28]"
                >
                  {enquiry.serviceSlug}
                </Link>
              </dd>
            </div>
          )}
          {enquiry.solutionSlug && (
            <div className="flex items-start gap-4">
              <dt className="text-xs text-muted-foreground w-24 shrink-0">
                Solution
              </dt>
              <dd className="text-sm text-foreground">
                {enquiry.solutionSlug}
              </dd>
            </div>
          )}
        </dl>
        <div>
          <p className="text-xs text-muted-foreground mb-2">Message</p>
          <p className="text-sm text-foreground leading-relaxed bg-secondary border border-border rounded-[var(--radius)] p-3">
            {enquiry.message}
          </p>
        </div>
      </section>

      {/* Status management */}
      <section className="border border-border rounded-[var(--radius-md)] p-5 mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Lead Status
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {STATUS_SEQUENCE.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStatus(s)}
              className={[
                "text-sm px-3 py-1.5 rounded-[var(--radius)] border transition-colors duration-150",
                status === s
                  ? "bg-foreground text-background border-foreground font-medium"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30",
              ].join(" ")}
            >
              {STATUS_LABELS[s]}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2.5 cursor-pointer mb-5">
          <input
            type="checkbox"
            checked={followUp}
            onChange={(e) => setFollowUp(e.target.checked)}
            className="rounded border-border"
          />
          <span className="text-sm text-foreground">Follow-up required</span>
        </label>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-[var(--radius)] hover:bg-[#A50F28] disabled:opacity-60 transition-colors"
          >
            {saving ? "Saving…" : "Save status"}
          </button>
          {savedMsg && (
            <p className="text-xs text-muted-foreground">{savedMsg}</p>
          )}
        </div>
      </section>

      {/* ID reference */}
      <p className="text-xs text-muted-foreground">
        Lead ID: <span className="font-mono">{enquiry.id}</span>
      </p>
    </div>
  )
}
