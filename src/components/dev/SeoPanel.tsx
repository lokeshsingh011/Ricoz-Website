import { useState, useEffect } from "react"
import { useLocation } from "react-router"

interface SeoSnapshot {
  route: string
  title: string
  description: string
  canonical: string
  robots: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  ogType: string
  twitterCard: string
  jsonLdTypes: string[]
}

function readSnapshot(route: string): SeoSnapshot {
  const get = (sel: string, attr: string) =>
    document
      .querySelector<HTMLMetaElement | HTMLLinkElement>(sel)
      ?.getAttribute(attr) ?? ""

  const scripts = Array.from(
    document.querySelectorAll('script[type="application/ld+json"]'),
  )
  const jsonLdTypes: string[] = []
  for (const s of scripts) {
    try {
      const d = JSON.parse(s.textContent ?? "{}")
      const types = Array.isArray(d) ? d.map((x) => x["@type"]) : [d["@type"]]
      jsonLdTypes.push(...types.filter(Boolean))
    } catch {
      // ignore malformed
    }
  }

  return {
    route,
    title: document.title,
    description: get('meta[name="description"]', "content"),
    canonical: get('link[rel="canonical"]', "href"),
    robots: get('meta[name="robots"]', "content"),
    ogTitle: get('meta[property="og:title"]', "content"),
    ogDescription: get('meta[property="og:description"]', "content"),
    ogImage: get('meta[property="og:image"]', "content"),
    ogType: get('meta[property="og:type"]', "content"),
    twitterCard: get('meta[name="twitter:card"]', "content"),
    jsonLdTypes,
  }
}

export default function SeoPanel() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [snap, setSnap] = useState<SeoSnapshot | null>(null)

  useEffect(() => {
    // slight delay so usePageMeta effects have run
    const t = setTimeout(() => setSnap(readSnapshot(pathname)), 80)
    return () => clearTimeout(t)
  }, [pathname, open])

  if (import.meta.env.PROD) return null

  return (
    <div
      style={{
        position: "fixed",
        bottom: 12,
        right: 12,
        zIndex: 9999,
        fontFamily: "monospace",
        fontSize: 11,
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          background: open ? "#C41230" : "#111110",
          color: "#fff",
          border: "none",
          padding: "4px 10px",
          borderRadius: 4,
          cursor: "pointer",
          fontSize: 11,
          letterSpacing: "0.05em",
        }}
      >
        {open ? "✕ SEO" : "SEO ▸"}
      </button>

      {open && snap && (
        <div
          style={{
            marginTop: 6,
            background: "#111110",
            color: "#E5E5E0",
            borderRadius: 6,
            padding: "12px 14px",
            width: 340,
            maxHeight: "60vh",
            overflowY: "auto",
            boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
          }}
        >
          <Row label="Route" value={snap.route} />
          <Row label="Title" value={snap.title} />
          <Row label="Description" value={snap.description} />
          <Row label="Canonical" value={snap.canonical} />
          <Row
            label="Robots"
            value={snap.robots}
            warn={snap.robots.includes("noindex")}
          />
          <Row label="OG Title" value={snap.ogTitle} />
          <Row label="OG Description" value={snap.ogDescription} />
          <Row label="OG Type" value={snap.ogType} />
          <Row label="OG Image" value={snap.ogImage} />
          <Row label="Twitter Card" value={snap.twitterCard} />
          <div
            style={{ marginTop: 8, paddingTop: 8, borderTop: "1px solid #333" }}
          >
            <span
              style={{ color: "#9B9B97", display: "block", marginBottom: 4 }}
            >
              JSON-LD types
            </span>
            {snap.jsonLdTypes.length === 0 ? (
              <span style={{ color: "#6B6B67" }}>none</span>
            ) : (
              snap.jsonLdTypes.map((t, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-block",
                    marginRight: 4,
                    marginBottom: 4,
                    background: "#1E1E1C",
                    padding: "2px 6px",
                    borderRadius: 3,
                    color: "#C8E6C9",
                  }}
                >
                  {t}
                </span>
              ))
            )}
          </div>
          <button
            onClick={() => setSnap(readSnapshot(pathname))}
            style={{
              marginTop: 8,
              background: "#222",
              color: "#9B9B97",
              border: "none",
              padding: "3px 8px",
              borderRadius: 3,
              cursor: "pointer",
              fontSize: 10,
            }}
          >
            ↺ refresh
          </button>
        </div>
      )}
    </div>
  )
}

function Row({
  label,
  value,
  warn,
}: {
  label: string
  value: string
  warn?: boolean
}) {
  return (
    <div style={{ marginBottom: 5 }}>
      <span style={{ color: "#6B6B67", minWidth: 90, display: "inline-block" }}>
        {label}
      </span>
      <span
        style={{
          color: warn ? "#F4A261" : value ? "#E5E5E0" : "#555",
          wordBreak: "break-all",
        }}
      >
        {value || "—"}
      </span>
    </div>
  )
}
