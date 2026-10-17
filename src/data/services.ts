export interface Service {
  id: string
  slug: string
  name: string
  category: string
  tagline: string
  shortDescription: string
  heroStatement: string
  overview: string
  problemsAddressed: string[]
  capabilities: { name: string; description: string }[]
  process: { step: string; title: string; description: string }[]
  outcomes: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
  relatedProducts: string[]
  relatedServices: string[]
  seo: { title: string; description: string }
}

export const serviceCategories = [
  "Strategy & Transformation",
  "Implementation & Integration",
  "Data & Intelligence",
  "Security & Compliance",
  "Operations & Efficiency",
  "Digital Marketing",
  "Social Media & Content",
]

export const services: Service[] = [
  {
    id: "digital-transformation-consulting",
    slug: "digital-transformation-consulting",
    name: "Digital Transformation Consulting",
    category: "Strategy & Transformation",
    tagline: "Strategic advisory for complex digital change",
    shortDescription:
      "Expert advisory and programme leadership for organizations navigating large-scale digital transformation.",
    heroStatement:
      "Navigate the complexity of transformation with experienced advisors who have done it before.",
    overview:
      "Digital transformation is rarely a technology problem — it is a strategic, organizational, and change management challenge that requires disciplined thinking, experienced leadership, and rigorous execution. Our Digital Transformation Consulting service provides senior advisory support across strategy development, programme architecture, stakeholder alignment, and delivery governance to help complex organizations change at pace without losing control.",
    problemsAddressed: [
      "Unclear or unaligned digital strategy across leadership",
      "Large change programmes lacking experienced programme governance",
      "Digital initiatives failing to deliver promised business outcomes",
      "Inability to execute transformation while maintaining operational continuity",
    ],
    capabilities: [
      {
        name: "Transformation Strategy",
        description:
          "Develop a coherent digital strategy grounded in your organization's capabilities, competitive context, and strategic objectives.",
      },
      {
        name: "Programme Architecture",
        description:
          "Design the programme structures, governance frameworks, and delivery architectures that give complex transformations the best chance of success.",
      },
      {
        name: "Stakeholder Alignment",
        description:
          "Build executive alignment and board-level confidence through structured engagement, clear communication, and robust governance reporting.",
      },
      {
        name: "Delivery Governance",
        description:
          "Establish the oversight mechanisms, risk frameworks, and performance disciplines that keep large programmes on track.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Diagnostic",
        description:
          "Assess current capabilities, strategy clarity, programme health, and readiness for transformation.",
      },
      {
        step: "02",
        title: "Strategy & Architecture",
        description:
          "Define or refine the transformation strategy, programme design, and delivery model.",
      },
      {
        step: "03",
        title: "Mobilization",
        description:
          "Establish governance structures, align leadership, and prepare the organization for delivery.",
      },
      {
        step: "04",
        title: "Programme Support",
        description:
          "Provide ongoing advisory, delivery assurance, and course correction throughout programme execution.",
      },
    ],
    outcomes: [
      {
        title: "Strategic clarity",
        description:
          "A documented, leadership-aligned digital strategy with clear priorities, sequencing, and business case.",
      },
      {
        title: "Programme confidence",
        description:
          "Governance and delivery disciplines that give the board and executive team confidence in the programme.",
      },
      {
        title: "Reduced transformation risk",
        description:
          "Early identification and management of the commercial, operational, and organizational risks that derail large change.",
      },
    ],
    faqs: [
      {
        question: "How does engagement typically begin?",
        answer:
          "Most engagements begin with a structured diagnostic to establish a shared view of current state, priorities, and constraints before advisory work commences.",
      },
      {
        question: "Do you provide embedded advisory or project-based support?",
        answer:
          "We offer both. Some clients engage us as an embedded advisory capability within their programme; others engage us on a project basis for specific strategic or governance challenges.",
      },
    ],
    relatedProducts: ["rico-track", "rico-analytics", "rico-engage"],
    relatedServices: [
      "technology-strategy-roadmap",
      "enterprise-systems-integration",
    ],
    seo: {
      title: "Digital Transformation Consulting | Ricoz Services",
      description:
        "Expert advisory and programme leadership for complex digital transformations. Strategy, architecture, governance, and delivery assurance.",
    },
  },
  {
    id: "technology-strategy-roadmap",
    slug: "technology-strategy-roadmap",
    name: "Technology Strategy & Roadmap",
    category: "Strategy & Transformation",
    tagline: "Aligning technology investment with business direction",
    shortDescription:
      "A structured advisory service for developing credible, actionable technology strategies and investment roadmaps.",
    heroStatement:
      "Technology investment decisions made with strategic clarity and business confidence.",
    overview:
      "Many organizations invest significantly in technology without a coherent strategy to guide where, when, and how to invest. Our Technology Strategy & Roadmap service helps leadership teams develop clear, evidence-based technology strategies aligned to business objectives — including prioritized roadmaps, investment frameworks, and architecture principles that provide a durable foundation for decision-making.",
    problemsAddressed: [
      "Technology investment fragmented across disconnected initiatives",
      "Lack of a credible, board-endorsed technology roadmap",
      "Architecture decisions made without strategic context",
      "Difficulty explaining technology investment in business terms",
    ],
    capabilities: [
      {
        name: "Strategic Assessment",
        description:
          "Evaluate current technology capability, technical debt, vendor landscape, and alignment to business strategy.",
      },
      {
        name: "Strategy Development",
        description:
          "Develop a technology strategy with clear principles, priorities, and investment thesis — expressed in business language.",
      },
      {
        name: "Roadmap Construction",
        description:
          "Build a credible, sequenced technology roadmap with clear dependencies, investment requirements, and expected outcomes.",
      },
      {
        name: "Architecture Principles",
        description:
          "Establish architectural standards and principles that guide future technology decisions without stifling innovation.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "Understand current technology landscape, capability gaps, and business strategy context.",
      },
      {
        step: "02",
        title: "Analysis",
        description:
          "Assess maturity, technical debt, vendor risk, and strategic alignment of current investments.",
      },
      {
        step: "03",
        title: "Strategy",
        description:
          "Develop strategic options, investment priorities, and a clear technology direction.",
      },
      {
        step: "04",
        title: "Roadmap",
        description:
          "Sequence investments into a credible, governed roadmap with clear milestones and accountability.",
      },
    ],
    outcomes: [
      {
        title: "Board-credible technology strategy",
        description:
          "A documented strategy that leadership can present with confidence to the board, investors, and regulators.",
      },
      {
        title: "Prioritized investment roadmap",
        description:
          "A sequenced, costed roadmap that replaces ad-hoc requests with a structured and defensible investment plan.",
      },
    ],
    faqs: [
      {
        question: "What is the typical duration of this engagement?",
        answer:
          "Most strategy engagements run between 8 and 16 weeks, depending on organizational size and complexity. We tailor the scope to fit your timeline and decision needs.",
      },
    ],
    relatedProducts: ["rico-track", "rico-analytics"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    seo: {
      title: "Technology Strategy & Roadmap Service | Ricoz",
      description:
        "Develop a credible, board-aligned technology strategy and investment roadmap for your organization.",
    },
  },
  {
    id: "enterprise-systems-integration",
    slug: "enterprise-systems-integration",
    name: "Enterprise Systems Integration",
    category: "Implementation & Integration",
    tagline: "Connecting complex technology landscapes",
    shortDescription:
      "End-to-end integration delivery for organizations connecting enterprise systems, platforms, and data sources.",
    heroStatement:
      "A connected enterprise delivers more than the sum of its individual systems.",
    overview:
      "Enterprise integration is one of the most technically demanding and organizationally complex challenges in large organizations. Our Enterprise Systems Integration service provides the architecture, engineering, and delivery expertise to connect diverse systems reliably — whether you are integrating a major platform implementation, consolidating following an acquisition, or establishing a modern integration architecture.",
    problemsAddressed: [
      "Critical systems operating in silos with fragile point-to-point connections",
      "Major platform implementations requiring complex integration delivery",
      "Post-acquisition technology integration without a coherent approach",
      "Legacy systems that cannot easily expose data to modern platforms",
    ],
    capabilities: [
      {
        name: "Integration Architecture",
        description:
          "Design integration architectures appropriate to your technology landscape, data volumes, and organizational requirements.",
      },
      {
        name: "Integration Engineering",
        description:
          "Build, test, and deploy integrations across enterprise systems using modern patterns and proven delivery practices.",
      },
      {
        name: "Data Mapping & Transformation",
        description:
          "Design and implement the data mapping and transformation logic required for reliable cross-system data flows.",
      },
      {
        name: "Integration Governance",
        description:
          "Establish the operating model, documentation standards, and monitoring practices for ongoing integration management.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Landscape Assessment",
        description:
          "Understand current system landscape, existing integrations, and integration requirements.",
      },
      {
        step: "02",
        title: "Architecture Design",
        description:
          "Design the integration architecture, data models, and delivery approach.",
      },
      {
        step: "03",
        title: "Build & Test",
        description:
          "Engineer and rigorously test integrations across all target systems and scenarios.",
      },
      {
        step: "04",
        title: "Deploy & Stabilize",
        description:
          "Deploy integrations to production, monitor stability, and transition to operational support.",
      },
    ],
    outcomes: [
      {
        title: "Reliable system connectivity",
        description:
          "Integrations that operate reliably under production conditions with proper error handling and monitoring.",
      },
      {
        title: "Governed integration estate",
        description:
          "An integration landscape that is properly documented, monitored, and maintainable over time.",
      },
    ],
    faqs: [
      {
        question:
          "Do you work with specific integration platforms or middleware?",
        answer:
          "We work across major integration platforms including RicozConnect and leading market platforms. We can work with your existing middleware or recommend a platform appropriate to your requirements.",
      },
    ],
    relatedProducts: ["rico-connect", "rico-data", "rico-flow"],
    relatedServices: [
      "digital-transformation-consulting",
      "data-analytics-services",
    ],
    seo: {
      title: "Enterprise Systems Integration Service | Ricoz",
      description:
        "End-to-end integration architecture, engineering, and delivery for complex enterprise technology landscapes.",
    },
  },
  {
    id: "data-analytics-services",
    slug: "data-analytics-services",
    name: "Data & Analytics Services",
    category: "Data & Intelligence",
    tagline: "Turning data potential into operational intelligence",
    shortDescription:
      "End-to-end advisory and delivery for data strategy, architecture, governance, and analytics enablement.",
    heroStatement:
      "Transform your data from a cost of operation into a strategic asset.",
    overview:
      "Most organizations hold far more data than they effectively use. Our Data & Analytics Services help organizations develop the strategy, architecture, governance, and analytics capabilities needed to turn data potential into tangible business value — from defining a data strategy and establishing governance, to building analytics platforms and enabling self-service insight.",
    problemsAddressed: [
      "No coherent enterprise data strategy or architecture",
      "Data quality issues undermining analytics and decision-making",
      "Analytics capability fragmented across business units",
      "Leadership lacking trusted data for strategic decisions",
    ],
    capabilities: [
      {
        name: "Data Strategy",
        description:
          "Define the data vision, priorities, governance principles, and investment roadmap aligned to business outcomes.",
      },
      {
        name: "Data Architecture",
        description:
          "Design scalable, governed data architectures across warehousing, lake, and real-time processing patterns.",
      },
      {
        name: "Analytics Enablement",
        description:
          "Build and deploy analytics platforms and self-service capabilities that put insight into the hands of decision-makers.",
      },
      {
        name: "Data Governance",
        description:
          "Establish operating models, policies, and tooling for data governance that scales with organizational complexity.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Data Assessment",
        description:
          "Assess data landscape, quality, governance maturity, and analytics capabilities.",
      },
      {
        step: "02",
        title: "Strategy & Architecture",
        description:
          "Develop the data strategy, target architecture, and programme roadmap.",
      },
      {
        step: "03",
        title: "Foundation Build",
        description:
          "Establish core data infrastructure, governance frameworks, and initial analytics capabilities.",
      },
      {
        step: "04",
        title: "Scale & Optimise",
        description:
          "Expand analytics coverage, improve data quality, and mature governance disciplines over time.",
      },
    ],
    outcomes: [
      {
        title: "Trusted data",
        description:
          "Data assets that leadership and teams can rely on for decisions, reporting, and compliance.",
      },
      {
        title: "Analytics capability",
        description:
          "An analytics function that consistently delivers insight aligned to business priorities.",
      },
    ],
    faqs: [
      {
        question:
          "Do you work with our existing data infrastructure or recommend replacements?",
        answer:
          "We assess existing infrastructure objectively and recommend the approach that delivers the best outcome — whether that is optimizing what you have, augmenting it, or transitioning to a new architecture.",
      },
    ],
    relatedProducts: ["rico-analytics", "rico-data", "rico-connect"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    seo: {
      title: "Data & Analytics Services | Ricoz",
      description:
        "Data strategy, architecture, governance, and analytics enablement services for complex enterprises.",
    },
  },
  {
    id: "cybersecurity-advisory",
    slug: "cybersecurity-advisory",
    name: "Cybersecurity Advisory",
    category: "Security & Compliance",
    tagline: "Strategic and operational security advisory",
    shortDescription:
      "Expert cybersecurity advisory for organizations managing complex security and compliance requirements.",
    heroStatement:
      "Understand your exposure. Strengthen your posture. Respond with confidence.",
    overview:
      "Cybersecurity risk is a board-level concern for every large organization. Our Cybersecurity Advisory service helps leadership teams understand their security posture, prioritize their most significant exposures, and develop the strategy and programmes needed to operate securely in an increasingly complex threat environment.",
    problemsAddressed: [
      "Lack of executive-level visibility into security posture and risk",
      "Security investments not clearly aligned to the most significant risks",
      "Compliance obligations not fully met or efficiently managed",
      "Incident response capability insufficient for current threat landscape",
    ],
    capabilities: [
      {
        name: "Security Assessment",
        description:
          "Independent assessment of security posture, controls effectiveness, and exposure to significant threats.",
      },
      {
        name: "Security Strategy",
        description:
          "Develop a prioritized security strategy and investment roadmap aligned to risk profile and business objectives.",
      },
      {
        name: "Compliance Advisory",
        description:
          "Navigate compliance obligations across regulatory frameworks with structured gap analysis and remediation planning.",
      },
      {
        name: "Incident Response Planning",
        description:
          "Develop and test incident response plans, playbooks, and organizational capabilities to reduce response time and impact.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Threat & Risk Assessment",
        description:
          "Understand the threat landscape, current controls, and most significant risk exposures.",
      },
      {
        step: "02",
        title: "Gap Analysis",
        description:
          "Identify gaps against target security posture, compliance obligations, and industry standards.",
      },
      {
        step: "03",
        title: "Strategy & Roadmap",
        description:
          "Develop a prioritized security improvement strategy and investment roadmap.",
      },
      {
        step: "04",
        title: "Programme Support",
        description:
          "Provide advisory support through security programme delivery and ongoing posture improvement.",
      },
    ],
    outcomes: [
      {
        title: "Understood risk posture",
        description:
          "A clear, evidence-based view of your security exposure and its business implications.",
      },
      {
        title: "Prioritized improvement plan",
        description:
          "A defensible, board-ready security strategy and investment plan.",
      },
    ],
    faqs: [
      {
        question: "Do you conduct technical penetration testing?",
        answer:
          "Our advisory service focuses on strategic and governance-level assessment. We work with specialist testing partners for technical penetration testing engagements.",
      },
    ],
    relatedProducts: ["rico-shield", "rico-vault", "rico-data"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    seo: {
      title: "Cybersecurity Advisory Service | Ricoz",
      description:
        "Strategic cybersecurity advisory, security assessment, compliance guidance, and incident response planning for complex enterprises.",
    },
  },
  {
    id: "cloud-migration-services",
    slug: "cloud-migration-services",
    name: "Cloud Migration Services",
    category: "Implementation & Integration",
    tagline: "Structured cloud migration delivery for complex environments",
    shortDescription:
      "End-to-end advisory and delivery for migrating enterprise workloads to cloud environments safely and efficiently.",
    heroStatement:
      "Move to cloud with a strategy, not just a migration checklist.",
    overview:
      "Cloud migration is high-stakes work that requires more than technical execution. Our Cloud Migration Services provide the strategy, architecture, sequencing, and delivery discipline needed to migrate complex enterprise workloads to cloud environments reliably — minimizing risk, disruption, and unplanned costs.",
    problemsAddressed: [
      "Large-scale cloud migration without a clear strategy or sequencing approach",
      "Previous cloud initiatives resulting in cost overruns or unrealized benefits",
      "Complex interdependencies between workloads making migration sequencing difficult",
      "Skills gaps in cloud architecture and migration engineering",
    ],
    capabilities: [
      {
        name: "Migration Strategy",
        description:
          "Develop a workload-by-workload migration strategy with prioritization, sequencing, and business case.",
      },
      {
        name: "Cloud Architecture",
        description:
          "Design the target cloud architecture and operating model aligned to your requirements and cloud provider capabilities.",
      },
      {
        name: "Migration Engineering",
        description:
          "Execute workload migrations with the engineering depth and rigour that complex enterprise environments require.",
      },
      {
        name: "Cloud Operating Model",
        description:
          "Establish the governance, FinOps, and operational practices needed to manage cloud environments efficiently long-term.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Workload Discovery",
        description:
          "Inventory, profile, and assess the migration readiness of all in-scope workloads.",
      },
      {
        step: "02",
        title: "Strategy & Architecture",
        description:
          "Define migration strategy, target architecture, and delivery sequencing.",
      },
      {
        step: "03",
        title: "Migration Execution",
        description:
          "Execute migrations in structured waves with rigorous testing and cutover management.",
      },
      {
        step: "04",
        title: "Stabilization",
        description:
          "Stabilize, optimize, and transition migrated workloads to steady-state operations.",
      },
    ],
    outcomes: [
      {
        title: "Successful migration",
        description:
          "Workloads operating in cloud environments with expected performance, security, and cost characteristics.",
      },
      {
        title: "Sustainable cloud operations",
        description:
          "An operating model, governance framework, and cost management practice that sustains cloud value long-term.",
      },
    ],
    faqs: [
      {
        question: "Which cloud providers do you work with?",
        answer:
          "We work across major cloud providers and have deep expertise in multi-cloud and hybrid architectures. Provider selection is determined by your requirements and existing landscape.",
      },
    ],
    relatedProducts: ["rico-connect", "rico-shield", "rico-analytics"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    seo: {
      title: "Cloud Migration Services | Ricoz",
      description:
        "Structured cloud migration strategy, architecture, and delivery for complex enterprise workloads.",
    },
  },
  {
    id: "process-optimization",
    slug: "process-optimization",
    name: "Process Optimization",
    category: "Operations & Efficiency",
    tagline: "Operational excellence through structured process improvement",
    shortDescription:
      "A rigorous process analysis and improvement service that eliminates waste, reduces cycle times, and improves operational performance.",
    heroStatement:
      "Better processes don't happen by accident — they are designed, tested, and governed.",
    overview:
      "Inefficient processes quietly erode organizational performance in ways that are easy to overlook until they become serious. Our Process Optimization service provides the expertise to map, analyse, redesign, and implement improved business processes — combining process engineering discipline with change management to make improvements that last.",
    problemsAddressed: [
      "High process cycle times or operational costs with unclear root causes",
      "Significant manual effort in processes that could be automated or streamlined",
      "Process inconsistency across teams, regions, or business units",
      "Poor handoff quality between functions causing downstream rework",
    ],
    capabilities: [
      {
        name: "Process Mapping",
        description:
          "Document and analyse as-is processes with rigor to establish a factual baseline for improvement.",
      },
      {
        name: "Waste & Root Cause Analysis",
        description:
          "Identify the root causes of process inefficiency, rework, and cycle time through structured analytical methods.",
      },
      {
        name: "Process Redesign",
        description:
          "Develop optimized to-be processes with appropriate controls, automation, and governance.",
      },
      {
        name: "Implementation & Change",
        description:
          "Deliver process improvements with the change management discipline needed for adoption and sustainability.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "Map existing processes and establish quantified performance baselines.",
      },
      {
        step: "02",
        title: "Analysis",
        description:
          "Identify waste, bottlenecks, root causes, and improvement opportunities.",
      },
      {
        step: "03",
        title: "Redesign",
        description:
          "Develop and validate optimized process designs with stakeholders.",
      },
      {
        step: "04",
        title: "Implement",
        description:
          "Deliver improvements with structured change management and performance tracking.",
      },
    ],
    outcomes: [
      {
        title: "Reduced operational costs",
        description:
          "Measurable reductions in processing time, error rates, and manual effort across target processes.",
      },
      {
        title: "Improved consistency",
        description:
          "Standardized processes that operate consistently across teams, sites, and business units.",
      },
    ],
    faqs: [
      {
        question: "What process improvement methodologies do you use?",
        answer:
          "We draw from Lean, Six Sigma, and process architecture disciplines, applying the methods most appropriate to the process type and organizational context.",
      },
    ],
    relatedProducts: ["rico-flow", "rico-analytics", "rico-track"],
    relatedServices: [
      "digital-transformation-consulting",
      "enterprise-systems-integration",
    ],
    seo: {
      title: "Process Optimization Service | Ricoz",
      description:
        "Structured process analysis, redesign, and implementation to improve operational efficiency and reduce costs.",
    },
  },

  // ─── Batch 1: Strategy & Transformation (8 new) ───────────────────────────

  {
    id: "business-consulting",
    slug: "business-consulting",
    name: "Business Consulting",
    category: "Strategy & Transformation",
    tagline: "Grounded advice for complex business decisions",
    shortDescription:
      "Structured consulting support for organizations navigating strategic inflection points, competitive pressure, or operational change.",
    heroStatement:
      "The right advice at the right moment changes the trajectory of a business.",
    overview:
      "Business challenges rarely arrive with simple solutions attached. Our Business Consulting service provides experienced advisory support across strategic planning, organizational design, operating model development, and performance improvement — helping leadership teams work through complexity with discipline and clarity. We work at the intersection of strategy and execution, bringing structure to ambiguous problems and rigour to decision-making.",
    problemsAddressed: [
      "Strategic direction unclear or not sufficiently aligned across leadership",
      "Organizational structure misaligned with current or future business priorities",
      "Performance improvement initiatives lacking coherent programme logic",
      "Decisions being made without sufficient analytical foundation",
    ],
    capabilities: [
      {
        name: "Strategic Planning",
        description:
          "Facilitate structured strategic planning processes that produce clear priorities, alignment across leadership, and a credible path forward.",
      },
      {
        name: "Operating Model Design",
        description:
          "Develop or redesign operating models that align structure, process, people, and technology with strategic intent.",
      },
      {
        name: "Performance Improvement",
        description:
          "Identify the root causes of underperformance and design targeted improvement programmes with measurable outcomes.",
      },
      {
        name: "Executive Decision Support",
        description:
          "Provide the analytical frameworks, structured options, and clear recommendations that complex executive decisions require.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Situation Assessment",
        description:
          "Establish a shared, evidence-based view of the current situation, including its drivers, constraints, and decision context.",
      },
      {
        step: "02",
        title: "Problem Structuring",
        description:
          "Define the problem clearly, identify the key questions that need answering, and design the analytical approach.",
      },
      {
        step: "03",
        title: "Analysis & Options",
        description:
          "Develop and evaluate strategic or operational options with clear criteria, trade-offs, and implications.",
      },
      {
        step: "04",
        title: "Recommendations & Delivery",
        description:
          "Present structured recommendations and support the organization through decision-making and initial implementation.",
      },
    ],
    outcomes: [
      {
        title: "Clear strategic direction",
        description:
          "Leadership aligned on priorities, direction, and the reasoning behind key decisions.",
      },
      {
        title: "Improved decision quality",
        description:
          "Analytical rigour and structured thinking embedded in how the organization approaches its most important choices.",
      },
      {
        title: "Actionable improvement plans",
        description:
          "Concrete, sequenced plans that translate strategic intent into operational reality.",
      },
    ],
    faqs: [
      {
        question:
          "How is this different from Digital Transformation Consulting?",
        answer:
          "Business Consulting addresses broader strategic and organizational challenges — not limited to technology or transformation programmes. It applies to any significant business decision, operating model challenge, or performance concern.",
      },
      {
        question: "Do you work with specific industries?",
        answer:
          "We work across sectors, with particular depth in complex, regulated, and large-enterprise contexts. Our approach is adapted to your industry and organizational environment.",
      },
    ],
    relatedProducts: ["rico-intel", "rico-analytics", "rico-plan"],
    relatedServices: [
      "digital-transformation-consulting",
      "technology-strategy-roadmap",
      "growth-strategy",
    ],
    seo: {
      title: "Business Consulting Services | Ricoz",
      description:
        "Strategic business consulting for complex organizations. Strategic planning, operating model design, performance improvement, and executive decision support.",
    },
  },

  {
    id: "go-to-market-strategy",
    slug: "go-to-market-strategy",
    name: "Go-to-Market Strategy",
    category: "Strategy & Transformation",
    tagline: "Structured market entry and commercial launch strategy",
    shortDescription:
      "A structured advisory service for organizations launching new products, entering new markets, or repositioning existing offers.",
    heroStatement:
      "A strong product without a disciplined go-to-market strategy is an opportunity left unrealized.",
    overview:
      "Bringing a new product, service, or market offer to market requires more than a launch plan. It demands a coherent commercial strategy — covering target segments, value proposition, channel approach, pricing architecture, and the sales and marketing motion needed to convert intent into revenue. Our Go-to-Market Strategy service provides the analytical rigour and strategic clarity to give new market entries the best possible start.",
    problemsAddressed: [
      "New product or service launch without a validated commercial strategy",
      "Entering a new geography or customer segment without structured market intelligence",
      "Existing offer underperforming due to unclear positioning or channel misalignment",
      "Sales and marketing teams operating without a shared commercial framework",
    ],
    capabilities: [
      {
        name: "Market & Segment Analysis",
        description:
          "Define and size target markets, identify priority segments, and assess competitive dynamics to ground the strategy in market reality.",
      },
      {
        name: "Value Proposition Development",
        description:
          "Craft differentiated value propositions tailored to priority customer segments, grounded in genuine insight rather than assumption.",
      },
      {
        name: "Channel & Route-to-Market Design",
        description:
          "Identify and design the optimal channel mix and sales motion to reach target customers efficiently and at scale.",
      },
      {
        name: "Launch Planning",
        description:
          "Develop a structured launch plan with clear milestones, accountabilities, and the metrics needed to track commercial traction.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Market Intelligence",
        description:
          "Gather and synthesize relevant market data, customer insight, and competitive intelligence.",
      },
      {
        step: "02",
        title: "Strategy Development",
        description:
          "Develop and validate the commercial strategy across segmentation, positioning, channel, and pricing.",
      },
      {
        step: "03",
        title: "Go-to-Market Plan",
        description:
          "Translate strategy into a practical launch plan with sequenced activities, owners, and success measures.",
      },
      {
        step: "04",
        title: "Execution Readiness",
        description:
          "Prepare the sales, marketing, and commercial teams to execute with confidence from day one.",
      },
    ],
    outcomes: [
      {
        title: "Validated commercial strategy",
        description:
          "A clear, evidence-based go-to-market strategy that leadership and commercial teams can execute with confidence.",
      },
      {
        title: "Aligned commercial teams",
        description:
          "Sales, marketing, and product teams aligned on positioning, priority segments, and the commercial motion.",
      },
    ],
    faqs: [
      {
        question: "Do you support both B2B and B2C go-to-market strategies?",
        answer:
          "Yes. We apply the same analytical rigour to both B2B and B2C contexts, adapting the framework to the specific dynamics of each go-to-market environment.",
      },
    ],
    relatedProducts: ["rico-crm", "rico-leads", "rico-campaign", "rico-intel"],
    relatedServices: [
      "business-consulting",
      "market-research",
      "sales-enablement",
      "growth-strategy",
    ],
    seo: {
      title: "Go-to-Market Strategy Service | Ricoz",
      description:
        "Structured go-to-market strategy for product launches, market entry, and commercial repositioning. Segmentation, positioning, channel design, and launch planning.",
    },
  },

  {
    id: "market-research",
    slug: "market-research",
    name: "Market Research",
    category: "Strategy & Transformation",
    tagline: "Evidence-based market intelligence for strategic decisions",
    shortDescription:
      "Structured market research and intelligence services that give organizations a factual foundation for strategic, commercial, and product decisions.",
    heroStatement:
      "Decisions grounded in real market intelligence carry less risk and land with more conviction.",
    overview:
      "Strategic decisions made without adequate market intelligence are inherently fragile. Our Market Research service provides the structured methodologies, analytical frameworks, and experienced synthesis needed to understand target markets, customer needs, competitive dynamics, and emerging trends — converting raw information into actionable strategic insight that leadership teams can act on with confidence.",
    problemsAddressed: [
      "Strategic decisions being made based on assumption rather than evidence",
      "Limited visibility into customer needs, preferences, and decision-making criteria",
      "Competitive landscape not well understood at a strategic level",
      "Market sizing and opportunity assessment lacking analytical foundation",
    ],
    capabilities: [
      {
        name: "Primary Research",
        description:
          "Design and conduct structured qualitative and quantitative research with target customers, stakeholders, and market participants.",
      },
      {
        name: "Competitive Intelligence",
        description:
          "Systematically gather and analyse competitive positioning, product strategy, pricing, and market behaviour.",
      },
      {
        name: "Market Sizing & Segmentation",
        description:
          "Develop rigorous market size estimates and segment structures using appropriate methodologies and data sources.",
      },
      {
        name: "Insight Synthesis",
        description:
          "Translate complex research outputs into clear strategic implications and decision-ready recommendations.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Research Design",
        description:
          "Define research questions, scope, methodology, and success criteria aligned to the strategic decision at stake.",
      },
      {
        step: "02",
        title: "Data Collection",
        description:
          "Execute primary and secondary research using appropriate methods for the market and question type.",
      },
      {
        step: "03",
        title: "Analysis",
        description:
          "Apply rigorous analytical frameworks to identify patterns, test hypotheses, and develop findings.",
      },
      {
        step: "04",
        title: "Synthesis & Reporting",
        description:
          "Deliver clear, decision-ready outputs with findings, implications, and recommended actions.",
      },
    ],
    outcomes: [
      {
        title: "Evidence-based strategic foundation",
        description:
          "Strategic decisions grounded in real market data rather than internal assumption.",
      },
      {
        title: "Customer and competitive clarity",
        description:
          "A clear, current understanding of customer needs and competitive dynamics in your target markets.",
      },
    ],
    faqs: [
      {
        question: "Do you conduct both qualitative and quantitative research?",
        answer:
          "Yes. We design mixed-method approaches where appropriate, using qualitative methods for depth and quantitative methods for scale and statistical confidence.",
      },
    ],
    relatedProducts: ["rico-analytics", "rico-intel", "rico-predict"],
    relatedServices: [
      "business-consulting",
      "go-to-market-strategy",
      "brand-strategy",
    ],
    seo: {
      title: "Market Research Services | Ricoz",
      description:
        "Structured market research and intelligence services. Primary research, competitive intelligence, market sizing, and strategic insight synthesis.",
    },
  },

  {
    id: "brand-strategy",
    slug: "brand-strategy",
    name: "Brand Strategy",
    category: "Strategy & Transformation",
    tagline: "Defining how your organization is perceived and remembered",
    shortDescription:
      "A structured brand strategy service that clarifies organizational identity, positioning, and the principles that guide consistent communication across all touchpoints.",
    heroStatement:
      "A well-defined brand creates clarity internally and credibility externally.",
    overview:
      "Brand is more than visual identity — it is the sum of how an organization is understood, trusted, and valued by every audience it serves. Our Brand Strategy service helps organizations define or refine their brand foundations: purpose, positioning, personality, and the narrative that connects with customers, employees, and stakeholders. We work at the strategic level, providing the framework that guides communication, design, and culture.",
    problemsAddressed: [
      "Inconsistent brand communication across teams, channels, and markets",
      "Brand positioning not meaningfully differentiated from competitors",
      "Internal teams lacking a shared understanding of what the brand stands for",
      "Brand not evolving alongside organizational strategy and market position",
    ],
    capabilities: [
      {
        name: "Brand Positioning",
        description:
          "Define a distinct, credible, and compelling brand position grounded in genuine organizational strengths and market opportunity.",
      },
      {
        name: "Brand Architecture",
        description:
          "Structure brand relationships across products, services, and business units to create coherence and commercial clarity.",
      },
      {
        name: "Brand Narrative",
        description:
          "Develop the core brand story, messaging hierarchy, and tone principles that guide consistent communication.",
      },
      {
        name: "Brand Governance",
        description:
          "Establish the frameworks, guidelines, and governance processes that protect brand consistency over time.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brand Audit",
        description:
          "Assess current brand perceptions, positioning, consistency, and competitive context.",
      },
      {
        step: "02",
        title: "Positioning Development",
        description:
          "Define the brand's strategic position, core differentiators, and audience promise.",
      },
      {
        step: "03",
        title: "Brand Framework",
        description:
          "Build the brand architecture, narrative, and guidelines that enable consistent expression.",
      },
      {
        step: "04",
        title: "Activation Planning",
        description:
          "Plan the internal and external activation required to bring the new or refined brand to life.",
      },
    ],
    outcomes: [
      {
        title: "Clear brand positioning",
        description:
          "A distinct, articulated position in the market that teams can communicate with confidence.",
      },
      {
        title: "Consistent brand expression",
        description:
          "A shared framework that guides communication decisions across teams, channels, and markets.",
      },
    ],
    faqs: [
      {
        question: "Does brand strategy include visual identity?",
        answer:
          "Our Brand Strategy service focuses on positioning, architecture, narrative, and governance at the strategic level. Visual identity execution is a downstream activity that follows a clear brand strategy.",
      },
    ],
    relatedProducts: ["rico-engage", "rico-content", "rico-analytics"],
    relatedServices: [
      "market-research",
      "go-to-market-strategy",
      "customer-experience-consulting",
    ],
    seo: {
      title: "Brand Strategy Service | Ricoz",
      description:
        "Strategic brand positioning, architecture, narrative, and governance for organizations seeking clarity and differentiation.",
    },
  },

  {
    id: "customer-experience-consulting",
    slug: "customer-experience-consulting",
    name: "Customer Experience Consulting",
    category: "Strategy & Transformation",
    tagline:
      "Designing experiences that retain and grow customer relationships",
    shortDescription:
      "Advisory and design services that help organizations understand, map, and systematically improve the experiences they deliver across all customer touchpoints.",
    heroStatement:
      "Customer experience is not a department — it is the cumulative result of every decision your organization makes.",
    overview:
      "Customer experience has become a primary driver of loyalty, advocacy, and commercial performance in most markets. Yet many organizations lack the structured capability to measure experience quality, identify root causes of dissatisfaction, or design and deliver improvement at scale. Our Customer Experience Consulting service provides the methodology, analytical tools, and advisory expertise to help organizations build CX as a genuine competitive capability.",
    problemsAddressed: [
      "Customer satisfaction or loyalty metrics declining without clear root-cause understanding",
      "Customer journey fragmented across channels with no coherent ownership",
      "CX improvement initiatives lacking structure, measurement, or executive alignment",
      "Voice of customer data collected but not effectively translated into operational change",
    ],
    capabilities: [
      {
        name: "Customer Journey Mapping",
        description:
          "Map customer journeys with precision, capturing moments of truth, pain points, and experience gaps across channels and touchpoints.",
      },
      {
        name: "Experience Measurement",
        description:
          "Design and implement measurement frameworks that provide a reliable, ongoing view of experience quality and its business impact.",
      },
      {
        name: "CX Strategy Development",
        description:
          "Develop a prioritized CX strategy that aligns investment with the experience improvements that drive the greatest commercial impact.",
      },
      {
        name: "Service Design",
        description:
          "Redesign specific customer interactions, processes, and touchpoints to deliver experiences that meet elevated customer expectations.",
      },
    ],
    process: [
      {
        step: "01",
        title: "CX Diagnostic",
        description:
          "Understand current experience quality, measurement capability, and the business impact of CX performance.",
      },
      {
        step: "02",
        title: "Journey Mapping",
        description:
          "Map priority customer journeys in depth, identifying pain points, gaps, and improvement opportunities.",
      },
      {
        step: "03",
        title: "Strategy & Prioritization",
        description:
          "Develop a CX improvement strategy with clearly prioritized initiatives and expected outcomes.",
      },
      {
        step: "04",
        title: "Design & Implementation",
        description:
          "Design improved experiences and support implementation with change management and measurement.",
      },
    ],
    outcomes: [
      {
        title: "Improved customer retention",
        description:
          "Targeted experience improvements focused on the moments that most influence loyalty and advocacy.",
      },
      {
        title: "Structured CX capability",
        description:
          "An embedded capability to measure, manage, and improve customer experience on an ongoing basis.",
      },
    ],
    faqs: [
      {
        question: "Where does CX consulting typically begin?",
        answer:
          "Most engagements begin with a CX diagnostic to establish a fact-based view of current experience quality and its commercial impact — this provides the foundation for prioritizing improvement investments.",
      },
    ],
    relatedProducts: [
      "rico-serve",
      "rico-desk",
      "rico-journey",
      "rico-feedback",
    ],
    relatedServices: [
      "business-consulting",
      "brand-strategy",
      "digital-transformation-consulting",
    ],
    seo: {
      title: "Customer Experience Consulting | Ricoz",
      description:
        "Customer journey mapping, CX strategy, experience measurement, and service design consulting for complex enterprises.",
    },
  },

  {
    id: "sales-enablement",
    slug: "sales-enablement",
    name: "Sales Enablement",
    category: "Strategy & Transformation",
    tagline: "Equipping sales teams to perform consistently at their best",
    shortDescription:
      "A structured sales enablement service that gives commercial teams the content, processes, tools, and coaching frameworks needed to convert opportunity into revenue more consistently.",
    heroStatement:
      "Sales performance improves when the right content, process, and insight reach the right person at the right moment.",
    overview:
      "Most sales underperformance is not a talent problem — it is an enablement problem. Sales teams operating without clear messaging, effective content, structured processes, and the right supporting tools work harder for worse results. Our Sales Enablement service designs and implements the infrastructure that allows commercial teams to perform consistently, onboard faster, and scale capability without proportionally scaling headcount.",
    problemsAddressed: [
      "Sales performance inconsistent across the team with no clear structural cause",
      "Sales content fragmented, outdated, or not aligned to the buying journey",
      "New salespeople taking too long to reach full productivity",
      "Sales and marketing misaligned on messaging, positioning, and priority audiences",
    ],
    capabilities: [
      {
        name: "Sales Content Development",
        description:
          "Create structured sales content — pitch decks, battle cards, case frameworks, and objection handling guides — aligned to the buyer journey.",
      },
      {
        name: "Sales Process Design",
        description:
          "Define and implement a structured sales process with clear stages, criteria, activities, and quality gates.",
      },
      {
        name: "Onboarding & Coaching Frameworks",
        description:
          "Design systematic onboarding programmes and ongoing coaching cadences that accelerate ramp time and reinforce good practice.",
      },
      {
        name: "Sales Technology Optimization",
        description:
          "Ensure CRM, engagement, and intelligence tools are configured to support the sales process rather than creating administrative overhead.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Sales Audit",
        description:
          "Assess current sales process, content, tools, and performance to identify the most significant enablement gaps.",
      },
      {
        step: "02",
        title: "Enablement Design",
        description:
          "Design the content, process, and coaching frameworks needed to address priority gaps.",
      },
      {
        step: "03",
        title: "Build & Deploy",
        description:
          "Develop and deploy enablement assets, tools configuration, and training programmes.",
      },
      {
        step: "04",
        title: "Measure & Improve",
        description:
          "Track enablement impact against commercial performance metrics and iterate based on evidence.",
      },
    ],
    outcomes: [
      {
        title: "More consistent sales performance",
        description:
          "Commercial teams executing with greater consistency across messaging, process, and customer engagement.",
      },
      {
        title: "Faster ramp time",
        description:
          "New sales hires reaching meaningful productivity in less time through better-structured enablement.",
      },
    ],
    faqs: [
      {
        question:
          "Do you implement sales enablement platforms as part of this service?",
        answer:
          "We work with your existing technology stack where possible. Where a specific platform is needed, we advise on selection and support configuration — but the service focuses on the enablement programme itself rather than technology procurement.",
      },
    ],
    relatedProducts: [
      "rico-crm",
      "rico-pipeline",
      "rico-deals",
      "rico-revenue",
    ],
    relatedServices: [
      "go-to-market-strategy",
      "business-consulting",
      "growth-strategy",
    ],
    seo: {
      title: "Sales Enablement Service | Ricoz",
      description:
        "Sales enablement strategy, content development, process design, and coaching frameworks to improve commercial team performance.",
    },
  },

  {
    id: "growth-strategy",
    slug: "growth-strategy",
    name: "Growth Strategy",
    category: "Strategy & Transformation",
    tagline: "Building a credible path to sustained commercial growth",
    shortDescription:
      "A structured advisory service for organizations seeking to identify, validate, and pursue the growth opportunities most aligned to their capabilities and market position.",
    heroStatement:
      "Growth without strategy is expansion without direction — resource-intensive, fragile, and hard to sustain.",
    overview:
      "Sustainable commercial growth requires more than ambition. It requires a clear diagnosis of where growth is realistically achievable, a structured assessment of what is required to capture it, and a disciplined plan to allocate resources against the highest-value opportunities. Our Growth Strategy service helps leadership teams develop a rigorous, evidence-based growth agenda — identifying the most compelling pathways and building the commercial infrastructure to execute against them.",
    problemsAddressed: [
      "Growth stalling without a clear understanding of the primary constraints",
      "Multiple growth initiatives running simultaneously without strategic prioritization",
      "Organic growth plateauing while inorganic options are being explored without adequate strategic foundation",
      "Commercial strategy not differentiated enough to win in increasingly competitive markets",
    ],
    capabilities: [
      {
        name: "Growth Diagnostic",
        description:
          "Identify the structural, commercial, and operational constraints limiting current growth and the opportunities most likely to unlock it.",
      },
      {
        name: "Market Opportunity Assessment",
        description:
          "Assess adjacent markets, new customer segments, and product extension opportunities against capability and competitive position.",
      },
      {
        name: "Growth Architecture",
        description:
          "Design the commercial model, capability investments, and organizational structure required to capture identified growth opportunities.",
      },
      {
        name: "Execution Roadmap",
        description:
          "Build a prioritized, time-phased growth roadmap with clear milestones, investment requirements, and accountability structures.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Growth Diagnostic",
        description:
          "Establish the current growth trajectory, underlying drivers, and primary constraints.",
      },
      {
        step: "02",
        title: "Opportunity Identification",
        description:
          "Systematically identify and evaluate growth opportunities across markets, segments, and offer dimensions.",
      },
      {
        step: "03",
        title: "Strategy Development",
        description:
          "Develop and validate a prioritized growth strategy with a clear investment and execution logic.",
      },
      {
        step: "04",
        title: "Roadmap & Mobilization",
        description:
          "Translate strategy into an executable roadmap and prepare the organization to pursue growth with focus.",
      },
    ],
    outcomes: [
      {
        title: "Prioritized growth agenda",
        description:
          "A clear set of growth priorities, grounded in market evidence and aligned to organizational capability.",
      },
      {
        title: "Executable growth plan",
        description:
          "A time-phased plan with the investment logic, milestones, and organizational clarity needed to execute with discipline.",
      },
    ],
    faqs: [
      {
        question: "How is this distinct from general business consulting?",
        answer:
          "Growth Strategy is specifically focused on the commercial growth agenda — identifying pathways to revenue growth, building the commercial architecture to capture them, and planning the execution. Business Consulting covers a broader set of strategic and operational challenges.",
      },
    ],
    relatedProducts: [
      "rico-analytics",
      "rico-leads",
      "rico-pipeline",
      "rico-intel",
    ],
    relatedServices: [
      "business-consulting",
      "go-to-market-strategy",
      "sales-enablement",
    ],
    seo: {
      title: "Growth Strategy Service | Ricoz",
      description:
        "Evidence-based growth strategy advisory. Market opportunity assessment, growth architecture design, and execution roadmapping for complex enterprises.",
    },
  },

  {
    id: "digital-product-strategy",
    slug: "digital-product-strategy",
    name: "Digital Product Strategy",
    category: "Strategy & Transformation",
    tagline:
      "Defining the product vision and pathway before the first line of code",
    shortDescription:
      "Strategic advisory for organizations defining, validating, or repositioning a digital product — covering product vision, market positioning, roadmap prioritization, and build-versus-buy decisions.",
    heroStatement:
      "The most expensive product decisions are the ones made without a strategy.",
    overview:
      "Digital product investment is substantial and the consequences of poor strategic decisions compound over time. Our Digital Product Strategy service helps organizations develop a clear, validated product strategy before committing to large-scale development investment — covering market positioning, customer discovery, feature prioritization, build-versus-buy assessment, and the product governance needed to make good decisions consistently over the product lifecycle.",
    problemsAddressed: [
      "Product roadmap driven by internal opinion rather than customer evidence and market analysis",
      "Digital product investment not clearly tied to a commercial or strategic outcome",
      "Build-versus-buy decisions made without a structured evaluation framework",
      "Product teams lacking a shared strategic vision that guides prioritization",
    ],
    capabilities: [
      {
        name: "Product Vision & Positioning",
        description:
          "Define a clear, differentiated product vision and market positioning grounded in customer insight and competitive analysis.",
      },
      {
        name: "Customer Discovery",
        description:
          "Conduct structured customer discovery to validate assumptions, identify underserved needs, and ground strategy in real user insight.",
      },
      {
        name: "Roadmap Strategy",
        description:
          "Develop a prioritized product roadmap with a clear logic for sequencing investment and managing trade-offs.",
      },
      {
        name: "Build vs. Buy Analysis",
        description:
          "Evaluate build, buy, partner, and configure options using a structured framework that balances cost, risk, and strategic fit.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "Understand the market context, customer needs, existing capabilities, and strategic objectives.",
      },
      {
        step: "02",
        title: "Strategy Development",
        description:
          "Develop product positioning, differentiation strategy, and a validated commercial model.",
      },
      {
        step: "03",
        title: "Roadmap Design",
        description:
          "Build the product roadmap with clear prioritization logic, investment phasing, and milestones.",
      },
      {
        step: "04",
        title: "Delivery Preparation",
        description:
          "Establish product governance, team structures, and the working practices needed for disciplined product development.",
      },
    ],
    outcomes: [
      {
        title: "Validated product strategy",
        description:
          "A clear product direction grounded in customer evidence, competitive analysis, and strategic intent.",
      },
      {
        title: "Prioritized roadmap",
        description:
          "A product roadmap that reflects considered trade-offs and gives development teams a clear, defensible direction.",
      },
    ],
    faqs: [
      {
        question: "At what stage is this service most valuable?",
        answer:
          "This service is most valuable before significant development investment begins — either at initial concept stage or when an existing product needs strategic repositioning. It is also useful when a product roadmap has become fragmented and needs strategic coherence restored.",
      },
    ],
    relatedProducts: [
      "rico-agile",
      "rico-plan",
      "rico-milestone",
      "rico-analytics",
    ],
    relatedServices: [
      "business-consulting",
      "technology-strategy-roadmap",
      "go-to-market-strategy",
    ],
    seo: {
      title: "Digital Product Strategy Service | Ricoz",
      description:
        "Product vision, positioning, roadmap strategy, and build-versus-buy analysis for organizations investing in digital products.",
    },
  },
  // ─── Batch 2: Implementation & Integration (10 new) ──────────────────────

  {
    id: "custom-software-development",
    slug: "custom-software-development",
    name: "Custom Software Development",
    category: "Implementation & Integration",
    tagline:
      "Purpose-built software for problems no off-the-shelf product solves",
    shortDescription:
      "End-to-end custom software development for organizations that need tailored solutions — from initial specification through architecture, engineering, testing, and deployment.",
    heroStatement:
      "When the right software does not exist, the right partner builds it.",
    overview:
      "Off-the-shelf software solves common problems well. Complex, differentiated, or highly specific business requirements demand purpose-built solutions. Our Custom Software Development service delivers the full-cycle engineering capability needed to design, build, test, and deploy software that fits your environment, integrates with your systems, and performs under your operational conditions — without the compromises that come with adapting generic platforms.",
    problemsAddressed: [
      "Business requirements that no available product can satisfy without significant customization",
      "Competitive differentiation dependent on proprietary software capability",
      "Existing custom systems built without adequate architecture or engineering discipline",
      "Third-party software creating vendor dependency on functionality critical to operations",
    ],
    capabilities: [
      {
        name: "Requirements Engineering",
        description:
          "Translate business needs into precise, testable software specifications through structured discovery and stakeholder engagement.",
      },
      {
        name: "Software Architecture",
        description:
          "Design scalable, maintainable software architectures appropriate to the functional requirements and operational environment.",
      },
      {
        name: "Full-Cycle Engineering",
        description:
          "Deliver quality software through disciplined engineering practices covering design, coding, testing, review, and deployment.",
      },
      {
        name: "Integration & Deployment",
        description:
          "Integrate custom software with existing systems and deploy reliably to production environments with appropriate monitoring.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Specification",
        description:
          "Understand requirements, constraints, and success criteria in depth before design begins.",
      },
      {
        step: "02",
        title: "Architecture & Design",
        description:
          "Design the system architecture, data model, and component structure.",
      },
      {
        step: "03",
        title: "Build & Test",
        description:
          "Engineer and test software iteratively with continuous quality assurance.",
      },
      {
        step: "04",
        title: "Deploy & Support",
        description:
          "Deploy to production and provide structured post-launch support and maintenance.",
      },
    ],
    outcomes: [
      {
        title: "Fit-for-purpose software",
        description:
          "Software that genuinely meets the business requirements it was built for, without the constraints of generic platforms.",
      },
      {
        title: "Maintainable codebase",
        description:
          "Well-structured, documented code that can be maintained and extended without accumulating unsustainable technical debt.",
      },
    ],
    faqs: [
      {
        question: "Do you provide ongoing maintenance after delivery?",
        answer:
          "Yes. We offer structured maintenance and support arrangements following initial delivery, ranging from bug-fix-only support to active feature development and platform evolution.",
      },
      {
        question: "How do you handle changing requirements during a build?",
        answer:
          "We use iterative delivery approaches that accommodate evolving requirements. Significant scope changes are managed through a structured change control process to keep delivery on track.",
      },
    ],
    relatedProducts: [
      "rico-build",
      "rico-deploy",
      "rico-observe",
      "rico-testlab",
    ],
    relatedServices: [
      "software-architecture-engineering",
      "enterprise-application-development",
      "api-development-integration",
    ],
    seo: {
      title: "Custom Software Development | Ricoz",
      description:
        "Purpose-built custom software development. Requirements engineering, architecture, full-cycle engineering, and production deployment for complex enterprise requirements.",
    },
  },

  {
    id: "web-application-development",
    slug: "web-application-development",
    name: "Web Application Development",
    category: "Implementation & Integration",
    tagline: "Performant, scalable web applications built for real-world use",
    shortDescription:
      "Full-stack web application development for organizations that need robust, scalable, and maintainable web-based software delivering measurable business outcomes.",
    heroStatement:
      "A web application is only as good as the engineering decisions made before a line of code is written.",
    overview:
      "Web applications are now the primary delivery mechanism for most enterprise software — yet many are built without adequate architecture, scalability planning, or engineering discipline, creating systems that are difficult to maintain and expensive to evolve. Our Web Application Development service delivers web applications with the technical foundation, user experience quality, and operational resilience that modern enterprise requirements demand.",
    problemsAddressed: [
      "Existing web applications unable to scale reliably under growing user loads",
      "Web application architecture creating bottlenecks in development velocity and quality",
      "User experience of internal or customer-facing web tools significantly below expectation",
      "Security vulnerabilities or compliance gaps in existing web application estate",
    ],
    capabilities: [
      {
        name: "Frontend Engineering",
        description:
          "Build performant, accessible, and maintainable frontend interfaces using modern frameworks and component architectures.",
      },
      {
        name: "Backend Engineering",
        description:
          "Design and build robust backend services, APIs, and data layers that support current and future application requirements.",
      },
      {
        name: "Performance & Scalability",
        description:
          "Engineer applications to perform consistently under real user loads with appropriate caching, optimization, and infrastructure design.",
      },
      {
        name: "Security & Accessibility",
        description:
          "Implement security best practices and accessibility standards from the ground up, not as afterthoughts.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Requirements & Architecture",
        description:
          "Define functional requirements, technical constraints, and the application architecture.",
      },
      {
        step: "02",
        title: "Design & Prototype",
        description:
          "Create interface designs and technical prototypes to validate approach before full build.",
      },
      {
        step: "03",
        title: "Iterative Build",
        description:
          "Develop and test the application in structured iterations with regular stakeholder review.",
      },
      {
        step: "04",
        title: "Launch & Stabilize",
        description:
          "Deploy to production, monitor performance, and stabilize before transitioning to ongoing support.",
      },
    ],
    outcomes: [
      {
        title: "Reliable production application",
        description:
          "An application that performs consistently in production under real conditions and user volumes.",
      },
      {
        title: "Maintainable architecture",
        description:
          "A well-structured codebase and architecture that supports efficient ongoing development and evolution.",
      },
    ],
    faqs: [
      {
        question:
          "Do you work with a specific frontend or backend technology stack?",
        answer:
          "We work with modern, well-supported stacks appropriate to the requirements. We can work with your existing technology choices or recommend a stack based on your specific context.",
      },
    ],
    relatedProducts: [
      "rico-build",
      "rico-gateway",
      "rico-deploy",
      "rico-observe",
    ],
    relatedServices: [
      "custom-software-development",
      "ui-ux-product-design",
      "api-development-integration",
    ],
    seo: {
      title: "Web Application Development | Ricoz",
      description:
        "Full-stack web application development. Frontend and backend engineering, performance, security, and scalability for enterprise web applications.",
    },
  },

  {
    id: "enterprise-application-development",
    slug: "enterprise-application-development",
    name: "Enterprise Application Development",
    category: "Implementation & Integration",
    tagline:
      "Large-scale application delivery for complex enterprise environments",
    shortDescription:
      "End-to-end delivery of enterprise-grade applications that meet the scale, security, integration, and governance requirements of large organizations.",
    heroStatement:
      "Enterprise applications carry organizational complexity that demands engineering discipline at every layer.",
    overview:
      "Enterprise application development is fundamentally different from building applications for smaller environments. Scale requirements, security standards, integration complexity, governance obligations, and organizational change implications require a development approach that addresses these dimensions from the outset. Our Enterprise Application Development service provides the architecture, engineering capacity, and programme discipline needed to deliver applications that perform reliably at enterprise scale.",
    problemsAddressed: [
      "Enterprise application projects delivering late, over budget, or with significant scope reduction",
      "Existing enterprise applications unable to meet current scale or integration requirements",
      "Bespoke application development lacking the architecture and engineering governance enterprise environments require",
      "Complex integration and migration requirements creating delivery risk on application programmes",
    ],
    capabilities: [
      {
        name: "Enterprise Architecture",
        description:
          "Design application architectures that meet enterprise requirements for scale, security, integration, and governance.",
      },
      {
        name: "Programme Delivery",
        description:
          "Manage large-scale application development programmes with appropriate governance, risk management, and quality assurance.",
      },
      {
        name: "Integration Engineering",
        description:
          "Design and build the integrations required to connect new applications with the existing enterprise technology landscape.",
      },
      {
        name: "Data Migration",
        description:
          "Plan and execute complex data migrations with the rigour that enterprise data quality and continuity requirements demand.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Enterprise Discovery",
        description:
          "Understand the full scope of requirements, integration landscape, governance constraints, and delivery context.",
      },
      {
        step: "02",
        title: "Architecture & Planning",
        description:
          "Design the application architecture and delivery programme with appropriate governance structures.",
      },
      {
        step: "03",
        title: "Phased Build",
        description:
          "Deliver the application in structured phases with quality gates, stakeholder review, and risk management.",
      },
      {
        step: "04",
        title: "Deploy & Transition",
        description:
          "Execute deployment, data migration, and handover to operations with appropriate business continuity planning.",
      },
    ],
    outcomes: [
      {
        title: "Enterprise-grade application",
        description:
          "An application that meets the performance, security, and integration standards the enterprise environment requires.",
      },
      {
        title: "Controlled programme delivery",
        description:
          "A delivery programme with the governance, risk management, and stakeholder visibility that complex enterprise projects demand.",
      },
    ],
    faqs: [
      {
        question:
          "How do you manage delivery risk on large enterprise application programmes?",
        answer:
          "We use phased delivery approaches, structured governance, and regular independent quality assurance to identify and manage delivery risk early — before it becomes a programme-level problem.",
      },
    ],
    relatedProducts: [
      "rico-build",
      "rico-deploy",
      "rico-studio-int",
      "rico-connect",
    ],
    relatedServices: [
      "custom-software-development",
      "enterprise-systems-integration",
      "software-architecture-engineering",
    ],
    seo: {
      title: "Enterprise Application Development | Ricoz",
      description:
        "Enterprise-grade application development with the architecture, engineering, and programme discipline complex organizations require.",
    },
  },

  {
    id: "saas-product-development",
    slug: "saas-product-development",
    name: "SaaS Product Development",
    category: "Implementation & Integration",
    tagline: "Building software-as-a-service products that scale from day one",
    shortDescription:
      "End-to-end SaaS product development — covering product architecture, multi-tenancy design, billing infrastructure, security, and the technical foundations needed to scale a subscription software business.",
    heroStatement:
      "A SaaS product is a business, not just an application — it requires architecture that scales with commercial success.",
    overview:
      "SaaS product development introduces challenges that standard application development does not. Multi-tenancy architecture, subscription and billing infrastructure, security model design, usage metering, customer onboarding automation, and the operational requirements of running a hosted product are all concerns that need to be built in from the start. Our SaaS Product Development service provides the technical architecture and engineering capability to build SaaS products on foundations that support commercial scale.",
    problemsAddressed: [
      "Existing product not architected for SaaS scale, multi-tenancy, or subscription commercials",
      "SaaS product development team lacking the architectural expertise to avoid costly early design decisions",
      "Technical foundations not supporting the operational requirements of running a hosted product at scale",
      "Security and compliance model not designed for multi-tenant cloud delivery",
    ],
    capabilities: [
      {
        name: "SaaS Architecture Design",
        description:
          "Design multi-tenant architectures, data isolation models, and infrastructure patterns appropriate for SaaS at scale.",
      },
      {
        name: "Subscription & Billing Infrastructure",
        description:
          "Build the subscription management, usage metering, and billing infrastructure that SaaS commercial models require.",
      },
      {
        name: "Customer Onboarding Engineering",
        description:
          "Automate and optimize the customer onboarding and provisioning flows that determine early SaaS retention.",
      },
      {
        name: "Operational Readiness",
        description:
          "Establish the monitoring, incident management, and operational runbooks needed to run a hosted product reliably.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Product Architecture",
        description:
          "Design the foundational SaaS architecture, tenancy model, and technology stack.",
      },
      {
        step: "02",
        title: "Core Platform Build",
        description:
          "Build the core platform including tenancy, auth, billing, and onboarding infrastructure.",
      },
      {
        step: "03",
        title: "Product Feature Development",
        description:
          "Develop product features iteratively on the established platform foundation.",
      },
      {
        step: "04",
        title: "Launch Readiness",
        description:
          "Prepare for production launch with security review, load testing, and operational runbook completion.",
      },
    ],
    outcomes: [
      {
        title: "Scalable SaaS foundation",
        description:
          "A technical architecture that supports product growth without requiring expensive re-platforming at scale.",
      },
      {
        title: "Operational product",
        description:
          "A production-ready SaaS product with the operational infrastructure needed to serve customers reliably.",
      },
    ],
    faqs: [
      {
        question:
          "Do you work with organizations building their first SaaS product?",
        answer:
          "Yes. Many of our SaaS engagements are with organizations making the transition from on-premise or services-led models to SaaS. We provide the architectural expertise to avoid costly early decisions that are difficult to undo.",
      },
    ],
    relatedProducts: ["rico-build", "rico-sdk", "rico-gateway", "rico-deploy"],
    relatedServices: [
      "custom-software-development",
      "web-application-development",
      "mvp-development",
    ],
    seo: {
      title: "SaaS Product Development | Ricoz",
      description:
        "SaaS product development covering multi-tenancy architecture, subscription infrastructure, customer onboarding, and operational readiness.",
    },
  },

  {
    id: "mobile-application-development",
    slug: "mobile-application-development",
    name: "Mobile Application Development",
    category: "Implementation & Integration",
    tagline:
      "Native and cross-platform mobile applications built to production standard",
    shortDescription:
      "Mobile application development for iOS, Android, and cross-platform environments — with the user experience quality, performance, and integration depth that enterprise and consumer contexts require.",
    heroStatement:
      "Mobile applications live in the most competitive user experience environment that exists.",
    overview:
      "Mobile applications are judged against the best experiences in the App Store and Play Store — not against the business applications users tolerate on desktop. Our Mobile Application Development service delivers mobile applications that meet genuine user expectations for performance, usability, and reliability, while satisfying the security, integration, and governance requirements of complex organizational contexts.",
    problemsAddressed: [
      "Existing mobile application with poor user experience or performance leading to low adoption",
      "Need for mobile access to enterprise systems that desktop-first tools cannot adequately serve",
      "Cross-platform requirements creating pressure to choose between quality and coverage",
      "Mobile application security and device management not meeting organizational standards",
    ],
    capabilities: [
      {
        name: "Native Development",
        description:
          "Build native iOS and Android applications where platform capability or user experience requirements demand it.",
      },
      {
        name: "Cross-Platform Development",
        description:
          "Deliver consistent, high-quality mobile experiences across platforms using modern cross-platform frameworks where appropriate.",
      },
      {
        name: "Mobile UX Design",
        description:
          "Design mobile interfaces that meet platform conventions, accessibility standards, and user expectations for quality.",
      },
      {
        name: "Backend Integration",
        description:
          "Build the API and data layers that connect mobile applications reliably to backend systems and services.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Design",
        description:
          "Define requirements, user journeys, and the technical approach for the mobile application.",
      },
      {
        step: "02",
        title: "Prototype & Validate",
        description:
          "Build and test interactive prototypes to validate UX and technical approach before full development.",
      },
      {
        step: "03",
        title: "Build & Test",
        description:
          "Develop and test the application across target devices and operating system versions.",
      },
      {
        step: "04",
        title: "Launch & Monitor",
        description:
          "Release to app stores or internal distribution, monitor quality, and support post-launch stabilization.",
      },
    ],
    outcomes: [
      {
        title: "Production-quality mobile application",
        description:
          "An application that meets platform quality standards, performs reliably, and is adopted by its target users.",
      },
      {
        title: "Secure, governed deployment",
        description:
          "A mobile application deployed through appropriate channels with device management and security standards met.",
      },
    ],
    faqs: [
      {
        question: "Do you recommend native or cross-platform development?",
        answer:
          "The choice depends on your specific requirements — performance needs, platform feature usage, team capability, and budget. We provide an evidence-based recommendation as part of discovery rather than defaulting to one approach.",
      },
    ],
    relatedProducts: ["rico-build", "rico-sdk", "rico-deploy", "rico-observe"],
    relatedServices: [
      "web-application-development",
      "custom-software-development",
      "ui-ux-product-design",
    ],
    seo: {
      title: "Mobile Application Development | Ricoz",
      description:
        "Native and cross-platform mobile application development for iOS and Android. Enterprise-grade UX, performance, security, and backend integration.",
    },
  },

  {
    id: "api-development-integration",
    slug: "api-development-integration",
    name: "API Development & Integration",
    category: "Implementation & Integration",
    tagline: "Connecting systems through well-designed, reliable APIs",
    shortDescription:
      "API design, development, and integration services that create reliable, secure, and well-governed connectivity between applications, platforms, and data sources.",
    heroStatement:
      "APIs are the connective tissue of modern software — poorly designed ones create problems that scale with every new integration.",
    overview:
      "Modern software architectures depend on APIs — but APIs designed without adequate standards, security controls, or documentation create technical debt that grows with every system that depends on them. Our API Development & Integration service covers API strategy, design, engineering, security, and governance — delivering APIs and integrations that are reliable, well-documented, and maintainable over the long term.",
    problemsAddressed: [
      "Fragile, undocumented APIs creating integration failures and maintenance overhead",
      "No coherent API strategy or standards governing how systems expose and consume data",
      "Third-party platform integrations built without adequate error handling or monitoring",
      "API security gaps creating exposure to unauthorized access or data leakage",
    ],
    capabilities: [
      {
        name: "API Design & Standards",
        description:
          "Define API design standards, versioning strategy, and documentation requirements that govern all API development.",
      },
      {
        name: "API Engineering",
        description:
          "Build RESTful, GraphQL, and event-driven APIs with the security, performance, and error handling production systems require.",
      },
      {
        name: "Integration Development",
        description:
          "Develop integrations between systems using appropriate patterns — point-to-point, event-driven, or via an integration platform.",
      },
      {
        name: "API Security & Governance",
        description:
          "Implement authentication, authorization, rate limiting, and monitoring to protect APIs from misuse and ensure operational visibility.",
      },
    ],
    process: [
      {
        step: "01",
        title: "API Strategy & Design",
        description:
          "Define the API architecture, standards, and individual API contracts before engineering begins.",
      },
      {
        step: "02",
        title: "Engineering",
        description:
          "Build, test, and document APIs and integrations to the agreed specifications.",
      },
      {
        step: "03",
        title: "Security & Testing",
        description:
          "Apply security controls and conduct thorough integration testing across all target systems.",
      },
      {
        step: "04",
        title: "Deploy & Monitor",
        description:
          "Deploy APIs to production with appropriate monitoring, alerting, and operational runbooks.",
      },
    ],
    outcomes: [
      {
        title: "Reliable API estate",
        description:
          "APIs that perform consistently, handle errors gracefully, and are properly monitored in production.",
      },
      {
        title: "Governed API landscape",
        description:
          "A documented, standards-compliant API estate that is maintainable as the integration footprint grows.",
      },
    ],
    faqs: [
      {
        question: "Do you work with existing API management platforms?",
        answer:
          "Yes. We work with existing API management platforms and can advise on platform selection where one is not yet in place.",
      },
    ],
    relatedProducts: [
      "rico-gateway",
      "rico-connect",
      "rico-relay",
      "rico-observe",
    ],
    relatedServices: [
      "enterprise-systems-integration",
      "custom-software-development",
      "web-application-development",
    ],
    seo: {
      title: "API Development & Integration Services | Ricoz",
      description:
        "API design, engineering, integration, security, and governance services for complex enterprise technology landscapes.",
    },
  },

  {
    id: "software-architecture-engineering",
    slug: "software-architecture-engineering",
    name: "Software Architecture & Engineering",
    category: "Implementation & Integration",
    tagline: "Technical foundations that determine long-term software quality",
    shortDescription:
      "Architecture review, design, and engineering advisory for organizations that need to establish or improve the structural foundations of their software systems.",
    heroStatement:
      "Architecture decisions made early determine the ceiling of what software can become.",
    overview:
      "Software architecture is not a phase — it is a discipline that must be maintained throughout the life of a system. Poor architectural decisions accumulate as technical debt that eventually constrains what an organization can deliver. Our Software Architecture & Engineering service provides independent architectural assessment, design, and ongoing engineering advisory to help organizations build software on foundations that support long-term capability and quality.",
    problemsAddressed: [
      "Software development velocity declining as technical debt accumulates in existing systems",
      "Architecture inconsistencies across systems creating integration complexity and operational risk",
      "Development teams lacking architectural guidance, resulting in inconsistent design decisions",
      "Scaling or performance requirements exposing structural limitations in existing applications",
    ],
    capabilities: [
      {
        name: "Architecture Assessment",
        description:
          "Conduct independent assessment of existing software architectures, identifying structural weaknesses, technical debt, and improvement priorities.",
      },
      {
        name: "Architecture Design",
        description:
          "Design scalable, maintainable system architectures appropriate to the functional, performance, and operational requirements.",
      },
      {
        name: "Engineering Standards",
        description:
          "Establish coding standards, design patterns, and engineering practices that maintain architecture quality as teams evolve.",
      },
      {
        name: "Technical Leadership",
        description:
          "Provide embedded or advisory technical leadership to guide architectural decisions through complex development programmes.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Architecture Review",
        description:
          "Assess current architecture, identify structural issues, and prioritize improvements.",
      },
      {
        step: "02",
        title: "Target Architecture",
        description:
          "Define the target architecture and migration path from current state.",
      },
      {
        step: "03",
        title: "Standards & Patterns",
        description:
          "Establish engineering standards and design patterns that preserve architecture quality over time.",
      },
      {
        step: "04",
        title: "Advisory & Governance",
        description:
          "Provide ongoing architectural governance and advisory through the delivery programme.",
      },
    ],
    outcomes: [
      {
        title: "Structurally sound systems",
        description:
          "Software systems with architectures that support reliability, performance, and future development capacity.",
      },
      {
        title: "Reduced technical debt",
        description:
          "A planned, structured approach to reducing technical debt that restores development velocity over time.",
      },
    ],
    faqs: [
      {
        question:
          "Can you work with existing development teams as an advisory resource?",
        answer:
          "Yes. We frequently provide architectural advisory and technical leadership to augment in-house development teams — working alongside them rather than replacing their capacity.",
      },
    ],
    relatedProducts: [
      "rico-build",
      "rico-observe",
      "rico-infra",
      "rico-deploy",
    ],
    relatedServices: [
      "custom-software-development",
      "enterprise-application-development",
      "legacy-application-modernization",
    ],
    seo: {
      title: "Software Architecture & Engineering Services | Ricoz",
      description:
        "Software architecture assessment, design, engineering standards, and technical leadership advisory for complex development programmes.",
    },
  },

  {
    id: "legacy-application-modernization",
    slug: "legacy-application-modernization",
    name: "Legacy Application Modernization",
    category: "Implementation & Integration",
    tagline: "Bringing critical systems forward without operational disruption",
    shortDescription:
      "Structured modernization of legacy applications — from architecture assessment and modernization strategy through incremental re-engineering and safe migration to modern platforms.",
    heroStatement:
      "Legacy systems do not modernize themselves — and the longer the delay, the higher the eventual cost.",
    overview:
      "Legacy applications often represent decades of business logic, accumulated customization, and institutional knowledge — but they also carry the weight of outdated architecture, unsupported technology, and growing maintenance burden. Our Legacy Application Modernization service provides the strategy, engineering methodology, and delivery discipline to modernize these systems incrementally and safely, preserving critical business logic while eliminating the constraints that legacy architecture imposes.",
    problemsAddressed: [
      "Critical systems running on unsupported platforms or technology stacks approaching end of life",
      "Legacy application maintenance consuming disproportionate IT resource and budget",
      "Inability to integrate legacy systems with modern platforms due to architectural constraints",
      "Security and compliance risk created by outdated application architecture and dependencies",
    ],
    capabilities: [
      {
        name: "Legacy Assessment",
        description:
          "Analyse legacy systems thoroughly — covering architecture, dependencies, business logic, data model, and modernization risk.",
      },
      {
        name: "Modernization Strategy",
        description:
          "Develop a risk-managed modernization strategy with appropriate patterns — rehost, replatform, refactor, rearchitect, or replace.",
      },
      {
        name: "Incremental Re-Engineering",
        description:
          "Execute modernization incrementally using strangler-fig and similar patterns that maintain operational continuity throughout.",
      },
      {
        name: "Data Migration & Validation",
        description:
          "Plan and execute legacy data migration with the validation rigour that critical business data requires.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Legacy Assessment",
        description:
          "Fully assess the legacy system, its business criticality, risk profile, and modernization options.",
      },
      {
        step: "02",
        title: "Modernization Strategy",
        description:
          "Select and plan the modernization approach, balancing risk, cost, and speed of delivery.",
      },
      {
        step: "03",
        title: "Incremental Delivery",
        description:
          "Execute modernization in controlled increments maintaining continuity of the existing system.",
      },
      {
        step: "04",
        title: "Decommission & Validate",
        description:
          "Complete the transition, validate the modernized system, and safely decommission legacy components.",
      },
    ],
    outcomes: [
      {
        title: "Modernized critical systems",
        description:
          "Applications operating on current, supported platforms with sustainable architecture and reduced maintenance cost.",
      },
      {
        title: "Reduced operational risk",
        description:
          "Elimination of the security, compliance, and operational risks associated with running systems past their support lifecycle.",
      },
    ],
    faqs: [
      {
        question:
          "How do you minimize disruption to live operations during modernization?",
        answer:
          "We use incremental modernization patterns that keep existing systems running throughout the migration. Cutover events are carefully planned, tested, and executed during low-risk windows with fallback procedures in place.",
      },
    ],
    relatedProducts: ["rico-build", "rico-connect", "rico-data", "rico-deploy"],
    relatedServices: [
      "software-architecture-engineering",
      "enterprise-systems-integration",
      "cloud-migration-services",
    ],
    seo: {
      title: "Legacy Application Modernization | Ricoz",
      description:
        "Structured legacy application modernization — assessment, strategy, incremental re-engineering, and safe migration to modern platforms.",
    },
  },

  {
    id: "mvp-development",
    slug: "mvp-development",
    name: "MVP Development",
    category: "Implementation & Integration",
    tagline: "Getting to market fast without technical shortcuts",
    shortDescription:
      "Structured MVP development that delivers a real, production-ready product quickly — without the technical compromises that create costly rework when the product needs to scale.",
    heroStatement:
      "An MVP should validate your assumptions, not become your technical liability.",
    overview:
      "Speed to market matters enormously in product development — but MVPs built without sufficient technical discipline create foundations that are expensive to build upon. Our MVP Development service balances the urgency of getting to market with the technical rigour needed to ensure the MVP becomes a solid foundation for product growth, not a system that needs to be rebuilt before the first major release.",
    problemsAddressed: [
      "Product development taking too long to reach market validation due to over-specification",
      "Previous MVP built so quickly that the codebase cannot support the next phase of development",
      "Uncertainty about which features genuinely need to be in the initial release",
      "Technical team not experienced in the specific trade-offs required for disciplined MVP scoping",
    ],
    capabilities: [
      {
        name: "MVP Scoping & Prioritization",
        description:
          "Define the minimum viable feature set through structured prioritization against user needs and validation goals.",
      },
      {
        name: "Rapid Architecture",
        description:
          "Design a lean but extensible architecture that enables fast initial delivery without foreclosing future product evolution.",
      },
      {
        name: "Accelerated Engineering",
        description:
          "Deliver the MVP through focused engineering sprints with clear acceptance criteria and quality baselines.",
      },
      {
        name: "Feedback Infrastructure",
        description:
          "Instrument the MVP with the analytics and feedback mechanisms needed to make evidence-based post-launch decisions.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Scope Definition",
        description:
          "Define the MVP scope, success criteria, and the assumptions it needs to validate.",
      },
      {
        step: "02",
        title: "Architecture & Design",
        description:
          "Design the lean architecture and user experience for the initial release.",
      },
      {
        step: "03",
        title: "Build & Test",
        description: "Develop and test the MVP in focused delivery sprints.",
      },
      {
        step: "04",
        title: "Launch & Learn",
        description:
          "Launch the MVP, monitor user behaviour, and use evidence to guide the next development phase.",
      },
    ],
    outcomes: [
      {
        title: "Market-ready MVP",
        description:
          "A functional, production-quality product that can be put in front of real users for validation.",
      },
      {
        title: "Extensible foundation",
        description:
          "A codebase and architecture that supports rapid iteration and feature development after initial launch.",
      },
    ],
    faqs: [
      {
        question: "How do you define what is truly minimum viable?",
        answer:
          "We work with you to identify the specific hypotheses the MVP needs to validate and scope to the smallest feature set that can genuinely test those hypotheses with real users.",
      },
    ],
    relatedProducts: [
      "rico-build",
      "rico-agile",
      "rico-testlab",
      "rico-analytics",
    ],
    relatedServices: [
      "custom-software-development",
      "digital-product-strategy",
      "web-application-development",
    ],
    seo: {
      title: "MVP Development Services | Ricoz",
      description:
        "Rapid, disciplined MVP development. Fast time to market without the technical shortcuts that create expensive rework at scale.",
    },
  },

  {
    id: "ui-ux-product-design",
    slug: "ui-ux-product-design",
    name: "UI/UX Product Design",
    category: "Implementation & Integration",
    tagline: "Design that serves users, not just visual standards",
    shortDescription:
      "User research, interaction design, and interface design services that create digital experiences grounded in how users actually think and behave.",
    heroStatement:
      "The best interface is one users navigate without thinking about it.",
    overview:
      "Good product design is not about aesthetics — it is about reducing friction, building user confidence, and making complex functionality accessible without training. Our UI/UX Product Design service provides the research, interaction design, and interface design capability to create digital experiences that genuinely work for users, while meeting the functional, accessibility, and brand requirements the organization needs.",
    problemsAddressed: [
      "Product adoption below expectation due to poor usability or user experience quality",
      "Development teams shipping features without adequate user research or design validation",
      "Inconsistent interfaces across products and platforms creating user confusion and support overhead",
      "Accessibility and compliance requirements not embedded in the design process",
    ],
    capabilities: [
      {
        name: "User Research",
        description:
          "Conduct structured user research — interviews, usability testing, and behavioural analysis — to ground design decisions in real user insight.",
      },
      {
        name: "Interaction Design",
        description:
          "Design the flows, interactions, and information architecture that make complex functionality intuitive and efficient.",
      },
      {
        name: "Interface Design",
        description:
          "Create high-quality, consistent interface designs that meet visual standards, brand requirements, and accessibility guidelines.",
      },
      {
        name: "Design Systems",
        description:
          "Build and maintain design systems that ensure consistency across products while accelerating design and development velocity.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Research & Discovery",
        description:
          "Understand users, their tasks, and the context in which they interact with the product.",
      },
      {
        step: "02",
        title: "Information Architecture",
        description:
          "Design the structure, navigation, and content organization of the product.",
      },
      {
        step: "03",
        title: "Interaction & Visual Design",
        description:
          "Design detailed interactions, components, and interfaces with iterative user validation.",
      },
      {
        step: "04",
        title: "Handoff & Support",
        description:
          "Deliver production-ready designs with specifications and support for development implementation.",
      },
    ],
    outcomes: [
      {
        title: "Improved product usability",
        description:
          "Interfaces that users can navigate effectively, reducing support burden and increasing adoption.",
      },
      {
        title: "Design consistency",
        description:
          "A coherent design language across products and touchpoints that builds user confidence and brand recognition.",
      },
    ],
    faqs: [
      {
        question: "Do you work within existing brand and design systems?",
        answer:
          "Yes. We work within existing design systems and brand guidelines where they exist, extending them where necessary rather than replacing them.",
      },
    ],
    relatedProducts: [
      "rico-spark",
      "rico-engage",
      "rico-journey",
      "rico-analytics",
    ],
    relatedServices: [
      "web-application-development",
      "mobile-application-development",
      "custom-software-development",
    ],
    seo: {
      title: "UI/UX Product Design Services | Ricoz",
      description:
        "User research, interaction design, and interface design services for digital products that genuinely serve their users.",
    },
  },

  // ─── Batch 3: Data & Intelligence (6 new) ─────────────────────────────────

  {
    id: "business-intelligence-solutions",
    slug: "business-intelligence-solutions",
    name: "Business Intelligence Solutions",
    category: "Data & Intelligence",
    tagline: "Turning operational data into decisions leadership can act on",
    shortDescription:
      "End-to-end BI delivery — from data modelling and warehouse design through dashboard development and self-service analytics — that gives leadership and operational teams reliable, decision-ready insight.",
    heroStatement:
      "Intelligence is only useful when it reaches the right person at the right moment.",
    overview:
      "Many organizations invest in data infrastructure without building the BI layer that converts data into insight. Reports are produced, but they are slow, inconsistent, or not trusted enough to drive decisions. Our Business Intelligence Solutions service designs and builds the semantic layer, reporting infrastructure, and self-service capabilities that put reliable, governed insight in the hands of the people who need it.",
    problemsAddressed: [
      "Reporting inconsistent across teams because there is no single authoritative data source",
      "Dashboards and reports produced manually, consuming analyst time without providing real-time visibility",
      "Leadership decisions based on incomplete or unvalidated data",
      "BI tools in place but adoption low due to poor data quality or usability",
    ],
    capabilities: [
      {
        name: "Data Modelling",
        description:
          "Design dimensional data models and semantic layers that make complex data accessible and consistent for reporting and analysis.",
      },
      {
        name: "Dashboard & Report Development",
        description:
          "Build production dashboards and reports that deliver the right metrics to the right audiences with clear, actionable presentation.",
      },
      {
        name: "Self-Service Analytics",
        description:
          "Configure and govern self-service analytics capabilities that allow business users to explore data safely without IT dependency.",
      },
      {
        name: "Data Quality & Governance",
        description:
          "Establish the data quality processes and governance frameworks that make BI outputs trustworthy at the point of decision.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Requirements & Data Assessment",
        description:
          "Understand the decisions that need to be supported and assess the data available to support them.",
      },
      {
        step: "02",
        title: "Data Model & Architecture",
        description:
          "Design the data models, warehouse structure, and BI layer architecture.",
      },
      {
        step: "03",
        title: "Build & Validate",
        description:
          "Develop dashboards, reports, and self-service capabilities with user validation throughout.",
      },
      {
        step: "04",
        title: "Deploy & Govern",
        description:
          "Deploy to production with governance frameworks, training, and ongoing support.",
      },
    ],
    outcomes: [
      {
        title: "Trusted reporting",
        description:
          "Reports and dashboards that users rely on because the data underpinning them is accurate and consistently defined.",
      },
      {
        title: "Faster, better decisions",
        description:
          "Leadership and operational teams making decisions faster and with greater confidence due to reliable data access.",
      },
    ],
    faqs: [
      {
        question: "Which BI platforms do you work with?",
        answer:
          "We work with major BI platforms and can advise on platform selection where that decision is still open. Platform recommendation is based on your data infrastructure, team capability, and use-case requirements.",
      },
    ],
    relatedProducts: [
      "rico-viz",
      "rico-report",
      "rico-analytics",
      "rico-metrics",
    ],
    relatedServices: [
      "data-analytics-services",
      "data-process-modernization",
      "marketing-analytics",
    ],
    seo: {
      title: "Business Intelligence Solutions | Ricoz",
      description:
        "End-to-end BI delivery — data modelling, dashboard development, self-service analytics, and data governance for decision-ready insight.",
    },
  },

  {
    id: "data-security-consulting",
    slug: "data-security-consulting",
    name: "Data Security Consulting",
    category: "Data & Intelligence",
    tagline:
      "Protecting organizational data through structured security strategy",
    shortDescription:
      "Advisory services for organizations that need to understand, manage, and improve the security of their data assets — covering classification, access controls, encryption, and compliance obligations.",
    heroStatement:
      "Data is your most sensitive asset — the security around it should reflect that.",
    overview:
      "Data security is not simply a technical control problem. It requires a clear understanding of what data matters most, where it lives, who should be able to access it, and how to detect and respond when something goes wrong. Our Data Security Consulting service helps organizations develop and implement a structured approach to data security — from classification and access governance through encryption architecture and breach response planning.",
    problemsAddressed: [
      "No structured data classification framework governing how sensitive data is handled across the organization",
      "Data access controls inconsistent or inadequately governed, creating insider risk and compliance exposure",
      "Encryption and key management not implemented consistently across data at rest and in transit",
      "Data security posture not adequately assessed ahead of regulatory audit or certification",
    ],
    capabilities: [
      {
        name: "Data Classification",
        description:
          "Design and implement data classification frameworks that categorize data by sensitivity and apply appropriate handling requirements.",
      },
      {
        name: "Access Governance",
        description:
          "Review and redesign data access controls to ensure the principle of least privilege is applied consistently across data assets.",
      },
      {
        name: "Encryption Architecture",
        description:
          "Assess and design encryption and key management architectures for data at rest, in transit, and in use.",
      },
      {
        name: "Compliance Assessment",
        description:
          "Evaluate data security posture against relevant regulatory requirements and industry standards.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Data Security Assessment",
        description:
          "Assess the current data security posture, identifying gaps, risks, and compliance exposure.",
      },
      {
        step: "02",
        title: "Classification & Governance Design",
        description:
          "Design the classification framework and access governance model appropriate to the data landscape.",
      },
      {
        step: "03",
        title: "Controls Implementation",
        description:
          "Implement prioritized security controls across access, encryption, and monitoring.",
      },
      {
        step: "04",
        title: "Ongoing Governance",
        description:
          "Establish the processes and responsibilities for sustained data security governance.",
      },
    ],
    outcomes: [
      {
        title: "Structured data protection",
        description:
          "A coherent data security framework that applies appropriate controls based on data sensitivity and business risk.",
      },
      {
        title: "Reduced compliance exposure",
        description:
          "A documented, governed data security posture that supports regulatory audit and certification requirements.",
      },
    ],
    faqs: [
      {
        question:
          "Is this service separate from your Cybersecurity Advisory service?",
        answer:
          "Yes. Cybersecurity Advisory addresses broader security strategy and posture. Data Security Consulting focuses specifically on data assets — classification, access governance, encryption, and data-specific compliance requirements.",
      },
    ],
    relatedProducts: ["rico-vault", "rico-shield", "rico-data", "rico-comply"],
    relatedServices: [
      "cybersecurity-advisory",
      "data-analytics-services",
      "identity-access-management",
    ],
    seo: {
      title: "Data Security Consulting | Ricoz",
      description:
        "Data classification, access governance, encryption architecture, and compliance advisory for organizations managing sensitive data assets.",
    },
  },

  {
    id: "quality-assurance-testing",
    slug: "quality-assurance-testing",
    name: "Quality Assurance & Testing",
    category: "Data & Intelligence",
    tagline: "Systematic quality assurance that finds issues before users do",
    shortDescription:
      "Structured QA and testing services — from test strategy through manual and automated testing — that improve software quality and reduce the risk of production failures.",
    heroStatement:
      "Quality assurance is not a phase at the end of delivery — it is a discipline throughout it.",
    overview:
      "Software quality failures in production are expensive — in remediation cost, user trust, and organizational confidence in the development process. Our Quality Assurance & Testing service establishes and executes structured testing approaches that identify defects early, validate functionality comprehensively, and give delivery teams the confidence to release with appropriate assurance. We cover functional testing, performance testing, security testing, and test automation strategy.",
    problemsAddressed: [
      "High defect rates in production software releasing that could have been caught earlier",
      "Test coverage insufficient or inconsistently applied across the development lifecycle",
      "No test automation strategy, making regression testing slow and expensive as systems grow",
      "Performance and load issues discovered in production rather than during development",
    ],
    capabilities: [
      {
        name: "Test Strategy & Planning",
        description:
          "Define test strategies, coverage requirements, and quality gates appropriate to the system and delivery approach.",
      },
      {
        name: "Functional Testing",
        description:
          "Execute structured functional testing across unit, integration, system, and acceptance levels with clear coverage evidence.",
      },
      {
        name: "Test Automation",
        description:
          "Design and build automated test suites that enable rapid, reliable regression testing as systems evolve.",
      },
      {
        name: "Performance & Load Testing",
        description:
          "Design and execute performance tests that validate system behaviour under expected and peak load conditions.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Test Strategy",
        description:
          "Define the test approach, coverage requirements, tooling, and quality gates.",
      },
      {
        step: "02",
        title: "Test Design",
        description:
          "Develop test cases, automation scripts, and test data aligned to functional requirements.",
      },
      {
        step: "03",
        title: "Test Execution",
        description:
          "Execute testing phases systematically with defect management and coverage reporting.",
      },
      {
        step: "04",
        title: "Reporting & Release Gate",
        description:
          "Provide quality assurance sign-off and post-release defect monitoring.",
      },
    ],
    outcomes: [
      {
        title: "Reduced production defects",
        description:
          "Systematic testing that identifies and addresses quality issues before they reach production environments.",
      },
      {
        title: "Confident releases",
        description:
          "Release processes backed by evidence-based quality assurance rather than hope and manual verification.",
      },
    ],
    faqs: [
      {
        question:
          "Do you provide embedded QA resource within development teams?",
        answer:
          "Yes. We can provide embedded QA capability within existing delivery teams, or conduct independent QA alongside an in-house development programme.",
      },
    ],
    relatedProducts: [
      "rico-testlab",
      "rico-build",
      "rico-observe",
      "rico-deploy",
    ],
    relatedServices: [
      "custom-software-development",
      "software-architecture-engineering",
      "product-engineering-maintenance",
    ],
    seo: {
      title: "Quality Assurance & Testing Services | Ricoz",
      description:
        "Test strategy, functional testing, test automation, and performance testing to improve software quality and reduce production defects.",
    },
  },

  {
    id: "product-engineering-maintenance",
    slug: "product-engineering-maintenance",
    name: "Product Engineering & Maintenance",
    category: "Data & Intelligence",
    tagline:
      "Keeping production software healthy, current, and continuously improving",
    shortDescription:
      "Structured product engineering and maintenance services that keep live software systems performing, secure, and aligned with evolving business requirements after initial delivery.",
    heroStatement:
      "Software that is not actively maintained becomes a liability faster than most organizations expect.",
    overview:
      "The work of software does not end at launch. Live applications require active maintenance — dependency updates, security patches, performance optimization, defect remediation, and incremental feature development — to remain secure, performant, and fit for purpose as user needs and the technical landscape evolve. Our Product Engineering & Maintenance service provides structured, ongoing engineering support that treats live production systems with the operational discipline they require.",
    problemsAddressed: [
      "Live software systems accumulating technical debt, security vulnerabilities, and performance degradation over time",
      "No structured maintenance regime, leading to emergency remediation cycles and operational disruption",
      "Product feature development stalled because insufficient engineering capacity is dedicated to the live product",
      "Third-party dependency updates and security patches not managed proactively",
    ],
    capabilities: [
      {
        name: "Preventive Maintenance",
        description:
          "Proactive management of dependencies, security patches, platform updates, and technical debt to prevent issues before they arise.",
      },
      {
        name: "Performance Management",
        description:
          "Monitor, diagnose, and optimize application performance to maintain the user experience quality the live product requires.",
      },
      {
        name: "Defect Management",
        description:
          "Systematic identification, prioritization, and resolution of production defects with appropriate severity management.",
      },
      {
        name: "Incremental Feature Development",
        description:
          "Deliver focused feature additions and improvements within a structured release cadence aligned to business priorities.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Onboarding & Assessment",
        description:
          "Understand the system, its current state, known issues, and maintenance requirements.",
      },
      {
        step: "02",
        title: "Maintenance Programme",
        description:
          "Establish the maintenance regime, release cadence, and escalation procedures.",
      },
      {
        step: "03",
        title: "Ongoing Operations",
        description:
          "Execute the maintenance programme with structured reporting and continuous quality management.",
      },
      {
        step: "04",
        title: "Review & Evolve",
        description:
          "Regularly review product health and adapt the maintenance approach as requirements evolve.",
      },
    ],
    outcomes: [
      {
        title: "Stable, secure production system",
        description:
          "A live product that remains secure, performant, and operationally stable through structured maintenance.",
      },
      {
        title: "Predictable delivery cadence",
        description:
          "A managed release process that delivers improvements and defect fixes predictably without operational disruption.",
      },
    ],
    faqs: [
      {
        question:
          "Do you provide maintenance for software you did not originally build?",
        answer:
          "Yes. We provide maintenance services for existing systems, beginning with an onboarding assessment to establish a shared understanding of the codebase, architecture, and current state before taking on responsibility.",
      },
    ],
    relatedProducts: [
      "rico-observe",
      "rico-appmon",
      "rico-build",
      "rico-deploy",
    ],
    relatedServices: [
      "custom-software-development",
      "quality-assurance-testing",
      "software-architecture-engineering",
    ],
    seo: {
      title: "Product Engineering & Maintenance Services | Ricoz",
      description:
        "Structured engineering support for live software systems. Preventive maintenance, performance management, defect resolution, and incremental feature development.",
    },
  },

  {
    id: "data-process-modernization",
    slug: "data-process-modernization",
    name: "Data & Process Modernization",
    category: "Data & Intelligence",
    tagline:
      "Modernizing the data and process infrastructure that runs the organization",
    shortDescription:
      "Advisory and delivery for organizations modernizing their data infrastructure, business processes, and the integration between them — eliminating manual workarounds and fragmented data estates.",
    heroStatement:
      "The gap between how organizations operate and how their data flows is where efficiency is lost.",
    overview:
      "Many organizations carry decades of accumulated data architecture and business processes that were designed for a different operational environment. Fragmented data, manual reconciliation, and processes that loop around broken integrations create invisible overhead that compounds over time. Our Data & Process Modernization service addresses these root causes — modernizing data infrastructure, redesigning processes, and establishing the integration fabric that eliminates manual workarounds.",
    problemsAddressed: [
      "Business processes relying heavily on manual data handling and reconciliation between systems",
      "Data infrastructure consisting of fragmented, partially integrated sources with no single authoritative record",
      "Reporting and decision-making delayed by the time required to assemble and validate data manually",
      "Organizational growth increasing the overhead of legacy processes and data architectures faster than they can be addressed",
    ],
    capabilities: [
      {
        name: "Data Landscape Assessment",
        description:
          "Map and evaluate the current data architecture, sources, flows, and the processes that depend on them.",
      },
      {
        name: "Process & Data Redesign",
        description:
          "Redesign the target-state processes and data architecture to eliminate manual intervention and fragmentation.",
      },
      {
        name: "Integration & Automation",
        description:
          "Implement the integrations and process automation that replace manual workflows with reliable, governed data flows.",
      },
      {
        name: "Transition Management",
        description:
          "Manage the transition from current to target state with appropriate change management and operational continuity planning.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Current-State Analysis",
        description:
          "Map existing data flows, process dependencies, and the points of friction and manual intervention.",
      },
      {
        step: "02",
        title: "Target-State Design",
        description:
          "Design the modernized data and process architecture with clear improvement principles.",
      },
      {
        step: "03",
        title: "Phased Implementation",
        description:
          "Deliver modernization in controlled phases with clear success measures and rollback capability.",
      },
      {
        step: "04",
        title: "Stabilize & Operate",
        description:
          "Stabilize the modernized landscape and transition to operational governance.",
      },
    ],
    outcomes: [
      {
        title: "Eliminated manual overhead",
        description:
          "Reduction in the manual data handling and reconciliation that consumes operational resource without adding value.",
      },
      {
        title: "Coherent data infrastructure",
        description:
          "A modernized data architecture that supports reliable, timely information flow across the organization.",
      },
    ],
    faqs: [
      {
        question: "How does this relate to Digital Transformation Consulting?",
        answer:
          "Digital Transformation Consulting addresses broad organizational and strategic transformation. Data & Process Modernization is more operationally focused — specifically targeting the data infrastructure and process layer that supports day-to-day operations.",
      },
    ],
    relatedProducts: ["rico-data", "rico-connect", "rico-process", "rico-flow"],
    relatedServices: [
      "data-analytics-services",
      "enterprise-systems-integration",
      "process-optimization",
    ],
    seo: {
      title: "Data & Process Modernization Services | Ricoz",
      description:
        "Modernize fragmented data infrastructure and manual business processes. Integration, automation, and data architecture redesign for operational efficiency.",
    },
  },

  {
    id: "workflow-automation",
    slug: "workflow-automation",
    name: "Workflow Automation",
    category: "Data & Intelligence",
    tagline: "Replacing manual coordination with reliable, governed automation",
    shortDescription:
      "Design and implementation of workflow automation solutions that eliminate repetitive manual tasks, reduce error rates, and free operational teams to focus on higher-value activity.",
    heroStatement:
      "Work that happens reliably without human intervention is the best kind of operational leverage.",
    overview:
      "Many organizations are operating with significant manual coordination overhead — approvals routed by email, data transferred by spreadsheet, status updates tracked in shared documents. Our Workflow Automation service maps these manual flows, identifies the highest-value automation opportunities, and delivers the automation solutions that replace them with reliable, governed processes. We work across RPA, low-code workflow tools, and custom automation depending on the use case.",
    problemsAddressed: [
      "High-volume, repetitive administrative tasks consuming operational resource disproportionate to their value",
      "Multi-step approval workflows slow and error-prone due to reliance on email and manual handoffs",
      "Data entry and transfer between systems creating accuracy risk and operational delay",
      "Compliance and audit trail requirements not met by current manual processes",
    ],
    capabilities: [
      {
        name: "Automation Discovery",
        description:
          "Identify and prioritize automation candidates based on volume, complexity, error rate, and business impact.",
      },
      {
        name: "Workflow Design",
        description:
          "Design automated workflow solutions with appropriate logic, exception handling, and audit capabilities.",
      },
      {
        name: "Automation Development",
        description:
          "Build automation using RPA, low-code platforms, or custom development depending on the process requirements.",
      },
      {
        name: "Governance & Monitoring",
        description:
          "Establish the governance framework, monitoring, and exception management that keeps automation reliable over time.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Process Discovery",
        description:
          "Map target processes, quantify volumes, and assess automation opportunity and complexity.",
      },
      {
        step: "02",
        title: "Solution Design",
        description:
          "Design the automation solution with exception handling, controls, and integration points.",
      },
      {
        step: "03",
        title: "Build & Test",
        description:
          "Develop and test the automation with thorough scenario and exception coverage.",
      },
      {
        step: "04",
        title: "Deploy & Operate",
        description:
          "Deploy to production with monitoring, alerting, and an operational support model.",
      },
    ],
    outcomes: [
      {
        title: "Reduced manual effort",
        description:
          "Measurable reduction in the time operational teams spend on repetitive, low-value administrative tasks.",
      },
      {
        title: "Improved process reliability",
        description:
          "Consistent, auditable process execution that reduces error rates and compliance risk.",
      },
    ],
    faqs: [
      {
        question: "Do you use RPA or more modern automation approaches?",
        answer:
          "We select the automation technology based on the process requirements. RPA is appropriate for UI-based automation of legacy systems; API-based and workflow platform approaches are preferred where the underlying systems support them.",
      },
    ],
    relatedProducts: [
      "rico-automate",
      "rico-flow",
      "rico-trigger",
      "rico-rules",
    ],
    relatedServices: [
      "process-optimization",
      "data-process-modernization",
      "enterprise-systems-integration",
    ],
    seo: {
      title: "Workflow Automation Services | Ricoz",
      description:
        "Workflow automation design and delivery. Replace manual coordination, approvals, and data transfer with reliable, governed automation solutions.",
    },
  },

  // ─── Batch 4: Security & Compliance (5 new) ───────────────────────────────

  {
    id: "security-architecture-review",
    slug: "security-architecture-review",
    name: "Security Architecture Review",
    category: "Security & Compliance",
    tagline:
      "Independent assessment of your security architecture against real-world threats",
    shortDescription:
      "A structured, independent review of your organization's security architecture — covering design principles, control coverage, integration points, and alignment with current threat patterns.",
    heroStatement:
      "Security architecture that looks sound on paper can fail under operational conditions unless tested by independent scrutiny.",
    overview:
      "Security architecture reviews require more than checking whether controls are present — they require evaluating whether those controls are designed correctly, positioned appropriately, and coherent as a system. Our Security Architecture Review service provides independent, structured assessment of your security architecture from a threat-informed perspective, identifying design weaknesses that vulnerability scanning and compliance audits do not surface.",
    problemsAddressed: [
      "Security controls in place but never independently validated for architectural coherence",
      "New platforms or significant infrastructure changes requiring architecture-level security review",
      "Security architecture not reviewed since original design, despite significant technology and threat landscape change",
      "Board or regulator requesting evidence of independent security architecture assurance",
    ],
    capabilities: [
      {
        name: "Architecture Analysis",
        description:
          "Review the security architecture across network, application, data, and identity layers against documented threat models.",
      },
      {
        name: "Control Coverage Assessment",
        description:
          "Evaluate the coverage, placement, and effectiveness of security controls against the attack vectors relevant to your environment.",
      },
      {
        name: "Design Weakness Identification",
        description:
          "Identify architectural weaknesses that increase risk — not just missing controls, but misplaced or ineffective ones.",
      },
      {
        name: "Remediation Roadmap",
        description:
          "Prioritize findings by risk and develop a structured remediation roadmap with clear recommendations.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Scope & Threat Model",
        description:
          "Define the review scope and develop or validate the threat model for the target environment.",
      },
      {
        step: "02",
        title: "Architecture Review",
        description:
          "Conduct structured review of architecture documentation, control design, and configuration evidence.",
      },
      {
        step: "03",
        title: "Findings Analysis",
        description:
          "Analyze findings for architectural significance and rate by risk impact.",
      },
      {
        step: "04",
        title: "Report & Remediation Plan",
        description:
          "Deliver the findings report and a prioritized remediation roadmap.",
      },
    ],
    outcomes: [
      {
        title: "Independent architecture assurance",
        description:
          "An evidence-based, independent view of whether the security architecture is fit for purpose given current threats.",
      },
      {
        title: "Prioritized improvement plan",
        description:
          "A risk-rated list of architectural improvements with a clear remediation sequence.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between this and a penetration test?",
        answer:
          "A penetration test validates whether specific controls can be bypassed under attack conditions. A security architecture review evaluates whether the architecture is fundamentally designed correctly — it operates at the design level rather than the exploitation level.",
      },
    ],
    relatedProducts: [
      "rico-shield",
      "rico-identity",
      "rico-comply",
      "rico-siem",
    ],
    relatedServices: [
      "cybersecurity-advisory",
      "vulnerability-assessment",
      "identity-access-management",
    ],
    seo: {
      title: "Security Architecture Review | Ricoz",
      description:
        "Independent security architecture review covering control design, threat coverage, and architectural weaknesses across enterprise environments.",
    },
  },

  {
    id: "vulnerability-assessment",
    slug: "vulnerability-assessment",
    name: "Vulnerability Assessment",
    category: "Security & Compliance",
    tagline:
      "Systematic identification and prioritization of exploitable weaknesses",
    shortDescription:
      "Structured vulnerability assessment services that identify, validate, and prioritize security weaknesses across your infrastructure, applications, and network environment.",
    heroStatement:
      "You cannot remediate vulnerabilities you do not know about — and not all known vulnerabilities carry equal risk.",
    overview:
      "Vulnerability management is a continuous discipline, not a one-time exercise. Our Vulnerability Assessment service provides structured identification and risk-based prioritization of exploitable weaknesses across your technology estate — giving security and operations teams the clear, actionable intelligence needed to remediate what matters most without being overwhelmed by low-priority findings.",
    problemsAddressed: [
      "Security scanning producing large, unvalidated vulnerability lists with no remediation prioritization",
      "No regular, structured vulnerability assessment programme across the technology estate",
      "Vulnerability management reactive rather than proactive, leading to slow response to significant exposures",
      "External-facing systems and critical internal systems not assessed with sufficient regularity",
    ],
    capabilities: [
      {
        name: "Infrastructure Scanning",
        description:
          "Perform authenticated and unauthenticated scanning across network infrastructure, servers, and endpoints.",
      },
      {
        name: "Application Vulnerability Assessment",
        description:
          "Assess web and application-layer vulnerabilities using structured testing methodologies.",
      },
      {
        name: "Risk-Based Prioritization",
        description:
          "Validate and prioritize findings by exploitability, asset criticality, and potential business impact.",
      },
      {
        name: "Remediation Guidance",
        description:
          "Provide clear, technically accurate remediation guidance for each identified vulnerability.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Scope & Asset Inventory",
        description:
          "Define the assessment scope and confirm the asset inventory to be covered.",
      },
      {
        step: "02",
        title: "Assessment Execution",
        description: "Execute scanning and testing across in-scope assets.",
      },
      {
        step: "03",
        title: "Validation & Prioritization",
        description:
          "Validate findings and prioritize by risk, exploitability, and asset criticality.",
      },
      {
        step: "04",
        title: "Reporting & Remediation Support",
        description:
          "Deliver findings report with remediation guidance and support the remediation programme.",
      },
    ],
    outcomes: [
      {
        title: "Clear vulnerability picture",
        description:
          "A validated, prioritized view of exploitable weaknesses that operations and security teams can act on.",
      },
      {
        title: "Structured remediation programme",
        description:
          "A risk-ordered remediation plan that focuses effort on the vulnerabilities with the highest potential impact.",
      },
    ],
    faqs: [
      {
        question: "How often should vulnerability assessments be conducted?",
        answer:
          "For most organizations, critical infrastructure should be assessed quarterly and after significant changes. The appropriate frequency depends on the threat profile, regulatory obligations, and pace of change in the environment.",
      },
    ],
    relatedProducts: [
      "rico-protect",
      "rico-shield",
      "rico-threat",
      "rico-respond",
    ],
    relatedServices: [
      "cybersecurity-advisory",
      "security-architecture-review",
      "security-monitoring",
    ],
    seo: {
      title: "Vulnerability Assessment Services | Ricoz",
      description:
        "Structured vulnerability identification, validation, and risk-based prioritization across infrastructure, applications, and network environments.",
    },
  },

  {
    id: "identity-access-management",
    slug: "identity-access-management",
    name: "Identity & Access Management",
    category: "Security & Compliance",
    tagline: "Governing who can access what — and ensuring it stays that way",
    shortDescription:
      "Advisory and implementation services for organizations designing or strengthening their identity and access management architecture, controls, and governance processes.",
    heroStatement:
      "Identity is the new perimeter — and most breaches begin with a compromised or misconfigured identity.",
    overview:
      "Identity and access management is foundational to enterprise security — yet many organizations operate with identity infrastructures that have grown organically, accumulating inconsistent access grants, dormant accounts, over-privileged roles, and authentication weaknesses. Our Identity & Access Management service provides the strategy, architecture, and implementation capability to establish a coherent, governed identity infrastructure that reduces attack surface and supports both security and operational efficiency.",
    problemsAddressed: [
      "Access grants accumulated over time without regular review or de-provisioning discipline",
      "Multiple identity providers operating in silos with no coherent federated identity model",
      "Privileged access not managed separately from standard user access, creating significant risk",
      "Authentication standards inconsistent — MFA not enforced across all sensitive systems",
    ],
    capabilities: [
      {
        name: "IAM Architecture",
        description:
          "Design a coherent identity architecture covering authentication, authorization, federation, and privileged access across the environment.",
      },
      {
        name: "Access Governance",
        description:
          "Establish processes for access request, approval, review, and de-provisioning that maintain the principle of least privilege.",
      },
      {
        name: "Privileged Access Management",
        description:
          "Design and implement privileged access management controls that reduce the risk of insider threat and lateral movement.",
      },
      {
        name: "Directory & Federation",
        description:
          "Rationalize and integrate directory services and implement federation standards that support secure SSO across systems.",
      },
    ],
    process: [
      {
        step: "01",
        title: "IAM Assessment",
        description:
          "Assess the current identity infrastructure, access governance maturity, and risk exposure.",
      },
      {
        step: "02",
        title: "Architecture Design",
        description: "Design the target IAM architecture and governance model.",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "Implement identity controls, PAM, directory rationalization, and governance processes.",
      },
      {
        step: "04",
        title: "Operate & Review",
        description:
          "Establish the operational processes for sustained access governance and periodic access review.",
      },
    ],
    outcomes: [
      {
        title: "Controlled access landscape",
        description:
          "An identity environment where access grants are appropriate, governed, and regularly reviewed.",
      },
      {
        title: "Reduced identity-based risk",
        description:
          "Significantly reduced attack surface through enforcement of least privilege, MFA, and privileged access controls.",
      },
    ],
    faqs: [
      {
        question: "Do you work with specific IAM platforms?",
        answer:
          "We work across major IAM platforms and can advise on platform selection. Our focus is on architecture and governance outcomes rather than specific vendor solutions.",
      },
    ],
    relatedProducts: [
      "rico-identity",
      "rico-access",
      "rico-comply",
      "rico-shield",
    ],
    relatedServices: [
      "cybersecurity-advisory",
      "security-architecture-review",
      "data-security-consulting",
    ],
    seo: {
      title: "Identity & Access Management Services | Ricoz",
      description:
        "IAM architecture, access governance, privileged access management, and directory rationalization for complex enterprise environments.",
    },
  },

  {
    id: "security-monitoring",
    slug: "security-monitoring",
    name: "Security Monitoring",
    category: "Security & Compliance",
    tagline:
      "Continuous visibility into security events across your environment",
    shortDescription:
      "Security monitoring strategy, tooling design, and operational advisory that gives organizations meaningful, timely visibility into security events and threats across their technology landscape.",
    heroStatement:
      "You cannot respond to threats you cannot see — and delayed detection multiplies the impact of every incident.",
    overview:
      "Effective security monitoring is one of the most operationally demanding capabilities in enterprise security. It requires the right telemetry sources, a well-tuned detection logic, qualified analysts, and response processes that work under time pressure. Our Security Monitoring service helps organizations design, implement, and mature their security monitoring capability — from log collection and SIEM architecture through detection content and operational response workflows.",
    problemsAddressed: [
      "No centralized security monitoring capability — incidents discovered by users rather than security operations",
      "SIEM deployed but producing excessive alert noise with low-fidelity detections",
      "Log coverage inadequate — critical systems not feeding into the monitoring platform",
      "Security monitoring capability not covering cloud environments alongside on-premises infrastructure",
    ],
    capabilities: [
      {
        name: "Monitoring Architecture",
        description:
          "Design the log collection, SIEM, and detection architecture appropriate to the environment's scale and threat profile.",
      },
      {
        name: "Detection Engineering",
        description:
          "Develop and tune detection content — rules, correlation logic, and behavioural baselines — that produce high-fidelity, actionable alerts.",
      },
      {
        name: "Log Coverage Assessment",
        description:
          "Identify gaps in log collection and telemetry that leave blind spots in security monitoring coverage.",
      },
      {
        name: "Response Workflow Design",
        description:
          "Design and implement the incident triage, investigation, and escalation workflows that make alert response efficient.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Coverage Assessment",
        description:
          "Assess current monitoring coverage, log sources, and detection capability against the threat model.",
      },
      {
        step: "02",
        title: "Architecture & Design",
        description:
          "Design the monitoring architecture, detection content strategy, and response workflows.",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "Implement log collection, SIEM configuration, and detection content.",
      },
      {
        step: "04",
        title: "Tune & Mature",
        description:
          "Tune detection logic, reduce false positives, and mature the monitoring capability over time.",
      },
    ],
    outcomes: [
      {
        title: "Meaningful security visibility",
        description:
          "Timely, high-fidelity visibility into security events across the environment — not just log volume.",
      },
      {
        title: "Faster threat detection",
        description:
          "Reduction in mean time to detect security incidents through well-designed detection logic and coverage.",
      },
    ],
    faqs: [
      {
        question: "Do you operate a managed SOC service?",
        answer:
          "Our Security Monitoring service focuses on strategy, architecture, and design of the monitoring capability. For managed SOC delivery, we can advise on service provider selection and help you evaluate options against your requirements.",
      },
    ],
    relatedProducts: [
      "rico-siem",
      "rico-protect",
      "rico-respond",
      "rico-threat",
    ],
    relatedServices: [
      "cybersecurity-advisory",
      "vulnerability-assessment",
      "security-architecture-review",
    ],
    seo: {
      title: "Security Monitoring Services | Ricoz",
      description:
        "Security monitoring architecture, SIEM design, detection engineering, and response workflow development for enterprise environments.",
    },
  },

  {
    id: "cybersecurity-assessment",
    slug: "cybersecurity-assessment",
    name: "Cybersecurity Assessment",
    category: "Security & Compliance",
    tagline: "A structured baseline view of your current security posture",
    shortDescription:
      "A structured, time-boxed cybersecurity assessment that establishes a current-state view of your security posture, identifies the most significant gaps, and provides a prioritized improvement plan.",
    heroStatement:
      "Before you can improve your security posture, you need an honest view of where it stands.",
    overview:
      "Organizations regularly invest in security without a clear baseline view of where they are — leading to misaligned spend and residual risk that a more structured assessment would have identified. Our Cybersecurity Assessment service delivers a rigorous, time-boxed evaluation of your security posture across people, process, and technology dimensions, producing findings and a prioritized improvement plan that leadership can act on immediately.",
    problemsAddressed: [
      "No recent independent baseline assessment of the organization's overall security posture",
      "Security investments not informed by a structured view of risk and control gaps",
      "Preparation required for regulatory audit, certification, or board-level security review",
      "Post-incident need to establish what controls were missing or failed",
    ],
    capabilities: [
      {
        name: "Posture Assessment",
        description:
          "Evaluate security posture across key domains including governance, identity, network, endpoint, data, and cloud security.",
      },
      {
        name: "Policy & Process Review",
        description:
          "Assess the adequacy and operational effectiveness of security policies, processes, and governance structures.",
      },
      {
        name: "Control Gap Analysis",
        description:
          "Identify control gaps relative to a recognized framework — such as NIST CSF, ISO 27001, or CIS Controls — and quantify risk.",
      },
      {
        name: "Prioritized Recommendations",
        description:
          "Deliver a structured set of recommendations ordered by risk impact and organizational feasibility.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Scope & Framework",
        description:
          "Define the assessment scope and the framework or standard against which posture will be evaluated.",
      },
      {
        step: "02",
        title: "Evidence Collection",
        description:
          "Gather evidence through interviews, documentation review, and configuration assessment.",
      },
      {
        step: "03",
        title: "Analysis & Gap Identification",
        description:
          "Analyse evidence to identify control gaps, policy weaknesses, and operational risk.",
      },
      {
        step: "04",
        title: "Report & Prioritization",
        description:
          "Deliver findings, risk ratings, and a prioritized improvement roadmap.",
      },
    ],
    outcomes: [
      {
        title: "Baseline security posture",
        description:
          "An evidence-based, current-state view of security maturity that the organization can use as a starting point for improvement.",
      },
      {
        title: "Risk-ordered improvement plan",
        description:
          "A clear, prioritized set of security improvements that addresses the most significant risks first.",
      },
    ],
    faqs: [
      {
        question:
          "How is a cybersecurity assessment different from a security audit?",
        answer:
          "A formal security audit typically validates compliance against a specific standard. A cybersecurity assessment evaluates the practical effectiveness of security controls against real threats — the focus is on risk reduction rather than compliance status.",
      },
    ],
    relatedProducts: [
      "rico-shield",
      "rico-comply",
      "rico-respond",
      "rico-siem",
    ],
    relatedServices: [
      "cybersecurity-advisory",
      "security-architecture-review",
      "vulnerability-assessment",
    ],
    seo: {
      title: "Cybersecurity Assessment Services | Ricoz",
      description:
        "Structured cybersecurity posture assessment. Control gap analysis, policy review, and a prioritized improvement roadmap for enterprise security programmes.",
    },
  },

  // ─── Batch 5: Operations & Efficiency (9 new) ─────────────────────────────

  {
    id: "it-infrastructure-setup",
    slug: "it-infrastructure-setup",
    name: "IT Infrastructure Setup",
    category: "Operations & Efficiency",
    tagline: "Building reliable IT foundations for new or expanding operations",
    shortDescription:
      "End-to-end IT infrastructure setup for organizations establishing new offices, expanding locations, or building the foundational technology infrastructure for a new business entity.",
    heroStatement:
      "The quality of your IT foundation determines the operational ceiling of everything built on top of it.",
    overview:
      "Getting IT infrastructure right at setup avoids the expensive retrofitting that poorly planned deployments require. Our IT Infrastructure Setup service provides the design, procurement advisory, implementation, and documentation needed to build reliable, scalable, and secure IT foundations — covering network, compute, storage, endpoint, and connectivity requirements for organizations establishing new operations or sites.",
    problemsAddressed: [
      "New office or site opening without a structured IT infrastructure plan and setup programme",
      "Existing IT infrastructure not meeting reliability, performance, or security requirements",
      "IT setup managed informally, resulting in inconsistent configurations and undocumented environments",
      "Rapid organizational growth outpacing the capacity of current infrastructure planning processes",
    ],
    capabilities: [
      {
        name: "Infrastructure Design",
        description:
          "Design network topology, compute, storage, and connectivity architectures appropriate to the site and organizational requirements.",
      },
      {
        name: "Procurement Advisory",
        description:
          "Advise on hardware, software, and service procurement to meet technical requirements within budget constraints.",
      },
      {
        name: "Implementation & Configuration",
        description:
          "Deploy and configure infrastructure components to documented standards with full testing before handover.",
      },
      {
        name: "Documentation & Handover",
        description:
          "Produce comprehensive infrastructure documentation and complete a structured handover to the operational support team.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Requirements & Design",
        description:
          "Define infrastructure requirements and design the architecture for the new environment.",
      },
      {
        step: "02",
        title: "Procurement & Preparation",
        description:
          "Finalize hardware and software requirements and prepare for installation.",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "Deploy, configure, and test all infrastructure components to approved specifications.",
      },
      {
        step: "04",
        title: "Handover & Documentation",
        description:
          "Complete documentation, conduct handover training, and transition to operational support.",
      },
    ],
    outcomes: [
      {
        title: "Reliable operational foundation",
        description:
          "IT infrastructure that meets current requirements, operates reliably, and can support organizational growth.",
      },
      {
        title: "Documented environment",
        description:
          "A fully documented infrastructure that enables efficient ongoing management and reduces knowledge dependency on individuals.",
      },
    ],
    faqs: [
      {
        question: "Do you manage the procurement process?",
        answer:
          "We provide procurement advisory and specification support. The procurement transaction can be managed by us, by your internal team, or through your existing supplier relationships — depending on your preference.",
      },
    ],
    relatedProducts: ["rico-infra", "rico-techops", "rico-itsm"],
    relatedServices: [
      "managed-it-support",
      "network-infrastructure",
      "cloud-infrastructure-management",
    ],
    seo: {
      title: "IT Infrastructure Setup Services | Ricoz",
      description:
        "End-to-end IT infrastructure setup. Design, implementation, and documentation for new office environments, site expansions, and new organizational entities.",
    },
  },

  {
    id: "managed-it-support",
    slug: "managed-it-support",
    name: "Managed IT Support",
    category: "Operations & Efficiency",
    tagline: "Reliable IT support that keeps your organization operational",
    shortDescription:
      "Structured managed IT support services that provide responsive, professional IT assistance to end users and operational teams — reducing downtime and IT administrative burden.",
    heroStatement:
      "IT support is not just a cost centre — it is the operational reliability your people depend on every day.",
    overview:
      "Many organizations carry disproportionate IT operational overhead because their support model has grown reactively rather than being designed for efficiency. Our Managed IT Support service provides structured, SLA-backed IT support across service desk, desktop management, and operational issue resolution — reducing the burden on internal teams and improving the consistency and speed of IT service delivery.",
    problemsAddressed: [
      "IT support response times inconsistent and often too slow for the operational impact of the issues raised",
      "IT support model relying on informal knowledge rather than documented processes and runbooks",
      "End-user experience of IT support below expectation, impacting productivity and satisfaction",
      "Internal IT team spending too much time on reactive support rather than strategic or development activity",
    ],
    capabilities: [
      {
        name: "Service Desk Operations",
        description:
          "Operate a structured service desk with defined SLAs, incident management, and escalation procedures.",
      },
      {
        name: "Desktop & Endpoint Support",
        description:
          "Provide support for end-user devices, software, and peripherals with remote and on-site capability as required.",
      },
      {
        name: "Incident & Problem Management",
        description:
          "Apply ITIL-aligned incident and problem management disciplines to reduce incident frequency and resolution time.",
      },
      {
        name: "Reporting & Continuous Improvement",
        description:
          "Provide regular performance reporting and drive continuous improvement in service quality based on data.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Service Design",
        description:
          "Define service scope, SLAs, escalation paths, and operational procedures.",
      },
      {
        step: "02",
        title: "Transition",
        description:
          "Onboard systems, document environment, and transfer knowledge from existing support arrangements.",
      },
      {
        step: "03",
        title: "Steady-State Operations",
        description:
          "Operate the managed support service to agreed SLAs with regular performance reporting.",
      },
      {
        step: "04",
        title: "Review & Improve",
        description:
          "Conduct regular service reviews and implement improvements based on incident patterns and user feedback.",
      },
    ],
    outcomes: [
      {
        title: "Consistent IT service delivery",
        description:
          "Predictable, SLA-backed IT support that meets user expectations and reduces operational disruption.",
      },
      {
        title: "Freed internal capacity",
        description:
          "Internal teams able to focus on strategic activity rather than reactive IT support overhead.",
      },
    ],
    faqs: [
      {
        question: "Can you provide on-site support as well as remote?",
        answer:
          "Yes. Our managed support model can include scheduled or on-call on-site coverage depending on your location requirements and the nature of your IT environment.",
      },
    ],
    relatedProducts: [
      "rico-itsm",
      "rico-techops",
      "rico-endpoint",
      "rico-desk",
    ],
    relatedServices: [
      "it-infrastructure-setup",
      "it-helpdesk-services",
      "endpoint-management",
    ],
    seo: {
      title: "Managed IT Support Services | Ricoz",
      description:
        "Structured managed IT support with defined SLAs, incident management, and continuous improvement for enterprise organizations.",
    },
  },

  {
    id: "cloud-infrastructure-management",
    slug: "cloud-infrastructure-management",
    name: "Cloud Infrastructure Management",
    category: "Operations & Efficiency",
    tagline:
      "Keeping cloud environments secure, optimized, and operationally healthy",
    shortDescription:
      "Ongoing management, optimization, and governance of cloud infrastructure environments — ensuring cloud workloads operate securely and cost-effectively after migration or initial deployment.",
    heroStatement:
      "Cloud infrastructure that is not actively managed drifts toward cost inefficiency and security debt.",
    overview:
      "Cloud infrastructure requires sustained management discipline to remain secure, performant, and cost-effective. Without structured governance, cloud environments accumulate unused resources, security misconfigurations, unpatched systems, and cost overruns. Our Cloud Infrastructure Management service provides the operational frameworks, tooling, and expertise to manage cloud environments with the rigour they require — across FinOps, security posture, availability, and change management.",
    problemsAddressed: [
      "Cloud spend significantly above original projections with limited visibility into cost drivers",
      "Cloud security posture not actively governed, resulting in drifted configurations and compliance exposure",
      "Cloud environments managed reactively rather than through structured operational processes",
      "Cloud operations knowledge concentrated in a few individuals, creating delivery and continuity risk",
    ],
    capabilities: [
      {
        name: "Cloud FinOps",
        description:
          "Implement cost visibility, allocation, anomaly detection, and optimization practices that bring cloud spend under control.",
      },
      {
        name: "Security Posture Management",
        description:
          "Monitor and maintain cloud security configuration against organizational standards and compliance requirements.",
      },
      {
        name: "Availability & Performance",
        description:
          "Monitor availability and performance across cloud workloads with defined response processes for incidents.",
      },
      {
        name: "Change & Release Management",
        description:
          "Apply structured change management to cloud infrastructure, reducing the risk of uncontrolled configuration drift.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Environment Assessment",
        description:
          "Assess the current cloud environment, its configuration, cost profile, and operational gaps.",
      },
      {
        step: "02",
        title: "Governance Framework",
        description:
          "Establish the policies, processes, and tooling for cloud operational governance.",
      },
      {
        step: "03",
        title: "Steady-State Management",
        description:
          "Operate the cloud environment with structured processes for security, cost, and availability management.",
      },
      {
        step: "04",
        title: "Optimize & Evolve",
        description:
          "Continuously optimize the environment and adapt the operating model as workloads evolve.",
      },
    ],
    outcomes: [
      {
        title: "Controlled cloud costs",
        description:
          "Cloud spend visibility and optimization that keeps costs aligned to actual usage and business requirements.",
      },
      {
        title: "Secure, compliant cloud environment",
        description:
          "A continuously governed cloud posture that prevents security drift and supports compliance obligations.",
      },
    ],
    faqs: [
      {
        question: "Do you manage multi-cloud environments?",
        answer:
          "Yes. We manage environments across major cloud providers and can establish unified operational governance across multi-cloud deployments.",
      },
    ],
    relatedProducts: [
      "rico-infra",
      "rico-appmon",
      "rico-techops",
      "rico-comply",
    ],
    relatedServices: [
      "cloud-migration-services",
      "it-infrastructure-setup",
      "server-management",
    ],
    seo: {
      title: "Cloud Infrastructure Management | Ricoz",
      description:
        "Ongoing cloud infrastructure management. FinOps, security posture, availability monitoring, and change governance for enterprise cloud environments.",
    },
  },

  {
    id: "server-management",
    slug: "server-management",
    name: "Server Management",
    category: "Operations & Efficiency",
    tagline:
      "Proactive server management that prevents failures before they occur",
    shortDescription:
      "Structured server management services covering patching, performance monitoring, capacity planning, and incident response for on-premises and cloud-hosted server environments.",
    heroStatement:
      "Servers that are not actively managed fail at the worst possible time.",
    overview:
      "Server management is a continuous operational discipline — yet many organizations manage servers reactively, patching after vulnerabilities are exploited and investigating performance issues only after they have impacted users. Our Server Management service provides structured, proactive server management that reduces failure risk, maintains security compliance, and keeps server capacity aligned to demand.",
    problemsAddressed: [
      "Server patching not conducted on a regular, documented schedule, leaving known vulnerabilities unaddressed",
      "Server performance degradation identified by users rather than proactive monitoring",
      "Capacity planning absent, leading to performance issues or unplanned infrastructure spend",
      "Server management documentation incomplete or absent, creating knowledge dependency risk",
    ],
    capabilities: [
      {
        name: "Patch Management",
        description:
          "Manage operating system and middleware patching on a regular, documented schedule with appropriate testing before production deployment.",
      },
      {
        name: "Performance Monitoring",
        description:
          "Monitor server health, resource utilization, and performance with proactive alerting on anomalies and threshold breaches.",
      },
      {
        name: "Capacity Management",
        description:
          "Track capacity trends and plan infrastructure changes before demand exceeds available resource.",
      },
      {
        name: "Incident Response",
        description:
          "Respond to server incidents within defined SLAs with structured investigation and resolution processes.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Onboarding",
        description:
          "Document the server estate, establish baseline performance metrics, and define the management scope.",
      },
      {
        step: "02",
        title: "Monitoring Setup",
        description:
          "Deploy monitoring agents and configure alerts aligned to defined thresholds and SLAs.",
      },
      {
        step: "03",
        title: "Ongoing Management",
        description:
          "Execute patch schedules, respond to incidents, and manage capacity within the agreed service scope.",
      },
      {
        step: "04",
        title: "Reporting & Review",
        description:
          "Provide regular performance and incident reports and conduct service reviews.",
      },
    ],
    outcomes: [
      {
        title: "Reduced unplanned downtime",
        description:
          "Proactive management that catches potential failures before they affect users and operations.",
      },
      {
        title: "Maintained security compliance",
        description:
          "A patched, documented server estate that meets security and audit requirements.",
      },
    ],
    faqs: [
      {
        question: "Do you manage both Windows and Linux server environments?",
        answer:
          "Yes. We provide server management across Windows Server and major Linux distributions, as well as containerized and virtualized environments.",
      },
    ],
    relatedProducts: [
      "rico-infra",
      "rico-appmon",
      "rico-techops",
      "rico-itreport",
    ],
    relatedServices: [
      "cloud-infrastructure-management",
      "it-infrastructure-setup",
      "backup-disaster-recovery",
    ],
    seo: {
      title: "Server Management Services | Ricoz",
      description:
        "Proactive server management covering patching, performance monitoring, capacity planning, and incident response for enterprise server environments.",
    },
  },

  {
    id: "network-infrastructure",
    slug: "network-infrastructure",
    name: "Network Infrastructure",
    category: "Operations & Efficiency",
    tagline:
      "Designing and managing networks that carry the weight of the organization",
    shortDescription:
      "Network infrastructure design, implementation, and management services for organizations that need reliable, secure, and performant network foundations.",
    heroStatement:
      "Every digital operation runs on the network — its design determines reliability for everything above it.",
    overview:
      "Network infrastructure underpins every technology service an organization depends on — yet many networks have grown without adequate planning, creating bottlenecks, security gaps, and operational complexity that is increasingly difficult to manage. Our Network Infrastructure service provides the architecture, implementation, and ongoing management expertise to design and operate networks that are fit for current and future requirements.",
    problemsAddressed: [
      "Network performance issues impacting user productivity and application reliability",
      "Network security architecture not aligned to current threat patterns — flat networks, inadequate segmentation",
      "Network documentation incomplete or absent, creating significant operational risk",
      "Planned new sites, cloud adoption, or application migrations requiring network redesign",
    ],
    capabilities: [
      {
        name: "Network Architecture",
        description:
          "Design network architectures that meet performance, security, and resilience requirements across campus, data centre, and cloud environments.",
      },
      {
        name: "Network Segmentation",
        description:
          "Implement network segmentation and micro-segmentation strategies that limit lateral movement and contain security incidents.",
      },
      {
        name: "SD-WAN & Connectivity",
        description:
          "Design and implement software-defined WAN and hybrid connectivity solutions that support distributed operations reliably.",
      },
      {
        name: "Network Operations",
        description:
          "Operate and maintain network infrastructure with proactive monitoring, change management, and performance optimization.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Network Assessment",
        description:
          "Assess existing network architecture, performance, security posture, and documentation.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "Design the target network architecture and the migration or implementation plan.",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "Deploy and configure network components to documented specifications.",
      },
      {
        step: "04",
        title: "Operations",
        description:
          "Operate and maintain the network with structured change management and monitoring.",
      },
    ],
    outcomes: [
      {
        title: "Reliable, performant network",
        description:
          "A network that delivers consistent performance for applications and users across all locations.",
      },
      {
        title: "Improved security posture",
        description:
          "A segmented, well-documented network that reduces lateral movement risk and supports compliance requirements.",
      },
    ],
    faqs: [
      {
        question: "Do you work with specific network vendor equipment?",
        answer:
          "We work across major network vendors and can operate within your existing hardware investment or advise on appropriate technology choices for new implementations.",
      },
    ],
    relatedProducts: ["rico-infra", "rico-techops", "rico-shield"],
    relatedServices: [
      "it-infrastructure-setup",
      "cloud-infrastructure-management",
      "server-management",
    ],
    seo: {
      title: "Network Infrastructure Services | Ricoz",
      description:
        "Network architecture, segmentation, SD-WAN, and ongoing operations for enterprise network environments.",
    },
  },

  {
    id: "endpoint-management",
    slug: "endpoint-management",
    name: "Endpoint Management",
    category: "Operations & Efficiency",
    tagline: "Governing every device connected to your environment",
    shortDescription:
      "Structured endpoint management services covering device configuration, software deployment, patching, security compliance, and lifecycle management for enterprise device estates.",
    heroStatement:
      "Every unmanaged endpoint is a potential entry point — and most organizations have more of them than they track.",
    overview:
      "Enterprise endpoint estates have grown in complexity and risk alongside the shift to remote work and BYOD. Managing thousands of devices — laptops, desktops, mobile devices, and shared terminals — requires disciplined, automated management that maintains configuration compliance, enforces security policies, and keeps devices operationally healthy. Our Endpoint Management service provides the frameworks, tooling, and operational practices to govern endpoint estates at scale.",
    problemsAddressed: [
      "No consistent endpoint baseline — devices with varying configurations, software versions, and security settings",
      "Patch management for endpoints inconsistent, leaving known vulnerabilities unaddressed across the estate",
      "Endpoint security compliance not verified or enforced, creating compliance reporting gaps",
      "Shadow IT and unmanaged personal devices accessing organizational resources without adequate controls",
    ],
    capabilities: [
      {
        name: "Device Configuration Management",
        description:
          "Define and enforce consistent device configurations, security baselines, and software standards across the endpoint estate.",
      },
      {
        name: "Patch & Update Management",
        description:
          "Automate endpoint patching and software updates with testing procedures and rollback capability.",
      },
      {
        name: "Endpoint Security Compliance",
        description:
          "Monitor endpoints for compliance with security policies and remediate non-compliant devices proactively.",
      },
      {
        name: "Lifecycle Management",
        description:
          "Manage device provisioning, deployment, refresh, and decommissioning through a structured lifecycle programme.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Estate Discovery",
        description:
          "Discover and inventory the full endpoint estate, including managed and unmanaged devices.",
      },
      {
        step: "02",
        title: "Policy & Tooling Design",
        description:
          "Define configuration baselines, security policies, and the management tooling architecture.",
      },
      {
        step: "03",
        title: "Onboarding & Enforcement",
        description:
          "Enrol devices into management and enforce baselines with exception management processes.",
      },
      {
        step: "04",
        title: "Ongoing Operations",
        description:
          "Operate endpoint management with regular compliance reporting, patching, and lifecycle activities.",
      },
    ],
    outcomes: [
      {
        title: "Consistent, compliant endpoint estate",
        description:
          "A managed estate where devices meet defined configuration and security standards consistently.",
      },
      {
        title: "Reduced endpoint risk",
        description:
          "Patched, governed endpoints that represent a reduced attack surface and meet compliance requirements.",
      },
    ],
    faqs: [
      {
        question:
          "Do you support macOS, Windows, and mobile device management?",
        answer:
          "Yes. Our endpoint management service covers Windows, macOS, and mobile device management across iOS and Android, using MDM and UEM platforms appropriate to your environment.",
      },
    ],
    relatedProducts: [
      "rico-endpoint",
      "rico-identity",
      "rico-protect",
      "rico-comply",
    ],
    relatedServices: [
      "managed-it-support",
      "identity-access-management",
      "it-infrastructure-audit",
    ],
    seo: {
      title: "Endpoint Management Services | Ricoz",
      description:
        "Enterprise endpoint management covering device configuration, patch management, security compliance, and lifecycle operations.",
    },
  },

  {
    id: "it-helpdesk-services",
    slug: "it-helpdesk-services",
    name: "IT Helpdesk Services",
    category: "Operations & Efficiency",
    tagline: "Fast, professional resolution of the IT issues that stop work",
    shortDescription:
      "Structured IT helpdesk services that provide first and second-line support to end users — reducing resolution times, improving user satisfaction, and freeing IT teams for higher-value activity.",
    heroStatement:
      "A helpdesk that resolves issues quickly is invisible — one that does not has a measurable cost to productivity.",
    overview:
      "IT helpdesk quality has a direct impact on organizational productivity and user confidence in technology. Yet many IT helpdesks operate without structured processes, consistent knowledge management, or the measurement disciplines needed to improve over time. Our IT Helpdesk Services provide the operational framework, trained support personnel, and continuous improvement practices that raise helpdesk quality from reactive fire-fighting to a reliable, high-performing service.",
    problemsAddressed: [
      "IT helpdesk resolution times too slow — users regularly waiting hours or days for basic issue resolution",
      "Helpdesk operating without documented procedures, leading to inconsistent resolution quality",
      "Same issues recurring repeatedly because root causes are not identified and addressed",
      "Helpdesk not measuring performance, making it difficult to justify investment or drive improvement",
    ],
    capabilities: [
      {
        name: "First-Line Support",
        description:
          "Provide structured first-line support with clear scope, response targets, and escalation procedures.",
      },
      {
        name: "Knowledge Management",
        description:
          "Build and maintain a knowledge base that enables faster first-contact resolution and consistent answers.",
      },
      {
        name: "Ticket Management",
        description:
          "Operate a structured ticketing process with priority classification, SLA tracking, and escalation management.",
      },
      {
        name: "Performance Reporting",
        description:
          "Provide regular helpdesk performance reporting covering resolution times, first-contact resolution, and user satisfaction.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Service Design",
        description:
          "Define service scope, SLAs, escalation paths, and knowledge base structure.",
      },
      {
        step: "02",
        title: "Onboarding",
        description:
          "Transfer knowledge about the environment, document common issues, and establish tooling.",
      },
      {
        step: "03",
        title: "Live Operations",
        description:
          "Operate the helpdesk to agreed SLAs with daily and weekly performance monitoring.",
      },
      {
        step: "04",
        title: "Continuous Improvement",
        description:
          "Analyse incident patterns, improve knowledge content, and drive resolution time improvements.",
      },
    ],
    outcomes: [
      {
        title: "Faster issue resolution",
        description:
          "Measurably improved resolution times and first-contact resolution rates compared to baseline.",
      },
      {
        title: "Consistent user experience",
        description:
          "A predictable, professional helpdesk experience that users can rely on when IT issues arise.",
      },
    ],
    faqs: [
      {
        question: "Do you provide out-of-hours helpdesk coverage?",
        answer:
          "Yes. We can provide extended and out-of-hours coverage depending on your operational requirements and the criticality of IT services to your business operations.",
      },
    ],
    relatedProducts: ["rico-itsm", "rico-desk", "rico-techops", "rico-know"],
    relatedServices: [
      "managed-it-support",
      "it-infrastructure-setup",
      "endpoint-management",
    ],
    seo: {
      title: "IT Helpdesk Services | Ricoz",
      description:
        "Structured IT helpdesk services. First and second-line support, knowledge management, SLA-backed ticket resolution, and continuous improvement.",
    },
  },

  {
    id: "backup-disaster-recovery",
    slug: "backup-disaster-recovery",
    name: "Backup & Disaster Recovery",
    category: "Operations & Efficiency",
    tagline:
      "Ensuring the organization can recover when the unexpected happens",
    shortDescription:
      "Backup strategy, architecture, and disaster recovery planning services that give organizations the confidence that critical data and systems can be recovered when needed.",
    heroStatement:
      "A backup strategy that has never been tested is a hypothesis, not a capability.",
    overview:
      "Data loss and system unavailability are among the most operationally and commercially damaging events an organization can face. Yet many backup and disaster recovery arrangements are poorly designed, inconsistently executed, and never tested under realistic conditions. Our Backup & Disaster Recovery service designs, implements, and validates the backup architecture and recovery procedures that ensure critical systems and data can be restored within acceptable recovery time and recovery point objectives.",
    problemsAddressed: [
      "Backup architecture not aligned to actual recovery time and recovery point objectives",
      "Backup procedures not consistently executed or monitored — failures going undetected",
      "Disaster recovery plan documented but never tested — recovery capability unknown",
      "Critical systems not covered by adequate backup or recovery arrangements",
    ],
    capabilities: [
      {
        name: "Backup Architecture Design",
        description:
          "Design backup architectures aligned to RTO and RPO requirements, data criticality, and recovery scenarios.",
      },
      {
        name: "Backup Implementation",
        description:
          "Implement backup solutions with appropriate coverage, retention policies, encryption, and offsite copy arrangements.",
      },
      {
        name: "Disaster Recovery Planning",
        description:
          "Develop and document disaster recovery procedures for critical systems with clear recovery runbooks.",
      },
      {
        name: "DR Testing",
        description:
          "Design and execute DR tests that validate recovery capability under realistic conditions.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Requirements Assessment",
        description:
          "Define RTO and RPO requirements for critical systems and assess current backup coverage.",
      },
      {
        step: "02",
        title: "Architecture & Design",
        description:
          "Design the backup and recovery architecture aligned to the defined requirements.",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "Deploy backup solutions and document recovery procedures.",
      },
      {
        step: "04",
        title: "Test & Maintain",
        description:
          "Execute recovery tests regularly and maintain procedures as the environment evolves.",
      },
    ],
    outcomes: [
      {
        title: "Validated recovery capability",
        description:
          "Backup and recovery arrangements that have been tested and proven to work under realistic conditions.",
      },
      {
        title: "Defined recovery targets",
        description:
          "Clear, agreed RTO and RPO targets for critical systems with the architecture to meet them.",
      },
    ],
    faqs: [
      {
        question: "How often should DR tests be conducted?",
        answer:
          "For most critical systems, full DR tests should be conducted at least annually, with component-level tests more frequently. The appropriate frequency depends on the criticality of the systems and the pace of change in the environment.",
      },
    ],
    relatedProducts: ["rico-vault", "rico-infra", "rico-protect"],
    relatedServices: [
      "server-management",
      "cloud-infrastructure-management",
      "it-infrastructure-setup",
    ],
    seo: {
      title: "Backup & Disaster Recovery Services | Ricoz",
      description:
        "Backup architecture, disaster recovery planning, and DR testing services that validate your organization can recover when it matters most.",
    },
  },

  {
    id: "it-infrastructure-audit",
    slug: "it-infrastructure-audit",
    name: "IT Infrastructure Audit",
    category: "Operations & Efficiency",
    tagline:
      "An independent view of what your IT infrastructure actually looks like",
    shortDescription:
      "Structured IT infrastructure audit services that provide an accurate, independent assessment of the current infrastructure estate — covering architecture, configuration, documentation, security posture, and operational compliance.",
    heroStatement:
      "An infrastructure audit reveals the gap between what your diagrams show and what your environment actually contains.",
    overview:
      "IT infrastructure estates diverge from their documented state over time. Configuration drift, undocumented changes, shadow infrastructure, and decommissioning delays create an increasingly unreliable picture of what the organization is actually running. Our IT Infrastructure Audit service provides a systematic, independent assessment that establishes an accurate current-state view — covering asset inventory, configuration compliance, documentation quality, and security posture against defined standards.",
    problemsAddressed: [
      "Infrastructure documentation not reflecting the actual state of the environment",
      "Audit or compliance requirements demanding an independent infrastructure assessment",
      "Preparation for major change — cloud migration, acquisition, or outsourcing — requiring an accurate baseline",
      "Security or operational concerns prompting a need for an independent review of the infrastructure estate",
    ],
    capabilities: [
      {
        name: "Asset Discovery & Inventory",
        description:
          "Discover and inventory the full infrastructure estate, including assets not in existing documentation.",
      },
      {
        name: "Configuration Compliance",
        description:
          "Assess configuration compliance against defined standards, identifying drift and non-compliant systems.",
      },
      {
        name: "Documentation Assessment",
        description:
          "Evaluate the completeness and accuracy of infrastructure documentation against the discovered environment.",
      },
      {
        name: "Findings & Recommendations",
        description:
          "Deliver a structured audit report with prioritized findings and actionable recommendations.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Scope Definition",
        description:
          "Define the audit scope, standards, and assessment methodology.",
      },
      {
        step: "02",
        title: "Discovery & Evidence Collection",
        description:
          "Conduct asset discovery and collect configuration and documentation evidence.",
      },
      {
        step: "03",
        title: "Analysis",
        description:
          "Analyse findings against defined standards and identify gaps and risks.",
      },
      {
        step: "04",
        title: "Reporting",
        description:
          "Deliver the audit report with findings, risk ratings, and prioritized recommendations.",
      },
    ],
    outcomes: [
      {
        title: "Accurate infrastructure baseline",
        description:
          "A current, verified view of the infrastructure estate that replaces incomplete or outdated documentation.",
      },
      {
        title: "Independent assurance",
        description:
          "An evidence-based, independent assessment that satisfies audit, compliance, and strategic planning requirements.",
      },
    ],
    faqs: [
      {
        question: "Do you provide remediation services following the audit?",
        answer:
          "Yes. Where audit findings require remediation work — documentation updates, configuration correction, or infrastructure changes — we can provide that capability either as part of the audit engagement or as a follow-on service.",
      },
    ],
    relatedProducts: [
      "rico-itsm",
      "rico-itreport",
      "rico-infra",
      "rico-techops",
    ],
    relatedServices: [
      "managed-it-support",
      "server-management",
      "cloud-infrastructure-management",
    ],
    seo: {
      title: "IT Infrastructure Audit Services | Ricoz",
      description:
        "Independent IT infrastructure audit. Asset discovery, configuration compliance, documentation assessment, and risk-rated findings for enterprise environments.",
    },
  },

  // ─── Batch 6: Digital Marketing (8 new) ───────────────────────────────────

  {
    id: "digital-marketing-strategy",
    slug: "digital-marketing-strategy",
    name: "Digital Marketing Strategy",
    category: "Digital Marketing",
    tagline:
      "A coherent digital marketing strategy built on channel evidence, not assumption",
    shortDescription:
      "Structured digital marketing strategy advisory for organizations that need a clear, channel-coherent approach to reaching, engaging, and converting their target audiences online.",
    heroStatement:
      "Digital marketing without strategy is expenditure. Digital marketing with strategy is investment.",
    overview:
      "Many organizations run digital marketing activity across multiple channels without a coherent strategy governing how those channels work together, how budget is allocated, or how performance is measured against business objectives. Our Digital Marketing Strategy service provides the analysis, strategic framework, and channel planning needed to create a unified digital marketing approach — one that aligns activity to audience, allocates budget with evidence, and provides a clear basis for measuring return.",
    problemsAddressed: [
      "Digital marketing activity fragmented across channels without a coherent strategy or shared performance framework",
      "Budget allocation across channels based on historical spend rather than evidence of return",
      "Difficulty attributing digital marketing investment to measurable business outcomes",
      "New market, audience, or product requiring a structured digital marketing approach from the outset",
    ],
    capabilities: [
      {
        name: "Audience & Channel Analysis",
        description:
          "Map target audiences to the digital channels where they are most reachable and receptive.",
      },
      {
        name: "Channel Strategy",
        description:
          "Define the role, objectives, and budget allocation for each digital marketing channel.",
      },
      {
        name: "Measurement Framework",
        description:
          "Design the KPIs, attribution model, and reporting structure that connects marketing activity to business outcomes.",
      },
      {
        name: "Content & Messaging Strategy",
        description:
          "Define the content approach and messaging principles that guide communication across all digital channels.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Insight",
        description:
          "Assess current digital marketing performance, channel mix, and audience intelligence.",
      },
      {
        step: "02",
        title: "Strategy Development",
        description:
          "Develop the digital marketing strategy including channel roles, audience mapping, and budget framework.",
      },
      {
        step: "03",
        title: "Planning",
        description:
          "Translate strategy into a channel plan with activities, timelines, and measurement.",
      },
      {
        step: "04",
        title: "Activation Support",
        description:
          "Support the activation of the strategy and establish performance reporting cadences.",
      },
    ],
    outcomes: [
      {
        title: "Unified channel strategy",
        description:
          "A coherent, integrated digital marketing strategy that aligns all channel activity to audience and business objectives.",
      },
      {
        title: "Evidence-based budget allocation",
        description:
          "Investment decisions guided by channel evidence and expected return rather than habit or assumption.",
      },
    ],
    faqs: [
      {
        question: "Do you handle implementation as well as strategy?",
        answer:
          "This service focuses on strategy and planning. Channel-specific execution — SEO, SEM, email, performance marketing — can be engaged as separate services or handled by your internal or agency teams.",
      },
    ],
    relatedProducts: [
      "rico-campaign",
      "rico-analytics",
      "rico-intel",
      "rico-audience",
    ],
    relatedServices: [
      "search-engine-optimization",
      "performance-marketing",
      "marketing-analytics",
    ],
    seo: {
      title: "Digital Marketing Strategy Services | Ricoz",
      description:
        "Structured digital marketing strategy. Audience analysis, channel planning, measurement framework, and content strategy for coherent digital marketing programmes.",
    },
  },

  {
    id: "search-engine-optimization",
    slug: "search-engine-optimization",
    name: "Search Engine Optimization",
    category: "Digital Marketing",
    tagline:
      "Sustainable organic visibility built on technical discipline and content quality",
    shortDescription:
      "Structured SEO services covering technical audit, on-page optimization, content strategy, and authority building — focused on sustainable organic search visibility for competitive terms.",
    heroStatement:
      "Organic search visibility is not a quick win — it is a compounding asset built through consistent technical and editorial discipline.",
    overview:
      "Search engine optimization has matured from a set of tactical tricks into a multi-dimensional discipline that requires technical excellence, content quality, and credible authority. Our Search Engine Optimization service provides the technical audit, strategic planning, content guidance, and performance tracking needed to improve organic search visibility for relevant, commercial search terms — sustainably and without approaches that create long-term risk.",
    problemsAddressed: [
      "Website not ranking for commercially relevant search terms despite significant content investment",
      "Technical SEO issues preventing pages from being crawled, indexed, or ranked effectively",
      "Organic traffic declining following algorithm updates due to historical SEO practices",
      "No structured content strategy guiding what to produce, for whom, and with what search intent in mind",
    ],
    capabilities: [
      {
        name: "Technical SEO Audit",
        description:
          "Identify and prioritize technical issues that prevent search engines from crawling, indexing, and ranking the site effectively.",
      },
      {
        name: "Keyword & Intent Research",
        description:
          "Map target keywords to search intent, commercial value, and content opportunity across the customer journey.",
      },
      {
        name: "On-Page Optimization",
        description:
          "Optimize page content, structure, metadata, and internal linking to improve relevance for target terms.",
      },
      {
        name: "Content Strategy",
        description:
          "Develop an SEO content strategy that closes content gaps, targets priority search intents, and builds topical authority.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Baseline",
        description:
          "Establish current performance baseline and conduct technical and content audits.",
      },
      {
        step: "02",
        title: "Keyword Research & Strategy",
        description:
          "Map keyword opportunities to commercial priorities and content gaps.",
      },
      {
        step: "03",
        title: "Optimization & Content",
        description:
          "Execute technical fixes and on-page optimization, and develop content to target priority search intents.",
      },
      {
        step: "04",
        title: "Monitor & Iterate",
        description:
          "Track rankings, traffic, and conversion from organic search and iterate based on performance data.",
      },
    ],
    outcomes: [
      {
        title: "Improved organic rankings",
        description:
          "Increased visibility in organic search results for commercially relevant target terms.",
      },
      {
        title: "Sustainable traffic growth",
        description:
          "Growing organic traffic from a technically sound, content-rich site that maintains ranking quality over time.",
      },
    ],
    faqs: [
      {
        question: "How long before SEO improvements produce results?",
        answer:
          "Technical fixes can produce results within weeks. Content-driven improvements typically take three to six months to materially affect rankings, depending on the competitiveness of the target terms.",
      },
    ],
    relatedProducts: ["rico-content", "rico-analytics", "rico-metrics"],
    relatedServices: [
      "digital-marketing-strategy",
      "search-engine-marketing",
      "marketing-analytics",
    ],
    seo: {
      title: "Search Engine Optimization Services | Ricoz",
      description:
        "Technical SEO audit, keyword research, on-page optimization, and content strategy for sustainable organic search visibility.",
    },
  },

  {
    id: "search-engine-marketing",
    slug: "search-engine-marketing",
    name: "Search Engine Marketing",
    category: "Digital Marketing",
    tagline: "Paid search that converts — not just paid search that spends",
    shortDescription:
      "Structured paid search management across major search platforms — covering campaign architecture, bidding strategy, ad copy, landing page alignment, and conversion optimization.",
    heroStatement:
      "Paid search is one of the most measurable forms of advertising — and one of the most commonly mismanaged.",
    overview:
      "Search engine marketing offers immediate, measurable reach to audiences actively looking for what you offer. But SEM accounts that are poorly structured, inadequately managed, or disconnected from landing page experience waste significant budget generating clicks that do not convert. Our Search Engine Marketing service provides the campaign architecture, bidding intelligence, creative quality, and continuous optimization discipline needed to get genuine return from paid search investment.",
    problemsAddressed: [
      "Paid search spend generating clicks but not converting at acceptable rates",
      "Campaign structure not aligned to the buying journey — broad match capturing irrelevant traffic at high cost",
      "Bidding strategy not responsive to conversion data — spending on clicks rather than outcomes",
      "Ad copy and landing pages misaligned, creating friction between search intent and what the page delivers",
    ],
    capabilities: [
      {
        name: "Campaign Architecture",
        description:
          "Design campaign structures, ad group organization, and match type strategy aligned to search intent and conversion goals.",
      },
      {
        name: "Bid Strategy & Automation",
        description:
          "Implement and manage bidding strategies that optimize for conversion value rather than volume alone.",
      },
      {
        name: "Ad Copy & Extensions",
        description:
          "Write compelling, relevant ad copy with appropriate use of extensions to maximize quality score and click-through rate.",
      },
      {
        name: "Conversion Tracking & Optimization",
        description:
          "Implement robust conversion tracking and use data to continuously improve account performance.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Account Audit & Setup",
        description:
          "Audit existing account or build new campaign structure from the ground up.",
      },
      {
        step: "02",
        title: "Campaign Build",
        description:
          "Develop campaigns, ad groups, keywords, and ad copy aligned to the strategy.",
      },
      {
        step: "03",
        title: "Launch & Monitor",
        description:
          "Launch campaigns with close monitoring during the initial period.",
      },
      {
        step: "04",
        title: "Optimize & Report",
        description:
          "Continuously optimize based on performance data and provide regular performance reporting.",
      },
    ],
    outcomes: [
      {
        title: "Improved conversion efficiency",
        description:
          "More conversions from the same or lower spend through better campaign structure and optimization.",
      },
      {
        title: "Transparent performance reporting",
        description:
          "Clear, regular reporting that connects paid search spend to measurable business outcomes.",
      },
    ],
    faqs: [
      {
        question: "Do you manage campaigns across multiple search platforms?",
        answer:
          "Yes. We manage campaigns across major search platforms and can advise on platform mix appropriate to your audience and objectives.",
      },
    ],
    relatedProducts: [
      "rico-campaign",
      "rico-audience",
      "rico-analytics",
      "rico-convert",
    ],
    relatedServices: [
      "digital-marketing-strategy",
      "performance-marketing",
      "search-engine-optimization",
    ],
    seo: {
      title: "Search Engine Marketing Services | Ricoz",
      description:
        "Paid search management. Campaign architecture, bid strategy, ad copy, and conversion optimization for measurable SEM performance.",
    },
  },

  {
    id: "performance-marketing",
    slug: "performance-marketing",
    name: "Performance Marketing",
    category: "Digital Marketing",
    tagline: "Paid media managed for measurable commercial outcomes",
    shortDescription:
      "Performance marketing strategy and management across paid channels — connecting paid media spend to measurable revenue outcomes through rigorous attribution, audience targeting, and continuous optimization.",
    heroStatement:
      "Performance marketing is defined by what it delivers, not what it spends.",
    overview:
      "Performance marketing encompasses the paid digital channels that can be directly connected to measurable outcomes — paid social, display, programmatic, affiliate, and retargeting. Our Performance Marketing service provides the strategy, audience intelligence, creative direction, and technical management needed to run paid media programmes that generate measurable return — not just impressions and clicks.",
    problemsAddressed: [
      "Paid media spend not connected to measurable downstream revenue or pipeline outcomes",
      "Audience targeting not differentiated enough to achieve efficient cost-per-acquisition",
      "Attribution model inadequate — unable to understand which channels and tactics are driving results",
      "Performance marketing managed tactically without a coherent cross-channel strategy",
    ],
    capabilities: [
      {
        name: "Audience Strategy",
        description:
          "Define and build audience segments based on behavioural, demographic, and intent data for targeted paid media activation.",
      },
      {
        name: "Channel & Budget Planning",
        description:
          "Allocate budget across paid channels based on evidence of return and funnel stage requirements.",
      },
      {
        name: "Creative Direction",
        description:
          "Brief, direct, and optimize paid media creative to improve relevance, engagement, and conversion rates.",
      },
      {
        name: "Attribution & Measurement",
        description:
          "Implement attribution models that provide an accurate view of which channels and touchpoints are generating value.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Strategy",
        description:
          "Assess current paid media performance and develop the performance marketing strategy.",
      },
      {
        step: "02",
        title: "Campaign Build",
        description:
          "Build campaigns, audiences, and creative across the channel mix.",
      },
      {
        step: "03",
        title: "Launch & Optimize",
        description:
          "Launch campaigns and optimize continuously based on performance data.",
      },
      {
        step: "04",
        title: "Reporting & Attribution",
        description:
          "Provide attribution reporting that connects spend to outcomes across the full customer journey.",
      },
    ],
    outcomes: [
      {
        title: "Measurable return on ad spend",
        description:
          "A clear, attributed view of the commercial return generated by paid media investment.",
      },
      {
        title: "Efficient customer acquisition",
        description:
          "Improving cost-per-acquisition as targeting, creative, and bidding are refined over time.",
      },
    ],
    faqs: [
      {
        question: "Do you manage creative production as part of this service?",
        answer:
          "We provide creative direction and briefing as part of the service. Production of assets can be handled by your internal team, your existing creative agency, or we can advise on production resourcing.",
      },
    ],
    relatedProducts: [
      "rico-campaign",
      "rico-convert",
      "rico-audience",
      "rico-analytics",
    ],
    relatedServices: [
      "digital-marketing-strategy",
      "search-engine-marketing",
      "lead-generation",
    ],
    seo: {
      title: "Performance Marketing Services | Ricoz",
      description:
        "Performance marketing strategy, paid media management, audience targeting, and attribution for measurable commercial outcomes.",
    },
  },

  {
    id: "lead-generation",
    slug: "lead-generation",
    name: "Lead Generation",
    category: "Digital Marketing",
    tagline:
      "Building and converting the pipeline that feeds commercial growth",
    shortDescription:
      "Structured lead generation strategy and programme delivery — from audience identification and content offer development through landing page optimization and CRM integration.",
    heroStatement:
      "Lead generation that produces volume without quality is a cost, not a capability.",
    overview:
      "Effective B2B lead generation requires more than a contact form and a gated white paper. It requires a deep understanding of the target audience, compelling offer development, well-structured nurture sequences, and the operational infrastructure to track, qualify, and route leads to the right sales motion. Our Lead Generation service designs and deploys structured lead generation programmes that balance volume with lead quality.",
    problemsAddressed: [
      "Marketing generating traffic that does not convert into leads at commercially acceptable rates",
      "Lead quality insufficient — sales team rejecting a high proportion of marketing-qualified leads",
      "No structured lead nurture programme — prospects falling out of the funnel between first contact and sales engagement",
      "Lead routing and CRM integration not functioning — leads lost or not followed up consistently",
    ],
    capabilities: [
      {
        name: "Audience & Offer Strategy",
        description:
          "Identify the target audience and develop content and offer propositions that motivate meaningful conversion actions.",
      },
      {
        name: "Landing Page Design",
        description:
          "Design and optimize landing pages that convert intent into leads without unnecessary friction.",
      },
      {
        name: "Lead Nurture Programme",
        description:
          "Design and deploy nurture sequences that move qualified prospects from first engagement to sales-readiness.",
      },
      {
        name: "Lead Scoring & Routing",
        description:
          "Implement lead scoring and routing rules that ensure the right leads reach the right sales resources at the right time.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Strategy & Design",
        description:
          "Define target audience, offer strategy, and the structure of the lead generation programme.",
      },
      {
        step: "02",
        title: "Build & Configure",
        description:
          "Develop landing pages, nurture sequences, and CRM configuration.",
      },
      {
        step: "03",
        title: "Activate & Test",
        description:
          "Launch the programme with A/B testing on key conversion elements.",
      },
      {
        step: "04",
        title: "Optimize & Report",
        description:
          "Optimize conversion rates and provide regular pipeline reporting.",
      },
    ],
    outcomes: [
      {
        title: "Consistent lead pipeline",
        description:
          "A structured, continuously operating lead generation engine that produces predictable pipeline volume.",
      },
      {
        title: "Higher lead quality",
        description:
          "Better-qualified leads through improved targeting, scoring, and nurture — reducing sales cycle friction.",
      },
    ],
    faqs: [
      {
        question:
          "Do you work with specific CRM or marketing automation platforms?",
        answer:
          "We work across major CRM and marketing automation platforms. Where a platform decision is still open, we can advise on appropriate options for your use case.",
      },
    ],
    relatedProducts: [
      "rico-leads",
      "rico-campaign",
      "rico-crm",
      "rico-journey",
    ],
    relatedServices: [
      "digital-marketing-strategy",
      "performance-marketing",
      "conversion-rate-optimization",
    ],
    seo: {
      title: "Lead Generation Services | Ricoz",
      description:
        "Structured B2B lead generation. Audience strategy, landing page design, lead nurture, scoring, and CRM integration for consistent commercial pipeline.",
    },
  },

  {
    id: "conversion-rate-optimization",
    slug: "conversion-rate-optimization",
    name: "Conversion Rate Optimization",
    category: "Digital Marketing",
    tagline: "Getting more value from the traffic you already have",
    shortDescription:
      "Structured CRO services — covering user behaviour analysis, hypothesis development, A/B testing, and iterative optimization — that improve the proportion of visitors who take commercial actions.",
    heroStatement:
      "Doubling conversion rate delivers the same outcome as doubling traffic — at a fraction of the cost.",
    overview:
      "Conversion rate optimization is the systematic improvement of the proportion of website or landing page visitors who complete a desired commercial action. Our CRO service combines user behaviour analysis, qualitative insight, structured hypothesis development, and rigorous A/B and multivariate testing to identify and validate the changes that improve conversion rates — removing friction, increasing relevance, and building user confidence at key decision moments.",
    problemsAddressed: [
      "Website generating traffic but converting a low proportion of visitors into leads, enquiries, or purchases",
      "Paid media CPA too high — improving conversion rate would materially reduce acquisition cost",
      "No structured testing programme — layout and content changes made on opinion rather than evidence",
      "Key pages losing users at predictable points with no clear understanding of why",
    ],
    capabilities: [
      {
        name: "Behavioural Analysis",
        description:
          "Analyse user behaviour using quantitative analytics and qualitative methods to identify conversion barriers and friction points.",
      },
      {
        name: "Hypothesis Development",
        description:
          "Develop structured, evidence-based hypotheses about the changes most likely to improve conversion.",
      },
      {
        name: "A/B & Multivariate Testing",
        description:
          "Design and execute statistically valid tests that measure the impact of changes on conversion metrics.",
      },
      {
        name: "Iterative Optimization",
        description:
          "Build a continuous improvement cycle that compounds conversion improvements over time.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Research & Analysis",
        description:
          "Analyse user behaviour, identify conversion barriers, and map the user journey.",
      },
      {
        step: "02",
        title: "Hypothesis & Prioritization",
        description:
          "Develop and prioritize test hypotheses by expected impact and feasibility.",
      },
      {
        step: "03",
        title: "Test & Measure",
        description:
          "Design, launch, and measure A/B tests with statistical validity.",
      },
      {
        step: "04",
        title: "Implement & Iterate",
        description:
          "Implement winning variants and continue the optimization cycle.",
      },
    ],
    outcomes: [
      {
        title: "Improved conversion rates",
        description:
          "Measurable increases in the proportion of visitors completing target conversion actions.",
      },
      {
        title: "Reduced acquisition cost",
        description:
          "Lower cost-per-acquisition from paid channels as the conversion rate on landing pages improves.",
      },
    ],
    faqs: [
      {
        question: "How much traffic is needed to run meaningful CRO tests?",
        answer:
          "Statistically valid A/B tests require sufficient traffic to reach significance. We assess traffic volumes early in the engagement and design the testing programme accordingly — smaller sites may require longer test periods or different optimization approaches.",
      },
    ],
    relatedProducts: [
      "rico-convert",
      "rico-journey",
      "rico-analytics",
      "rico-metrics",
    ],
    relatedServices: [
      "digital-marketing-strategy",
      "lead-generation",
      "search-engine-optimization",
    ],
    seo: {
      title: "Conversion Rate Optimization Services | Ricoz",
      description:
        "Behavioural analysis, A/B testing, and iterative optimization to improve website and landing page conversion rates.",
    },
  },

  {
    id: "email-marketing",
    slug: "email-marketing",
    name: "Email Marketing",
    category: "Digital Marketing",
    tagline:
      "Email programmes that sustain relationships and generate commercial activity",
    shortDescription:
      "Structured email marketing strategy and programme delivery — covering list health, segmentation, automation, content design, and performance optimization for acquisition and retention programmes.",
    heroStatement:
      "Email remains the highest-returning owned channel — when it is managed with discipline and respect for the audience.",
    overview:
      "Email marketing is one of the highest-return digital channels available — but it requires strategic clarity, audience respect, and operational discipline to maintain deliverability, engagement, and commercial performance. Our Email Marketing service designs and operates email programmes that sustain subscriber relationships, support commercial objectives, and maintain the deliverability standards that email programme performance depends on.",
    problemsAddressed: [
      "Email list engagement declining — open and click rates falling without clear diagnosis",
      "Email programme consisting of batch-and-blast broadcasts rather than segmented, relevant communication",
      "Deliverability issues reducing inbox placement rates for commercial email programmes",
      "No structured automation programme — manual send dependency limiting scalability",
    ],
    capabilities: [
      {
        name: "Programme Strategy",
        description:
          "Define the email programme strategy, covering objectives, audience segmentation, send cadence, and content framework.",
      },
      {
        name: "List Health & Deliverability",
        description:
          "Audit and improve list hygiene, sender reputation, and technical deliverability configuration.",
      },
      {
        name: "Automation & Flows",
        description:
          "Design and build triggered automation programmes — welcome, nurture, re-engagement, and post-conversion sequences.",
      },
      {
        name: "Content & Testing",
        description:
          "Develop email content frameworks and subject line, content, and send-time testing programmes.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Strategy",
        description:
          "Assess current programme performance, list health, and deliverability status.",
      },
      {
        step: "02",
        title: "Programme Design",
        description:
          "Design the email strategy, segmentation model, and automation architecture.",
      },
      {
        step: "03",
        title: "Build & Activate",
        description:
          "Build automation sequences, templates, and content frameworks.",
      },
      {
        step: "04",
        title: "Optimize & Report",
        description:
          "Monitor performance, test continuously, and report on commercial outcomes.",
      },
    ],
    outcomes: [
      {
        title: "Improved engagement rates",
        description:
          "Higher open and click-through rates from more relevant, well-timed, and better-designed emails.",
      },
      {
        title: "Scalable automation",
        description:
          "A structured automation programme that delivers value at scale without proportional manual effort.",
      },
    ],
    faqs: [
      {
        question: "Do you manage email platform selection and migration?",
        answer:
          "We can advise on email platform selection and support migration if a platform change is required. Our primary focus is on programme strategy and performance rather than technology procurement.",
      },
    ],
    relatedProducts: [
      "rico-email",
      "rico-campaign",
      "rico-audience",
      "rico-journey",
    ],
    relatedServices: [
      "digital-marketing-strategy",
      "lead-generation",
      "marketing-analytics",
    ],
    seo: {
      title: "Email Marketing Services | Ricoz",
      description:
        "Email marketing strategy, list health, automation programme design, and performance optimization for acquisition and retention.",
    },
  },

  {
    id: "marketing-analytics",
    slug: "marketing-analytics",
    name: "Marketing Analytics",
    category: "Digital Marketing",
    tagline:
      "Turning marketing data into decisions that improve commercial performance",
    shortDescription:
      "Marketing analytics strategy, implementation, and reporting services that give marketing teams and leadership a clear, trusted view of what is working and why.",
    heroStatement:
      "Marketing decisions made without reliable analytics are opinions with a budget attached.",
    overview:
      "Marketing analytics is the foundation on which every other digital marketing decision rests — yet many organizations operate with incomplete tracking, unreliable attribution, and reporting that fails to connect marketing activity to commercial outcomes. Our Marketing Analytics service designs and implements the measurement infrastructure, reporting frameworks, and analytical practices that turn marketing data into reliable, decision-ready insight.",
    problemsAddressed: [
      "Marketing reporting not trusted by leadership because data sources are inconsistent or methodology unclear",
      "Unable to attribute pipeline or revenue to specific marketing channels or campaigns with confidence",
      "Analytics implementation incomplete — key conversions not tracked, data lost at critical journey points",
      "Data available but not structured into reporting that marketing teams can act on",
    ],
    capabilities: [
      {
        name: "Analytics Architecture",
        description:
          "Design the analytics infrastructure — tracking, data collection, and storage — that provides reliable marketing data.",
      },
      {
        name: "Attribution Modelling",
        description:
          "Implement attribution models that credit the right channels and touchpoints for commercial outcomes.",
      },
      {
        name: "Dashboard & Reporting",
        description:
          "Build marketing performance dashboards and reports that present data in a format teams can act on.",
      },
      {
        name: "Insight & Analysis",
        description:
          "Provide structured analytical support — campaign analysis, audience insight, and performance diagnosis.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Measurement Audit",
        description:
          "Assess existing analytics implementation, data quality, and reporting gaps.",
      },
      {
        step: "02",
        title: "Architecture & Design",
        description: "Design the analytics architecture and attribution model.",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "Implement tracking, dashboards, and reporting infrastructure.",
      },
      {
        step: "04",
        title: "Insight & Iteration",
        description:
          "Deliver regular analytical insight and iterate the reporting as marketing evolves.",
      },
    ],
    outcomes: [
      {
        title: "Trusted marketing data",
        description:
          "Analytics infrastructure and reporting that marketing teams and leadership rely on for decisions.",
      },
      {
        title: "Attribution clarity",
        description:
          "A clear, defensible view of the commercial return generated by each marketing channel and campaign.",
      },
    ],
    faqs: [
      {
        question: "Do you work with specific analytics platforms?",
        answer:
          "We work across major analytics and attribution platforms. Platform selection is based on your requirements, existing technology stack, and data governance obligations.",
      },
    ],
    relatedProducts: [
      "rico-analytics",
      "rico-metrics",
      "rico-report",
      "rico-campaign",
    ],
    relatedServices: [
      "digital-marketing-strategy",
      "performance-marketing",
      "business-intelligence-solutions",
    ],
    seo: {
      title: "Marketing Analytics Services | Ricoz",
      description:
        "Marketing analytics architecture, attribution modelling, dashboard development, and analytical insight for data-driven marketing decisions.",
    },
  },

  // ─── Batch 7: Social Media & Content (7 new) ──────────────────────────────

  {
    id: "social-media-management",
    slug: "social-media-management",
    name: "Social Media Management",
    category: "Social Media & Content",
    tagline:
      "Consistent, quality social media presence — managed professionally",
    shortDescription:
      "End-to-end social media management for organizations that need a professional, consistent, and strategically guided presence across the platforms relevant to their audiences.",
    heroStatement:
      "A social media presence left without professional management communicates as loudly as one that is actively managed — just differently.",
    overview:
      "Social media management at a professional level requires much more than scheduled posts. It demands strategic alignment, content quality, consistent brand voice, community responsiveness, and performance measurement. Our Social Media Management service provides the strategy, content production, scheduling, and community management needed to maintain a social presence that reflects organizational quality and drives meaningful audience engagement.",
    problemsAddressed: [
      "Social media presence inconsistent — publishing cadence irregular, quality variable, brand voice not coherent",
      "Social channels not aligned to any clear communication or audience strategy",
      "Internal team managing social media as a secondary responsibility, limiting quality and consistency",
      "No measurement framework connecting social activity to business or audience objectives",
    ],
    capabilities: [
      {
        name: "Content Planning",
        description:
          "Develop structured content calendars aligned to audience interests, business objectives, and channel requirements.",
      },
      {
        name: "Content Production",
        description:
          "Produce on-brand written, visual, and multimedia content appropriate to each platform's format and audience.",
      },
      {
        name: "Publishing & Scheduling",
        description:
          "Manage the publishing cadence across platforms with consistent timing and format optimization.",
      },
      {
        name: "Community Management",
        description:
          "Monitor and respond to comments, messages, and mentions in a timely and brand-appropriate manner.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Strategy",
        description:
          "Assess current presence, audience, and performance across channels and define the social strategy.",
      },
      {
        step: "02",
        title: "Content Framework",
        description:
          "Develop the content framework, brand voice guidelines, and editorial calendar structure.",
      },
      {
        step: "03",
        title: "Production & Publishing",
        description:
          "Produce, schedule, and publish content consistently across managed channels.",
      },
      {
        step: "04",
        title: "Monitor & Report",
        description:
          "Monitor performance, manage community interactions, and report on engagement and growth.",
      },
    ],
    outcomes: [
      {
        title: "Consistent, quality social presence",
        description:
          "A professional, brand-coherent social presence that publishes consistently and maintains quality standards.",
      },
      {
        title: "Growing audience engagement",
        description:
          "Improving engagement rates as content becomes more aligned to audience interests and needs.",
      },
    ],
    faqs: [
      {
        question: "Which social platforms do you manage?",
        answer:
          "We manage accounts across major professional and consumer social platforms. Platform selection is based on where your target audience is most active and where the content format suits your communications objectives.",
      },
    ],
    relatedProducts: [
      "rico-social",
      "rico-content",
      "rico-channel",
      "rico-analytics",
    ],
    relatedServices: [
      "social-media-strategy",
      "content-strategy",
      "community-management",
    ],
    seo: {
      title: "Social Media Management Services | Ricoz",
      description:
        "Professional social media management. Content planning, production, publishing, and community management for consistent, strategic social presence.",
    },
  },

  {
    id: "social-media-strategy",
    slug: "social-media-strategy",
    name: "Social Media Strategy",
    category: "Social Media & Content",
    tagline:
      "A clear social media strategy before the content calendar is written",
    shortDescription:
      "Structured social media strategy advisory — defining audience, platform, content approach, community objectives, and the measurement framework before committing to a publishing programme.",
    heroStatement:
      "Publishing on social media without a strategy fills a calendar without building an audience.",
    overview:
      "Effective social media programmes are built on a clear understanding of who the audience is, which platforms they use, what content they value, and what the organization is trying to achieve by showing up there. Our Social Media Strategy service provides the audience research, platform analysis, and strategic planning needed to build a social media approach with clear objectives, channel focus, and content principles — before investing in production and execution.",
    problemsAddressed: [
      "Active on social media but no clear sense of what the programme is for or how success is defined",
      "Investing in content for platforms that do not reach the priority audience",
      "Inconsistent brand voice across channels because no shared strategy guides editorial decisions",
      "Social media investment not justified by measurable commercial or audience outcomes",
    ],
    capabilities: [
      {
        name: "Audience Research",
        description:
          "Identify and profile priority audiences — where they are, what they consume, and how they engage on social platforms.",
      },
      {
        name: "Platform Strategy",
        description:
          "Define which platforms to invest in and what role each plays in the overall social communication strategy.",
      },
      {
        name: "Content Pillars & Voice",
        description:
          "Establish the content themes, editorial principles, and brand voice that guide consistent communication.",
      },
      {
        name: "Measurement Framework",
        description:
          "Design the KPIs, benchmarks, and reporting structure that connect social activity to defined objectives.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audience & Platform Analysis",
        description:
          "Research priority audiences and assess platform landscape for relevance and opportunity.",
      },
      {
        step: "02",
        title: "Strategy Development",
        description:
          "Define objectives, platform roles, content pillars, and brand voice.",
      },
      {
        step: "03",
        title: "Playbook Creation",
        description:
          "Document the social media strategy in a format that guides day-to-day execution.",
      },
      {
        step: "04",
        title: "Activation Planning",
        description:
          "Plan the transition from current state to strategy-led execution.",
      },
    ],
    outcomes: [
      {
        title: "Defined social direction",
        description:
          "A clear, documented strategy that gives social media activity a purpose and the team clear guidance.",
      },
      {
        title: "Platform focus",
        description:
          "A prioritized platform approach that concentrates investment where it will have the most impact.",
      },
    ],
    faqs: [
      {
        question: "Is strategy delivered before or alongside management?",
        answer:
          "We recommend developing the strategy before beginning a management programme. A clear strategy brief ensures that content production and publishing activity is purposeful from day one.",
      },
    ],
    relatedProducts: [
      "rico-social",
      "rico-analytics",
      "rico-audience",
      "rico-intel",
    ],
    relatedServices: [
      "social-media-management",
      "content-strategy",
      "digital-marketing-strategy",
    ],
    seo: {
      title: "Social Media Strategy Services | Ricoz",
      description:
        "Structured social media strategy. Audience research, platform analysis, content pillars, brand voice, and measurement framework development.",
    },
  },

  {
    id: "social-media-advertising",
    slug: "social-media-advertising",
    name: "Social Media Advertising",
    category: "Social Media & Content",
    tagline:
      "Paid social that reaches the right audience at the right point in their journey",
    shortDescription:
      "Structured paid social advertising across major platforms — covering audience targeting, creative direction, campaign management, and performance optimization for reach, engagement, and conversion objectives.",
    heroStatement:
      "Paid social advertising's unique advantage is precision — reaching a defined audience with the right message at the right moment.",
    overview:
      "Social media advertising offers unmatched audience targeting capability — but that capability is wasted without the right creative, clear campaign structure, and disciplined optimization. Our Social Media Advertising service provides the campaign strategy, audience architecture, creative direction, and continuous performance management needed to run paid social programmes that deliver against awareness, engagement, and conversion objectives.",
    problemsAddressed: [
      "Paid social spend generating reach and impressions but not driving measurable downstream commercial outcomes",
      "Audience targeting too broad — budget wasted reaching audiences with low conversion probability",
      "Ad creative not differentiated enough to break through the content volume of social feeds",
      "Paid social managed without a clear attribution framework connecting spend to business results",
    ],
    capabilities: [
      {
        name: "Audience Architecture",
        description:
          "Build precise audience segments using interest, behavioural, lookalike, and retargeting approaches.",
      },
      {
        name: "Campaign Structure",
        description:
          "Design campaign architecture with clear objective alignment across awareness, consideration, and conversion stages.",
      },
      {
        name: "Creative Direction",
        description:
          "Brief and direct paid social creative to maximize relevance and performance for each audience and stage.",
      },
      {
        name: "Performance Optimization",
        description:
          "Continuously optimize campaigns based on performance data — audience, creative, placement, and bid adjustments.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Strategy",
        description:
          "Assess existing paid social activity or design a new programme strategy from scratch.",
      },
      {
        step: "02",
        title: "Campaign Build",
        description:
          "Build audience segments, campaign structure, and creative assets.",
      },
      {
        step: "03",
        title: "Launch & Monitor",
        description:
          "Launch campaigns with close monitoring during the initial learning period.",
      },
      {
        step: "04",
        title: "Optimize & Report",
        description:
          "Optimize performance continuously and provide regular reporting against objectives.",
      },
    ],
    outcomes: [
      {
        title: "Targeted audience reach",
        description:
          "Campaigns reaching precisely defined audiences at a lower cost per relevant impression.",
      },
      {
        title: "Improved conversion performance",
        description:
          "Better conversion rates from paid social through improved audience relevance and creative quality.",
      },
    ],
    faqs: [
      {
        question: "Which social platforms do you run paid campaigns on?",
        answer:
          "We manage paid social campaigns across major social platforms. Platform selection is based on where your target audience is most active and which platforms offer the most appropriate targeting for your objectives.",
      },
    ],
    relatedProducts: [
      "rico-social",
      "rico-campaign",
      "rico-audience",
      "rico-convert",
    ],
    relatedServices: [
      "performance-marketing",
      "social-media-strategy",
      "digital-marketing-strategy",
    ],
    seo: {
      title: "Social Media Advertising Services | Ricoz",
      description:
        "Paid social advertising management. Audience targeting, campaign structure, creative direction, and performance optimization across major social platforms.",
    },
  },

  {
    id: "content-strategy",
    slug: "content-strategy",
    name: "Content Strategy",
    category: "Social Media & Content",
    tagline:
      "Content that serves audiences and supports business objectives in equal measure",
    shortDescription:
      "Structured content strategy advisory — defining what content to produce, for whom, across which channels, and how to measure its contribution to audience and business goals.",
    heroStatement:
      "Content without strategy produces volume. Content strategy produces results.",
    overview:
      "Most organizations produce significantly more content than they need to — and often the wrong content for the audiences that matter most. Our Content Strategy service applies a rigorous, audience-first methodology to define what content is genuinely needed, where it should live, how it should be structured, and how its performance should be measured. The output is a practical strategy that reduces wasted effort while improving the value content delivers to audiences and the business.",
    problemsAddressed: [
      "Content production consuming resource without clear evidence of contribution to business objectives",
      "Content gaps in the customer journey — audiences not finding the information they need at key decision points",
      "Multiple teams producing content independently without a shared strategy or editorial governance",
      "Content not findable — poor SEO, information architecture, or distribution strategy limiting content reach",
    ],
    capabilities: [
      {
        name: "Audience Content Needs Analysis",
        description:
          "Map the information needs of priority audiences at each stage of their relationship with the organization.",
      },
      {
        name: "Content Gap Assessment",
        description:
          "Evaluate existing content against audience needs and competitive context to identify the most valuable gaps.",
      },
      {
        name: "Content Architecture",
        description:
          "Design the content types, formats, channels, and governance structures needed for a coherent content programme.",
      },
      {
        name: "Distribution & Measurement",
        description:
          "Define how content reaches its audience and establish the metrics that connect content activity to business outcomes.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Research",
        description:
          "Assess existing content, audience needs, and the content landscape.",
      },
      {
        step: "02",
        title: "Strategy Development",
        description:
          "Define the content strategy, architecture, and governance model.",
      },
      {
        step: "03",
        title: "Roadmap & Guidelines",
        description:
          "Develop the content roadmap and editorial guidelines for the programme.",
      },
      {
        step: "04",
        title: "Activation Support",
        description:
          "Support the transition to strategy-led content production.",
      },
    ],
    outcomes: [
      {
        title: "Purposeful content programme",
        description:
          "A content programme defined by audience need and business objectives rather than production habit.",
      },
      {
        title: "Reduced content waste",
        description:
          "Resources focused on content that genuinely serves audience needs — eliminating effort spent on content that does not.",
      },
    ],
    faqs: [
      {
        question: "Does content strategy include content production?",
        answer:
          "Content Strategy is a strategy and planning service. Content production — writing, design, video — is a downstream activity that follows from a clear strategy brief.",
      },
    ],
    relatedProducts: [
      "rico-content",
      "rico-analytics",
      "rico-intel",
      "rico-doc",
    ],
    relatedServices: [
      "social-media-strategy",
      "brand-content-development",
      "search-engine-optimization",
    ],
    seo: {
      title: "Content Strategy Services | Ricoz",
      description:
        "Audience-first content strategy. Content gap analysis, architecture, editorial governance, distribution planning, and measurement framework development.",
    },
  },

  {
    id: "content-creation",
    slug: "content-creation",
    name: "Content Creation",
    category: "Social Media & Content",
    tagline: "High-quality content produced to brief, on time, and on brand",
    shortDescription:
      "Professional content creation services — covering written, visual, and multimedia content — for organizations that need consistent, on-brand content produced to editorial and audience standards.",
    heroStatement:
      "Content quality is the difference between an audience that grows and one that churns.",
    overview:
      "Content creation at scale requires more than writing ability — it requires editorial discipline, brand alignment, audience understanding, and production processes that maintain quality consistently. Our Content Creation service provides the structured production capability to deliver written, visual, and multimedia content across digital channels — from thought leadership articles and website copy through email content and social media assets — to the standard that professional audiences expect.",
    problemsAddressed: [
      "Content production inconsistent in quality, tone, or frequency due to internal capacity constraints",
      "Written content not meeting the editorial standards required for professional or technical audiences",
      "Brand voice inconsistent across content produced by multiple contributors or teams",
      "Content production backlog preventing timely delivery of high-priority communications",
    ],
    capabilities: [
      {
        name: "Written Content",
        description:
          "Produce long-form articles, thought leadership pieces, website copy, email content, and short-form written assets to brief.",
      },
      {
        name: "Visual Content",
        description:
          "Create branded graphics, infographics, and visual assets appropriate to each channel and content purpose.",
      },
      {
        name: "Editorial Management",
        description:
          "Manage the content production workflow — briefing, production, review, and approval — to a consistent quality standard.",
      },
      {
        name: "Brand Voice Adherence",
        description:
          "Ensure all content produced meets brand voice guidelines and editorial standards through structured review processes.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brief & Align",
        description:
          "Develop content briefs and align on tone, audience, format, and objectives.",
      },
      {
        step: "02",
        title: "Production",
        description:
          "Produce content according to agreed briefs and editorial standards.",
      },
      {
        step: "03",
        title: "Review & Approval",
        description:
          "Manage the review and approval workflow to maintain quality and brand alignment.",
      },
      {
        step: "04",
        title: "Deliver & Measure",
        description:
          "Deliver finalized content and track performance against defined metrics.",
      },
    ],
    outcomes: [
      {
        title: "Consistent content quality",
        description:
          "A reliable, high-quality output of content that meets editorial standards and audience expectations.",
      },
      {
        title: "Freed internal capacity",
        description:
          "Internal teams able to focus on strategy and specialized activity rather than content production overhead.",
      },
    ],
    faqs: [
      {
        question:
          "Do you produce content across multiple formats and channels?",
        answer:
          "Yes. We produce written and visual content across digital channels including website, email, social media, and long-form publications.",
      },
    ],
    relatedProducts: ["rico-content", "rico-spark", "rico-doc", "rico-social"],
    relatedServices: [
      "content-strategy",
      "brand-content-development",
      "social-media-management",
    ],
    seo: {
      title: "Content Creation Services | Ricoz",
      description:
        "Professional content creation for digital channels. Written, visual, and multimedia content produced to editorial standards and brand guidelines.",
    },
  },

  {
    id: "brand-content-development",
    slug: "brand-content-development",
    name: "Brand Content Development",
    category: "Social Media & Content",
    tagline: "Content that reflects the organization as it wants to be known",
    shortDescription:
      "Strategic brand content development — producing thought leadership, editorial, and brand narrative content that builds organizational credibility, communicates positioning, and deepens audience relationships.",
    heroStatement:
      "The organizations most trusted in their markets are almost always the ones that communicate most clearly about what they know and believe.",
    overview:
      "Brand content serves a fundamentally different purpose from performance content. It is not optimized for conversion — it is designed to build credibility, communicate expertise, establish a point of view, and earn the attention of audiences who choose to engage because the content has genuine value. Our Brand Content Development service produces the editorial, thought leadership, and brand narrative content that builds organizational reputation over time.",
    problemsAddressed: [
      "Organization perceived as a vendor rather than an authority in its field due to absence of credible content",
      "Brand narrative not communicated consistently or compellingly across owned and external channels",
      "Thought leadership content absent or not aligned to the positioning and expertise the organization wants to be known for",
      "Content programme focused entirely on product and sales content, without the editorial depth that builds trust",
    ],
    capabilities: [
      {
        name: "Thought Leadership",
        description:
          "Develop substantive, original content that communicates expertise, insight, and perspective on issues relevant to priority audiences.",
      },
      {
        name: "Brand Narrative Content",
        description:
          "Create content that expresses the organizational story, values, and positioning in ways that resonate with audiences.",
      },
      {
        name: "Executive Content",
        description:
          "Develop attributed content for executive and leadership voices — articles, commentary, and platform contributions.",
      },
      {
        name: "Long-Form Editorial",
        description:
          "Produce longer-form editorial content — guides, reports, and perspectives — that establishes depth and authority.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brand & Audience Brief",
        description:
          "Understand the brand positioning, target audiences, and content objectives.",
      },
      {
        step: "02",
        title: "Editorial Strategy",
        description:
          "Develop the editorial themes, content formats, and publishing approach.",
      },
      {
        step: "03",
        title: "Content Development",
        description:
          "Produce high-quality brand content through a structured briefing and review process.",
      },
      {
        step: "04",
        title: "Distribution & Measurement",
        description:
          "Plan content distribution and track engagement against defined audience objectives.",
      },
    ],
    outcomes: [
      {
        title: "Stronger brand credibility",
        description:
          "A portfolio of high-quality content that positions the organization as a credible, knowledgeable authority.",
      },
      {
        title: "Consistent brand narrative",
        description:
          "Content that reinforces a coherent organizational story across channels and over time.",
      },
    ],
    faqs: [
      {
        question: "How is brand content different from marketing content?",
        answer:
          "Brand content is designed to build trust and reputation over time rather than to drive immediate conversion. It invests in audience relationships rather than optimizing for short-term commercial response.",
      },
    ],
    relatedProducts: [
      "rico-content",
      "rico-engage",
      "rico-social",
      "rico-analytics",
    ],
    relatedServices: ["content-strategy", "content-creation", "brand-strategy"],
    seo: {
      title: "Brand Content Development Services | Ricoz",
      description:
        "Thought leadership, editorial, and brand narrative content development that builds organizational credibility and deepens audience relationships.",
    },
  },

  {
    id: "community-management",
    slug: "community-management",
    name: "Community Management",
    category: "Social Media & Content",
    tagline:
      "Building and maintaining the audience relationships that make social presence valuable",
    shortDescription:
      "Professional community management services that maintain active, positive engagement with audiences across social and digital channels — protecting brand reputation and deepening audience relationships.",
    heroStatement:
      "A social audience is an asset — community management determines whether it grows, engages, or quietly disappears.",
    overview:
      "Community management is the human layer of a social media presence — responding to comments, managing conversations, addressing concerns, and building the reciprocal relationships that turn followers into advocates. Poorly managed or unresponsive social channels damage brand perception. Our Community Management service provides the structured, trained, and brand-aligned management capability to maintain the quality of audience interaction that builds genuine community.",
    problemsAddressed: [
      "Social channels accumulating unanswered comments and messages, creating a poor audience impression",
      "Negative comments or complaints not managed promptly, escalating into reputation issues",
      "Community interactions not consistent with brand tone and values",
      "Internal team unable to provide the response frequency and quality that active social channels require",
    ],
    capabilities: [
      {
        name: "Engagement Management",
        description:
          "Monitor and respond to comments, mentions, and messages across managed channels within defined response time targets.",
      },
      {
        name: "Reputation Monitoring",
        description:
          "Monitor brand mentions and sentiment across social and digital channels with escalation protocols for issues.",
      },
      {
        name: "Crisis Response",
        description:
          "Identify and manage reputational issues or escalating conversations according to defined protocols.",
      },
      {
        name: "Community Reporting",
        description:
          "Provide regular reporting on community health metrics — engagement, sentiment, response time, and audience growth.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brand Voice Alignment",
        description:
          "Develop response guidelines, tone framework, and escalation protocols aligned to the brand.",
      },
      {
        step: "02",
        title: "Monitoring Setup",
        description:
          "Configure monitoring tools and establish the workflow for managing community interactions.",
      },
      {
        step: "03",
        title: "Active Management",
        description:
          "Provide ongoing community management across managed channels to defined response standards.",
      },
      {
        step: "04",
        title: "Report & Improve",
        description:
          "Report on community metrics and continuously improve the engagement quality.",
      },
    ],
    outcomes: [
      {
        title: "Responsive social presence",
        description:
          "Audiences receiving timely, brand-appropriate responses that reinforce a positive perception of the organization.",
      },
      {
        title: "Protected brand reputation",
        description:
          "Issues identified and managed early before they escalate into reputational problems.",
      },
    ],
    faqs: [
      {
        question: "Do you provide out-of-hours community management coverage?",
        answer:
          "Yes. We can provide extended-hours and out-of-hours community management coverage for organizations where audience activity or reputational risk requires it.",
      },
    ],
    relatedProducts: [
      "rico-social",
      "rico-engage",
      "rico-desk",
      "rico-analytics",
    ],
    relatedServices: [
      "social-media-management",
      "social-media-strategy",
      "brand-content-development",
    ],
    seo: {
      title: "Community Management Services | Ricoz",
      description:
        "Professional social media community management. Engagement, reputation monitoring, crisis response, and community reporting across digital channels.",
    },
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
