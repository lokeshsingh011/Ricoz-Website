// ─── Solution data model ────────────────────────────────────────────────────

export interface Solution {
  id: string
  slug: string
  name: string
  category: SolutionCategory
  tagline: string
  description: string
  problem: string
  outcomes: string[]
  capabilities: string[]
  productSlugs: string[]
  serviceSlugs: string[]
  relatedSolutionSlugs: string[]
  keywords: string[]
  howItWorks: { step: string; title: string; description: string }[]
  seo: { title: string; description: string }
}

export type SolutionCategory = "Growth" | "Customer" | "Operations" | "People" | "Finance" | "Technology" | "Intelligence" | "Security"

export interface SolutionCategoryMeta {
  name: SolutionCategory
  tagline: string
  description: string
}

export const solutionCategoryMeta: SolutionCategoryMeta[] = [
  {
    name: "Growth",
    tagline: "Revenue, sales, marketing, and customer acquisition",
    description:
      "Connected capabilities for accelerating revenue, managing the sales pipeline, running effective marketing programmes, and building the customer relationships that drive long-term growth.",
  },
  {
    name: "Customer",
    tagline: "Customer support, engagement, and success",
    description:
      "Tools and practices for delivering consistent, personalised customer experiences across every interaction — from first contact through ongoing relationship management.",
  },
  {
    name: "Operations",
    tagline: "Processes, workflows, assets, and operational efficiency",
    description:
      "Capabilities for digitising, automating, and governing the operational processes that keep the business running — from contract management through supply chain and workflow automation.",
  },
  {
    name: "People",
    tagline: "HR, workforce management, and employee development",
    description:
      "Integrated people management across recruitment, onboarding, performance, learning, and workforce planning — supporting the employee lifecycle from hire to retire.",
  },
  {
    name: "Finance",
    tagline: "Accounting, billing, procurement, and financial governance",
    description:
      "Financial management capabilities covering accounting, invoicing, budgeting, expense management, procurement, and financial intelligence for governed, accurate financial operations.",
  },
  {
    name: "Technology",
    tagline: "IT management, developer platforms, and infrastructure",
    description:
      "Technology management capabilities for governing IT services, monitoring infrastructure, managing the device estate, and enabling development teams to build and operate reliably.",
  },
  {
    name: "Intelligence",
    tagline: "Analytics, data, AI, and business intelligence",
    description:
      "Data and AI capabilities for collecting, preparing, analysing, and acting on business data — from operational reporting through predictive intelligence and enterprise AI applications.",
  },
  {
    name: "Security",
    tagline: "Identity, access, data protection, and security operations",
    description:
      "Security capabilities for protecting identities, governing access, detecting threats, and demonstrating compliance across the enterprise technology estate.",
  },
]

// ─── Business need → solution mapping ────────────────────────────────────────

export type BusinessNeed = "increase-revenue" | "reduce-operating-costs" | "improve-customer-relationships" | "automate-repetitive-work" | "improve-employee-productivity" | "protect-business-systems" | "make-better-decisions" | "modernize-technology" | "build-digital-operation" | "explore-ai-opportunities"

export const businessNeeds: { id: BusinessNeed; label: string }[] = [
  { id: "increase-revenue", label: "Increase revenue" },
  { id: "reduce-operating-costs", label: "Reduce operating costs" },
  {
    id: "improve-customer-relationships",
    label: "Improve customer relationships",
  },
  { id: "automate-repetitive-work", label: "Automate repetitive work" },
  {
    id: "improve-employee-productivity",
    label: "Improve employee productivity",
  },
  { id: "protect-business-systems", label: "Protect business systems" },
  { id: "make-better-decisions", label: "Make better decisions" },
  { id: "modernize-technology", label: "Modernize technology" },
  { id: "build-digital-operation", label: "Build a digital operation" },
  { id: "explore-ai-opportunities", label: "Explore AI opportunities" },
]

