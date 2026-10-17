export function toSlug(str: string): string {
  return str
    .toLowerCase()
    .replace(/[&]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

// Product category slug maps — 16-category taxonomy
export const productCategorySlugMap: Record<string, string> = {
  "Sales & CRM": "sales-crm",
  "Marketing & Growth": "marketing-growth",
  "Customer Experience": "customer-experience",
  "Finance & Accounting": "finance-accounting",
  "People & HR": "people-hr",
  "Operations & Business Management": "operations-management",
  "Project & Work Management": "project-work-management",
  "Communication & Collaboration": "communication-collaboration",
  "Data & Analytics": "data-analytics",
  "IT Management": "it-management",
  "Security & Identity": "security-identity",
  "Automation & Workflow": "automation-workflow",
  "Developer & Application Platforms": "developer-platforms",
  "Commerce & Digital Business": "commerce-digital",
  "AI & Intelligence": "ai-intelligence",
  "Industry & Specialized Solutions": "industry-solutions",
}

export const productSlugCategoryMap: Record<string, string> =
  Object.fromEntries(
    Object.entries(productCategorySlugMap).map(([name, slug]) => [slug, name]),
  )

// Service category slug maps
export const serviceCategorySlugMap: Record<string, string> = {
  "Strategy & Transformation": "strategy-transformation",
  "Implementation & Integration": "implementation-integration",
  "Data & Intelligence": "data-intelligence",
  "Security & Compliance": "security-compliance",
  "Operations & Efficiency": "operations-efficiency",
  "Digital Marketing": "digital-marketing",
  "Social Media & Content": "social-media-content",
}

export const serviceSlugCategoryMap: Record<string, string> =
  Object.fromEntries(
    Object.entries(serviceCategorySlugMap).map(([name, slug]) => [slug, name]),
  )

// Resource category slug maps
export const resourceCategorySlugMap: Record<string, string> = {
  "Strategy & Transformation": "strategy-transformation",
  "Data & Intelligence": "data-intelligence",
  "Implementation & Integration": "implementation-integration",
  "Operations & Efficiency": "operations-efficiency",
  "Security & Compliance": "security-compliance",
}

export function classNames(
  ...classes: (string | undefined | null | false)[]
): string {
  return classes.filter(Boolean).join(" ")
}
