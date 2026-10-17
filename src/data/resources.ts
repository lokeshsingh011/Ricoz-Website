export interface Author {
  name: string
  role: string
}

export interface Resource {
  id: string
  slug: string
  type: "insight" | "guide" | "article" | "report" | "faq" | "knowledge"
  title: string
  excerpt: string
  readingTime: string
  publishedDate: string
  updatedAt?: string
  category: string
  topics: string[]
  tags?: string[]
  featured?: boolean
  author?: Author
  relatedProducts?: string[]
  relatedServices?: string[]
  relatedSolutions?: string[]
  seo: { title: string; description: string }
}

export interface CaseStudy {
  id: string
  slug: string
  client: string
  industry: string
  title: string
  challenge: string
  approach: string
  outcomes: { metric: string; description: string }[]
  productsUsed: string[]
  servicesUsed: string[]
  solutionSlugs?: string[]
  seo: { title: string; description: string }
}

export const resourceTopics = [
  "AI & Automation",
  "Business Operations",
  "Data & Analytics",
  "Cybersecurity",
  "Customer Experience",
  "Finance & Compliance",
  "People & HR",
  "Automation & Workflow",
  "Digital Commerce",
  "Technology Modernisation",
  "Productivity",
  "Growth",
  "Integration",
] as const

export type ResourceTopic = typeof resourceTopics[number]

export const resourceTypeMeta: Record<Resource["type"], {
  label: string
  plural: string
  description: string
}> = {
  insight: {
    label: "Insight",
    plural: "Insights",
    description:
      "Strategic perspectives and thought leadership from the Ricoz team.",
  },
  guide: {
    label: "Guide",
    plural: "Guides",
    description:
      "Practical, long-form educational resources for planning and implementation.",
  },
  article: {
    label: "Article",
    plural: "Articles",
    description:
      "Focused, accessible content on specific technology and business topics.",
  },
  report: {
    label: "Report",
    plural: "Reports",
    description:
      "In-depth research and analysis on enterprise trends and capabilities.",
  },
  faq: {
    label: "FAQ",
    plural: "FAQs",
    description: "Clear answers to the questions organisations ask most often.",
  },
  knowledge: {
    label: "Knowledge",
    plural: "Knowledge",
    description:
      "Evergreen reference content for foundational technology and business concepts.",
  },
}

