export interface Product {
  id: string
  slug: string
  name: string
  category: string
  tagline: string
  shortDescription: string
  heroStatement: string
  overview: string
  capabilities: string[]
  benefits: { title: string; description: string }[]
  features: { name: string; description: string }[]
  useCases: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
  relatedProducts: string[]
  relatedServices: string[]
  relatedResources?: string[]
  status?: "active" | "coming-soon" | "archived"
  featured?: boolean
  seo: { title: string; description: string }
}

export interface ProductCategoryData {
  id: string
  name: string
  slug: string
  shortDescription: string
  description: string
  seoTitle: string
  seoDescription: string
}

export const productCategoryData: ProductCategoryData[] = [
  {
    id: "sales-crm",
    name: "Sales & CRM",
    slug: "sales-crm",
    shortDescription:
      "Customer relationships, pipeline, and revenue intelligence",
    description:
      "A complete suite of sales and CRM capabilities covering contact management, pipeline visibility, forecasting, prospecting, and revenue operations — built for sales organisations that operate at enterprise scale.",
    seoTitle: "Sales & CRM Products — Ricoz Enterprise Sales Platform",
    seoDescription:
      "Explore Ricoz Sales and CRM products. Build deeper customer relationships, manage complex pipelines, and drive consistent revenue outcomes.",
  },
  {
    id: "marketing-growth",
    name: "Marketing & Growth",
    slug: "marketing-growth",
    shortDescription:
      "Campaign management, automation, and audience intelligence",
    description:
      "Marketing and growth capabilities spanning campaign management, email marketing, audience management, content publishing, social media, and conversion optimisation — for marketing teams managing complex multi-channel programmes at scale.",
    seoTitle: "Marketing & Growth Products — Ricoz Marketing Platform",
    seoDescription:
      "Explore Ricoz Marketing and Growth products. Manage campaigns, automate customer journeys, and optimise conversion across every channel.",
  },
  {
    id: "customer-experience",
    name: "Customer Experience",
    slug: "customer-experience",
    shortDescription: "Support, knowledge, and customer success management",
    description:
      "Customer experience capabilities covering helpdesk operations, live engagement, knowledge management, feedback collection, customer portals, and success management — for organisations committed to delivering consistent, high-quality service at scale.",
    seoTitle: "Customer Experience Products — Ricoz CX Platform",
    seoDescription:
      "Explore Ricoz Customer Experience products. Manage support operations, build customer knowledge, and drive long-term customer success.",
  },
  {
    id: "finance-accounting",
    name: "Finance & Accounting",
    slug: "finance-accounting",
    shortDescription: "Accounting, invoicing, expense, and financial reporting",
    description:
      "Finance and accounting capabilities covering core accounting, invoicing, expense management, procurement, budget planning, subscription billing, and financial reporting — built for finance teams managing complexity and compliance at enterprise scale.",
    seoTitle: "Finance & Accounting Products — Ricoz Finance Platform",
    seoDescription:
      "Explore Ricoz Finance and Accounting products. Manage accounting, invoicing, expenses, and financial reporting for complex enterprises.",
  },
  {
    id: "people-hr",
    name: "People & HR",
    slug: "people-hr",
    shortDescription: "HR, recruitment, workforce, and employee management",
    description:
      "People and HR capabilities spanning core HR management, recruitment and applicant tracking, time and attendance, performance management, learning and development, payroll, workforce scheduling, and employee engagement — for organisations managing complex workforces.",
    seoTitle: "People & HR Products — Ricoz HR Platform",
    seoDescription:
      "Explore Ricoz People and HR products. Manage employees, recruitment, performance, learning, and workforce operations at enterprise scale.",
  },
  {
    id: "operations-management",
    name: "Operations & Business Management",
    slug: "operations-management",
    shortDescription:
      "Operations, assets, vendors, and business administration",
    description:
      "Operations and business management capabilities covering inventory management, asset management, vendor management, process documentation, compliance workflows, and document management — for teams running complex operational environments.",
    seoTitle: "Operations & Business Management Products — Ricoz",
    seoDescription:
      "Explore Ricoz Operations and Business Management products. Manage assets, vendors, processes, and operational compliance at scale.",
  },
  {
    id: "project-work-management",
    name: "Project & Work Management",
    slug: "project-work-management",
    shortDescription:
      "Project delivery, task management, and portfolio oversight",
    description:
      "Project and work management capabilities covering project management, agile delivery, task management, issue tracking, time tracking, resource planning, and portfolio oversight — for organisations delivering complex programmes and coordinating distributed teams.",
    seoTitle: "Project & Work Management Products — Ricoz",
    seoDescription:
      "Explore Ricoz Project and Work Management products. Manage projects, track work, plan resources, and maintain portfolio visibility.",
  },
  {
    id: "communication-collaboration",
    name: "Communication & Collaboration",
    slug: "communication-collaboration",
    shortDescription: "Messaging, meetings, files, and team workspaces",
    description:
      "Communication and collaboration capabilities spanning business email, team messaging, video meetings, calendar management, file management, document collaboration, team workspaces, and internal communications — for organisations where coordinated teamwork drives outcomes.",
    seoTitle: "Communication & Collaboration Products — Ricoz",
    seoDescription:
      "Explore Ricoz Communication and Collaboration products. Connect teams, manage files, run meetings, and build shared workspaces.",
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    slug: "data-analytics",
    shortDescription: "Business intelligence, analytics, and data governance",
    description:
      "Data and analytics capabilities covering business intelligence, data visualisation, dashboard building, operational insights, data preparation, data governance, and performance metrics — for organisations that need to turn data into reliable, actionable intelligence.",
    seoTitle: "Data & Analytics Products — Ricoz Data Platform",
    seoDescription:
      "Explore Ricoz Data and Analytics products. Build business intelligence, visualise data, and govern your organisation's information assets.",
  },
  {
    id: "it-management",
    name: "IT Management",
    slug: "it-management",
    shortDescription:
      "IT service management, monitoring, and digital operations",
    description:
      "IT management capabilities covering IT service management, device management, infrastructure monitoring, system administration, alerting, IT request management, application monitoring, and change management — for IT teams supporting complex enterprise environments.",
    seoTitle: "IT Management Products — Ricoz IT Operations Platform",
    seoDescription:
      "Explore Ricoz IT Management products. Manage IT services, monitor infrastructure, track devices, and run efficient IT operations.",
  },
  {
    id: "security-identity",
    name: "Security & Identity",
    slug: "security-identity",
    shortDescription: "Cybersecurity, identity, and access management",
    description:
      "Security and identity capabilities spanning cybersecurity monitoring, document security, identity management, access control, endpoint protection, multi-factor authentication, and security policy management — for organisations that cannot compromise on security.",
    seoTitle: "Security & Identity Products — Ricoz Security Platform",
    seoDescription:
      "Explore Ricoz Security and Identity products. Protect your organisation with comprehensive cybersecurity, identity, and access management.",
  },
  {
    id: "automation-workflow",
    name: "Automation & Workflow",
    slug: "automation-workflow",
    shortDescription: "Process automation, workflow orchestration, and RPA",
    description:
      "Automation and workflow capabilities covering business process automation, robotic process automation, business rules management, event-driven triggers, cross-system orchestration, and no-code workflow building — for organisations eliminating manual overhead at scale.",
    seoTitle: "Automation & Workflow Products — Ricoz Automation Platform",
    seoDescription:
      "Explore Ricoz Automation and Workflow products. Automate business processes, orchestrate workflows, and scale your operations intelligently.",
  },
  {
    id: "developer-platforms",
    name: "Developer & Application Platforms",
    slug: "developer-platforms",
    shortDescription:
      "Low-code development, APIs, and integration infrastructure",
    description:
      "Developer and application platform capabilities covering low-code application development, API management, developer tooling, CI/CD pipelines, test automation, system integration, and SDK frameworks — for organisations building and connecting enterprise applications.",
    seoTitle: "Developer & Application Platforms — Ricoz Developer Suite",
    seoDescription:
      "Explore Ricoz Developer and Application Platform products. Build applications, manage APIs, automate deployments, and integrate systems.",
  },
  {
    id: "commerce-digital",
    name: "Commerce & Digital Business",
    slug: "commerce-digital",
    shortDescription:
      "Ecommerce, order management, and digital commerce operations",
    description:
      "Commerce and digital business capabilities covering ecommerce platforms, order management, product catalogue management, subscription billing, merchant operations, point of sale, and marketplace management — for organisations running digital commerce at scale.",
    seoTitle: "Commerce & Digital Business Products — Ricoz Commerce Platform",
    seoDescription:
      "Explore Ricoz Commerce and Digital Business products. Manage online stores, orders, subscriptions, and multi-channel commerce operations.",
  },
  {
    id: "ai-intelligence",
    name: "AI & Intelligence",
    slug: "ai-intelligence",
    shortDescription:
      "AI-powered assistants, insights, and intelligent automation",
    description:
      "AI and intelligence capabilities spanning AI-powered assistants, predictive analytics, content classification, intelligent document processing, AI-driven search and discovery, decision support, and conversational interfaces — for organisations integrating applied intelligence into their operations.",
    seoTitle: "AI & Intelligence Products — Ricoz AI Platform",
    seoDescription:
      "Explore Ricoz AI and Intelligence products. Apply AI to decisions, content, search, documents, and operational intelligence.",
  },
  {
    id: "industry-solutions",
    name: "Industry & Specialized Solutions",
    slug: "industry-solutions",
    shortDescription: "Purpose-built capabilities for specific industries",
    description:
      "Industry and specialised solution capabilities covering field service management, healthcare operations, education management, logistics, hospitality, real estate, and retail operations — for organisations with industry-specific requirements that general platforms cannot fully address.",
    seoTitle: "Industry & Specialized Solutions — Ricoz",
    seoDescription:
      "Explore Ricoz Industry and Specialized Solutions. Purpose-built capabilities for field service, healthcare, education, logistics, and more.",
  },
]

export const productCategories: string[] = productCategoryData.map(
  (c) => c.name,
)

export const products: Product[] = [
  {
    id: "rico-analytics",
    slug: "rico-analytics",
    name: "RicozAnalytics",
    category: "Data & Analytics",
    status: "active",
    featured: true,
    tagline: "Business intelligence for complex organizations",
    shortDescription:
      "Enterprise-grade analytics platform delivering real-time insight across your entire operation.",
    heroStatement:
      "Turn data into decisions — at every level of your organization.",
    overview:
      "RicozAnalytics is a comprehensive business intelligence and analytics platform designed for organizations operating at scale. It unifies data from across your enterprise, surfacing patterns, trends, and actionable intelligence through configurable dashboards, advanced reporting, and predictive modelling. From executive overviews to operational drill-downs, RicozAnalytics makes complex data accessible and actionable for every stakeholder.",
    capabilities: [
      "Real-time dashboards and KPI monitoring",
      "Predictive modelling and trend forecasting",
      "Custom reporting and scheduled distribution",
      "Cross-system data unification",
    ],
    benefits: [
      {
        title: "Faster decisions",
        description:
          "Replace fragmented spreadsheets and delayed reports with live, unified intelligence that teams can act on immediately.",
      },
      {
        title: "Enterprise scale",
        description:
          "Handle data volumes from thousands of sources without degradation in performance or accuracy.",
      },
      {
        title: "Role-appropriate views",
        description:
          "Deliver the right depth and format of information to executives, managers, and analysts — all from the same platform.",
      },
      {
        title: "Reduced analytical overhead",
        description:
          "Automate recurring reports and analysis cycles, freeing your team for higher-value interpretation and strategy.",
      },
    ],
    features: [
      {
        name: "Unified Data Layer",
        description:
          "Connect structured and unstructured data across ERP, CRM, operational, and external systems into a single governed layer.",
      },
      {
        name: "Adaptive Dashboards",
        description:
          "Build and share dashboards tailored to any team, function, or level of granularity — no developer required.",
      },
      {
        name: "Predictive Engine",
        description:
          "Leverage built-in machine learning models to identify trends, forecast outcomes, and surface anomalies before they become issues.",
      },
      {
        name: "Scheduled Intelligence",
        description:
          "Automate report generation and delivery on any cadence, with configurable alert thresholds for critical metrics.",
      },
    ],
    useCases: [
      {
        title: "Executive performance monitoring",
        description:
          "Give leadership real-time visibility into organizational performance with consolidated dashboards spanning finance, operations, and customer metrics.",
      },
      {
        title: "Operational efficiency analysis",
        description:
          "Identify bottlenecks and inefficiencies across business units with granular operational reporting and process analytics.",
      },
      {
        title: "Strategic planning support",
        description:
          "Underpin long-range planning and investment decisions with reliable trend analysis, scenario modelling, and market intelligence.",
      },
    ],
    faqs: [
      {
        question:
          "Can RicozAnalytics connect to our existing data infrastructure?",
        answer:
          "Yes. RicozAnalytics supports pre-built connectors for over 200 enterprise systems, including major ERP, CRM, data warehouse, and operational platforms. Custom connectors are also available through our API framework.",
      },
      {
        question:
          "How does RicozAnalytics handle data governance and access control?",
        answer:
          "The platform includes a comprehensive governance layer with role-based access control, data classification, audit logging, and compliance reporting. All access is tracked and configurable at the field level.",
      },
      {
        question: "What does implementation typically involve?",
        answer:
          "Our implementation team works with you to configure data connections, establish your analytics hierarchy, and build initial dashboards. Typical implementations are structured as phased engagements, beginning with your highest-priority data domains.",
      },
    ],
    relatedProducts: ["rico-data", "rico-flow", "rico-connect"],
    relatedServices: [
      "data-analytics-services",
      "digital-transformation-consulting",
    ],
    seo: {
      title:
        "RicozAnalytics — Enterprise Business Intelligence Platform | Ricoz",
      description:
        "RicozAnalytics delivers real-time business intelligence, predictive analytics, and unified reporting for complex enterprises. Explore capabilities and use cases.",
    },
  },
  {
    id: "rico-flow",
    slug: "rico-flow",
    name: "RicozFlow",
    category: "Automation & Workflow",
    status: "active",
    featured: true,
    tagline: "Process automation for operational excellence",
    shortDescription:
      "End-to-end workflow automation platform that transforms how enterprise operations run.",
    heroStatement:
      "Automate the complexity out of your operations — without sacrificing control.",
    overview:
      "RicozFlow is an enterprise workflow and process automation platform built for organizations with complex operational requirements. It enables teams to model, automate, monitor, and continuously improve business processes across functions — from procurement and finance to HR and customer service. RicozFlow replaces manual handoffs, disconnected systems, and fragile workarounds with structured, auditable, and highly configurable automation.",
    capabilities: [
      "Visual workflow design and process mapping",
      "Cross-system task orchestration",
      "Exception handling and escalation management",
      "Real-time process performance monitoring",
    ],
    benefits: [
      {
        title: "Eliminated manual handoffs",
        description:
          "Replace error-prone manual processes with automated routing, approvals, and notifications that execute reliably at scale.",
      },
      {
        title: "Complete process visibility",
        description:
          "Track every process instance in real time, with full audit history and performance analytics.",
      },
      {
        title: "Faster cycle times",
        description:
          "Reduce processing times across approval, fulfilment, and operational cycles through structured automation.",
      },
      {
        title: "Regulatory compliance",
        description:
          "Enforce process compliance automatically, with configurable controls and comprehensive audit trails.",
      },
    ],
    features: [
      {
        name: "Process Designer",
        description:
          "A visual, drag-and-drop environment for designing, testing, and deploying complex business processes without code.",
      },
      {
        name: "Smart Routing Engine",
        description:
          "Automatically route tasks to the right people, teams, or systems based on configurable rules, thresholds, and conditions.",
      },
      {
        name: "Exception Intelligence",
        description:
          "Detect process deviations in real time, trigger escalations, and present resolution guidance to the responsible party.",
      },
      {
        name: "Performance Analytics",
        description:
          "Monitor process health, throughput, bottlenecks, and SLA compliance across every workflow in your portfolio.",
      },
    ],
    useCases: [
      {
        title: "Finance and procurement automation",
        description:
          "Automate invoice processing, purchase order approvals, and vendor onboarding with structured workflows and system integrations.",
      },
      {
        title: "HR and employee lifecycle",
        description:
          "Streamline onboarding, offboarding, performance cycles, and compliance processes with role-based automated workflows.",
      },
    ],
    faqs: [
      {
        question: "Does RicozFlow require technical resources to configure?",
        answer:
          "No. RicozFlow is designed to be configured by process owners and operations teams using a visual designer. Technical resources are required only for deep system integrations.",
      },
      {
        question: "Can RicozFlow integrate with our existing systems?",
        answer:
          "Yes. RicozFlow connects to enterprise systems via native connectors and REST/SOAP APIs, enabling cross-system automation without requiring system replacement.",
      },
    ],
    relatedProducts: ["rico-analytics", "rico-track", "rico-connect"],
    relatedServices: ["process-optimization", "enterprise-systems-integration"],
    seo: {
      title: "RicozFlow — Enterprise Process Automation Platform | Ricoz",
      description:
        "RicozFlow automates complex enterprise workflows with visual process design, smart routing, and real-time monitoring. Discover how it transforms operations.",
    },
  },
  {
    id: "rico-shield",
    slug: "rico-shield",
    name: "RicozShield",
    category: "Security & Identity",
    status: "active",
    featured: true,
    tagline: "Enterprise cybersecurity and threat detection",
    shortDescription:
      "Comprehensive cybersecurity platform built for the threat landscape large enterprises face.",
    heroStatement:
      "Protect what matters — with intelligence, visibility, and control.",
    overview:
      "RicozShield is an enterprise cybersecurity platform that gives organizations continuous visibility into their threat landscape while providing the tools to detect, respond to, and recover from security incidents at scale. It consolidates threat intelligence, identity management, compliance monitoring, and incident response into a unified operational environment for security teams.",
    capabilities: [
      "Continuous threat detection and response",
      "Identity and access management",
      "Compliance monitoring and reporting",
      "Security incident management",
    ],
    benefits: [
      {
        title: "Reduced detection time",
        description:
          "Identify threats faster with continuous monitoring and automated correlation of signals across your environment.",
      },
      {
        title: "Simplified compliance",
        description:
          "Automate evidence collection, control monitoring, and reporting for regulatory frameworks including ISO 27001, SOC 2, and GDPR.",
      },
      {
        title: "Consolidated visibility",
        description:
          "Replace fragmented security tools with a unified platform that provides a consistent view across your entire estate.",
      },
      {
        title: "Faster incident response",
        description:
          "Respond to confirmed incidents with pre-built playbooks, automated containment actions, and coordinated team workflows.",
      },
    ],
    features: [
      {
        name: "Threat Intelligence Engine",
        description:
          "Continuously ingest and correlate threat signals from internal telemetry, external feeds, and behavioural analytics.",
      },
      {
        name: "Identity Security Centre",
        description:
          "Monitor and govern all identities across your environment, with anomaly detection and privilege access management.",
      },
      {
        name: "Compliance Automation",
        description:
          "Map controls to frameworks, automate evidence collection, and generate audit-ready compliance reports on demand.",
      },
      {
        name: "Incident Response Orchestration",
        description:
          "Guide security teams through structured response workflows with automated containment, investigation tools, and post-incident reporting.",
      },
    ],
    useCases: [
      {
        title: "Continuous threat monitoring",
        description:
          "Maintain real-time visibility across on-premise, cloud, and hybrid environments with automated anomaly detection and alerting.",
      },
      {
        title: "Regulatory compliance management",
        description:
          "Automate the collection and documentation of compliance evidence across multiple regulatory frameworks simultaneously.",
      },
    ],
    faqs: [
      {
        question: "What environments does RicozShield support?",
        answer:
          "RicozShield supports on-premise, cloud (major providers), hybrid, and multi-cloud environments. Coverage can be extended as your infrastructure evolves.",
      },
      {
        question: "Does RicozShield replace our existing security tools?",
        answer:
          "RicozShield can consolidate many point tools, but is also designed to integrate with and enhance existing investments in SIEM, EDR, and identity platforms where appropriate.",
      },
    ],
    relatedProducts: ["rico-vault", "rico-data", "rico-connect"],
    relatedServices: [
      "cybersecurity-advisory",
      "digital-transformation-consulting",
    ],
    seo: {
      title: "RicozShield — Enterprise Cybersecurity Platform | Ricoz",
      description:
        "RicozShield delivers continuous threat detection, compliance automation, and incident response for complex enterprise environments.",
    },
  },
  {
    id: "rico-connect",
    slug: "rico-connect",
    name: "RicozConnect",
    category: "Developer & Application Platforms",
    status: "active",
    featured: true,
    tagline: "API management and enterprise integration framework",
    shortDescription:
      "The connectivity layer that binds your enterprise technology ecosystem together.",
    heroStatement:
      "Every system, process, and data source — unified through a single integration framework.",
    overview:
      "RicozConnect is an enterprise API management and integration platform that enables organizations to connect, govern, and optimize the flow of data and services across their technology landscape. Whether integrating legacy systems, connecting cloud applications, or building event-driven architectures, RicozConnect provides the infrastructure to do so reliably, securely, and at enterprise scale.",
    capabilities: [
      "API design, publishing, and lifecycle management",
      "ETL and data pipeline orchestration",
      "Real-time event streaming",
      "Integration monitoring and governance",
    ],
    benefits: [
      {
        title: "Unified integration layer",
        description:
          "Replace a fragmented collection of point integrations with a governed, monitored platform for all system connectivity.",
      },
      {
        title: "Accelerated development",
        description:
          "Enable development teams to build and publish integrations faster with reusable connectors, templates, and an API-first design environment.",
      },
      {
        title: "Operational reliability",
        description:
          "Monitor integration health in real time, with automated failure detection, retry logic, and alerting.",
      },
      {
        title: "Scalable architecture",
        description:
          "Handle increasing data volumes and integration complexity without re-engineering foundational connectivity.",
      },
    ],
    features: [
      {
        name: "API Gateway",
        description:
          "Publish, secure, and manage APIs with traffic control, rate limiting, authentication, and developer portal capabilities.",
      },
      {
        name: "Integration Designer",
        description:
          "Design data flows and integration logic visually, with built-in connectors for 300+ enterprise systems.",
      },
      {
        name: "Event Streaming",
        description:
          "Build event-driven architectures with reliable message brokering, topic management, and real-time event processing.",
      },
      {
        name: "Integration Observatory",
        description:
          "Maintain full visibility into integration health, data flows, and system dependencies across your environment.",
      },
    ],
    useCases: [
      {
        title: "Enterprise system integration",
        description:
          "Connect ERP, CRM, HCM, and operational systems into a coherent data ecosystem — enabling reliable, bidirectional data flows.",
      },
      {
        title: "API programme management",
        description:
          "Establish and grow an internal and partner-facing API programme with governance, analytics, and developer tooling.",
      },
    ],
    faqs: [
      {
        question: "How many pre-built connectors does RicozConnect include?",
        answer:
          "RicozConnect ships with 300+ pre-built connectors covering major enterprise platforms. The connector library is continuously expanded, and a custom connector SDK is available for proprietary systems.",
      },
      {
        question:
          "Can RicozConnect handle high-volume data integration workloads?",
        answer:
          "Yes. RicozConnect is built on an elastic infrastructure capable of scaling to handle billions of events per day while maintaining processing performance.",
      },
    ],
    relatedProducts: ["rico-analytics", "rico-flow", "rico-data"],
    relatedServices: [
      "enterprise-systems-integration",
      "digital-transformation-consulting",
    ],
    seo: {
      title: "RicozConnect — Enterprise API & Integration Platform | Ricoz",
      description:
        "RicozConnect unifies your enterprise technology landscape with API management, ETL pipelines, and real-time event streaming.",
    },
  },
  {
    id: "rico-vault",
    slug: "rico-vault",
    name: "RicozVault",
    category: "Security & Identity",
    status: "active",
    featured: true,
    tagline: "Secure document management and records governance",
    shortDescription:
      "Enterprise document management with rigorous access control, audit trails, and retention governance.",
    heroStatement:
      "Your most sensitive documents — managed with the control they demand.",
    overview:
      "RicozVault provides enterprise-grade document management for organizations that need to store, manage, and govern high-value records with precision. Built for regulated industries and compliance-sensitive environments, it delivers structured document classification, granular access control, tamper-evident audit trails, and automated retention management.",
    capabilities: [
      "Structured document classification and taxonomy",
      "Granular role-based access control",
      "Tamper-evident audit logging",
      "Automated retention and disposition",
    ],
    benefits: [
      {
        title: "Audit-ready at all times",
        description:
          "Maintain comprehensive, tamper-evident records of every document access, modification, and disposition event.",
      },
      {
        title: "Reduced compliance risk",
        description:
          "Automate retention schedules and disposition workflows to ensure compliance with legal holds and regulatory requirements.",
      },
      {
        title: "Controlled information sharing",
        description:
          "Share documents securely with internal teams, external parties, and regulators — with configurable access expiry.",
      },
      {
        title: "Single repository",
        description:
          "Consolidate critical documents from across the organization into a governed, searchable central repository.",
      },
    ],
    features: [
      {
        name: "Document Classification Engine",
        description:
          "Automatically classify documents based on content, metadata, and configurable taxonomies.",
      },
      {
        name: "Access Control Framework",
        description:
          "Apply role-based, attribute-based, and time-limited access controls at the document and folder level.",
      },
      {
        name: "Immutable Audit Log",
        description:
          "Record every document event — view, edit, download, share, or deletion — in a tamper-evident audit trail.",
      },
      {
        name: "Retention Manager",
        description:
          "Define and enforce retention schedules by document type, jurisdiction, and business function.",
      },
    ],
    useCases: [
      {
        title: "Regulated document management",
        description:
          "Manage contracts, board documents, regulatory filings, and compliance records with the rigour required by external auditors.",
      },
      {
        title: "Legal hold management",
        description:
          "Place documents on legal hold, preserve them from disposition, and track hold status throughout litigation or investigation cycles.",
      },
    ],
    faqs: [
      {
        question: "Which regulatory frameworks does RicozVault support?",
        answer:
          "RicozVault supports records governance requirements across multiple frameworks including GDPR, ISO 15489, SEC/FINRA requirements, and healthcare records regulations. Specific compliance configurations are available for major jurisdictions.",
      },
      {
        question: "Can RicozVault integrate with existing document sources?",
        answer:
          "Yes. RicozVault connects to SharePoint, network file systems, email archives, and enterprise applications to pull documents into the governed repository.",
      },
    ],
    relatedProducts: ["rico-shield", "rico-data", "rico-connect"],
    relatedServices: [
      "cybersecurity-advisory",
      "enterprise-systems-integration",
    ],
    seo: {
      title:
        "RicozVault — Enterprise Document Management & Records Governance | Ricoz",
      description:
        "RicozVault provides secure document management with structured classification, granular access control, and automated retention governance.",
    },
  },
  {
    id: "rico-track",
    slug: "rico-track",
    name: "RicozTrack",
    category: "Project & Work Management",
    status: "active",
    featured: true,
    tagline: "Enterprise portfolio and project intelligence",
    shortDescription:
      "Unified project and portfolio management for organizations running complex delivery programmes.",
    heroStatement:
      "Every project, every resource, every risk — in a single coherent view.",
    overview:
      "RicozTrack brings project and programme delivery intelligence together across your organization. It provides portfolio visibility, resource management, risk tracking, and delivery reporting for complex multi-project environments — enabling leadership to make informed decisions and delivery teams to stay aligned with strategic priorities.",
    capabilities: [
      "Portfolio and programme visibility",
      "Resource planning and allocation",
      "Risk and dependency management",
      "Delivery performance reporting",
    ],
    benefits: [
      {
        title: "Strategic alignment",
        description:
          "Connect project activity to strategic objectives, ensuring investment and effort is directed toward the highest-priority outcomes.",
      },
      {
        title: "Resource clarity",
        description:
          "See where every resource is allocated across the portfolio, identify conflicts, and plan capacity with confidence.",
      },
      {
        title: "Proactive risk management",
        description:
          "Surface delivery risks early and maintain a structured approach to mitigation across the programme.",
      },
      {
        title: "Executive reporting",
        description:
          "Generate consolidated portfolio reports for leadership and governance boards with minimal manual effort.",
      },
    ],
    features: [
      {
        name: "Portfolio Dashboard",
        description:
          "A consolidated view of all active projects, programmes, and strategic initiatives with RAG status and key indicators.",
      },
      {
        name: "Resource Planner",
        description:
          "Plan, allocate, and forecast resource demand across the portfolio with role-based capacity views.",
      },
      {
        name: "Risk Register",
        description:
          "Maintain a structured risk register across the portfolio with likelihood/impact scoring and mitigation tracking.",
      },
      {
        name: "Governance Reporting",
        description:
          "Produce board-ready delivery reports automatically from live portfolio data.",
      },
    ],
    useCases: [
      {
        title: "Large programme management",
        description:
          "Coordinate delivery across interdependent workstreams with unified dependency tracking and consolidated status reporting.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozTrack support agile and waterfall delivery methods?",
        answer:
          "Yes. RicozTrack supports configurable delivery frameworks including agile, waterfall, and hybrid approaches — teams can work in the methodology that suits them while reporting remains consistent.",
      },
    ],
    relatedProducts: ["rico-flow", "rico-analytics", "rico-spark"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    seo: {
      title: "RicozTrack — Enterprise Portfolio & Project Management | Ricoz",
      description:
        "RicozTrack delivers portfolio visibility, resource planning, and delivery intelligence for complex multi-project organizations.",
    },
  },
  {
    id: "rico-serve",
    slug: "rico-serve",
    name: "RicozServe",
    category: "Customer Experience",
    status: "active",
    featured: true,
    tagline: "Customer service operations for enterprise scale",
    shortDescription:
      "A unified platform for managing customer service operations across channels, teams, and functions.",
    heroStatement:
      "Deliver the service your customers expect — consistently, at scale.",
    overview:
      "RicozServe is an enterprise customer service operations platform designed for organizations managing high volumes of customer interactions across multiple channels and business units. It provides case management, knowledge management, service routing, and customer journey intelligence in a single unified environment.",
    capabilities: [
      "Omnichannel case management",
      "Intelligent service routing",
      "Knowledge base and resolution guidance",
      "Customer journey analytics",
    ],
    benefits: [
      {
        title: "Consistent service delivery",
        description:
          "Ensure customers receive a consistent, high-quality experience regardless of which team, channel, or location they engage through.",
      },
      {
        title: "Faster resolution",
        description:
          "Route cases intelligently and surface relevant knowledge instantly, reducing handling time and escalation rates.",
      },
      {
        title: "Operational visibility",
        description:
          "Monitor service volumes, team performance, and satisfaction metrics in real time across the entire operation.",
      },
      {
        title: "Continuous improvement",
        description:
          "Identify service gaps, recurring issues, and improvement opportunities through structured case analytics.",
      },
    ],
    features: [
      {
        name: "Case Management Hub",
        description:
          "Manage cases from intake to resolution with structured workflows, SLA tracking, and full interaction history.",
      },
      {
        name: "Smart Routing",
        description:
          "Route incoming cases to the right team or individual based on skills, availability, and case complexity.",
      },
      {
        name: "Knowledge Platform",
        description:
          "Maintain a governed knowledge base with intelligent search, guided resolution paths, and continuous quality scoring.",
      },
      {
        name: "Service Analytics",
        description:
          "Monitor key service metrics including volume trends, resolution rates, first-contact resolution, and customer satisfaction.",
      },
    ],
    useCases: [
      {
        title: "Enterprise service operations",
        description:
          "Unify customer service operations across multiple business units, brands, or geographies into a single governed environment.",
      },
    ],
    faqs: [
      {
        question: "Does RicozServe support omnichannel customer engagement?",
        answer:
          "Yes. RicozServe supports email, web, phone, and digital channel interactions — all unified within a single case record and customer history.",
      },
    ],
    relatedProducts: ["rico-analytics", "rico-flow", "rico-engage"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    seo: {
      title: "RicozServe — Enterprise Customer Service Platform | Ricoz",
      description:
        "RicozServe unifies customer service operations with case management, intelligent routing, and service analytics for complex enterprises.",
    },
  },
  {
    id: "rico-data",
    slug: "rico-data",
    name: "RicozData",
    category: "Data & Analytics",
    status: "active",
    featured: true,
    tagline: "Enterprise data governance and quality management",
    shortDescription:
      "A governance platform for organizations that need to trust, manage, and control their data at scale.",
    heroStatement:
      "Your data — defined, trusted, and governed from source to insight.",
    overview:
      "RicozData is an enterprise data governance and quality management platform that enables organizations to establish authoritative definitions, monitor data quality, track data lineage, and enforce governance policies across their entire data landscape. It provides the foundation for data-driven decision-making by ensuring that data is reliable, well-understood, and consistently managed.",
    capabilities: [
      "Data catalogue and business glossary",
      "Data quality monitoring and scoring",
      "End-to-end data lineage tracking",
      "Governance policy management",
    ],
    benefits: [
      {
        title: "Trusted data",
        description:
          "Establish authoritative definitions, quality standards, and governance policies that make data reliably trustworthy across the organization.",
      },
      {
        title: "Regulatory compliance",
        description:
          "Demonstrate data governance maturity for regulatory requirements, including GDPR, BCBS 239, and Solvency II data management standards.",
      },
      {
        title: "Reduced data debt",
        description:
          "Identify and address data quality issues systematically before they propagate into decisions, reports, or downstream systems.",
      },
      {
        title: "Organizational alignment",
        description:
          "Create a shared language for data across business and technical teams, reducing ambiguity and reconciliation effort.",
      },
    ],
    features: [
      {
        name: "Enterprise Data Catalogue",
        description:
          "Maintain a searchable inventory of all data assets, with business context, technical metadata, and ownership information.",
      },
      {
        name: "Data Quality Monitor",
        description:
          "Define quality rules, score data assets continuously, and track quality trends over time across your data landscape.",
      },
      {
        name: "Lineage Graph",
        description:
          "Trace data from origin through transformation to consumption — understanding impact, provenance, and dependencies.",
      },
      {
        name: "Policy Engine",
        description:
          "Define and enforce data access, classification, and handling policies through a centrally managed governance framework.",
      },
    ],
    useCases: [
      {
        title: "Regulatory data management",
        description:
          "Establish the governance infrastructure required to comply with financial services, healthcare, and data protection regulations.",
      },
    ],
    faqs: [
      {
        question: "How does RicozData connect to our existing data sources?",
        answer:
          "RicozData uses automated scanners and metadata connectors to discover and catalogue data assets across databases, data warehouses, lakes, and BI platforms — minimizing manual cataloguing effort.",
      },
    ],
    relatedProducts: ["rico-analytics", "rico-connect", "rico-vault"],
    relatedServices: [
      "data-analytics-services",
      "digital-transformation-consulting",
    ],
    seo: {
      title:
        "RicozData — Enterprise Data Governance & Quality Platform | Ricoz",
      description:
        "RicozData delivers enterprise data governance with cataloguing, quality monitoring, lineage tracking, and policy management.",
    },
  },
  {
    id: "rico-spark",
    slug: "rico-spark",
    name: "RicozSpark",
    category: "Project & Work Management",
    status: "active",
    featured: true,
    tagline: "Innovation management and idea-to-execution pipeline",
    shortDescription:
      "A structured platform for capturing, evaluating, and executing ideas across the organization.",
    heroStatement:
      "Capture every promising idea. Develop only the best. Execute with confidence.",
    overview:
      "RicozSpark is an enterprise innovation management platform that gives organizations a structured approach to generating, capturing, evaluating, and advancing ideas from across the business. It provides the pipeline, collaboration tools, and governance framework needed to turn organizational insight into implemented value.",
    capabilities: [
      "Idea capture and crowdsourcing",
      "Structured evaluation and scoring",
      "Innovation pipeline management",
      "Outcome tracking and reporting",
    ],
    benefits: [
      {
        title: "Systematic innovation",
        description:
          "Replace ad-hoc innovation with a disciplined, repeatable process that identifies and advances the most valuable ideas.",
      },
      {
        title: "Broad organizational input",
        description:
          "Draw on the insight and experience of your entire organization, not just a small innovation team.",
      },
      {
        title: "Transparent prioritization",
        description:
          "Evaluate and prioritize ideas using consistent, objective criteria — visible to all participants.",
      },
      {
        title: "Measured impact",
        description:
          "Track the outcomes of implemented innovations, building a body of evidence for the value of structured innovation.",
      },
    ],
    features: [
      {
        name: "Idea Studio",
        description:
          "A collaborative environment for submitting, developing, and refining ideas with peer input and expert feedback.",
      },
      {
        name: "Evaluation Framework",
        description:
          "Score ideas against configurable strategic, operational, and feasibility criteria with panel review workflows.",
      },
      {
        name: "Innovation Pipeline",
        description:
          "Advance selected ideas through structured development stages with milestone tracking and resource assignment.",
      },
      {
        name: "Impact Dashboard",
        description:
          "Monitor the cumulative impact of implemented innovations on business metrics and strategic objectives.",
      },
    ],
    useCases: [
      {
        title: "Enterprise innovation programmes",
        description:
          "Run structured innovation challenges and continuous suggestion schemes with transparent evaluation and recognition.",
      },
    ],
    faqs: [
      {
        question: "How does RicozSpark manage intellectual property?",
        answer:
          "RicozSpark captures submission metadata, originator attribution, and development history, providing a documented record of idea origin and development for IP management purposes.",
      },
    ],
    relatedProducts: ["rico-track", "rico-flow", "rico-analytics"],
    relatedServices: [
      "digital-transformation-consulting",
      "technology-strategy-roadmap",
    ],
    seo: {
      title: "RicozSpark — Enterprise Innovation Management Platform | Ricoz",
      description:
        "RicozSpark provides a structured innovation pipeline from idea capture through evaluation to execution and impact measurement.",
    },
  },
  {
    id: "rico-engage",
    slug: "rico-engage",
    name: "RicozEngage",
    category: "Marketing & Growth",
    status: "active",
    featured: true,
    tagline: "Stakeholder engagement and communication intelligence",
    shortDescription:
      "An enterprise platform for managing stakeholder relationships, communications, and engagement programmes.",
    heroStatement:
      "Understand, inform, and engage the stakeholders that matter most.",
    overview:
      "RicozEngage is an enterprise stakeholder engagement and communication management platform designed for organizations with complex stakeholder ecosystems. It provides a structured environment for mapping stakeholders, planning and executing engagement programmes, tracking communication history, and measuring engagement effectiveness.",
    capabilities: [
      "Stakeholder mapping and segmentation",
      "Communication planning and scheduling",
      "Engagement tracking and history",
      "Sentiment and effectiveness analytics",
    ],
    benefits: [
      {
        title: "Structured relationships",
        description:
          "Replace scattered CRM notes and email threads with a purpose-built environment for managing strategic stakeholder relationships.",
      },
      {
        title: "Coordinated communication",
        description:
          "Ensure stakeholders receive consistent, appropriate, and timely communications — regardless of which team is engaging them.",
      },
      {
        title: "Engagement intelligence",
        description:
          "Track engagement patterns, sentiment trends, and relationship strength to inform relationship management decisions.",
      },
      {
        title: "Regulatory alignment",
        description:
          "Meet shareholder, regulatory, and governance communication requirements with structured tracking and reporting.",
      },
    ],
    features: [
      {
        name: "Stakeholder Map",
        description:
          "Visualize stakeholder relationships, influence networks, and engagement status in a dynamic organizational map.",
      },
      {
        name: "Communication Planner",
        description:
          "Plan, schedule, and coordinate stakeholder communications across teams with approval and distribution workflows.",
      },
      {
        name: "Engagement Tracker",
        description:
          "Log all interactions, commitments, and follow-up actions in a single stakeholder record with full history.",
      },
      {
        name: "Effectiveness Analytics",
        description:
          "Measure the reach, resonance, and outcomes of stakeholder communications over time.",
      },
    ],
    useCases: [
      {
        title: "Major transformation programmes",
        description:
          "Manage the complex stakeholder landscape of large-scale change programmes with structured engagement planning and tracking.",
      },
    ],
    faqs: [
      {
        question: "Can RicozEngage integrate with our existing CRM?",
        answer:
          "Yes. RicozEngage includes integrations with major CRM platforms and can sync contact data, interaction history, and relationship records bidirectionally.",
      },
    ],
    relatedProducts: ["rico-serve", "rico-analytics", "rico-track"],
    relatedServices: [
      "digital-transformation-consulting",
      "technology-strategy-roadmap",
    ],
    seo: {
      title: "RicozEngage — Enterprise Stakeholder Engagement Platform | Ricoz",
      description:
        "RicozEngage delivers structured stakeholder mapping, communication planning, and engagement intelligence for complex enterprises.",
    },
  },

  // ─── Batch 01: Sales & CRM ─────────────────────────────────────────────────

  {
    id: "rico-crm",
    slug: "rico-crm",
    name: "RicozCRM",
    category: "Sales & CRM",
    tagline: "Unified customer relationship management",
    shortDescription:
      "A complete CRM platform that gives sales teams a single, structured environment to manage accounts, contacts, and opportunities at enterprise scale.",
    heroStatement:
      "Build deeper relationships, close better deals, and grow revenue with confidence.",
    overview:
      "RicozCRM is an enterprise customer relationship management platform built for organisations with complex sales cycles and diverse account portfolios. It delivers account management, opportunity tracking, pipeline visibility, and sales analytics in one governed environment — giving every customer-facing team the context they need to act decisively.",
    capabilities: [
      "Contact and account management",
      "Opportunity and deal tracking",
      "Sales pipeline visibility",
      "Territory and quota management",
      "Sales activity intelligence",
    ],
    benefits: [
      {
        title: "Revenue clarity",
        description:
          "Maintain a single, accurate view of your pipeline from prospecting through close.",
      },
      {
        title: "Team alignment",
        description:
          "Keep distributed sales teams coordinated with shared account data and full interaction history.",
      },
      {
        title: "Faster onboarding",
        description:
          "New team members access complete relationship histories and account context immediately.",
      },
    ],
    features: [
      {
        name: "Account Intelligence",
        description:
          "Maintain rich account records with relationship history, interaction logs, and opportunity tracking across the full account lifecycle.",
      },
      {
        name: "Pipeline Manager",
        description:
          "Visualise and manage the complete sales pipeline with stage-based deal progression and configurable forecasting views.",
      },
      {
        name: "Activity Tracker",
        description:
          "Log calls, meetings, emails, and tasks against accounts and contacts with automated reminders and follow-up scheduling.",
      },
      {
        name: "Sales Analytics",
        description:
          "Monitor rep performance, forecast accuracy, and pipeline health with configurable sales dashboards and trend reporting.",
      },
    ],
    useCases: [
      {
        title: "Enterprise account management",
        description:
          "Manage complex enterprise accounts with multiple stakeholders, long sales cycles, and coordinated team coverage.",
      },
      {
        title: "Revenue operations alignment",
        description:
          "Align sales, marketing, and customer success data in a unified CRM for accurate pipeline visibility and forecasting.",
      },
      {
        title: "Territory management",
        description:
          "Define, assign, and manage sales territories with quota tracking and performance benchmarking across regions.",
      },
    ],
    faqs: [
      {
        question:
          "Can RicozCRM integrate with our existing email and calendar systems?",
        answer:
          "Yes. RicozCRM connects to major email and calendar platforms to capture interactions automatically and keep activity logs current without manual entry.",
      },
      {
        question: "How does RicozCRM handle large account portfolios?",
        answer:
          "RicozCRM supports account hierarchies, parent-child relationships, and portfolio views for organisations managing hundreds of complex accounts simultaneously.",
      },
      {
        question: "What reporting capabilities does RicozCRM provide?",
        answer:
          "RicozCRM includes pre-built sales performance dashboards and a configurable reporting framework for pipeline analysis, forecast tracking, and activity monitoring.",
      },
    ],
    relatedProducts: ["rico-leads", "rico-pipeline", "rico-forecast"],
    relatedServices: [
      "digital-transformation-consulting",
      "technology-strategy-roadmap",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozCRM — Enterprise Customer Relationship Management | Ricoz",
      description:
        "RicozCRM provides unified contact management, pipeline visibility, and sales analytics for enterprise organisations. Explore capabilities.",
    },
  },
  {
    id: "rico-leads",
    slug: "rico-leads",
    name: "RicozLeads",
    category: "Sales & CRM",
    tagline: "Intelligent lead capture and qualification",
    shortDescription:
      "A lead management platform that captures, scores, and routes inbound and outbound leads to the right sales resource at the right time.",
    heroStatement:
      "Stop losing leads in the pipeline — qualify faster and convert with confidence.",
    overview:
      "RicozLeads is an enterprise lead management platform that gives marketing and sales teams a structured approach to capturing, enriching, scoring, and routing leads from every source. It bridges the gap between demand generation and sales execution, ensuring every qualified lead reaches the right person with full context and without delay.",
    capabilities: [
      "Multi-source lead capture and enrichment",
      "Lead scoring and qualification rules",
      "Automated lead routing and assignment",
      "Lead lifecycle tracking and reporting",
      "Sales and marketing handoff management",
    ],
    benefits: [
      {
        title: "Faster response",
        description:
          "Route qualified leads to the right sales rep instantly, reducing response time and improving conversion rates.",
      },
      {
        title: "Higher quality pipeline",
        description:
          "Score and qualify leads against configurable criteria so sales teams focus on the most valuable opportunities.",
      },
      {
        title: "Full attribution",
        description:
          "Track every lead from source to close with complete attribution across marketing channels and campaigns.",
      },
    ],
    features: [
      {
        name: "Lead Capture Hub",
        description:
          "Aggregate leads from web forms, campaigns, events, integrations, and manual entry into a single managed queue.",
      },
      {
        name: "Scoring Engine",
        description:
          "Score leads automatically based on demographic, firmographic, and behavioural signals using configurable scoring models.",
      },
      {
        name: "Routing Rules",
        description:
          "Define routing logic by territory, product interest, lead score, or account ownership to ensure every lead reaches the right resource.",
      },
      {
        name: "Conversion Analytics",
        description:
          "Monitor lead volume, qualification rates, conversion velocity, and source attribution with real-time lead performance dashboards.",
      },
    ],
    useCases: [
      {
        title: "Inbound lead qualification",
        description:
          "Qualify and route high volumes of inbound leads from digital campaigns and web enquiries without manual triage.",
      },
      {
        title: "Account-based prospecting",
        description:
          "Identify and prioritise leads from target accounts using firmographic scoring and engagement signals.",
      },
      {
        title: "Sales and marketing alignment",
        description:
          "Define shared qualification criteria and handoff workflows that keep sales and marketing teams operating from the same data.",
      },
    ],
    faqs: [
      {
        question: "How does RicozLeads handle duplicate lead detection?",
        answer:
          "RicozLeads automatically deduplicates incoming leads by matching against existing records using configurable matching rules on email, company, and contact data.",
      },
      {
        question:
          "Can RicozLeads connect to our marketing automation platform?",
        answer:
          "Yes. RicozLeads includes native integrations with major marketing automation platforms and supports bi-directional sync of lead data and engagement signals.",
      },
      {
        question: "What scoring models does RicozLeads support?",
        answer:
          "RicozLeads supports rule-based and weighted scoring models configured by your team, with the ability to run multiple models simultaneously for different product lines or segments.",
      },
    ],
    relatedProducts: ["rico-crm", "rico-pipeline", "rico-campaign"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozLeads — Enterprise Lead Management & Qualification | Ricoz",
      description:
        "RicozLeads captures, scores, and routes enterprise leads with intelligent qualification and real-time conversion analytics.",
    },
  },
  {
    id: "rico-pipeline",
    slug: "rico-pipeline",
    name: "RicozPipeline",
    category: "Sales & CRM",
    tagline: "Sales pipeline management and velocity",
    shortDescription:
      "A dedicated pipeline management platform that gives sales leaders complete visibility into deal progression, stage health, and revenue velocity.",
    heroStatement:
      "See every deal, every stage, every risk — and act before opportunities slip away.",
    overview:
      "RicozPipeline is a sales pipeline management platform built for revenue leaders who need more than a CRM view. It delivers structured deal management, pipeline health analytics, stage conversion intelligence, and coaching insights in a purpose-built environment designed around how enterprise sales actually works.",
    capabilities: [
      "Deal stage management and progression tracking",
      "Pipeline health and coverage analysis",
      "Conversion rate intelligence by stage",
      "Deal risk identification and alerts",
      "Sales coaching and activity insights",
    ],
    benefits: [
      {
        title: "Pipeline transparency",
        description:
          "Give sales leaders and reps a shared, accurate view of deal status and pipeline health at every level of the organisation.",
      },
      {
        title: "Risk identification",
        description:
          "Surface stalled, at-risk, and overdue deals before they become losses with automated deal health monitoring.",
      },
      {
        title: "Coaching data",
        description:
          "Identify where deals stall, which reps need support, and which objections are recurring across the pipeline.",
      },
    ],
    features: [
      {
        name: "Pipeline Board",
        description:
          "A visual, stage-based pipeline view with drag-and-drop deal management, deal value indicators, and configurable stage definitions.",
      },
      {
        name: "Deal Health Monitor",
        description:
          "Automated deal health scoring based on activity recency, stage duration, stakeholder engagement, and close date proximity.",
      },
      {
        name: "Coverage Analysis",
        description:
          "Analyse pipeline coverage against quota by rep, team, territory, and time period with weighted and unweighted pipeline views.",
      },
      {
        name: "Stage Analytics",
        description:
          "Track conversion rates, average deal velocity, and value trends by pipeline stage to identify systemic bottlenecks.",
      },
    ],
    useCases: [
      {
        title: "Weekly pipeline reviews",
        description:
          "Run structured pipeline reviews with accurate, live data rather than manually compiled spreadsheets or stale CRM exports.",
      },
      {
        title: "Forecast accuracy improvement",
        description:
          "Identify over-inflated pipeline and underweighted deals systematically to produce more reliable revenue forecasts.",
      },
      {
        title: "Sales team performance",
        description:
          "Compare pipeline quality, deal velocity, and win rates across teams and reps to drive coaching and resource allocation decisions.",
      },
    ],
    faqs: [
      {
        question: "Can RicozPipeline connect to our existing CRM?",
        answer:
          "Yes. RicozPipeline synchronises with major CRM platforms in real time, adding a dedicated pipeline intelligence layer without replacing the CRM record of truth.",
      },
      {
        question: "How does deal health scoring work?",
        answer:
          "Deal health scores are calculated from configurable signals including time in stage, last activity date, stakeholder engagement, and upcoming close date proximity.",
      },
      {
        question: "Does RicozPipeline support multiple pipelines?",
        answer:
          "Yes. RicozPipeline supports multiple concurrent pipelines for different product lines, regions, or sales motions — each with independent stage definitions and analytics.",
      },
    ],
    relatedProducts: ["rico-crm", "rico-forecast", "rico-revenue"],
    relatedServices: [
      "digital-transformation-consulting",
      "technology-strategy-roadmap",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozPipeline — Sales Pipeline Management & Intelligence | Ricoz",
      description:
        "RicozPipeline delivers real-time pipeline visibility, deal health monitoring, and stage analytics for enterprise sales organisations.",
    },
  },
  {
    id: "rico-quote",
    slug: "rico-quote",
    name: "RicozQuote",
    category: "Sales & CRM",
    tagline: "Structured quoting and proposal management",
    shortDescription:
      "An enterprise quoting platform that standardises proposal creation, approval workflows, and pricing governance across complex sales organisations.",
    heroStatement:
      "Produce accurate, compliant quotes faster — and win more business at the right margin.",
    overview:
      "RicozQuote is a proposal and quote management platform designed for enterprise sales teams navigating complex pricing structures, multi-product configurations, and approval hierarchies. It replaces fragmented spreadsheets and email chains with a governed quoting environment that enforces pricing policy, accelerates approval, and produces professional proposals at scale.",
    capabilities: [
      "Product and service configuration",
      "Pricing rules and discount governance",
      "Approval workflow management",
      "Proposal generation and version control",
      "Quote-to-contract handoff",
    ],
    benefits: [
      {
        title: "Pricing consistency",
        description:
          "Enforce pricing rules and discount thresholds across all proposals, eliminating margin erosion from uncontrolled discounting.",
      },
      {
        title: "Faster approval",
        description:
          "Route quotes through structured approval workflows that match deal value and discount level to the correct approver automatically.",
      },
      {
        title: "Professional output",
        description:
          "Generate branded, compliant proposals from approved templates without manual document assembly.",
      },
    ],
    features: [
      {
        name: "Product Configurator",
        description:
          "Configure complex multi-product and multi-service quotes with dependency rules, bundling logic, and quantity-based pricing.",
      },
      {
        name: "Pricing Engine",
        description:
          "Apply list prices, volume discounts, customer-specific pricing, and promotional rules with full audit trail.",
      },
      {
        name: "Approval Orchestrator",
        description:
          "Define multi-level approval chains triggered by deal value, discount depth, or product category with automated escalation.",
      },
      {
        name: "Proposal Builder",
        description:
          "Generate branded proposal documents from governed templates with dynamic content, terms, and e-signature integration.",
      },
    ],
    useCases: [
      {
        title: "Complex solution quoting",
        description:
          "Quote multi-product solutions with dependency rules, optional components, and tiered pricing in a governed, auditable environment.",
      },
      {
        title: "Partner and reseller management",
        description:
          "Manage channel-specific pricing, partner margins, and approval structures across a distributed partner network.",
      },
      {
        title: "Renewal management",
        description:
          "Generate renewal quotes automatically from existing contract data with configured uplift rules and approval workflows.",
      },
    ],
    faqs: [
      {
        question: "Can RicozQuote integrate with our CRM?",
        answer:
          "Yes. RicozQuote integrates with major CRM platforms to pull account data, push quote status, and maintain a complete quote history against each opportunity.",
      },
      {
        question: "How does RicozQuote handle custom pricing agreements?",
        answer:
          "RicozQuote supports customer-specific price books, contracted rates, and exception pricing managed centrally with approval gates for manual overrides.",
      },
      {
        question: "Does RicozQuote support electronic signatures?",
        answer:
          "Yes. RicozQuote includes e-signature integration for proposal acceptance, with configurable signature routing and execution tracking.",
      },
    ],
    relatedProducts: ["rico-crm", "rico-pipeline", "rico-revenue"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozQuote — Enterprise Quote & Proposal Management | Ricoz",
      description:
        "RicozQuote standardises quoting, enforces pricing governance, and accelerates proposal approval for complex enterprise sales organisations.",
    },
  },
  {
    id: "rico-revenue",
    slug: "rico-revenue",
    name: "RicozRevenue",
    category: "Sales & CRM",
    tagline: "Revenue operations and performance intelligence",
    shortDescription:
      "A revenue operations platform that aligns sales, marketing, and customer success data to drive predictable, scalable revenue growth.",
    heroStatement:
      "Connect every revenue motion — and manage the business with the clarity it deserves.",
    overview:
      "RicozRevenue is a revenue operations platform designed for organisations that need to align their go-to-market functions around a single, reliable view of revenue performance. It consolidates pipeline, campaign, retention, and financial data into a unified operations environment with connected analytics and structured process management for revenue teams.",
    capabilities: [
      "Revenue performance dashboards and KPIs",
      "Go-to-market alignment and process management",
      "Pipeline and bookings analytics",
      "Customer retention and expansion tracking",
      "Revenue planning and scenario modelling",
    ],
    benefits: [
      {
        title: "Predictable revenue",
        description:
          "Build reliable revenue forecasts from consistent data across pipeline, renewals, and expansion motions.",
      },
      {
        title: "Cross-functional alignment",
        description:
          "Align sales, marketing, and customer success teams around shared revenue metrics and operational definitions.",
      },
      {
        title: "Operational efficiency",
        description:
          "Identify and eliminate friction in the revenue process with end-to-end funnel analytics and bottleneck detection.",
      },
    ],
    features: [
      {
        name: "Revenue Dashboard",
        description:
          "A consolidated view of bookings, pipeline, retention, and expansion metrics with configurable KPI tracking.",
      },
      {
        name: "Funnel Analytics",
        description:
          "Analyse the complete revenue funnel from lead through renewal with conversion, velocity, and value metrics at every stage.",
      },
      {
        name: "Territory and Quota Manager",
        description:
          "Define, distribute, and track sales quotas and territory assignments against actual performance in real time.",
      },
      {
        name: "RevOps Process Hub",
        description:
          "Manage revenue operations processes including lead routing, deal approval, and customer handoffs with structured workflows.",
      },
    ],
    useCases: [
      {
        title: "Board-level revenue reporting",
        description:
          "Produce consistent, accurate revenue performance reports for executive leadership and board governance without manual data assembly.",
      },
      {
        title: "Sales and marketing attribution",
        description:
          "Measure marketing contribution to pipeline and revenue with multi-touch attribution models across all demand channels.",
      },
      {
        title: "Retention and expansion management",
        description:
          "Track customer health, identify expansion opportunities, and manage renewal risk across the entire customer base.",
      },
    ],
    faqs: [
      {
        question: "What data sources does RicozRevenue connect to?",
        answer:
          "RicozRevenue integrates with CRM, marketing automation, customer success, finance, and billing platforms to consolidate revenue data into a single analytical environment.",
      },
      {
        question: "How does RicozRevenue handle revenue recognition?",
        answer:
          "RicozRevenue tracks bookings, revenue, and deferred revenue as distinct metrics and supports integration with finance systems for recognised revenue reconciliation.",
      },
      {
        question: "Can RicozRevenue support multiple business models?",
        answer:
          "Yes. RicozRevenue is configured to support subscription, transactional, and hybrid revenue models with appropriate metrics and reporting frameworks for each.",
      },
    ],
    relatedProducts: ["rico-crm", "rico-pipeline", "rico-forecast"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozRevenue — Revenue Operations & Performance Intelligence | Ricoz",
      description:
        "RicozRevenue aligns go-to-market functions around unified pipeline, retention, and revenue analytics for predictable growth.",
    },
  },
  {
    id: "rico-prospect",
    slug: "rico-prospect",
    name: "RicozProspect",
    category: "Sales & CRM",
    tagline: "B2B sales prospecting and outreach",
    shortDescription:
      "An outbound prospecting platform that helps enterprise sales teams identify, research, and engage high-value accounts with structured, data-driven outreach.",
    heroStatement:
      "Find the right accounts, build the right message, and start the right conversations.",
    overview:
      "RicozProspect is a B2B sales prospecting platform that gives sales development and enterprise account teams a structured environment for account identification, contact research, and multi-touch outreach sequencing. It replaces ad-hoc prospecting with a governed, measurable process that surfaces opportunities earlier and engages decision-makers more effectively.",
    capabilities: [
      "Account targeting and ICP matching",
      "Contact discovery and enrichment",
      "Multi-channel outreach sequencing",
      "Prospect engagement tracking",
      "Prospecting performance analytics",
    ],
    benefits: [
      {
        title: "Better target selection",
        description:
          "Identify and prioritise accounts that match your ideal customer profile using structured firmographic and technographic criteria.",
      },
      {
        title: "Higher engagement rates",
        description:
          "Deliver personalised, contextually relevant outreach through structured sequences rather than generic mass contact.",
      },
      {
        title: "Measurable prospecting",
        description:
          "Track prospecting activity, response rates, and pipeline contribution with consistent metrics across every sales rep.",
      },
    ],
    features: [
      {
        name: "Account Targeting Engine",
        description:
          "Build and score prospect account lists against configurable ideal customer profile criteria with firmographic and signal-based filters.",
      },
      {
        name: "Contact Intelligence",
        description:
          "Discover and enrich contact records with role, seniority, and engagement data to reach the right decision-makers.",
      },
      {
        name: "Sequence Builder",
        description:
          "Design multi-step, multi-channel outreach sequences with personalisation variables, timing rules, and automated follow-ups.",
      },
      {
        name: "Engagement Analytics",
        description:
          "Track email opens, link clicks, call outcomes, and reply rates by sequence, step, and rep with conversion reporting.",
      },
    ],
    useCases: [
      {
        title: "SDR outbound campaigns",
        description:
          "Run structured outbound prospecting campaigns at scale with consistent messaging, activity tracking, and pipeline contribution measurement.",
      },
      {
        title: "Account-based outreach",
        description:
          "Engage multiple stakeholders within target accounts with coordinated, role-specific outreach sequences.",
      },
      {
        title: "Market development",
        description:
          "Identify and systematically develop new market segments with targeted prospecting programmes and measured engagement.",
      },
    ],
    faqs: [
      {
        question: "How does RicozProspect source contact data?",
        answer:
          "RicozProspect integrates with third-party data providers for initial contact discovery and enrichment, while maintaining your own opt-in contact database as the primary record.",
      },
      {
        question: "Can RicozProspect integrate with our CRM?",
        answer:
          "Yes. RicozProspect synchronises prospect records, engagement history, and converted leads directly to your CRM to maintain a single record of truth.",
      },
      {
        question:
          "What channels does RicozProspect support for outreach sequences?",
        answer:
          "RicozProspect supports email, call task scheduling, and LinkedIn task integration within outreach sequences, with channel weighting and timing controls.",
      },
    ],
    relatedProducts: ["rico-crm", "rico-leads", "rico-pipeline"],
    relatedServices: [
      "digital-transformation-consulting",
      "technology-strategy-roadmap",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozProspect — B2B Sales Prospecting & Outreach Platform | Ricoz",
      description:
        "RicozProspect helps enterprise sales teams identify target accounts, discover contacts, and execute structured multi-channel outreach.",
    },
  },
  {
    id: "rico-deals",
    slug: "rico-deals",
    name: "RicozDeals",
    category: "Sales & CRM",
    tagline: "Collaborative deal room management",
    shortDescription:
      "A deal room platform that gives enterprise sales teams and their prospects a shared, structured space to manage complex sales engagements from discovery to close.",
    heroStatement:
      "Bring every stakeholder into the deal — and close with complete alignment.",
    overview:
      "RicozDeals is a deal room and mutual action plan platform designed for complex, multi-stakeholder enterprise sales. It creates a shared digital workspace for sales teams and buyer groups to collaborate on requirements, share information, track milestones, and coordinate the decisions that move deals forward — reducing sales cycle length and improving close rates.",
    capabilities: [
      "Shared deal workspace for buyers and sellers",
      "Mutual action plan and milestone tracking",
      "Document sharing and version management",
      "Stakeholder engagement visibility",
      "Deal timeline and close date management",
    ],
    benefits: [
      {
        title: "Buyer alignment",
        description:
          "Keep every buyer stakeholder engaged and informed through a shared workspace that surfaces the right information at the right time.",
      },
      {
        title: "Deal momentum",
        description:
          "Maintain deal momentum with structured mutual action plans, milestone accountability, and automated follow-up prompts.",
      },
      {
        title: "Sales visibility",
        description:
          "Track buyer engagement, document views, and milestone completion to understand deal health beyond the sales rep's perspective.",
      },
    ],
    features: [
      {
        name: "Deal Workspace",
        description:
          "A shared, branded digital space where sellers and buyers collaborate on deal content, questions, requirements, and decisions.",
      },
      {
        name: "Mutual Action Plan",
        description:
          "Define shared success milestones, responsibilities, and timelines that both sides commit to and track through to close.",
      },
      {
        name: "Content Hub",
        description:
          "Organise and share proposals, case studies, technical documents, and contracts in a versioned, tracked content library within the deal.",
      },
      {
        name: "Engagement Signals",
        description:
          "Track which stakeholders are engaging with content, completing actions, and attending milestones to anticipate deal dynamics.",
      },
    ],
    useCases: [
      {
        title: "Complex multi-stakeholder deals",
        description:
          "Coordinate buying committees across multiple functions and seniority levels with a shared workspace that keeps everyone aligned.",
      },
      {
        title: "Proof of concept management",
        description:
          "Manage technical evaluation phases with structured workplans, document sharing, and milestone tracking visible to both teams.",
      },
      {
        title: "Contract and legal handoff",
        description:
          "Transition from commercial agreement to legal review and contract execution with document version control and milestone tracking.",
      },
    ],
    faqs: [
      {
        question: "Do buyers need to create an account to use RicozDeals?",
        answer:
          "No. Buyers access the deal room through a secure, authenticated link without requiring an account, reducing friction in the buyer experience.",
      },
      {
        question: "How does RicozDeals integrate with our CRM?",
        answer:
          "RicozDeals pushes engagement data, milestone completions, and deal room activity summaries to the associated CRM opportunity record automatically.",
      },
      {
        question: "Can deal rooms be templated for common deal types?",
        answer:
          "Yes. Deal room templates can be configured for common deal types, with pre-populated content, standard milestones, and default stakeholder roles.",
      },
    ],
    relatedProducts: ["rico-crm", "rico-pipeline", "rico-quote"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozDeals — Enterprise Deal Room & Collaboration Platform | Ricoz",
      description:
        "RicozDeals creates shared deal workspaces where enterprise sales teams and buyer groups collaborate to close complex deals faster.",
    },
  },
  {
    id: "rico-forecast",
    slug: "rico-forecast",
    name: "RicozForecast",
    category: "Sales & CRM",
    tagline: "Predictable sales forecasting and planning",
    shortDescription:
      "A sales forecasting platform that replaces manual forecast roll-ups with structured, data-driven revenue prediction across every level of the sales organisation.",
    heroStatement: "Forecast with conviction — not guesswork.",
    overview:
      "RicozForecast is an enterprise sales forecasting platform that gives revenue leaders and finance teams a rigorous, consistent approach to predicting sales outcomes. It combines structured rep and manager forecasting submissions with pipeline analytics and historical trend models to produce forecasts that are both credible and actionable.",
    capabilities: [
      "Structured forecast submission and roll-up",
      "Pipeline-based forecast modelling",
      "Historical trend and seasonality analysis",
      "Forecast variance and accuracy tracking",
      "Scenario planning and sensitivity analysis",
    ],
    benefits: [
      {
        title: "Forecast accuracy",
        description:
          "Reduce forecast variance by combining manager judgement with pipeline analytics and historical conversion data.",
      },
      {
        title: "Consistent process",
        description:
          "Run the same forecast process across every team and region with structured submissions, review workflows, and version control.",
      },
      {
        title: "Finance alignment",
        description:
          "Provide finance and leadership with credible, consistently produced revenue forecasts for planning and board reporting.",
      },
    ],
    features: [
      {
        name: "Forecast Submission Hub",
        description:
          "Structured forecast submission interface for reps, managers, and leaders with configurable categories and commentary fields.",
      },
      {
        name: "Pipeline Analytics",
        description:
          "Analyse pipeline quality, conversion rates, and deal velocity to generate data-driven forecast benchmarks alongside human submissions.",
      },
      {
        name: "Forecast Roll-Up",
        description:
          "Automatically aggregate individual and team forecasts up through the organisational hierarchy with full drill-down visibility.",
      },
      {
        name: "Variance Analysis",
        description:
          "Compare forecast to actual results over time, identify systematic biases, and track forecast accuracy improvement by team and rep.",
      },
    ],
    useCases: [
      {
        title: "Monthly and quarterly forecasting",
        description:
          "Run disciplined monthly and quarterly forecast cycles with structured submissions, manager reviews, and executive roll-up reporting.",
      },
      {
        title: "Annual planning",
        description:
          "Underpin annual revenue planning and quota setting with historical performance data and pipeline trend analysis.",
      },
      {
        title: "Board reporting",
        description:
          "Produce consistent, data-backed revenue forecasts for board governance with scenario ranges and confidence-level reporting.",
      },
    ],
    faqs: [
      {
        question: "Can RicozForecast pull data from our existing CRM?",
        answer:
          "Yes. RicozForecast synchronises pipeline data from major CRM platforms in real time, using live deal data as the foundation for pipeline-based forecast models.",
      },
      {
        question: "How does RicozForecast handle multiple forecast categories?",
        answer:
          "RicozForecast supports configurable forecast categories — such as Commit, Best Case, and Pipeline — with independent submission, roll-up, and analytics for each.",
      },
      {
        question: "Does RicozForecast support scenario modelling?",
        answer:
          "Yes. RicozForecast includes a scenario planner that allows revenue leaders to model the impact of changes in win rate, deal velocity, and pipeline coverage on the forecast.",
      },
    ],
    relatedProducts: ["rico-crm", "rico-pipeline", "rico-revenue"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozForecast — Enterprise Sales Forecasting Platform | Ricoz",
      description:
        "RicozForecast delivers structured sales forecasting with pipeline analytics, rep submissions, and variance tracking for enterprise revenue teams.",
    },
  },

  // ─── Batch 01: Marketing & Growth ───────────────────────────────────────────

  {
    id: "rico-campaign",
    slug: "rico-campaign",
    name: "RicozCampaign",
    category: "Marketing & Growth",
    tagline: "Multi-channel campaign management and execution",
    shortDescription:
      "An enterprise campaign management platform for planning, executing, and measuring multi-channel marketing programmes across complex organisations.",
    heroStatement:
      "Plan every campaign, coordinate every channel, measure every outcome.",
    overview:
      "RicozCampaign is a multi-channel campaign management platform designed for enterprise marketing teams running complex programmes across digital, email, events, and paid channels. It provides a unified environment for campaign planning, asset coordination, budget management, execution orchestration, and performance measurement — replacing fragmented tools and manual coordination.",
    capabilities: [
      "Campaign planning and brief management",
      "Multi-channel execution coordination",
      "Budget tracking and spend management",
      "Asset management and approval workflows",
      "Campaign performance measurement",
    ],
    benefits: [
      {
        title: "Coordinated execution",
        description:
          "Align every campaign contributor — from creative to media to digital — around a shared plan with clear ownership and timelines.",
      },
      {
        title: "Budget control",
        description:
          "Track campaign spend against approved budgets in real time, with approval gates for budget amendments and overruns.",
      },
      {
        title: "Measurable outcomes",
        description:
          "Connect campaign activity to pipeline and revenue outcomes through integrated performance reporting.",
      },
    ],
    features: [
      {
        name: "Campaign Planner",
        description:
          "Structure campaigns from brief to launch with hierarchical planning, milestone tracking, and stakeholder assignment.",
      },
      {
        name: "Channel Orchestrator",
        description:
          "Coordinate execution across email, social, paid, events, and content channels from a single campaign timeline.",
      },
      {
        name: "Budget Manager",
        description:
          "Track planned versus actual spend by campaign, channel, and time period with configured approval workflows.",
      },
      {
        name: "Performance Hub",
        description:
          "Aggregate campaign metrics across channels into unified performance dashboards with attribution reporting.",
      },
    ],
    useCases: [
      {
        title: "Integrated campaign launches",
        description:
          "Launch coordinated product or campaign initiatives across multiple channels with unified planning, execution, and measurement.",
      },
      {
        title: "Always-on programme management",
        description:
          "Manage continuous marketing programmes across multiple markets and segments with structured governance and reporting.",
      },
      {
        title: "Campaign budget governance",
        description:
          "Enforce marketing budget discipline across regions and business units with structured allocation, tracking, and approval workflows.",
      },
    ],
    faqs: [
      {
        question:
          "Can RicozCampaign integrate with our existing marketing tools?",
        answer:
          "Yes. RicozCampaign connects with email, social, CRM, and analytics platforms through native integrations, pulling execution data into the campaign performance layer.",
      },
      {
        question:
          "How does RicozCampaign handle global campaigns with regional variations?",
        answer:
          "RicozCampaign supports campaign hierarchies with a master plan and regional sub-campaigns, allowing local adaptation within a governed global framework.",
      },
      {
        question: "Does RicozCampaign include asset management?",
        answer:
          "Yes. RicozCampaign includes a connected asset library with approval workflows, version control, and channel-specific asset organisation.",
      },
    ],
    relatedProducts: ["rico-engage", "rico-email", "rico-audience"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozCampaign — Enterprise Campaign Management Platform | Ricoz",
      description:
        "RicozCampaign manages multi-channel marketing campaigns with unified planning, budget governance, and performance measurement.",
    },
  },
  {
    id: "rico-email",
    slug: "rico-email",
    name: "RicozEmail",
    category: "Marketing & Growth",
    tagline: "Enterprise email marketing and automation",
    shortDescription:
      "A high-volume email marketing platform built for enterprise senders managing complex segmentation, personalisation, and deliverability requirements.",
    heroStatement:
      "Send the right message to the right person — at the scale enterprise demands.",
    overview:
      "RicozEmail is an enterprise email marketing platform that handles the scale, governance, and personalisation complexity that consumer email tools cannot support. It provides campaign execution, behavioural automation, dynamic personalisation, list management, and deliverability infrastructure for organisations sending at enterprise volume across multiple brands, markets, and audiences.",
    capabilities: [
      "High-volume email campaign execution",
      "Behavioural trigger and automation sequences",
      "Dynamic personalisation and content blocks",
      "List management and segmentation",
      "Deliverability management and monitoring",
    ],
    benefits: [
      {
        title: "Enterprise scale",
        description:
          "Send at the volume enterprise demands — millions of personalised messages — with infrastructure built for reliability.",
      },
      {
        title: "Deliverability control",
        description:
          "Manage sender reputation, inbox placement, and deliverability performance with dedicated infrastructure and monitoring.",
      },
      {
        title: "Personalisation depth",
        description:
          "Deliver individually relevant messages using dynamic content blocks, behavioural signals, and audience segment rules.",
      },
    ],
    features: [
      {
        name: "Campaign Builder",
        description:
          "Design, test, and schedule email campaigns with a structured template builder, dynamic content support, and multi-variant testing.",
      },
      {
        name: "Automation Engine",
        description:
          "Build trigger-based email sequences responding to subscriber behaviour, lifecycle events, and data-driven conditions.",
      },
      {
        name: "Segmentation Manager",
        description:
          "Manage subscriber lists with dynamic segmentation, suppression rules, and consent and preference management.",
      },
      {
        name: "Deliverability Centre",
        description:
          "Monitor sender reputation, bounce rates, spam signals, and inbox placement with dedicated IP management and warming tools.",
      },
    ],
    useCases: [
      {
        title: "Customer lifecycle communications",
        description:
          "Automate onboarding, engagement, and re-engagement sequences across the customer lifecycle with behavioural trigger logic.",
      },
      {
        title: "Product and campaign launches",
        description:
          "Execute large-scale product launch and campaign email programmes with personalised content across complex audience segments.",
      },
      {
        title: "Transactional and operational email",
        description:
          "Manage high-volume transactional and operational email with governance, compliance, and deliverability infrastructure.",
      },
    ],
    faqs: [
      {
        question: "What volume of email can RicozEmail handle?",
        answer:
          "RicozEmail is built on enterprise-grade sending infrastructure capable of supporting high-frequency sending for large subscriber bases with consistent deliverability.",
      },
      {
        question:
          "How does RicozEmail handle consent and preference management?",
        answer:
          "RicozEmail includes a consent management framework supporting opt-in, opt-out, and granular preference management with audit trails for compliance purposes.",
      },
      {
        question: "Can RicozEmail integrate with our CRM and customer data?",
        answer:
          "Yes. RicozEmail integrates with CRM and customer data platforms to sync audience data, trigger behavioural automations, and attribute email engagement to CRM records.",
      },
    ],
    relatedProducts: ["rico-campaign", "rico-journey", "rico-audience"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozEmail — Enterprise Email Marketing Platform | Ricoz",
      description:
        "RicozEmail delivers high-volume email marketing with enterprise segmentation, automation, personalisation, and deliverability management.",
    },
  },
  {
    id: "rico-content",
    slug: "rico-content",
    name: "RicozContent",
    category: "Marketing & Growth",
    tagline: "Content management and publishing governance",
    shortDescription:
      "An enterprise content management platform for planning, producing, approving, and publishing content across channels and markets at scale.",
    heroStatement: "Govern every piece of content — from brief to publication.",
    overview:
      "RicozContent is a content management platform built for enterprise marketing and communications teams producing high volumes of content across multiple channels, brands, and geographies. It provides structured content planning, collaborative production, governed approval workflows, multi-channel publishing, and content performance analytics — replacing fragmented project tools and ad-hoc email review chains.",
    capabilities: [
      "Content planning and editorial calendar management",
      "Collaborative content production workflows",
      "Brand and compliance approval processes",
      "Multi-channel content publishing",
      "Content performance analytics",
    ],
    benefits: [
      {
        title: "Production efficiency",
        description:
          "Reduce time from brief to published content with structured workflows that eliminate unnecessary back-and-forth.",
      },
      {
        title: "Brand consistency",
        description:
          "Enforce brand standards and compliance requirements through governed approval workflows before content is published.",
      },
      {
        title: "Editorial visibility",
        description:
          "Give marketing leadership a complete view of content in production, scheduled, and live across every channel and market.",
      },
    ],
    features: [
      {
        name: "Editorial Calendar",
        description:
          "Plan and visualise content across all channels, formats, and markets in a unified editorial calendar with status tracking.",
      },
      {
        name: "Production Workflow",
        description:
          "Manage content through configurable production stages with task assignment, collaborative editing, and version control.",
      },
      {
        name: "Approval Manager",
        description:
          "Route content through brand, legal, and compliance approval chains with structured sign-off, comments, and revision tracking.",
      },
      {
        name: "Publishing Hub",
        description:
          "Publish approved content to connected channels including web, email, and social platforms from a single governed environment.",
      },
    ],
    useCases: [
      {
        title: "Global content operations",
        description:
          "Manage content production and approval across multiple markets, brands, and languages with localisation workflows and governance.",
      },
      {
        title: "Regulated content management",
        description:
          "Produce and publish content subject to legal, compliance, or regulatory review with auditable approval trails.",
      },
      {
        title: "Content calendar management",
        description:
          "Plan and execute content programmes across channels with unified editorial visibility and coordinated scheduling.",
      },
    ],
    faqs: [
      {
        question: "Can RicozContent handle content localisation?",
        answer:
          "Yes. RicozContent supports localisation workflows with source content management, translation task routing, and local approval steps for each market.",
      },
      {
        question: "How does RicozContent manage brand guidelines compliance?",
        answer:
          "RicozContent includes configurable brand compliance checkpoints within approval workflows, with the ability to attach guidelines and require sign-off from brand owners.",
      },
      {
        question: "Does RicozContent integrate with our publishing platforms?",
        answer:
          "Yes. RicozContent integrates with major CMS and marketing platforms to publish approved content directly from the workflow without manual re-entry.",
      },
    ],
    relatedProducts: ["rico-campaign", "rico-social", "rico-engage"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozContent — Enterprise Content Management & Publishing | Ricoz",
      description:
        "RicozContent manages enterprise content production with editorial planning, collaborative workflows, governed approvals, and multi-channel publishing.",
    },
  },
  {
    id: "rico-social",
    slug: "rico-social",
    name: "RicozSocial",
    category: "Marketing & Growth",
    tagline: "Social media management at enterprise scale",
    shortDescription:
      "An enterprise social media management platform for planning, publishing, monitoring, and reporting across multiple brands, accounts, and markets.",
    heroStatement:
      "Manage your social presence consistently — across every brand, market, and channel.",
    overview:
      "RicozSocial is a social media management platform built for enterprise marketing teams managing multiple brands, accounts, and geographies across major social channels. It provides unified publishing, moderation, monitoring, and analytics in a governed environment that enforces brand standards, manages approval workflows, and provides the visibility leadership needs to understand social performance.",
    capabilities: [
      "Multi-brand and multi-account publishing",
      "Social content approval workflows",
      "Community management and moderation",
      "Social listening and brand monitoring",
      "Social performance analytics and reporting",
    ],
    benefits: [
      {
        title: "Operational consistency",
        description:
          "Manage all social accounts from one platform with consistent workflows, approval governance, and publishing standards.",
      },
      {
        title: "Brand protection",
        description:
          "Enforce content approval and brand compliance before any post is published across any account or market.",
      },
      {
        title: "Audience intelligence",
        description:
          "Monitor brand mentions, competitor activity, and audience sentiment to inform strategy and respond to issues rapidly.",
      },
    ],
    features: [
      {
        name: "Publishing Studio",
        description:
          "Compose, schedule, and publish social content across all connected accounts with a unified content calendar and preview.",
      },
      {
        name: "Approval Workflow",
        description:
          "Route posts through configurable review and approval chains before scheduling, with commenting and revision management.",
      },
      {
        name: "Engagement Manager",
        description:
          "Monitor and respond to comments, mentions, and messages across all accounts from a unified inbox with team assignment.",
      },
      {
        name: "Analytics Suite",
        description:
          "Track reach, engagement, follower growth, and content performance across all platforms with configurable reporting.",
      },
    ],
    useCases: [
      {
        title: "Multi-brand social management",
        description:
          "Manage social media presence across multiple brands or sub-brands from a single governed platform with brand-specific permissions.",
      },
      {
        title: "Regulated sector communications",
        description:
          "Publish social content through compliant approval workflows with audit trails for regulated industry requirements.",
      },
      {
        title: "Campaign social amplification",
        description:
          "Coordinate social activity across accounts and markets as part of integrated marketing campaign execution.",
      },
    ],
    faqs: [
      {
        question: "Which social platforms does RicozSocial support?",
        answer:
          "RicozSocial supports major social platforms with publishing, monitoring, and analytics capabilities for each, with the connector library expanding as platforms evolve.",
      },
      {
        question:
          "How does RicozSocial manage multi-team and multi-market access?",
        answer:
          "RicozSocial uses a role and permission framework that restricts account access, publishing rights, and approval authority by team, market, and brand.",
      },
      {
        question: "Does RicozSocial include social listening?",
        answer:
          "Yes. RicozSocial includes brand monitoring and social listening capabilities covering keyword tracking, sentiment analysis, and competitor mention monitoring.",
      },
    ],
    relatedProducts: ["rico-campaign", "rico-content", "rico-engage"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozSocial — Enterprise Social Media Management Platform | Ricoz",
      description:
        "RicozSocial manages multi-brand social presence with governed publishing, community management, and social performance analytics.",
    },
  },
  {
    id: "rico-journey",
    slug: "rico-journey",
    name: "RicozJourney",
    category: "Marketing & Growth",
    tagline: "Customer journey design and automation",
    shortDescription:
      "A customer journey orchestration platform for designing, automating, and optimising multi-channel experiences across the full customer lifecycle.",
    heroStatement:
      "Design journeys that meet customers where they are — and guide them forward.",
    overview:
      "RicozJourney is a customer journey orchestration platform that gives marketing and customer experience teams the tools to design, automate, and continuously improve customer experiences across channels and lifecycle stages. It moves beyond single-channel automation to coordinate messages, offers, and interactions across email, web, messaging, and service in response to real customer behaviour.",
    capabilities: [
      "Visual journey design and mapping",
      "Multi-channel journey orchestration",
      "Behavioural trigger and decision logic",
      "Journey performance analytics",
      "A/B testing and journey optimisation",
    ],
    benefits: [
      {
        title: "Connected experiences",
        description:
          "Deliver coordinated messages across channels that respond to where each customer is in their journey rather than broadcasting to all.",
      },
      {
        title: "Lifecycle automation",
        description:
          "Automate onboarding, engagement, and re-engagement journeys that run continuously without manual intervention.",
      },
      {
        title: "Evidence-based optimisation",
        description:
          "Test journey variants and optimise based on actual engagement and conversion data at each step.",
      },
    ],
    features: [
      {
        name: "Journey Builder",
        description:
          "Design customer journeys visually with drag-and-drop logic for triggers, decisions, actions, and timing rules.",
      },
      {
        name: "Orchestration Engine",
        description:
          "Coordinate messages, content, and interactions across channels in real time based on behavioural and contextual signals.",
      },
      {
        name: "Decision Manager",
        description:
          "Define branching logic, conditional rules, and personalisation decisions that adapt the journey based on each customer's context.",
      },
      {
        name: "Journey Analytics",
        description:
          "Track entry, progression, exit, and conversion rates at every journey step with cohort analysis and optimisation reporting.",
      },
    ],
    useCases: [
      {
        title: "Customer onboarding",
        description:
          "Design automated onboarding journeys that guide new customers from activation to value realisation across coordinated touchpoints.",
      },
      {
        title: "Re-engagement programmes",
        description:
          "Identify disengaging customers and trigger re-engagement sequences with personalised content and incentives across channels.",
      },
      {
        title: "Lifecycle marketing",
        description:
          "Automate customer lifecycle communications from acquisition through retention, expansion, and advocacy with connected multi-channel journeys.",
      },
    ],
    faqs: [
      {
        question: "How does RicozJourney connect to customer data?",
        answer:
          "RicozJourney integrates with customer data platforms, CRM, and marketing automation systems to consume behavioural signals and contextual data for real-time journey decisions.",
      },
      {
        question: "Can RicozJourney handle high-volume journey execution?",
        answer:
          "Yes. RicozJourney is built for enterprise-scale journey execution, supporting millions of concurrent journey participants with real-time event processing.",
      },
      {
        question: "How does A/B testing work within journeys?",
        answer:
          "RicozJourney supports branch-level and journey-level A/B tests with configurable traffic splits, statistical significance monitoring, and winner promotion.",
      },
    ],
    relatedProducts: ["rico-email", "rico-campaign", "rico-audience"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozJourney — Customer Journey Orchestration Platform | Ricoz",
      description:
        "RicozJourney designs and automates multi-channel customer journeys with behavioural triggers, decision logic, and lifecycle orchestration.",
    },
  },
  {
    id: "rico-convert",
    slug: "rico-convert",
    name: "RicozConvert",
    category: "Marketing & Growth",
    tagline: "Conversion rate optimisation and experimentation",
    shortDescription:
      "An enterprise CRO platform for running structured experiments, optimising conversion flows, and improving digital experience performance across web properties.",
    heroStatement:
      "Test everything, assume nothing, and convert with evidence.",
    overview:
      "RicozConvert is a conversion rate optimisation platform built for digital and marketing teams that need to improve commercial performance across web properties at enterprise scale. It provides A/B and multivariate testing, personalisation, user journey analysis, and experimentation governance — enabling teams to make evidence-based improvements to digital experiences without depending on development queues.",
    capabilities: [
      "A/B and multivariate experiment management",
      "Personalisation and audience targeting",
      "Conversion funnel analysis",
      "Experiment governance and statistical rigour",
      "Digital experience performance reporting",
    ],
    benefits: [
      {
        title: "Evidence-based decisions",
        description:
          "Replace intuition-driven design changes with controlled experiments that produce statistically valid conversion insights.",
      },
      {
        title: "Marketing agility",
        description:
          "Launch and iterate on experiments without engineering dependency, enabling marketing teams to optimise at their own pace.",
      },
      {
        title: "Compound improvement",
        description:
          "Build a systematic programme of incremental improvements that compounds into significant conversion gains over time.",
      },
    ],
    features: [
      {
        name: "Experiment Builder",
        description:
          "Create A/B, multivariate, and redirect tests with a visual editor and code injection for any element of a web experience.",
      },
      {
        name: "Audience Targeting",
        description:
          "Define experiment audiences by behavioural, demographic, traffic source, and custom data attributes for relevant, precise testing.",
      },
      {
        name: "Funnel Analytics",
        description:
          "Analyse conversion funnels to identify drop-off points, friction patterns, and optimisation priorities across key user flows.",
      },
      {
        name: "Statistical Engine",
        description:
          "Measure experiment results with configurable confidence thresholds, Bayesian or frequentist analysis, and automated significance detection.",
      },
    ],
    useCases: [
      {
        title: "Homepage and landing page optimisation",
        description:
          "Run continuous experiments on high-traffic pages to improve engagement and conversion without impacting SEO or brand standards.",
      },
      {
        title: "Checkout and form optimisation",
        description:
          "Identify and remove friction in critical conversion flows through structured multivariate testing and funnel analysis.",
      },
      {
        title: "Personalisation programmes",
        description:
          "Deliver personalised digital experiences to audience segments and measure the commercial impact of each variant.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozConvert require engineering resources to run experiments?",
        answer:
          "Basic experiments can be managed by marketers using the visual editor with no code changes required. Complex tests may involve development for implementation.",
      },
      {
        question: "How does RicozConvert handle statistical significance?",
        answer:
          "RicozConvert calculates statistical significance using configurable confidence thresholds and supports both frequentist and Bayesian analysis methods.",
      },
      {
        question:
          "Can RicozConvert personalise experiences for anonymous visitors?",
        answer:
          "Yes. RicozConvert supports personalisation for anonymous visitors using session-based behavioural signals, traffic source data, and device attributes.",
      },
    ],
    relatedProducts: ["rico-campaign", "rico-journey", "rico-audience"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozConvert — Conversion Rate Optimisation Platform | Ricoz",
      description:
        "RicozConvert enables enterprise CRO with A/B testing, personalisation, funnel analysis, and statistical experimentation at scale.",
    },
  },
  {
    id: "rico-audience",
    slug: "rico-audience",
    name: "RicozAudience",
    category: "Marketing & Growth",
    tagline: "Audience management and segmentation intelligence",
    shortDescription:
      "An enterprise audience management platform for building, maintaining, and activating precise customer segments across marketing channels and programmes.",
    heroStatement:
      "Know your audience precisely — and reach them with purpose.",
    overview:
      "RicozAudience is an enterprise audience management platform that gives marketing teams a governed environment for building, enriching, and activating customer segments across their technology stack. It consolidates identity, behavioural, and preference data into unified audience profiles, enabling precise segmentation, consistent targeting, and coherent audience governance across every channel and campaign.",
    capabilities: [
      "Unified customer profile management",
      "Behavioural and attribute-based segmentation",
      "Audience activation and channel sync",
      "Consent and preference management",
      "Audience performance and overlap analytics",
    ],
    benefits: [
      {
        title: "Segmentation precision",
        description:
          "Build and maintain audience segments from unified profile data rather than channel-specific or siloed data sets.",
      },
      {
        title: "Consistent activation",
        description:
          "Ensure every channel uses the same audience definitions, reducing inconsistency and waste in cross-channel targeting.",
      },
      {
        title: "Governance compliance",
        description:
          "Manage consent and data usage rights centrally to ensure every audience activation respects regulatory requirements.",
      },
    ],
    features: [
      {
        name: "Profile Unification",
        description:
          "Merge identity signals from multiple sources into unified customer profiles with configurable identity resolution rules.",
      },
      {
        name: "Segment Builder",
        description:
          "Build and preview dynamic audience segments using any combination of behavioural, demographic, and preference attributes.",
      },
      {
        name: "Channel Activation",
        description:
          "Push segments to connected channels and platforms — including email, paid, and personalisation tools — with real-time sync.",
      },
      {
        name: "Consent Manager",
        description:
          "Track and enforce consent and data usage permissions at the profile level with purpose-based access controls for each channel.",
      },
    ],
    useCases: [
      {
        title: "Cross-channel audience alignment",
        description:
          "Ensure consistent audience definitions are applied across email, paid, web, and CRM systems to eliminate targeting inconsistencies.",
      },
      {
        title: "First-party data activation",
        description:
          "Activate first-party customer data across marketing channels with governance controls and consent compliance built in.",
      },
      {
        title: "Suppression and exclusion management",
        description:
          "Maintain up-to-date suppression lists across channels to protect customer experience and reduce wasted marketing spend.",
      },
    ],
    faqs: [
      {
        question:
          "How does RicozAudience handle data from multiple source systems?",
        answer:
          "RicozAudience ingests data from CRM, marketing automation, transactional, and web analytics platforms, resolving identities into unified profiles using configurable matching rules.",
      },
      {
        question: "Does RicozAudience support real-time segmentation?",
        answer:
          "Yes. RicozAudience supports real-time segment updates triggered by behavioural events, enabling timely activation for time-sensitive campaigns and journeys.",
      },
      {
        question: "How does consent management work across channels?",
        answer:
          "RicozAudience maintains consent and preference records at the profile level and enforces usage permissions when segments are activated to each connected channel.",
      },
    ],
    relatedProducts: ["rico-campaign", "rico-journey", "rico-email"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozAudience — Enterprise Audience Management Platform | Ricoz",
      description:
        "RicozAudience builds, governs, and activates precise customer segments from unified profiles across every marketing channel.",
    },
  },

  // ─── Batch 02: Customer Experience ─────────────────────────────────────────

  {
    id: "rico-desk",
    slug: "rico-desk",
    name: "RicozDesk",
    category: "Customer Experience",
    tagline: "Enterprise customer support operations",
    shortDescription:
      "A customer support operations platform that gives enterprise service teams the structure, visibility, and tooling to resolve customer issues efficiently and consistently at scale.",
    heroStatement:
      "Every support interaction is an opportunity — resolve faster, serve better.",
    overview:
      "RicozDesk is an enterprise customer support platform built for organisations managing complex, high-volume support operations across multiple channels and teams. It provides ticket management, SLA governance, escalation workflows, agent productivity tooling, and operational reporting in a unified environment designed around the realities of enterprise service delivery.",
    capabilities: [
      "Omnichannel ticket management",
      "SLA configuration and enforcement",
      "Escalation and routing workflows",
      "Agent productivity and collaboration",
      "Support operations analytics",
    ],
    benefits: [
      {
        title: "Resolution consistency",
        description:
          "Apply structured workflows and SLA rules that ensure every ticket is handled correctly regardless of channel or agent.",
      },
      {
        title: "Operational visibility",
        description:
          "Give support managers real-time visibility into queue health, agent performance, and SLA status across the entire operation.",
      },
      {
        title: "Scalable service delivery",
        description:
          "Handle growing support volumes without proportional headcount increases by automating triage, routing, and response management.",
      },
    ],
    features: [
      {
        name: "Ticket Manager",
        description:
          "A unified ticket management environment capturing support requests from all channels with configurable categorisation, priority, and ownership rules.",
      },
      {
        name: "SLA Engine",
        description:
          "Define and enforce multi-tier SLA policies by ticket type, customer segment, and priority with breach alerting and escalation triggers.",
      },
      {
        name: "Workflow Automation",
        description:
          "Automate repetitive ticket operations including assignment, status updates, notifications, and follow-ups based on configurable business rules.",
      },
      {
        name: "Support Analytics",
        description:
          "Track ticket volumes, resolution times, SLA performance, agent productivity, and satisfaction scores with operational dashboards.",
      },
    ],
    useCases: [
      {
        title: "Enterprise service desk operations",
        description:
          "Manage high-volume enterprise support queues with structured SLA governance, escalation paths, and agent performance monitoring.",
      },
      {
        title: "Multi-tier support management",
        description:
          "Coordinate Tier 1, Tier 2, and specialist escalation queues with automated routing, visibility, and SLA continuity across tiers.",
      },
      {
        title: "Service quality governance",
        description:
          "Monitor and enforce service quality standards across distributed support teams with consistent SLA measurement and breach management.",
      },
    ],
    faqs: [
      {
        question: "Which support channels does RicozDesk support?",
        answer:
          "RicozDesk consolidates tickets from email, web form, chat, phone logging, and integrated self-service channels into a unified management environment.",
      },
      {
        question: "How does SLA management work across customer tiers?",
        answer:
          "RicozDesk supports multiple SLA policies applied by customer segment, product type, and ticket priority — with independent response and resolution targets for each tier.",
      },
      {
        question: "Can RicozDesk integrate with our existing CRM?",
        answer:
          "Yes. RicozDesk integrates with major CRM platforms to pull customer context, sync ticket history, and maintain a complete support record against each account.",
      },
    ],
    relatedProducts: ["rico-chat", "rico-know", "rico-feedback"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozDesk — Enterprise Customer Support Platform | Ricoz",
      description:
        "RicozDesk manages enterprise customer support with omnichannel ticket management, SLA governance, and operational analytics.",
    },
  },
  {
    id: "rico-chat",
    slug: "rico-chat",
    name: "RicozChat",
    category: "Customer Experience",
    tagline: "Real-time customer messaging and live support",
    shortDescription:
      "A live customer messaging platform that gives enterprise service and sales teams structured, scalable real-time communication with customers across digital touchpoints.",
    heroStatement:
      "Meet customers in the moment — with the context to serve them well.",
    overview:
      "RicozChat is an enterprise live messaging platform that enables real-time customer communication across web, mobile, and digital channels. It provides agent-managed live chat, intelligent routing, conversation history, and proactive engagement capabilities — giving customer-facing teams the tools to resolve issues, answer questions, and drive engagement in the moments that matter most.",
    capabilities: [
      "Live chat and real-time messaging",
      "Proactive engagement and triggers",
      "Conversation routing and assignment",
      "Chat history and context management",
      "Chat performance analytics",
    ],
    benefits: [
      {
        title: "Immediate resolution",
        description:
          "Resolve customer questions and issues in real time, reducing friction and the delays associated with email and phone support.",
      },
      {
        title: "Proactive engagement",
        description:
          "Initiate conversations at critical moments in the customer journey based on behavioural triggers rather than waiting for customers to ask.",
      },
      {
        title: "Agent efficiency",
        description:
          "Equip agents with full conversation history, customer context, and productivity tools to handle multiple conversations concurrently.",
      },
    ],
    features: [
      {
        name: "Live Messaging Engine",
        description:
          "Real-time chat infrastructure with configurable widget deployment, concurrent conversation management, and agent handoff.",
      },
      {
        name: "Proactive Triggers",
        description:
          "Define rule-based engagement triggers by page, session behaviour, or customer attribute to initiate conversations at high-value moments.",
      },
      {
        name: "Routing and Queue Manager",
        description:
          "Route incoming chats to the correct team or agent based on topic, language, customer segment, or agent availability.",
      },
      {
        name: "Conversation Intelligence",
        description:
          "Access full conversation history, customer profile, and prior support context within the agent interface for every live interaction.",
      },
    ],
    useCases: [
      {
        title: "Real-time customer support",
        description:
          "Provide immediate support through live chat for customers who prefer real-time resolution over email or phone contact.",
      },
      {
        title: "Pre-sales engagement",
        description:
          "Engage website visitors at key consideration moments with proactive live chat to answer product questions and guide decisions.",
      },
      {
        title: "Onboarding and success interactions",
        description:
          "Support new customers through onboarding with timely live chat outreach triggered by product usage signals.",
      },
    ],
    faqs: [
      {
        question: "Can RicozChat integrate with our existing support platform?",
        answer:
          "Yes. RicozChat integrates with major support platforms so that escalated chat conversations can be converted to tickets with full transcript history.",
      },
      {
        question: "Does RicozChat support chatbot or automated responses?",
        answer:
          "RicozChat supports initial automated responses and routing logic before human agent handoff, with configurable bot-to-agent escalation paths.",
      },
      {
        question: "How does RicozChat handle high-volume periods?",
        answer:
          "RicozChat includes queue management, wait time communication, and load balancing tools to maintain service quality during peak demand.",
      },
    ],
    relatedProducts: ["rico-desk", "rico-know", "rico-journey"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozChat — Enterprise Live Messaging & Customer Chat | Ricoz",
      description:
        "RicozChat delivers real-time customer messaging with proactive engagement, intelligent routing, and full conversation context.",
    },
  },
  {
    id: "rico-know",
    slug: "rico-know",
    name: "RicozKnow",
    category: "Customer Experience",
    tagline: "Enterprise knowledge base and self-service",
    shortDescription:
      "A knowledge management platform that gives customers and support teams structured access to accurate, up-to-date information through governed self-service experiences.",
    heroStatement:
      "Put the right answer in front of every customer — before they need to ask.",
    overview:
      "RicozKnow is an enterprise knowledge base platform for organisations that need to scale support capacity without scaling headcount. It provides a governed environment for creating, maintaining, and delivering product and service knowledge to customers through self-service portals and support team interfaces — reducing ticket volume, accelerating resolution, and improving consistency across every support interaction.",
    capabilities: [
      "Knowledge article creation and governance",
      "Self-service customer portal",
      "Knowledge search and discovery",
      "Article performance and gap analytics",
      "Agent knowledge integration",
    ],
    benefits: [
      {
        title: "Deflect support volume",
        description:
          "Resolve common questions through self-service, reducing ticket volume and freeing agents for complex, high-value interactions.",
      },
      {
        title: "Consistent answers",
        description:
          "Ensure every customer and agent accesses the same authoritative, version-controlled information regardless of the channel.",
      },
      {
        title: "Continuous improvement",
        description:
          "Identify knowledge gaps and outdated content through search and deflection analytics, keeping the knowledge base accurate and useful.",
      },
    ],
    features: [
      {
        name: "Knowledge Studio",
        description:
          "Create, structure, and maintain knowledge articles with rich content editing, versioning, review workflows, and expiry management.",
      },
      {
        name: "Self-Service Portal",
        description:
          "A configurable branded portal where customers can search and browse product documentation, guides, and FAQs without contacting support.",
      },
      {
        name: "Search Intelligence",
        description:
          "Deliver contextually relevant article suggestions using intent-based search with synonym support and configurable ranking.",
      },
      {
        name: "Content Analytics",
        description:
          "Track article views, search queries, deflection rates, and knowledge gap signals to continuously improve content coverage.",
      },
    ],
    useCases: [
      {
        title: "Customer self-service",
        description:
          "Provide customers with a structured, searchable knowledge portal that resolves common questions without requiring agent involvement.",
      },
      {
        title: "Agent-assisted knowledge",
        description:
          "Surface relevant knowledge articles within the agent support interface so agents can respond accurately and consistently.",
      },
      {
        title: "Product and service documentation",
        description:
          "Maintain and publish comprehensive product documentation, release notes, and guides through a governed knowledge management platform.",
      },
    ],
    faqs: [
      {
        question: "Can RicozKnow integrate with our support platform?",
        answer:
          "Yes. RicozKnow integrates with support platforms to surface relevant articles within the agent interface and to measure ticket deflection rates.",
      },
      {
        question: "How are article review and expiry managed?",
        answer:
          "RicozKnow supports configurable review cycles and expiry dates for articles, with automated reminders to content owners when reviews are due.",
      },
      {
        question: "Does RicozKnow support multiple languages?",
        answer:
          "Yes. RicozKnow supports multi-language knowledge management with localised articles, language-specific portals, and translation workflow integration.",
      },
    ],
    relatedProducts: ["rico-desk", "rico-chat", "rico-portal"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozKnow — Enterprise Knowledge Base & Self-Service | Ricoz",
      description:
        "RicozKnow delivers governed knowledge management and customer self-service with structured content, intelligent search, and deflection analytics.",
    },
  },
  {
    id: "rico-feedback",
    slug: "rico-feedback",
    name: "RicozFeedback",
    category: "Customer Experience",
    tagline: "Customer feedback and experience measurement",
    shortDescription:
      "A customer feedback platform that captures, analyses, and operationalises experience signals across every touchpoint in the customer lifecycle.",
    heroStatement: "Listen to every customer — and act on what you hear.",
    overview:
      "RicozFeedback is an enterprise customer feedback and experience measurement platform that gives CX, service, and product teams a structured approach to capturing and acting on customer sentiment. It supports survey design, multi-channel feedback collection, NPS/CSAT/CES measurement, response analysis, and closed-loop workflows that ensure feedback drives real operational improvement.",
    capabilities: [
      "Multi-channel feedback collection",
      "NPS, CSAT, and CES measurement",
      "Response analysis and text analytics",
      "Closed-loop follow-up management",
      "CX trend reporting and benchmarking",
    ],
    benefits: [
      {
        title: "Systematic listening",
        description:
          "Capture feedback at every key touchpoint rather than relying on unsolicited responses or periodic surveys.",
      },
      {
        title: "Actionable intelligence",
        description:
          "Surface the patterns, themes, and individual cases behind satisfaction scores to drive meaningful improvements.",
      },
      {
        title: "Closed-loop accountability",
        description:
          "Ensure every detractor and at-risk response triggers a follow-up workflow so no feedback goes unaddressed.",
      },
    ],
    features: [
      {
        name: "Survey Builder",
        description:
          "Design branded surveys with NPS, CSAT, CES, and custom question formats, with logic branching and multi-language support.",
      },
      {
        name: "Feedback Collection Hub",
        description:
          "Collect feedback through email, SMS, web embed, in-app, and post-interaction triggers from a single governed platform.",
      },
      {
        name: "Text Analytics Engine",
        description:
          "Analyse open-text responses for themes, sentiment, and topic clustering to extract qualitative insight at scale.",
      },
      {
        name: "Closed-Loop Manager",
        description:
          "Assign follow-up tasks to account or service owners when feedback meets configurable risk thresholds, with tracking and resolution reporting.",
      },
    ],
    useCases: [
      {
        title: "Post-interaction satisfaction measurement",
        description:
          "Measure customer satisfaction immediately after support interactions, sales engagements, and onboarding milestones.",
      },
      {
        title: "Relationship NPS programmes",
        description:
          "Run periodic relationship NPS surveys across the customer base to measure loyalty trends and identify at-risk accounts.",
      },
      {
        title: "Product experience feedback",
        description:
          "Capture in-product feedback from active users to inform product priorities and identify friction points in the user experience.",
      },
    ],
    faqs: [
      {
        question:
          "Can RicozFeedback trigger surveys automatically after key events?",
        answer:
          "Yes. RicozFeedback supports event-triggered survey distribution connected to CRM, support, and product data to collect feedback at the right moments.",
      },
      {
        question: "How does text analytics work for open responses?",
        answer:
          "RicozFeedback analyses open-text responses using configurable topic models and sentiment classification to extract structured insight from unstructured feedback.",
      },
      {
        question: "Does RicozFeedback integrate with our CRM?",
        answer:
          "Yes. RicozFeedback syncs survey responses and satisfaction scores to CRM account and contact records for full customer health context.",
      },
    ],
    relatedProducts: ["rico-desk", "rico-success", "rico-crm"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozFeedback — Customer Feedback & Experience Measurement | Ricoz",
      description:
        "RicozFeedback captures and operationalises customer experience signals with NPS, CSAT, text analytics, and closed-loop management.",
    },
  },
  {
    id: "rico-portal",
    slug: "rico-portal",
    name: "RicozPortal",
    category: "Customer Experience",
    tagline: "Customer self-service and account management portal",
    shortDescription:
      "A branded customer portal platform that gives enterprise customers a secure, unified self-service environment for account management, request tracking, and resource access.",
    heroStatement:
      "Give customers the control they expect — with the governance your business requires.",
    overview:
      "RicozPortal is a customer-facing self-service portal platform for enterprise organisations that need to deliver a structured, branded digital experience to their customers. It provides account management, support request tracking, document access, billing visibility, and knowledge integration in a secure portal that reduces support load while improving customer autonomy and satisfaction.",
    capabilities: [
      "Self-service account and subscription management",
      "Support ticket submission and tracking",
      "Document and contract access",
      "Billing and invoice visibility",
      "Knowledge and resource library integration",
    ],
    benefits: [
      {
        title: "Customer autonomy",
        description:
          "Empower customers to manage their own account, track requests, and access information without depending on support contacts.",
      },
      {
        title: "Reduced support load",
        description:
          "Deflect routine enquiries and requests through structured self-service, allowing support teams to focus on complex issues.",
      },
      {
        title: "Consistent experience",
        description:
          "Deliver a governed, branded portal experience that reflects your service standards and keeps customers engaged.",
      },
    ],
    features: [
      {
        name: "Portal Builder",
        description:
          "Configure a branded, role-based self-service portal with custom navigation, permissions, and integration with back-end systems.",
      },
      {
        name: "Request Management",
        description:
          "Allow customers to submit, track, and manage support requests and service orders with full status visibility.",
      },
      {
        name: "Document Centre",
        description:
          "Provide secure customer access to contracts, invoices, reports, and resources with permission-controlled visibility.",
      },
      {
        name: "Account Dashboard",
        description:
          "A personalised customer overview of account status, recent activity, open requests, and key metrics relevant to their relationship.",
      },
    ],
    useCases: [
      {
        title: "Enterprise customer portals",
        description:
          "Launch a governed customer portal for enterprise accounts to manage their relationship, access documentation, and submit requests.",
      },
      {
        title: "Partner and reseller portal",
        description:
          "Provide partners with a dedicated portal for deal registration, resource access, support requests, and performance reporting.",
      },
      {
        title: "Service request management",
        description:
          "Allow customers to submit, track, and close service requests through a structured portal without relying on email or phone.",
      },
    ],
    faqs: [
      {
        question: "Can RicozPortal be branded to our own identity?",
        answer:
          "Yes. RicozPortal is fully brandable with custom domain, logo, colour scheme, and navigation structure to match your customer experience standards.",
      },
      {
        question: "How is access control managed for different customer types?",
        answer:
          "RicozPortal uses configurable role and permission structures to control which features, documents, and data each customer type can access.",
      },
      {
        question:
          "Does RicozPortal integrate with our support and billing platforms?",
        answer:
          "Yes. RicozPortal integrates with support, billing, and CRM platforms to pull live ticket, invoice, and account data into the customer-facing portal.",
      },
    ],
    relatedProducts: ["rico-desk", "rico-know", "rico-feedback"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozPortal — Enterprise Customer Self-Service Portal | Ricoz",
      description:
        "RicozPortal delivers branded self-service portals with account management, request tracking, document access, and knowledge integration.",
    },
  },
  {
    id: "rico-success",
    slug: "rico-success",
    name: "RicozSuccess",
    category: "Customer Experience",
    tagline: "Customer success and retention management",
    shortDescription:
      "A customer success platform that gives enterprise teams the visibility, playbooks, and tooling to proactively manage customer health, drive adoption, and protect retention.",
    heroStatement:
      "Turn every customer relationship into a long-term success story.",
    overview:
      "RicozSuccess is a customer success management platform built for enterprise organisations with complex, high-value customer bases. It provides health scoring, lifecycle stage management, intervention playbooks, renewal tracking, and expansion opportunity identification — giving customer success teams the structure to manage large portfolios proactively rather than reactively.",
    capabilities: [
      "Customer health scoring and monitoring",
      "Lifecycle stage management",
      "Intervention playbooks and task management",
      "Renewal and churn risk tracking",
      "Expansion opportunity identification",
    ],
    benefits: [
      {
        title: "Proactive retention",
        description:
          "Identify at-risk customers before churn occurs using health scoring and early warning signals, not renewal-date surprises.",
      },
      {
        title: "Portfolio scalability",
        description:
          "Manage large customer portfolios systematically with health dashboards, prioritisation rules, and playbook-driven workflows.",
      },
      {
        title: "Revenue protection",
        description:
          "Connect customer health to renewal and expansion revenue with structured renewal tracking and risk-based forecasting.",
      },
    ],
    features: [
      {
        name: "Health Score Engine",
        description:
          "Define customer health scores from usage, support, NPS, engagement, and commercial signals with configurable weighting and segment rules.",
      },
      {
        name: "Lifecycle Manager",
        description:
          "Track customers through defined lifecycle stages — onboarding, adoption, growth, renewal — with stage-specific objectives and milestone tracking.",
      },
      {
        name: "Playbook Engine",
        description:
          "Create and execute structured playbooks for onboarding, at-risk intervention, renewal, and expansion scenarios with task assignment and tracking.",
      },
      {
        name: "Renewal Dashboard",
        description:
          "Monitor upcoming renewals, churn risk indicators, and expansion opportunities across the entire customer portfolio.",
      },
    ],
    useCases: [
      {
        title: "At-risk customer management",
        description:
          "Identify and actively manage customers showing churn risk signals with structured intervention playbooks and escalation workflows.",
      },
      {
        title: "Onboarding programme management",
        description:
          "Execute structured onboarding programmes with milestone tracking, task management, and health monitoring from activation through adoption.",
      },
      {
        title: "Renewal pipeline management",
        description:
          "Manage the full renewal pipeline with health context, risk scoring, and structured renewal plays for the customer success team.",
      },
    ],
    faqs: [
      {
        question: "What data sources feed into customer health scores?",
        answer:
          "RicozSuccess aggregates data from CRM, product usage, support, billing, and NPS platforms to calculate multi-dimensional health scores for each customer.",
      },
      {
        question: "How does RicozSuccess handle large CSM team portfolios?",
        answer:
          "RicozSuccess includes portfolio management views, prioritisation dashboards, and workload distribution tools that allow CSMs to manage large customer bases efficiently.",
      },
      {
        question: "Can RicozSuccess integrate with our CRM for renewal data?",
        answer:
          "Yes. RicozSuccess integrates with major CRM platforms to sync renewal dates, contract values, and expansion opportunities alongside health scoring data.",
      },
    ],
    relatedProducts: ["rico-crm", "rico-feedback", "rico-revenue"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozSuccess — Customer Success & Retention Management | Ricoz",
      description:
        "RicozSuccess manages enterprise customer health, lifecycle stages, renewal risk, and expansion opportunities with structured playbooks.",
    },
  },

  // ─── Batch 02: Finance & Accounting ────────────────────────────────────────

  {
    id: "rico-books",
    slug: "rico-books",
    name: "RicozBooks",
    category: "Finance & Accounting",
    tagline: "Core accounting and financial operations",
    shortDescription:
      "A core accounting platform that gives enterprise finance teams a governed, auditable environment for managing the general ledger, financial close, and reporting.",
    heroStatement:
      "Manage the books with precision — and close with confidence every period.",
    overview:
      "RicozBooks is an enterprise accounting platform built for finance teams managing multi-entity, multi-currency accounting operations with rigorous audit and compliance requirements. It provides general ledger management, journal entry governance, period-end close management, and financial reporting in a structured environment that supports both operational accuracy and executive visibility.",
    capabilities: [
      "General ledger and chart of accounts management",
      "Journal entry creation and approval",
      "Multi-entity and multi-currency accounting",
      "Period-end close management",
      "Financial reporting and trial balance",
    ],
    benefits: [
      {
        title: "Audit-ready records",
        description:
          "Maintain a complete, immutable transaction history with approval trails that support external audit and regulatory compliance.",
      },
      {
        title: "Close efficiency",
        description:
          "Run structured, consistent period-end close processes with task management, checklists, and real-time visibility into close status.",
      },
      {
        title: "Multi-entity clarity",
        description:
          "Manage complex multi-entity structures with intercompany eliminations and consolidated reporting in one governed environment.",
      },
    ],
    features: [
      {
        name: "General Ledger",
        description:
          "Manage the full general ledger with configurable chart of accounts, dimension tagging, and transaction-level drill-through.",
      },
      {
        name: "Journal Management",
        description:
          "Create, review, and approve manual and automated journal entries with configurable approval workflows and audit trail.",
      },
      {
        name: "Close Manager",
        description:
          "Orchestrate the period-end close with task lists, preparer-reviewer workflows, and status dashboards for finance leadership.",
      },
      {
        name: "Financial Reporting",
        description:
          "Generate profit and loss, balance sheet, and cash flow statements with configurable layouts, entity views, and comparison periods.",
      },
    ],
    useCases: [
      {
        title: "Multi-entity accounting operations",
        description:
          "Manage accounting across multiple legal entities with shared or separate charts of accounts, intercompany transactions, and consolidated reporting.",
      },
      {
        title: "Audit preparation",
        description:
          "Maintain the complete documentation trail required for external audit with journal approval records, reconciliation evidence, and period close certification.",
      },
      {
        title: "Financial close management",
        description:
          "Run a controlled, documented financial close process with task accountability, bottleneck visibility, and sign-off management.",
      },
    ],
    faqs: [
      {
        question: "Does RicozBooks support multi-currency accounting?",
        answer:
          "Yes. RicozBooks supports transactions in multiple currencies with configurable exchange rate management and currency gain/loss accounting.",
      },
      {
        question: "How does RicozBooks handle intercompany transactions?",
        answer:
          "RicozBooks supports intercompany transaction management with configurable elimination rules for consolidated financial reporting across entities.",
      },
      {
        question: "Can RicozBooks integrate with our ERP?",
        answer:
          "Yes. RicozBooks provides integration capabilities with enterprise ERP platforms for data synchronisation, subledger reconciliation, and reporting consolidation.",
      },
    ],
    relatedProducts: ["rico-invoice", "rico-expense", "rico-financials"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozBooks — Enterprise Accounting & Financial Operations | Ricoz",
      description:
        "RicozBooks manages the general ledger, period-end close, and financial reporting for enterprise multi-entity accounting operations.",
    },
  },
  {
    id: "rico-invoice",
    slug: "rico-invoice",
    name: "RicozInvoice",
    category: "Finance & Accounting",
    tagline: "Accounts receivable and invoice management",
    shortDescription:
      "An enterprise invoicing platform for managing the full accounts receivable cycle — from invoice generation and delivery through payment collection and reconciliation.",
    heroStatement:
      "Invoice accurately, collect efficiently, reconcile confidently.",
    overview:
      "RicozInvoice is an enterprise accounts receivable and invoice management platform that streamlines the creation, delivery, and collection of customer invoices at scale. It replaces manual and fragmented AR processes with a governed invoicing environment covering invoice generation, delivery, payment processing, dunning management, and receivables reconciliation.",
    capabilities: [
      "Invoice generation and delivery",
      "Accounts receivable management",
      "Payment collection and processing",
      "Dunning and collections management",
      "Receivables reporting and cash forecasting",
    ],
    benefits: [
      {
        title: "Faster collection",
        description:
          "Reduce days sales outstanding by automating invoice delivery, payment reminders, and collections workflows.",
      },
      {
        title: "Revenue accuracy",
        description:
          "Ensure every completed sale is invoiced correctly and promptly with automated invoice generation from contract and order data.",
      },
      {
        title: "Receivables visibility",
        description:
          "Maintain real-time visibility into outstanding receivables, overdue balances, and expected cash inflows.",
      },
    ],
    features: [
      {
        name: "Invoice Builder",
        description:
          "Generate branded invoices from contracts, orders, or manual entry with configurable templates, tax rules, and line item management.",
      },
      {
        name: "AR Ledger",
        description:
          "Manage outstanding receivables with customer-level balance visibility, ageing analysis, and payment matching.",
      },
      {
        name: "Collections Manager",
        description:
          "Automate dunning sequences with configurable reminder schedules, escalation rules, and collector task management.",
      },
      {
        name: "Cash Forecast",
        description:
          "Project expected cash inflows from the receivables ledger with overdue weighting and payment probability adjustments.",
      },
    ],
    useCases: [
      {
        title: "High-volume invoice management",
        description:
          "Process large volumes of customer invoices with automated generation, delivery, and reconciliation to reduce manual AR workload.",
      },
      {
        title: "Collections process management",
        description:
          "Run structured collections programmes for overdue receivables with automated dunning, escalation, and collector workflow management.",
      },
      {
        title: "Revenue recognition support",
        description:
          "Maintain accurate invoice and payment records to support revenue recognition and financial audit requirements.",
      },
    ],
    faqs: [
      {
        question:
          "Can RicozInvoice generate invoices automatically from sales orders?",
        answer:
          "Yes. RicozInvoice integrates with CRM and order management systems to generate invoices automatically when trigger conditions such as order completion or milestone billing are met.",
      },
      {
        question: "What payment methods does RicozInvoice support?",
        answer:
          "RicozInvoice supports payment reconciliation for bank transfer, card, direct debit, and electronic payment methods through configurable payment gateway integrations.",
      },
      {
        question: "How does dunning management work?",
        answer:
          "RicozInvoice supports multi-step dunning sequences with configurable communication templates, escalation rules, and collector task assignments triggered by payment overdue age.",
      },
    ],
    relatedProducts: ["rico-books", "rico-billing", "rico-financials"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozInvoice — Enterprise Accounts Receivable & Invoicing | Ricoz",
      description:
        "RicozInvoice manages enterprise invoicing, accounts receivable, collections, and cash forecasting from generation to reconciliation.",
    },
  },
  {
    id: "rico-expense",
    slug: "rico-expense",
    name: "RicozExpense",
    category: "Finance & Accounting",
    tagline: "Employee expense management and control",
    shortDescription:
      "An enterprise expense management platform that automates employee expense capture, policy enforcement, approval workflows, and reimbursement across the organisation.",
    heroStatement:
      "Control spend at source — with zero compromise on employee experience.",
    overview:
      "RicozExpense is an enterprise expense management platform that replaces paper receipts and spreadsheet submissions with a structured digital process for capturing, verifying, approving, and reimbursing employee expenses. It enforces expense policies automatically, routes claims through configured approval chains, and provides finance teams with complete spend visibility and audit-ready records.",
    capabilities: [
      "Digital expense capture and receipt management",
      "Policy enforcement and violation detection",
      "Approval workflow management",
      "Reimbursement processing",
      "Expense analytics and spend reporting",
    ],
    benefits: [
      {
        title: "Policy compliance",
        description:
          "Enforce expense policies automatically at the point of submission, reducing non-compliant claims before they reach approvers.",
      },
      {
        title: "Faster reimbursement",
        description:
          "Accelerate the time from submission to reimbursement with automated approval routing and payment integration.",
      },
      {
        title: "Spend visibility",
        description:
          "Provide finance leaders with real-time visibility into employee spend by category, department, and cost centre.",
      },
    ],
    features: [
      {
        name: "Expense Capture",
        description:
          "Mobile and web expense submission with receipt scanning, automatic data extraction, and mileage calculation.",
      },
      {
        name: "Policy Engine",
        description:
          "Configure expense policies by category, amount, and employee type with automatic flagging of non-compliant submissions.",
      },
      {
        name: "Approval Workflow",
        description:
          "Route expense reports through configurable approval chains based on amount, department, and cost centre with delegation management.",
      },
      {
        name: "Spend Analytics",
        description:
          "Report on expense spend by category, cost centre, employee, and period with policy compliance and budget tracking.",
      },
    ],
    useCases: [
      {
        title: "Employee expense processing",
        description:
          "Automate the full expense lifecycle from receipt capture through policy verification, approval, and reimbursement.",
      },
      {
        title: "Travel and entertainment management",
        description:
          "Enforce T&E policies, capture travel spend, and maintain complete audit records for all business travel and entertainment claims.",
      },
      {
        title: "Project cost allocation",
        description:
          "Allocate employee expense claims to projects and cost centres automatically to support project accounting and client billing.",
      },
    ],
    faqs: [
      {
        question: "Does RicozExpense support corporate card reconciliation?",
        answer:
          "Yes. RicozExpense supports corporate card feed integration, allowing card transactions to be matched against submitted expenses for automatic reconciliation.",
      },
      {
        question: "How are expense policy violations handled?",
        answer:
          "RicozExpense flags policy violations automatically at submission with configurable outcomes including warnings, blocks, and mandatory manager justification fields.",
      },
      {
        question: "Can RicozExpense integrate with our accounting platform?",
        answer:
          "Yes. RicozExpense exports approved and reimbursed expense data to accounting systems with cost centre coding and journal entry generation.",
      },
    ],
    relatedProducts: ["rico-books", "rico-budget", "rico-procure"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozExpense — Enterprise Expense Management Platform | Ricoz",
      description:
        "RicozExpense automates employee expense capture, policy enforcement, approval workflows, and reimbursement across the enterprise.",
    },
  },
  {
    id: "rico-budget",
    slug: "rico-budget",
    name: "RicozBudget",
    category: "Finance & Accounting",
    tagline: "Financial planning, budgeting, and forecasting",
    shortDescription:
      "An enterprise budgeting platform that replaces spreadsheet-based planning with a governed, collaborative financial planning and forecasting environment.",
    heroStatement:
      "Plan with precision, forecast with confidence, govern with control.",
    overview:
      "RicozBudget is an enterprise financial planning and budgeting platform that gives finance teams a structured, collaborative environment for annual budget creation, rolling forecast management, and variance analysis. It replaces fragmented spreadsheet processes with a governed planning model that gives business units the flexibility to plan while maintaining central control and consolidation.",
    capabilities: [
      "Annual budget planning and submission",
      "Rolling forecast management",
      "Budget versus actual variance analysis",
      "Scenario and sensitivity modelling",
      "Budget consolidation and reporting",
    ],
    benefits: [
      {
        title: "Planning efficiency",
        description:
          "Replace manual spreadsheet coordination with a structured, version-controlled planning environment that saves weeks in the budget cycle.",
      },
      {
        title: "Forecast accuracy",
        description:
          "Move from annual budgets to continuous rolling forecasts that reflect current business realities rather than prior-year assumptions.",
      },
      {
        title: "Variance clarity",
        description:
          "Surface budget versus actual variances at every level of the organisation with drill-down to the underlying transactions.",
      },
    ],
    features: [
      {
        name: "Budget Builder",
        description:
          "Configure multi-dimensional budget structures with driver-based inputs, allocation rules, and version management across planning cycles.",
      },
      {
        name: "Rolling Forecast Engine",
        description:
          "Maintain and update rolling forecasts with actual data integration, analyst adjustments, and automated period-close roll-forwards.",
      },
      {
        name: "Variance Dashboard",
        description:
          "Track budget versus actual performance by cost centre, department, and line with automated variance flagging and commentary.",
      },
      {
        name: "Scenario Modeller",
        description:
          "Build and compare multiple planning scenarios with assumption management and impact analysis for strategic decision support.",
      },
    ],
    useCases: [
      {
        title: "Annual budget cycle management",
        description:
          "Run the full annual budget process with structured submissions, consolidation, review workflows, and approval management.",
      },
      {
        title: "Rolling forecast programmes",
        description:
          "Replace static annual budgets with dynamic rolling forecasts that are updated continuously using actual results and business intelligence.",
      },
      {
        title: "Departmental budget governance",
        description:
          "Give business unit owners structured budget inputs with guardrails, while maintaining finance control over consolidation and approval.",
      },
    ],
    faqs: [
      {
        question:
          "Can RicozBudget connect to our accounting platform for actuals?",
        answer:
          "Yes. RicozBudget integrates with accounting and ERP platforms to import actual financial data automatically for variance reporting and forecast updates.",
      },
      {
        question: "How does driver-based budgeting work?",
        answer:
          "RicozBudget supports driver-based models where business inputs such as headcount, revenue, or volume drive calculated financial outputs through configurable formula rules.",
      },
      {
        question: "Does RicozBudget support workforce planning?",
        answer:
          "RicozBudget includes a workforce planning module for headcount budgeting, salary planning, and people-cost modelling as part of the overall financial plan.",
      },
    ],
    relatedProducts: ["rico-books", "rico-financials", "rico-spend"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozBudget — Enterprise Financial Planning & Budgeting | Ricoz",
      description:
        "RicozBudget replaces spreadsheet budgeting with governed financial planning, rolling forecasts, and variance analysis for enterprise finance teams.",
    },
  },
  {
    id: "rico-billing",
    slug: "rico-billing",
    name: "RicozBilling",
    category: "Finance & Accounting",
    tagline: "Subscription and usage-based billing management",
    shortDescription:
      "An enterprise billing platform for managing complex subscription, usage-based, and milestone billing models with automated invoicing and revenue operations support.",
    heroStatement:
      "Bill every customer accurately — regardless of how complex the model.",
    overview:
      "RicozBilling is an enterprise billing platform designed for organisations running complex pricing and billing models including subscriptions, usage-based consumption, milestone billing, and hybrid structures. It automates billing calculation, invoice generation, payment collection, and revenue reporting — reducing billing errors, accelerating cash collection, and providing finance with accurate revenue data.",
    capabilities: [
      "Subscription and recurring billing management",
      "Usage-based billing and metering",
      "Milestone and project billing",
      "Automated invoice generation",
      "Revenue and billing analytics",
    ],
    benefits: [
      {
        title: "Billing accuracy",
        description:
          "Calculate complex subscription, usage, and milestone billing automatically, eliminating manual billing errors and credit note cycles.",
      },
      {
        title: "Revenue velocity",
        description:
          "Generate and deliver invoices as soon as billing milestones are reached rather than on manual billing runs.",
      },
      {
        title: "Model flexibility",
        description:
          "Support diverse billing structures — from simple subscriptions to complex consumption-based or project milestone models — in one platform.",
      },
    ],
    features: [
      {
        name: "Billing Engine",
        description:
          "Configure and automate billing calculations for subscription, usage, tiered, and milestone billing models with event-based triggers.",
      },
      {
        name: "Subscription Manager",
        description:
          "Manage the full subscription lifecycle including provisioning, upgrades, downgrades, pauses, and cancellations with automated billing adjustments.",
      },
      {
        name: "Usage Metering",
        description:
          "Ingest usage data from product and service systems to calculate consumption-based charges with configurable measurement and rounding rules.",
      },
      {
        name: "Revenue Analytics",
        description:
          "Track MRR, ARR, churn, expansion, and billing exceptions with real-time revenue performance dashboards.",
      },
    ],
    useCases: [
      {
        title: "SaaS subscription billing",
        description:
          "Automate subscription billing across multiple plans, billing cycles, and add-on structures with proration and change management.",
      },
      {
        title: "Usage-based product billing",
        description:
          "Meter product consumption, apply tiered pricing structures, and generate accurate usage invoices without manual calculation.",
      },
      {
        title: "Professional services milestone billing",
        description:
          "Manage project-based and milestone-triggered billing for services engagements with approval workflows and invoice automation.",
      },
    ],
    faqs: [
      {
        question: "Can RicozBilling handle mid-cycle subscription changes?",
        answer:
          "Yes. RicozBilling calculates proration automatically for upgrades, downgrades, and cancellations mid-billing cycle with configurable proration methods.",
      },
      {
        question: "How does usage metering work for consumption billing?",
        answer:
          "RicozBilling accepts usage event data via API or file import, aggregates consumption by billing period, and applies configured pricing tiers to calculate charges.",
      },
      {
        question: "Does RicozBilling integrate with our accounting platform?",
        answer:
          "Yes. RicozBilling exports invoice and payment data to accounting systems with revenue recognition entries, supporting accurate financial reporting.",
      },
    ],
    relatedProducts: ["rico-invoice", "rico-books", "rico-revenue"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozBilling — Enterprise Subscription & Usage Billing | Ricoz",
      description:
        "RicozBilling automates subscription, usage-based, and milestone billing with accurate invoicing and revenue operations analytics.",
    },
  },
  {
    id: "rico-procure",
    slug: "rico-procure",
    name: "RicozProcure",
    category: "Finance & Accounting",
    tagline: "Purchase-to-pay and procurement management",
    shortDescription:
      "An enterprise procurement platform that governs the full purchase-to-pay cycle — from requisition and supplier selection through purchase order management and accounts payable.",
    heroStatement:
      "Control every purchase decision — and pay every supplier with precision.",
    overview:
      "RicozProcure is an enterprise purchase-to-pay platform that gives finance and procurement teams a governed environment for managing the full procurement lifecycle. It covers requisition management, supplier management, purchase order creation and approval, goods receipt, invoice matching, and accounts payable — replacing fragmented processes with a controlled, auditable procurement operation.",
    capabilities: [
      "Purchase requisition and approval",
      "Supplier management and onboarding",
      "Purchase order management",
      "Three-way invoice matching",
      "Accounts payable management",
    ],
    benefits: [
      {
        title: "Spend control",
        description:
          "Ensure every purchase goes through an approved process with defined approvers, budget checks, and supplier validation before commitment.",
      },
      {
        title: "AP efficiency",
        description:
          "Automate invoice matching and payment scheduling to reduce manual AP processing and supplier payment delays.",
      },
      {
        title: "Compliance and audit",
        description:
          "Maintain a complete procurement audit trail from requisition through payment for compliance and financial governance.",
      },
    ],
    features: [
      {
        name: "Requisition Manager",
        description:
          "Structured purchase requisition process with configurable approval chains, budget availability checks, and supplier category rules.",
      },
      {
        name: "Supplier Portal",
        description:
          "Onboard, validate, and manage suppliers with performance tracking, document management, and approval status governance.",
      },
      {
        name: "Purchase Order Hub",
        description:
          "Generate, manage, and track purchase orders with version control, supplier confirmation, and change order management.",
      },
      {
        name: "Invoice Matching Engine",
        description:
          "Match supplier invoices against purchase orders and goods receipts with automated three-way matching and exception management.",
      },
    ],
    useCases: [
      {
        title: "Enterprise procurement governance",
        description:
          "Establish a governed purchase-to-pay process with approval controls, budget visibility, and supplier validation across the organisation.",
      },
      {
        title: "Supplier relationship management",
        description:
          "Manage supplier onboarding, performance monitoring, and contract compliance within an integrated procurement environment.",
      },
      {
        title: "Accounts payable automation",
        description:
          "Automate invoice receipt, matching, and payment scheduling to reduce manual AP workload and improve supplier payment accuracy.",
      },
    ],
    faqs: [
      {
        question: "How does three-way matching work in RicozProcure?",
        answer:
          "RicozProcure matches supplier invoices against purchase orders and goods/service receipt confirmations automatically, flagging discrepancies for manual review before payment.",
      },
      {
        question: "Can RicozProcure manage preferred supplier agreements?",
        answer:
          "Yes. RicozProcure supports preferred supplier catalogues, contracted price lists, and policy rules that guide purchasing teams toward approved suppliers and negotiated rates.",
      },
      {
        question: "Does RicozProcure integrate with our accounting system?",
        answer:
          "Yes. RicozProcure exports approved payables and payment data to accounting platforms with cost centre coding and journal entry generation.",
      },
    ],
    relatedProducts: ["rico-books", "rico-expense", "rico-spend"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozProcure — Enterprise Purchase-to-Pay & Procurement | Ricoz",
      description:
        "RicozProcure governs the full procurement lifecycle from requisition through purchase order management, invoice matching, and accounts payable.",
    },
  },
  {
    id: "rico-spend",
    slug: "rico-spend",
    name: "RicozSpend",
    category: "Finance & Accounting",
    tagline: "Spend analytics and financial intelligence",
    shortDescription:
      "An enterprise spend analytics platform that gives finance and procurement teams unified visibility into organisational spend across all categories, suppliers, and cost centres.",
    heroStatement: "See exactly where money goes — and make every pound count.",
    overview:
      "RicozSpend is an enterprise spend analytics platform that consolidates spend data from procurement, accounts payable, expenses, and card programmes into a unified analytical environment. It gives finance and procurement leadership the visibility to identify cost reduction opportunities, supplier consolidation potential, and budget performance issues across the entire organisation.",
    capabilities: [
      "Multi-source spend data consolidation",
      "Spend categorisation and classification",
      "Supplier spend analysis",
      "Cost centre and budget performance tracking",
      "Savings opportunity identification",
    ],
    benefits: [
      {
        title: "Unified visibility",
        description:
          "Consolidate spend from all sources into a single view, eliminating blind spots from fragmented data across systems.",
      },
      {
        title: "Cost reduction insight",
        description:
          "Identify consolidation opportunities, maverick spend patterns, and supplier renegotiation candidates through structured spend analytics.",
      },
      {
        title: "Budget accountability",
        description:
          "Track spend against budget in real time across every cost centre and category with automated variance alerting.",
      },
    ],
    features: [
      {
        name: "Spend Data Hub",
        description:
          "Ingest and normalise spend data from procurement, AP, expense, and card platforms into a unified, cleansed analytical dataset.",
      },
      {
        name: "Spend Classification Engine",
        description:
          "Classify all spend transactions against a configurable taxonomy with automated categorisation and exception management.",
      },
      {
        name: "Supplier Analysis",
        description:
          "Analyse spend concentration, supplier performance, and consolidation opportunities across the supplier base with configurable benchmarks.",
      },
      {
        name: "Savings Tracker",
        description:
          "Identify, track, and report on savings initiatives from opportunity identification through validated achievement.",
      },
    ],
    useCases: [
      {
        title: "Procurement strategy development",
        description:
          "Build a comprehensive picture of organisational spend to inform category strategies, sourcing priorities, and supplier negotiations.",
      },
      {
        title: "Cost reduction programmes",
        description:
          "Identify and track cost reduction opportunities across the spend base with structured programme management and savings reporting.",
      },
      {
        title: "Finance cost governance",
        description:
          "Monitor spend against budget across every cost centre in real time, with drill-down to individual transactions and supplier details.",
      },
    ],
    faqs: [
      {
        question: "What data sources does RicozSpend connect to?",
        answer:
          "RicozSpend integrates with procurement, AP, expense, corporate card, and ERP platforms to consolidate spend data from every relevant system.",
      },
      {
        question: "How does spend categorisation work?",
        answer:
          "RicozSpend applies a configurable spend taxonomy to classify incoming transactions using a combination of supplier mapping, GL code matching, and rule-based classification.",
      },
      {
        question: "Can RicozSpend support multiple entities and currencies?",
        answer:
          "Yes. RicozSpend handles multi-entity and multi-currency spend with configurable currency conversion and entity-level reporting alongside consolidated views.",
      },
    ],
    relatedProducts: ["rico-books", "rico-budget", "rico-procure"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozSpend — Enterprise Spend Analytics & Intelligence | Ricoz",
      description:
        "RicozSpend consolidates enterprise spend data across all sources to surface savings opportunities, supplier insights, and budget performance.",
    },
  },
  {
    id: "rico-financials",
    slug: "rico-financials",
    name: "RicozFinancials",
    category: "Finance & Accounting",
    tagline: "Financial reporting and management information",
    shortDescription:
      "An enterprise financial reporting platform that delivers consolidated management accounts, board-level reporting, and financial performance analytics across complex multi-entity organisations.",
    heroStatement:
      "Produce the financial insight leadership needs — without the manual effort.",
    overview:
      "RicozFinancials is an enterprise financial reporting and management information platform built for CFOs and finance teams who need to produce accurate, timely, and credible financial reports for leadership, boards, and external stakeholders. It consolidates financial data from accounting systems, applies management reporting rules, and delivers configurable reports, dashboards, and analytical outputs without manual spreadsheet assembly.",
    capabilities: [
      "Management accounts and MI production",
      "Consolidated financial reporting",
      "Board and executive reporting",
      "Financial KPI tracking and dashboards",
      "Variance commentary and narrative management",
    ],
    benefits: [
      {
        title: "Reporting speed",
        description:
          "Produce management accounts and board reports in hours rather than days by eliminating manual data gathering and spreadsheet assembly.",
      },
      {
        title: "Analytical depth",
        description:
          "Deliver financial reports with drill-down capability from summary KPIs to underlying transactions for thorough management review.",
      },
      {
        title: "Stakeholder confidence",
        description:
          "Produce consistently structured, accurate reports that build credibility with board members, investors, and external stakeholders.",
      },
    ],
    features: [
      {
        name: "Report Builder",
        description:
          "Design configurable financial report templates for P&L, balance sheet, cash flow, and management packs with dynamic data binding.",
      },
      {
        name: "Consolidation Engine",
        description:
          "Consolidate financial data across entities with currency translation, intercompany eliminations, and minority interest management.",
      },
      {
        name: "Executive Dashboard",
        description:
          "Real-time financial KPI dashboards for senior leadership with configurable metrics, trend views, and exception highlighting.",
      },
      {
        name: "Commentary Manager",
        description:
          "Structured variance commentary and narrative management for report packs with preparer-reviewer workflows and version control.",
      },
    ],
    useCases: [
      {
        title: "Monthly management accounts",
        description:
          "Produce consistent, timely monthly management accounts with automated data sourcing, configurable layouts, and structured commentary.",
      },
      {
        title: "Board reporting packs",
        description:
          "Generate board-level financial reporting packs with consolidated financials, KPI dashboards, and management narrative.",
      },
      {
        title: "Investor and lender reporting",
        description:
          "Produce financial reports for external stakeholders with the accuracy, structure, and supporting detail required for governance and compliance purposes.",
      },
    ],
    faqs: [
      {
        question: "What accounting systems does RicozFinancials connect to?",
        answer:
          "RicozFinancials integrates with major accounting and ERP platforms to pull trial balance, transaction, and cost centre data for reporting consolidation.",
      },
      {
        question:
          "How does RicozFinancials handle multi-currency consolidation?",
        answer:
          "RicozFinancials applies configurable currency translation rules at the entity level with period-average and closing rate options and automated translation difference calculation.",
      },
      {
        question: "Can non-finance users view executive dashboards?",
        answer:
          "Yes. RicozFinancials supports role-based access allowing executive and board members to access configured dashboards and reports without direct accounting system access.",
      },
    ],
    relatedProducts: ["rico-books", "rico-budget", "rico-spend"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozFinancials — Enterprise Financial Reporting & MI | Ricoz",
      description:
        "RicozFinancials delivers consolidated management accounts, board reporting, and financial analytics for enterprise multi-entity organisations.",
    },
  },

  // ─── Batch 03: People & HR ──────────────────────────────────────────────────

  {
    id: "rico-hr",
    slug: "rico-hr",
    name: "RicozHR",
    category: "People & HR",
    tagline: "Core HR management and employee records",
    shortDescription:
      "A core HR management platform that gives enterprise people teams a single governed environment for employee data, organisational structure, and HR operations.",
    heroStatement: "Build the foundation your people programmes depend on.",
    overview:
      "RicozHR is an enterprise core HR platform that provides the central employee data infrastructure supporting all people operations. It maintains authoritative employee records, manages organisational structures, and provides the HR operations tooling that enables effective workforce management across complex, distributed enterprises.",
    capabilities: [
      "Employee records and profile management",
      "Organisational structure and hierarchy management",
      "Position and role management",
      "HR workflow automation",
      "HR reporting and workforce analytics",
    ],
    benefits: [
      {
        title: "Single source of truth",
        description:
          "Maintain one authoritative record for every employee, eliminating data inconsistencies across downstream HR and business systems.",
      },
      {
        title: "Operational structure",
        description:
          "Manage organisational hierarchies, reporting lines, and position structures with the flexibility enterprise organisations require.",
      },
      {
        title: "HR efficiency",
        description:
          "Automate routine HR processes — employee changes, approvals, notifications — to reduce administrative burden on HR teams.",
      },
    ],
    features: [
      {
        name: "Employee Record Hub",
        description:
          "Centralised employee profiles with employment history, personal data, documents, and lifecycle event tracking.",
      },
      {
        name: "Org Structure Manager",
        description:
          "Manage organisational charts, reporting hierarchies, and position structures with drag-and-drop visualisation and version history.",
      },
      {
        name: "HR Workflow Engine",
        description:
          "Automate employee change processes including transfers, promotions, role changes, and terminations with configurable approval workflows.",
      },
      {
        name: "Workforce Analytics",
        description:
          "Track headcount, attrition, diversity, and workforce composition with configurable HR dashboards and reporting.",
      },
    ],
    useCases: [
      {
        title: "Enterprise HR data management",
        description:
          "Establish a single, governed employee data repository that serves as the master record for all HR and integrated business systems.",
      },
      {
        title: "Organisational change management",
        description:
          "Manage restructuring, acquisitions, and organisational design changes with controlled org chart management and position governance.",
      },
      {
        title: "HR operations automation",
        description:
          "Automate the administrative processes that surround employee changes, ensuring accuracy and compliance across every HR transaction.",
      },
    ],
    faqs: [
      {
        question:
          "Can RicozHR serve as the master data source for other HR systems?",
        answer:
          "Yes. RicozHR is designed as the system of record for employee data, with integration capabilities to push authoritative data to payroll, learning, and access management systems.",
      },
      {
        question: "How does RicozHR handle multi-country employee management?",
        answer:
          "RicozHR supports multi-country employee records with configurable field sets, local data requirements, and compliance attributes for different jurisdictions.",
      },
      {
        question: "Does RicozHR support manager self-service?",
        answer:
          "Yes. RicozHR includes manager self-service capabilities for viewing team information, initiating employee changes, and approving HR workflows.",
      },
    ],
    relatedProducts: ["rico-recruit", "rico-perform", "rico-people"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozHR — Core HR Management & Employee Records | Ricoz",
      description:
        "RicozHR provides enterprise core HR with centralised employee records, org management, and HR workflow automation.",
    },
  },
  {
    id: "rico-recruit",
    slug: "rico-recruit",
    name: "RicozRecruit",
    category: "People & HR",
    tagline: "Enterprise recruitment and talent acquisition",
    shortDescription:
      "A talent acquisition platform that manages the full recruitment lifecycle — from job requisition and candidate sourcing through interview management and offer acceptance.",
    heroStatement: "Find and hire the right people — systematically, at scale.",
    overview:
      "RicozRecruit is an enterprise applicant tracking and talent acquisition platform built for organisations running structured, high-volume hiring programmes. It manages job requisitions, candidate pipelines, interview scheduling, assessment management, and offer workflows — giving talent acquisition teams the operational structure to hire efficiently and consistently.",
    capabilities: [
      "Job requisition and approval management",
      "Candidate sourcing and pipeline management",
      "Interview scheduling and assessment coordination",
      "Offer management and candidate communication",
      "Recruiting analytics and hiring performance",
    ],
    benefits: [
      {
        title: "Hiring velocity",
        description:
          "Reduce time-to-hire with structured pipelines, automated scheduling, and workflow-driven candidate progression.",
      },
      {
        title: "Candidate quality",
        description:
          "Apply consistent evaluation frameworks across every role to improve hiring quality and reduce subjective decision-making.",
      },
      {
        title: "Recruiter productivity",
        description:
          "Eliminate administrative recruiting tasks through automation, freeing recruiters to focus on candidate relationship and assessment.",
      },
    ],
    features: [
      {
        name: "Requisition Manager",
        description:
          "Structured job requisition and approval process with headcount validation, job description management, and hiring manager assignment.",
      },
      {
        name: "Candidate Pipeline",
        description:
          "Manage all candidates across configurable pipeline stages with bulk actions, filtering, and collaboration tools for hiring teams.",
      },
      {
        name: "Interview Coordinator",
        description:
          "Schedule and manage interview panels with automated calendar integration, interviewer briefings, and structured feedback collection.",
      },
      {
        name: "Hiring Analytics",
        description:
          "Track time-to-hire, source effectiveness, pipeline conversion, and offer acceptance rates with recruiter and role-level reporting.",
      },
    ],
    useCases: [
      {
        title: "High-volume hiring programmes",
        description:
          "Run structured, high-volume hiring campaigns with consistent pipelines, automated candidate communication, and team-based evaluation.",
      },
      {
        title: "Executive and specialist recruitment",
        description:
          "Manage complex, multi-stage executive and specialist hiring processes with structured assessment, panel management, and stakeholder coordination.",
      },
      {
        title: "Graduate and early career programmes",
        description:
          "Coordinate graduate scheme and early career hiring with volume management, assessment centres, and programme-level reporting.",
      },
    ],
    faqs: [
      {
        question:
          "Can RicozRecruit post jobs to external job boards automatically?",
        answer:
          "Yes. RicozRecruit integrates with major job boards and aggregators to distribute job postings and collect applications directly into the candidate pipeline.",
      },
      {
        question: "How does structured feedback collection work?",
        answer:
          "RicozRecruit supports configurable scorecard templates for each interview stage, ensuring interviewers provide structured, comparable assessments.",
      },
      {
        question:
          "Does RicozRecruit integrate with RicozHR for onboarding handoff?",
        answer:
          "Yes. RicozRecruit passes accepted candidate data to RicozHR to initiate the employee record and onboarding workflow when an offer is accepted.",
      },
    ],
    relatedProducts: ["rico-hr", "rico-onboard", "rico-people"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozRecruit — Enterprise Recruitment & Talent Acquisition | Ricoz",
      description:
        "RicozRecruit manages enterprise recruitment from job requisition through interview management, offer workflows, and hiring analytics.",
    },
  },
  {
    id: "rico-onboard",
    slug: "rico-onboard",
    name: "RicozOnboard",
    category: "People & HR",
    tagline: "Structured employee onboarding and enablement",
    shortDescription:
      "An employee onboarding platform that delivers structured, consistent onboarding experiences that help new employees become productive faster.",
    heroStatement: "Make every new hire's first weeks count.",
    overview:
      "RicozOnboard is an enterprise employee onboarding platform designed to transform the first weeks of employment from fragmented paperwork and ad-hoc introductions into a structured, measurable enablement experience. It coordinates pre-boarding, orientation, training, and early milestone management across HR, IT, and hiring manager workflows — ensuring every new employee has the information, access, and support they need from day one.",
    capabilities: [
      "Pre-boarding and new hire communication",
      "Onboarding task and milestone management",
      "New hire documentation and compliance",
      "Role-specific onboarding journey configuration",
      "Onboarding progress tracking and reporting",
    ],
    benefits: [
      {
        title: "Faster productivity",
        description:
          "Structured onboarding reduces the time for new employees to become effective in their roles by ensuring nothing is missed.",
      },
      {
        title: "Consistent experience",
        description:
          "Deliver the same quality of onboarding experience to every new hire regardless of location, team, or hiring manager involvement.",
      },
      {
        title: "Compliance assurance",
        description:
          "Ensure every required document, policy acknowledgement, and compliance step is completed before or on day one.",
      },
    ],
    features: [
      {
        name: "Pre-boarding Hub",
        description:
          "Engage new hires before day one with welcome communications, document collection, and pre-start information delivery.",
      },
      {
        name: "Onboarding Journey Builder",
        description:
          "Configure role and department-specific onboarding journeys with task sequences, milestone checkpoints, and completion tracking.",
      },
      {
        name: "Cross-functional Task Coordinator",
        description:
          "Coordinate onboarding tasks across HR, IT, facilities, and hiring manager workflows from a single tracking environment.",
      },
      {
        name: "Progress Dashboard",
        description:
          "Track onboarding completion by new hire, cohort, and department with milestone progress and task exception reporting.",
      },
    ],
    useCases: [
      {
        title: "Enterprise new hire onboarding",
        description:
          "Deliver structured onboarding programmes at scale across distributed teams with consistent experiences and coordinated cross-functional workflows.",
      },
      {
        title: "Remote and hybrid onboarding",
        description:
          "Support remote and hybrid employees through structured digital onboarding journeys with proactive touchpoints and progress monitoring.",
      },
      {
        title: "Cohort and graduate onboarding",
        description:
          "Manage cohort-based onboarding programmes for graduates and early career hires with group milestone management and progress visibility.",
      },
    ],
    faqs: [
      {
        question: "Can RicozOnboard integrate with IT provisioning systems?",
        answer:
          "Yes. RicozOnboard can trigger IT provisioning tasks as part of the onboarding workflow, with status tracking visible within the new hire's onboarding dashboard.",
      },
      {
        question: "How are role-specific onboarding journeys configured?",
        answer:
          "Onboarding journey templates are created for roles, departments, or locations with task sequences, content assignments, and milestone definitions that apply automatically to matching new hires.",
      },
      {
        question: "Does RicozOnboard track compliance document completion?",
        answer:
          "Yes. RicozOnboard tracks electronic document completion and acknowledgement for all required compliance and policy documents, with completion certificates and audit records.",
      },
    ],
    relatedProducts: ["rico-hr", "rico-recruit", "rico-learn"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozOnboard — Enterprise Employee Onboarding Platform | Ricoz",
      description:
        "RicozOnboard delivers structured employee onboarding with pre-boarding, milestone management, cross-functional coordination, and progress tracking.",
    },
  },
  {
    id: "rico-perform",
    slug: "rico-perform",
    name: "RicozPerform",
    category: "People & HR",
    tagline: "Performance management and development cycles",
    shortDescription:
      "An enterprise performance management platform for running structured goal setting, continuous feedback, and review cycles that develop employees and align performance to business objectives.",
    heroStatement:
      "Connect individual performance to business outcomes — at every level.",
    overview:
      "RicozPerform is an enterprise performance management platform built for organisations that want to move beyond annual reviews to a continuous performance culture. It provides OKR and goal management, continuous feedback, structured review cycles, development planning, and calibration management — giving people teams and managers the tools to have meaningful performance conversations throughout the year.",
    capabilities: [
      "OKR and goal setting management",
      "Continuous feedback and recognition",
      "Structured performance review cycles",
      "Development planning and tracking",
      "Calibration and rating management",
    ],
    benefits: [
      {
        title: "Objective alignment",
        description:
          "Connect individual goals to team and company objectives so employees understand how their work contributes to organisational success.",
      },
      {
        title: "Continuous development",
        description:
          "Replace once-a-year reviews with ongoing feedback, check-ins, and development conversations that support real-time growth.",
      },
      {
        title: "Consistent evaluation",
        description:
          "Standardise performance review and calibration processes across the organisation to ensure fair, comparable assessments.",
      },
    ],
    features: [
      {
        name: "Goal Manager",
        description:
          "Set, cascade, and track OKRs and individual goals with progress updates, alignment visualisation, and end-of-cycle scoring.",
      },
      {
        name: "Feedback Engine",
        description:
          "Enable continuous feedback between employees, managers, and peers with structured templates and recognition capability.",
      },
      {
        name: "Review Cycle Manager",
        description:
          "Configure and run mid-year and annual review cycles with self-assessment, manager assessment, and 360 feedback orchestration.",
      },
      {
        name: "Calibration Hub",
        description:
          "Facilitate calibration sessions with comparative rating views, distribution analysis, and manager discussion tooling.",
      },
    ],
    useCases: [
      {
        title: "Annual review programme management",
        description:
          "Run consistent, structured annual performance review cycles across the organisation with configurable workflows and rating frameworks.",
      },
      {
        title: "OKR programme rollout",
        description:
          "Implement a company-wide OKR programme with cascaded goal alignment, progress tracking, and end-of-quarter scoring.",
      },
      {
        title: "Manager effectiveness",
        description:
          "Equip managers with the tools and prompts to have structured performance conversations, set clear goals, and track team development.",
      },
    ],
    faqs: [
      {
        question: "Does RicozPerform support 360-degree feedback?",
        answer:
          "Yes. RicozPerform supports peer feedback, upward feedback, and multi-rater assessments as part of configurable review cycles.",
      },
      {
        question: "How does goal cascading work?",
        answer:
          "RicozPerform supports hierarchical goal structures where company objectives cascade to team and individual goals, with alignment linking visible throughout.",
      },
      {
        question: "Can RicozPerform integrate with our HRIS?",
        answer:
          "Yes. RicozPerform integrates with core HR systems to sync employee and organisational data, ensuring review cycles reflect accurate reporting relationships.",
      },
    ],
    relatedProducts: ["rico-hr", "rico-learn", "rico-people"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozPerform — Enterprise Performance Management Platform | Ricoz",
      description:
        "RicozPerform manages OKRs, continuous feedback, review cycles, and calibration for enterprise performance management programmes.",
    },
  },
  {
    id: "rico-learn",
    slug: "rico-learn",
    name: "RicozLearn",
    category: "People & HR",
    tagline: "Learning management and employee development",
    shortDescription:
      "An enterprise learning management platform for delivering, tracking, and governing employee training and development programmes across the organisation.",
    heroStatement: "Develop every employee — with programmes that stick.",
    overview:
      "RicozLearn is an enterprise learning management platform that gives L&D and HR teams a governed environment for designing, delivering, and measuring employee learning. It supports structured courses, compliance training, blended learning paths, and self-directed development — providing the programme management and completion tracking that enterprise learning governance requires.",
    capabilities: [
      "Course creation and content management",
      "Learning path and programme management",
      "Compliance training and certification tracking",
      "Blended and self-directed learning support",
      "Learning analytics and completion reporting",
    ],
    benefits: [
      {
        title: "Compliance assurance",
        description:
          "Track and enforce mandatory training completion across the organisation with automated reminders and escalation.",
      },
      {
        title: "Development at scale",
        description:
          "Deliver consistent learning experiences to large employee populations without proportional L&D resource increases.",
      },
      {
        title: "Learning effectiveness",
        description:
          "Measure learning completion, assessment performance, and business impact to continuously improve programme quality.",
      },
    ],
    features: [
      {
        name: "Course Builder",
        description:
          "Create structured learning content with modules, assessments, multimedia support, and completion criteria in a governed content environment.",
      },
      {
        name: "Learning Path Manager",
        description:
          "Design and assign role-based, level-based, and custom learning paths that guide employees through structured development journeys.",
      },
      {
        name: "Compliance Tracker",
        description:
          "Assign, track, and report on mandatory compliance training with automated reminder scheduling and manager escalation.",
      },
      {
        name: "Learning Analytics",
        description:
          "Monitor completion rates, assessment scores, learning engagement, and programme effectiveness with configurable L&D dashboards.",
      },
    ],
    useCases: [
      {
        title: "Mandatory compliance training",
        description:
          "Manage annual and ad-hoc compliance training requirements across the organisation with automated assignment, tracking, and certification.",
      },
      {
        title: "Leadership development programmes",
        description:
          "Deliver structured leadership development curricula with cohort management, blended content, and progress tracking.",
      },
      {
        title: "New hire learning journeys",
        description:
          "Coordinate role-specific learning assignments during onboarding to accelerate capability development for new employees.",
      },
    ],
    faqs: [
      {
        question: "Does RicozLearn support SCORM content?",
        answer:
          "Yes. RicozLearn supports SCORM and xAPI content formats, enabling import of third-party courses and content packages alongside natively authored material.",
      },
      {
        question: "How does certification management work?",
        answer:
          "RicozLearn issues configurable certificates upon course completion with expiry tracking and automated renewal reminders for time-limited certifications.",
      },
      {
        question: "Can managers assign learning to their teams?",
        answer:
          "Yes. RicozLearn supports manager-initiated learning assignments with completion visibility across the team and automated progress notifications.",
      },
    ],
    relatedProducts: ["rico-hr", "rico-onboard", "rico-perform"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozLearn — Enterprise Learning Management Platform | Ricoz",
      description:
        "RicozLearn delivers enterprise learning with course management, compliance tracking, learning paths, and programme analytics.",
    },
  },
  {
    id: "rico-people",
    slug: "rico-people",
    name: "RicozPeople",
    category: "People & HR",
    tagline: "Workforce analytics and people intelligence",
    shortDescription:
      "An enterprise people analytics platform that gives HR and business leaders data-driven insight into workforce trends, talent risks, and people programme effectiveness.",
    heroStatement:
      "Understand your workforce — and make every people decision with evidence.",
    overview:
      "RicozPeople is an enterprise workforce analytics platform that transforms HR data into strategic people intelligence. It consolidates employee, performance, learning, and engagement data into a unified analytical environment, enabling HR and business leaders to identify workforce trends, model scenarios, and make evidence-based decisions about talent, structure, and investment.",
    capabilities: [
      "Workforce composition and headcount analytics",
      "Attrition and retention analysis",
      "Talent risk and pipeline reporting",
      "People programme effectiveness measurement",
      "Workforce scenario planning",
    ],
    benefits: [
      {
        title: "Strategic visibility",
        description:
          "Give HR and business leaders the workforce insight they need to make decisions before problems materialise.",
      },
      {
        title: "Retention intelligence",
        description:
          "Identify attrition patterns and at-risk employee segments early, enabling proactive retention intervention.",
      },
      {
        title: "Programme accountability",
        description:
          "Measure the effectiveness of people programmes — learning, engagement, performance — with data rather than assumption.",
      },
    ],
    features: [
      {
        name: "Workforce Dashboard",
        description:
          "Real-time workforce composition, headcount, and diversity metrics with trend analysis and configurable segmentation.",
      },
      {
        name: "Attrition Analyser",
        description:
          "Analyse turnover patterns by tenure, team, role, and manager to identify systemic retention risks and intervention points.",
      },
      {
        name: "Talent Pipeline View",
        description:
          "Track internal talent pools, succession readiness, and development progress for critical roles across the organisation.",
      },
      {
        name: "People Scenario Planner",
        description:
          "Model workforce scenarios — restructuring, growth, attrition — to understand headcount and cost implications before decisions are made.",
      },
    ],
    useCases: [
      {
        title: "Board-level workforce reporting",
        description:
          "Produce accurate, data-backed workforce metrics for board and executive governance with consistent definitions and trend context.",
      },
      {
        title: "Retention risk management",
        description:
          "Identify which employee segments and teams present the highest attrition risk and inform targeted retention strategies with evidence.",
      },
      {
        title: "Succession planning support",
        description:
          "Build and maintain a talent pipeline view for critical roles with readiness assessment and development tracking.",
      },
    ],
    faqs: [
      {
        question: "What HR data sources does RicozPeople connect to?",
        answer:
          "RicozPeople integrates with core HR, performance, learning, engagement, and payroll platforms to consolidate a complete picture of workforce data.",
      },
      {
        question: "How does RicozPeople handle sensitive employee data?",
        answer:
          "RicozPeople applies role-based access controls and data governance rules so each user sees only the workforce data they are authorised to access.",
      },
      {
        question:
          "Can RicozPeople support workforce planning and headcount modelling?",
        answer:
          "Yes. RicozPeople includes workforce scenario modelling tools that allow finance and HR teams to model headcount changes, cost implications, and capability gaps.",
      },
    ],
    relatedProducts: ["rico-hr", "rico-perform", "rico-recruit"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozPeople — Enterprise Workforce Analytics & People Intelligence | Ricoz",
      description:
        "RicozPeople delivers workforce analytics with headcount trends, attrition analysis, talent pipeline visibility, and people scenario planning.",
    },
  },
  {
    id: "rico-attend",
    slug: "rico-attend",
    name: "RicozAttend",
    category: "People & HR",
    tagline: "Time, attendance, and workforce scheduling",
    shortDescription:
      "An enterprise time and attendance platform for managing workforce scheduling, absence tracking, and labour compliance across complex, distributed workforce operations.",
    heroStatement:
      "Know who is working, where, and when — with total operational confidence.",
    overview:
      "RicozAttend is an enterprise time and attendance platform that gives workforce managers and HR teams structured control over scheduling, shift management, attendance tracking, and absence management. It supports rule-based schedule generation, digital time capture, absence request workflows, and labour reporting — providing the data foundation for accurate payroll processing and operational labour management.",
    capabilities: [
      "Workforce scheduling and shift management",
      "Digital time capture and attendance tracking",
      "Absence management and leave administration",
      "Labour rules and compliance management",
      "Attendance analytics and payroll data export",
    ],
    benefits: [
      {
        title: "Schedule accuracy",
        description:
          "Build and manage labour schedules that match operational demand while respecting contractual obligations and compliance rules.",
      },
      {
        title: "Absence visibility",
        description:
          "Track all forms of absence with consistent records that support payroll accuracy and absence pattern analysis.",
      },
      {
        title: "Payroll confidence",
        description:
          "Export accurate, validated time and attendance data directly to payroll systems, eliminating manual reconciliation errors.",
      },
    ],
    features: [
      {
        name: "Schedule Builder",
        description:
          "Configure and manage workforce schedules with shift templates, demand-based scheduling rules, and manager adjustment tools.",
      },
      {
        name: "Time Capture",
        description:
          "Record attendance via web, mobile, and integrated terminal options with configurable rounding and overtime calculation rules.",
      },
      {
        name: "Absence Manager",
        description:
          "Manage leave requests, absence recording, entitlement tracking, and return-to-work processes with approval workflows.",
      },
      {
        name: "Payroll Data Export",
        description:
          "Generate validated payroll-ready time and absence data with configurable export formats for major payroll systems.",
      },
    ],
    useCases: [
      {
        title: "Shift workforce management",
        description:
          "Manage complex shift-based workforce operations with schedule building, attendance capture, and absence management in one platform.",
      },
      {
        title: "Leave and absence administration",
        description:
          "Administer all leave types — annual, sick, family, and other — with consistent processes, entitlement management, and manager visibility.",
      },
      {
        title: "Payroll data accuracy",
        description:
          "Ensure payroll teams receive accurate, validated time and attendance data with clear exception management and audit records.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozAttend support different employment contract types?",
        answer:
          "Yes. RicozAttend supports multiple contract types with configurable working pattern rules, overtime thresholds, and entitlement calculations for each.",
      },
      {
        question: "How does RicozAttend handle remote and hybrid workers?",
        answer:
          "RicozAttend supports mobile time capture and remote working location recording, alongside traditional office-based methods.",
      },
      {
        question: "Can RicozAttend integrate with our payroll system?",
        answer:
          "Yes. RicozAttend generates payroll-ready data files in formats compatible with major payroll platforms with configurable pay code mapping.",
      },
    ],
    relatedProducts: ["rico-hr", "rico-people", "rico-books"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozAttend — Enterprise Time, Attendance & Workforce Scheduling | Ricoz",
      description:
        "RicozAttend manages workforce scheduling, time capture, absence administration, and payroll data export for enterprise operations.",
    },
  },

  // ─── Batch 03: Operations & Business Management ─────────────────────────────

  {
    id: "rico-contract",
    slug: "rico-contract",
    name: "RicozContract",
    category: "Operations & Business Management",
    tagline: "Contract lifecycle management",
    shortDescription:
      "An enterprise contract lifecycle management platform that governs the full contract process — from creation and negotiation through execution, performance monitoring, and renewal.",
    heroStatement:
      "Manage every contract from first draft to final renewal — with complete control.",
    overview:
      "RicozContract is an enterprise contract lifecycle management platform designed for legal, procurement, and commercial teams managing large contract portfolios. It provides contract authoring, negotiation management, approval workflows, e-signature integration, obligation tracking, and renewal management — replacing fragmented email and document storage with a governed contract environment that reduces risk and improves commercial performance.",
    capabilities: [
      "Contract creation and template management",
      "Negotiation and redlining management",
      "Approval and execution workflows",
      "Obligation and milestone tracking",
      "Renewal and expiry management",
    ],
    benefits: [
      {
        title: "Cycle time reduction",
        description:
          "Accelerate contract cycles from creation through execution with structured workflows that eliminate delays and lost approvals.",
      },
      {
        title: "Obligation visibility",
        description:
          "Track every contractual commitment and milestone to ensure obligations are met and risks are identified before they materialise.",
      },
      {
        title: "Renewal control",
        description:
          "Prevent unfavourable auto-renewals and missed opportunities through proactive renewal management and configurable advance alerts.",
      },
    ],
    features: [
      {
        name: "Contract Authoring Studio",
        description:
          "Create contracts from approved clause libraries and templates with inline guidance, fallback language, and deviation tracking.",
      },
      {
        name: "Negotiation Manager",
        description:
          "Manage the redlining and negotiation process with version tracking, change summaries, and counterparty collaboration tools.",
      },
      {
        name: "Approval and Execution Hub",
        description:
          "Route contracts through configurable approval chains and integrate with e-signature platforms for execution.",
      },
      {
        name: "Obligation Tracker",
        description:
          "Extract, track, and monitor contractual obligations, milestones, and key dates with owner assignment and alert management.",
      },
    ],
    useCases: [
      {
        title: "Commercial contract management",
        description:
          "Manage customer, supplier, and partnership contract portfolios with standardised templates, approval governance, and obligation tracking.",
      },
      {
        title: "Procurement contract governance",
        description:
          "Govern supplier contracts with approved terms, negotiation tracking, and compliance monitoring against contracted commitments.",
      },
      {
        title: "Contract renewal management",
        description:
          "Proactively manage the entire renewal portfolio with advance alerting, negotiation initiation, and renewal outcome tracking.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozContract support redlining with external counterparties?",
        answer:
          "Yes. RicozContract supports both internal redlining and external counterparty collaboration with tracked changes, version management, and comparison tools.",
      },
      {
        question: "Can contract obligations be extracted automatically?",
        answer:
          "RicozContract supports structured obligation extraction during the authoring and review process, with the ability to tag and track key dates and commitments.",
      },
      {
        question:
          "How does RicozContract integrate with e-signature platforms?",
        answer:
          "RicozContract integrates with major e-signature platforms to route fully approved contracts for execution directly from the CLM environment.",
      },
    ],
    relatedProducts: ["rico-ops", "rico-doc", "rico-procure"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozContract — Enterprise Contract Lifecycle Management | Ricoz",
      description:
        "RicozContract manages enterprise contracts from authoring through negotiation, execution, obligation tracking, and renewal management.",
    },
  },
  {
    id: "rico-ops",
    slug: "rico-ops",
    name: "RicozOps",
    category: "Operations & Business Management",
    tagline: "Business operations management and oversight",
    shortDescription:
      "A business operations management platform that gives enterprise leaders structured visibility into operational performance, key processes, and cross-functional business health.",
    heroStatement: "Run the business with full operational awareness.",
    overview:
      "RicozOps is an enterprise operations management platform designed for organisations that need to coordinate complex, cross-functional operations with greater visibility, accountability, and efficiency. It provides operational performance dashboards, process management, exception handling, and cross-departmental coordination tooling — giving operations leaders the real-time insight and governance tools to keep the business running smoothly.",
    capabilities: [
      "Operational KPI monitoring and dashboards",
      "Cross-functional process coordination",
      "Exception management and escalation",
      "Operational planning and capacity management",
      "Business continuity and risk monitoring",
    ],
    benefits: [
      {
        title: "Operational clarity",
        description:
          "Give operations leaders a real-time view of business performance, exceptions, and process health across every function.",
      },
      {
        title: "Faster response",
        description:
          "Identify operational issues and exceptions before they escalate into disruption with real-time monitoring and alert management.",
      },
      {
        title: "Cross-functional alignment",
        description:
          "Coordinate operational activity across departments with shared visibility, accountability structures, and process governance.",
      },
    ],
    features: [
      {
        name: "Operations Dashboard",
        description:
          "Configurable real-time dashboards tracking operational KPIs across business functions with trend analysis and exception highlighting.",
      },
      {
        name: "Process Monitor",
        description:
          "Monitor the status of key business processes with SLA tracking, bottleneck identification, and automated exception alerts.",
      },
      {
        name: "Incident Manager",
        description:
          "Capture, assign, and track operational incidents and exceptions from identification through resolution with full audit trail.",
      },
      {
        name: "Capacity Planner",
        description:
          "Plan operational capacity requirements against forecast demand with resource allocation tools and constraint visualisation.",
      },
    ],
    useCases: [
      {
        title: "Operations performance management",
        description:
          "Track business operations performance against targets with real-time KPI dashboards and structured exception management.",
      },
      {
        title: "Operational incident management",
        description:
          "Capture and coordinate operational incidents with structured escalation, task assignment, and resolution tracking.",
      },
      {
        title: "Cross-functional process governance",
        description:
          "Apply consistent governance to key cross-functional processes with visibility, accountability, and SLA enforcement.",
      },
    ],
    faqs: [
      {
        question: "What data sources can RicozOps connect to?",
        answer:
          "RicozOps integrates with ERP, CRM, finance, and operational systems to pull KPI and process data into a unified operational dashboard.",
      },
      {
        question: "How does exception alerting work?",
        answer:
          "RicozOps applies configurable thresholds to operational metrics and process SLAs, generating alerts and escalations when conditions breach defined parameters.",
      },
      {
        question:
          "Can RicozOps support multiple business units with separate views?",
        answer:
          "Yes. RicozOps supports business unit-specific dashboards and process views alongside consolidated operations reporting for executive leadership.",
      },
    ],
    relatedProducts: ["rico-process", "rico-doc", "rico-intel"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozOps — Business Operations Management Platform | Ricoz",
      description:
        "RicozOps delivers operational performance dashboards, process monitoring, exception management, and cross-functional coordination.",
    },
  },
  {
    id: "rico-process",
    slug: "rico-process",
    name: "RicozProcess",
    category: "Operations & Business Management",
    tagline: "Business process design and improvement",
    shortDescription:
      "A business process management platform for documenting, analysing, and improving the operational processes that underpin enterprise service delivery and efficiency.",
    heroStatement:
      "Design better processes — and make every improvement stick.",
    overview:
      "RicozProcess is a business process management platform that gives operations and continuous improvement teams a structured environment for process documentation, analysis, redesign, and governance. It supports process mapping, performance measurement, improvement management, and process library governance — enabling organisations to build and maintain operational efficiency at scale.",
    capabilities: [
      "Process mapping and documentation",
      "Process performance measurement",
      "Improvement initiative management",
      "Process library and governance",
      "Compliance and audit process management",
    ],
    benefits: [
      {
        title: "Operational consistency",
        description:
          "Ensure processes are executed consistently by making documented, approved processes accessible to every employee.",
      },
      {
        title: "Continuous improvement",
        description:
          "Identify, prioritise, and manage process improvements with structured initiative tracking and measured outcomes.",
      },
      {
        title: "Audit readiness",
        description:
          "Maintain a governed process library with version history and approval records that supports compliance and external audit requirements.",
      },
    ],
    features: [
      {
        name: "Process Mapper",
        description:
          "Create and maintain visual process maps in BPMN and swimlane formats with role assignment, control points, and system annotations.",
      },
      {
        name: "Performance Measurement",
        description:
          "Define and track process KPIs including cycle time, cost, error rate, and volume with configurable targets and trend reporting.",
      },
      {
        name: "Improvement Manager",
        description:
          "Capture, evaluate, and track process improvement initiatives with benefits tracking, task management, and outcome measurement.",
      },
      {
        name: "Process Library",
        description:
          "Maintain a governed, version-controlled process library with approval workflows, review cycles, and employee access management.",
      },
    ],
    useCases: [
      {
        title: "Business process documentation",
        description:
          "Build a comprehensive, governed library of operational processes that provides clarity and consistency across the organisation.",
      },
      {
        title: "Process improvement programmes",
        description:
          "Run structured continuous improvement programmes with prioritised initiative management and measurable performance outcomes.",
      },
      {
        title: "Regulatory compliance management",
        description:
          "Document and govern compliance-critical processes with approval workflows, version control, and audit trail requirements.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozProcess support standard process modelling notations?",
        answer:
          "Yes. RicozProcess supports BPMN 2.0 notation alongside simplified flowchart and swimlane formats for different levels of process documentation.",
      },
      {
        question: "How does process version management work?",
        answer:
          "RicozProcess maintains complete version history for all process documents with change tracking, approval workflows for each revision, and rollback capability.",
      },
      {
        question:
          "Can employees access process documentation through a self-service portal?",
        answer:
          "Yes. RicozProcess includes a configurable employee-facing process portal for accessing approved procedures and guidance relevant to their role.",
      },
    ],
    relatedProducts: ["rico-ops", "rico-doc", "rico-intel"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozProcess — Business Process Management & Improvement | Ricoz",
      description:
        "RicozProcess manages process documentation, performance measurement, improvement initiatives, and governed process libraries.",
    },
  },
  {
    id: "rico-asset",
    slug: "rico-asset",
    name: "RicozAsset",
    category: "Operations & Business Management",
    tagline: "Enterprise asset management and lifecycle tracking",
    shortDescription:
      "An enterprise asset management platform for tracking, maintaining, and governing physical and digital assets across the organisation throughout their full lifecycle.",
    heroStatement: "Know what you own, where it is, and what it costs.",
    overview:
      "RicozAsset is an enterprise asset management platform that gives operations and finance teams a unified environment for managing the full asset lifecycle — from acquisition and deployment through maintenance, depreciation, and disposal. It supports physical assets, IT equipment, leased assets, and infrastructure — providing the visibility and governance needed for operational efficiency and financial accuracy.",
    capabilities: [
      "Asset register and lifecycle management",
      "Asset tracking and location management",
      "Maintenance scheduling and management",
      "Depreciation and financial asset management",
      "Asset compliance and audit reporting",
    ],
    benefits: [
      {
        title: "Asset visibility",
        description:
          "Maintain a complete, accurate register of every organisational asset with location, status, and ownership data always current.",
      },
      {
        title: "Maintenance reliability",
        description:
          "Schedule and manage preventive maintenance to maximise asset availability and avoid costly unplanned failures.",
      },
      {
        title: "Financial accuracy",
        description:
          "Track asset values, depreciation, and disposal accurately to support financial reporting and audit requirements.",
      },
    ],
    features: [
      {
        name: "Asset Register",
        description:
          "Centralised asset database with configurable classifications, attributes, and lifecycle stage tracking for every asset type.",
      },
      {
        name: "Maintenance Scheduler",
        description:
          "Plan and track preventive and corrective maintenance tasks with technician assignment, work order management, and completion records.",
      },
      {
        name: "Depreciation Engine",
        description:
          "Calculate and track asset depreciation using configurable methods with integration to accounting systems for financial reporting.",
      },
      {
        name: "Audit Trail",
        description:
          "Maintain a complete record of every asset transaction — acquisition, movement, maintenance, and disposal — for compliance and audit purposes.",
      },
    ],
    useCases: [
      {
        title: "IT asset management",
        description:
          "Track enterprise IT hardware and software assets through their full lifecycle with procurement, deployment, and disposal governance.",
      },
      {
        title: "Facilities and physical asset management",
        description:
          "Manage facilities assets, equipment, and infrastructure with maintenance scheduling and lifecycle cost tracking.",
      },
      {
        title: "Leased asset management",
        description:
          "Track leased assets, manage lease terms, and maintain accurate financial records for lease accounting compliance.",
      },
    ],
    faqs: [
      {
        question:
          "Can RicozAsset integrate with our accounting system for depreciation?",
        answer:
          "Yes. RicozAsset synchronises depreciation calculations with accounting platforms, generating the journal entries required for accurate asset accounting.",
      },
      {
        question: "How does asset tracking work for distributed locations?",
        answer:
          "RicozAsset supports multi-location asset tracking with configurable location hierarchies, asset transfer management, and location-based reporting.",
      },
      {
        question: "Does RicozAsset support barcode or RFID scanning?",
        answer:
          "Yes. RicozAsset supports barcode and RFID-based asset identification for physical asset tracking, stocktaking, and mobile maintenance management.",
      },
    ],
    relatedProducts: ["rico-ops", "rico-procure", "rico-books"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozAsset — Enterprise Asset Management & Lifecycle Tracking | Ricoz",
      description:
        "RicozAsset manages enterprise asset lifecycles with tracking, maintenance scheduling, depreciation, and full audit governance.",
    },
  },
  {
    id: "rico-doc",
    slug: "rico-doc",
    name: "RicozDoc",
    category: "Operations & Business Management",
    tagline: "Enterprise document management and control",
    shortDescription:
      "An enterprise document management platform for storing, organising, controlling, and governing business documents across the organisation with version control and access management.",
    heroStatement:
      "Every document, in its place — controlled, accessible, auditable.",
    overview:
      "RicozDoc is an enterprise document management platform that gives organisations a governed environment for creating, storing, and managing business-critical documents. It provides structured document storage, version control, access permissions, approval workflows, and retention management — replacing fragmented file shares and email attachments with a controlled document environment that supports operational efficiency and compliance.",
    capabilities: [
      "Structured document storage and organisation",
      "Version control and document history",
      "Access control and permissions management",
      "Document approval and review workflows",
      "Retention management and audit reporting",
    ],
    benefits: [
      {
        title: "Document control",
        description:
          "Ensure every employee accesses the current, approved version of every document through a governed central repository.",
      },
      {
        title: "Compliance support",
        description:
          "Meet document retention, access control, and audit requirements with a governed management environment and complete audit trail.",
      },
      {
        title: "Operational efficiency",
        description:
          "Eliminate time spent searching for documents, managing email attachments, and reconciling conflicting versions.",
      },
    ],
    features: [
      {
        name: "Document Repository",
        description:
          "Structured document storage with configurable taxonomy, metadata tagging, and search across the complete document library.",
      },
      {
        name: "Version Manager",
        description:
          "Maintain complete version history for every document with check-in/check-out controls and comparison between versions.",
      },
      {
        name: "Access Control",
        description:
          "Define document access permissions by role, team, and department with time-limited and guest access for external stakeholders.",
      },
      {
        name: "Workflow Engine",
        description:
          "Route documents through configurable approval, review, and sign-off workflows with reminder management and completion tracking.",
      },
    ],
    useCases: [
      {
        title: "Policy and procedure management",
        description:
          "Manage, approve, and distribute organisational policies and procedures with version control and employee acknowledgement tracking.",
      },
      {
        title: "Contracts and legal document management",
        description:
          "Store, control, and manage contracts, agreements, and legal documents with access governance and retention management.",
      },
      {
        title: "Quality management documentation",
        description:
          "Maintain quality management system documentation with controlled approval, distribution, and review cycle management.",
      },
    ],
    faqs: [
      {
        question: "How does RicozDoc handle document retention and disposal?",
        answer:
          "RicozDoc supports configurable retention schedules by document type with automated expiry notifications and governed disposal workflows.",
      },
      {
        question: "Can external parties access documents through RicozDoc?",
        answer:
          "Yes. RicozDoc supports time-limited, permission-controlled external access for sharing documents with clients, auditors, and partners.",
      },
      {
        question: "Does RicozDoc support e-signature integration?",
        answer:
          "Yes. RicozDoc integrates with e-signature platforms to route documents for execution directly from the document management environment.",
      },
    ],
    relatedProducts: ["rico-ops", "rico-process", "rico-know"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozDoc — Enterprise Document Management & Control | Ricoz",
      description:
        "RicozDoc provides governed document management with version control, access permissions, approval workflows, and retention management.",
    },
  },
  {
    id: "rico-supply",
    slug: "rico-supply",
    name: "RicozSupply",
    category: "Operations & Business Management",
    tagline: "Supply chain and inventory operations management",
    shortDescription:
      "An enterprise supply chain operations platform for managing inventory, supplier relationships, order fulfilment, and supply chain visibility across complex operational networks.",
    heroStatement:
      "Manage every link in the chain — with the clarity to act decisively.",
    overview:
      "RicozSupply is an enterprise supply chain operations platform designed for organisations managing multi-tier supplier networks, inventory across multiple locations, and complex order fulfilment requirements. It provides inventory management, supplier coordination, demand planning, and supply chain visibility tools that help operations teams balance service levels against inventory investment.",
    capabilities: [
      "Inventory management and stock control",
      "Supplier coordination and order management",
      "Demand planning and replenishment",
      "Supply chain visibility and event tracking",
      "Supply chain analytics and reporting",
    ],
    benefits: [
      {
        title: "Inventory accuracy",
        description:
          "Maintain accurate stock records across every location with real-time updates from receiving, fulfilment, and adjustment transactions.",
      },
      {
        title: "Service level protection",
        description:
          "Prevent stockouts and delivery failures through demand-driven replenishment planning and early supply risk identification.",
      },
      {
        title: "Cost efficiency",
        description:
          "Optimise inventory investment by aligning stock levels to actual demand patterns rather than historical norms.",
      },
    ],
    features: [
      {
        name: "Inventory Manager",
        description:
          "Real-time inventory tracking across all locations with transaction history, stock valuation, and cycle count management.",
      },
      {
        name: "Replenishment Planner",
        description:
          "Calculate replenishment requirements from demand signals, lead times, and safety stock parameters with automated purchase order generation.",
      },
      {
        name: "Supplier Order Manager",
        description:
          "Manage purchase orders, supplier confirmations, and delivery tracking with exception alerting for late or short deliveries.",
      },
      {
        name: "Supply Chain Dashboard",
        description:
          "End-to-end supply chain visibility dashboard tracking supplier performance, inventory health, and fulfilment status.",
      },
    ],
    useCases: [
      {
        title: "Multi-location inventory management",
        description:
          "Manage stock across warehouses, stores, and logistics facilities with real-time visibility, transfer management, and consolidated reporting.",
      },
      {
        title: "Supplier order management",
        description:
          "Coordinate the full supplier purchase order cycle from creation through delivery with exception management and performance tracking.",
      },
      {
        title: "Demand-driven replenishment",
        description:
          "Replace manual or schedule-based replenishment with demand signal-driven planning that optimises stock levels and prevents stockouts.",
      },
    ],
    faqs: [
      {
        question:
          "Can RicozSupply integrate with our ERP or warehouse management system?",
        answer:
          "Yes. RicozSupply integrates with ERP, WMS, and order management systems for bi-directional inventory, order, and transaction data synchronisation.",
      },
      {
        question: "How does demand planning work?",
        answer:
          "RicozSupply calculates replenishment requirements from configurable demand models incorporating historical consumption, seasonality, and forecast inputs.",
      },
      {
        question: "Does RicozSupply support multiple units of measure?",
        answer:
          "Yes. RicozSupply supports multi-UOM inventory management with configurable conversion rules for purchasing, storage, and sales units.",
      },
    ],
    relatedProducts: ["rico-ops", "rico-procure", "rico-asset"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozSupply — Supply Chain & Inventory Operations Management | Ricoz",
      description:
        "RicozSupply manages enterprise inventory, supplier orders, demand planning, and supply chain visibility across complex operational networks.",
    },
  },
  {
    id: "rico-intel",
    slug: "rico-intel",
    name: "RicozIntel",
    category: "Operations & Business Management",
    tagline: "Operational intelligence and business reporting",
    shortDescription:
      "An operational intelligence platform that gives enterprise leadership unified visibility into cross-functional business performance through structured reporting and executive dashboards.",
    heroStatement: "See the whole business — and lead with the facts.",
    overview:
      "RicozIntel is an operational intelligence and business reporting platform designed for enterprise leaders who need a unified view of business performance that spans functions, geographies, and systems. It consolidates operational, financial, and customer data into configurable executive dashboards, management reports, and performance scorecards — providing the decision-making intelligence that complex organisations require.",
    capabilities: [
      "Executive dashboard and scorecard management",
      "Cross-functional performance reporting",
      "KPI library and target management",
      "Management report production",
      "Business performance trend analysis",
    ],
    benefits: [
      {
        title: "Leadership clarity",
        description:
          "Give executives a unified view of business performance across every function without dependency on manual report consolidation.",
      },
      {
        title: "Data-driven decisions",
        description:
          "Replace intuition-based decision-making with structured intelligence from real operational data across the enterprise.",
      },
      {
        title: "Governance efficiency",
        description:
          "Produce consistent, accurate performance reports for board and executive governance without time-consuming manual preparation.",
      },
    ],
    features: [
      {
        name: "Executive Dashboard Builder",
        description:
          "Configure role-based executive dashboards with KPI tiles, trend charts, and exception indicators drawn from connected data sources.",
      },
      {
        name: "KPI Manager",
        description:
          "Define, manage, and track the organisation's key performance indicators with target setting, owner assignment, and performance history.",
      },
      {
        name: "Performance Scorecard",
        description:
          "Build balanced scorecards and strategy execution trackers that connect operational performance to strategic objectives.",
      },
      {
        name: "Report Scheduler",
        description:
          "Automate the production and distribution of management reports on configured schedules with commentary and narrative integration.",
      },
    ],
    useCases: [
      {
        title: "Executive performance management",
        description:
          "Provide executive leadership with a consolidated view of business performance through configurable dashboards and automated reports.",
      },
      {
        title: "Board reporting",
        description:
          "Produce board-level performance reports with consistent, accurate data from operational systems without manual spreadsheet assembly.",
      },
      {
        title: "Strategic initiative tracking",
        description:
          "Monitor the progress of strategic programmes and initiatives against defined milestones and KPIs with executive visibility.",
      },
    ],
    faqs: [
      {
        question: "What data sources can RicozIntel connect to?",
        answer:
          "RicozIntel connects to operational, financial, HR, CRM, and data warehouse platforms, consolidating data from across the enterprise into unified dashboards.",
      },
      {
        question: "How are KPI targets and thresholds managed?",
        answer:
          "RicozIntel supports configurable KPI target and threshold management with period-specific targets, RAG status calculation, and automated alerting.",
      },
      {
        question:
          "Can RicozIntel support custom report layouts for different stakeholders?",
        answer:
          "Yes. RicozIntel supports multiple report templates and dashboard configurations for different leadership levels, functions, and external governance audiences.",
      },
    ],
    relatedProducts: ["rico-ops", "rico-analytics", "rico-financials"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozIntel — Operational Intelligence & Business Reporting | Ricoz",
      description:
        "RicozIntel delivers cross-functional operational intelligence with executive dashboards, KPI management, and management report production.",
    },
  },

  // ─── Batch 04: Project & Work Management ───────────────────────────────────

  {
    id: "rico-plan",
    slug: "rico-plan",
    name: "RicozPlan",
    category: "Project & Work Management",
    tagline: "Project planning and work breakdown structure",
    shortDescription:
      "An enterprise project planning platform for building, structuring, and governing project plans across complex, multi-phase initiatives and programmes.",
    heroStatement:
      "Plan with precision — from the first milestone to the final deliverable.",
    overview:
      "RicozPlan is an enterprise project planning platform designed for project managers and programme leads who need structured, governed planning capability beyond basic task lists. It supports work breakdown structure creation, Gantt scheduling, dependency management, critical path analysis, and baseline comparison — providing the planning rigour that complex, multi-stakeholder projects demand.",
    capabilities: [
      "Work breakdown structure management",
      "Gantt chart and schedule planning",
      "Dependency and constraint management",
      "Critical path analysis",
      "Baseline and schedule variance tracking",
    ],
    benefits: [
      {
        title: "Schedule integrity",
        description:
          "Build and maintain project schedules with dependency logic that automatically propagates the impact of delays across the plan.",
      },
      {
        title: "Visibility at every level",
        description:
          "Give project sponsors, managers, and workstream leads the planning visibility appropriate to their level of involvement.",
      },
      {
        title: "Change management",
        description:
          "Assess the schedule impact of changes before accepting them by modelling scenarios against the approved baseline.",
      },
    ],
    features: [
      {
        name: "WBS Builder",
        description:
          "Structure projects hierarchically with work packages, deliverables, and tasks that flow from strategic objectives to individual activities.",
      },
      {
        name: "Gantt Planner",
        description:
          "Interactive Gantt scheduling with drag-and-drop timeline management, dependency links, and milestone markers.",
      },
      {
        name: "Critical Path Engine",
        description:
          "Automatically calculate the critical path and highlight schedule-critical tasks that require priority management.",
      },
      {
        name: "Baseline Manager",
        description:
          "Capture approved project baselines and track schedule variance against them throughout the project lifecycle.",
      },
    ],
    useCases: [
      {
        title: "Large programme planning",
        description:
          "Structure and govern complex multi-workstream programmes with hierarchical planning, dependency management, and integrated schedule views.",
      },
      {
        title: "Project schedule governance",
        description:
          "Maintain controlled project schedules with baseline protection, change impact analysis, and variance reporting.",
      },
      {
        title: "PMO planning standards",
        description:
          "Establish consistent planning practices across the project portfolio with governed templates, standards, and schedule review processes.",
      },
    ],
    faqs: [
      {
        question:
          "Can RicozPlan import existing project schedules from other tools?",
        answer:
          "Yes. RicozPlan supports import from standard project file formats, allowing teams to migrate existing plans and continue in a governed environment.",
      },
      {
        question: "How does dependency management work across workstreams?",
        answer:
          "RicozPlan supports finish-to-start, start-to-start, and finish-to-finish dependencies both within and across workstreams with automatic schedule recalculation.",
      },
      {
        question: "Does RicozPlan integrate with resource management?",
        answer:
          "Yes. RicozPlan integrates with RicozRoster for resource allocation and capacity planning against the project schedule.",
      },
    ],
    relatedProducts: ["rico-track", "rico-spark", "rico-portfolio"],
    relatedServices: [
      "digital-transformation-consulting",
      "technology-strategy-roadmap",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozPlan — Enterprise Project Planning & Scheduling | Ricoz",
      description:
        "RicozPlan delivers structured project planning with WBS management, Gantt scheduling, critical path analysis, and baseline tracking.",
    },
  },
  {
    id: "rico-milestone",
    slug: "rico-milestone",
    name: "RicozMilestone",
    category: "Project & Work Management",
    tagline: "Programme milestone and deliverable governance",
    shortDescription:
      "A milestone management platform that tracks and governs key deliverables, sign-offs, and decision points across complex programmes and project portfolios.",
    heroStatement: "Govern the moments that define programme success.",
    overview:
      "RicozMilestone is a programme milestone and deliverable governance platform designed for PMOs and programme managers overseeing portfolios of interdependent projects. It provides structured milestone tracking, gate review management, deliverable sign-off workflows, and programme health reporting — ensuring that critical progress points receive the governance attention they require.",
    capabilities: [
      "Milestone definition and tracking",
      "Gate review and governance management",
      "Deliverable sign-off workflows",
      "Programme health and dependency reporting",
      "Milestone performance analytics",
    ],
    benefits: [
      {
        title: "Governance discipline",
        description:
          "Enforce structured gate reviews and approval processes at critical programme checkpoints without administrative overhead.",
      },
      {
        title: "Cross-project visibility",
        description:
          "Track milestone status across the entire portfolio in a single view, identifying slippage before it cascades.",
      },
      {
        title: "Accountability",
        description:
          "Assign clear owners to every milestone and deliverable with completion evidence requirements and escalation paths.",
      },
    ],
    features: [
      {
        name: "Milestone Registry",
        description:
          "Centralised milestone management with owner assignment, target dates, predecessor dependencies, and status tracking.",
      },
      {
        name: "Gate Review Manager",
        description:
          "Configure and manage formal gate reviews with attendee management, decision recording, conditions, and outcome tracking.",
      },
      {
        name: "Deliverable Sign-off",
        description:
          "Route deliverables through configurable approval chains with quality criteria, reviewer assignments, and completion certification.",
      },
      {
        name: "Programme Health Dashboard",
        description:
          "Consolidated milestone status across all projects with RAG indicators, slippage trends, and dependency risk highlighting.",
      },
    ],
    useCases: [
      {
        title: "Major transformation governance",
        description:
          "Apply structured milestone governance to large-scale transformation programmes with defined gates, reviews, and executive accountability.",
      },
      {
        title: "Portfolio milestone reporting",
        description:
          "Provide the PMO and executive sponsors with a unified view of milestone status across the project portfolio.",
      },
      {
        title: "Regulatory and compliance milestones",
        description:
          "Track compliance-critical deliverables and regulatory submission milestones with documented evidence and sign-off governance.",
      },
    ],
    faqs: [
      {
        question: "Can RicozMilestone connect to our project planning tools?",
        answer:
          "Yes. RicozMilestone integrates with project management platforms to pull milestone data and maintain synchronised status without duplicate entry.",
      },
      {
        question: "How are gate review decisions captured?",
        answer:
          "Gate decisions, conditions, and actions are recorded within the review record with participant sign-off, creating a governance audit trail.",
      },
      {
        question: "Does RicozMilestone support external stakeholder access?",
        answer:
          "Yes. RicozMilestone supports permission-controlled external access for client sponsors, auditors, and governance board members.",
      },
    ],
    relatedProducts: ["rico-plan", "rico-portfolio", "rico-track"],
    relatedServices: [
      "digital-transformation-consulting",
      "technology-strategy-roadmap",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozMilestone — Programme Milestone & Deliverable Governance | Ricoz",
      description:
        "RicozMilestone governs programme milestones with gate reviews, deliverable sign-off workflows, and portfolio health reporting.",
    },
  },
  {
    id: "rico-agile",
    slug: "rico-agile",
    name: "RicozAgile",
    category: "Project & Work Management",
    tagline: "Agile delivery and sprint management",
    shortDescription:
      "An enterprise agile delivery platform for managing sprints, backlogs, and iterative delivery across teams and programmes operating at scale.",
    heroStatement:
      "Deliver iteratively — with the structure enterprise programmes demand.",
    overview:
      "RicozAgile is an enterprise agile delivery platform built for organisations running scaled agile programmes across multiple teams. It provides backlog management, sprint planning, velocity tracking, dependency coordination, and programme increment management — giving delivery teams the tooling for disciplined iterative delivery while giving leadership the visibility to govern at scale.",
    capabilities: [
      "Product backlog management and refinement",
      "Sprint planning and execution management",
      "Velocity and capacity tracking",
      "Cross-team dependency coordination",
      "Programme increment planning and reporting",
    ],
    benefits: [
      {
        title: "Delivery discipline",
        description:
          "Maintain consistent sprint cadences and backlog quality across multiple teams operating under unified programme governance.",
      },
      {
        title: "Scaled visibility",
        description:
          "Give programme leads visibility into delivery progress, impediments, and velocity across all teams simultaneously.",
      },
      {
        title: "Dependency management",
        description:
          "Surface and resolve cross-team dependencies before they become sprint blockers with structured dependency tracking.",
      },
    ],
    features: [
      {
        name: "Backlog Manager",
        description:
          "Manage product and team backlogs with story mapping, prioritisation, dependency tagging, and refinement workflow support.",
      },
      {
        name: "Sprint Board",
        description:
          "Visual sprint management with configurable columns, story point tracking, burndown charts, and daily stand-up support.",
      },
      {
        name: "Velocity Tracker",
        description:
          "Track team velocity, capacity utilisation, and sprint predictability over time with trend analysis and forecast capability.",
      },
      {
        name: "PI Planning Hub",
        description:
          "Coordinate programme increment planning across teams with feature assignment, dependency mapping, and risk identification.",
      },
    ],
    useCases: [
      {
        title: "Scaled agile programme delivery",
        description:
          "Coordinate multiple agile teams across a shared programme with unified backlog management, PI planning, and delivery reporting.",
      },
      {
        title: "Team agile practice",
        description:
          "Enable individual delivery teams to manage their backlog, sprints, and velocity with structured agile tooling.",
      },
      {
        title: "Agile PMO governance",
        description:
          "Provide programme and delivery leadership with real-time visibility into team velocity, impediments, and delivery against programme commitments.",
      },
    ],
    faqs: [
      {
        question: "Does RicozAgile support SAFe, Scrum, or Kanban?",
        answer:
          "RicozAgile supports configurable agile frameworks including Scrum and Kanban, with SAFe-aligned programme increment planning for scaled delivery organisations.",
      },
      {
        question:
          "Can RicozAgile integrate with our existing development tools?",
        answer:
          "Yes. RicozAgile integrates with code repository and CI platforms to pull commit and deployment data into the sprint tracking environment.",
      },
      {
        question: "How are cross-team dependencies managed?",
        answer:
          "Dependencies are tagged in the backlog, visualised in programme views, and tracked with owner assignment and resolution status to prevent sprint-level blockers.",
      },
    ],
    relatedProducts: ["rico-plan", "rico-track", "rico-spark"],
    relatedServices: [
      "digital-transformation-consulting",
      "technology-strategy-roadmap",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozAgile — Enterprise Agile Delivery & Sprint Management | Ricoz",
      description:
        "RicozAgile manages backlogs, sprint planning, velocity, and scaled programme delivery for enterprise agile teams.",
    },
  },
  {
    id: "rico-roster",
    slug: "rico-roster",
    name: "RicozRoster",
    category: "Project & Work Management",
    tagline: "Resource planning and capacity management",
    shortDescription:
      "An enterprise resource management platform for planning, allocating, and optimising the human resources deployed across projects, programmes, and operational activities.",
    heroStatement:
      "Put the right people on the right work — and see capacity before it becomes a problem.",
    overview:
      "RicozRoster is an enterprise resource planning and capacity management platform for PMOs and delivery managers who need to allocate people across competing projects and operational demands. It provides resource profiles, demand forecasting, allocation management, utilisation tracking, and capacity gap analysis — enabling organisations to maximise their resource investments and avoid the hidden cost of over-commitment.",
    capabilities: [
      "Resource profile and skills management",
      "Project demand forecasting and modelling",
      "Resource allocation and assignment management",
      "Utilisation tracking and reporting",
      "Capacity gap analysis and planning",
    ],
    benefits: [
      {
        title: "Allocation accuracy",
        description:
          "See real resource availability before committing to project timelines, preventing the over-allocation that delays delivery.",
      },
      {
        title: "Utilisation optimisation",
        description:
          "Balance workloads across the resource pool to improve productivity and reduce burnout from uneven demand distribution.",
      },
      {
        title: "Strategic planning",
        description:
          "Model future resource demand against current capacity to inform hiring, contracting, and programme sequencing decisions.",
      },
    ],
    features: [
      {
        name: "Resource Registry",
        description:
          "Centralised resource profiles with skills, role, grade, availability, and booking history for every person in the managed resource pool.",
      },
      {
        name: "Demand Planner",
        description:
          "Forecast resource requirements from project plans and operational demands with configurable role and skill matching.",
      },
      {
        name: "Allocation Manager",
        description:
          "Book and manage resource allocations across projects with conflict detection, approval workflows, and real-time availability views.",
      },
      {
        name: "Utilisation Dashboard",
        description:
          "Track actual versus planned utilisation by individual, team, and role with trend analysis and over-allocation alerting.",
      },
    ],
    useCases: [
      {
        title: "Programme resource planning",
        description:
          "Plan and manage resource allocation across large programmes with multiple workstreams competing for shared skills and capacity.",
      },
      {
        title: "Capacity planning for the PMO",
        description:
          "Give the PMO a reliable view of available capacity against the project pipeline to prioritise and sequence work confidently.",
      },
      {
        title: "Skills-based resource matching",
        description:
          "Match project resource requirements to available people using skills, experience, and role attributes rather than assumptions.",
      },
    ],
    faqs: [
      {
        question: "Can RicozRoster connect to our project planning system?",
        answer:
          "Yes. RicozRoster integrates with project planning platforms to pull demand requirements directly from approved project plans.",
      },
      {
        question: "How are skills and competencies managed?",
        answer:
          "Resource profiles include a configurable skills taxonomy with proficiency levels, allowing demand-to-supply matching based on verified capabilities.",
      },
      {
        question:
          "Does RicozRoster support contractor and supplier resource management?",
        answer:
          "Yes. RicozRoster manages both internal and external resource pools with configurable rate information and availability tracking.",
      },
    ],
    relatedProducts: ["rico-plan", "rico-portfolio", "rico-hr"],
    relatedServices: [
      "digital-transformation-consulting",
      "technology-strategy-roadmap",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozRoster — Enterprise Resource Planning & Capacity Management | Ricoz",
      description:
        "RicozRoster manages resource allocation, capacity planning, utilisation tracking, and skills-based demand matching for enterprise project portfolios.",
    },
  },
  {
    id: "rico-portfolio",
    slug: "rico-portfolio",
    name: "RicozPortfolio",
    category: "Project & Work Management",
    tagline: "Project portfolio management and governance",
    shortDescription:
      "An enterprise project portfolio management platform for prioritising, governing, and reporting on the full portfolio of projects and programmes across the organisation.",
    heroStatement:
      "Govern the portfolio — and invest in the work that delivers most.",
    overview:
      "RicozPortfolio is an enterprise project portfolio management platform designed for investment committee members, PMOs, and senior leaders who need to govern a large, diverse portfolio of projects. It provides portfolio prioritisation, business case management, gate governance, strategic alignment tracking, and executive portfolio reporting — ensuring the organisation's project investments are well-governed and strategically aligned.",
    capabilities: [
      "Portfolio prioritisation and investment decisions",
      "Business case development and approval",
      "Strategic alignment and benefit tracking",
      "Gate governance and portfolio health reporting",
      "Portfolio capacity and demand management",
    ],
    benefits: [
      {
        title: "Investment clarity",
        description:
          "Make informed portfolio investment decisions with structured business cases, benefit projections, and strategic alignment scores.",
      },
      {
        title: "Executive visibility",
        description:
          "Give leadership a consistent, accurate view of the full project portfolio — health, spend, strategic value, and delivery confidence.",
      },
      {
        title: "Governance discipline",
        description:
          "Apply consistent governance standards across all projects with structured gates, reviews, and portfolio-level decision records.",
      },
    ],
    features: [
      {
        name: "Portfolio Dashboard",
        description:
          "Executive portfolio view with health indicators, spend tracking, strategic alignment scoring, and benefit realisation status.",
      },
      {
        name: "Business Case Manager",
        description:
          "Structured business case development, review, and approval with benefit identification, cost estimation, and investment scoring.",
      },
      {
        name: "Prioritisation Engine",
        description:
          "Score and rank portfolio candidates against strategic criteria, risk, and value to support investment committee decision-making.",
      },
      {
        name: "Benefit Tracker",
        description:
          "Track intended versus realised benefits from approved projects with accountability assignment and reporting for governance bodies.",
      },
    ],
    useCases: [
      {
        title: "Investment committee governance",
        description:
          "Provide investment committees with structured business cases, scoring frameworks, and portfolio views for informed capital allocation decisions.",
      },
      {
        title: "Strategic portfolio alignment",
        description:
          "Map the project portfolio to strategic objectives and measure the degree to which active investments are delivering against strategy.",
      },
      {
        title: "Portfolio reporting for boards",
        description:
          "Produce accurate, governance-ready portfolio reports for board and executive review with consistent methodology and presentation.",
      },
    ],
    faqs: [
      {
        question:
          "Can RicozPortfolio pull data from existing project management tools?",
        answer:
          "Yes. RicozPortfolio integrates with project delivery platforms to pull health, schedule, and spend data into the portfolio management layer.",
      },
      {
        question: "How is portfolio prioritisation scored?",
        answer:
          "RicozPortfolio uses configurable scoring models that weight projects across strategic alignment, financial return, risk, and delivery readiness criteria.",
      },
      {
        question:
          "Does RicozPortfolio support benefits realisation management?",
        answer:
          "Yes. Approved benefits are tracked through delivery and post-implementation with owner assignment, measurement milestones, and realisation evidence.",
      },
    ],
    relatedProducts: ["rico-plan", "rico-milestone", "rico-intel"],
    relatedServices: [
      "digital-transformation-consulting",
      "technology-strategy-roadmap",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozPortfolio — Enterprise Project Portfolio Management | Ricoz",
      description:
        "RicozPortfolio governs the project portfolio with investment prioritisation, business case management, and strategic alignment tracking.",
    },
  },
  {
    id: "rico-timelog",
    slug: "rico-timelog",
    name: "RicozTimelog",
    category: "Project & Work Management",
    tagline: "Project time tracking and work recording",
    shortDescription:
      "An enterprise time tracking platform for capturing, approving, and reporting on time spent against projects, tasks, and cost centres across the workforce.",
    heroStatement:
      "Know where time goes — and account for every hour with confidence.",
    overview:
      "RicozTimelog is an enterprise time tracking platform that gives project teams, managers, and finance teams a reliable, governed record of time spent against project activities and operational work. It supports digital timesheet entry, manager approval workflows, project cost allocation, and billable hour tracking — providing the data foundation for project costing, client billing, and resource management.",
    capabilities: [
      "Digital timesheet entry and submission",
      "Manager approval workflows",
      "Project and task allocation",
      "Billable and non-billable hour tracking",
      "Time analytics and project cost reporting",
    ],
    benefits: [
      {
        title: "Accurate project costs",
        description:
          "Capture actual time spent on project activities to produce reliable project cost data for financial management and forecasting.",
      },
      {
        title: "Billing accuracy",
        description:
          "Record billable hours against client projects with approval workflows that ensure accuracy before invoices are raised.",
      },
      {
        title: "Resource utilisation",
        description:
          "Understand how the workforce allocates time across projects, clients, and operational activities to drive better resource decisions.",
      },
    ],
    features: [
      {
        name: "Timesheet Interface",
        description:
          "Employee timesheet entry with project and task selection, daily or weekly entry modes, and mobile support for distributed teams.",
      },
      {
        name: "Approval Workflow",
        description:
          "Manager-driven timesheet approval with review, query, and rejection capability before hours are committed to project records.",
      },
      {
        name: "Cost Allocation Engine",
        description:
          "Allocate approved hours to project cost lines using configured rate cards, cost centre rules, and overhead allocation methods.",
      },
      {
        name: "Time Analytics",
        description:
          "Report on time spent by project, team, task, and period with utilisation analysis and project cost performance reporting.",
      },
    ],
    useCases: [
      {
        title: "Professional services time management",
        description:
          "Track and approve billable time against client engagements with the accuracy required for client invoicing and margin management.",
      },
      {
        title: "Project costing",
        description:
          "Capture actual project labour costs through approved timesheets to compare planned versus actual project expenditure.",
      },
      {
        title: "Workforce utilisation analysis",
        description:
          "Understand how the workforce allocates time across strategic, operational, and administrative work with time analytics.",
      },
    ],
    faqs: [
      {
        question:
          "Can RicozTimelog integrate with our payroll or billing system?",
        answer:
          "Yes. RicozTimelog exports approved time data to payroll, billing, and ERP systems with configurable mapping to ensure accurate downstream processing.",
      },
      {
        question: "How does RicozTimelog handle multiple rate structures?",
        answer:
          "RicozTimelog supports configurable rate cards by employee grade, project type, and client tier for accurate cost and billing calculation.",
      },
      {
        question: "Does RicozTimelog support mobile timesheet entry?",
        answer:
          "Yes. RicozTimelog includes a mobile-optimised interface for time entry, enabling field-based and remote employees to record time from any device.",
      },
    ],
    relatedProducts: ["rico-plan", "rico-roster", "rico-books"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozTimelog — Enterprise Project Time Tracking | Ricoz",
      description:
        "RicozTimelog captures and governs project time with digital timesheets, manager approvals, cost allocation, and utilisation analytics.",
    },
  },
  {
    id: "rico-deliver",
    slug: "rico-deliver",
    name: "RicozDeliver",
    category: "Project & Work Management",
    tagline: "Delivery intelligence and project performance",
    shortDescription:
      "A project delivery intelligence platform that gives PMOs and leadership data-driven insight into project performance, delivery confidence, and programme outcomes.",
    heroStatement: "Move from project reporting to delivery intelligence.",
    overview:
      "RicozDeliver is a project delivery intelligence platform that transforms raw project data into structured, actionable insight for PMOs and programme leadership. It consolidates schedule, cost, risk, and milestone data across the portfolio into a unified analytical environment — producing the delivery confidence scores, trend analysis, and exception intelligence that senior stakeholders need to manage outcomes rather than chase status.",
    capabilities: [
      "Delivery confidence and health scoring",
      "Schedule and cost performance analytics",
      "Risk-adjusted outcome modelling",
      "Portfolio trend and exception reporting",
      "PMO intelligence dashboards",
    ],
    benefits: [
      {
        title: "Proactive management",
        description:
          "Identify delivery risks and performance issues early through data-driven signals rather than waiting for project status reports.",
      },
      {
        title: "Objective assessment",
        description:
          "Produce delivery confidence scores from consistent analytical criteria rather than subjective project manager assessments.",
      },
      {
        title: "Portfolio intelligence",
        description:
          "Give the PMO a data-driven view of the full portfolio that supports governance decisions and resource interventions.",
      },
    ],
    features: [
      {
        name: "Delivery Confidence Score",
        description:
          "Calculate project health scores from schedule variance, cost performance, risk exposure, and milestone status using configurable models.",
      },
      {
        name: "Performance Analytics",
        description:
          "Earned value, schedule performance index, and cost performance index tracking with trend analysis and forecast-at-completion.",
      },
      {
        name: "Risk Intelligence",
        description:
          "Aggregate and analyse project risk data across the portfolio to identify systemic patterns and high-probability risk clusters.",
      },
      {
        name: "PMO Reporting Hub",
        description:
          "Generate configurable portfolio performance reports for executive review, governance boards, and investment committees.",
      },
    ],
    useCases: [
      {
        title: "PMO performance management",
        description:
          "Run a data-driven PMO with objective delivery health scores, portfolio trend analytics, and exception-driven management.",
      },
      {
        title: "Executive programme reporting",
        description:
          "Produce credible, data-backed programme reports for executive sponsors and boards with consistent methodology.",
      },
      {
        title: "Delivery recovery identification",
        description:
          "Identify projects that require intervention through analytical signals before delays become unrecoverable.",
      },
    ],
    faqs: [
      {
        question:
          "What data does RicozDeliver require from project management tools?",
        answer:
          "RicozDeliver ingests schedule, cost, milestone, and risk data from connected project management platforms to calculate performance metrics.",
      },
      {
        question: "How is delivery confidence scored?",
        answer:
          "Confidence scores are calculated from configurable weighted metrics including schedule variance, cost performance, risk exposure, and milestone completion rates.",
      },
      {
        question: "Does RicozDeliver support earned value management?",
        answer:
          "Yes. RicozDeliver calculates EVM metrics including SPI, CPI, and forecast-at-completion from integrated schedule and cost data.",
      },
    ],
    relatedProducts: ["rico-portfolio", "rico-milestone", "rico-intel"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozDeliver — Project Delivery Intelligence & PMO Analytics | Ricoz",
      description:
        "RicozDeliver provides PMO intelligence with delivery confidence scoring, EVM analytics, portfolio trends, and exception reporting.",
    },
  },

  // ─── Batch 04: Communication & Collaboration ────────────────────────────────

  {
    id: "rico-message",
    slug: "rico-message",
    name: "RicozMessage",
    category: "Communication & Collaboration",
    tagline: "Enterprise team messaging and channels",
    shortDescription:
      "A governed enterprise messaging platform for structured team communication through persistent channels, direct messaging, and threaded conversation management.",
    heroStatement:
      "Keep every conversation in context — and every team in sync.",
    overview:
      "RicozMessage is an enterprise team messaging platform that provides organisations with a governed, secure environment for day-to-day team communication. It offers persistent channels organised by team, project, or topic, direct messaging, threaded discussions, file sharing, and integration with business workflows — replacing fragmented email threads and consumer messaging apps with a professional communication fabric.",
    capabilities: [
      "Persistent channel management by team and topic",
      "Direct and group messaging",
      "Threaded conversation management",
      "File and content sharing",
      "Workflow and notification integration",
    ],
    benefits: [
      {
        title: "Reduced email overload",
        description:
          "Move team communication from inbox to structured channels, reducing noise and making relevant information easier to find.",
      },
      {
        title: "Context preservation",
        description:
          "Keep every conversation, decision, and shared file in a searchable, persistent record organised by team and project.",
      },
      {
        title: "Governance and control",
        description:
          "Manage communication with enterprise governance — user administration, data retention, export, and compliance controls.",
      },
    ],
    features: [
      {
        name: "Channel Manager",
        description:
          "Create and manage public, private, and guest channels organised by team, project, or topic with configurable membership and permissions.",
      },
      {
        name: "Threaded Conversations",
        description:
          "Reply in threads to keep detailed discussions organised without interrupting the main channel flow.",
      },
      {
        name: "Enterprise Search",
        description:
          "Search across all accessible channels, messages, and files with keyword and filter-based retrieval.",
      },
      {
        name: "Workflow Connector",
        description:
          "Integrate business system notifications, approvals, and alerts into relevant channels to keep teams informed within their communication flow.",
      },
    ],
    useCases: [
      {
        title: "Team daily communication",
        description:
          "Replace fragmented email and consumer apps with governed, structured team communication in persistent project and functional channels.",
      },
      {
        title: "Cross-functional project coordination",
        description:
          "Coordinate project work across teams in dedicated project channels with full conversation history and file sharing.",
      },
      {
        title: "Compliance-governed messaging",
        description:
          "Operate enterprise messaging with data retention, export capability, and governance controls required for regulated industries.",
      },
    ],
    faqs: [
      {
        question: "Does RicozMessage support external guest access?",
        answer:
          "Yes. RicozMessage supports governed external guest access for specific channels, enabling secure collaboration with clients, partners, and contractors.",
      },
      {
        question: "How is data retained and exported?",
        answer:
          "RicozMessage supports configurable data retention policies and full message export for compliance, legal hold, and audit purposes.",
      },
      {
        question:
          "Can RicozMessage integrate with our other business platforms?",
        answer:
          "Yes. RicozMessage integrates with business applications to route notifications, approvals, and alerts into relevant team channels.",
      },
    ],
    relatedProducts: ["rico-meet", "rico-collab", "rico-spaces"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozMessage — Enterprise Team Messaging Platform | Ricoz",
      description:
        "RicozMessage provides governed enterprise messaging with persistent channels, threaded conversations, and business workflow integration.",
    },
  },
  {
    id: "rico-meet",
    slug: "rico-meet",
    name: "RicozMeet",
    category: "Communication & Collaboration",
    tagline: "Enterprise video conferencing and meetings",
    shortDescription:
      "A secure enterprise video conferencing platform for structured business meetings, webinars, and large-group communications with governance and recording management.",
    heroStatement:
      "Every meeting, secured and structured — wherever the team is.",
    overview:
      "RicozMeet is an enterprise video conferencing platform built for organisations that need more than consumer video tools. It provides high-quality video meetings, webinar capability, meeting room hardware integration, recording management, and governance controls — giving IT and compliance teams the oversight they need while providing the business with a reliable meeting experience at scale.",
    capabilities: [
      "HD video and audio conferencing",
      "Webinar and large group broadcast",
      "Meeting recording and transcript management",
      "Meeting room hardware integration",
      "Meeting governance and compliance controls",
    ],
    benefits: [
      {
        title: "Reliable at scale",
        description:
          "Support enterprise-scale meetings from small team calls to company-wide broadcasts with consistent quality.",
      },
      {
        title: "Governance and compliance",
        description:
          "Control meeting recording, participant management, and data residency with enterprise governance capabilities.",
      },
      {
        title: "Hardware integration",
        description:
          "Integrate with physical meeting room equipment for a consistent experience between in-room and remote participants.",
      },
    ],
    features: [
      {
        name: "Video Meeting Engine",
        description:
          "High-definition video conferencing with screen sharing, whiteboard, breakout rooms, and meeting controls for organisers.",
      },
      {
        name: "Webinar Studio",
        description:
          "Structured webinar capability with registration management, presenter controls, attendee Q&A, and post-event analytics.",
      },
      {
        name: "Recording Manager",
        description:
          "Capture, store, and manage meeting recordings with configurable retention policies, access controls, and compliance export.",
      },
      {
        name: "Room System Integration",
        description:
          "Connect to meeting room hardware systems for calendar-driven room scheduling and one-touch meeting launch.",
      },
    ],
    useCases: [
      {
        title: "Daily team meetings",
        description:
          "Run reliable daily, weekly, and recurring team meetings with consistent quality across remote, hybrid, and in-room participants.",
      },
      {
        title: "Customer and partner meetings",
        description:
          "Host professional client presentations, partner briefings, and external stakeholder sessions with secure access controls.",
      },
      {
        title: "Company-wide communications",
        description:
          "Deliver all-hands broadcasts, town halls, and executive communications to the entire organisation as governed webinar events.",
      },
    ],
    faqs: [
      {
        question: "Can external participants join without creating an account?",
        answer:
          "Yes. RicozMeet supports guest participation for external attendees without requiring account creation, with the host controlling access permissions.",
      },
      {
        question: "How are meeting recordings managed for compliance?",
        answer:
          "RicozMeet applies configurable recording policies by meeting type, with retention rules, access controls, and legal hold capabilities for compliance purposes.",
      },
      {
        question: "Does RicozMeet integrate with calendar systems?",
        answer:
          "Yes. RicozMeet integrates with enterprise calendar platforms for one-click meeting scheduling, invitations, and join links.",
      },
    ],
    relatedProducts: ["rico-message", "rico-calendar", "rico-collab"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozMeet — Enterprise Video Conferencing Platform | Ricoz",
      description:
        "RicozMeet delivers secure enterprise video meetings, webinars, recording management, and room system integration.",
    },
  },
  {
    id: "rico-calendar",
    slug: "rico-calendar",
    name: "RicozCalendar",
    category: "Communication & Collaboration",
    tagline: "Shared calendar and enterprise scheduling",
    shortDescription:
      "An enterprise calendar and scheduling platform that coordinates time across teams, conference rooms, and resources with governance and availability intelligence.",
    heroStatement:
      "Coordinate time at enterprise scale — without the scheduling friction.",
    overview:
      "RicozCalendar is an enterprise shared calendar and scheduling platform that gives organisations a governed environment for managing individual, team, and resource calendars. It provides availability intelligence, meeting scheduling automation, resource booking, and calendar governance — reducing the administrative cost of coordination while ensuring the organisation has visibility into how time is being used.",
    capabilities: [
      "Individual and team calendar management",
      "Meeting scheduling and availability intelligence",
      "Conference room and resource booking",
      "Calendar sharing and delegation",
      "Calendar analytics and time utilisation",
    ],
    benefits: [
      {
        title: "Scheduling efficiency",
        description:
          "Eliminate the back-and-forth of meeting scheduling with availability intelligence that surfaces optimal slots automatically.",
      },
      {
        title: "Resource visibility",
        description:
          "Give teams clear visibility of conference room availability, shared resource calendars, and team capacity.",
      },
      {
        title: "Time governance",
        description:
          "Understand how organisational time is allocated across meetings, focus work, and operational activities.",
      },
    ],
    features: [
      {
        name: "Calendar Engine",
        description:
          "Robust individual and team calendar management with sharing, delegation, and overlay views for group scheduling.",
      },
      {
        name: "Smart Scheduling",
        description:
          "Automated meeting scheduling that surfaces available slots matching all participants' calendars and preferred working patterns.",
      },
      {
        name: "Resource Booking",
        description:
          "Book conference rooms, equipment, and shared resources alongside meetings with real-time availability and conflict detection.",
      },
      {
        name: "Calendar Analytics",
        description:
          "Analyse meeting frequency, duration, and time allocation patterns to surface insights about organisational time investment.",
      },
    ],
    useCases: [
      {
        title: "Cross-team meeting coordination",
        description:
          "Coordinate meetings across distributed, multi-timezone teams with availability intelligence and automated scheduling.",
      },
      {
        title: "Conference room management",
        description:
          "Manage the booking and utilisation of physical meeting rooms and shared resources with real-time availability and usage analytics.",
      },
      {
        title: "Executive scheduling management",
        description:
          "Manage executive calendars with delegation controls, priority scheduling, and protected time configuration.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozCalendar integrate with existing calendar platforms?",
        answer:
          "Yes. RicozCalendar integrates with major enterprise calendar systems to provide unified scheduling without requiring a full migration.",
      },
      {
        question: "How does multi-timezone scheduling work?",
        answer:
          "RicozCalendar displays and compares availability across multiple time zones with configurable business hours and automatic conversion.",
      },
      {
        question: "Can external guests be scheduled through RicozCalendar?",
        answer:
          "Yes. RicozCalendar supports external scheduling with shareable availability links that allow guests to select meeting slots without internal access.",
      },
    ],
    relatedProducts: ["rico-meet", "rico-message", "rico-spaces"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozCalendar — Enterprise Shared Calendar & Scheduling | Ricoz",
      description:
        "RicozCalendar manages enterprise calendars with smart scheduling, resource booking, and time utilisation analytics.",
    },
  },
  {
    id: "rico-collab",
    slug: "rico-collab",
    name: "RicozCollab",
    category: "Communication & Collaboration",
    tagline: "Real-time collaborative document editing",
    shortDescription:
      "An enterprise collaborative document platform for real-time co-authoring, structured review, and governed document collaboration across teams and projects.",
    heroStatement: "Write together, think together, deliver together.",
    overview:
      "RicozCollab is an enterprise collaborative document platform that enables real-time co-authoring, structured review, comment management, and version-controlled document collaboration across distributed teams. It moves document work from email attachments and isolated storage into a shared environment where teams create, review, and refine together — with governance controls that enterprise document management requires.",
    capabilities: [
      "Real-time collaborative document editing",
      "Comment, suggestion, and review management",
      "Version history and change tracking",
      "Document permission and access control",
      "Template and governance management",
    ],
    benefits: [
      {
        title: "Parallel authorship",
        description:
          "Multiple contributors work on the same document simultaneously, eliminating the sequential delays of serial document review.",
      },
      {
        title: "Review transparency",
        description:
          "Track every suggestion, comment, and edit with clear attribution and resolution — so nothing is lost in the review process.",
      },
      {
        title: "Access governance",
        description:
          "Control who can view, comment, or edit each document with role-based permissions that enforce information security.",
      },
    ],
    features: [
      {
        name: "Live Authoring Engine",
        description:
          "Real-time multi-user document editing with presence indicators, cursor tracking, and conflict-free collaborative text management.",
      },
      {
        name: "Review and Comment Tools",
        description:
          "Inline comments, suggested edits, tracked changes, and resolution workflows for structured document review.",
      },
      {
        name: "Version History",
        description:
          "Complete version history with change summaries, named snapshots, and the ability to restore any previous state.",
      },
      {
        name: "Template Library",
        description:
          "Manage approved document templates with pre-set structure, branding, and governance checkpoints for consistent document creation.",
      },
    ],
    useCases: [
      {
        title: "Proposal and tender preparation",
        description:
          "Coordinate multi-contributor proposal and tender documents in real time with structured review and approval before submission.",
      },
      {
        title: "Policy and procedure development",
        description:
          "Draft, review, and finalise organisational policies through collaborative authoring with governance sign-off.",
      },
      {
        title: "Client deliverable production",
        description:
          "Produce client-facing deliverables — reports, presentations, analysis — collaboratively with structured review and version management.",
      },
    ],
    faqs: [
      {
        question:
          "Can external collaborators work on documents in RicozCollab?",
        answer:
          "Yes. RicozCollab supports governed external access for specific documents, allowing client and partner collaboration within permission-controlled boundaries.",
      },
      {
        question: "How does RicozCollab handle document conflicts?",
        answer:
          "RicozCollab uses operational transformation technology to resolve simultaneous edits automatically, preventing data loss from concurrent contributions.",
      },
      {
        question: "Does RicozCollab integrate with our document storage?",
        answer:
          "Yes. RicozCollab integrates with enterprise document management platforms so collaboratively created documents land in the governed repository.",
      },
    ],
    relatedProducts: ["rico-message", "rico-spaces", "rico-doc"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozCollab — Enterprise Collaborative Document Platform | Ricoz",
      description:
        "RicozCollab enables real-time co-authoring, structured review, version control, and governed document collaboration for enterprise teams.",
    },
  },
  {
    id: "rico-spaces",
    slug: "rico-spaces",
    name: "RicozSpaces",
    category: "Communication & Collaboration",
    tagline: "Team collaboration workspaces",
    shortDescription:
      "A team workspace platform that gives project and functional teams a shared, organised environment for communication, documents, tasks, and knowledge in one place.",
    heroStatement: "Give every team a space that works as hard as they do.",
    overview:
      "RicozSpaces is an enterprise team workspace platform that provides project and functional teams with a persistent, organised collaborative environment. It brings together messages, documents, tasks, notes, and links in a shared space — reducing context switching between tools and giving every team a single place to plan, discuss, and deliver their work.",
    capabilities: [
      "Shared team workspace creation and management",
      "Integrated messaging, tasks, and documents",
      "Team knowledge and notes management",
      "Workspace search and content organisation",
      "Guest and external member management",
    ],
    benefits: [
      {
        title: "Reduced context switching",
        description:
          "Keep all project-related activity — conversations, tasks, documents, and notes — in one organised workspace rather than spread across tools.",
      },
      {
        title: "Onboarding speed",
        description:
          "New team members get immediate context from the workspace history, reducing the time needed to become effective contributors.",
      },
      {
        title: "Knowledge continuity",
        description:
          "Preserve team knowledge in the workspace so institutional context is not lost when team members change.",
      },
    ],
    features: [
      {
        name: "Workspace Hub",
        description:
          "Configurable team spaces with channels, document libraries, task boards, and knowledge sections tailored to team working patterns.",
      },
      {
        name: "Integrated Task Board",
        description:
          "Lightweight task management embedded in the workspace for coordinating team actions without switching to a separate tool.",
      },
      {
        name: "Team Notes",
        description:
          "Persistent, collaboratively edited team notes for meeting summaries, decisions, and shared references.",
      },
      {
        name: "Workspace Search",
        description:
          "Full-text search across all content in the workspace — messages, documents, tasks, and notes — with filter and date options.",
      },
    ],
    useCases: [
      {
        title: "Project team workspaces",
        description:
          "Create dedicated workspaces for project teams that bring together every aspect of the project in an organised, persistent environment.",
      },
      {
        title: "Functional team hubs",
        description:
          "Give departments and functional teams a structured digital home for ongoing work, communications, and shared resources.",
      },
      {
        title: "Cross-functional initiative spaces",
        description:
          "Coordinate cross-functional initiatives in a shared workspace visible to all contributors regardless of their home team.",
      },
    ],
    faqs: [
      {
        question: "How are workspace permissions managed?",
        answer:
          "Workspaces support configurable member roles with view, comment, and edit permissions managed by workspace owners with IT admin oversight.",
      },
      {
        question: "Can workspaces be archived when projects close?",
        answer:
          "Yes. Completed project workspaces can be archived with full content preserved in a searchable read-only state for future reference.",
      },
      {
        question: "Does RicozSpaces integrate with other Ricoz products?",
        answer:
          "Yes. RicozSpaces surfaces activity from connected tools within the workspace feed, providing contextual updates without leaving the workspace.",
      },
    ],
    relatedProducts: ["rico-message", "rico-collab", "rico-know"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozSpaces — Enterprise Team Collaboration Workspaces | Ricoz",
      description:
        "RicozSpaces provides team workspaces combining messaging, tasks, documents, and knowledge in one organised collaborative environment.",
    },
  },
  {
    id: "rico-announce",
    slug: "rico-announce",
    name: "RicozAnnounce",
    category: "Communication & Collaboration",
    tagline: "Internal communications and employee announcements",
    shortDescription:
      "An enterprise internal communications platform for publishing, targeting, and measuring employee communications across the organisation.",
    heroStatement: "Reach every employee with the right message — every time.",
    overview:
      "RicozAnnounce is an enterprise internal communications platform that gives communications teams, HR, and leadership a governed environment for creating, publishing, and measuring employee communications. It supports announcement management, audience targeting, multi-channel distribution, employee acknowledgement tracking, and engagement analytics — replacing fragmented email broadcasts with structured internal communications.",
    capabilities: [
      "Announcement creation and editorial management",
      "Audience targeting and segmentation",
      "Multi-channel distribution management",
      "Employee acknowledgement and read tracking",
      "Communications engagement analytics",
    ],
    benefits: [
      {
        title: "Reach and relevance",
        description:
          "Target communications to the right employee segments so messages are relevant and signal-to-noise ratios improve across the organisation.",
      },
      {
        title: "Acknowledgement governance",
        description:
          "Require and track employee acknowledgement of critical communications with audit records for compliance and HR purposes.",
      },
      {
        title: "Engagement measurement",
        description:
          "Measure the reach and engagement of every communication to understand what resonates and continuously improve.",
      },
    ],
    features: [
      {
        name: "Communication Editor",
        description:
          "Rich-content announcement editor with media, attachments, and formatting tools for professional internal communications.",
      },
      {
        name: "Audience Manager",
        description:
          "Target announcements to employee segments by location, department, role, or custom attribute for relevant, personalised distribution.",
      },
      {
        name: "Multi-channel Publisher",
        description:
          "Distribute announcements across email, intranet, messaging channels, and mobile app simultaneously from one platform.",
      },
      {
        name: "Engagement Dashboard",
        description:
          "Track open rates, read rates, acknowledgements, and engagement by audience segment for every communication.",
      },
    ],
    useCases: [
      {
        title: "Organisation-wide announcements",
        description:
          "Publish and track critical company-wide communications — policy changes, executive updates, crisis communications — with acknowledgement management.",
      },
      {
        title: "Compliance communications",
        description:
          "Distribute mandatory compliance communications with tracked acknowledgement and audit records for regulatory purposes.",
      },
      {
        title: "Change management communications",
        description:
          "Support transformation and change programmes with targeted, staged communications that reach affected employees directly.",
      },
    ],
    faqs: [
      {
        question: "Can employees respond or comment on announcements?",
        answer:
          "RicozAnnounce supports configurable engagement modes including one-way broadcast, moderated comments, and employee reactions depending on the communication type.",
      },
      {
        question: "How does acknowledgement tracking work?",
        answer:
          "Employees confirm reading through a tracked acknowledgement action, with completion status visible to the communications team and HR in real time.",
      },
      {
        question: "Does RicozAnnounce support multiple languages?",
        answer:
          "Yes. RicozAnnounce supports multi-language communication versions with language-based audience targeting for international workforces.",
      },
    ],
    relatedProducts: ["rico-message", "rico-know", "rico-people"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozAnnounce — Enterprise Internal Communications Platform | Ricoz",
      description:
        "RicozAnnounce manages employee announcements with audience targeting, multi-channel distribution, acknowledgement tracking, and engagement analytics.",
    },
  },

  {
    id: "rico-channel",
    slug: "rico-channel",
    name: "RicozChannel",
    category: "Communication & Collaboration",
    tagline: "Broadcast and structured information publishing",
    shortDescription:
      "An enterprise broadcast channel platform for publishing structured information, updates, and content streams to specific teams, departments, or the full organisation.",
    heroStatement:
      "Publish the right information to the right audience — in a structured, governed stream.",
    overview:
      "RicozChannel is an enterprise information broadcasting and structured publishing platform that gives teams and departments a governed way to publish regular updates, news, and structured content to defined audiences. Unlike transient messaging, RicozChannel creates persistent, categorised information streams that employees can subscribe to, review at any time, and search — providing the structured information layer that complements real-time communication tools.",
    capabilities: [
      "Structured channel creation and management",
      "Broadcast publishing to defined audiences",
      "Content categorisation and archival",
      "Subscriber management and access governance",
      "Channel engagement and reach analytics",
    ],
    benefits: [
      {
        title: "Signal over noise",
        description:
          "Separate important updates and structured content from conversational messaging so critical information is always easy to find.",
      },
      {
        title: "Searchable history",
        description:
          "Build a persistent, searchable archive of published updates that employees can refer back to long after the original post.",
      },
      {
        title: "Audience control",
        description:
          "Publish to specific teams, departments, or roles so only relevant audiences see each information stream.",
      },
    ],
    features: [
      {
        name: "Channel Studio",
        description:
          "Create and manage broadcast channels with defined audiences, publishing permissions, content categories, and access rules.",
      },
      {
        name: "Content Publisher",
        description:
          "Rich-content publishing interface for structured updates, announcements, and reference content with media and attachment support.",
      },
      {
        name: "Subscriber Manager",
        description:
          "Manage channel audiences with subscription assignment, optional self-subscribe, and access governance for sensitive channels.",
      },
      {
        name: "Channel Analytics",
        description:
          "Track publish frequency, subscriber reach, read rates, and engagement per channel and content category.",
      },
    ],
    useCases: [
      {
        title: "Department update channels",
        description:
          "Publish regular departmental updates, priorities, and reference content to team members in a structured, searchable stream.",
      },
      {
        title: "IT and operational broadcasts",
        description:
          "Broadcast IT maintenance notices, system updates, and operational changes to the right technical and business audiences.",
      },
      {
        title: "Product and service communications",
        description:
          "Publish product updates, roadmap communications, and service change notifications to customer-facing and internal teams.",
      },
    ],
    faqs: [
      {
        question: "How does RicozChannel differ from RicozMessage?",
        answer:
          "RicozMessage is for conversational team communication. RicozChannel is for structured, one-to-many broadcast publishing where the emphasis is on governed information streams rather than dialogue.",
      },
      {
        question: "Can employees subscribe to channels themselves?",
        answer:
          "Channel owners choose whether subscriptions are open, request-based, or assigned — giving control over audience composition to the channel publisher.",
      },
      {
        question:
          "Does RicozChannel integrate with other communication platforms?",
        answer:
          "Yes. Channel publications can be distributed to connected messaging and email platforms so subscribers receive notifications through their preferred tool.",
      },
    ],
    relatedProducts: ["rico-message", "rico-announce", "rico-spaces"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozChannel — Enterprise Broadcast & Information Publishing | Ricoz",
      description:
        "RicozChannel publishes structured information streams to defined audiences with governed broadcasting, subscriber management, and engagement analytics.",
    },
  },

  // ─── Batch 05: Data & Analytics ─────────────────────────────────────────────

  {
    id: "rico-viz",
    slug: "rico-viz",
    name: "RicozViz",
    category: "Data & Analytics",
    tagline: "Interactive data visualisation and exploration",
    shortDescription:
      "An enterprise data visualisation platform for building, publishing, and governing interactive charts, dashboards, and data stories from complex organisational data.",
    heroStatement: "Transform data into the clarity that drives decisions.",
    overview:
      "RicozViz is an enterprise data visualisation and exploration platform that enables analysts and business users to build, share, and govern interactive charts, dashboards, and data stories without coding. It connects to enterprise data sources and provides a rich library of visualisation types, interactive filtering, and governed publishing — making it possible for the right people to see the right data in the most useful form.",
    capabilities: [
      "Interactive chart and dashboard creation",
      "Multi-source data connection and blending",
      "Self-service visual exploration",
      "Governed publishing and sharing",
      "Scheduled report and export management",
    ],
    benefits: [
      {
        title: "Analyst productivity",
        description:
          "Build sophisticated, interactive visualisations without SQL expertise, freeing analysts to focus on insight rather than construction.",
      },
      {
        title: "Business user access",
        description:
          "Empower business users to explore data themselves with guided visual interfaces, reducing dependency on analyst queues.",
      },
      {
        title: "Governed distribution",
        description:
          "Publish approved dashboards to the right audiences with access controls that prevent unauthorised data exposure.",
      },
    ],
    features: [
      {
        name: "Visualisation Studio",
        description:
          "Drag-and-drop dashboard builder with a comprehensive library of chart types, maps, and custom visualisation components.",
      },
      {
        name: "Data Connector",
        description:
          "Connect directly to enterprise databases, warehouses, and APIs with live query and cached extract modes.",
      },
      {
        name: "Interactive Explorer",
        description:
          "Cross-filter, drill-down, and parameter-driven interactivity that allows users to explore data within governed boundaries.",
      },
      {
        name: "Publishing Centre",
        description:
          "Publish dashboards to role-based portals, embed in applications, or schedule as PDF/email reports with access governance.",
      },
    ],
    useCases: [
      {
        title: "Executive performance dashboards",
        description:
          "Build and publish governed executive dashboards that deliver real-time business performance visibility to leadership teams.",
      },
      {
        title: "Operational reporting",
        description:
          "Replace static spreadsheet reports with interactive visualisations that update automatically from live data sources.",
      },
      {
        title: "Analytical exploration",
        description:
          "Provide analysts and data teams with a visual exploration environment for hypothesis testing and insight development.",
      },
    ],
    faqs: [
      {
        question: "What data sources does RicozViz connect to?",
        answer:
          "RicozViz connects to relational databases, cloud data warehouses, flat files, and REST APIs through native connectors and a standard JDBC/ODBC interface.",
      },
      {
        question: "Can non-technical users build their own dashboards?",
        answer:
          "Yes. RicozViz includes self-service capabilities for business users to build basic visualisations from governed data sources within defined permissions.",
      },
      {
        question: "How is access to sensitive data managed?",
        answer:
          "RicozViz applies row-level and column-level security rules on connected data sources so each user sees only the data they are authorised to access.",
      },
    ],
    relatedProducts: ["rico-analytics", "rico-report", "rico-metrics"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozViz — Enterprise Data Visualisation Platform | Ricoz",
      description:
        "RicozViz builds interactive charts, dashboards, and data stories from enterprise data sources with governed publishing and self-service exploration.",
    },
  },
  {
    id: "rico-prep",
    slug: "rico-prep",
    name: "RicozPrep",
    category: "Data & Analytics",
    tagline: "Data preparation and transformation",
    shortDescription:
      "An enterprise data preparation platform for profiling, cleansing, transforming, and enriching data before it enters analytical and reporting environments.",
    heroStatement: "Trustworthy analytics start with trustworthy data.",
    overview:
      "RicozPrep is an enterprise data preparation and transformation platform that gives data and analytics teams the tools to profile, cleanse, standardise, and transform data from source systems into the quality required for accurate analysis. It replaces manual spreadsheet manipulation and brittle scripted processes with a governed, visual preparation environment that is repeatable, auditable, and scalable.",
    capabilities: [
      "Data profiling and quality assessment",
      "Rule-based cleansing and standardisation",
      "Field mapping and transformation management",
      "Data enrichment and augmentation",
      "Data quality monitoring and alerting",
    ],
    benefits: [
      {
        title: "Analysis confidence",
        description:
          "Eliminate data quality issues as the root cause of incorrect analysis by applying consistent preparation rules before data reaches reporting.",
      },
      {
        title: "Repeatable processes",
        description:
          "Build transformation logic once and apply it automatically to every data refresh, eliminating manual re-preparation.",
      },
      {
        title: "Issue visibility",
        description:
          "Proactively identify and resolve data quality problems with automated profiling and quality monitoring across data pipelines.",
      },
    ],
    features: [
      {
        name: "Data Profiler",
        description:
          "Automatic profiling of source data to identify completeness, uniqueness, pattern, and distribution issues before transformation.",
      },
      {
        name: "Transformation Studio",
        description:
          "Visual, no-code transformation builder for field mapping, type conversion, aggregation, and custom formula application.",
      },
      {
        name: "Cleansing Rule Engine",
        description:
          "Configure and apply data cleansing rules including standardisation, deduplication, null handling, and outlier management.",
      },
      {
        name: "Quality Monitor",
        description:
          "Ongoing data quality measurement against defined rules with threshold alerting and quality trend reporting.",
      },
    ],
    useCases: [
      {
        title: "Analytics data pipeline preparation",
        description:
          "Transform and cleanse source data before it enters data warehouses or analytics platforms to ensure reporting accuracy.",
      },
      {
        title: "Data migration preparation",
        description:
          "Profile, cleanse, and standardise source data before migration to ensure target system data quality from day one.",
      },
      {
        title: "Regulatory reporting data quality",
        description:
          "Apply validation and standardisation rules to data used in regulatory submissions to meet quality and accuracy requirements.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozPrep support both batch and real-time preparation?",
        answer:
          "RicozPrep supports scheduled batch preparation pipelines and near-real-time preparation modes for time-sensitive data requirements.",
      },
      {
        question: "How are preparation rules version-controlled?",
        answer:
          "All preparation rules and transformation logic are version-controlled with change history, approval workflows for production changes, and rollback capability.",
      },
      {
        question: "Can RicozPrep handle large-scale data volumes?",
        answer:
          "Yes. RicozPrep is designed for enterprise data volumes with distributed processing capability for high-volume transformation pipelines.",
      },
    ],
    relatedProducts: ["rico-data", "rico-ingest", "rico-analytics"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozPrep — Enterprise Data Preparation & Transformation | Ricoz",
      description:
        "RicozPrep profiles, cleanses, and transforms enterprise data with governed preparation pipelines for reliable analytics.",
    },
  },
  {
    id: "rico-report",
    slug: "rico-report",
    name: "RicozReport",
    category: "Data & Analytics",
    tagline: "Self-service reporting and ad-hoc analysis",
    shortDescription:
      "An enterprise self-service reporting platform that enables business users and analysts to create, run, and share reports from authorised data without developer involvement.",
    heroStatement:
      "Every business user, every question — answered without a queue.",
    overview:
      "RicozReport is an enterprise self-service reporting platform that democratises data access by enabling business users and analysts to build and run their own reports against governed data sources. It provides a structured query builder, report scheduling, output management, and governed data access — reducing analyst queue backlogs while ensuring data is used correctly within defined boundaries.",
    capabilities: [
      "Self-service report builder for business users",
      "Governed data source access and permissions",
      "Report scheduling and automated delivery",
      "Ad-hoc query and export management",
      "Report catalogue and sharing governance",
    ],
    benefits: [
      {
        title: "Analyst queue reduction",
        description:
          "Empower business users to answer their own data questions, reducing the volume of routine report requests reaching the analytics team.",
      },
      {
        title: "Data governance",
        description:
          "Provide access to data within defined permissions so self-service does not compromise data security or quality.",
      },
      {
        title: "Business agility",
        description:
          "Enable faster data-driven decisions by removing the dependency between business questions and analyst availability.",
      },
    ],
    features: [
      {
        name: "Report Builder",
        description:
          "Guided report creation interface for business users with field selection, filter configuration, grouping, and simple formula support.",
      },
      {
        name: "Data Access Layer",
        description:
          "Governed data access with table-level and row-level permissions ensuring users only see data appropriate to their role.",
      },
      {
        name: "Schedule Manager",
        description:
          "Schedule reports for automated production and distribution via email, portal, or file destination on configured frequencies.",
      },
      {
        name: "Report Catalogue",
        description:
          "Searchable library of published reports with category organisation, usage tracking, and governance review workflows.",
      },
    ],
    useCases: [
      {
        title: "Department reporting self-service",
        description:
          "Enable department managers to generate their own operational reports from certified data sources without analyst involvement.",
      },
      {
        title: "Scheduled management information delivery",
        description:
          "Automate the production and distribution of standard management reports on daily, weekly, or monthly schedules.",
      },
      {
        title: "Compliance and audit reporting",
        description:
          "Enable compliance and audit teams to run their own data extracts from governed sources for regulatory reporting.",
      },
    ],
    faqs: [
      {
        question:
          "How does RicozReport prevent users from accessing sensitive data?",
        answer:
          "RicozReport applies a governed data access layer with table, row, and column permissions assigned by role, preventing access to data outside each user's authorisation.",
      },
      {
        question: "Can reports be shared securely with external parties?",
        answer:
          "Yes. RicozReport supports secure report delivery to external recipients through encrypted email distribution and time-limited portal access.",
      },
      {
        question: "Does RicozReport support complex calculated fields?",
        answer:
          "RicozReport supports standard formula expressions and certified calculated fields defined by the analytics team that business users can apply without SQL.",
      },
    ],
    relatedProducts: ["rico-analytics", "rico-viz", "rico-financials"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozReport — Enterprise Self-Service Reporting Platform | Ricoz",
      description:
        "RicozReport enables self-service reporting for business users with governed data access, ad-hoc querying, and automated report delivery.",
    },
  },
  {
    id: "rico-ingest",
    slug: "rico-ingest",
    name: "RicozIngest",
    category: "Data & Analytics",
    tagline: "Data ingestion and pipeline management",
    shortDescription:
      "An enterprise data ingestion platform for connecting, extracting, and loading data from diverse sources into analytical environments with governance and monitoring.",
    heroStatement: "Connect every data source — reliably, at enterprise scale.",
    overview:
      "RicozIngest is an enterprise data ingestion and pipeline management platform designed for data engineering and analytics teams that need to move data from source systems into warehouses, lakes, and analytical platforms reliably and at scale. It provides connector management, pipeline configuration, transformation-on-load capability, scheduling, and operational monitoring — replacing fragile scripted ETL with a governed, observable ingestion environment.",
    capabilities: [
      "Multi-source connector management",
      "Pipeline configuration and scheduling",
      "Incremental and full extraction management",
      "Load management and error handling",
      "Pipeline monitoring and alerting",
    ],
    benefits: [
      {
        title: "Reliable data flow",
        description:
          "Maintain consistent, monitored data pipelines that alert on failures and resume from checkpoints without manual intervention.",
      },
      {
        title: "Connector breadth",
        description:
          "Connect to virtually any enterprise source system through a managed connector library, reducing custom integration development.",
      },
      {
        title: "Operational visibility",
        description:
          "Monitor the health of every data pipeline in real time with execution logs, error tracking, and SLA performance reporting.",
      },
    ],
    features: [
      {
        name: "Connector Library",
        description:
          "Pre-built connectors for databases, SaaS platforms, file systems, and APIs with configurable authentication and extraction parameters.",
      },
      {
        name: "Pipeline Builder",
        description:
          "Visual pipeline configuration for extraction, basic transformation, and load operations with dependency management between pipelines.",
      },
      {
        name: "Scheduler",
        description:
          "Flexible pipeline scheduling with cron, event-trigger, and dependency-based execution modes.",
      },
      {
        name: "Operations Monitor",
        description:
          "Real-time pipeline execution monitoring with run history, error logging, alerting, and SLA breach notification.",
      },
    ],
    useCases: [
      {
        title: "Data warehouse population",
        description:
          "Build and maintain the data pipelines that extract, transform, and load source system data into the enterprise data warehouse.",
      },
      {
        title: "SaaS data consolidation",
        description:
          "Pull operational data from SaaS applications into a central analytical environment for cross-system analysis.",
      },
      {
        title: "Real-time data streaming",
        description:
          "Ingest streaming data from operational systems and event sources for near-real-time analytical and operational use cases.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozIngest support real-time as well as batch ingestion?",
        answer:
          "Yes. RicozIngest supports both scheduled batch ingestion and event-driven streaming ingestion depending on the latency requirements of each pipeline.",
      },
      {
        question: "How does RicozIngest handle failures and retries?",
        answer:
          "RicozIngest applies configurable retry logic with exponential backoff for transient failures, checkpoint-based resumption for partial loads, and alerting for persistent errors.",
      },
      {
        question: "Can RicozIngest manage CDC pipelines?",
        answer:
          "Yes. RicozIngest supports change data capture for incremental extraction from source databases, reducing load volume compared to full extractions.",
      },
    ],
    relatedProducts: ["rico-data", "rico-prep", "rico-analytics"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozIngest — Enterprise Data Ingestion & Pipeline Management | Ricoz",
      description:
        "RicozIngest connects and extracts data from enterprise sources with governed pipeline management, scheduling, and operational monitoring.",
    },
  },
  {
    id: "rico-metrics",
    slug: "rico-metrics",
    name: "RicozMetrics",
    category: "Data & Analytics",
    tagline: "Business metrics management and KPI governance",
    shortDescription:
      "An enterprise metrics management platform for defining, governing, and distributing the KPIs and business metrics that the organisation uses to measure performance.",
    heroStatement:
      "One version of every number — owned, governed, and trusted.",
    overview:
      "RicozMetrics is an enterprise metrics management platform that solves the persistent problem of inconsistent KPI definitions across the organisation. It provides a governed metrics catalogue where every business metric is defined once, calculated consistently, and distributed to authorised consumers — eliminating the conflicting numbers that undermine data-driven governance when every team calculates the same metric differently.",
    capabilities: [
      "Metrics catalogue and definition management",
      "Calculation logic governance and versioning",
      "Metric ownership and stewardship",
      "Metric distribution and consumption management",
      "Metric lineage and audit trail",
    ],
    benefits: [
      {
        title: "Single version of truth",
        description:
          "Define each business metric once with governed calculation logic and distribute consistently to every consumer.",
      },
      {
        title: "Organisational trust",
        description:
          "Replace conflicting numbers in different reports with consistent, certified metrics that everyone in the organisation can rely on.",
      },
      {
        title: "Change governance",
        description:
          "Apply version control and approval workflows to metric changes so the impact of definition updates is managed and communicated.",
      },
    ],
    features: [
      {
        name: "Metrics Catalogue",
        description:
          "Comprehensive registry of business metrics with definitions, calculation logic, owners, data sources, and approved usage guidelines.",
      },
      {
        name: "Calculation Engine",
        description:
          "Governed calculation logic for each metric with version history, test cases, and approval workflows for changes.",
      },
      {
        name: "Metric Stewardship",
        description:
          "Assign metric owners and stewards with defined responsibilities for accuracy, definition maintenance, and issue resolution.",
      },
      {
        name: "Consumption API",
        description:
          "Serve certified metric values and definitions to connected dashboards, reports, and applications through a governed consumption API.",
      },
    ],
    useCases: [
      {
        title: "Enterprise KPI standardisation",
        description:
          "Define and govern the official set of business KPIs so every report, dashboard, and meeting uses the same numbers.",
      },
      {
        title: "Data governance programme",
        description:
          "Implement metrics governance as part of a broader data governance programme with stewardship, lineage, and policy management.",
      },
      {
        title: "BI platform metric layer",
        description:
          "Build a certified semantic metric layer that serves consistent values to connected BI and analytics tools across the organisation.",
      },
    ],
    faqs: [
      {
        question:
          "How does RicozMetrics connect to data sources for calculation?",
        answer:
          "RicozMetrics integrates with data warehouses and analytical platforms to execute metric calculations against governed data sources.",
      },
      {
        question: "Can business users request new metrics?",
        answer:
          "Yes. RicozMetrics includes a structured metric request workflow where business users can request new metrics that data owners and engineers then evaluate and implement.",
      },
      {
        question: "How are metric definition changes communicated?",
        answer:
          "When a metric definition changes, RicozMetrics notifies all downstream consumers with the change details, effective date, and impact summary.",
      },
    ],
    relatedProducts: ["rico-analytics", "rico-viz", "rico-intel"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozMetrics — Enterprise Business Metrics & KPI Governance | Ricoz",
      description:
        "RicozMetrics governs the definition, calculation, and distribution of business KPIs to ensure consistent numbers across the organisation.",
    },
  },
  {
    id: "rico-predict",
    slug: "rico-predict",
    name: "RicozPredict",
    category: "Data & Analytics",
    tagline: "Predictive analytics and demand forecasting",
    shortDescription:
      "An enterprise predictive analytics platform that applies statistical models and machine learning to historical data to produce reliable forecasts for business planning.",
    heroStatement:
      "Anticipate what is coming — and plan with genuine confidence.",
    overview:
      "RicozPredict is an enterprise predictive analytics and forecasting platform that enables data and analytics teams to build, validate, and operationalise statistical and machine learning forecast models without building custom infrastructure. It supports demand forecasting, churn prediction, financial projection, and operational pattern analysis — bringing rigorous quantitative forecasting to the decisions that shape business strategy.",
    capabilities: [
      "Statistical and ML forecast model management",
      "Demand and volume forecasting",
      "Churn and risk prediction",
      "Forecast accuracy tracking and model governance",
      "Forecast distribution and consumption",
    ],
    benefits: [
      {
        title: "Quantitative foresight",
        description:
          "Replace intuition-based planning assumptions with statistically grounded forecasts that account for historical patterns and external signals.",
      },
      {
        title: "Model governance",
        description:
          "Manage the full model lifecycle from training through deployment with version control, accuracy monitoring, and refresh management.",
      },
      {
        title: "Accessible forecasting",
        description:
          "Make sophisticated forecasting available to business decision-makers without requiring data science expertise to consume outputs.",
      },
    ],
    features: [
      {
        name: "Forecast Model Studio",
        description:
          "Build, train, and evaluate statistical and ML forecast models on historical data with automated algorithm selection and tuning.",
      },
      {
        name: "Demand Forecaster",
        description:
          "Purpose-built demand forecasting capability for product, resource, and operational volume prediction with seasonal decomposition.",
      },
      {
        name: "Model Registry",
        description:
          "Manage deployed forecast models with version control, performance monitoring, drift detection, and refresh scheduling.",
      },
      {
        name: "Forecast API",
        description:
          "Serve forecast outputs to planning, procurement, and operational systems through a governed API for automated decision support.",
      },
    ],
    useCases: [
      {
        title: "Sales and revenue forecasting",
        description:
          "Build statistically rigorous revenue and sales volume forecasts to complement management judgement in planning cycles.",
      },
      {
        title: "Demand and inventory forecasting",
        description:
          "Forecast product or service demand to drive procurement, inventory, and capacity planning with quantitative accuracy.",
      },
      {
        title: "Customer churn prediction",
        description:
          "Identify customers at risk of churn through predictive modelling on behavioural and engagement signals for proactive retention intervention.",
      },
    ],
    faqs: [
      {
        question:
          "What data science expertise is required to use RicozPredict?",
        answer:
          "RicozPredict includes guided model building workflows accessible to experienced analysts, while also supporting custom model development for data scientists.",
      },
      {
        question: "How does RicozPredict monitor forecast accuracy over time?",
        answer:
          "RicozPredict tracks forecast versus actuals for all deployed models with configurable accuracy thresholds that trigger retraining workflows when performance degrades.",
      },
      {
        question:
          "Can RicozPredict forecasts be consumed by other planning tools?",
        answer:
          "Yes. RicozPredict exposes forecast outputs through a REST API and file export integrations for consumption by planning, supply chain, and financial systems.",
      },
    ],
    relatedProducts: ["rico-analytics", "rico-metrics", "rico-budget"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozPredict — Enterprise Predictive Analytics & Forecasting | Ricoz",
      description:
        "RicozPredict builds and operationalises statistical and ML forecast models for demand, churn, and business planning at enterprise scale.",
    },
  },
  {
    id: "rico-catalog",
    slug: "rico-catalog",
    name: "RicozCatalog",
    category: "Data & Analytics",
    tagline: "Enterprise data catalogue and metadata management",
    shortDescription:
      "An enterprise data catalogue platform that documents, classifies, and governs organisational data assets — making data discoverable, trusted, and correctly used.",
    heroStatement: "Know what data exists, what it means, and who owns it.",
    overview:
      "RicozCatalog is an enterprise data catalogue and metadata management platform that gives data teams and data governance officers a governed registry of all organisational data assets. It automates metadata discovery, enables business glossary management, tracks data lineage, and applies data classification — making data assets discoverable, understandable, and governed across the organisation.",
    capabilities: [
      "Automated metadata discovery and ingestion",
      "Business glossary and data dictionary management",
      "Data lineage tracking and visualisation",
      "Data classification and sensitivity tagging",
      "Data stewardship and ownership governance",
    ],
    benefits: [
      {
        title: "Data discoverability",
        description:
          "Help analysts and business users find the data they need quickly through a searchable, documented catalogue of available assets.",
      },
      {
        title: "Governance coverage",
        description:
          "Maintain comprehensive documentation and classification for all data assets, supporting regulatory and data governance requirements.",
      },
      {
        title: "Trust and context",
        description:
          "Provide business users with the context, ownership information, and quality status they need to use data with confidence.",
      },
    ],
    features: [
      {
        name: "Metadata Discovery",
        description:
          "Automated scanning and ingestion of technical metadata from connected databases, warehouses, and data platforms.",
      },
      {
        name: "Business Glossary",
        description:
          "Governed business term definitions linked to technical data assets, providing business context alongside technical metadata.",
      },
      {
        name: "Data Lineage",
        description:
          "Visual end-to-end data lineage from source through transformation to consumption, showing how data flows and changes.",
      },
      {
        name: "Classification Engine",
        description:
          "Apply sensitivity, PII, and compliance classification tags to data assets with automated scanning and manual curation support.",
      },
    ],
    useCases: [
      {
        title: "Enterprise data governance",
        description:
          "Build a comprehensive data governance programme with catalogued assets, classified data, documented lineage, and assigned stewardship.",
      },
      {
        title: "Self-service analytics enablement",
        description:
          "Accelerate analyst onboarding and self-service adoption by making data assets discoverable with business context and quality information.",
      },
      {
        title: "Regulatory compliance",
        description:
          "Classify, document, and demonstrate governance over sensitive and regulated data assets for GDPR, CCPA, and similar compliance requirements.",
      },
    ],
    faqs: [
      {
        question: "How does RicozCatalog discover metadata automatically?",
        answer:
          "RicozCatalog connects to data sources and runs automated metadata extraction to capture table structures, column definitions, usage statistics, and sample data.",
      },
      {
        question: "Can business users contribute to the catalogue?",
        answer:
          "Yes. RicozCatalog includes business user interfaces for adding descriptions, glossary links, and quality feedback to technical assets in a managed curation workflow.",
      },
      {
        question: "How does data lineage work across different systems?",
        answer:
          "RicozCatalog stitches lineage across systems by tracking data from sources through transformation pipelines to target tables and consumption layers.",
      },
    ],
    relatedProducts: ["rico-data", "rico-prep", "rico-ingest"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozCatalog — Enterprise Data Catalogue & Metadata Management | Ricoz",
      description:
        "RicozCatalog discovers, documents, and governs enterprise data assets with metadata management, lineage tracking, and data classification.",
    },
  },

  {
    id: "rico-lake",
    slug: "rico-lake",
    name: "RicozLake",
    category: "Data & Analytics",
    tagline: "Enterprise data lake and storage management",
    shortDescription:
      "An enterprise data lake management platform for ingesting, organising, governing, and querying large-scale raw and processed data across the organisation.",
    heroStatement:
      "Store everything — and make it all findable, governed, and queryable.",
    overview:
      "RicozLake is an enterprise data lake management platform designed for data engineering and architecture teams that need to build and operate a governed analytical data store at enterprise scale. It provides raw data ingestion from diverse sources, storage zone management, data organisation and cataloguing, query layer management, and data governance — transforming unmanaged data stores into a structured, discoverable, and compliant analytical asset.",
    capabilities: [
      "Multi-source data lake ingestion",
      "Storage zone and partition management",
      "Data catalogue and discoverability",
      "Query and access layer management",
      "Data retention and governance policy management",
    ],
    benefits: [
      {
        title: "Analytical breadth",
        description:
          "Store raw, semi-structured, and processed data at any scale without forcing it into rigid schemas before value is understood.",
      },
      {
        title: "Governed structure",
        description:
          "Apply organisation and governance to raw data storage so the lake remains navigable and compliant rather than becoming a data swamp.",
      },
      {
        title: "Query flexibility",
        description:
          "Query data directly in the lake without movement to a separate environment, accelerating exploration and reducing infrastructure cost.",
      },
    ],
    features: [
      {
        name: "Ingestion Manager",
        description:
          "Configure and manage data ingestion into the lake from batch files, streaming sources, and direct database extraction.",
      },
      {
        name: "Zone Manager",
        description:
          "Structure the lake into raw, curated, and certified zones with access policies, retention rules, and automated promotion workflows.",
      },
      {
        name: "Lake Catalogue",
        description:
          "Register and document lake datasets with schema information, data lineage, quality indicators, and ownership for discoverability.",
      },
      {
        name: "Query Interface",
        description:
          "Execute SQL-based queries against lake datasets using a governed query interface with cost controls and result management.",
      },
    ],
    useCases: [
      {
        title: "Enterprise analytical data foundation",
        description:
          "Build a governed data lake that stores raw enterprise data at scale as the foundation for analytics, ML, and data product development.",
      },
      {
        title: "ML and AI data preparation",
        description:
          "Store and organise the large-scale datasets that machine learning and AI initiatives require, with governance and quality management.",
      },
      {
        title: "Data archiving and long-term retention",
        description:
          "Manage the long-term retention of operational and transactional data at cost-effective storage tiers with governance and retrieval capability.",
      },
    ],
    faqs: [
      {
        question: "How does RicozLake relate to RicozIngest?",
        answer:
          "RicozIngest manages the pipeline and orchestration layer for moving data between systems. RicozLake manages the storage environment, organisation, and governance of data once it arrives.",
      },
      {
        question: "Does RicozLake support cloud object storage?",
        answer:
          "Yes. RicozLake is designed to manage data on cloud object storage platforms with cost-tier management, partition optimisation, and lifecycle policies.",
      },
      {
        question: "How is data in the lake governed for compliance?",
        answer:
          "RicozLake applies classification tags, access controls, and retention policies at the dataset and zone level to meet regulatory data governance requirements.",
      },
    ],
    relatedProducts: ["rico-data", "rico-ingest", "rico-catalog"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozLake — Enterprise Data Lake Management Platform | Ricoz",
      description:
        "RicozLake manages enterprise data lake ingestion, zone governance, catalogue, and query access for large-scale analytical data.",
    },
  },

  // ─── Batch 05: IT Management ─────────────────────────────────────────────────

  {
    id: "rico-itsm",
    slug: "rico-itsm",
    name: "RicozITSM",
    category: "IT Management",
    tagline: "IT service management and ITSIL-aligned operations",
    shortDescription:
      "An enterprise IT service management platform for governing incident, change, problem, and service request management across complex IT operations.",
    heroStatement:
      "Deliver IT services with the consistency and governance the business deserves.",
    overview:
      "RicozITSM is an enterprise IT service management platform aligned to ITIL best practices, designed for IT organisations managing complex service environments across multiple teams, technologies, and business units. It provides incident management, change management, problem management, service request fulfilment, and IT service catalogue management — giving IT operations the structure to deliver services reliably and govern them effectively.",
    capabilities: [
      "Incident and major incident management",
      "Change management and CAB governance",
      "Problem management and root cause analysis",
      "Service request and fulfilment management",
      "IT service catalogue management",
    ],
    benefits: [
      {
        title: "Service reliability",
        description:
          "Resolve incidents faster with structured workflows, escalation paths, and major incident coordination protocols.",
      },
      {
        title: "Change governance",
        description:
          "Assess, approve, and implement changes through structured CAB processes that reduce the risk of service disruption from poorly managed change.",
      },
      {
        title: "Service quality transparency",
        description:
          "Track service performance against SLAs with real-time dashboards and management reporting for IT leadership and business stakeholders.",
      },
    ],
    features: [
      {
        name: "Incident Manager",
        description:
          "End-to-end incident management from detection through resolution with SLA tracking, escalation workflows, and major incident coordination.",
      },
      {
        name: "Change Workflow",
        description:
          "Structured change request, assessment, CAB scheduling, approval, and implementation management with rollback planning.",
      },
      {
        name: "Problem Manager",
        description:
          "Link recurring incidents to problems, manage root cause investigation, and track known error documentation and remediation.",
      },
      {
        name: "Service Catalogue",
        description:
          "Governed IT service catalogue with request forms, fulfilment workflows, and SLA definitions for every service offered.",
      },
    ],
    useCases: [
      {
        title: "Enterprise IT operations management",
        description:
          "Run enterprise IT operations with structured incident, change, and problem management aligned to ITIL v4 best practices.",
      },
      {
        title: "Major incident coordination",
        description:
          "Coordinate major incident response with structured war-room management, communication workflows, and post-incident review processes.",
      },
      {
        title: "IT governance and compliance",
        description:
          "Demonstrate IT governance maturity through documented, auditable change management and incident resolution processes.",
      },
    ],
    faqs: [
      {
        question: "Is RicozITSM aligned to ITIL v4?",
        answer:
          "Yes. RicozITSM is designed around ITIL v4 practices for incident, change, problem, and service request management with configurable adaptations for each organisation.",
      },
      {
        question: "Can RicozITSM integrate with monitoring and alerting tools?",
        answer:
          "Yes. RicozITSM integrates with infrastructure and application monitoring platforms to auto-create incidents from alerts with enrichment from asset and CMDB data.",
      },
      {
        question: "Does RicozITSM include a CMDB?",
        answer:
          "Yes. RicozITSM includes a configuration management database for registering and managing IT assets and their relationships to services.",
      },
    ],
    relatedProducts: ["rico-infra", "rico-change", "rico-endpoint"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozITSM — Enterprise IT Service Management Platform | Ricoz",
      description:
        "RicozITSM governs incident, change, problem, and service request management for enterprise IT operations aligned to ITIL v4.",
    },
  },
  {
    id: "rico-endpoint",
    slug: "rico-endpoint",
    name: "RicozEndpoint",
    category: "IT Management",
    tagline: "Endpoint management and device lifecycle",
    shortDescription:
      "An enterprise endpoint management platform for provisioning, securing, monitoring, and managing all devices across the organisation from a unified administration environment.",
    heroStatement:
      "Govern every device — from first login to final decommission.",
    overview:
      "RicozEndpoint is an enterprise unified endpoint management platform that gives IT teams central governance over the full lifecycle of every device — laptops, desktops, mobile devices, and shared hardware — across the organisation. It provides automated provisioning, configuration management, software deployment, compliance monitoring, and secure remote management for distributed device fleets of any scale.",
    capabilities: [
      "Unified device provisioning and enrolment",
      "Configuration and policy management",
      "Software deployment and patch management",
      "Device compliance monitoring",
      "Remote management and support",
    ],
    benefits: [
      {
        title: "Fleet consistency",
        description:
          "Enforce consistent device configurations and policies across the entire fleet, eliminating the security and support overhead of configuration drift.",
      },
      {
        title: "Automation",
        description:
          "Automate provisioning, software deployment, and patching to reduce IT team workload and time-to-productivity for new devices.",
      },
      {
        title: "Compliance visibility",
        description:
          "Monitor device compliance with security policies in real time, identifying non-compliant endpoints before they create risk.",
      },
    ],
    features: [
      {
        name: "Provisioning Hub",
        description:
          "Automated zero-touch provisioning workflows for new devices with role-based configuration, software, and policy application.",
      },
      {
        name: "Policy Manager",
        description:
          "Define and enforce device configuration policies including security settings, app permissions, and network controls.",
      },
      {
        name: "Software Deployment",
        description:
          "Distribute and update software across the fleet with staged rollouts, installation tracking, and rollback capability.",
      },
      {
        name: "Compliance Dashboard",
        description:
          "Real-time device compliance monitoring against configured security and policy standards with exception alerting and remediation workflows.",
      },
    ],
    useCases: [
      {
        title: "Enterprise device fleet management",
        description:
          "Manage thousands of endpoints across the organisation from a single unified platform with automated provisioning and policy governance.",
      },
      {
        title: "Remote workforce support",
        description:
          "Manage and support remote employee devices with remote configuration, patch deployment, and secure troubleshooting tools.",
      },
      {
        title: "Security compliance management",
        description:
          "Monitor and enforce device security compliance with automated policy enforcement and exception management across the fleet.",
      },
    ],
    faqs: [
      {
        question: "Does RicozEndpoint support both Windows and macOS?",
        answer:
          "Yes. RicozEndpoint provides unified management for Windows, macOS, iOS, Android, and Linux devices from a single administration console.",
      },
      {
        question: "How does zero-touch provisioning work?",
        answer:
          "New devices are automatically enrolled and configured upon first power-on based on role-assigned provisioning profiles without requiring IT hands-on involvement.",
      },
      {
        question:
          "Can RicozEndpoint integrate with our identity and directory systems?",
        answer:
          "Yes. RicozEndpoint integrates with enterprise directory and identity platforms for user-device association, policy assignment, and single sign-on.",
      },
    ],
    relatedProducts: ["rico-itsm", "rico-identity", "rico-infra"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozEndpoint — Enterprise Endpoint Management Platform | Ricoz",
      description:
        "RicozEndpoint manages device provisioning, configuration, software deployment, and compliance across the enterprise device fleet.",
    },
  },
  {
    id: "rico-infra",
    slug: "rico-infra",
    name: "RicozInfra",
    category: "IT Management",
    tagline: "Infrastructure monitoring and availability management",
    shortDescription:
      "An enterprise infrastructure monitoring platform for tracking the health, performance, and availability of servers, networks, and cloud infrastructure in real time.",
    heroStatement:
      "See every layer of your infrastructure — before problems reach the business.",
    overview:
      "RicozInfra is an enterprise infrastructure monitoring platform that provides IT operations teams with real-time visibility into the health and performance of physical servers, virtualised environments, network infrastructure, and cloud services. It consolidates monitoring across hybrid and multi-cloud environments into a unified operational view, enabling proactive identification and resolution of infrastructure issues before they cause service disruption.",
    capabilities: [
      "Server and virtualisation monitoring",
      "Network performance monitoring",
      "Cloud and hybrid infrastructure visibility",
      "Threshold alerting and alert correlation",
      "Infrastructure capacity and trend reporting",
    ],
    benefits: [
      {
        title: "Proactive detection",
        description:
          "Identify infrastructure performance degradation and capacity issues before they escalate into service outages.",
      },
      {
        title: "Unified visibility",
        description:
          "Monitor physical, virtual, and cloud infrastructure from a single platform, eliminating blind spots in hybrid environments.",
      },
      {
        title: "Rapid diagnosis",
        description:
          "Correlate alerts across infrastructure layers to rapidly identify root causes rather than investigating individual symptoms in isolation.",
      },
    ],
    features: [
      {
        name: "Infrastructure Dashboard",
        description:
          "Unified real-time view of infrastructure health across servers, storage, network, and cloud services with topology visualisation.",
      },
      {
        name: "Alert Engine",
        description:
          "Configurable threshold-based and anomaly-based alerting with intelligent grouping to reduce noise and highlight genuine issues.",
      },
      {
        name: "Capacity Manager",
        description:
          "Track infrastructure utilisation trends and forecast future capacity requirements to support infrastructure planning.",
      },
      {
        name: "Cloud Monitor",
        description:
          "Native visibility into AWS, Azure, and Google Cloud infrastructure with service health, cost monitoring, and resource utilisation.",
      },
    ],
    useCases: [
      {
        title: "Data centre operations monitoring",
        description:
          "Monitor on-premises data centre infrastructure with real-time health dashboards, alert management, and capacity planning.",
      },
      {
        title: "Hybrid and multi-cloud visibility",
        description:
          "Unify monitoring across on-premises and cloud infrastructure to manage hybrid environments from a single operational view.",
      },
      {
        title: "SLA performance management",
        description:
          "Measure infrastructure availability and performance against SLAs with continuous monitoring, reporting, and breach alerting.",
      },
    ],
    faqs: [
      {
        question: "Does RicozInfra support agentless monitoring?",
        answer:
          "Yes. RicozInfra supports both agent-based monitoring for deep telemetry and agentless methods for environments where agent deployment is restricted.",
      },
      {
        question: "How does alert correlation work?",
        answer:
          "RicozInfra groups related alerts from the same infrastructure event using topology awareness and timing correlation to present a single root-cause view.",
      },
      {
        question: "Can RicozInfra integrate with our ITSM platform?",
        answer:
          "Yes. RicozInfra integrates with RicozITSM and third-party ITSM platforms to automatically create incidents from critical alert conditions.",
      },
    ],
    relatedProducts: ["rico-itsm", "rico-appmon", "rico-techops"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozInfra — Enterprise Infrastructure Monitoring Platform | Ricoz",
      description:
        "RicozInfra monitors server, network, and cloud infrastructure health in real time with alerting, correlation, and capacity management.",
    },
  },
  {
    id: "rico-appmon",
    slug: "rico-appmon",
    name: "RicozAppMon",
    category: "IT Management",
    tagline: "Application performance monitoring and observability",
    shortDescription:
      "An enterprise application performance monitoring platform that provides end-to-end visibility into application health, response times, errors, and user experience.",
    heroStatement:
      "Understand exactly what your applications are doing — and why.",
    overview:
      "RicozAppMon is an enterprise application performance monitoring platform that gives operations and development teams deep visibility into application behaviour, transaction flows, response times, and error rates across the application estate. It supports distributed tracing, synthetic monitoring, real user monitoring, and error analysis — enabling teams to detect, diagnose, and resolve application performance issues before they impact users.",
    capabilities: [
      "Application transaction and trace monitoring",
      "Real user monitoring and experience tracking",
      "Synthetic monitoring and availability testing",
      "Error rate detection and diagnostics",
      "Application performance baseline management",
    ],
    benefits: [
      {
        title: "User experience protection",
        description:
          "Detect application performance degradation before users report it, protecting the experience that customers and employees depend on.",
      },
      {
        title: "Faster root cause analysis",
        description:
          "Trace slow transactions through the full application stack to identify the exact component causing degradation.",
      },
      {
        title: "Deployment confidence",
        description:
          "Validate that new releases do not introduce performance regressions through automated comparison against pre-deployment baselines.",
      },
    ],
    features: [
      {
        name: "Distributed Tracing",
        description:
          "Trace individual requests end-to-end through microservices and dependencies to pinpoint performance bottlenecks.",
      },
      {
        name: "Real User Monitoring",
        description:
          "Capture real user session performance data including page loads, API calls, and interaction timing from production traffic.",
      },
      {
        name: "Synthetic Monitor",
        description:
          "Run scripted synthetic tests on critical user journeys from multiple locations to measure availability and performance proactively.",
      },
      {
        name: "Anomaly Detection",
        description:
          "Automatically detect performance anomalies using baseline models without requiring manual threshold configuration for every metric.",
      },
    ],
    useCases: [
      {
        title: "Production application performance management",
        description:
          "Monitor production applications continuously for performance degradation, error spikes, and user experience impact.",
      },
      {
        title: "Release performance validation",
        description:
          "Validate new deployment performance against pre-release baselines to catch regressions before they reach all users.",
      },
      {
        title: "SLA and availability reporting",
        description:
          "Track application availability and response time SLAs with continuous monitoring and compliance reporting.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozAppMon support containerised and microservices architectures?",
        answer:
          "Yes. RicozAppMon supports Kubernetes-native monitoring with container visibility, service mesh integration, and distributed tracing across microservices.",
      },
      {
        question: "How quickly does RicozAppMon detect anomalies?",
        answer:
          "RicozAppMon applies streaming analysis to application metrics with configurable detection windows, typically identifying anomalies within minutes of onset.",
      },
      {
        question:
          "Can RicozAppMon integrate with our incident management system?",
        answer:
          "Yes. RicozAppMon integrates with ITSM and alerting platforms to route performance anomaly alerts into incident management workflows.",
      },
    ],
    relatedProducts: ["rico-infra", "rico-itsm", "rico-techops"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozAppMon — Enterprise Application Performance Monitoring | Ricoz",
      description:
        "RicozAppMon delivers APM with distributed tracing, real user monitoring, synthetic testing, and anomaly detection for enterprise applications.",
    },
  },
  {
    id: "rico-techops",
    slug: "rico-techops",
    name: "RicozTechOps",
    category: "IT Management",
    tagline: "Technology operations and IT command centre",
    shortDescription:
      "An enterprise technology operations platform that unifies IT operations monitoring, event management, and operational runbook execution in a single command centre.",
    heroStatement: "Run IT operations with total situational awareness.",
    overview:
      "RicozTechOps is an enterprise technology operations management platform designed for IT operations centres managing complex, multi-platform environments. It consolidates event feeds, alert streams, operational dashboards, runbook execution, and communication in a single operations environment — giving IT operations teams the situational awareness and tooling to maintain service quality across the entire technology estate.",
    capabilities: [
      "Unified event and alert management",
      "Operations centre dashboards",
      "Runbook automation and execution",
      "On-call scheduling and escalation",
      "Operational communication management",
    ],
    benefits: [
      {
        title: "Situational awareness",
        description:
          "Consolidate event feeds from every monitoring tool into a unified operations view that surfaces the most critical issues.",
      },
      {
        title: "Response automation",
        description:
          "Execute runbook-driven automated responses to known event patterns, reducing manual intervention and response time.",
      },
      {
        title: "Team coordination",
        description:
          "Coordinate on-call engineers, escalation paths, and incident communications from within the operations environment.",
      },
    ],
    features: [
      {
        name: "Event Console",
        description:
          "Unified event console aggregating alerts from monitoring, security, and operational tools with noise reduction and correlation.",
      },
      {
        name: "Runbook Manager",
        description:
          "Create, version, and execute operational runbooks for standard responses to common events with audit logging.",
      },
      {
        name: "On-Call Manager",
        description:
          "Manage on-call schedules, escalation policies, and alert routing with configurable notification channels.",
      },
      {
        name: "Operations Dashboard",
        description:
          "Configurable real-time operations dashboards for NOC screens, shift handover, and management visibility.",
      },
    ],
    useCases: [
      {
        title: "Network operations centre",
        description:
          "Equip a 24/7 NOC with unified monitoring, event management, and runbook execution for enterprise infrastructure operations.",
      },
      {
        title: "IT operations shift management",
        description:
          "Manage shift operations with real-time dashboards, handover tooling, and on-call coordination for IT operations teams.",
      },
      {
        title: "Automated event response",
        description:
          "Automate responses to high-frequency, well-understood events through runbook automation, reducing manual workload for operations engineers.",
      },
    ],
    faqs: [
      {
        question: "How does RicozTechOps connect to monitoring tools?",
        answer:
          "RicozTechOps integrates with infrastructure and application monitoring platforms through native connectors and webhook-based integration for alert ingestion.",
      },
      {
        question:
          "Can runbooks be automated to execute without human intervention?",
        answer:
          "Yes. RicozTechOps supports fully automated runbook execution triggered by event patterns, alongside human-in-the-loop execution for higher-risk responses.",
      },
      {
        question: "Does RicozTechOps support multi-team operations?",
        answer:
          "Yes. RicozTechOps supports multiple operations teams with separate dashboards, event routing, and on-call management for each area of responsibility.",
      },
    ],
    relatedProducts: ["rico-itsm", "rico-infra", "rico-appmon"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozTechOps — Enterprise Technology Operations & NOC Platform | Ricoz",
      description:
        "RicozTechOps unifies event management, runbook execution, and on-call coordination for enterprise IT operations centres.",
    },
  },
  {
    id: "rico-change",
    slug: "rico-change",
    name: "RicozChange",
    category: "IT Management",
    tagline: "IT change management and release governance",
    shortDescription:
      "An enterprise IT change management platform for governing the planning, assessment, approval, and implementation of technology changes with minimal service disruption.",
    heroStatement:
      "Every change, governed — every risk, understood before deployment.",
    overview:
      "RicozChange is an enterprise IT change management platform built for organisations that need rigorous governance over technology changes in complex, interconnected environments. It provides change request management, risk assessment, CAB scheduling, approval workflows, implementation planning, and post-implementation review — creating the structured change process that reduces change-related incidents and builds stakeholder confidence in IT delivery.",
    capabilities: [
      "Change request creation and classification",
      "Risk and impact assessment",
      "Change advisory board scheduling and management",
      "Implementation and rollback planning",
      "Change performance and success tracking",
    ],
    benefits: [
      {
        title: "Reduced change-related incidents",
        description:
          "Structured risk assessment and approval governance identifies potential issues before changes reach production environments.",
      },
      {
        title: "Business confidence",
        description:
          "Give business stakeholders visibility into planned changes and their potential impact, building confidence in IT delivery.",
      },
      {
        title: "Audit readiness",
        description:
          "Maintain a complete, auditable record of every change from request through implementation for compliance and governance review.",
      },
    ],
    features: [
      {
        name: "Change Request Manager",
        description:
          "Structured change request submission with configurable classification, risk scoring, and routing to the appropriate approval path.",
      },
      {
        name: "Risk Assessment Module",
        description:
          "Guided risk and impact assessment framework covering technical, service, and business impact dimensions for each change type.",
      },
      {
        name: "CAB Manager",
        description:
          "Schedule and manage Change Advisory Board meetings with agenda management, pre-read distribution, and decision recording.",
      },
      {
        name: "Implementation Planner",
        description:
          "Structured implementation and rollback planning tools with step sequencing, time estimates, and success criteria definition.",
      },
    ],
    useCases: [
      {
        title: "Enterprise IT change governance",
        description:
          "Apply consistent, risk-based change governance across all technology changes with CAB oversight and complete audit trails.",
      },
      {
        title: "Major change coordination",
        description:
          "Coordinate complex, high-impact changes with structured planning, extended approval processes, and stakeholder communication management.",
      },
      {
        title: "Regulatory compliance",
        description:
          "Maintain change governance documentation that meets the requirements of financial services, healthcare, and other regulated sector audits.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozChange support emergency and standard change processes?",
        answer:
          "Yes. RicozChange supports configurable change types including standard pre-approved, normal, and emergency with appropriate approval and governance paths for each.",
      },
      {
        question: "Can RicozChange link to our ITSM incident records?",
        answer:
          "Yes. RicozChange integrates with RicozITSM and third-party ITSM platforms to link changes to incidents they may have caused or resolved.",
      },
      {
        question: "How does post-implementation review work?",
        answer:
          "Scheduled PIR workflows prompt change implementers to record actual versus planned outcomes, capturing lessons learned and success confirmation.",
      },
    ],
    relatedProducts: ["rico-itsm", "rico-techops", "rico-shield"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozChange — Enterprise IT Change Management Platform | Ricoz",
      description:
        "RicozChange governs IT change planning, risk assessment, CAB management, and implementation tracking to minimise change-related service disruption.",
    },
  },

  {
    id: "rico-itreport",
    slug: "rico-itreport",
    name: "RicozITReport",
    category: "IT Management",
    tagline: "IT performance reporting and service intelligence",
    shortDescription:
      "An enterprise IT performance reporting platform for measuring, analysing, and reporting on IT service quality, operational metrics, and technology investment outcomes.",
    heroStatement:
      "Give IT leadership the intelligence to manage with data — not intuition.",
    overview:
      "RicozITReport is an enterprise IT performance reporting and service intelligence platform designed for IT leaders, service managers, and CIOs who need accurate, governed reporting on IT operational performance and investment outcomes. It consolidates data from ITSM, infrastructure, application, and project management platforms into a unified reporting environment — enabling IT leadership to manage by evidence and demonstrate IT's contribution to the business.",
    capabilities: [
      "IT service performance reporting",
      "SLA and KPI tracking and analytics",
      "IT operational dashboards",
      "Infrastructure and application performance intelligence",
      "IT investment and value reporting",
    ],
    benefits: [
      {
        title: "Leadership visibility",
        description:
          "Give the CIO and IT leadership team reliable, consistent performance data without depending on individually compiled status reports.",
      },
      {
        title: "SLA accountability",
        description:
          "Track service level agreement performance in real time with breach alerting and trend analysis across all IT services.",
      },
      {
        title: "Business value demonstration",
        description:
          "Report IT's contribution to business outcomes with investment performance, availability metrics, and service improvement trends.",
      },
    ],
    features: [
      {
        name: "IT Dashboard Hub",
        description:
          "Configurable IT performance dashboards for operational, management, and executive audiences with role-appropriate metric sets.",
      },
      {
        name: "SLA Reporter",
        description:
          "Track and report SLA performance across all IT services with real-time attainment, breach analysis, and period comparison.",
      },
      {
        name: "Operational Metrics",
        description:
          "Monitor key IT operational metrics — incident volumes, resolution times, change success rates, and availability — in a single view.",
      },
      {
        name: "Investment Reporter",
        description:
          "Report on IT project investment performance, technology cost trends, and operational efficiency improvements for board and executive review.",
      },
    ],
    useCases: [
      {
        title: "CIO reporting and board communications",
        description:
          "Produce accurate, consistent IT performance reports for executive and board audiences with investment, quality, and outcome metrics.",
      },
      {
        title: "IT service level management",
        description:
          "Monitor and govern SLA performance across IT services with real-time dashboards and automated breach reporting.",
      },
      {
        title: "IT operations performance review",
        description:
          "Conduct data-driven operations reviews with consistent metrics across incident management, change success, and availability.",
      },
    ],
    faqs: [
      {
        question: "What systems does RicozITReport pull data from?",
        answer:
          "RicozITReport integrates with ITSM, infrastructure monitoring, application performance, and project management platforms to build a consolidated IT performance dataset.",
      },
      {
        question: "Can RicozITReport produce automated executive reports?",
        answer:
          "Yes. RicozITReport generates scheduled executive report packages with configurable content and distribution for IT leadership and board communications.",
      },
      {
        question: "How does SLA tracking work for multiple service tiers?",
        answer:
          "RicozITReport supports configurable SLA definitions by service and tier with separate measurement windows, targets, and reporting for each.",
      },
    ],
    relatedProducts: ["rico-itsm", "rico-infra", "rico-intel"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozITReport — IT Performance Reporting & Service Intelligence | Ricoz",
      description:
        "RicozITReport provides IT performance dashboards, SLA reporting, operational metrics, and investment reporting for IT leadership.",
    },
  },

  // ─── Batch 06: Security & Identity ──────────────────────────────────────────

  {
    id: "rico-identity",
    slug: "rico-identity",
    name: "RicozIdentity",
    category: "Security & Identity",
    tagline: "Identity and access management",
    shortDescription:
      "An enterprise identity and access management platform for governing user identities, authentication, and access rights across applications and infrastructure.",
    heroStatement:
      "Control who has access to what — with precision and complete confidence.",
    overview:
      "RicozIdentity is an enterprise identity and access management platform that gives IT security and operations teams a unified environment for managing user identities, authenticating access, and governing permissions across the technology estate. It provides identity lifecycle management, single sign-on, multi-factor authentication, role-based access control, and access certification — forming the identity governance foundation that modern enterprise security requires.",
    capabilities: [
      "Identity lifecycle management",
      "Single sign-on and federation",
      "Multi-factor authentication",
      "Role-based access control and entitlements",
      "Access certification and review",
    ],
    benefits: [
      {
        title: "Reduced attack surface",
        description:
          "Enforce least-privilege access across every application, reducing the access rights available to compromised accounts.",
      },
      {
        title: "Operational efficiency",
        description:
          "Automate identity provisioning and deprovisioning so joiner, mover, and leaver processes are executed consistently and promptly.",
      },
      {
        title: "Compliance assurance",
        description:
          "Demonstrate access governance compliance with regular certification campaigns, access reviews, and complete audit trails.",
      },
    ],
    features: [
      {
        name: "Identity Lifecycle Manager",
        description:
          "Automate the provisioning and deprovisioning of user accounts across connected applications based on HR and operational system events.",
      },
      {
        name: "SSO Engine",
        description:
          "Federated single sign-on for all connected applications using SAML, OIDC, and OAuth2 with configurable session management.",
      },
      {
        name: "MFA Manager",
        description:
          "Enforce multi-factor authentication with configurable policies by application, user risk, and access sensitivity.",
      },
      {
        name: "Access Certification",
        description:
          "Schedule and manage periodic access certification campaigns with manager review, evidence capture, and revocation workflows.",
      },
    ],
    useCases: [
      {
        title: "Enterprise identity governance",
        description:
          "Govern user identities and access entitlements across the application estate with lifecycle automation and access certification.",
      },
      {
        title: "Zero trust access implementation",
        description:
          "Implement zero trust access controls with identity-driven policy enforcement, continuous authentication, and least-privilege entitlements.",
      },
      {
        title: "Compliance access reviews",
        description:
          "Meet regulatory access review requirements with structured certification campaigns, documented decisions, and audit-ready records.",
      },
    ],
    faqs: [
      {
        question: "Which authentication standards does RicozIdentity support?",
        answer:
          "RicozIdentity supports SAML 2.0, OpenID Connect, OAuth 2.0, and LDAP for application integration, with hardware and app-based MFA methods.",
      },
      {
        question: "How does identity provisioning connect to HR systems?",
        answer:
          "RicozIdentity integrates with core HR and directory systems to trigger automated provisioning, role assignment, and deprovisioning based on employment events.",
      },
      {
        question:
          "Can RicozIdentity manage both employees and external identities?",
        answer:
          "Yes. RicozIdentity supports separate identity stores for employees, contractors, partners, and customers with appropriate access boundaries for each.",
      },
    ],
    relatedProducts: ["rico-shield", "rico-access", "rico-comply"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozIdentity — Enterprise Identity & Access Management | Ricoz",
      description:
        "RicozIdentity governs user identities, SSO, MFA, and access certifications across the enterprise technology estate.",
    },
  },
  {
    id: "rico-access",
    slug: "rico-access",
    name: "RicozAccess",
    category: "Security & Identity",
    tagline: "Privileged access and secrets management",
    shortDescription:
      "An enterprise privileged access management platform for securing, controlling, and monitoring access to critical systems, administrative accounts, and secrets.",
    heroStatement:
      "Protect your most powerful credentials — with zero tolerance for oversight.",
    overview:
      "RicozAccess is an enterprise privileged access management platform that secures the administrative credentials, service accounts, and secrets that provide the highest-risk access in any enterprise environment. It provides privileged account vaulting, just-in-time access, session recording, and secrets management — giving security teams complete control over who can access critical systems and a full record of what they did when they got there.",
    capabilities: [
      "Privileged account vaulting and rotation",
      "Just-in-time access provisioning",
      "Privileged session recording and monitoring",
      "Secrets and API key management",
      "Privileged access analytics and reporting",
    ],
    benefits: [
      {
        title: "Credential security",
        description:
          "Eliminate standing privileged access and hardcoded credentials through vaulting, rotation, and just-in-time provisioning.",
      },
      {
        title: "Session accountability",
        description:
          "Record every privileged session with full replay capability so any action taken with elevated credentials is permanently attributable.",
      },
      {
        title: "Secrets governance",
        description:
          "Centralise management of application secrets, API keys, and certificates with rotation automation and consumption audit trails.",
      },
    ],
    features: [
      {
        name: "Credential Vault",
        description:
          "Secure vault for privileged account passwords with automated rotation, checkout workflows, and dual-control access for critical systems.",
      },
      {
        name: "Just-in-Time Access",
        description:
          "Provision temporary elevated access for specific tasks with time-limited scope, approval requirements, and automatic revocation.",
      },
      {
        name: "Session Recorder",
        description:
          "Record privileged sessions with full keylogging and screen capture for forensic investigation and compliance evidence.",
      },
      {
        name: "Secrets Manager",
        description:
          "Centralised secrets management for applications including database credentials, API keys, and certificates with dynamic issuance and rotation.",
      },
    ],
    useCases: [
      {
        title: "Privileged account governance",
        description:
          "Secure and govern all privileged accounts across the IT estate with vaulting, rotation, and controlled checkout.",
      },
      {
        title: "Cloud infrastructure access",
        description:
          "Manage just-in-time access to cloud infrastructure with temporary credential issuance and full session recording.",
      },
      {
        title: "DevOps secrets management",
        description:
          "Integrate secrets management into CI/CD pipelines to eliminate hardcoded credentials from application code and configuration.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozAccess integrate with directory services for privileged account discovery?",
        answer:
          "Yes. RicozAccess integrates with Active Directory, LDAP, and cloud directories to discover privileged accounts and onboard them to the vault.",
      },
      {
        question: "How does just-in-time access work?",
        answer:
          "Just-in-time access provisions temporary elevated permissions for a specific system and timeframe upon request approval, revoking them automatically when the window expires.",
      },
      {
        question: "Can RicozAccess manage cloud provider credentials?",
        answer:
          "Yes. RicozAccess manages AWS, Azure, and GCP service credentials with dynamic secret generation, rotation, and least-privilege enforcement.",
      },
    ],
    relatedProducts: ["rico-identity", "rico-shield", "rico-vault"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozAccess — Enterprise Privileged Access Management | Ricoz",
      description:
        "RicozAccess vaults privileged credentials, provisions just-in-time access, and records sessions for enterprise PAM and secrets management.",
    },
  },
  {
    id: "rico-siem",
    slug: "rico-siem",
    name: "RicozSIEM",
    category: "Security & Identity",
    tagline: "Security information and event management",
    shortDescription:
      "An enterprise SIEM platform for collecting, correlating, and analysing security events across the technology estate to detect threats and support incident response.",
    heroStatement: "See every threat signal — and respond before impact.",
    overview:
      "RicozSIEM is an enterprise security information and event management platform that gives security operations teams centralised log collection, event correlation, threat detection, and investigation tooling across the entire technology estate. It ingests security events from endpoints, networks, applications, and cloud services — applying detection rules and behavioural analytics to surface threats that individual monitoring tools miss.",
    capabilities: [
      "Centralised log collection and management",
      "Security event correlation and detection",
      "Threat hunting and investigation",
      "Alert triage and case management",
      "Compliance reporting and log retention",
    ],
    benefits: [
      {
        title: "Threat visibility",
        description:
          "Surface coordinated attacks and anomalous behaviour that span multiple systems by correlating events across the full technology estate.",
      },
      {
        title: "Investigation speed",
        description:
          "Accelerate incident investigation with contextual event timelines, entity analysis, and threat intelligence enrichment.",
      },
      {
        title: "Compliance coverage",
        description:
          "Meet log retention and audit requirements for regulatory compliance with governed, tamper-evident log management.",
      },
    ],
    features: [
      {
        name: "Log Aggregation Engine",
        description:
          "High-volume log ingestion from endpoints, network devices, cloud services, and applications with normalisation and enrichment.",
      },
      {
        name: "Correlation Engine",
        description:
          "Rule-based and behavioural correlation across log sources to detect known attack patterns and anomalous activity.",
      },
      {
        name: "Investigation Console",
        description:
          "Security analyst workbench for alert triage, event timeline construction, entity investigation, and case documentation.",
      },
      {
        name: "Threat Intelligence Integration",
        description:
          "Enrich events and alerts with external threat intelligence feeds to contextualise indicators and prioritise response.",
      },
    ],
    useCases: [
      {
        title: "Security operations centre",
        description:
          "Run a structured SOC with centralised event management, alert triage, threat hunting, and incident response workflows.",
      },
      {
        title: "Compliance log management",
        description:
          "Maintain governed, retained log records for PCI-DSS, ISO 27001, SOC 2, and regulatory audit requirements.",
      },
      {
        title: "Insider threat detection",
        description:
          "Detect anomalous user behaviour across the technology estate using behavioural analytics and baseline deviation models.",
      },
    ],
    faqs: [
      {
        question: "What log sources does RicozSIEM support?",
        answer:
          "RicozSIEM ingests logs from firewalls, endpoints, identity platforms, cloud services, applications, and databases through native parsers and syslog connectors.",
      },
      {
        question: "How does RicozSIEM handle alert fatigue?",
        answer:
          "RicozSIEM applies risk scoring, alert suppression, and automated enrichment to reduce alert volume and prioritise the most credible threats for analyst attention.",
      },
      {
        question: "Does RicozSIEM support SOAR integration?",
        answer:
          "Yes. RicozSIEM integrates with SOAR platforms and RicozRespond for automated playbook execution in response to detected threats.",
      },
    ],
    relatedProducts: ["rico-shield", "rico-respond", "rico-threat"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozSIEM — Enterprise Security Information & Event Management | Ricoz",
      description:
        "RicozSIEM delivers centralised log management, event correlation, threat detection, and security investigation for enterprise SOC operations.",
    },
  },
  {
    id: "rico-comply",
    slug: "rico-comply",
    name: "RicozComply",
    category: "Security & Identity",
    tagline: "Security compliance and control management",
    shortDescription:
      "An enterprise security compliance platform for managing frameworks, controls, assessments, and evidence across regulatory and standard compliance programmes.",
    heroStatement: "Demonstrate compliance with evidence — not assurances.",
    overview:
      "RicozComply is an enterprise security compliance management platform that gives compliance and security teams a structured environment for managing their compliance frameworks, controls libraries, assessment schedules, and evidence collection. It supports multi-framework compliance including ISO 27001, SOC 2, PCI-DSS, and GDPR — with a unified control library that maps shared controls across frameworks to reduce duplication.",
    capabilities: [
      "Multi-framework compliance management",
      "Control library and ownership management",
      "Assessment scheduling and management",
      "Evidence collection and documentation",
      "Compliance reporting and audit support",
    ],
    benefits: [
      {
        title: "Multi-framework efficiency",
        description:
          "Map a unified control library to multiple frameworks simultaneously, eliminating the duplication of managing each framework independently.",
      },
      {
        title: "Audit readiness",
        description:
          "Maintain continuous evidence collection so that audit preparation becomes a reporting exercise rather than a data-gathering sprint.",
      },
      {
        title: "Control accountability",
        description:
          "Assign control ownership and assessment responsibilities so compliance is an operational discipline rather than a periodic event.",
      },
    ],
    features: [
      {
        name: "Framework Manager",
        description:
          "Map and manage compliance requirements from multiple regulatory frameworks against a unified, deduplicated control library.",
      },
      {
        name: "Control Register",
        description:
          "Centralised control register with owner assignment, implementation status, test frequency, and evidence linkage for every control.",
      },
      {
        name: "Assessment Engine",
        description:
          "Schedule and execute control assessments with structured testing procedures, finding documentation, and remediation tracking.",
      },
      {
        name: "Evidence Repository",
        description:
          "Managed evidence library linked to specific controls with version control, collection reminders, and auditor access management.",
      },
    ],
    useCases: [
      {
        title: "ISO 27001 certification management",
        description:
          "Manage the full ISO 27001 ISMS lifecycle from gap assessment through certification audit with structured control documentation and evidence.",
      },
      {
        title: "SOC 2 audit preparation",
        description:
          "Maintain continuous SOC 2 evidence collection and control testing to reduce audit preparation time and improve auditor experience.",
      },
      {
        title: "Multi-framework compliance",
        description:
          "Manage ISO 27001, SOC 2, PCI-DSS, and GDPR requirements from a unified control library that avoids duplicated effort across frameworks.",
      },
    ],
    faqs: [
      {
        question: "Which compliance frameworks does RicozComply support?",
        answer:
          "RicozComply supports ISO 27001, SOC 2 Types I and II, PCI-DSS, GDPR, NIST CSF, CIS Controls, and custom frameworks with shared control mapping.",
      },
      {
        question: "Can external auditors access evidence through RicozComply?",
        answer:
          "Yes. RicozComply supports time-limited, permission-controlled auditor access to specific evidence packages without exposing the full compliance environment.",
      },
      {
        question: "How does continuous monitoring integrate with RicozComply?",
        answer:
          "RicozComply integrates with security monitoring and configuration management tools to pull automated control evidence and compliance status directly into the platform.",
      },
    ],
    relatedProducts: ["rico-shield", "rico-identity", "rico-vault"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozComply — Enterprise Security Compliance Management | Ricoz",
      description:
        "RicozComply manages multi-framework security compliance with control libraries, assessments, evidence collection, and audit reporting.",
    },
  },
  {
    id: "rico-protect",
    slug: "rico-protect",
    name: "RicozProtect",
    category: "Security & Identity",
    tagline: "Data protection and loss prevention",
    shortDescription:
      "An enterprise data protection platform for classifying sensitive data, enforcing protection policies, and preventing unauthorised data exfiltration across the organisation.",
    heroStatement:
      "Know where sensitive data lives — and keep it from leaving where it should not.",
    overview:
      "RicozProtect is an enterprise data protection and loss prevention platform that gives security teams the visibility and controls needed to identify, classify, and protect sensitive data across the enterprise. It discovers and classifies sensitive information across endpoints, cloud services, and data repositories — applying configurable protection policies that prevent inappropriate sharing, movement, or exfiltration of information.",
    capabilities: [
      "Sensitive data discovery and classification",
      "Data loss prevention policy management",
      "Endpoint and cloud data protection",
      "Policy violation detection and alerting",
      "Data protection reporting and audit",
    ],
    benefits: [
      {
        title: "Data visibility",
        description:
          "Understand where sensitive data exists across the estate before implementing the controls that govern it.",
      },
      {
        title: "Exfiltration prevention",
        description:
          "Block or alert on data movements that violate protection policies before sensitive information leaves the controlled environment.",
      },
      {
        title: "Regulatory compliance",
        description:
          "Demonstrate data protection controls that support GDPR, healthcare data regulations, and financial data governance requirements.",
      },
    ],
    features: [
      {
        name: "Data Discovery Engine",
        description:
          "Automated scanning of endpoints, cloud storage, email, and collaboration platforms to discover and classify sensitive content.",
      },
      {
        name: "Policy Manager",
        description:
          "Configure data protection policies by data classification, user group, destination, and context with configurable enforcement actions.",
      },
      {
        name: "DLP Monitor",
        description:
          "Real-time monitoring of data movements across channels with policy violation detection, alerting, and investigation tooling.",
      },
      {
        name: "Compliance Reporter",
        description:
          "Generate data protection compliance reports covering classification coverage, policy violations, and remediation status.",
      },
    ],
    useCases: [
      {
        title: "Sensitive data governance",
        description:
          "Discover, classify, and govern sensitive customer, financial, and intellectual property data across the enterprise environment.",
      },
      {
        title: "GDPR data protection controls",
        description:
          "Implement and demonstrate the technical data protection controls required by GDPR with classification, policy enforcement, and incident reporting.",
      },
      {
        title: "Insider threat data loss prevention",
        description:
          "Detect and prevent intentional or inadvertent data loss by employees with policy-based controls and behavioural monitoring.",
      },
    ],
    faqs: [
      {
        question: "Which channels does RicozProtect cover?",
        answer:
          "RicozProtect covers email, web upload, cloud storage, USB, printing, collaboration platforms, and API-connected applications through a unified policy management layer.",
      },
      {
        question: "How does data classification work?",
        answer:
          "RicozProtect uses content inspection, pattern matching, and machine learning classification to identify sensitive data types including PII, financial data, and intellectual property.",
      },
      {
        question:
          "Does RicozProtect support both blocking and monitoring modes?",
        answer:
          "Yes. RicozProtect supports configurable enforcement modes ranging from monitoring-only through alerting to blocking, allowing graduated control implementation.",
      },
    ],
    relatedProducts: ["rico-shield", "rico-vault", "rico-comply"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozProtect — Enterprise Data Protection & Loss Prevention | Ricoz",
      description:
        "RicozProtect discovers, classifies, and enforces data protection policies to prevent sensitive data loss across the enterprise.",
    },
  },
  {
    id: "rico-respond",
    slug: "rico-respond",
    name: "RicozRespond",
    category: "Security & Identity",
    tagline: "Security incident response management",
    shortDescription:
      "An enterprise security incident response platform for coordinating, documenting, and learning from security incidents with structured playbooks and case management.",
    heroStatement:
      "When incidents happen, respond with structure — and recover with speed.",
    overview:
      "RicozRespond is an enterprise security incident response management platform that gives security teams a structured environment for managing the full lifecycle of security incidents — from detection and triage through containment, eradication, recovery, and post-incident review. It provides playbook-driven response, task coordination, evidence management, and lessons-learned capture — turning security incident response from a chaotic reaction into a governed, measurable practice.",
    capabilities: [
      "Security incident case management",
      "Response playbook orchestration",
      "Task coordination and team management",
      "Evidence collection and chain of custody",
      "Post-incident review and lessons learned",
    ],
    benefits: [
      {
        title: "Consistent response",
        description:
          "Apply structured, playbook-driven responses to every incident type regardless of which team member leads the response.",
      },
      {
        title: "Coordination clarity",
        description:
          "Keep every responder aligned with task assignments, status updates, and communication management from one incident workspace.",
      },
      {
        title: "Continuous improvement",
        description:
          "Capture lessons learned from every incident systematically to improve detection, response, and recovery over time.",
      },
    ],
    features: [
      {
        name: "Incident Case Manager",
        description:
          "Centralised incident case environment with classification, severity, timeline, task tracking, and stakeholder communication management.",
      },
      {
        name: "Playbook Engine",
        description:
          "Structured response playbooks for common incident types with step-by-step guidance, automated actions, and completion tracking.",
      },
      {
        name: "Evidence Locker",
        description:
          "Secure, chain-of-custody managed evidence collection for forensic artefacts, logs, and documentation.",
      },
      {
        name: "Post-Incident Review",
        description:
          "Structured PIR workflow capturing timeline reconstruction, root cause, impact assessment, and improvement actions.",
      },
    ],
    useCases: [
      {
        title: "Security incident response",
        description:
          "Manage the full lifecycle of security incidents with structured playbooks, task coordination, and evidence management.",
      },
      {
        title: "Ransomware and breach response",
        description:
          "Coordinate complex breach and ransomware incidents with executive communication management, legal hold evidence, and regulatory notification tracking.",
      },
      {
        title: "Security maturity improvement",
        description:
          "Use post-incident review data to systematically improve detection and response processes across the security programme.",
      },
    ],
    faqs: [
      {
        question: "Can RicozRespond integrate with our SIEM?",
        answer:
          "Yes. RicozRespond integrates with RicozSIEM and third-party SIEM platforms to create incidents automatically from confirmed alert detections.",
      },
      {
        question: "How are playbooks maintained and updated?",
        answer:
          "Playbooks are version-controlled with approval workflows for updates, ensuring response procedures are always current and authorised.",
      },
      {
        question:
          "Does RicozRespond support regulatory notification management?",
        answer:
          "Yes. RicozRespond includes notification tracking for regulatory breach reporting requirements with deadline management and submission documentation.",
      },
    ],
    relatedProducts: ["rico-siem", "rico-shield", "rico-comply"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozRespond — Security Incident Response Management | Ricoz",
      description:
        "RicozRespond manages security incident cases with playbook orchestration, evidence management, and post-incident review.",
    },
  },

  {
    id: "rico-threat",
    slug: "rico-threat",
    name: "RicozThreat",
    category: "Security & Identity",
    tagline: "Threat intelligence and vulnerability management",
    shortDescription:
      "An enterprise threat intelligence platform for aggregating, analysing, and operationalising external and internal threat data to drive proactive security decisions.",
    heroStatement:
      "Know the threats facing your organisation — before they reach you.",
    overview:
      "RicozThreat is an enterprise threat intelligence and vulnerability management platform that gives security teams the intelligence context to make proactive, evidence-based security decisions. It aggregates threat feeds, analyses adversary tactics, tracks the vulnerability landscape relevant to the organisation's technology estate, and operationalises intelligence across connected security tools — moving security posture from reactive response to informed anticipation.",
    capabilities: [
      "Threat intelligence feed aggregation and curation",
      "Vulnerability discovery and risk prioritisation",
      "Threat actor and campaign tracking",
      "Intelligence operationalisation and sharing",
      "Threat landscape reporting and briefing",
    ],
    benefits: [
      {
        title: "Proactive posture",
        description:
          "Understand emerging threats relevant to the organisation before they are weaponised against it, enabling proactive defensive action.",
      },
      {
        title: "Vulnerability prioritisation",
        description:
          "Focus remediation effort on the vulnerabilities most likely to be exploited by active threat actors targeting the sector.",
      },
      {
        title: "Intelligence-led decisions",
        description:
          "Ground security investment and control decisions in evidence about the real threat landscape rather than generic risk frameworks.",
      },
    ],
    features: [
      {
        name: "Intelligence Hub",
        description:
          "Aggregate, normalise, and deduplicate threat feeds from commercial, open source, and information sharing community sources.",
      },
      {
        name: "Vulnerability Manager",
        description:
          "Discover and track vulnerabilities across the technology estate with CVSS scoring, exploit availability, and active exploitation status.",
      },
      {
        name: "Threat Actor Library",
        description:
          "Track threat actor profiles, tactics, techniques, and procedures relevant to the organisation's sector and technology profile.",
      },
      {
        name: "Intelligence Operationaliser",
        description:
          "Push indicators of compromise and detection rules to connected security tools to translate intelligence into active defences.",
      },
    ],
    useCases: [
      {
        title: "Proactive threat management",
        description:
          "Use current threat intelligence to identify and remediate risks before they can be exploited by active threat actors.",
      },
      {
        title: "Vulnerability risk prioritisation",
        description:
          "Prioritise patch and remediation effort based on threat intelligence about actively exploited vulnerabilities in the sector.",
      },
      {
        title: "Security leadership briefing",
        description:
          "Produce threat landscape briefings for the CISO and board with relevant, contextualised intelligence about the current risk environment.",
      },
    ],
    faqs: [
      {
        question: "Which threat intelligence sources does RicozThreat support?",
        answer:
          "RicozThreat aggregates from commercial threat feeds, open-source intelligence, ISAC sharing communities, and government cyber threat advisories.",
      },
      {
        question: "How does RicozThreat integrate with our SIEM?",
        answer:
          "RicozThreat pushes indicators of compromise and detection logic to RicozSIEM and third-party SIEM platforms for automated operationalisation.",
      },
      {
        question: "Does RicozThreat support MITRE ATT&CK?",
        answer:
          "Yes. RicozThreat maps threat actor activity to the MITRE ATT&CK framework to support structured threat modelling and control assessment.",
      },
    ],
    relatedProducts: ["rico-siem", "rico-shield", "rico-respond"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozThreat — Enterprise Threat Intelligence & Vulnerability Management | Ricoz",
      description:
        "RicozThreat aggregates threat intelligence, prioritises vulnerabilities, and operationalises intelligence for proactive enterprise security.",
    },
  },

  // ─── Batch 06: Automation & Workflow ────────────────────────────────────────

  {
    id: "rico-automate",
    slug: "rico-automate",
    name: "RicozAutomate",
    category: "Automation & Workflow",
    tagline: "Intelligent business process automation",
    shortDescription:
      "An enterprise business process automation platform for automating complex, multi-system business processes with configurable logic, approvals, and exception handling.",
    heroStatement:
      "Automate the processes that slow your business — without custom code.",
    overview:
      "RicozAutomate is an enterprise business process automation platform that gives operations, IT, and business teams the ability to automate complex, multi-step processes spanning multiple systems and decision points. It provides visual process design, conditional logic, integration connectors, exception handling, and process monitoring — enabling automation of high-volume, repetitive business processes without bespoke development for each workflow.",
    capabilities: [
      "Visual process design and automation",
      "Multi-system integration and data handling",
      "Conditional logic and decision branching",
      "Exception and error handling management",
      "Process performance monitoring",
    ],
    benefits: [
      {
        title: "Operational capacity",
        description:
          "Automate high-volume repetitive processes to free employees for work that genuinely requires human judgement.",
      },
      {
        title: "Error elimination",
        description:
          "Remove manual process steps that introduce data entry errors, missed steps, and inconsistent outcomes.",
      },
      {
        title: "Process visibility",
        description:
          "Monitor automated process execution with real-time dashboards that surface exceptions and performance trends.",
      },
    ],
    features: [
      {
        name: "Process Designer",
        description:
          "Visual drag-and-drop process builder with trigger configuration, step sequencing, data mapping, and conditional branching.",
      },
      {
        name: "Connector Hub",
        description:
          "Library of pre-built connectors to enterprise applications and APIs for data reading, writing, and event triggering within processes.",
      },
      {
        name: "Logic Engine",
        description:
          "Configurable decision logic with conditional branching, data transformation, loop handling, and parallel execution paths.",
      },
      {
        name: "Process Monitor",
        description:
          "Real-time execution monitoring with instance tracking, exception queuing, and process performance analytics.",
      },
    ],
    useCases: [
      {
        title: "Cross-system data synchronisation",
        description:
          "Automate the movement and transformation of data between enterprise systems to maintain consistency without manual re-entry.",
      },
      {
        title: "Business process digitisation",
        description:
          "Replace paper-based and email-driven processes with structured, automated workflows that capture digital records.",
      },
      {
        title: "Operational escalation management",
        description:
          "Automate the routing and escalation of exceptions, exceptions, and approvals within business operations.",
      },
    ],
    faqs: [
      {
        question: "Does RicozAutomate require programming knowledge?",
        answer:
          "Core process automation uses a visual, no-code designer. Advanced configurations such as custom transformations support scripting for technical users who need it.",
      },
      {
        question: "How does RicozAutomate handle process failures?",
        answer:
          "RicozAutomate applies configurable retry logic, exception routing, and human-in-the-loop escalation for processes that cannot recover automatically.",
      },
      {
        question: "Can RicozAutomate process high-volume transactions?",
        answer:
          "Yes. RicozAutomate scales horizontally for high-volume process execution with configurable concurrency limits and queue management.",
      },
    ],
    relatedProducts: ["rico-flow", "rico-approve", "rico-relay"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozAutomate — Enterprise Business Process Automation | Ricoz",
      description:
        "RicozAutomate designs and executes multi-system business process automation with visual configuration, connectors, and process monitoring.",
    },
  },
  {
    id: "rico-approve",
    slug: "rico-approve",
    name: "RicozApprove",
    category: "Automation & Workflow",
    tagline: "Approval workflow automation and governance",
    shortDescription:
      "An enterprise approval workflow platform for automating, governing, and auditing approval processes across finance, HR, procurement, and operations.",
    heroStatement:
      "Automate the approval chain — with every decision documented.",
    overview:
      "RicozApprove is an enterprise approval workflow platform that replaces email approval chains and manual routing with structured, automated approval processes that are governed, tracked, and auditable. It provides configurable approval workflows, delegated authority management, SLA enforcement, and complete decision audit trails — eliminating approval bottlenecks while maintaining the governance controls organisations require.",
    capabilities: [
      "Configurable multi-level approval workflows",
      "Delegated authority and limit management",
      "Approval SLA monitoring and escalation",
      "Approval decision audit trail",
      "Mobile and email approval management",
    ],
    benefits: [
      {
        title: "Approval speed",
        description:
          "Reduce approval cycle times by routing requests to the correct approver automatically based on configured business rules.",
      },
      {
        title: "Delegation governance",
        description:
          "Manage delegated approval authority during absence or out-of-office scenarios without breaking the approval chain.",
      },
      {
        title: "Complete audit trail",
        description:
          "Maintain an immutable record of every approval decision, delegation, and override for compliance and governance review.",
      },
    ],
    features: [
      {
        name: "Workflow Builder",
        description:
          "Configure approval chains with sequential, parallel, and conditional routing based on request attributes, amounts, or categories.",
      },
      {
        name: "Authority Matrix",
        description:
          "Define and manage approval authority limits by role, level, and category with configurable escalation rules for out-of-limit requests.",
      },
      {
        name: "SLA Manager",
        description:
          "Set approval response deadlines with automated reminder sequences and escalation to the next approver on SLA breach.",
      },
      {
        name: "Audit Console",
        description:
          "Complete approval decision log with submitter, approver, decision, timestamp, and commentary for every workflow instance.",
      },
    ],
    useCases: [
      {
        title: "Financial approval management",
        description:
          "Automate purchase, expense, and payment approval workflows with authority matrix enforcement and complete decision records.",
      },
      {
        title: "HR approval workflows",
        description:
          "Automate leave, expense, and compensation change approvals with appropriate authority levels and policy controls.",
      },
      {
        title: "Operational approval governance",
        description:
          "Govern approval processes for contracts, changes, and commitments with structured workflows and audit requirements.",
      },
    ],
    faqs: [
      {
        question:
          "Can approvals be delegated when the primary approver is absent?",
        answer:
          "Yes. RicozApprove supports configurable delegation rules with time-limited authority transfer, out-of-office detection, and delegation audit records.",
      },
      {
        question: "Does RicozApprove support approvals via email and mobile?",
        answer:
          "Yes. Approvers receive notifications via email and mobile with one-click approval capability that records the decision with full context.",
      },
      {
        question:
          "How does RicozApprove handle the need for multiple approvals at different thresholds?",
        answer:
          "RicozApprove supports threshold-based escalation chains where different approval levels are triggered automatically based on the value or category of the request.",
      },
    ],
    relatedProducts: ["rico-flow", "rico-automate", "rico-procure"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozApprove — Enterprise Approval Workflow Automation | Ricoz",
      description:
        "RicozApprove automates multi-level approval workflows with authority management, SLA enforcement, and complete decision audit trails.",
    },
  },
  {
    id: "rico-relay",
    slug: "rico-relay",
    name: "RicozRelay",
    category: "Automation & Workflow",
    tagline: "Integration orchestration and event routing",
    shortDescription:
      "An enterprise integration orchestration platform for routing events, data, and triggers between business systems without custom point-to-point integration development.",
    heroStatement:
      "Connect every system — and keep every event flowing where it needs to go.",
    overview:
      "RicozRelay is an enterprise integration orchestration platform that enables IT and operations teams to build and manage event-driven integrations between business systems without custom development for each connection. It provides an event bus, data routing, transformation logic, and error management — serving as the integration backbone that keeps enterprise systems communicating reliably as the technology landscape grows.",
    capabilities: [
      "Event bus and message routing",
      "Data transformation and mapping",
      "Integration pattern management",
      "Error handling and dead letter management",
      "Integration monitoring and analytics",
    ],
    benefits: [
      {
        title: "Integration agility",
        description:
          "Add new system connections through configured integration routes rather than custom development for each point-to-point integration.",
      },
      {
        title: "Decoupled architecture",
        description:
          "Reduce brittle direct dependencies between systems by routing communications through a managed integration layer.",
      },
      {
        title: "Operational reliability",
        description:
          "Monitor every integration route with error detection, retry management, and dead-letter queue handling for failed events.",
      },
    ],
    features: [
      {
        name: "Event Router",
        description:
          "Configure event routing rules that direct messages from source systems to the correct destinations based on content and context.",
      },
      {
        name: "Transformation Engine",
        description:
          "Apply data mapping and transformation rules to convert messages between source and target system formats.",
      },
      {
        name: "Connector Library",
        description:
          "Pre-built connectors for enterprise systems, databases, message queues, and cloud services with configurable authentication.",
      },
      {
        name: "Integration Monitor",
        description:
          "Real-time visibility into integration message flows with error tracking, retry queues, and throughput analytics.",
      },
    ],
    useCases: [
      {
        title: "Enterprise application integration",
        description:
          "Route events and data between CRM, ERP, HR, and operational systems through a governed integration layer.",
      },
      {
        title: "Event-driven workflow triggering",
        description:
          "Use business events from source systems to trigger downstream processes and workflows in connected applications.",
      },
      {
        title: "Legacy system integration",
        description:
          "Connect legacy systems to modern platforms through configurable message adapters without modifying the source system.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozRelay support both real-time and batch integration?",
        answer:
          "Yes. RicozRelay supports real-time event routing, near-real-time streaming, and scheduled batch transfer depending on integration pattern requirements.",
      },
      {
        question: "How are integration errors handled?",
        answer:
          "Failed messages are automatically routed to a managed dead-letter queue with investigation tooling, manual reprocessing capability, and alerting.",
      },
      {
        question: "Can RicozRelay replace our existing ESB?",
        answer:
          "RicozRelay can serve as a modern replacement for traditional ESB architectures with equivalent routing, transformation, and protocol mediation capabilities.",
      },
    ],
    relatedProducts: ["rico-flow", "rico-automate", "rico-connect"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozRelay — Enterprise Integration Orchestration Platform | Ricoz",
      description:
        "RicozRelay routes events and data between business systems with configurable integration patterns, transformation, and operational monitoring.",
    },
  },
  {
    id: "rico-rules",
    slug: "rico-rules",
    name: "RicozRules",
    category: "Automation & Workflow",
    tagline: "Business rules engine and decision management",
    shortDescription:
      "An enterprise business rules engine for externalising, governing, and executing decision logic separately from application code across operational processes.",
    heroStatement:
      "Change how decisions are made — without changing the application.",
    overview:
      "RicozRules is an enterprise business rules engine that allows organisations to define, manage, and execute business decision logic in a governed, centralised repository rather than embedding it in application code. It supports decision tables, rule sets, and decision flows — enabling business analysts and operations teams to update rules independently of development cycles while maintaining governance and auditability over every decision.",
    capabilities: [
      "Decision table and rule set management",
      "Rule versioning and lifecycle management",
      "Rule execution API and decision services",
      "Business analyst rule authoring",
      "Decision audit trail and explainability",
    ],
    benefits: [
      {
        title: "Business agility",
        description:
          "Update business rules without development sprints by externalising decision logic that business teams can manage directly.",
      },
      {
        title: "Governance and traceability",
        description:
          "Version-control every rule change with approval workflows and maintain a complete audit trail of which rules drove each decision.",
      },
      {
        title: "Consistency",
        description:
          "Apply the same decision logic consistently across every application and process channel that consumes the rules engine.",
      },
    ],
    features: [
      {
        name: "Rule Studio",
        description:
          "Business-user-friendly authoring environment for decision tables, rule conditions, and action definitions with syntax validation.",
      },
      {
        name: "Decision Flow Designer",
        description:
          "Visual design of multi-step decision flows that combine rule sets, data lookups, and conditional paths.",
      },
      {
        name: "Rule Lifecycle Manager",
        description:
          "Version control, approval workflows, and effective-date scheduling for all rule changes with test case management.",
      },
      {
        name: "Decision API",
        description:
          "High-performance REST API for rule execution that returns decisions with full reasoning traces for auditability.",
      },
    ],
    useCases: [
      {
        title: "Underwriting and eligibility rules",
        description:
          "Externalise product eligibility, pricing, and underwriting rules from insurance or financial applications for business team management.",
      },
      {
        title: "Compliance decision management",
        description:
          "Centralise compliance-critical decision logic with governed versioning, approval, and audit trail for regulatory requirements.",
      },
      {
        title: "Dynamic pricing and promotion rules",
        description:
          "Manage pricing rules, discount conditions, and promotional logic centrally so marketing and commercial teams can update without development.",
      },
    ],
    faqs: [
      {
        question:
          "Can business analysts author rules without technical skills?",
        answer:
          "Yes. RicozRules provides a guided, spreadsheet-like decision table interface that business analysts can use directly without coding.",
      },
      {
        question: "How does rule testing work before production deployment?",
        answer:
          "RicozRules includes test case management where rules are validated against expected inputs and outputs before approval and deployment.",
      },
      {
        question: "Does RicozRules provide an explanation for each decision?",
        answer:
          "Yes. Every decision API response includes a reasoning trace showing which rules fired, the conditions evaluated, and the resulting action.",
      },
    ],
    relatedProducts: ["rico-flow", "rico-automate", "rico-approve"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozRules — Enterprise Business Rules Engine & Decision Management | Ricoz",
      description:
        "RicozRules externalises business decision logic with governed rule authoring, versioning, execution APIs, and decision audit trails.",
    },
  },
  {
    id: "rico-robot",
    slug: "rico-robot",
    name: "RicozRobot",
    category: "Automation & Workflow",
    tagline: "Robotic process automation for desktop operations",
    shortDescription:
      "An enterprise RPA platform for automating repetitive desktop and web-based tasks through software robots that replicate human interactions with applications.",
    heroStatement:
      "Let robots handle the repetitive work — at a scale humans never could.",
    overview:
      "RicozRobot is an enterprise robotic process automation platform that enables IT and operations teams to build software robots that automate repetitive, rule-based tasks performed through user interfaces. It provides bot development, scheduling, orchestration, and monitoring — allowing organisations to automate high-volume desktop and web operations without modifying the underlying systems the robots interact with.",
    capabilities: [
      "Bot development and design studio",
      "Desktop and web UI automation",
      "Bot scheduling and orchestration",
      "Exception handling and human handoff",
      "Bot performance monitoring and reporting",
    ],
    benefits: [
      {
        title: "High-volume task automation",
        description:
          "Run repetitive tasks at machine speed and scale without error, dramatically exceeding what human operators can achieve.",
      },
      {
        title: "Legacy system automation",
        description:
          "Automate interactions with legacy systems that lack APIs by operating through the same user interface a human would use.",
      },
      {
        title: "Cost efficiency",
        description:
          "Redeploy employees from repetitive processing tasks to higher-value work by offloading rule-based operations to software robots.",
      },
    ],
    features: [
      {
        name: "Bot Studio",
        description:
          "Low-code bot development environment with screen recording, step sequencing, selector management, and logic building.",
      },
      {
        name: "Orchestrator",
        description:
          "Centralised bot deployment, scheduling, and execution management with queue-based work allocation and resource optimisation.",
      },
      {
        name: "Exception Manager",
        description:
          "Structured exception handling with configurable retry logic and human-in-the-loop routing for items robots cannot process.",
      },
      {
        name: "Bot Analytics",
        description:
          "Track bot execution volumes, error rates, processing time, and cost savings with configurable performance dashboards.",
      },
    ],
    useCases: [
      {
        title: "Finance process automation",
        description:
          "Automate accounts payable data entry, reconciliation, and reporting processes through bots that operate existing finance applications.",
      },
      {
        title: "Data migration and re-keying",
        description:
          "Automate the transfer of data between systems that lack direct integration by using bots to read from source and write to target.",
      },
      {
        title: "Compliance and reporting automation",
        description:
          "Generate regulatory reports by automating the extraction, consolidation, and formatting of data from multiple source systems.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozRobot require the target applications to be modified?",
        answer:
          "No. RicozRobot interacts with applications through their existing user interfaces, requiring no changes to the applications being automated.",
      },
      {
        question: "How are bots managed when underlying applications change?",
        answer:
          "RicozRobot includes selector management and bot maintenance workflows that help developers update bots when application interfaces change.",
      },
      {
        question:
          "Can RicozRobot work with both attended and unattended automation?",
        answer:
          "Yes. RicozRobot supports both unattended bots that run on schedule and attended bots that assist human workers by handling specific process steps on demand.",
      },
    ],
    relatedProducts: ["rico-flow", "rico-automate", "rico-rules"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozRobot — Enterprise Robotic Process Automation | Ricoz",
      description:
        "RicozRobot automates desktop and web-based tasks with software robots, bot orchestration, and exception management for enterprise operations.",
    },
  },
  {
    id: "rico-govern",
    slug: "rico-govern",
    name: "RicozGovern",
    category: "Automation & Workflow",
    tagline: "Automation governance and operational oversight",
    shortDescription:
      "An enterprise automation governance platform for monitoring, auditing, and managing the performance, compliance, and risk of the organisation's automation estate.",
    heroStatement:
      "Manage your automation estate — with the rigour it deserves.",
    overview:
      "RicozGovern is an enterprise automation governance and operational oversight platform designed for organisations with a significant and growing automation estate. As robotic processes, workflows, and integration automations proliferate, RicozGovern provides the visibility, compliance management, performance monitoring, and change governance that ensures automated processes remain controlled, accurate, and aligned with business requirements.",
    capabilities: [
      "Automation estate inventory and lifecycle management",
      "Automation performance monitoring",
      "Compliance and audit management",
      "Change governance for automated processes",
      "Automation risk assessment and management",
    ],
    benefits: [
      {
        title: "Estate control",
        description:
          "Maintain visibility and governance over every automated process across the organisation, regardless of which tool created it.",
      },
      {
        title: "Risk management",
        description:
          "Identify and mitigate automation risks before they cause compliance failures, data issues, or operational disruption.",
      },
      {
        title: "Change safety",
        description:
          "Apply structured change governance to automated processes so updates do not introduce unintended consequences in dependent workflows.",
      },
    ],
    features: [
      {
        name: "Automation Registry",
        description:
          "Complete inventory of all automated processes, bots, and workflows with metadata, ownership, dependencies, and lifecycle status.",
      },
      {
        name: "Performance Monitor",
        description:
          "Centralised monitoring of automation execution health, error rates, and business performance across the entire automation estate.",
      },
      {
        name: "Compliance Auditor",
        description:
          "Audit automation against defined compliance and quality standards with exception reporting and remediation tracking.",
      },
      {
        name: "Change Manager",
        description:
          "Govern changes to automated processes with impact assessment, approval workflows, and version control.",
      },
    ],
    useCases: [
      {
        title: "Enterprise automation governance",
        description:
          "Implement governance over a large, diverse automation estate to ensure every automated process is documented, monitored, and controlled.",
      },
      {
        title: "Automation compliance management",
        description:
          "Apply compliance controls to automated processes in regulated industries where process accuracy and auditability are mandatory.",
      },
      {
        title: "Automation estate optimisation",
        description:
          "Identify underperforming, redundant, or high-risk automations through estate-wide analytics and rationalise the portfolio.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozGovern work with automations created in different tools?",
        answer:
          "Yes. RicozGovern is designed to govern automations regardless of the underlying tool, with connectors for major RPA, BPM, and workflow platforms.",
      },
      {
        question: "How does change governance work for automated processes?",
        answer:
          "Change requests for automated processes go through a structured approval workflow with impact assessment, testing evidence requirements, and rollback planning.",
      },
      {
        question:
          "Can RicozGovern alert when automations fail or underperform?",
        answer:
          "Yes. RicozGovern monitors automation execution metrics and raises alerts for failure rates, SLA breaches, and anomalous performance patterns.",
      },
    ],
    relatedProducts: ["rico-flow", "rico-automate", "rico-robot"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozGovern — Enterprise Automation Governance Platform | Ricoz",
      description:
        "RicozGovern provides governance, monitoring, compliance management, and change control for the enterprise automation estate.",
    },
  },

  {
    id: "rico-trigger",
    slug: "rico-trigger",
    name: "RicozTrigger",
    category: "Automation & Workflow",
    tagline: "Event-driven automation and intelligent process triggering",
    shortDescription:
      "An enterprise event-driven automation platform for detecting business events and triggering automated responses, workflows, and actions across connected systems.",
    heroStatement:
      "Make every business event the start of something automatic.",
    overview:
      "RicozTrigger is an enterprise event-driven automation platform that monitors business and system events across the enterprise and responds to them automatically. It detects defined conditions — a new order placed, a threshold crossed, a status changed, a time reached — and initiates the appropriate downstream automation, notification, or workflow response. It transforms passive event streams into active business intelligence that drives operational action without human monitoring.",
    capabilities: [
      "Event source monitoring and condition detection",
      "Trigger definition and condition logic",
      "Automated response and action execution",
      "Trigger performance and reliability monitoring",
      "Event audit trail and history",
    ],
    benefits: [
      {
        title: "Operational responsiveness",
        description:
          "Respond to business events instantly without waiting for a human to detect and act, compressing the time from event to action.",
      },
      {
        title: "Consistency",
        description:
          "Apply the same defined response to the same event every time it occurs, eliminating the variability of manual detection and reaction.",
      },
      {
        title: "Capacity",
        description:
          "Monitor hundreds of event conditions simultaneously across multiple systems without proportionally increasing operational headcount.",
      },
    ],
    features: [
      {
        name: "Event Monitor",
        description:
          "Monitor configured data sources and system events with polling, webhook, and streaming detection modes.",
      },
      {
        name: "Condition Builder",
        description:
          "Define trigger conditions with threshold comparisons, pattern matching, composite logic, and temporal conditions.",
      },
      {
        name: "Action Engine",
        description:
          "Execute configurable actions including workflow initiation, notification sending, record creation, and API calls on trigger firing.",
      },
      {
        name: "Trigger Analytics",
        description:
          "Track trigger fire frequency, action outcomes, and false positive rates with configurable dashboards and alerting.",
      },
    ],
    useCases: [
      {
        title: "Threshold-based operational alerts",
        description:
          "Trigger immediate action when key operational metrics cross defined thresholds — inventory levels, SLA breaches, error rate spikes.",
      },
      {
        title: "Business event automation",
        description:
          "Initiate downstream processes automatically when business events occur — new customer onboarded, invoice overdue, contract approaching expiry.",
      },
      {
        title: "Scheduled and time-based automation",
        description:
          "Trigger recurring processes on defined schedules with conditional logic for business calendar, time zone, and exception handling.",
      },
    ],
    faqs: [
      {
        question: "How does RicozTrigger differ from RicozAutomate?",
        answer:
          "RicozAutomate manages the execution of multi-step business processes. RicozTrigger specialises in the event detection and condition evaluation that decides when processes should start.",
      },
      {
        question: "Can RicozTrigger monitor external systems and APIs?",
        answer:
          "Yes. RicozTrigger monitors external systems through configured polling, webhook registration, and API event subscription depending on what the source system supports.",
      },
      {
        question: "How are false positives managed?",
        answer:
          "RicozTrigger supports configurable condition stabilisation windows and minimum trigger durations to prevent action on transient conditions.",
      },
    ],
    relatedProducts: ["rico-flow", "rico-automate", "rico-relay"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozTrigger — Enterprise Event-Driven Automation Platform | Ricoz",
      description:
        "RicozTrigger detects business events and triggers automated responses with configurable conditions, actions, and monitoring.",
    },
  },

  // ─── Batch 07: Developer & Application Platforms ────────────────────────────

  {
    id: "rico-build",
    slug: "rico-build",
    name: "RicozBuild",
    category: "Developer & Application Platforms",
    tagline: "Low-code application development platform",
    shortDescription:
      "An enterprise low-code application development platform for building, deploying, and governing internal business applications without extensive custom coding.",
    heroStatement:
      "Build business applications faster — without compromising on quality or governance.",
    overview:
      "RicozBuild is an enterprise low-code development platform that empowers development teams and technically capable business users to create, deploy, and maintain internal business applications at a fraction of the time and cost of traditional development. It provides a visual application builder, data modelling, business logic configuration, and governed deployment — accelerating application delivery while maintaining the quality and governance enterprise environments require.",
    capabilities: [
      "Visual application design and component library",
      "Data model and database management",
      "Business logic and workflow configuration",
      "Application governance and deployment management",
      "Integration and API connectivity",
    ],
    benefits: [
      {
        title: "Delivery acceleration",
        description:
          "Build and deploy business applications in weeks rather than months by replacing custom coding with governed visual development.",
      },
      {
        title: "Business alignment",
        description:
          "Involve business stakeholders directly in application design, reducing the translation gap between requirements and delivered software.",
      },
      {
        title: "Governed portfolio",
        description:
          "Maintain a managed portfolio of low-code applications with version control, security governance, and lifecycle management.",
      },
    ],
    features: [
      {
        name: "App Designer",
        description:
          "Visual drag-and-drop application builder with a component library for forms, lists, charts, and interactive UI patterns.",
      },
      {
        name: "Data Builder",
        description:
          "Visual data modelling with table relationships, field types, validation rules, and automated database management.",
      },
      {
        name: "Logic Builder",
        description:
          "Configure business logic through visual workflows, conditions, and actions without writing code for standard patterns.",
      },
      {
        name: "Deployment Manager",
        description:
          "Governed application deployment with environment management, version publishing, and rollback capability.",
      },
    ],
    useCases: [
      {
        title: "Internal business application development",
        description:
          "Build custom internal applications — approvals, trackers, reporting tools — that fill gaps between enterprise systems.",
      },
      {
        title: "Form and process digitisation",
        description:
          "Replace paper forms and spreadsheets with governed digital applications that capture, route, and report on structured data.",
      },
      {
        title: "Rapid prototype development",
        description:
          "Build functional prototypes for business requirements quickly to validate concepts before committing to full development.",
      },
    ],
    faqs: [
      {
        question: "Can RicozBuild build external customer-facing applications?",
        answer:
          "RicozBuild is optimised for internal enterprise applications. External-facing applications with high traffic and complex UX requirements are better suited to custom development.",
      },
      {
        question: "How does RicozBuild handle application security?",
        answer:
          "RicozBuild applies enterprise security controls including role-based access, audit logging, encrypted storage, and network policy to all deployed applications.",
      },
      {
        question:
          "Can RicozBuild applications integrate with existing enterprise systems?",
        answer:
          "Yes. RicozBuild integrates with enterprise systems via REST APIs, database connections, and the RicozConnect integration platform.",
      },
    ],
    relatedProducts: ["rico-connect", "rico-gateway", "rico-studio-int"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozBuild — Enterprise Low-Code Application Development | Ricoz",
      description:
        "RicozBuild enables visual low-code application development with data modelling, business logic configuration, and governed deployment.",
    },
  },
  {
    id: "rico-gateway",
    slug: "rico-gateway",
    name: "RicozGateway",
    category: "Developer & Application Platforms",
    tagline: "API gateway and management",
    shortDescription:
      "An enterprise API gateway for securing, managing, and governing API traffic between internal services, external consumers, and third-party systems.",
    heroStatement:
      "Govern every API call — with security, visibility, and control.",
    overview:
      "RicozGateway is an enterprise API gateway and management platform that gives platform and security teams a controlled entry point for all API traffic into and between enterprise systems. It provides authentication, authorisation, rate limiting, traffic management, API documentation, and analytics — enabling organisations to expose internal services securely and manage external API consumption at enterprise scale.",
    capabilities: [
      "API authentication and authorisation",
      "Rate limiting and traffic management",
      "API documentation and developer portal",
      "API analytics and performance monitoring",
      "API versioning and lifecycle management",
    ],
    benefits: [
      {
        title: "Security enforcement",
        description:
          "Apply consistent authentication, authorisation, and threat protection to every API regardless of the underlying service implementation.",
      },
      {
        title: "Traffic governance",
        description:
          "Protect backend services from abuse with rate limiting, quota enforcement, and circuit breaker policies.",
      },
      {
        title: "Developer experience",
        description:
          "Accelerate third-party and internal developer adoption with self-service documentation, sandboxes, and API keys.",
      },
    ],
    features: [
      {
        name: "Gateway Engine",
        description:
          "High-performance API gateway with request routing, authentication, policy enforcement, and response transformation.",
      },
      {
        name: "Policy Manager",
        description:
          "Configure authentication, rate limiting, IP filtering, and transformation policies per API and consumer tier.",
      },
      {
        name: "Developer Portal",
        description:
          "Self-service developer portal with interactive documentation, API key management, and sandbox testing environments.",
      },
      {
        name: "API Analytics",
        description:
          "Track request volumes, latency, error rates, and consumer usage patterns per API and developer with configurable dashboards.",
      },
    ],
    useCases: [
      {
        title: "External API monetisation",
        description:
          "Expose enterprise data and services through governed APIs with consumer onboarding, usage tracking, and quota management.",
      },
      {
        title: "Internal API standardisation",
        description:
          "Route all internal service-to-service communication through the gateway to apply consistent security and observability.",
      },
      {
        title: "Third-party integration management",
        description:
          "Manage access to enterprise APIs by third-party vendors with scoped credentials, rate limits, and consumption monitoring.",
      },
    ],
    faqs: [
      {
        question: "Does RicozGateway support OAuth2 and OpenID Connect?",
        answer:
          "Yes. RicozGateway supports OAuth2 and OIDC token validation, API key authentication, mutual TLS, and JWT verification for inbound API requests.",
      },
      {
        question: "How does RicozGateway handle API versioning?",
        answer:
          "RicozGateway manages multiple API versions simultaneously with version routing, traffic splitting, and deprecation management.",
      },
      {
        question: "Can RicozGateway integrate with our identity platform?",
        answer:
          "Yes. RicozGateway integrates with enterprise identity providers for token validation and attribute-based authorisation decisions.",
      },
    ],
    relatedProducts: ["rico-connect", "rico-build", "rico-identity"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozGateway — Enterprise API Gateway & Management | Ricoz",
      description:
        "RicozGateway governs API traffic with authentication, rate limiting, developer portal management, and API analytics.",
    },
  },
  {
    id: "rico-testlab",
    slug: "rico-testlab",
    name: "RicozTestLab",
    category: "Developer & Application Platforms",
    tagline: "Software testing management and quality assurance",
    shortDescription:
      "An enterprise software testing management platform for planning, executing, and reporting on manual and automated test programmes across the development lifecycle.",
    heroStatement:
      "Ship with confidence — because every release is tested with rigour.",
    overview:
      "RicozTestLab is an enterprise testing management platform designed for QA teams and delivery organisations managing complex software test programmes across multiple products, releases, and environments. It provides test plan management, test case libraries, manual and automated test execution, defect tracking integration, and quality reporting — giving teams the structure to deliver quality at the pace modern development demands.",
    capabilities: [
      "Test plan and test case management",
      "Manual and automated test execution",
      "Defect tracking and root cause management",
      "Test environment management",
      "Quality metrics and release reporting",
    ],
    benefits: [
      {
        title: "Release quality confidence",
        description:
          "Provide development and business stakeholders with objective quality data before every release decision.",
      },
      {
        title: "Test efficiency",
        description:
          "Manage and reuse test case libraries across releases, eliminating the overhead of rebuilding test coverage for every cycle.",
      },
      {
        title: "Defect governance",
        description:
          "Track, prioritise, and resolve defects with full lifecycle management from detection through verification.",
      },
    ],
    features: [
      {
        name: "Test Library",
        description:
          "Hierarchical test case library with requirement traceability, reusable test sets, and parameterised test support.",
      },
      {
        name: "Execution Manager",
        description:
          "Structured test run management with manual execution tracking and automated test result ingestion from CI/CD pipelines.",
      },
      {
        name: "Defect Manager",
        description:
          "Defect lifecycle management with severity classification, assignment, workflow, and integration to development tracking tools.",
      },
      {
        name: "Quality Dashboard",
        description:
          "Release quality reporting with test coverage, pass/fail trends, defect density, and sign-off status for stakeholders.",
      },
    ],
    useCases: [
      {
        title: "Release quality management",
        description:
          "Manage test planning, execution, and reporting across release cycles to provide objective go/no-go quality data.",
      },
      {
        title: "Regression testing governance",
        description:
          "Maintain and execute structured regression test suites with coverage tracking and automated execution integration.",
      },
      {
        title: "User acceptance testing coordination",
        description:
          "Coordinate UAT with business stakeholders using structured test plans, managed test environments, and defect tracking.",
      },
    ],
    faqs: [
      {
        question: "Does RicozTestLab integrate with CI/CD pipelines?",
        answer:
          "Yes. RicozTestLab integrates with CI/CD platforms to ingest automated test results and correlate them with manual test execution in the quality view.",
      },
      {
        question: "Can RicozTestLab track requirements to test coverage?",
        answer:
          "Yes. RicozTestLab supports bidirectional traceability between requirements, test cases, and defects for complete coverage analysis.",
      },
      {
        question: "Does RicozTestLab support agile test management?",
        answer:
          "Yes. RicozTestLab supports sprint-based test planning and agile defect management with integration to RicozAgile for coordinated delivery tracking.",
      },
    ],
    relatedProducts: ["rico-agile", "rico-deploy", "rico-appmon"],
    relatedServices: [
      "digital-transformation-consulting",
      "technology-strategy-roadmap",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozTestLab — Enterprise Software Testing Management | Ricoz",
      description:
        "RicozTestLab manages test plans, execution, defect tracking, and quality reporting for enterprise software delivery.",
    },
  },
  {
    id: "rico-deploy",
    slug: "rico-deploy",
    name: "RicozDeploy",
    category: "Developer & Application Platforms",
    tagline: "CI/CD pipeline and release management",
    shortDescription:
      "An enterprise release management and CI/CD orchestration platform for governing the deployment of software across environments from development through production.",
    heroStatement:
      "Deploy every release with the speed of automation and the safety of governance.",
    overview:
      "RicozDeploy is an enterprise release management and continuous delivery platform that gives delivery teams and operations engineers a governed environment for managing software builds, deployments, and releases across the full environment pipeline. It provides pipeline orchestration, release planning, change coordination, environment management, and deployment analytics — enabling teams to deploy frequently while maintaining the governance that enterprise production environments require.",
    capabilities: [
      "CI/CD pipeline orchestration",
      "Release planning and coordination",
      "Environment and configuration management",
      "Deployment approval and governance",
      "Deployment performance analytics",
    ],
    benefits: [
      {
        title: "Deployment frequency",
        description:
          "Remove the manual overhead from release processes to enable more frequent, smaller deployments with lower risk.",
      },
      {
        title: "Release governance",
        description:
          "Apply structured approval and verification checkpoints to production deployments without blocking the pipeline for lower environments.",
      },
      {
        title: "Rollback confidence",
        description:
          "Maintain complete deployment history with one-click rollback capability for any production release.",
      },
    ],
    features: [
      {
        name: "Pipeline Orchestrator",
        description:
          "Define and manage multi-stage CI/CD pipelines with parallel execution, environment gates, and configurable quality checks.",
      },
      {
        name: "Release Planner",
        description:
          "Coordinate release contents, dependencies, and change records for governed production deployment planning.",
      },
      {
        name: "Environment Manager",
        description:
          "Track and govern the configuration state of every deployment environment with drift detection and compliance reporting.",
      },
      {
        name: "Deployment Analytics",
        description:
          "Track deployment frequency, lead time, failure rate, and MTTR with DORA metrics and trend analysis.",
      },
    ],
    useCases: [
      {
        title: "Enterprise CI/CD pipeline management",
        description:
          "Govern the full software delivery pipeline from code commit through production deployment with quality gates and approval workflows.",
      },
      {
        title: "Release coordination for large applications",
        description:
          "Coordinate complex multi-service releases with dependency management, environment validation, and change governance.",
      },
      {
        title: "Deployment performance improvement",
        description:
          "Measure and improve deployment frequency, lead time, and stability using DORA metrics and delivery analytics.",
      },
    ],
    faqs: [
      {
        question: "Does RicozDeploy integrate with popular CI/CD tools?",
        answer:
          "Yes. RicozDeploy integrates with major CI/CD platforms as an orchestration and governance layer, enhancing existing pipelines rather than replacing them.",
      },
      {
        question: "How does production deployment approval work?",
        answer:
          "RicozDeploy supports configurable approval gates at the production environment boundary with change record linkage and designated approver management.",
      },
      {
        question: "Can RicozDeploy track deployment performance metrics?",
        answer:
          "Yes. RicozDeploy tracks deployment frequency, change lead time, change failure rate, and mean time to recovery as standard delivery performance metrics.",
      },
    ],
    relatedProducts: ["rico-testlab", "rico-change", "rico-appmon"],
    relatedServices: [
      "digital-transformation-consulting",
      "technology-strategy-roadmap",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozDeploy — Enterprise CI/CD & Release Management Platform | Ricoz",
      description:
        "RicozDeploy orchestrates CI/CD pipelines with release planning, environment management, deployment governance, and DORA metrics.",
    },
  },
  {
    id: "rico-observe",
    slug: "rico-observe",
    name: "RicozObserve",
    category: "Developer & Application Platforms",
    tagline: "Platform observability and telemetry management",
    shortDescription:
      "An enterprise observability platform that consolidates metrics, logs, and traces from distributed systems into a unified telemetry environment for engineering teams.",
    heroStatement:
      "Understand your systems completely — through the signals they emit.",
    overview:
      "RicozObserve is an enterprise platform observability solution designed for engineering teams operating distributed, cloud-native systems where individual monitoring tools provide an incomplete picture. It implements the three pillars of observability — metrics, logs, and distributed traces — in a unified analytical environment, enabling engineers to understand system behaviour, correlate failures, and drive continuous reliability improvement.",
    capabilities: [
      "Unified metrics, logs, and traces collection",
      "Distributed trace analysis and correlation",
      "Service dependency mapping",
      "SLO management and error budget tracking",
      "Observability-driven alerting and runbooks",
    ],
    benefits: [
      {
        title: "Complete system understanding",
        description:
          "Move from monitoring individual metrics to genuinely understanding system behaviour through correlated telemetry across all three pillars.",
      },
      {
        title: "Faster debugging",
        description:
          "Correlate traces, logs, and metrics around a single incident to dramatically accelerate root cause identification.",
      },
      {
        title: "Reliability engineering",
        description:
          "Define, measure, and manage SLOs with error budgets that inform engineering investment decisions between feature development and reliability.",
      },
    ],
    features: [
      {
        name: "Telemetry Hub",
        description:
          "Unified ingestion and storage for metrics, logs, and traces from any source using OpenTelemetry and standard protocols.",
      },
      {
        name: "Trace Explorer",
        description:
          "Search and visualise distributed traces with service maps, span timelines, and error correlation across microservice boundaries.",
      },
      {
        name: "SLO Manager",
        description:
          "Define service level objectives, calculate error budgets, and track burn rate with automated alerting on budget depletion.",
      },
      {
        name: "Correlation Engine",
        description:
          "Automatically correlate anomalies across metrics, logs, and traces to surface root cause hypotheses for faster investigation.",
      },
    ],
    useCases: [
      {
        title: "Microservices observability",
        description:
          "Implement end-to-end observability for microservices architectures with distributed tracing, service maps, and correlated telemetry.",
      },
      {
        title: "SLO and reliability management",
        description:
          "Define and manage service level objectives with error budget tracking that drives engineering prioritisation between features and reliability.",
      },
      {
        title: "Production debugging",
        description:
          "Investigate production incidents faster by correlating traces, logs, and metrics around failure events across the distributed system.",
      },
    ],
    faqs: [
      {
        question: "Does RicozObserve support OpenTelemetry?",
        answer:
          "Yes. RicozObserve is built on OpenTelemetry as the instrumentation standard, accepting OTLP, Prometheus, and Jaeger protocols from any instrumented service.",
      },
      {
        question:
          "How does RicozObserve handle the scale of enterprise telemetry volumes?",
        answer:
          "RicozObserve is designed for petabyte-scale telemetry with configurable sampling, retention tiers, and hot/cold storage management.",
      },
      {
        question:
          "Can RicozObserve integrate with our alerting and incident management tools?",
        answer:
          "Yes. RicozObserve integrates with alert managers and ITSM platforms to route SLO breach and anomaly alerts into incident response workflows.",
      },
    ],
    relatedProducts: ["rico-appmon", "rico-infra", "rico-deploy"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozObserve — Enterprise Platform Observability & Telemetry | Ricoz",
      description:
        "RicozObserve unifies metrics, logs, and traces for enterprise observability with SLO management and distributed trace analysis.",
    },
  },
  {
    id: "rico-studio-int",
    slug: "rico-studio-int",
    name: "RicozStudio",
    category: "Developer & Application Platforms",
    tagline: "Integration development studio",
    shortDescription:
      "An enterprise integration development studio for building, testing, and deploying complex integrations between business systems with a governed development workflow.",
    heroStatement:
      "Build integrations that last — with the structure enterprise maintenance demands.",
    overview:
      "RicozStudio is an enterprise integration development environment that gives integration developers and solution architects the tools to design, implement, test, and govern complex system integrations. It provides a rich visual mapping and transformation studio, protocol support, connector development, and managed deployment — enabling the development of robust, maintainable integrations that go beyond what configuration-only tools can address.",
    capabilities: [
      "Visual integration mapping and design",
      "Complex transformation and enrichment",
      "Protocol mediation and adapter development",
      "Integration testing and debugging",
      "Managed deployment and versioning",
    ],
    benefits: [
      {
        title: "Integration quality",
        description:
          "Build integrations with the structure, testability, and documentation that long-term maintenance in enterprise environments requires.",
      },
      {
        title: "Developer productivity",
        description:
          "Accelerate integration development with a rich visual studio, reusable component libraries, and integrated debugging tools.",
      },
      {
        title: "Governance and versioning",
        description:
          "Manage integration versions, deployment history, and change governance in a controlled repository environment.",
      },
    ],
    features: [
      {
        name: "Mapping Studio",
        description:
          "Visual data mapping and transformation design with formula editor, lookup configuration, and complex schema handling.",
      },
      {
        name: "Protocol Library",
        description:
          "Built-in support for REST, SOAP, EDI, MQ, SFTP, and database protocols with configurable adapters for custom connectivity.",
      },
      {
        name: "Integration Debugger",
        description:
          "Step-through debugging with message inspection, transformation testing, and execution trace visualisation.",
      },
      {
        name: "Deployment Manager",
        description:
          "Managed integration deployment with environment configuration, version promotion, and execution monitoring.",
      },
    ],
    useCases: [
      {
        title: "Complex system integration development",
        description:
          "Build robust, maintainable integrations between enterprise applications requiring complex transformation, routing, and protocol handling.",
      },
      {
        title: "EDI and B2B integration",
        description:
          "Develop EDI and B2B trading partner integrations with format translation, partner management, and interchange monitoring.",
      },
      {
        title: "Legacy system modernisation",
        description:
          "Build integration layers that enable modern applications to interact with legacy systems through mediated, well-documented connectors.",
      },
    ],
    faqs: [
      {
        question: "How does RicozStudio relate to RicozConnect and RicozRelay?",
        answer:
          "RicozStudio is the development environment for building custom integrations. RicozConnect manages the API connectivity platform and RicozRelay handles operational event routing. Together they form the Ricoz integration capability.",
      },
      {
        question:
          "Does RicozStudio support code-based development for complex scenarios?",
        answer:
          "Yes. RicozStudio supports scripting in standard languages for transformation logic that exceeds visual configuration, embedded within the governed development workflow.",
      },
      {
        question: "How are integration tests managed?",
        answer:
          "RicozStudio includes an integration test harness with mock message support, schema validation, and regression test execution as part of the development workflow.",
      },
    ],
    relatedProducts: ["rico-connect", "rico-relay", "rico-gateway"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozStudio — Enterprise Integration Development Studio | Ricoz",
      description:
        "RicozStudio provides visual integration mapping, protocol support, debugging, and governed deployment for enterprise integration development.",
    },
  },

  {
    id: "rico-sdk",
    slug: "rico-sdk",
    name: "RicozSDK",
    category: "Developer & Application Platforms",
    tagline: "Developer SDK and API toolkit",
    shortDescription:
      "An enterprise developer SDK and API toolkit for building integrations, extensions, and applications on the Ricoz platform with governed access and developer experience.",
    heroStatement:
      "Build on the platform — with every tool a developer needs in one place.",
    overview:
      "RicozSDK is an enterprise developer SDK and API toolkit that enables internal developers, partner teams, and ISVs to build integrations, extensions, and custom applications on the Ricoz platform. It provides client libraries in standard languages, authentication management, sandbox environments, code samples, and documentation — giving developers the experience and guardrails to build reliably without requiring deep platform expertise.",
    capabilities: [
      "Multi-language client library provision",
      "Authentication and credentials management",
      "Sandbox and test environment access",
      "Webhook and event subscription management",
      "Developer documentation and code samples",
    ],
    benefits: [
      {
        title: "Developer productivity",
        description:
          "Accelerate integration and extension development with high-quality client libraries, documentation, and working code examples.",
      },
      {
        title: "Consistent security",
        description:
          "Enforce secure authentication and authorisation patterns in every integration through SDK-managed credential handling.",
      },
      {
        title: "Safe development",
        description:
          "Develop and test against isolated sandbox environments that mirror production behaviour without risking live data.",
      },
    ],
    features: [
      {
        name: "Client Library Hub",
        description:
          "Officially maintained client libraries for major programming languages with version management and deprecation management.",
      },
      {
        name: "Credentials Manager",
        description:
          "Manage API credentials, OAuth applications, and webhook signing keys with scope-based permissions and rotation support.",
      },
      {
        name: "Sandbox Environment",
        description:
          "Isolated development and test environments that mirror production APIs with synthetic data and simulation modes.",
      },
      {
        name: "Developer Documentation",
        description:
          "Comprehensive API reference, conceptual guides, and annotated code samples covering common integration patterns.",
      },
    ],
    useCases: [
      {
        title: "Internal integration development",
        description:
          "Enable internal development teams to build integrations between Ricoz platform capabilities and enterprise systems using structured SDKs.",
      },
      {
        title: "Partner and ISV development",
        description:
          "Support partner and ISV developers building extensions and integrations on the Ricoz platform with governed access and tooling.",
      },
      {
        title: "Webhook and event-driven integration",
        description:
          "Build event-driven integrations using platform webhooks and event subscriptions with SDK-managed authentication and reliability.",
      },
    ],
    faqs: [
      {
        question: "Which programming languages are supported?",
        answer:
          "RicozSDK provides officially maintained client libraries for Python, JavaScript/TypeScript, Java, and .NET with community libraries for additional languages.",
      },
      {
        question: "How is sandbox access managed?",
        answer:
          "Each developer account can provision isolated sandbox environments with configurable data sets and API simulation capabilities.",
      },
      {
        question: "How does RicozSDK relate to RicozGateway?",
        answer:
          "RicozGateway governs API traffic in production environments. RicozSDK provides the developer tooling for building applications and integrations that consume those APIs.",
      },
    ],
    relatedProducts: ["rico-gateway", "rico-build", "rico-connect"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozSDK — Enterprise Developer SDK & API Toolkit | Ricoz",
      description:
        "RicozSDK provides client libraries, sandboxes, and documentation for building integrations and extensions on the Ricoz platform.",
    },
  },

  // ─── Batch 07: Commerce & Digital Business ──────────────────────────────────

  {
    id: "rico-store",
    slug: "rico-store",
    name: "RicozStore",
    category: "Commerce & Digital Business",
    tagline: "Enterprise online commerce management",
    shortDescription:
      "An enterprise online commerce platform for managing digital storefronts, product listings, customer pricing, and online sales operations across channels.",
    heroStatement:
      "Run every online channel from one governed commerce environment.",
    overview:
      "RicozStore is an enterprise online commerce management platform designed for organisations managing complex digital sales operations across multiple storefronts, channels, and customer segments. It provides storefront management, product publishing, customer pricing configuration, promotion management, and commerce operations — giving merchandising and digital teams the tools to manage the online channel with precision and efficiency.",
    capabilities: [
      "Multi-storefront and channel management",
      "Product listing and content management",
      "Customer and segment pricing management",
      "Promotion and campaign management",
      "Commerce operations and performance reporting",
    ],
    benefits: [
      {
        title: "Channel consistency",
        description:
          "Manage product content, pricing, and promotions consistently across multiple storefronts from a single governed platform.",
      },
      {
        title: "Merchandising control",
        description:
          "Give merchandising teams direct control over product presentation, pricing structures, and promotional activities.",
      },
      {
        title: "Performance visibility",
        description:
          "Track commerce performance metrics across channels with sales analytics, conversion reporting, and revenue attribution.",
      },
    ],
    features: [
      {
        name: "Storefront Manager",
        description:
          "Configure and manage multiple branded storefronts with independent navigation structures, visual themes, and content areas.",
      },
      {
        name: "Product Publisher",
        description:
          "Publish and manage product listings with rich content, media, attributes, categorisation, and SEO metadata across channels.",
      },
      {
        name: "Pricing Engine",
        description:
          "Configure customer, segment, and volume-based pricing rules with currency management and approval workflows for price changes.",
      },
      {
        name: "Promotions Manager",
        description:
          "Create and manage discount rules, promotional codes, bundle offers, and time-limited campaigns with performance tracking.",
      },
    ],
    useCases: [
      {
        title: "Multi-channel commerce operations",
        description:
          "Manage product listings, pricing, and promotions across multiple digital sales channels from a unified commerce platform.",
      },
      {
        title: "B2B customer portal commerce",
        description:
          "Deliver a governed B2B buying experience with customer-specific pricing, product access, and order management through a managed storefront.",
      },
      {
        title: "Promotional campaign management",
        description:
          "Design, launch, and measure promotional campaigns with targeted discounts, product bundles, and conversion tracking.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozStore integrate with our existing e-commerce platform?",
        answer:
          "RicozStore is designed as the management layer over digital commerce operations, with integrations to major commerce platforms for storefront execution.",
      },
      {
        question: "How does multi-currency pricing work?",
        answer:
          "RicozStore manages pricing in multiple currencies with configurable conversion rules, local pricing overrides, and approval workflows for price management.",
      },
      {
        question: "Can RicozStore manage B2B and B2C channels separately?",
        answer:
          "Yes. RicozStore supports separate channel configurations with different pricing structures, product access, and checkout experiences for B2B and B2C audiences.",
      },
    ],
    relatedProducts: ["rico-orders", "rico-listings", "rico-revenue"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozStore — Enterprise Online Commerce Management | Ricoz",
      description:
        "RicozStore manages multi-storefront commerce with product publishing, pricing governance, promotions management, and sales reporting.",
    },
  },
  {
    id: "rico-orders",
    slug: "rico-orders",
    name: "RicozOrders",
    category: "Commerce & Digital Business",
    tagline: "Enterprise order management and fulfilment orchestration",
    shortDescription:
      "An enterprise order management platform for capturing, routing, and fulfilling orders across multiple channels, warehouses, and fulfilment methods.",
    heroStatement:
      "Process every order accurately — from any channel to any destination.",
    overview:
      "RicozOrders is an enterprise order management system designed for organisations handling multi-channel order intake, complex fulfilment routing, and post-purchase customer management at scale. It provides a unified order ledger, intelligent fulfilment routing, inventory reservation, returns management, and order performance analytics — enabling consistent, efficient order execution regardless of how or where the order was placed.",
    capabilities: [
      "Multi-channel order capture and management",
      "Intelligent fulfilment routing",
      "Inventory reservation and allocation",
      "Returns and exchange management",
      "Order performance analytics",
    ],
    benefits: [
      {
        title: "Order accuracy",
        description:
          "Centralise orders from every channel into one governed ledger to eliminate duplicate processing, missed orders, and fulfilment errors.",
      },
      {
        title: "Fulfilment optimisation",
        description:
          "Route orders to the optimal fulfilment location based on inventory availability, delivery cost, and service level requirements.",
      },
      {
        title: "Customer experience",
        description:
          "Provide accurate order status, fulfilment timelines, and returns management that meets modern customer expectations.",
      },
    ],
    features: [
      {
        name: "Order Hub",
        description:
          "Centralised order management ledger aggregating orders from all channels with status tracking, editing, and manual order creation.",
      },
      {
        name: "Routing Engine",
        description:
          "Configurable order routing rules that direct fulfilment to the optimal warehouse, store, or supplier based on defined priorities.",
      },
      {
        name: "Inventory Allocator",
        description:
          "Reserve and allocate inventory against orders at capture with hold management, priority rules, and shortage handling.",
      },
      {
        name: "Returns Manager",
        description:
          "Structured returns and exchange workflow from customer request through receipt, inspection, and credit or replacement.",
      },
    ],
    useCases: [
      {
        title: "Multi-channel order management",
        description:
          "Consolidate and manage orders from web, mobile, marketplace, and direct sales channels in a single, governed platform.",
      },
      {
        title: "Split and multi-location fulfilment",
        description:
          "Route orders to multiple fulfilment locations simultaneously for split shipment scenarios with unified status tracking.",
      },
      {
        title: "Returns and reverse logistics",
        description:
          "Manage post-purchase returns and exchanges with structured workflows, inventory reintegration, and customer credit management.",
      },
    ],
    faqs: [
      {
        question:
          "Can RicozOrders integrate with our warehouse management system?",
        answer:
          "Yes. RicozOrders integrates with WMS and fulfilment platforms to push order details and receive fulfilment confirmations and tracking information.",
      },
      {
        question: "How does inventory reservation work at order capture?",
        answer:
          "RicozOrders reserves inventory against available stock at order capture with configurable hold durations and automatic release for abandoned orders.",
      },
      {
        question: "Does RicozOrders support subscription or recurring orders?",
        answer:
          "Yes. RicozOrders supports recurring order scheduling with configurable frequencies, pause management, and automatic renewal.",
      },
    ],
    relatedProducts: ["rico-store", "rico-supply", "rico-fulfil"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozOrders — Enterprise Order Management & Fulfilment | Ricoz",
      description:
        "RicozOrders manages multi-channel orders with fulfilment routing, inventory allocation, returns management, and performance analytics.",
    },
  },
  {
    id: "rico-listings",
    slug: "rico-listings",
    name: "RicozListings",
    category: "Commerce & Digital Business",
    tagline: "Product catalogue and listing management",
    shortDescription:
      "An enterprise product catalogue platform for managing the product information, classifications, and digital listings that drive commerce experiences across channels.",
    heroStatement:
      "Manage every product, every attribute — with the accuracy commerce demands.",
    overview:
      "RicozListings is an enterprise product information management and catalogue platform designed for organisations managing large, complex product catalogues across multiple channels and markets. It provides a master product information repository, attribute management, taxonomy governance, digital asset linking, and multi-channel syndication — ensuring that every channel shows accurate, complete, and consistent product information.",
    capabilities: [
      "Master product information management",
      "Attribute and taxonomy management",
      "Digital asset association and management",
      "Multi-channel content syndication",
      "Catalogue completeness and quality management",
    ],
    benefits: [
      {
        title: "Content accuracy",
        description:
          "Maintain a single source of truth for every product attribute and description, eliminating inconsistencies across channels.",
      },
      {
        title: "Syndication efficiency",
        description:
          "Publish product information to multiple channels simultaneously from one governed repository, eliminating repeated data entry.",
      },
      {
        title: "Catalogue quality",
        description:
          "Monitor catalogue completeness and quality with automated checks that identify missing attributes before products are published.",
      },
    ],
    features: [
      {
        name: "Product Repository",
        description:
          "Centralised master product records with configurable attribute sets, variant management, and lifecycle status tracking.",
      },
      {
        name: "Taxonomy Manager",
        description:
          "Manage product classification hierarchies, attribute schemas, and category structures across different channel requirements.",
      },
      {
        name: "Asset Manager",
        description:
          "Link and manage digital assets — images, documents, videos — against product records with channel-specific format management.",
      },
      {
        name: "Syndication Engine",
        description:
          "Publish and synchronise product content to connected commerce, marketplace, and content platforms with channel-specific format mapping.",
      },
    ],
    useCases: [
      {
        title: "Product information governance",
        description:
          "Establish a governed master product catalogue that serves as the single source of truth for all channel and operational product data.",
      },
      {
        title: "Multi-channel product publishing",
        description:
          "Publish and synchronise product content across web, mobile, marketplace, and print channels from a single managed repository.",
      },
      {
        title: "Market localisation",
        description:
          "Manage localised product descriptions, regulatory attributes, and regional pricing within a structured localisation workflow.",
      },
    ],
    faqs: [
      {
        question: "Does RicozListings integrate with our e-commerce platform?",
        answer:
          "Yes. RicozListings integrates with major commerce platforms to push product data, keeping channel listings synchronised with the master catalogue.",
      },
      {
        question: "How does RicozListings handle product variants?",
        answer:
          "RicozListings supports parent-child product structures with configurable variant attributes, allowing manageable representation of large variant catalogues.",
      },
      {
        question:
          "Can RicozListings manage marketplace listings separately from website content?",
        answer:
          "Yes. RicozListings supports channel-specific content overrides so marketplace titles, descriptions, and attributes can differ from website content while sharing the master record.",
      },
    ],
    relatedProducts: ["rico-store", "rico-orders", "rico-content"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozListings — Enterprise Product Catalogue & PIM Platform | Ricoz",
      description:
        "RicozListings manages master product information with attribute governance, digital assets, and multi-channel content syndication.",
    },
  },
  {
    id: "rico-trade",
    slug: "rico-trade",
    name: "RicozTrade",
    category: "Commerce & Digital Business",
    tagline: "Commerce analytics and customer purchase intelligence",
    shortDescription:
      "An enterprise commerce analytics platform for measuring and understanding customer purchase behaviour, channel performance, and revenue contribution across digital commerce operations.",
    heroStatement:
      "Understand every commerce interaction — and act on what customers reveal.",
    overview:
      "RicozTrade is an enterprise commerce analytics platform that transforms transactional and behavioural data from digital commerce operations into structured, actionable intelligence. It provides sales performance analysis, customer purchase behaviour reporting, product analytics, channel attribution, and revenue forecasting — giving merchandising, marketing, and commercial teams the insight to optimise their commerce strategies.",
    capabilities: [
      "Sales performance and revenue analytics",
      "Customer purchase behaviour analysis",
      "Product and category performance reporting",
      "Channel attribution and contribution analysis",
      "Commerce forecasting and trend analysis",
    ],
    benefits: [
      {
        title: "Revenue clarity",
        description:
          "Understand which products, channels, and customer segments are driving revenue with precise, transaction-level analytics.",
      },
      {
        title: "Merchandising intelligence",
        description:
          "Optimise product assortments, pricing, and promotions based on data-driven purchase pattern analysis.",
      },
      {
        title: "Customer understanding",
        description:
          "Identify purchase frequency, basket composition, and repurchase behaviour to inform retention and marketing strategies.",
      },
    ],
    features: [
      {
        name: "Revenue Dashboard",
        description:
          "Real-time commerce revenue tracking with configurable breakdowns by product, category, channel, geography, and customer segment.",
      },
      {
        name: "Customer Purchase Analytics",
        description:
          "Analyse purchase frequency, average order value, basket size, repurchase rates, and customer lifetime value trends.",
      },
      {
        name: "Product Performance Reporter",
        description:
          "Track product-level revenue, conversion rate, return rate, and margin contribution with comparative period analysis.",
      },
      {
        name: "Promotion Analyser",
        description:
          "Measure promotion effectiveness with uplift analysis, discount depth tracking, and incremental revenue calculation.",
      },
    ],
    useCases: [
      {
        title: "Commerce performance management",
        description:
          "Track and analyse digital commerce performance against targets with real-time dashboards and comparative period reporting.",
      },
      {
        title: "Merchandising strategy development",
        description:
          "Inform assortment, pricing, and promotional decisions with product performance, purchase behaviour, and competitor benchmarking data.",
      },
      {
        title: "Customer repurchase analysis",
        description:
          "Understand customer loyalty and repurchase patterns to inform retention programmes and subscription or loyalty proposition development.",
      },
    ],
    faqs: [
      {
        question: "What commerce data sources does RicozTrade connect to?",
        answer:
          "RicozTrade connects to commerce platforms, order management systems, marketing tools, and customer data platforms to build a comprehensive commerce analytics dataset.",
      },
      {
        question: "Does RicozTrade support marketplace analytics?",
        answer:
          "Yes. RicozTrade integrates with major marketplace data sources to provide a cross-channel view of commerce performance including owned and marketplace channels.",
      },
      {
        question: "How does channel attribution work?",
        answer:
          "RicozTrade supports configurable attribution models — including first-touch, last-touch, and multi-touch — to allocate revenue credit across marketing and acquisition channels.",
      },
    ],
    relatedProducts: ["rico-store", "rico-orders", "rico-analytics"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozTrade — Enterprise Commerce Analytics & Purchase Intelligence | Ricoz",
      description:
        "RicozTrade delivers commerce performance analytics with customer purchase behaviour, product reporting, and channel attribution.",
    },
  },
  {
    id: "rico-pos",
    slug: "rico-pos",
    name: "RicozPOS",
    category: "Commerce & Digital Business",
    tagline: "Point-of-sale and in-person commerce management",
    shortDescription:
      "An enterprise point-of-sale platform for managing in-person sales operations, payment processing, and store-level inventory across physical commerce locations.",
    heroStatement:
      "Run every till from the same platform as every digital channel.",
    overview:
      "RicozPOS is an enterprise point-of-sale and in-person commerce platform that connects physical retail and service location operations to the broader commerce infrastructure. It provides payment processing, transaction management, product look-up, store-level inventory visibility, and end-of-day reconciliation — enabling a consistent, governed in-person commerce operation that shares product, pricing, and customer data with digital channels.",
    capabilities: [
      "Transaction and payment processing",
      "Product and price look-up management",
      "Store inventory visibility",
      "Staff access and permissions management",
      "End-of-day reconciliation and reporting",
    ],
    benefits: [
      {
        title: "Unified commerce",
        description:
          "Connect in-person sales to digital commerce infrastructure so products, pricing, and customers are managed consistently across all channels.",
      },
      {
        title: "Transaction reliability",
        description:
          "Process transactions reliably with offline capability for low-connectivity environments and failsafe payment handling.",
      },
      {
        title: "Operational visibility",
        description:
          "Give store managers real-time visibility into transaction volumes, payment splits, and stock levels at the point of sale.",
      },
    ],
    features: [
      {
        name: "POS Transaction Engine",
        description:
          "Fast, reliable transaction processing with product barcode scanning, configurable tax rules, and multi-payment method support.",
      },
      {
        name: "Inventory View",
        description:
          "Real-time product availability at the store level with stock look-up across connected locations for associate-assisted selling.",
      },
      {
        name: "Customer Lookup",
        description:
          "Access customer profiles, loyalty status, and purchase history at the point of sale for personalised service and loyalty recognition.",
      },
      {
        name: "End-of-Day Reporting",
        description:
          "Automated end-of-day reconciliation reports with cash, card, and transaction summaries for store management and finance.",
      },
    ],
    useCases: [
      {
        title: "Multi-location retail operations",
        description:
          "Manage point-of-sale operations across a network of physical locations with consistent product catalogues, pricing, and customer data.",
      },
      {
        title: "Omnichannel order fulfilment",
        description:
          "Enable in-store fulfilment of online orders with inventory visibility, pick management, and transaction reconciliation across channels.",
      },
      {
        title: "Service location transaction management",
        description:
          "Process service payments and manage products at service delivery locations with integrated inventory and customer management.",
      },
    ],
    faqs: [
      {
        question: "Does RicozPOS work offline if connectivity is lost?",
        answer:
          "Yes. RicozPOS operates in offline mode for transaction capture and payment processing, synchronising with the central platform when connectivity is restored.",
      },
      {
        question: "Which payment methods does RicozPOS support?",
        answer:
          "RicozPOS supports card, contactless, mobile payment, and cash with configurable payment method rules by location.",
      },
      {
        question: "Can RicozPOS connect to our central product catalogue?",
        answer:
          "Yes. RicozPOS synchronises product and pricing data from RicozListings and connected commerce platforms to ensure in-store pricing matches the central catalogue.",
      },
    ],
    relatedProducts: ["rico-store", "rico-orders", "rico-listings"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozPOS — Enterprise Point-of-Sale & In-Person Commerce | Ricoz",
      description:
        "RicozPOS manages in-person commerce with transaction processing, inventory visibility, customer lookup, and multi-location operations.",
    },
  },
  {
    id: "rico-fulfil",
    slug: "rico-fulfil",
    name: "RicozFulfil",
    category: "Commerce & Digital Business",
    tagline: "Fulfilment operations and last-mile management",
    shortDescription:
      "An enterprise fulfilment management platform for coordinating pick, pack, despatch, and delivery operations across the fulfilment network.",
    heroStatement:
      "Fulfil every commitment — with the operational precision customers judge you on.",
    overview:
      "RicozFulfil is an enterprise fulfilment operations and last-mile management platform designed for organisations managing complex fulfilment networks across warehouses, stores, and third-party logistics partners. It coordinates pick and pack operations, carrier selection and despatch, delivery tracking, and customer communication — providing the operational management and visibility required to fulfil at enterprise scale consistently.",
    capabilities: [
      "Pick and pack operations management",
      "Carrier management and despatch",
      "Delivery tracking and event management",
      "Returns and reverse logistics coordination",
      "Fulfilment performance analytics",
    ],
    benefits: [
      {
        title: "Fulfilment accuracy",
        description:
          "Reduce mis-picks, mispacks, and despatch errors through structured operational workflows with verification steps.",
      },
      {
        title: "Delivery performance",
        description:
          "Monitor carrier performance and delivery outcomes in real time to identify underperforming routes and carriers before customer impact.",
      },
      {
        title: "Customer communication",
        description:
          "Keep customers informed through automated despatch and delivery status communications driven by actual fulfilment events.",
      },
    ],
    features: [
      {
        name: "Picking Manager",
        description:
          "Optimised pick instruction management with batch, zone, and wave picking modes for warehouse and store fulfilment operations.",
      },
      {
        name: "Carrier Hub",
        description:
          "Carrier selection, label generation, and despatch management with configurable carrier allocation rules and rate management.",
      },
      {
        name: "Delivery Tracker",
        description:
          "Real-time delivery status tracking with carrier event ingestion, SLA monitoring, and exception alerting for delayed deliveries.",
      },
      {
        name: "Fulfilment Analytics",
        description:
          "Track fulfilment KPIs including pick accuracy, despatch SLA, carrier performance, and on-time delivery rates.",
      },
    ],
    useCases: [
      {
        title: "Warehouse fulfilment operations",
        description:
          "Manage pick, pack, and despatch operations in warehouse environments with optimised picking workflows and carrier integration.",
      },
      {
        title: "Multi-carrier delivery management",
        description:
          "Manage relationships with multiple carrier partners — allocating shipments, tracking performance, and managing exceptions.",
      },
      {
        title: "Customer delivery experience",
        description:
          "Deliver proactive, accurate delivery communications driven by real carrier events to meet customer expectations.",
      },
    ],
    faqs: [
      {
        question: "Does RicozFulfil integrate with carrier APIs?",
        answer:
          "Yes. RicozFulfil integrates with major carrier APIs for label generation, despatch submission, and tracking event ingestion.",
      },
      {
        question: "Can RicozFulfil manage third-party logistics partners?",
        answer:
          "Yes. RicozFulfil supports 3PL partner management with electronic order transmission, confirmation management, and performance tracking.",
      },
      {
        question:
          "How does RicozFulfil handle exceptions like failed deliveries?",
        answer:
          "Failed delivery events are automatically captured from carrier feeds and routed to exception queues with customer communication automation and rebook management.",
      },
    ],
    relatedProducts: ["rico-orders", "rico-supply", "rico-store"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozFulfil — Enterprise Fulfilment & Last-Mile Management | Ricoz",
      description:
        "RicozFulfil manages pick, pack, carrier despatch, delivery tracking, and fulfilment performance analytics across the enterprise fulfilment network.",
    },
  },

  // ─── Batch 08: AI & Intelligence ────────────────────────────────────────────

  {
    id: "rico-assist",
    slug: "rico-assist",
    name: "RicozAssist",
    category: "AI & Intelligence",
    tagline: "Enterprise AI assistant for business productivity",
    shortDescription:
      "A governed enterprise AI assistant that augments employee productivity with conversational intelligence, contextual drafting, and real-time knowledge access across business systems.",
    heroStatement:
      "An AI assistant that works with the business — not just in it.",
    overview:
      "RicozAssist is a governed enterprise AI assistant designed for organisations that need the productivity benefits of conversational AI with the security, auditability, and administrative controls that enterprise environments demand. It provides natural-language interaction for document drafting, knowledge retrieval, business system queries, and work assistance — connected to the organisation's own data and governed to keep sensitive information in the right hands.",
    capabilities: [
      "Conversational document drafting and editing",
      "Enterprise knowledge retrieval and Q&A",
      "Business system natural-language queries",
      "Meeting summary and action capture",
      "Governed AI policy and access management",
    ],
    benefits: [
      {
        title: "Productivity at scale",
        description:
          "Reduce the time employees spend on drafting, searching, and summarising by making AI assistance available within their existing work context.",
      },
      {
        title: "Enterprise governance",
        description:
          "Apply access policies, data handling rules, and audit logging to every AI interaction rather than adopting ungoverned public tools.",
      },
      {
        title: "Contextual accuracy",
        description:
          "Ground AI responses in the organisation's own documents, knowledge bases, and data rather than generic training information.",
      },
    ],
    features: [
      {
        name: "Conversational Interface",
        description:
          "Natural-language interaction for drafting, editing, summarising, and answering questions within an enterprise-governed environment.",
      },
      {
        name: "Knowledge Connector",
        description:
          "Connect the assistant to enterprise document repositories, knowledge bases, and approved data sources for grounded, accurate responses.",
      },
      {
        name: "Work Context Integration",
        description:
          "Surface AI assistance within document editors, email, and business applications so employees access it in the context of their work.",
      },
      {
        name: "Governance Console",
        description:
          "Administer AI access policies, acceptable use rules, interaction logging, and audit trail management.",
      },
    ],
    useCases: [
      {
        title: "Document and communication drafting",
        description:
          "Accelerate the drafting of proposals, reports, email responses, and documentation with AI assistance trained on the organisation's style and context.",
      },
      {
        title: "Enterprise knowledge Q&A",
        description:
          "Enable employees to ask natural-language questions of internal knowledge bases, policies, and documents without navigating complex systems.",
      },
      {
        title: "Meeting intelligence",
        description:
          "Capture meeting summaries, extract decisions, and surface action items from recordings or transcripts through conversational AI.",
      },
    ],
    faqs: [
      {
        question:
          "How does RicozAssist prevent AI responses from leaking sensitive data?",
        answer:
          "RicozAssist applies role-based access controls to connected data sources so the assistant only draws on information the requesting user is authorised to see.",
      },
      {
        question: "Can RicozAssist be deployed on private infrastructure?",
        answer:
          "Yes. RicozAssist supports private deployment configurations where AI model inference runs within the organisation's own environment for maximum data sovereignty.",
      },
      {
        question:
          "Does RicozAssist integrate with our existing document platforms?",
        answer:
          "Yes. RicozAssist connects to enterprise document and knowledge management platforms to provide grounded assistance from the organisation's own content.",
      },
    ],
    relatedProducts: ["rico-spark", "rico-know", "rico-collab"],
    relatedServices: [
      "digital-transformation-consulting",
      "technology-strategy-roadmap",
    ],
    status: "active",
    featured: true,
    seo: {
      title: "RicozAssist — Governed Enterprise AI Assistant | Ricoz",
      description:
        "RicozAssist delivers governed conversational AI for enterprise productivity with knowledge retrieval, document drafting, and audit-ready access controls.",
    },
  },
  {
    id: "rico-agent",
    slug: "rico-agent",
    name: "RicozAgent",
    category: "AI & Intelligence",
    tagline: "AI agent platform for autonomous business task execution",
    shortDescription:
      "An enterprise AI agent platform for designing, deploying, and governing AI agents that autonomously execute multi-step business tasks across connected systems and data sources.",
    heroStatement: "Deploy AI that acts — not just answers.",
    overview:
      "RicozAgent is an enterprise AI agent platform that enables organisations to move beyond conversational AI into autonomous AI — deploying governed agents that can plan, reason, and execute multi-step tasks across business systems. It provides a visual agent design studio, tool integration framework, task execution monitoring, and governance controls — allowing organisations to automate complex cognitive work that previously required human coordination across systems.",
    capabilities: [
      "Visual agent design and task configuration",
      "Multi-step task planning and execution",
      "Tool and system integration",
      "Agent monitoring and intervention management",
      "Agent performance analytics and governance",
    ],
    benefits: [
      {
        title: "Autonomous task execution",
        description:
          "Deploy AI agents that can complete multi-step business tasks — researching, deciding, and acting — without constant human orchestration.",
      },
      {
        title: "Human-in-the-loop governance",
        description:
          "Configure approval gates and escalation thresholds so agents operate autonomously within defined boundaries with human oversight where it matters.",
      },
      {
        title: "Compounding automation",
        description:
          "Combine AI agents with existing process automation to handle the unstructured, variable work that rules-based automation cannot manage alone.",
      },
    ],
    features: [
      {
        name: "Agent Studio",
        description:
          "Visual design environment for configuring agent capabilities, tool access, task instructions, and decision boundaries.",
      },
      {
        name: "Tool Registry",
        description:
          "Managed library of tools that agents can use — APIs, databases, document systems, and business applications — with governed authentication.",
      },
      {
        name: "Task Orchestrator",
        description:
          "Plan and execute multi-step task sequences with dynamic reasoning, tool selection, and progress tracking.",
      },
      {
        name: "Agent Monitor",
        description:
          "Real-time visibility into agent task execution with intervention capability, performance analytics, and audit trail.",
      },
    ],
    useCases: [
      {
        title: "Research and analysis automation",
        description:
          "Deploy agents that gather information from multiple sources, synthesise findings, and produce structured outputs for business decision-making.",
      },
      {
        title: "Cross-system process execution",
        description:
          "Run multi-step processes that span data lookup, decision-making, and system updates autonomously within defined governance parameters.",
      },
      {
        title: "Customer interaction enrichment",
        description:
          "Use AI agents to enrich customer interactions by autonomously gathering context, preparing summaries, and triggering appropriate next actions.",
      },
    ],
    faqs: [
      {
        question: "How does RicozAgent differ from RicozAutomate?",
        answer:
          "RicozAutomate executes pre-defined deterministic workflows. RicozAgent deploys AI reasoning to handle tasks with variable, unstructured elements that do not fit a fixed workflow.",
      },
      {
        question: "How are agent actions governed for compliance?",
        answer:
          "Every agent action is logged with the reasoning chain, tool calls, and outcomes for full auditability. Configurable approval gates require human sign-off before sensitive actions execute.",
      },
      {
        question: "Can agents be connected to external APIs?",
        answer:
          "Yes. RicozAgent integrates with external REST APIs through the tool registry with managed credentials and configurable rate and scope controls.",
      },
    ],
    relatedProducts: ["rico-assist", "rico-flow", "rico-automate"],
    relatedServices: [
      "digital-transformation-consulting",
      "technology-strategy-roadmap",
    ],
    status: "active",
    featured: true,
    seo: {
      title: "RicozAgent — Enterprise AI Agent Platform | Ricoz",
      description:
        "RicozAgent designs and deploys governed AI agents for autonomous multi-step business task execution across enterprise systems.",
    },
  },
  {
    id: "rico-docai",
    slug: "rico-docai",
    name: "RicozDocAI",
    category: "AI & Intelligence",
    tagline: "Intelligent document processing and extraction",
    shortDescription:
      "An enterprise intelligent document processing platform that extracts, classifies, and routes structured data from unstructured documents at scale using AI and machine learning.",
    heroStatement:
      "Turn every document into structured, actionable business data.",
    overview:
      "RicozDocAI is an enterprise intelligent document processing platform that replaces manual document handling with AI-powered extraction, classification, and routing. It processes invoices, contracts, forms, correspondence, and complex multi-page documents — extracting structured data, validating against business rules, and routing to the appropriate downstream systems — transforming document-intensive operations from a cost centre into a governed, automated process.",
    capabilities: [
      "AI-powered document classification",
      "Intelligent field and table extraction",
      "Document validation and exception handling",
      "Automated routing and workflow integration",
      "Extraction accuracy monitoring and training",
    ],
    benefits: [
      {
        title: "Processing capacity",
        description:
          "Process thousands of documents per hour with consistent accuracy, eliminating the bottleneck of manual data entry from high-volume document flows.",
      },
      {
        title: "Data quality",
        description:
          "Apply validation rules and confidence scoring to extracted data so only verified information enters downstream systems.",
      },
      {
        title: "Exception governance",
        description:
          "Route low-confidence or failed extractions to human review queues without interrupting the automated processing of compliant documents.",
      },
    ],
    features: [
      {
        name: "Extraction Engine",
        description:
          "AI-powered field and table extraction from structured, semi-structured, and unstructured documents with configurable extraction models per document type.",
      },
      {
        name: "Classification Service",
        description:
          "Automatic document type classification to route incoming documents to the correct extraction model and processing workflow.",
      },
      {
        name: "Validation Layer",
        description:
          "Business rule validation of extracted data with confidence thresholds, mandatory field checks, and cross-field consistency rules.",
      },
      {
        name: "Human Review Queue",
        description:
          "Structured exception management for low-confidence extractions with side-by-side document view, correction interface, and model feedback.",
      },
    ],
    useCases: [
      {
        title: "Invoice and AP document processing",
        description:
          "Automate the extraction of invoice data — header, line items, tax, totals — from supplier invoices for straight-through processing into the accounts payable workflow.",
      },
      {
        title: "Contract data extraction",
        description:
          "Extract key terms, parties, obligations, and dates from contracts at scale to populate contract management systems without manual data entry.",
      },
      {
        title: "Customer onboarding document processing",
        description:
          "Process KYC, identity, and application documents automatically, extracting structured data and routing to verification workflows.",
      },
    ],
    faqs: [
      {
        question: "What document types can RicozDocAI process?",
        answer:
          "RicozDocAI processes PDF, image-based documents, Word, and scanned documents for common business types including invoices, contracts, forms, correspondence, and custom layouts.",
      },
      {
        question: "How does extraction accuracy improve over time?",
        answer:
          "Corrections made during human review are used to retrain extraction models with configurable feedback loops, improving accuracy on the organisation's specific document variants.",
      },
      {
        question:
          "Does RicozDocAI integrate with our document management system?",
        answer:
          "Yes. RicozDocAI integrates with enterprise document management and workflow platforms to ingest documents and route structured output to the appropriate destination.",
      },
    ],
    relatedProducts: ["rico-doc", "rico-contract", "rico-flow"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozDocAI — Intelligent Document Processing Platform | Ricoz",
      description:
        "RicozDocAI extracts, classifies, and routes structured data from business documents at scale with AI-powered IDP and validation.",
    },
  },
  {
    id: "rico-decide",
    slug: "rico-decide",
    name: "RicozDecide",
    category: "AI & Intelligence",
    tagline: "AI-powered decision support and recommendation",
    shortDescription:
      "An enterprise AI decision support platform that surfaces contextual recommendations, risk assessments, and next-best-action guidance at the point of business decisions.",
    heroStatement: "Put intelligence exactly where decisions are being made.",
    overview:
      "RicozDecide is an enterprise AI decision support platform that embeds analytical intelligence at the decision points where it creates the most value. It combines historical data, real-time signals, and configurable AI models to surface recommendations, flag risks, and guide next-best actions for customer-facing, operational, and analytical decision workflows — without requiring decision-makers to leave their working environment to query separate systems.",
    capabilities: [
      "Contextual recommendation generation",
      "Risk scoring and flag management",
      "Next-best-action guidance",
      "Decision outcome tracking and model improvement",
      "Decision API and embedded integration",
    ],
    benefits: [
      {
        title: "Decision quality",
        description:
          "Improve the consistency and accuracy of business decisions by surfacing data-driven recommendations alongside the judgment of experienced practitioners.",
      },
      {
        title: "Speed",
        description:
          "Reduce the time to reach well-informed decisions by delivering relevant analysis directly at the point of action rather than requiring separate data queries.",
      },
      {
        title: "Learning loop",
        description:
          "Track decision outcomes against recommendations to measure model accuracy and continuously improve the quality of future guidance.",
      },
    ],
    features: [
      {
        name: "Recommendation Engine",
        description:
          "Context-aware recommendation generation using configurable models that weigh historical patterns, current signals, and business rules.",
      },
      {
        name: "Risk Scorer",
        description:
          "Real-time risk assessment for transactions, applications, and events with configurable risk dimensions and threshold alerting.",
      },
      {
        name: "Decision API",
        description:
          "High-performance REST API for embedding AI-driven recommendations and risk scores into existing applications at the point of use.",
      },
      {
        name: "Outcome Tracker",
        description:
          "Record and analyse decision outcomes against model recommendations to measure accuracy and identify improvement opportunities.",
      },
    ],
    useCases: [
      {
        title: "Credit and risk decisioning",
        description:
          "Embed AI-driven risk scoring and approval recommendations into credit, lending, and underwriting workflows to improve consistency and reduce manual assessment time.",
      },
      {
        title: "Customer next-best-action",
        description:
          "Surface AI-driven next-best-action guidance in customer service, sales, and engagement workflows to improve customer outcome and revenue performance.",
      },
      {
        title: "Operational exception routing",
        description:
          "Classify and route operational exceptions, claims, and enquiries with AI-powered priority scoring and routing recommendations.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozDecide require a data science team to configure models?",
        answer:
          "RicozDecide includes no-code model configuration for standard decision types. Complex models benefit from data science input but do not require deep ML engineering.",
      },
      {
        question: "How are model recommendations explained to users?",
        answer:
          "RicozDecide surfaces configurable explanation summaries alongside recommendations so users understand the key factors driving each guidance output.",
      },
      {
        question:
          "Can RicozDecide models be deployed in real-time applications?",
        answer:
          "Yes. The Decision API is designed for real-time, low-latency embedding in transactional applications with SLA-governed response times.",
      },
    ],
    relatedProducts: ["rico-analytics", "rico-predict", "rico-rules"],
    relatedServices: [
      "data-analytics-services",
      "digital-transformation-consulting",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozDecide — Enterprise AI Decision Support Platform | Ricoz",
      description:
        "RicozDecide surfaces AI-powered recommendations, risk scores, and next-best-action guidance at enterprise decision points.",
    },
  },
  {
    id: "rico-knowai",
    slug: "rico-knowai",
    name: "RicozKnowAI",
    category: "AI & Intelligence",
    tagline: "Enterprise knowledge intelligence and semantic search",
    shortDescription:
      "An enterprise knowledge intelligence platform that makes organisational knowledge searchable, discoverable, and accessible through natural-language semantic search and AI-powered knowledge delivery.",
    heroStatement:
      "Find the knowledge that exists in your organisation — wherever it lives.",
    overview:
      "RicozKnowAI is an enterprise knowledge intelligence platform that transforms fragmented, distributed organisational knowledge into a unified, semantically searchable resource. It connects to documents, wikis, databases, and communication histories — indexing content for semantic retrieval so employees find accurate, relevant knowledge through natural-language questions rather than exact keyword matching. It closes the gap between the knowledge the organisation holds and the knowledge employees can actually find and use.",
    capabilities: [
      "Semantic and natural-language knowledge search",
      "Multi-source knowledge indexing and connection",
      "Knowledge gap identification and management",
      "Expertise mapping and knowledge ownership",
      "Knowledge delivery and integration APIs",
    ],
    benefits: [
      {
        title: "Knowledge accessibility",
        description:
          "Surface relevant organisational knowledge in response to natural-language questions rather than requiring users to know where information lives.",
      },
      {
        title: "Onboarding acceleration",
        description:
          "Help new employees find answers to operational and procedural questions quickly, reducing dependence on experienced colleagues for routine knowledge.",
      },
      {
        title: "Knowledge visibility",
        description:
          "Identify knowledge gaps, outdated content, and ownership gaps across the organisation's knowledge estate.",
      },
    ],
    features: [
      {
        name: "Semantic Search Engine",
        description:
          "Natural-language semantic search across connected knowledge sources with relevance ranking, source attribution, and confidence indicators.",
      },
      {
        name: "Knowledge Connector",
        description:
          "Ingest and index content from documents, wikis, databases, help articles, and communication archives through configurable connectors.",
      },
      {
        name: "Knowledge Graph",
        description:
          "Build a connected knowledge graph that surfaces relationships between concepts, documents, and expertise areas for richer discovery.",
      },
      {
        name: "Knowledge API",
        description:
          "Deliver knowledge search results to chatbots, self-service portals, and embedded business applications through a governed API.",
      },
    ],
    useCases: [
      {
        title: "Employee knowledge self-service",
        description:
          "Enable employees to find policies, procedures, and operational knowledge through natural-language questions without escalating to HR or specialist teams.",
      },
      {
        title: "Customer service knowledge delivery",
        description:
          "Provide customer service agents with AI-powered knowledge retrieval that surfaces accurate answers faster, reducing handling time and escalations.",
      },
      {
        title: "Expert knowledge capture",
        description:
          "Index and make discoverable the expert knowledge held in documents, reports, and communication histories before it becomes inaccessible.",
      },
    ],
    faqs: [
      {
        question: "How does semantic search differ from keyword search?",
        answer:
          "Semantic search understands the intent and meaning behind a question, returning relevant results even when the exact words do not appear in the content — significantly improving discovery of knowledge expressed differently from the query.",
      },
      {
        question: "What types of content can RicozKnowAI index?",
        answer:
          "RicozKnowAI indexes PDFs, Word documents, web pages, wikis, Markdown, and structured data sources through configurable connectors with permission-preserving access controls.",
      },
      {
        question:
          "How is sensitive knowledge protected from unauthorised discovery?",
        answer:
          "RicozKnowAI preserves the access permissions of source systems so search results only surface content the requesting user is authorised to see.",
      },
    ],
    relatedProducts: ["rico-know", "rico-doc", "rico-assist"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozKnowAI — Enterprise Knowledge Intelligence & Semantic Search | Ricoz",
      description:
        "RicozKnowAI makes enterprise knowledge searchable and discoverable through semantic AI search across distributed content sources.",
    },
  },
  {
    id: "rico-vision",
    slug: "rico-vision",
    name: "RicozVision",
    category: "AI & Intelligence",
    tagline: "AI vision and visual content intelligence",
    shortDescription:
      "An enterprise AI vision platform for extracting, classifying, and analysing information from images, videos, and visual documents using computer vision and multimodal AI.",
    heroStatement:
      "Understand the visual content your business generates every day.",
    overview:
      "RicozVision is an enterprise AI vision platform that applies computer vision and multimodal AI to the images, photos, videos, and visual documents that flow through business operations. It provides a governed environment for training and deploying visual analysis models — from product image quality inspection to identity document verification, damage assessment, and visual content moderation — enabling organisations to process visual information at scale without manual review.",
    capabilities: [
      "Visual classification and object detection",
      "Document and form visual extraction",
      "Defect and anomaly detection in images",
      "Video analysis and event detection",
      "Visual content moderation and governance",
    ],
    benefits: [
      {
        title: "Visual processing scale",
        description:
          "Process thousands of images or hours of video per day with consistent AI-driven analysis, far exceeding manual review capacity.",
      },
      {
        title: "Quality and accuracy",
        description:
          "Detect defects, inconsistencies, and anomalies in visual content with greater consistency than human inspection at production volume.",
      },
      {
        title: "New data availability",
        description:
          "Unlock insights from visual content that was previously unprocessed, turning image and video data into structured business intelligence.",
      },
    ],
    features: [
      {
        name: "Vision Model Studio",
        description:
          "Train, test, and deploy custom visual classification and detection models using the organisation's own labelled image datasets.",
      },
      {
        name: "Pre-built Vision Models",
        description:
          "Deploy pre-trained models for common use cases — product inspection, document type classification, identity verification, and damage assessment.",
      },
      {
        name: "Video Intelligence",
        description:
          "Analyse video streams and recordings for event detection, motion analysis, and content-specific triggers with configurable detection rules.",
      },
      {
        name: "Vision API",
        description:
          "Serve visual analysis results to connected applications, workflows, and automation processes through a low-latency REST API.",
      },
    ],
    useCases: [
      {
        title: "Product quality inspection",
        description:
          "Automate visual quality inspection on production lines or incoming goods with computer vision models trained on the organisation's own quality standards.",
      },
      {
        title: "Document and identity verification",
        description:
          "Verify identity documents, certificates, and form completeness using visual AI to accelerate KYC and compliance document processing.",
      },
      {
        title: "Asset and property condition assessment",
        description:
          "Assess the condition of assets, facilities, or properties from photos or video to automate inspection reporting and maintenance prioritisation.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozVision require large datasets to train custom models?",
        answer:
          "RicozVision supports transfer learning so custom models can be trained effectively on smaller labelled datasets, with pre-built models available where custom training is not required.",
      },
      {
        question: "Can RicozVision process video in real time?",
        answer:
          "RicozVision supports both batch video processing and near-real-time stream analysis depending on the inference architecture and detection latency requirements.",
      },
      {
        question:
          "How does RicozVision integrate with our existing image workflows?",
        answer:
          "RicozVision connects to image and video storage systems through configurable connectors and exposes results via API for integration with business workflows and automation.",
      },
    ],
    relatedProducts: ["rico-docai", "rico-data", "rico-analytics"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozVision — Enterprise AI Vision & Visual Intelligence Platform | Ricoz",
      description:
        "RicozVision applies computer vision and multimodal AI to process, classify, and analyse images and videos for enterprise business operations.",
    },
  },
  {
    id: "rico-orchestrate",
    slug: "rico-orchestrate",
    name: "RicozOrchestrate",
    category: "AI & Intelligence",
    tagline: "Enterprise AI orchestration and governance",
    shortDescription:
      "An enterprise AI orchestration platform for managing the lifecycle, governance, and performance of AI models, applications, and agents across the organisation.",
    heroStatement: "Govern the intelligence that governs the business.",
    overview:
      "RicozOrchestrate is an enterprise AI orchestration and governance platform designed for organisations that have moved beyond a single AI experiment into a distributed estate of AI applications, models, and agents. It provides model registry management, LLM gateway governance, AI usage monitoring, cost management, and policy enforcement — giving AI, IT, and compliance teams the visibility and control required to operate AI responsibly at enterprise scale.",
    capabilities: [
      "AI model registry and lifecycle management",
      "LLM gateway and provider management",
      "AI usage monitoring and cost governance",
      "AI policy enforcement and compliance controls",
      "AI performance and quality monitoring",
    ],
    benefits: [
      {
        title: "AI estate control",
        description:
          "Maintain visibility and governance over every AI model and application in the organisation before fragmentation makes it unmanageable.",
      },
      {
        title: "Cost governance",
        description:
          "Monitor and control AI inference costs across providers and internal deployments to prevent uncontrolled spending as adoption grows.",
      },
      {
        title: "Compliance assurance",
        description:
          "Apply and enforce AI usage policies, data handling rules, and regulatory compliance requirements across the entire AI estate.",
      },
    ],
    features: [
      {
        name: "Model Registry",
        description:
          "Centralised registry of all AI models — internal, third-party, and open source — with version management, metadata, and lifecycle governance.",
      },
      {
        name: "LLM Gateway",
        description:
          "Managed gateway for large language model API access with provider abstraction, rate limiting, cost tracking, and content policy enforcement.",
      },
      {
        name: "AI Usage Monitor",
        description:
          "Real-time monitoring of AI application usage, model performance, cost attribution, and policy compliance across the enterprise AI estate.",
      },
      {
        name: "AI Policy Engine",
        description:
          "Configure and enforce AI usage policies including acceptable use, data handling, output guardrails, and regulatory compliance controls.",
      },
    ],
    useCases: [
      {
        title: "Enterprise AI governance programme",
        description:
          "Implement a governed AI programme with model registry, usage monitoring, and policy controls that meet emerging AI regulatory requirements.",
      },
      {
        title: "Multi-provider LLM management",
        description:
          "Manage access to multiple LLM providers through a unified gateway with cost controls, failover, and consistent policy enforcement.",
      },
      {
        title: "AI cost optimisation",
        description:
          "Track and attribute AI inference costs by team, application, and model to identify optimisation opportunities and manage the AI budget.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozOrchestrate work with both cloud and self-hosted AI models?",
        answer:
          "Yes. RicozOrchestrate manages cloud-hosted, API-based, and self-hosted AI models within a unified registry and governance framework.",
      },
      {
        question: "How does the LLM gateway handle provider outages?",
        answer:
          "The gateway supports configurable fallback routing to secondary providers when primary providers experience outages, maintaining AI application continuity.",
      },
      {
        question: "Does RicozOrchestrate support emerging AI regulations?",
        answer:
          "RicozOrchestrate is designed to support AI governance requirements including risk classification, impact assessment documentation, and human oversight controls aligned to emerging regulatory frameworks.",
      },
    ],
    relatedProducts: ["rico-agent", "rico-assist", "rico-shield"],
    relatedServices: [
      "digital-transformation-consulting",
      "technology-strategy-roadmap",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozOrchestrate — Enterprise AI Orchestration & Governance | Ricoz",
      description:
        "RicozOrchestrate governs the enterprise AI estate with model registry, LLM gateway management, usage monitoring, and AI policy enforcement.",
    },
  },

  // ─── Batch 08: Industry & Specialized Solutions ──────────────────────────────

  {
    id: "rico-retail",
    slug: "rico-retail",
    name: "RicozRetail",
    category: "Industry & Specialized Solutions",
    tagline: "Retail operations and omnichannel management",
    shortDescription:
      "An enterprise retail operations platform for managing store performance, merchandising, omnichannel inventory, and customer loyalty across retail networks.",
    heroStatement:
      "Connect every store, every channel, every customer in one retail operating environment.",
    overview:
      "RicozRetail is an enterprise retail operations platform designed for multi-location retailers managing complex omnichannel environments. It provides store performance management, centralised merchandising governance, omnichannel inventory visibility, loyalty programme management, and retail analytics — giving retail operations teams the data-driven tools to optimise performance across the entire retail estate.",
    capabilities: [
      "Store performance management and reporting",
      "Centralised merchandising governance",
      "Omnichannel inventory visibility and allocation",
      "Customer loyalty programme management",
      "Retail analytics and market intelligence",
    ],
    benefits: [
      {
        title: "Consistent execution",
        description:
          "Ensure merchandising standards, promotions, and customer experience are executed consistently across every location in the network.",
      },
      {
        title: "Inventory intelligence",
        description:
          "Maintain real-time visibility across all inventory locations to optimise allocation, reduce out-of-stocks, and prevent excess stock positions.",
      },
      {
        title: "Network performance",
        description:
          "Compare store performance across the network with consistent KPIs to identify underperformance early and share best practice.",
      },
    ],
    features: [
      {
        name: "Store Dashboard",
        description:
          "Individual and comparative store performance tracking with configurable KPIs, targets, and trend analysis across the retail network.",
      },
      {
        name: "Merchandising Hub",
        description:
          "Centralised planogram management, product range governance, and promotional execution with store-level compliance tracking.",
      },
      {
        name: "Loyalty Manager",
        description:
          "Configure and manage customer loyalty schemes with points, tier management, personalised rewards, and redemption tracking.",
      },
      {
        name: "Retail Analytics",
        description:
          "Sales, footfall, basket, conversion, and margin analytics with network-level and store-level reporting.",
      },
    ],
    useCases: [
      {
        title: "Multi-location retail network management",
        description:
          "Govern a network of retail locations with consistent standards, centralised merchandising, and real-time performance visibility.",
      },
      {
        title: "Omnichannel inventory management",
        description:
          "Maintain unified inventory across stores and fulfilment centres with intelligent allocation that satisfies both in-store and online demand.",
      },
      {
        title: "Customer loyalty and retention",
        description:
          "Run structured loyalty schemes that build repeat purchasing and customer lifetime value across the retail network.",
      },
    ],
    faqs: [
      {
        question: "Does RicozRetail connect to our POS systems?",
        answer:
          "Yes. RicozRetail integrates with RicozPOS and third-party point-of-sale systems to receive transactional data for real-time store performance reporting.",
      },
      {
        question: "How does RicozRetail handle seasonal merchandising changes?",
        answer:
          "RicozRetail supports time-phased merchandising plans with seasonal templates, range transition management, and clearance governance workflows.",
      },
      {
        question:
          "Can RicozRetail manage franchise as well as company-owned locations?",
        answer:
          "Yes. RicozRetail supports permission-differentiated access for franchise operators with configurable governance levels and standard reporting requirements.",
      },
    ],
    relatedProducts: ["rico-pos", "rico-store", "rico-listings"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozRetail — Enterprise Retail Operations & Omnichannel Management | Ricoz",
      description:
        "RicozRetail manages store performance, merchandising, omnichannel inventory, and customer loyalty for enterprise retail networks.",
    },
  },
  {
    id: "rico-health",
    slug: "rico-health",
    name: "RicozHealth",
    category: "Industry & Specialized Solutions",
    tagline: "Healthcare operations and clinical workflow management",
    shortDescription:
      "An enterprise healthcare operations platform for managing patient administration, clinical workflows, appointment management, and compliance across healthcare organisations.",
    heroStatement:
      "Operate healthcare facilities with the precision and governance patient care demands.",
    overview:
      "RicozHealth is an enterprise healthcare operations platform designed for healthcare providers, private medical groups, and health system administrators managing complex clinical and operational environments. It provides patient administration, appointment scheduling, clinical workflow management, regulatory compliance tracking, and operational performance reporting — giving healthcare organisations the operational foundation to deliver care efficiently while meeting the demanding governance requirements of the sector.",
    capabilities: [
      "Patient administration and records management",
      "Appointment scheduling and capacity management",
      "Clinical pathway and workflow management",
      "Healthcare regulatory compliance management",
      "Operational performance and quality reporting",
    ],
    benefits: [
      {
        title: "Operational efficiency",
        description:
          "Reduce administrative overhead and improve clinical workflow efficiency so healthcare professionals spend more time on patient care.",
      },
      {
        title: "Compliance assurance",
        description:
          "Manage the documentation, audit trails, and governance processes required by healthcare regulatory frameworks without manual compliance burden.",
      },
      {
        title: "Patient experience",
        description:
          "Improve patient experience through more efficient scheduling, better communication, and streamlined administrative processes.",
      },
    ],
    features: [
      {
        name: "Patient Administration Module",
        description:
          "Patient registration, demographic management, referral handling, and case record management with audit-ready documentation.",
      },
      {
        name: "Appointment Engine",
        description:
          "Intelligent appointment scheduling with resource matching, waitlist management, patient reminders, and utilisation reporting.",
      },
      {
        name: "Pathway Manager",
        description:
          "Configure and manage clinical care pathways with step tracking, escalation rules, and compliance documentation.",
      },
      {
        name: "Compliance Dashboard",
        description:
          "Track regulatory compliance obligations, documentation completeness, and audit readiness across the healthcare facility.",
      },
    ],
    useCases: [
      {
        title: "Private healthcare facility operations",
        description:
          "Manage the full operational lifecycle of private healthcare facilities from patient administration through appointment management and clinical compliance.",
      },
      {
        title: "Clinical pathway governance",
        description:
          "Define and enforce clinical care pathways with structured workflow management and compliance documentation for quality and accreditation purposes.",
      },
      {
        title: "Healthcare regulatory compliance",
        description:
          "Track, document, and demonstrate compliance with healthcare regulatory requirements through structured compliance management and audit support.",
      },
    ],
    faqs: [
      {
        question: "Does RicozHealth store or process clinical health records?",
        answer:
          "RicozHealth manages operational and administrative healthcare data. Clinical health record integration requires appropriate data governance and privacy controls configured by the deploying organisation.",
      },
      {
        question: "What regulatory frameworks does RicozHealth support?",
        answer:
          "RicozHealth supports configurable compliance frameworks covering healthcare governance requirements including documentation management, audit trails, and operational quality standards.",
      },
      {
        question: "Can RicozHealth integrate with clinical systems?",
        answer:
          "Yes. RicozHealth integrates with clinical and EMR systems through HL7 and FHIR-compatible interfaces where clinical data exchange is required.",
      },
    ],
    relatedProducts: ["rico-flow", "rico-comply", "rico-ops"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozHealth — Healthcare Operations & Clinical Workflow Management | Ricoz",
      description:
        "RicozHealth manages patient administration, appointment scheduling, clinical workflows, and regulatory compliance for healthcare organisations.",
    },
  },
  {
    id: "rico-edu",
    slug: "rico-edu",
    name: "RicozEdu",
    category: "Industry & Specialized Solutions",
    tagline: "Education management and student operations platform",
    shortDescription:
      "An enterprise education management platform for managing student administration, course delivery, assessment, and learning operations across educational institutions.",
    heroStatement:
      "Run the institution that enables learning — with operational excellence.",
    overview:
      "RicozEdu is an enterprise education management platform designed for higher education institutions, vocational training providers, and corporate learning organisations managing complex learner populations and educational programmes. It provides student information management, course and curriculum management, assessment administration, attendance tracking, and institutional reporting — giving education administrators and programme managers the operational infrastructure to focus on educational outcomes.",
    capabilities: [
      "Student information and enrolment management",
      "Course and curriculum management",
      "Assessment and grade management",
      "Attendance and engagement tracking",
      "Institutional reporting and compliance",
    ],
    benefits: [
      {
        title: "Administrative efficiency",
        description:
          "Centralise student records, enrolment, and academic management to reduce administrative overhead and improve data accuracy.",
      },
      {
        title: "Learner visibility",
        description:
          "Track attendance, engagement, and performance across programmes to identify at-risk learners and intervene proactively.",
      },
      {
        title: "Compliance management",
        description:
          "Manage the student record and reporting obligations required by education regulators and funding bodies.",
      },
    ],
    features: [
      {
        name: "Student Information System",
        description:
          "Centralised student records with enrolment management, demographic data, academic history, and document management.",
      },
      {
        name: "Course Manager",
        description:
          "Manage course and curriculum structures with timetabling, resource allocation, and prerequisite management.",
      },
      {
        name: "Assessment Module",
        description:
          "Configure assessment types, submission management, marking workflows, grade recording, and academic progression tracking.",
      },
      {
        name: "Institutional Analytics",
        description:
          "Track enrolment, retention, completion, and outcomes across programmes with regulatory reporting and performance benchmarking.",
      },
    ],
    useCases: [
      {
        title: "Higher education student administration",
        description:
          "Manage the full student lifecycle from application and enrolment through academic progression and graduation across faculties and programmes.",
      },
      {
        title: "Corporate learning programme management",
        description:
          "Administer corporate learning and development programmes with course management, completion tracking, and training compliance reporting.",
      },
      {
        title: "Regulatory reporting and compliance",
        description:
          "Meet education regulator and funding body reporting requirements with structured student data and automated return generation.",
      },
    ],
    faqs: [
      {
        question: "Does RicozEdu integrate with learning management systems?",
        answer:
          "Yes. RicozEdu integrates with LMS platforms for course content delivery while managing the administrative and student record layer that LMS systems typically do not cover.",
      },
      {
        question: "Can RicozEdu manage part-time and online students?",
        answer:
          "Yes. RicozEdu supports diverse enrolment modes including full-time, part-time, distance, and blended learning with configurable programme structures.",
      },
      {
        question:
          "How does RicozEdu handle international student administration?",
        answer:
          "RicozEdu supports multi-campus, multi-currency, and multi-language configurations with compliance management tools relevant to international student administration.",
      },
    ],
    relatedProducts: ["rico-learn", "rico-people", "rico-attend"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozEdu — Education Management & Student Operations Platform | Ricoz",
      description:
        "RicozEdu manages student administration, course delivery, assessment, and institutional compliance for educational organisations.",
    },
  },
  {
    id: "rico-finserv",
    slug: "rico-finserv",
    name: "RicozFinServ",
    category: "Industry & Specialized Solutions",
    tagline: "Financial services operations and regulatory management",
    shortDescription:
      "An enterprise financial services operations platform for managing client accounts, regulatory compliance, reporting obligations, and financial product operations.",
    heroStatement:
      "Operate with the precision, auditability, and compliance that financial services demands.",
    overview:
      "RicozFinServ is an enterprise financial services operations platform designed for banks, asset managers, insurance providers, and financial services firms managing complex regulatory environments and client account structures. It provides client account management, regulatory reporting, compliance documentation, product operations, and financial services audit management — giving operations and compliance teams the structured environment to meet regulatory obligations while serving clients efficiently.",
    capabilities: [
      "Client account and relationship management",
      "Regulatory reporting and obligation tracking",
      "Financial product operations management",
      "Compliance documentation and audit management",
      "Regulatory change management",
    ],
    benefits: [
      {
        title: "Regulatory confidence",
        description:
          "Manage regulatory obligations with structured workflows, documented evidence, and audit-ready records for examiner and regulator review.",
      },
      {
        title: "Operational accuracy",
        description:
          "Maintain the precision required in financial account management and reporting with governed data flows and validation controls.",
      },
      {
        title: "Change agility",
        description:
          "Manage the continuous flow of regulatory change with structured impact assessment, implementation tracking, and compliance verification.",
      },
    ],
    features: [
      {
        name: "Client Account Manager",
        description:
          "Manage client account structures, product holdings, relationship histories, and KYC documentation with lifecycle tracking.",
      },
      {
        name: "Regulatory Reporting Engine",
        description:
          "Configure and produce regulatory reports and regulatory submissions with data sourcing, transformation, and validation management.",
      },
      {
        name: "Compliance Operations Hub",
        description:
          "Manage ongoing compliance obligations with scheduling, evidence collection, review workflows, and regulator correspondence management.",
      },
      {
        name: "Regulatory Change Manager",
        description:
          "Track emerging regulatory changes with impact assessment, implementation workstream management, and compliance verification.",
      },
    ],
    useCases: [
      {
        title: "Regulatory reporting management",
        description:
          "Produce and manage regulatory returns and submissions to financial regulators with governed data preparation and submission audit trails.",
      },
      {
        title: "Client account governance",
        description:
          "Manage financial services client accounts with structured KYC documentation, product servicing, and relationship management.",
      },
      {
        title: "Compliance programme management",
        description:
          "Operate a structured compliance programme with obligation tracking, evidence management, and regulatory examination readiness.",
      },
    ],
    faqs: [
      {
        question: "Which regulatory frameworks does RicozFinServ support?",
        answer:
          "RicozFinServ supports configurable compliance frameworks designed to accommodate jurisdiction-specific financial regulatory requirements. Specific framework support is configured during implementation.",
      },
      {
        question: "Does RicozFinServ replace core banking or trading systems?",
        answer:
          "RicozFinServ is an operations and compliance layer. It integrates with core banking, trading, and fund administration systems to manage the operational and regulatory processes that surround them.",
      },
      {
        question:
          "How does RicozFinServ handle cross-border regulatory requirements?",
        answer:
          "RicozFinServ supports multi-jurisdiction configuration with separate compliance workspaces and reporting templates for different regulatory environments.",
      },
    ],
    relatedProducts: ["rico-comply", "rico-books", "rico-vault"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozFinServ — Financial Services Operations & Regulatory Management | Ricoz",
      description:
        "RicozFinServ manages client accounts, regulatory reporting, compliance documentation, and operational governance for financial services firms.",
    },
  },
  {
    id: "rico-mfg",
    slug: "rico-mfg",
    name: "RicozMFG",
    category: "Industry & Specialized Solutions",
    tagline: "Manufacturing operations and production management",
    shortDescription:
      "An enterprise manufacturing operations platform for managing production planning, quality management, work order execution, and plant performance across manufacturing operations.",
    heroStatement:
      "Run production with the precision, visibility, and quality governance that manufacturing demands.",
    overview:
      "RicozMFG is an enterprise manufacturing operations platform designed for production managers, plant directors, and manufacturing operations teams running complex production environments. It provides production planning, work order management, quality control, equipment maintenance tracking, and operational performance reporting — giving manufacturing operations the digital management layer to improve output, reduce waste, and govern quality systematically.",
    capabilities: [
      "Production planning and scheduling",
      "Work order management and execution tracking",
      "Quality management and non-conformance control",
      "Equipment maintenance and OEE management",
      "Manufacturing performance analytics",
    ],
    benefits: [
      {
        title: "Production performance",
        description:
          "Track and improve OEE, throughput, and quality metrics with data-driven visibility into every aspect of production performance.",
      },
      {
        title: "Quality governance",
        description:
          "Systematically manage quality control, non-conformances, and corrective actions to reduce defects and maintain product standards.",
      },
      {
        title: "Maintenance efficiency",
        description:
          "Prevent unplanned downtime by managing planned maintenance schedules, monitoring equipment health, and tracking maintenance history.",
      },
    ],
    features: [
      {
        name: "Production Planner",
        description:
          "Schedule production runs against demand forecasts and resource constraints with capacity management and scenario modelling.",
      },
      {
        name: "Work Order Manager",
        description:
          "Create, assign, and track work orders through the production process with material requirements, labour tracking, and completion management.",
      },
      {
        name: "Quality Management System",
        description:
          "Manage quality inspection plans, recording, non-conformance raising, CAPA management, and quality performance reporting.",
      },
      {
        name: "OEE Dashboard",
        description:
          "Track overall equipment effectiveness with availability, performance, and quality measurements at machine and line level.",
      },
    ],
    useCases: [
      {
        title: "Production operations management",
        description:
          "Plan, schedule, and execute production orders with real-time work order tracking and production performance visibility.",
      },
      {
        title: "Quality control and ISO compliance",
        description:
          "Implement a systematic quality management programme with inspection plans, non-conformance management, and CAPA workflows for ISO certification.",
      },
      {
        title: "Maintenance and asset management",
        description:
          "Manage planned and reactive maintenance on production equipment with history tracking, OEE monitoring, and downtime analysis.",
      },
    ],
    faqs: [
      {
        question: "Does RicozMFG integrate with ERP systems?",
        answer:
          "Yes. RicozMFG integrates with ERP platforms to synchronise production orders, material requirements, and costing data between the shop floor and business management systems.",
      },
      {
        question: "Can RicozMFG manage multi-site production operations?",
        answer:
          "Yes. RicozMFG supports multi-plant configurations with site-level reporting and centralised quality and performance management.",
      },
      {
        question:
          "Does RicozMFG support lean and continuous improvement practices?",
        answer:
          "Yes. RicozMFG includes waste tracking, cycle time analysis, and improvement action management to support lean manufacturing and continuous improvement programmes.",
      },
    ],
    relatedProducts: ["rico-asset", "rico-supply", "rico-process"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozMFG — Enterprise Manufacturing Operations & Production Management | Ricoz",
      description:
        "RicozMFG manages production planning, work orders, quality control, and OEE for enterprise manufacturing operations.",
    },
  },
  {
    id: "rico-logistics",
    slug: "rico-logistics",
    name: "RicozLogistics",
    category: "Industry & Specialized Solutions",
    tagline: "Logistics and distribution network management",
    shortDescription:
      "An enterprise logistics management platform for planning, optimising, and monitoring transport operations, routes, and distribution networks across the supply chain.",
    heroStatement:
      "Manage the movement of goods with precision — from the first mile to the last.",
    overview:
      "RicozLogistics is an enterprise logistics and distribution management platform designed for logistics managers, fleet operators, and supply chain teams managing complex transport networks. It provides route planning and optimisation, transport order management, fleet tracking, carrier management, and delivery performance analytics — giving logistics operations the tools to deliver on time, manage costs, and provide visibility across the distribution network.",
    capabilities: [
      "Route planning and optimisation",
      "Transport order management",
      "Fleet tracking and visibility",
      "Carrier and third-party logistics management",
      "Delivery performance analytics",
    ],
    benefits: [
      {
        title: "Route efficiency",
        description:
          "Optimise delivery routes against distance, time, vehicle capacity, and service window constraints to reduce transport costs and fuel consumption.",
      },
      {
        title: "Network visibility",
        description:
          "Track fleet and delivery status in real time across the distribution network so operations teams can proactively manage exceptions.",
      },
      {
        title: "Performance intelligence",
        description:
          "Measure delivery performance against KPIs by carrier, route, and region to drive continuous improvement and carrier accountability.",
      },
    ],
    features: [
      {
        name: "Route Optimiser",
        description:
          "Multi-constraint route planning optimisation for delivery fleets with vehicle capacity, time windows, driver hours, and traffic consideration.",
      },
      {
        name: "Transport Order Manager",
        description:
          "Create and manage transport orders from despatch through delivery with status tracking, document management, and exception handling.",
      },
      {
        name: "Fleet Tracker",
        description:
          "Real-time fleet position visibility with geofencing, ETA calculation, and exception alerting for late or deviating vehicles.",
      },
      {
        name: "Carrier Manager",
        description:
          "Manage carrier relationships, rate structures, performance scorecards, and allocation rules for multi-carrier distribution operations.",
      },
    ],
    useCases: [
      {
        title: "Last-mile delivery management",
        description:
          "Plan and manage last-mile delivery operations with optimised routing, driver management, and delivery status communication.",
      },
      {
        title: "Distribution network management",
        description:
          "Manage multi-leg distribution operations across depots, carriers, and delivery regions with unified visibility and performance management.",
      },
      {
        title: "Carrier performance management",
        description:
          "Monitor and manage carrier SLA performance with data-driven scorecards, exception tracking, and carrier review workflows.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozLogistics integrate with our warehouse management system?",
        answer:
          "Yes. RicozLogistics integrates with warehouse management systems to receive despatch data and provide delivery confirmation back to the inventory environment.",
      },
      {
        question: "Can RicozLogistics manage cross-border logistics?",
        answer:
          "Yes. RicozLogistics supports customs documentation management, cross-border compliance tracking, and multi-currency transport cost management for international logistics.",
      },
      {
        question: "How does RicozLogistics handle exception management?",
        answer:
          "Delivery exceptions — late deliveries, failed attempts, vehicle breakdowns — are automatically flagged with configurable escalation and customer communication workflows.",
      },
    ],
    relatedProducts: ["rico-supply", "rico-fulfil", "rico-asset"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title:
        "RicozLogistics — Enterprise Logistics & Distribution Management | Ricoz",
      description:
        "RicozLogistics manages route optimisation, transport orders, fleet tracking, and delivery performance for enterprise distribution networks.",
    },
  },
  {
    id: "rico-proserv",
    slug: "rico-proserv",
    name: "RicozProServ",
    category: "Industry & Specialized Solutions",
    tagline: "Professional services management and delivery excellence",
    shortDescription:
      "An enterprise professional services management platform for governing project delivery, utilisation, client billing, and practice performance across services organisations.",
    heroStatement:
      "Manage the business of expertise — with the precision every engagement deserves.",
    overview:
      "RicozProServ is an enterprise professional services management platform designed for consulting firms, advisory practices, managed service providers, and internal professional services organisations delivering expertise-based work for clients. It provides engagement management, resource utilisation tracking, project delivery governance, client billing, and practice performance reporting — giving professional services leaders the commercial and operational intelligence to maximise delivery quality and business performance.",
    capabilities: [
      "Engagement lifecycle management",
      "Consultant utilisation and capacity management",
      "Project delivery governance",
      "Client billing and revenue management",
      "Practice performance analytics",
    ],
    benefits: [
      {
        title: "Utilisation performance",
        description:
          "Maximise billable utilisation by matching consultant availability to engagement demand with forward visibility and pipeline integration.",
      },
      {
        title: "Delivery governance",
        description:
          "Apply consistent governance to client engagements from scoping through delivery and sign-off to protect quality and client relationships.",
      },
      {
        title: "Revenue accuracy",
        description:
          "Capture, approve, and invoice all billable time and expenses accurately with governed billing workflows that protect revenue from leakage.",
      },
    ],
    features: [
      {
        name: "Engagement Manager",
        description:
          "Manage the full engagement lifecycle from proposal through delivery and closure with scope tracking, milestone governance, and client communications.",
      },
      {
        name: "Utilisation Dashboard",
        description:
          "Track consultant utilisation, availability, and demand pipeline with forward capacity visibility for resource planning.",
      },
      {
        name: "Billing Engine",
        description:
          "Generate client invoices from approved timesheets and expense claims with time-and-materials, fixed-fee, and milestone billing model support.",
      },
      {
        name: "Practice Analytics",
        description:
          "Measure practice performance with revenue, margin, utilisation, client satisfaction, and delivery quality metrics across the practice.",
      },
    ],
    useCases: [
      {
        title: "Consulting practice management",
        description:
          "Run a consulting practice with structured engagement governance, utilisation management, and commercial performance visibility.",
      },
      {
        title: "Managed services billing and reporting",
        description:
          "Manage managed service delivery with accurate time capture, service credit tracking, and client billing governance.",
      },
      {
        title: "Internal professional services charging",
        description:
          "Operate an internal professional services function with chargeback billing, project governance, and service utilisation reporting.",
      },
    ],
    faqs: [
      {
        question:
          "Does RicozProServ integrate with financial management systems?",
        answer:
          "Yes. RicozProServ integrates with accounting and ERP systems to post revenue, costs, and invoices into the financial management environment.",
      },
      {
        question:
          "How does RicozProServ manage fixed-fee and blended engagements?",
        answer:
          "RicozProServ supports configurable billing models per engagement, including pure time-and-materials, fixed-fee milestone, capped-T&M, and blended arrangements.",
      },
      {
        question: "Can clients access delivery status through RicozProServ?",
        answer:
          "Yes. RicozProServ supports permission-controlled client portal access for milestone tracking, document review, and approval sign-offs relevant to their engagement.",
      },
    ],
    relatedProducts: ["rico-plan", "rico-timelog", "rico-invoice"],
    relatedServices: [
      "digital-transformation-consulting",
      "process-optimization",
    ],
    status: "active",
    featured: false,
    seo: {
      title: "RicozProServ — Professional Services Management Platform | Ricoz",
      description:
        "RicozProServ manages engagement delivery, consultant utilisation, client billing, and practice performance for professional services organisations.",
    },
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured === true)
}