export const businessNeedReasonMap: Record<BusinessNeed, Record<string, string>> =
  {
    "increase-revenue": {
      "revenue-growth":
        "Directly addresses pipeline management, sales acceleration, and marketing-driven acquisition to grow top-line revenue.",
      "customer-experience":
        "Improved customer experience drives retention and expansion revenue from existing accounts.",
    },
    "reduce-operating-costs": {
      "business-automation":
        "Automating manual, repetitive processes directly reduces the labour cost of high-volume operations.",
      "financial-management":
        "Better visibility into spend, procurement, and financial operations surfaces cost reduction opportunities.",
    },
    "improve-customer-relationships": {
      "customer-experience":
        "Centralises customer interactions, support, and success management to deliver more consistent and personalised experiences.",
      "revenue-growth":
        "CRM and pipeline management capabilities strengthen account relationships through structured engagement.",
    },
    "automate-repetitive-work": {
      "business-automation":
        "Core automation capabilities — workflow, RPA, approval, and integration — address the full range of repetitive business processes.",
      "technology-modernization":
        "Modernising technology infrastructure creates the foundation for more comprehensive automation across the business.",
    },
    "improve-employee-productivity": {
      "people-operations":
        "Streamlined HR and workforce management frees employees from administrative burden and enables better performance support.",
      "business-automation":
        "Automating routine tasks across departments returns productive capacity to employees for higher-value work.",
    },
    "protect-business-systems": {
      cybersecurity:
        "Directly addresses identity, access, threat detection, and security operations to protect systems and data.",
      "technology-modernization":
        "Governing and modernising the technology estate removes the legacy vulnerabilities that create security risk.",
    },
    "make-better-decisions": {
      "data-intelligence":
        "Analytics, metrics governance, and AI decision support tools are designed to improve the quality and speed of business decisions.",
      "financial-management":
        "Real-time financial intelligence and forecasting capabilities support more informed investment and operational decisions.",
    },
    "modernize-technology": {
      "technology-modernization":
        "The technology modernisation solution covers IT management, developer platforms, infrastructure, and integration governance.",
      "business-automation":
        "Automation and workflow capabilities modernise operational processes alongside the technology stack.",
    },
    "build-digital-operation": {
      "business-automation":
        "Process automation, workflow, and integration capabilities are the foundation of a fully digital operating model.",
      "technology-modernization":
        "Modern developer platforms, API management, and integration infrastructure enable digital operations at scale.",
    },
    "explore-ai-opportunities": {
      "data-intelligence":
        "Data preparation, analytics, and AI platforms provide the foundations and capabilities for deploying AI across the business.",
      "business-automation":
        "AI agents and intelligent automation extend traditional workflow automation with reasoning and unstructured task handling.",
    },
  }

export const businessNeedToSolutions: Record<BusinessNeed, string[]> = {
  "increase-revenue": ["revenue-growth", "customer-experience"],
  "reduce-operating-costs": ["business-automation", "financial-management"],
  "improve-customer-relationships": ["customer-experience", "revenue-growth"],
  "automate-repetitive-work": [
    "business-automation",
    "technology-modernization",
  ],
  "improve-employee-productivity": ["people-operations", "business-automation"],
  "protect-business-systems": ["cybersecurity", "technology-modernization"],
  "make-better-decisions": ["data-intelligence", "financial-management"],
  "modernize-technology": ["technology-modernization", "business-automation"],
  "build-digital-operation": [
    "business-automation",
    "technology-modernization",
  ],
  "explore-ai-opportunities": ["data-intelligence", "business-automation"],
}

// ─── Solution records ────────────────────────────────────────────────────────