export const resources: Resource[] = [
  {
    id: "state-of-enterprise-transformation",
    slug: "state-of-enterprise-transformation",
    type: "report",
    title: "The State of Enterprise Digital Transformation",
    excerpt:
      "An analysis of how large organizations are approaching digital transformation: what is working, where most programmes fall short, and the capabilities that separate leaders from laggards.",
    readingTime: "18 min",
    publishedDate: "March 2026",
    category: "Strategy & Transformation",
    topics: ["Technology Modernisation", "Business Operations", "Growth"],
    featured: true,
    author: { name: "Ricoz Research", role: "Strategy & Advisory" },
    relatedServices: [
      "digital-transformation-consulting",
      "technology-strategy-roadmap",
    ],
    relatedSolutions: ["technology-modernization"],
    seo: {
      title: "The State of Enterprise Digital Transformation | Ricoz Insights",
      description:
        "Analysis of digital transformation approaches, success factors, and common failure patterns across large organizations.",
    },
  },
  {
    id: "ai-readiness-for-enterprise",
    slug: "ai-readiness-for-enterprise",
    type: "insight",
    title:
      "AI Readiness: What Enterprise Organisations Need to Know Before They Begin",
    excerpt:
      "The conversation around AI in the enterprise has moved quickly from 'should we?' to 'where do we start?' This perspective examines the organizational, data, and governance conditions that determine whether an AI initiative is ready to deliver real value.",
    readingTime: "9 min",
    publishedDate: "April 2026",
    category: "AI & Intelligence",
    topics: ["AI & Automation", "Technology Modernisation", "Data & Analytics"],
    author: { name: "Ricoz Research", role: "AI & Intelligence" },
    relatedProducts: ["rico-assist", "rico-decide"],
    relatedSolutions: ["data-intelligence"],
    seo: {
      title: "AI Readiness for Enterprise | Ricoz Insights",
      description:
        "The organizational, data, and governance conditions that determine whether an enterprise AI initiative is ready to deliver real value.",
    },
  },
  {
    id: "customer-experience-as-business-system",
    slug: "customer-experience-as-business-system",
    type: "insight",
    title: "Customer Experience as a Business System, Not a Project",
    excerpt:
      "Most customer experience improvements stall because they are treated as isolated initiatives. Sustained CX improvement requires building it as an interconnected operational system — with the right data, processes, and accountability in place.",
    readingTime: "8 min",
    publishedDate: "March 2026",
    category: "Customer Operations",
    topics: ["Customer Experience", "Business Operations"],
    author: { name: "Ricoz Research", role: "Strategy & Advisory" },
    relatedSolutions: ["customer-experience"],
    seo: {
      title: "Customer Experience as a Business System | Ricoz Insights",
      description:
        "Why sustained customer experience improvement requires building CX as an interconnected operational system rather than a project.",
    },
  },
  {
    id: "finance-technology-modernisation",
    slug: "finance-technology-modernisation",
    type: "insight",
    title: "The Case for Modernising Finance Technology in the Enterprise",
    excerpt:
      "Finance functions in large organisations are often constrained by legacy systems, manual processes, and fragmented data. This perspective examines why modernisation has become a strategic priority — and what it genuinely requires.",
    readingTime: "10 min",
    publishedDate: "September 2025",
    category: "Finance & Operations",
    topics: [
      "Finance & Compliance",
      "Technology Modernisation",
      "Business Operations",
    ],
    author: { name: "Ricoz Research", role: "Finance & Operations" },
    relatedSolutions: ["financial-management", "technology-modernization"],
    seo: {
      title:
        "Modernising Finance Technology in the Enterprise | Ricoz Insights",
      description:
        "Why finance technology modernisation has become a strategic priority for large organisations and what it genuinely requires.",
    },
  },
  {
    id: "building-data-first-culture",
    slug: "building-data-first-culture",
    type: "guide",
    title: "Building a Data-First Culture in Large Organizations",
    excerpt:
      "The technical infrastructure to support data-driven decisions is only half the challenge. This guide examines the organizational and leadership dimensions of becoming genuinely data-first.",
    readingTime: "12 min",
    publishedDate: "February 2026",
    category: "Data & Intelligence",
    topics: ["Data & Analytics", "Business Operations"],
    author: { name: "Ricoz Research", role: "Data & Analytics" },
    relatedProducts: ["rico-analytics", "rico-data"],
    relatedServices: ["data-analytics-services"],
    relatedSolutions: ["data-intelligence"],
    seo: {
      title: "Building a Data-First Culture | Ricoz Guides",
      description:
        "Practical guidance on developing the organizational capabilities and culture needed for data-driven decision-making.",
    },
  },
  {
    id: "cloud-migration-at-scale",
    slug: "cloud-migration-at-scale",
    type: "guide",
    title: "Navigating Cloud Migration at Enterprise Scale",
    excerpt:
      "Why large-scale cloud migrations so often exceed budget and timeline expectations — and the strategic and technical disciplines that distinguish successful programmes.",
    readingTime: "14 min",
    publishedDate: "January 2026",
    category: "Implementation & Integration",
    topics: ["Technology Modernisation", "Integration"],
    author: { name: "Ricoz Research", role: "Technology Delivery" },
    relatedServices: [
      "cloud-migration-services",
      "enterprise-systems-integration",
    ],
    relatedSolutions: ["technology-modernization"],
    seo: {
      title: "Navigating Cloud Migration at Enterprise Scale | Ricoz Guides",
      description:
        "Strategic and technical guidance for planning and executing large-scale enterprise cloud migrations.",
    },
  },
  {
    id: "digital-commerce-foundations",
    slug: "digital-commerce-foundations",
    type: "guide",
    title: "Building the Foundations of a Modern Digital Commerce Operation",
    excerpt:
      "Moving commerce operations to a scalable, connected digital model requires more than a new storefront. This guide covers the infrastructure, data, and operational layers that make digital commerce sustainable at scale.",
    readingTime: "16 min",
    publishedDate: "February 2026",
    category: "Commerce & Growth",
    topics: ["Digital Commerce", "Customer Experience", "Integration"],
    author: { name: "Ricoz Research", role: "Commerce & Digital" },
    relatedSolutions: ["revenue-growth", "customer-experience"],
    seo: {
      title: "Building a Modern Digital Commerce Operation | Ricoz Guides",
      description:
        "A practical guide to the infrastructure, data, and operational layers that make digital commerce sustainable at enterprise scale.",
    },
  },
  {
    id: "hr-technology-strategy",
    slug: "hr-technology-strategy",
    type: "guide",
    title:
      "A Practical Guide to HR Technology Strategy for Growing Organisations",
    excerpt:
      "Selecting and implementing HR technology is rarely straightforward. This guide explores how to align HR technology choices with organizational maturity, workforce complexity, and long-term talent strategy.",
    readingTime: "13 min",
    publishedDate: "January 2026",
    category: "People & HR",
    topics: ["People & HR", "Productivity", "Business Operations"],
    author: { name: "Ricoz Research", role: "People & Workforce" },
    relatedSolutions: ["people-operations"],
    seo: {
      title: "HR Technology Strategy Guide | Ricoz Guides",
      description:
        "Practical guidance on aligning HR technology choices with organizational maturity and long-term talent strategy.",
    },
  },
  {
    id: "roi-of-process-automation",
    slug: "roi-of-process-automation",
    type: "article",
    title: "The Real ROI of Enterprise Process Automation",
    excerpt:
      "Process automation promises significant efficiency gains — but delivering them reliably requires more than technology. An honest examination of what works, what doesn't, and how to structure an automation programme for sustained return.",
    readingTime: "10 min",
    publishedDate: "December 2025",
    category: "Operations & Efficiency",
    topics: ["Automation & Workflow", "Business Operations", "Productivity"],
    author: { name: "Ricoz Research", role: "Operations & Automation" },
    relatedProducts: ["rico-flow"],
    relatedServices: ["process-optimization"],
    relatedSolutions: ["business-automation"],
    seo: {
      title: "The Real ROI of Enterprise Process Automation | Ricoz Insights",
      description:
        "An analysis of the conditions under which enterprise process automation delivers genuine ROI — and how to structure programmes accordingly.",
    },
  },
  {
    id: "cybersecurity-in-the-age-of-ai",
    slug: "cybersecurity-in-the-age-of-ai",
    type: "article",
    title: "Cybersecurity in the Age of AI: New Threats, New Disciplines",
    excerpt:
      "AI is reshaping both the threat landscape and the tools available to defenders. This piece examines what has materially changed, what hasn't, and the security disciplines that enterprises must strengthen in response.",
    readingTime: "11 min",
    publishedDate: "November 2025",
    category: "Security & Compliance",
    topics: ["Cybersecurity", "AI & Automation"],
    author: { name: "Ricoz Research", role: "Cybersecurity Advisory" },
    relatedProducts: ["rico-shield"],
    relatedServices: ["cybersecurity-advisory"],
    relatedSolutions: ["cybersecurity"],
    seo: {
      title: "Cybersecurity in the Age of AI | Ricoz Insights",
      description:
        "How AI is reshaping the enterprise threat landscape and the security disciplines organizations must develop in response.",
    },
  },
  {
    id: "integration-strategy-for-enterprise",
    slug: "integration-strategy-for-enterprise",
    type: "article",
    title:
      "Why Enterprise Integration Strategy Is Now a Business Problem, Not Just an IT One",
    excerpt:
      "As the pace of technology adoption accelerates, the ability to connect systems, data, and processes has become a genuine source of competitive advantage — or a significant constraint. Organisations that treat integration as a strategic capability tend to move faster and operate with more confidence.",
    readingTime: "9 min",
    publishedDate: "August 2025",
    category: "Implementation & Integration",
    topics: ["Integration", "Technology Modernisation", "Business Operations"],
    author: { name: "Ricoz Research", role: "Technology Delivery" },
    relatedServices: ["enterprise-systems-integration"],
    relatedSolutions: ["technology-modernization"],
    seo: {
      title: "Enterprise Integration Strategy | Ricoz Insights",
      description:
        "Why integration strategy has become a business problem — not just IT — and how leading organisations treat it as a strategic capability.",
    },
  },
  {
    id: "what-is-enterprise-data-governance",
    slug: "what-is-enterprise-data-governance",
    type: "knowledge",
    title: "What Is Enterprise Data Governance — And Why Does It Matter?",
    excerpt:
      "Data governance is one of the most frequently discussed and least consistently understood disciplines in enterprise technology. This reference explains the core concepts, why governance matters at scale, and how it connects to both compliance and business performance.",
    readingTime: "7 min",
    publishedDate: "December 2025",
    category: "Data & Intelligence",
    topics: ["Data & Analytics", "Finance & Compliance", "Business Operations"],
    author: { name: "Ricoz Research", role: "Data & Analytics" },
    relatedProducts: ["rico-data"],
    relatedServices: ["data-analytics-services"],
    relatedSolutions: ["data-intelligence", "financial-management"],
    seo: {
      title: "What Is Enterprise Data Governance? | Ricoz Knowledge",
      description:
        "A clear explanation of enterprise data governance — what it is, why it matters at scale, and how it connects to business performance.",
    },
  },
  {
    id: "understanding-automation-in-business",
    slug: "understanding-automation-in-business",
    type: "knowledge",
    title: "Understanding Automation in Business: A Plain-Language Reference",
    excerpt:
      "Automation means different things in different contexts — from simple task automation to end-to-end process orchestration and intelligent document handling. This reference clarifies the distinct categories, what each is suited for, and where they connect.",
    readingTime: "6 min",
    publishedDate: "November 2025",
    category: "Operations & Efficiency",
    topics: ["Automation & Workflow", "Productivity", "AI & Automation"],
    author: { name: "Ricoz Research", role: "Operations & Automation" },
    relatedProducts: ["rico-flow"],
    relatedSolutions: ["business-automation"],
    seo: {
      title: "Understanding Automation in Business | Ricoz Knowledge",
      description:
        "A plain-language reference to the different categories of business automation and what each is suited for.",
    },
  },
  {
    id: "faq-enterprise-cloud-migration",
    slug: "faq-enterprise-cloud-migration",
    type: "faq",
    title: "Frequently Asked Questions: Enterprise Cloud Migration",
    excerpt:
      "Answers to the most common questions organisations ask when planning or beginning a large-scale cloud migration — covering timelines, costs, risks, and the conditions for success.",
    readingTime: "8 min",
    publishedDate: "October 2025",
    category: "Implementation & Integration",
    topics: ["Technology Modernisation", "Integration", "Business Operations"],
    author: { name: "Ricoz Research", role: "Technology Delivery" },
    relatedServices: [
      "cloud-migration-services",
      "enterprise-systems-integration",
    ],
    relatedSolutions: ["technology-modernization"],
    seo: {
      title: "Enterprise Cloud Migration: Frequently Asked Questions | Ricoz",
      description:
        "Practical answers to the most common enterprise cloud migration questions, covering timelines, costs, risks, and success conditions.",
    },
  },
]

