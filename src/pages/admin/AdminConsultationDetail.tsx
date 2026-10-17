import { useState } from "react"
import { useParams, Link } from "react-router"
import { demoConsultations } from "@/data/admin/demoData"
import type { ConsultationStatus } from "@/data/admin/types"

const STATUS_SEQUENCE: ConsultationStatus[] = [
  "booked",
  "confirmed",
  "reminder-sent",
  "meeting",
  "follow-up",
  "completed",
]
const STATUS_LABELS: Record<ConsultationStatus, string> = {
  booked: "Booked",
  confirmed: "Confirmed",
  "reminder-sent": "Reminder Sent",
  meeting: "Meeting",
  "follow-up": "Follow-up",
  completed: "Completed",
}

const PURPOSE_LABELS: Record<string, string> = {
  "product-demo": "Product Demo",
  "service-inquiry": "Service Inquiry",
  "solution-discovery": "Solution Discovery",
  general: "General Consultation",
}

const statusStore = new Map<string, ConsultationStatus>()

export default function AdminConsultationDetail() {
  const { id } = useParams<{ id: string }>()
  const consultation = demoConsultations.find((c) => c.id === id)

  const [status, setStatus] = useState<ConsultationStatus>(
    consultation
      ? (statusStore.get(consultation.id) ?? consultation.status)
      : "booked",
  )
  const [followUp, setFollowUp] = useState(
    consultation?.followUpRequired ?? false,
  )
  const [saving, setSaving] = useState(false)
  const [savedMsg, setSavedMsg] = useState("")

  if (!consultation) {
    return (
      <div className="max-w-xl">
        <Link
          to="/admin/consultations"
          className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block"
        >
          ← Back to Consultations
        </Link>
        <p className="text-foreground font-medium">Consultation not found.</p>
      </div>
    )
  }

  async function handleSave() {
    if (saving) return
    setSaving(true)
    setSavedMsg("")
    await new Promise<void>((r) => setTimeout(r, 600))
    statusStore.set(consultation!.id, status)
    setSaving(false)
    setSavedMsg("Status updated (prototype mode — not persisted).")
    setTimeout(() => setSavedMsg(""), 4000)
  }

  return (
    <div className="max-w-2xl">
      <Link
        to="/admin/consultations"
        className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block"
      >
        ← Consultation Management
      </Link>

      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">
            Consultation
          </p>
          <h1 className="text-2xl font-display text-foreground">
            {consultation.name}
          </h1>
          {consultation.company && (
            <p className="text-sm text-muted-foreground mt-0.5">
              {consultation.company}
            </p>
          )}
        </div>
        <span className="text-xs font-medium text-muted-foreground bg-secondary border border-border px-2 py-1 rounded shrink-0">
          {PURPOSE_LABELS[consultation.purpose] ?? consultation.purpose}
        </span>
      </div>

      {/* Customer */}
      <section className="border border-border rounded-[var(--radius-md)] p-5 mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Customer
        </p>
        <dl className="flex flex-col gap-3">
          {[
            { label: "Name", value: consultation.name },
            { label: "Email", value: consultation.email },
            ...(consultation.phone
              ? [{ label: "Phone", value: consultation.phone }]
              : []),
            ...(consultation.company
              ? [{ label: "Company", value: consultation.company }]
              : []),
          ].map((row) => (
            <div key={row.label} className="flex items-start gap-4">
              <dt className="text-xs text-muted-foreground w-28 shrink-0">
                {row.label}
              </dt>
              <dd className="text-sm text-foreground">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Booking info */}
      <section className="border border-border rounded-[var(--radius-md)] p-5 mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Booking Details
        </p>
        <dl className="flex flex-col gap-3">
          <div className="flex items-start gap-4">
            <dt className="text-xs text-muted-foreground w-28 shrink-0">
              Requested date
            </dt>
            <dd className="text-sm text-foreground">
              {consultation.preferredDate}
            </dd>
          </div>
          <div className="flex items-start gap-4">
            <dt className="text-xs text-muted-foreground w-28 shrink-0">
              Requested time
            </dt>
            <dd className="text-sm text-foreground">
              {consultation.preferredTime}
            </dd>
          </div>
          {consultation.scheduledDate &&
            consultation.scheduledDate !== consultation.preferredDate && (
              <div className="flex items-start gap-4">
                <dt className="text-xs text-muted-foreground w-28 shrink-0">
                  Scheduled date
                </dt>
                <dd className="text-sm text-foreground">
                  {consultation.scheduledDate}
                </dd>
              </div>
            )}
          {consultation.productSlug && (
            <div className="flex items-start gap-4">
              <dt className="text-xs text-muted-foreground w-28 shrink-0">
                Product
              </dt>
              <dd className="text-sm">
                <Link
                  to={`/admin/products/${consultation.productSlug}`}
                  className="text-primary hover:text-[#A50F28]"
                >
                  {consultation.productSlug}
                </Link>
              </dd>
            </div>
          )}
          {consultation.serviceSlug && (
            <div className="flex items-start gap-4">
              <dt className="text-xs text-muted-foreground w-28 shrink-0">
                Service
              </dt>
              <dd className="text-sm">
                <Link
                  to={`/admin/services/${consultation.serviceSlug}`}
                  className="text-primary hover:text-[#A50F28]"
                >
                  {consultation.serviceSlug}
                </Link>
              </dd>
            </div>
          )}
          {consultation.solutionSlug && (
            <div className="flex items-start gap-4">
              <dt className="text-xs text-muted-foreground w-28 shrink-0">
                Solution
              </dt>
              <dd className="text-sm text-foreground">
                {consultation.solutionSlug}
              </dd>
            </div>
          )}
          {consultation.enquiryId && (
            <div className="flex items-start gap-4">
              <dt className="text-xs text-muted-foreground w-28 shrink-0">
                Originating lead
              </dt>
              <dd className="text-sm">
                <Link
                  to={`/admin/leads/${consultation.enquiryId}`}
                  className="text-primary hover:text-[#A50F28]"
                >
                  {consultation.enquiryId}
                </Link>
              </dd>
            </div>
          )}
          {consultation.notes && (
            <div className="flex items-start gap-4">
              <dt className="text-xs text-muted-foreground w-28 shrink-0 pt-0.5">
                Notes
              </dt>
              <dd className="text-sm text-foreground leading-relaxed">
                {consultation.notes}
              </dd>
            </div>
          )}
        </dl>
      </section>

      {/* Status management */}
      <section className="border border-border rounded-[var(--radius-md)] p-5 mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Status
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

      {consultation.customerId && (
        <Link
          to={`/admin/customers/${consultation.customerId}`}
          className="text-xs text-primary hover:text-[#A50F28] transition-colors"
        >
          View customer record →
        </Link>
      )}
    </div>
  )
}
