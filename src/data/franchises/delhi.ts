import type { Franchise } from "./types"
import { defaultFranchiseTheme, defaultFranchiseNavigation } from "./defaults"

export const delhiFranchise: Franchise = {
  slug: "delhi",
  name: "Ricoz Delhi",
  city: "Delhi",
  region: "Delhi NCR",
  status: "active",
  shortDescription:
    "Strategic thinking, technology and digital capabilities for organisations across Delhi and NCR.",
  positioning:
    "Strategic thinking backed by practical technology and execution.",
  director: {
    name: null,
    designation: "Franchise Director, Ricoz Delhi",
    portrait: { src: null, alt: "Ricoz Delhi Franchise Director" },
    shortBio: null,
    statement: null,
    socialLinks: [],
    email: null,
    phone: null,
  },
  contact: {
    email: "care@ricoz.in",
    phone: "+91 70421 60626",
    address: null,
    city: "Delhi",
    region: "Delhi NCR",
  },
  navigation: {
    ...defaultFranchiseNavigation,
    cta: {
      label: "Discuss your requirement",
      href: "/contact?franchise=delhi",
    },
  },
  theme: {
    ...defaultFranchiseTheme,
    typographyTreatment: "classic",
  },
  hero: {
    eyebrow: "NATIONAL CAPITAL REGION",
    headline: "Strategy that moves business forward.",
    statement:
      "Ricoz Delhi brings together strategic thinking, technology and digital capabilities to help organisations make better decisions and execute with confidence.",
    primaryCta: {
      label: "Discuss your requirement",
      href: "/contact?franchise=delhi",
    },
    secondaryCta: {
      label: "Schedule a Consultation",
      href: "/consultation?franchise=delhi",
    },
    style: "split",
  },
  sections: [
    {
      type: "local-introduction",
      eyebrow: "THE BUSINESS CONTEXT",
      headline: "Complex problems need more than isolated solutions.",
      body: "Technology decisions increasingly affect operations, customer experience, growth and long-term competitiveness. Ricoz Delhi helps bring those considerations together so businesses can move from individual initiatives toward a clearer strategic direction.",
    },
    {
      type: "challenges",
      headline: "The right questions come before the right technology.",
      subheadline:
        "We start by understanding where you are, where you want to go, and what is standing in the way.",
      items: [
        {
          title: "Where are we going?",
          body: "Clarify business objectives and priorities.",
        },
        {
          title: "What is holding us back?",
          body: "Identify operational, digital and technology constraints.",
        },
        {
          title: "What should change first?",
          body: "Prioritise opportunities based on impact and feasibility.",
        },
        {
          title: "What should we build?",
          body: "Identify the right combination of products, services and solutions.",
        },
        {
          title: "How do we make it happen?",
          body: "Translate strategy into practical execution.",
        },
      ],
    },
    {
      type: "capabilities",
      headline: "From strategic direction to execution.",
      pillars: [
        {
          title: "Strategy",
          description:
            "Business consulting, transformation, market research, growth and product strategy.",
          cta: { label: "Explore Services", href: "/services" },
        },
        {
          title: "Technology",
          description:
            "Products, implementation, integration and digital capabilities.",
          cta: { label: "Explore Products", href: "/products" },
        },
        {
          title: "Execution",
          description:
            "Marketing, operations, data, security and ongoing support.",
          cta: { label: "Explore Solutions", href: "/solutions" },
        },
      ],
    },
    {
      type: "products",
      headline: "Technology with a reason to exist.",
      statement:
        "Explore products from the Ricoz ecosystem that can support the operational and digital priorities behind your strategy.",
      productSlugs: [
        "rico-analytics",
        "rico-flow",
        "rico-shield",
        "rico-connect",
        "data-analytics",
        "ai-intelligence",
      ],
      cta: { label: "Explore Products", href: "/products" },
    },
    {
      type: "services",
      headline: "Expertise for decisions that matter.",
      statement:
        "Bring specialist thinking and practical execution together around the decisions shaping your business.",
      serviceSlugs: [
        "business-consulting",
        "market-research",
        "brand-strategy",
        "go-to-market-strategy",
        "growth-strategy",
        "digital-product-strategy",
        "customer-experience-consulting",
        "digital-transformation-consulting",
        "technology-strategy-roadmap",
        "data-analytics-services",
      ],
      cta: { label: "Explore Services", href: "/services" },
    },
    {
      type: "solutions",
      headline: "Connect strategy to action.",
      statement:
        "Move beyond isolated initiatives with solutions that bring business requirements, technology and execution together.",
      solutionSlugs: [
        "revenue-growth",
        "customer-experience",
        "data-intelligence",
        "technology-modernization",
        "cybersecurity",
        "financial-management",
      ],
      cta: { label: "Explore Solutions", href: "/solutions" },
    },
    {
      type: "industries",
      headline: "Context changes the answer.",
      statement:
        "Our approach begins with understanding the environment in which your organisation operates.",
      industries: [
        { name: "Financial Services" },
        { name: "Professional Services" },
        { name: "Real Estate" },
        { name: "Healthcare" },
        { name: "Education" },
        { name: "Retail & Consumer" },
        { name: "Manufacturing" },
        { name: "Logistics" },
        { name: "Technology & Startups" },
      ],
    },
    {
      type: "how-we-work",
      headline: "Strategy to execution.",
      steps: [
        {
          number: "01",
          title: "Discover",
          body: "Understand the business, market and current state.",
        },
        {
          number: "02",
          title: "Define",
          body: "Establish priorities, objectives and measurable direction.",
        },
        {
          number: "03",
          title: "Design",
          body: "Develop the appropriate strategy, solution or product approach.",
        },
        {
          number: "04",
          title: "Deliver",
          body: "Translate the plan into practical execution.",
        },
        {
          number: "05",
          title: "Evolve",
          body: "Improve continuously as the business changes.",
        },
      ],
    },
    {
      type: "director",
      headline: "Local leadership. Broader perspective.",
    },
    {
      type: "franchise-network",
      headline: "Local presence. Connected ecosystem.",
      statement:
        "Ricoz operates through a growing network of locally led franchises across India.",
      currentSlug: "delhi",
    },
    {
      type: "conversion",
      eyebrow: "NATIONAL CAPITAL REGION",
      headline: "Let's turn the next decision into a clear direction.",
      statement:
        "Tell us where your business is today and where you want it to go. We'll help identify the right path forward.",
      primaryCta: {
        label: "Discuss your requirement",
        href: "/contact?franchise=delhi",
      },
      secondaryCta: {
        label: "Schedule a Consultation",
        href: "/consultation?franchise=delhi",
      },
    },
  ],
  seo: {
    title: "Ricoz Delhi — Strategy, Technology & Business Transformation",
    description:
      "Ricoz Delhi delivers strategic thinking, technology and digital capabilities for ambitious organisations across Delhi and NCR.",
    canonical: "/franchise/delhi",
    keywords: [
      "Ricoz Delhi",
      "technology consulting Delhi",
      "business strategy Delhi",
      "digital transformation NCR",
    ],
    ogTitle: "Ricoz Delhi — Strategy that Moves Business Forward",
    ogDescription:
      "Strategic thinking backed by technology and execution. Business transformation for organisations across Delhi NCR.",
    ogImage: null,
  },
}