export const caseStudies: CaseStudy[] = [
  {
    id: "global-manufacturing-operations",
    slug: "global-manufacturing-operations",
    client: "Global Manufacturing Group",
    industry: "Manufacturing",
    title: "Transforming Operations Across 40 Facilities",
    challenge:
      "A global manufacturing group with operations across 40 facilities in 18 countries was managing critical operational processes through a combination of legacy ERP systems, disconnected data sources, and significant manual intervention. The organization lacked the visibility to manage operational performance consistently across its estate and was losing competitive ground to more data-driven competitors.",
    approach:
      "Ricoz delivered a phased transformation combining operational analytics, process automation, and integration infrastructure. We began with a diagnostic of operational data maturity and the most significant performance gaps, followed by deployment of RicozAnalytics for operational intelligence, RicozFlow for cross-facility process standardization, and RicozConnect to unify data flows across the ERP and operational technology landscape.",
    outcomes: [
      {
        metric: "34%",
        description:
          "Reduction in unplanned production downtime through predictive monitoring",
      },
      {
        metric: "18 days",
        description:
          "Reduction in average month-end close cycle through process automation",
      },
      {
        metric: "£12M",
        description:
          "Annual operational savings identified in the first 18 months",
      },
      {
        metric: "40/40",
        description:
          "Facilities operating from a single unified performance dashboard",
      },
    ],
    productsUsed: ["rico-analytics", "rico-flow", "rico-connect"],
    servicesUsed: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    solutionSlugs: ["business-automation", "data-intelligence"],
    seo: {
      title: "Global Manufacturing Group Case Study | Ricoz",
      description:
        "How Ricoz transformed operations across 40 facilities through analytics, automation, and integration.",
    },
  },
  {
    id: "atlantic-financial-data-modernization",
    slug: "atlantic-financial-data-modernization",
    client: "Atlantic Financial Services",
    industry: "Financial Services",
    title: "Modernizing Data Infrastructure at Scale",
    challenge:
      "A major financial services institution was operating a fragmented data landscape across eight business lines, with inconsistent data definitions, significant data quality issues, and a regulatory pressure to demonstrate data governance maturity. Decision-makers at every level lacked confidence in the data available to them.",
    approach:
      "Ricoz led a comprehensive data transformation engagement beginning with a detailed data strategy and governance framework, followed by deployment of RicozData for enterprise data governance and RicozAnalytics for executive and regulatory reporting. A phased migration of reporting onto the new governed data infrastructure was completed in partnership with the organization's internal technology team.",
    outcomes: [
      {
        metric: "Single",
        description:
          "Authoritative data catalogue covering all eight business lines",
      },
      {
        metric: "72%",
        description: "Reduction in regulatory reporting preparation time",
      },
      {
        metric: "98.7%",
        description:
          "Data quality score across critical regulatory datasets within 12 months",
      },
      {
        metric: "Board",
        description:
          "Data governance framework endorsed by the board and regulators",
      },
    ],
    productsUsed: ["rico-data", "rico-analytics"],
    servicesUsed: [
      "data-analytics-services",
      "digital-transformation-consulting",
    ],
    solutionSlugs: ["data-intelligence", "financial-management"],
    seo: {
      title: "Atlantic Financial Services Case Study | Ricoz",
      description:
        "How Ricoz helped a major financial institution modernize its data infrastructure and achieve regulatory data governance maturity.",
    },
  },
  {
    id: "healthnet-patient-experience",
    slug: "healthnet-patient-experience",
    client: "HealthNet Systems",
    industry: "Healthcare",
    title: "Rebuilding the Patient Experience Foundation",
    challenge:
      "A major healthcare network operating 22 care facilities was providing inconsistent patient experiences due to disconnected systems, fragmented patient records, and manual care coordination processes. Patient satisfaction scores were declining and staff were spending increasing time on administrative tasks rather than care.",
    approach:
      "Ricoz delivered an integrated patient experience transformation combining RicozServe for case and care coordination management, RicozConnect to integrate patient data across 22 facility systems, and RicozFlow to standardize care pathways and administrative processes. The engagement included comprehensive change management to ensure clinical and administrative adoption.",
    outcomes: [
      {
        metric: "41%",
        description:
          "Improvement in patient satisfaction scores within 12 months",
      },
      {
        metric: "2.8 hrs",
        description:
          "Reduction in average daily administrative time per clinical staff member",
      },
      {
        metric: "22/22",
        description:
          "Facilities integrated into a single patient coordination platform",
      },
      {
        metric: "23%",
        description: "Reduction in care coordination errors in the first year",
      },
    ],
    productsUsed: ["rico-serve", "rico-connect", "rico-flow"],
    servicesUsed: ["enterprise-systems-integration", "process-optimization"],
    solutionSlugs: ["customer-experience", "business-automation"],
    seo: {
      title: "HealthNet Systems Case Study | Ricoz",
      description:
        "How Ricoz transformed patient experience and care coordination across a 22-facility healthcare network.",
    },
  },
]

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug)
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

export function getResourcesByType(type: Resource["type"]): Resource[] {
  return resources.filter((r) => r.type === type)
}

export function getResourcesByTopic(topic: string): Resource[] {
  return resources.filter((r) => r.topics.includes(topic))
}

export function getFeaturedResource(): Resource {
  return resources.find((r) => r.featured) ?? resources[0]
}

export function getRelatedResources(resource: Resource, limit = 3): Resource[] {
  const candidates = resources.filter((r) => r.slug !== resource.slug)
  const scored = candidates.map((r) => {
    const sharedTopics = r.topics.filter((t) =>
      resource.topics.includes(t),
    ).length
    const sameType = r.type === resource.type ? 1 : 0
    const sameCategory = r.category === resource.category ? 1 : 0
    return { resource: r, score: sharedTopics * 2 + sameType + sameCategory }
  })
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.resource)
}
