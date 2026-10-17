import { useState, useCallback } from "react"
import { Link, useParams } from "react-router"
import { getResourceBySlug } from "@/data/resources"
import type { Resource } from "@/data/resources"

const RESOURCE_TYPES: Resource["type"][] = [
  "insight",
  "guide",
  "article",
  "report",
  "faq",
  "knowledge",
]

type SaveStatus = "idle" | "saving" | "saved" | "error"
type LifecycleStatus = "draft" | "review" | "published"

interface FormState {
  title: string
  slug: string
  type: Resource["type"]
  category: string
  excerpt: string
  seoTitle: string
  seoDescription: string
}

const BLANK_FORM: FormState = {
  title: "",
  slug: "",
  type: "article",
  category: "",
  excerpt: "",
  seoTitle: "",
  seoDescription: "",
}

function lifecycleLabel(status: LifecycleStatus) {
  if (status === "draft") return "Draft"
  if (status === "review") return "In Review"
  return "Published"
}

function lifecycleBadgeClass(status: LifecycleStatus) {
  if (status === "published")
    return "bg-green-50 border-green-300 text-green-700"
  if (status === "review") return "bg-amber-50 border-amber-200 text-amber-700"
  return "bg-secondary border-border text-muted-foreground"
}

export default function AdminResourceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const isNew = slug === "new"
  const resource = !isNew && slug ? getResourceBySlug(slug) : undefined

  const initialForm: FormState = resource
    ? {
        title: resource.title,
        slug: resource.slug,
        type: resource.type,
        category: resource.category,
        excerpt: resource.excerpt,
        seoTitle: resource.seo.title,
        seoDescription: resource.seo.description,
      }
    : BLANK_FORM

  const [form, setForm] = useState<FormState>(initialForm)
  const [original] = useState<FormState>(initialForm)
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle")
  const [lifecycle, setLifecycle] = useState<LifecycleStatus>("draft")

  const hasChanges = JSON.stringify(form) !== JSON.stringify(original)

  const handleField = useCallback(
    (field: keyof FormState) =>
      (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
      ) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }))
        setSaveStatus("idle")
      },
    [],
  )

  const handleSave = async () => {
    setSaveStatus("saving")
    await new Promise((r) => setTimeout(r, 700))
    setSaveStatus("saved")
    setTimeout(() => setSaveStatus("idle"), 3500)
  }

  const handleCancel = () => {
    if (
      hasChanges &&
      !window.confirm("You have unsaved changes. Discard them?")
    )
      return
    setForm(original)
    setSaveStatus("idle")
  }

  const moveToReview = () => setLifecycle("review")
  const publish = () => setLifecycle("published")

  // 404 state — only when slug is provided, not "new", and not found
  if (!isNew && !resource) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-medium text-foreground mb-2">
            Resource not found
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            No resource matches the slug "{slug}".
          </p>
          <Link
            to="/admin/resources"
            className="text-sm text-primary hover:underline"
          >
            ← Back to Resources
          </Link>
        </div>
      </div>
    )
  }

  const pageTitle = isNew
    ? "New Resource"
    : (resource?.title ?? "Edit Resource")

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link to="/admin" className="hover:text-foreground transition-colors">
            Admin
          </Link>
          <span>/</span>
          <Link
            to="/admin/resources"
            className="hover:text-foreground transition-colors"
          >
            Resources
          </Link>
          <span>/</span>
          <span className="text-foreground">
            {isNew ? "New" : resource?.title}
          </span>
        </div>

        {/* Page header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">
              {pageTitle}
            </h1>
            {!isNew && (
              <p className="text-sm text-muted-foreground mt-1">
                {resource?.slug}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            {/* Lifecycle badge */}
            <span
              className={`text-[11px] font-medium px-2.5 py-1 rounded border ${lifecycleBadgeClass(lifecycle)}`}
            >
              {lifecycleLabel(lifecycle)}
            </span>
            {/* Lifecycle actions */}
            {lifecycle === "draft" && (
              <button
                onClick={moveToReview}
                className="text-[11px] font-medium px-2.5 py-1 rounded border border-amber-300 bg-amber-50 text-amber-700 hover:opacity-80 transition-opacity"
              >
                Move to Review
              </button>
            )}
            {lifecycle === "review" && (
              <button
                onClick={publish}
                className="text-[11px] font-medium px-2.5 py-1 rounded border border-green-300 bg-green-50 text-green-700 hover:opacity-80 transition-opacity"
              >
                Publish
              </button>
            )}
          </div>
        </div>

        {/* Prototype note */}
        <div className="text-[11px] text-muted-foreground bg-secondary border border-border rounded-[var(--radius)] px-3 py-2 mb-8">
          Prototype mode — changes are saved to local state only and will not
          persist on page refresh.
        </div>

        {/* Toast */}
        {saveStatus === "saved" && (
          <div className="text-sm px-4 py-3 rounded-[var(--radius-md)] border mb-6 bg-green-50 border-green-200 text-green-800">
            Changes saved locally (prototype mode)
          </div>
        )}
        {saveStatus === "error" && (
          <div className="text-sm px-4 py-3 rounded-[var(--radius-md)] border mb-6 bg-red-50 border-red-200 text-red-800">
            Save failed — please retry
          </div>
        )}

        {/* Unsaved changes */}
        {hasChanges && saveStatus === "idle" && (
          <div className="text-[11px] text-amber-700 bg-amber-50 border border-amber-200 rounded-[var(--radius)] px-3 py-2 mb-6">
            You have unsaved changes.
          </div>
        )}

        {/* Form */}
        <div className="space-y-8">
          {/* Core */}
          <div className="border border-border rounded-[var(--radius-md)] p-6">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              Core Details
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  Title
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={handleField("title")}
                  className="w-full px-3 py-2 text-sm bg-background border border-border rounded-[var(--radius)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  Slug
                </label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={handleField("slug")}
                  className="w-full px-3 py-2 text-sm bg-background border border-border rounded-[var(--radius)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  Type
                </label>
                <select
                  value={form.type}
                  onChange={handleField("type")}
                  className="w-full px-3 py-2 text-sm bg-background border border-border rounded-[var(--radius)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {RESOURCE_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  Category
                </label>
                <input
                  type="text"
                  value={form.category}
                  onChange={handleField("category")}
                  className="w-full px-3 py-2 text-sm bg-background border border-border rounded-[var(--radius)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>
          </div>

          {/* Excerpt */}
          <div className="border border-border rounded-[var(--radius-md)] p-6">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              Description
            </p>
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">
                Excerpt / Description
              </label>
              <textarea
                value={form.excerpt}
                onChange={handleField("excerpt")}
                rows={5}
                className="w-full px-3 py-2 text-sm bg-background border border-border rounded-[var(--radius)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y"
              />
            </div>
          </div>

          {/* SEO */}
          <div className="border border-border rounded-[var(--radius-md)] p-6">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              SEO
            </p>
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  SEO Title
                </label>
                <input
                  type="text"
                  value={form.seoTitle}
                  onChange={handleField("seoTitle")}
                  className="w-full px-3 py-2 text-sm bg-background border border-border rounded-[var(--radius)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <p className="text-[11px] text-muted-foreground mt-1">
                  {form.seoTitle.length} / 60 characters recommended
                </p>
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  SEO Description
                </label>
                <textarea
                  value={form.seoDescription}
                  onChange={handleField("seoDescription")}
                  rows={3}
                  className="w-full px-3 py-2 text-sm bg-background border border-border rounded-[var(--radius)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y"
                />
                <p className="text-[11px] text-muted-foreground mt-1">
                  {form.seoDescription.length} / 160 characters recommended
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          <Link
            to="/admin/resources"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Resources
          </Link>
          <div className="flex items-center gap-3">
            {!isNew && (
              <button
                onClick={handleCancel}
                disabled={saveStatus === "saving"}
                className="px-4 py-2 text-sm border border-border rounded-[var(--radius)] text-foreground hover:bg-secondary transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
            )}
            <button
              onClick={handleSave}
              disabled={saveStatus === "saving" || (!isNew && !hasChanges)}
              className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-[var(--radius)] hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {saveStatus === "saving"
                ? "Saving…"
                : isNew
                  ? "Create Resource"
                  : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