export const solutions: Solution[] = [
  {
    id: "revenue-growth",
    slug: "revenue-growth",
    name: "Revenue Growth",
    category: "Growth",
    tagline:
      "Grow the pipeline, accelerate sales, and retain the customers that matter most.",
    description:
      "A connected set of Ricoz capabilities for sales, marketing, and customer revenue management that work together to build a reliable, scalable revenue engine — from first prospect to long-term account expansion.",
    problem:
      "Most organisations have functional sales and marketing tools that operate in silos. Without connected data and unified processes, pipeline visibility is unreliable, marketing attribution is unclear, and revenue forecasting is guesswork rather than a governed discipline.",
    outcomes: [
      "More accurate revenue forecasting and pipeline visibility",
      "Shorter sales cycles through better-qualified prospects and structured deal management",
      "Higher customer retention through proactive account management",
      "Improved marketing ROI through campaign attribution and audience intelligence",
      "Connected revenue data from lead through invoice",
    ],
    capabilities: [
      "CRM and pipeline management",
      "Lead generation and qualification",
      "Quote and proposal management",
      "Marketing campaign orchestration",
      "Revenue analytics and forecasting",
      "Customer journey management",
    ],
    productSlugs: [
      "rico-crm",
      "rico-leads",
      "rico-pipeline",
      "rico-quote",
      "rico-revenue",
      "rico-forecast",
      "rico-campaign",
      "rico-email",
      "rico-convert",
      "rico-audience",
      "rico-journey",
    ],
    serviceSlugs: [
      "digital-transformation-consulting",
      "technology-strategy-roadmap",
    ],
    relatedSolutionSlugs: ["customer-experience", "data-intelligence"],
    keywords: [
      "revenue",
      "sales",
      "CRM",
      "pipeline",
      "marketing",
      "growth",
      "leads",
      "forecast",
    ],
    howItWorks: [
      {
        step: "01",
        title: "Build the pipeline",
        description:
          "Capture leads from every channel and qualify them through a structured CRM pipeline with clear stages, scores, and owner accountability.",
      },
      {
        step: "02",
        title: "Engage and convert",
        description:
          "Run targeted marketing campaigns and personalised outreach that moves prospects through the funnel with the right message at the right moment.",
      },
      {
        step: "03",
        title: "Close with confidence",
        description:
          "Manage deals with structured proposal workflows, quote management, and deal governance that accelerates close and protects margin.",
      },
      {
        step: "04",
        title: "Expand and retain",
        description:
          "Use revenue analytics and account management tools to identify expansion opportunities and protect the value of existing customer relationships.",
      },
      {
        step: "05",
        title: "Measure and forecast",
        description:
          "Connect CRM, marketing, and revenue data for accurate forecasting, campaign attribution, and the intelligence to double down on what works.",
      },
    ],
    seo: {
      title:
        "Revenue Growth Solution — Connected Sales, Marketing & CRM | Ricoz",
      description:
        "The Ricoz Revenue Growth solution connects CRM, pipeline management, marketing, and analytics to build a reliable, scalable revenue engine for enterprise organisations.",
    },
  },
  {
    id: "customer-experience",
    slug: "customer-experience",
    name: "Customer Experience",
    category: "Customer",
    tagline:
      "Deliver consistent, proactive, and personalised experiences at every customer touchpoint.",
    description:
      "A connected approach to customer support, engagement, feedback, and success management that transforms reactive service into a proactive customer experience capability — reducing churn and building the loyalty that drives long-term revenue.",
    problem:
      "Customer expectations are rising while the operational complexity of serving them across channels, teams, and touchpoints makes consistency difficult. Organisations often have customer data spread across tools, support teams operating from different systems, and no single view of the customer relationship.",
    outcomes: [
      "Faster first response and resolution times across support channels",
      "Higher customer satisfaction and NPS through consistent, contextual service",
      "Reduced churn through proactive customer success interventions",
      "Unified customer profile visible across service, sales, and success teams",
      "Actionable feedback loops informing product and service improvement",
    ],
    capabilities: [
      "Multi-channel customer support and ticketing",
      "Customer success and health monitoring",
      "Self-service knowledge and portals",
      "Customer feedback and survey management",
      "Customer journey orchestration",
      "Customer engagement and live chat",
    ],
    productSlugs: [
      "rico-desk",
      "rico-chat",
      "rico-know",
      "rico-feedback",
      "rico-portal",
      "rico-success",
      "rico-engage",
      "rico-journey",
    ],
    serviceSlugs: ["digital-transformation-consulting", "process-optimization"],
    relatedSolutionSlugs: ["revenue-growth", "data-intelligence"],
    keywords: [
      "customer experience",
      "CX",
      "customer support",
      "helpdesk",
      "customer success",
      "NPS",
      "feedback",
    ],
    howItWorks: [
      {
        step: "01",
        title: "Unify the customer view",
        description:
          "Bring all customer interaction history, account data, and support activity into a unified profile accessible to every team that touches the customer.",
      },
      {
        step: "02",
        title: "Resolve faster",
        description:
          "Handle support requests from every channel in a single platform with intelligent routing, knowledge integration, and SLA management.",
      },
      {
        step: "03",
        title: "Enable self-service",
        description:
          "Give customers the knowledge and portal access to resolve common questions themselves, reducing contact volume and improving satisfaction.",
      },
      {
        step: "04",
        title: "Listen and learn",
        description:
          "Capture structured feedback at key journey moments to identify satisfaction trends, experience gaps, and improvement priorities.",
      },
    ],
    seo: {
      title:
        "Customer Experience Solution — Support, Success & Engagement | Ricoz",
      description:
        "The Ricoz Customer Experience solution connects support, success, knowledge, and feedback capabilities to deliver consistent, proactive customer experiences.",
    },
  },
  {
    id: "business-automation",
    slug: "business-automation",
    name: "Business Automation",
    category: "Operations",
    tagline:
      "Automate the processes that slow the business — and govern the automation estate that grows from it.",
    description:
      "A layered automation capability that covers workflow automation, business process automation, robotic process automation, AI agents, and integration orchestration — enabling organisations to move from manual, paper-based operations to a governed, automated operating model.",
    problem:
      "Organisations accumulate manual processes, email-driven approvals, and disconnected systems that create cost, error, and delay. As automation grows, a new problem emerges: ungoverned automation estates that are fragile, opaque, and costly to maintain.",
    outcomes: [
      "Significant reduction in manual processing time for high-volume operations",
      "Consistent, error-free execution of rule-based business processes",
      "Faster approval cycles through automated routing and escalation",
      "Connected systems that share data reliably without manual re-entry",
      "A governed automation estate with full visibility and change control",
    ],
    capabilities: [
      "Business process and workflow automation",
      "Robotic process automation for desktop operations",
      "Approval workflow governance",
      "Integration and event-driven orchestration",
      "Business rules engine",
      "AI agent automation",
      "Automation governance and monitoring",
    ],
    productSlugs: [
      "rico-flow",
      "rico-automate",
      "rico-approve",
      "rico-robot",
      "rico-relay",
      "rico-rules",
      "rico-trigger",
      "rico-govern",
      "rico-agent",
    ],
    serviceSlugs: ["digital-transformation-consulting", "process-optimization"],
    relatedSolutionSlugs: ["technology-modernization", "data-intelligence"],
    keywords: [
      "automation",
      "workflow",
      "RPA",
      "process automation",
      "BPM",
      "integration",
      "approval",
    ],
    howItWorks: [
      {
        step: "01",
        title: "Map the process landscape",
        description:
          "Identify high-volume, rule-based processes with clear automation value through process discovery and prioritisation.",
      },
      {
        step: "02",
        title: "Automate foundational workflows",
        description:
          "Deploy workflow and approval automation for the structured, multi-step processes that drive most manual effort.",
      },
      {
        step: "03",
        title: "Extend with RPA and AI agents",
        description:
          "Apply robotic process automation to UI-based tasks and AI agents to the unstructured, variable work that rules-based automation cannot handle.",
      },
      {
        step: "04",
        title: "Connect the systems",
        description:
          "Replace point-to-point integrations and manual data transfers with governed integration and event-driven orchestration.",
      },
      {
        step: "05",
        title: "Govern the automation estate",
        description:
          "Monitor, audit, and change-govern every automated process to maintain accuracy, compliance, and resilience as the estate grows.",
      },
    ],
    seo: {
      title:
        "Business Automation Solution — Workflow, RPA & Process Automation | Ricoz",
      description:
        "The Ricoz Business Automation solution covers workflow, RPA, AI agents, integration, and governance for enterprise-scale process automation.",
    },
  },
  {
    id: "people-operations",
    slug: "people-operations",
    name: "People & Workforce Management",
    category: "People",
    tagline:
      "Manage the full employee lifecycle with the structure, data, and engagement that great workforces need.",
    description:
      "A connected workforce management capability covering the full employee lifecycle — from recruitment and onboarding through performance, learning, and workforce planning — giving HR teams and business leaders the tools to attract, develop, and retain the people who drive the organisation.",
    problem:
      "People management is often fragmented across HR systems, spreadsheets, and manual processes. Without connected data, HR teams struggle to provide strategic insight, managers lack the tools to support their teams, and employees experience inconsistent, administrative-heavy interactions with the people function.",
    outcomes: [
      "Faster time-to-productivity for new employees through structured onboarding",
      "Higher employee retention through better performance management and development",
      "Reduced HR administrative overhead through automated workforce processes",
      "Accurate workforce planning through connected people data",
      "Improved employee experience across every HR touchpoint",
    ],
    capabilities: [
      "Core HR and employee records management",
      "Recruitment and applicant tracking",
      "Employee onboarding and induction",
      "Performance management and reviews",
      "Learning and development management",
      "Workforce planning and analytics",
    ],
    productSlugs: [
      "rico-hr",
      "rico-recruit",
      "rico-onboard",
      "rico-perform",
      "rico-learn",
      "rico-people",
      "rico-attend",
    ],
    serviceSlugs: ["digital-transformation-consulting", "process-optimization"],
    relatedSolutionSlugs: ["business-automation", "data-intelligence"],
    keywords: [
      "HR",
      "human resources",
      "workforce",
      "people management",
      "recruitment",
      "onboarding",
      "performance",
      "learning",
    ],
    howItWorks: [
      {
        step: "01",
        title: "Attract the right people",
        description:
          "Run structured recruitment processes with applicant tracking, candidate communication, and hiring workflows that move fast without losing quality.",
      },
      {
        step: "02",
        title: "Onboard effectively",
        description:
          "Automate onboarding workflows so new employees have the accounts, training, and information they need from day one.",
      },
      {
        step: "03",
        title: "Manage and develop",
        description:
          "Run regular, structured performance conversations and deliver targeted learning that builds the capabilities the organisation needs.",
      },
      {
        step: "04",
        title: "Plan the workforce",
        description:
          "Use connected people data for workforce analytics, attendance management, and the forward planning that keeps capacity matched to demand.",
      },
    ],
    seo: {
      title:
        "People & Workforce Management Solution — HR, Recruitment & Development | Ricoz",
      description:
        "The Ricoz People & Workforce Management solution covers the full employee lifecycle from recruitment through performance, learning, and workforce planning.",
    },
  },
  {
    id: "financial-management",
    slug: "financial-management",
    name: "Financial Management",
    category: "Finance",
    tagline:
      "Govern financial operations with precision — from accounting and billing through procurement and financial intelligence.",
    description:
      "A connected financial management capability that covers the full financial operations lifecycle — accounts, invoicing, budgeting, expenses, procurement, and financial intelligence — giving finance teams the governed, accurate environment to close faster, control spend, and drive financial decision-making.",
    problem:
      "Finance teams often operate across disconnected tools for accounting, billing, expenses, and procurement. Manual reconciliation, data re-entry, and spreadsheet-based reporting create errors, delays, and a reporting environment that trails operational reality rather than leading it.",
    outcomes: [
      "Faster month-end close through automated reconciliation and accurate data",
      "Improved cash flow through timely invoicing and collections management",
      "Better spend control through governed procurement and expense management",
      "Reliable budget tracking with real-time variance visibility",
      "Faster financial decision-making through connected financial intelligence",
    ],
    capabilities: [
      "Accounts and general ledger management",
      "Invoice and billing management",
      "Budget planning and monitoring",
      "Expense and travel management",
      "Procurement and purchase management",
      "Financial analytics and reporting",
    ],
    productSlugs: [
      "rico-books",
      "rico-invoice",
      "rico-expense",
      "rico-budget",
      "rico-billing",
      "rico-procure",
      "rico-spend",
      "rico-financials",
    ],
    serviceSlugs: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    relatedSolutionSlugs: ["business-automation", "data-intelligence"],
    keywords: [
      "finance",
      "accounting",
      "invoicing",
      "budgeting",
      "procurement",
      "expense",
      "financial management",
    ],
    howItWorks: [
      {
        step: "01",
        title: "Govern the accounts",
        description:
          "Maintain accurate general ledger and financial records with automated journal entries, bank reconciliation, and period-close management.",
      },
      {
        step: "02",
        title: "Invoice and collect",
        description:
          "Generate accurate invoices, track receivables, and manage collections to maintain healthy cash flow across the business.",
      },
      {
        step: "03",
        title: "Control spend",
        description:
          "Apply procurement governance, expense approval workflows, and real-time budget tracking to prevent unauthorised spend.",
      },
      {
        step: "04",
        title: "Analyse and forecast",
        description:
          "Connect financial data for management reporting, board-level dashboards, and financial forecasting that reflects the current state of the business.",
      },
    ],
    seo: {
      title:
        "Financial Management Solution — Accounting, Billing & Procurement | Ricoz",
      description:
        "The Ricoz Financial Management solution connects accounting, invoicing, budgeting, expense management, and financial intelligence for enterprise finance operations.",
    },
  },
  {
    id: "data-intelligence",
    slug: "data-intelligence",
    name: "Data & Business Intelligence",
    category: "Intelligence",
    tagline:
      "Transform organisational data into the analytics, metrics, and AI-driven insights that improve every decision.",
    description:
      "A connected data and intelligence capability spanning ingestion, preparation, governance, analytics, visualisation, forecasting, and AI — building the data foundation and analytical capability that organisations need to understand what is happening, predict what is coming, and act with confidence.",
    problem:
      "Data exists across every system in the organisation but is rarely prepared, connected, or governed well enough to be genuinely useful. Reports are inconsistent, metrics are disputed, forecasts are unreliable, and the AI potential of organisational data remains untapped.",
    outcomes: [
      "Consistent, governed business metrics that every team trusts",
      "Faster, more accurate reporting through automated data pipelines",
      "Better decisions through analytical insight at the point of action",
      "Reliable forecasting that improves planning accuracy",
      "AI capabilities grounded in high-quality, governed enterprise data",
    ],
    capabilities: [
      "Data ingestion and pipeline management",
      "Data preparation and quality management",
      "Business intelligence and reporting",
      "Data visualisation and exploration",
      "KPI and metrics governance",
      "Predictive analytics and forecasting",
      "Enterprise knowledge intelligence",
      "AI decision support",
    ],
    productSlugs: [
      "rico-data",
      "rico-analytics",
      "rico-ingest",
      "rico-prep",
      "rico-catalog",
      "rico-lake",
      "rico-viz",
      "rico-report",
      "rico-metrics",
      "rico-predict",
      "rico-intel",
      "rico-knowai",
      "rico-decide",
    ],
    serviceSlugs: [
      "data-analytics-services",
      "digital-transformation-consulting",
    ],
    relatedSolutionSlugs: ["business-automation", "technology-modernization"],
    keywords: [
      "data",
      "analytics",
      "business intelligence",
      "BI",
      "reporting",
      "forecasting",
      "AI",
      "machine learning",
    ],
    howItWorks: [
      {
        step: "01",
        title: "Collect and connect",
        description:
          "Build governed data pipelines that collect, ingest, and deliver data from every source system into a reliable analytical foundation.",
      },
      {
        step: "02",
        title: "Prepare and govern",
        description:
          "Profile, cleanse, and document data before it enters reporting environments to eliminate the quality issues that undermine analytical trust.",
      },
      {
        step: "03",
        title: "Define and measure",
        description:
          "Establish a governed metrics layer where every KPI is defined consistently and calculated correctly for every consumer.",
      },
      {
        step: "04",
        title: "Visualise and report",
        description:
          "Deliver interactive dashboards, self-service reporting, and scheduled management information that puts insight in the hands of decision-makers.",
      },
      {
        step: "05",
        title: "Predict and recommend",
        description:
          "Apply statistical forecasting and AI decision support to move from historical reporting to forward-looking intelligence.",
      },
    ],
    seo: {
      title:
        "Data & Business Intelligence Solution — Analytics, AI & Insights | Ricoz",
      description:
        "The Ricoz Data & Business Intelligence solution spans data ingestion, preparation, analytics, visualisation, metrics governance, and AI-driven insight.",
    },
  },
  {
    id: "technology-modernization",
    slug: "technology-modernization",
    name: "Technology Modernisation",
    category: "Technology",
    tagline:
      "Govern, monitor, and evolve the technology estate to support the pace and scale of modern business.",
    description:
      "A connected technology management capability covering IT service management, infrastructure monitoring, device management, application performance, developer platforms, and release governance — giving IT and engineering teams the tools to operate reliably, deliver efficiently, and modernise continuously.",
    problem:
      "Technology estates grow organically, creating fragmented monitoring, inconsistent governance, and a gap between the tools IT needs and what development teams expect. Legacy processes slow delivery, unmeasured infrastructure creates risk, and the absence of unified visibility makes confident IT leadership impossible.",
    outcomes: [
      "Faster incident resolution through better monitoring and structured ITSM",
      "Improved deployment frequency and reliability through CI/CD governance",
      "Reduced change-related incidents through structured change management",
      "Better resource utilisation through infrastructure capacity management",
      "Developer productivity improvements through modern tooling and platforms",
    ],
    capabilities: [
      "IT service management and ITSM",
      "Infrastructure monitoring and alerting",
      "Application performance monitoring",
      "Endpoint and device management",
      "CI/CD pipeline and release governance",
      "API management and developer platforms",
      "Platform observability",
    ],
    productSlugs: [
      "rico-itsm",
      "rico-change",
      "rico-infra",
      "rico-appmon",
      "rico-techops",
      "rico-endpoint",
      "rico-deploy",
      "rico-gateway",
      "rico-observe",
      "rico-build",
      "rico-sdk",
    ],
    serviceSlugs: [
      "technology-strategy-roadmap",
      "enterprise-systems-integration",
      "cloud-migration-services",
    ],
    relatedSolutionSlugs: ["business-automation", "cybersecurity"],
    keywords: [
      "IT management",
      "ITSM",
      "infrastructure",
      "monitoring",
      "DevOps",
      "cloud",
      "modernization",
      "developer platform",
    ],
    howItWorks: [
      {
        step: "01",
        title: "Govern IT services",
        description:
          "Implement structured ITSM practices for incident, change, and problem management that reduce downtime and build business confidence in IT.",
      },
      {
        step: "02",
        title: "Monitor everything",
        description:
          "Deploy unified infrastructure and application monitoring that gives operations teams real-time visibility before problems become incidents.",
      },
      {
        step: "03",
        title: "Manage the device estate",
        description:
          "Provision, govern, and maintain the endpoint fleet with automated deployment, compliance monitoring, and remote management capability.",
      },
      {
        step: "04",
        title: "Accelerate delivery",
        description:
          "Enable development teams with governed CI/CD pipelines, API management, and developer tooling that increases deployment frequency safely.",
      },
    ],
    seo: {
      title:
        "Technology Modernisation Solution — IT Management & Developer Platforms | Ricoz",
      description:
        "The Ricoz Technology Modernisation solution connects IT service management, monitoring, endpoint management, and developer platforms for enterprise IT teams.",
    },
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    name: "Cybersecurity & Identity",
    category: "Security",
    tagline:
      "Protect identities, data, and systems with connected security capabilities that govern risk across the enterprise.",
    description:
      "A connected enterprise security capability spanning identity governance, privileged access management, threat detection, vulnerability intelligence, data protection, and incident response — providing the layered security posture that modern enterprise environments require.",
    problem:
      "Enterprise security risk is rarely addressed by a single product. Effective security requires coordinated identity governance, threat intelligence, active monitoring, data protection, and practiced incident response. When these work in silos, gaps appear — and gaps are what adversaries exploit.",
    outcomes: [
      "Reduced attack surface through enforced least-privilege access",
      "Faster threat detection and confirmed incident response times",
      "Improved compliance posture through structured security control management",
      "Sensitive data protection across endpoints, cloud, and collaboration tools",
      "A practised, playbook-driven incident response capability",
    ],
    capabilities: [
      "Identity and access management",
      "Privileged access and secrets governance",
      "Threat intelligence and vulnerability management",
      "Security event detection and SIEM",
      "Data protection and loss prevention",
      "Security compliance management",
      "Incident response management",
    ],
    productSlugs: [
      "rico-shield",
      "rico-identity",
      "rico-access",
      "rico-siem",
      "rico-threat",
      "rico-protect",
      "rico-comply",
      "rico-respond",
      "rico-vault",
    ],
    serviceSlugs: [
      "cybersecurity-advisory",
      "digital-transformation-consulting",
    ],
    relatedSolutionSlugs: ["technology-modernization", "data-intelligence"],
    keywords: [
      "cybersecurity",
      "security",
      "identity",
      "IAM",
      "SIEM",
      "threat detection",
      "compliance",
      "data protection",
    ],
    howItWorks: [
      {
        step: "01",
        title: "Govern identities and access",
        description:
          "Implement identity lifecycle management, SSO, MFA, and role-based access controls to enforce least-privilege across every application.",
      },
      {
        step: "02",
        title: "Protect privileged accounts",
        description:
          "Vault and govern privileged credentials with just-in-time access, session recording, and secrets management to eliminate standing elevated access.",
      },
      {
        step: "03",
        title: "Detect and investigate threats",
        description:
          "Correlate security events from across the estate in a unified SIEM environment, enriched with current threat intelligence for faster, more accurate detection.",
      },
      {
        step: "04",
        title: "Protect the data",
        description:
          "Classify sensitive data and enforce protection policies that prevent exfiltration across channels, meeting regulatory data protection requirements.",
      },
      {
        step: "05",
        title: "Respond and recover",
        description:
          "Manage security incidents through structured playbooks with evidence governance, team coordination, and post-incident review to drive continuous improvement.",
      },
    ],
    seo: {
      title:
        "Cybersecurity & Identity Solution — Threat Detection, IAM & Compliance | Ricoz",
      description:
        "The Ricoz Cybersecurity & Identity solution connects IAM, PAM, SIEM, threat intelligence, data protection, and incident response for enterprise security.",
    },
  },
]

// ─── Utilities ───────────────────────────────────────────────────────────────

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug)
}

export function getSolutionsByCategory(category: SolutionCategory): Solution[] {
  return solutions.filter((s) => s.category === category)
}

export function getSolutionsForNeed(need: BusinessNeed): Solution[] {
  const slugs = businessNeedToSolutions[need] ?? []
  return slugs
    .map((slug) => solutions.find((s) => s.slug === slug))
    .filter(Boolean) as Solution[]
}
