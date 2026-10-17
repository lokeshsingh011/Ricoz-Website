import { useState, useEffect, useCallback } from "react"
import { Link, useParams } from "react-router"
import { getProductBySlug } from "@/data/products"
import { productCategorySlugMap } from "@/lib/utils"

const categoryNames = Object.keys(productCategorySlugMap)

interface FormState {
  name: string
  slug: string
  category: string
  tagline: string
  overview: string
  seoTitle: string
  seoDescription: string
}

type SaveStatus = "idle" | "saving" | "saved" | "error"
type PublishStatus = "draft" | "published"

function toastMessage(status: SaveStatus) {
  if (status === "saved") return "Changes saved locally (prototype mode)"
  if (status === "error") return "Save failed — please retry"
  return null
}

export default function AdminProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined

  const initialForm: FormState = product
    ? {
        name: product.name,
        slug: product.slug,
        category: product.category,
        tagline: product.tagline,
        overview: product.overview,
        seoTitle: product.seo.title,
        seoDescription: product.seo.description,
      }
    : {
        name: "",
        slug: "",
        category: "",
        tagline: "",
        overview: "",
        seoTitle: "",
        seoDescription: "",
      }

  const [form, setForm] = useState<FormState>(initialForm)
  const [original] = useState<FormState>(initialForm)
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle")
  const [publishStatus, setPublishStatus] = useState<PublishStatus>("draft")

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

  const togglePublish = () => {
    setPublishStatus((prev) => (prev === "draft" ? "published" : "draft"))
  }

  useEffect(() => {
    document.title = product
      ? `Edit ${product.name} — Admin`
      : "Product Not Found — Admin"
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-medium text-foreground mb-2">
            Product not found
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            No product matches the slug "{slug}".
          </p>
          <Link
            to="/admin/products"
            className="text-sm text-primary hover:underline"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const toast = toastMessage(saveStatus)

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
            to="/admin/products"
            className="hover:text-foreground transition-colors"
          >
            Products
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Page header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">
              {product.name}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">{product.slug}</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Publish toggle */}
            <button
              onClick={togglePublish}
              className={`text-[11px] font-medium px-2.5 py-1 rounded border transition-colors ${
                publishStatus === "published"
                  ? "bg-green-50 border-green-300 text-green-700"
                  : "bg-secondary border-border text-muted-foreground hover:border-foreground"
              }`}
            >
              {publishStatus === "published" ? "Published" : "Draft"}
            </button>
          </div>
        </div>

        {/* Prototype note */}
        <div className="text-[11px] text-muted-foreground bg-secondary border border-border rounded-[var(--radius)] px-3 py-2 mb-8">
          Prototype mode — changes are saved to local state only and will not
          persist on page refresh.
        </div>

        {/* Toast */}
        {toast && (
          <div
            className={`text-sm px-4 py-3 rounded-[var(--radius-md)] border mb-6 ${
              saveStatus === "saved"
                ? "bg-green-50 border-green-200 text-green-800"
                : "bg-red-50 border-red-200 text-red-800"
            }`}
          >
            {toast}
          </div>
        )}

        {/* Unsaved changes banner */}
        {hasChanges && saveStatus === "idle" && (
          <div className="text-[11px] text-amber-700 bg-amber-50 border border-amber-200 rounded-[var(--radius)] px-3 py-2 mb-6">
            You have unsaved changes.
          </div>
        )}

        {/* Form */}
        <div className="space-y-8">
          {/* Core section */}
          <div className="border border-border rounded-[var(--radius-md)] p-6">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              Core Details
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={handleField("name")}
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
                  Category
                </label>
                <select
                  value={form.category}
                  onChange={handleField("category")}
                  className="w-full px-3 py-2 text-sm bg-background border border-border rounded-[var(--radius)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {categoryNames.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  Tagline
                </label>
                <input
                  type="text"
                  value={form.tagline}
                  onChange={handleField("tagline")}
                  className="w-full px-3 py-2 text-sm bg-background border border-border rounded-[var(--radius)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>
          </div>

          {/* Overview section */}
          <div className="border border-border rounded-[var(--radius-md)] p-6">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              Overview
            </p>
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">
                Overview
              </label>
              <textarea
                value={form.overview}
                onChange={handleField("overview")}
                rows={6}
                className="w-full px-3 py-2 text-sm bg-background border border-border rounded-[var(--radius)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y"
              />
            </div>
          </div>

          {/* SEO section */}
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
            to="/admin/products"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Products
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={handleCancel}
              disabled={saveStatus === "saving"}
              className="px-4 py-2 text-sm border border-border rounded-[var(--radius)] text-foreground hover:bg-secondary transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saveStatus === "saving" || !hasChanges}
              className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-[var(--radius)] hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {saveStatus === "saving" ? "Saving…" : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
