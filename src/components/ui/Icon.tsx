export type IconName = "analytics" | "arrow" | "automation" | "compass" | "data" | "integration" | "knowledge" | "people" | "product" | "search" | "security" | "service" | "solution" | "strategy"

interface IconProps {
  name: IconName
  className?: string
  size?: number
}

const paths: Record<IconName, React.ReactNode> = {
  analytics: (
    <>
      <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
      <path d="m4 7 6-4 6 6 6-5" />
    </>
  ),
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  automation: (
    <>
      <path d="M8 4h8l3 5-3 5H8L5 9l3-5Z" />
      <path d="M9 14v3l3 3 3-3v-3M9 9h6" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  data: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  integration: (
    <>
      <path d="M8 7h8a4 4 0 0 1 4 4v1M16 17H8a4 4 0 0 1-4-4v-1" />
      <path d="m17 9 3 3 3-3M7 15l-3-3-3 3" />
    </>
  ),
  knowledge: (
    <>
      <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22V5.5ZM20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22V5.5Z" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2" />
      <path d="M3 20c.5-4 2.5-6 6-6s5.5 2 6 6M15 15c3 0 4.5 1.7 5 5" />
    </>
  ),
  product: (
    <>
      <path d="m12 2 8 4.5v11L12 22l-8-4.5v-11L12 2Z" />
      <path d="m4 6.5 8 4.5 8-4.5M12 11v11" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 5 5" />
    </>
  ),
  security: (
    <>
      <path d="M12 2 20 5v6c0 5-3.4 9-8 11-4.6-2-8-6-8-11V5l8-3Z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </>
  ),
  service: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" />
    </>
  ),
  solution: (
    <>
      <path d="M8 3h8l5 9-5 9H8l-5-9 5-9Z" />
      <path d="m8 12 2.5 2.5L16 9" />
    </>
  ),
  strategy: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
}

export function getCategoryIcon(value: string): IconName {
  const category = value.toLowerCase()
  if (category.includes("security") || category.includes("identity"))
    return "security"
  if (category.includes("data") || category.includes("intelligence"))
    return "data"
  if (category.includes("automation") || category.includes("workflow"))
    return "automation"
  if (category.includes("people") || category.includes("hr")) return "people"
  if (category.includes("integration") || category.includes("implementation"))
    return "integration"
  if (category.includes("strategy") || category.includes("transformation"))
    return "strategy"
  if (category.includes("analytics")) return "analytics"
  return "product"
}

export default function Icon({ name, className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
