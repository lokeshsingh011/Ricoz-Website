import { useState } from "react"
import { useParams, Link } from "react-router"
import {
  demoCustomers,
  demoEnquiries,
  demoConsultations,
} from "@/data/admin/demoData"
import type { RelationshipStage } from "@/data/admin/types"

const STAGE_SEQUENCE: RelationshipStage[] = [
  "new",
  "engaged",
  "follow-up",
  "ongoing",
]
const STAGE_LABELS: Record<RelationshipStage, string> = {
  new: "New",
  engaged: "Engaged",
  "follow-up": "Follow-up",
  ongoing: "Ongoing",
}

const stageStore = new Map<string, RelationshipStage>()

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default function AdminCustomerDetail() {
  const { id } = useParams<{ id: string }>()
  const customer = demoCustomers.find((c) => c.id === id)

  const [stage, setStage] = useState<RelationshipStage>(
    customer ? (stageStore.get(customer.id) ?? customer.stage) : "new",
  )
  const [saving, setSaving] = useState(false)
  const [savedMsg, setSavedMsg] = useState("")

  if (!customer) {
    return (
      <div className="max-w-xl">
        <Link
          to="/admin/customers"
          className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block"
        >
          ← Back to Customers
        </Link>
        <p className="text-foreground font-medium">Customer not found.</p>
      </div>
    )
  }

  const linkedEnquiries = demoEnquiries.filter((e) =>
    customer.enquiryIds.includes(e.id),
  )
  const linkedConsultations = demoConsultations.filter((c) =>
    customer.consultationIds.includes(c.id),
  )

  async function handleSave() {
    if (saving) return
    setSaving(true)
    setSavedMsg("")
    await new Promise<void>((r) => setTimeout(r, 600))
    stageStore.set(customer!.id, stage)
    setSaving(false)
    setSavedMsg("Stage updated (prototype mode — not persisted).")
    setTimeout(() => setSavedMsg(""), 4000)
  }

  const interests = [
    ...customer.productSlugs.map((s) => ({
      type: "Product",
      slug: s,
      href: `/admin/products/${s}`,
    })),
    ...customer.serviceSlugs.map((s) => ({
      type: "Service",
      slug: s,
      href: `/admin/services/${s}`,
    })),
    ...customer.solutionSlugs.map((s) => ({
      type: "Solution",
      slug: s,
      href: "#",
    })),
  ]

  return (
    <div className="max-w-2xl">
      <Link
        to="/admin/customers"
        className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block"
      >
        ← Customer Management
      </Link>

      <div className="mb-8">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Customer
        </p>
        <h1 className="text-2xl font-display text-foreground">
          {customer.name}
        </h1>
        {customer.company && (
          <p className="text-sm text-muted-foreground mt-0.5">
            {customer.company}
          </p>
        )}
        <p className="text-xs text-muted-foreground mt-1">
          Since {fmtDate(customer.createdAt)}
        </p>
      </div>

      {/* Identity */}
      <section className="border border-border rounded-[var(--radius-md)] p-5 mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Identity
        </p>
        <dl className="flex flex-col gap-3">
          {[
            { label: "Name", value: customer.name },
            { label: "Email", value: customer.email },
            ...(customer.phone
              ? [{ label: "Phone", value: customer.phone }]
              : []),
            ...(customer.company
              ? [{ label: "Company", value: customer.company }]
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

      {/* Interests */}
      {interests.length > 0 && (
        <section className="border border-border rounded-[var(--radius-md)] p-5 mb-5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Interests
          </p>
          <ul className="flex flex-col gap-2">
            {interests.map((i) => (
              <li key={i.slug} className="flex items-center gap-3">
                <span className="text-[10px] font-medium text-muted-foreground w-16 shrink-0">
                  {i.type}
                </span>
                <Link
                  to={i.href}
                  className="text-sm text-primary hover:text-[#A50F28]"
                >
                  {i.slug}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Enquiries */}
      {linkedEnquiries.length > 0 && (
        <section className="border border-border rounded-[var(--radius-md)] p-5 mb-5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Enquiries
          </p>
          <ul className="flex flex-col gap-2">
            {linkedEnquiries.map((e) => (
              <li
                key={e.id}
                className="flex items-center justify-between gap-3 text-sm py-1.5 border-b border-border/50 last:border-0"
              >
                <span className="text-foreground">
                  {e.message.slice(0, 60)}…
                </span>
                <Link
                  to={`/admin/leads/${e.id}`}
                  className="text-xs text-primary hover:text-[#A50F28] shrink-0"
                >
                  View →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Consultations */}
      {linkedConsultations.length > 0 && (
        <section className="border border-border rounded-[var(--radius-md)] p-5 mb-5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Consultations
          </p>
          <ul className="flex flex-col gap-2">
            {linkedConsultations.map((c) => (
              <li
                key={c.id}
                className="flex items-center justify-between gap-3 text-sm py-1.5 border-b border-border/50 last:border-0"
              >
                <span className="text-foreground">
                  {c.preferredDate} · {c.preferredTime}
                </span>
                <Link
                  to={`/admin/consultations/${c.id}`}
                  className="text-xs text-primary hover:text-[#A50F28] shrink-0"
                >
                  View →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Next action */}
      {customer.nextAction && (
        <section className="border border-border rounded-[var(--radius-md)] p-5 mb-5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            Next Action
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            {customer.nextAction}
          </p>
        </section>
      )}

      {/* Relationship stage */}
      <section className="border border-border rounded-[var(--radius-md)] p-5 mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Relationship Stage
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {STAGE_SEQUENCE.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStage(s)}
              className={[
                "text-sm px-3 py-1.5 rounded-[var(--radius)] border transition-colors duration-150",
                stage === s
                  ? "bg-foreground text-background border-foreground font-medium"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30",
              ].join(" ")}
            >
              {STAGE_LABELS[s]}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-[var(--radius)] hover:bg-[#A50F28] disabled:opacity-60 transition-colors"
          >
            {saving ? "Saving…" : "Update stage"}
          </button>
          {savedMsg && (
            <p className="text-xs text-muted-foreground">{savedMsg}</p>
          )}
        </div>
      </section>

      <p className="text-xs text-muted-foreground">
        Customer ID: <span className="font-mono">{customer.id}</span>
      </p>
    </div>
  )
}
