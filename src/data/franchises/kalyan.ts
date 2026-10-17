import type { Franchise } from "./types"
import { defaultFranchiseTheme, defaultFranchiseNavigation } from "./defaults"

export const kalyanFranchise: Franchise = {
  slug: "kalyan",
  name: "Ricoz Kalyan",
  city: "Kalyan",
  region: "Maharashtra",
  status: "active",
  shortDescription:
    "Technology and business expertise delivered through a local relationship, for businesses across Kalyan-Dombivli and the Mumbai Metropolitan Region.",
  positioning:
    "Technology and business expertise, delivered through a relationship you can actually build.",
  director: {
    name: null,
    designation: "Franchise Director, Ricoz Kalyan",
    portrait: { src: null, alt: "Ricoz Kalyan Franchise Director" },
    shortBio: null,
    statement: null,
    socialLinks: [],
    email: null,
    phone: null,
  },
  contact: {
    email: "kalyanbranch@ricoz.in",
    phone: "+91 99203 07107",
    address: null,
    city: "Kalyan",
    region: "Maharashtra",
  },
  navigation: {
    ...defaultFranchiseNavigation,
    cta: {
      label: "Discuss your requirement",
      href: "/contact?franchise=kalyan",
    },
  },
  theme: {
    ...defaultFranchiseTheme,
    typographyTreatment: "modern",
  },
  hero: {
    eyebrow: "THANE DISTRICT · INDIA",
    headline: "Technology works better when it starts with people.",
    statement:
      "Ricoz Kalyan helps businesses find practical ways to improve technology, digital growth and operations — with local understanding and the wider Ricoz ecosystem behind every conversation.",
    primaryCta: {
      label: "Discuss your requirement",
      href: "/contact?franchise=kalyan",
    },
    secondaryCta: {
      label: "Schedule a Consultation",
      href: "/consultation?franchise=kalyan",
    },
    style: "editorial",
  },
  sections: [
    {
      type: "local-introduction",
      eyebrow: "START WITH THE BUSINESS",
      headline:
        "Before recommending technology, understand what the business actually needs.",
      body: "Every organisation has different priorities, constraints and ambitions. Our approach starts with listening, understanding the situation and identifying where Ricoz can create the most useful impact.",
    },
    {
      type: "challenges",
      headline: "Bring us the problem. We'll help find the path.",
      subheadline:
        "Whether you need to build something new, improve what exists or reach new customers, we can help identify the right capability.",
      items: [
        {
          title: "Build",
          body: "Digital products and technology capabilities.",
        },
        {
          title: "Grow",
          body: "Digital marketing, customer acquisition and growth strategy.",
        },
        {
          title: "Connect",
          body: "Integration, systems and operational workflows.",
        },
        {
          title: "Understand",
          body: "Data, intelligence and business insights.",
        },
        {
          title: "Protect",
          body: "Security, compliance and resilience.",
        },
        {
          title: "Improve",
          body: "Operations, efficiency and transformation.",
        },
      ],
    },
    {
      type: "capabilities",
      headline: "Local conversation. Wider capability.",
      pillars: [
        {
          title: "Products",
          description: "Technology capabilities ready to deploy.",
          cta: { label: "Explore Products", href: "/products" },
        },
        {
          title: "Services",
          description: "Specialist expertise and execution.",
          cta: { label: "Explore Services", href: "/services" },
        },
        {
          title: "Solutions",
          description: "Connected approaches to broader business requirements.",
          cta: { label: "Explore Solutions", href: "/solutions" },
        },
      ],
    },
    {
      type: "products",
      headline: "Useful technology, without unnecessary complexity.",
      statement:
        "Explore products from the Ricoz ecosystem that can help businesses operate, connect and grow more effectively.",
      productSlugs: [
        "rico-analytics",
        "rico-flow",
        "rico-connect",
        "sales-crm",
        "marketing-growth",
        "customer-experience",
      ],
      cta: { label: "Explore Products", href: "/products" },
    },
    {
      type: "services",
      headline: "Expertise that fits the real situation.",
      statement:
        "Whether you need to build something new, improve an existing operation or grow digitally, connect with the right Ricoz capability.",
      serviceSlugs: [
        "enterprise-systems-integration",
        "process-optimization",
        "go-to-market-strategy",
        "growth-strategy",
        "data-analytics-services",
        "business-consulting",
        "cybersecurity-advisory",
        "digital-transformation-consulting",
      ],
      cta: { label: "Explore Services", href: "/services" },
    },
    {
      type: "solutions",
      headline: "Bigger problems need connected thinking.",
      statement:
        "When a requirement crosses technology, operations, customers and growth, Ricoz brings the right capabilities together.",
      solutionSlugs: [
        "revenue-growth",
        "customer-experience",
        "business-automation",
        "people-operations",
        "data-intelligence",
        "cybersecurity",
      ],
      cta: { label: "Explore Solutions", href: "/solutions" },
    },
    {
      type: "industries",
      headline: "Every business has a different starting point.",
      statement:
        "We engage with businesses at different stages — from first digital steps to complex transformation.",
      industries: [
        { name: "Starting a business" },
        { name: "Building digital capability" },
        { name: "Improving operations" },
        { name: "Reaching more customers" },
        { name: "Preparing for growth" },
      ],
    },
    {
      type: "how-we-work",
      headline: "How we work together.",
      steps: [
        {
          number: "01",
          title: "Talk",
          body: "Start with a conversation.",
        },
        {
          number: "02",
          title: "Understand",
          body: "Understand the business and requirement.",
        },
        {
          number: "03",
          title: "Recommend",
          body: "Identify the appropriate products, services or solutions.",
        },
        {
          number: "04",
          title: "Build",
          body: "Turn the agreed direction into execution.",
        },
        {
          number: "05",
          title: "Continue",
          body: "Stay connected as the requirement evolves.",
        },
      ],
    },
    {
      type: "director",
      headline: "A local team you can speak to directly.",
    },
    {
      type: "franchise-network",
      headline: "And when you need more, you're still connected to Ricoz.",
      statement:
        "Start locally. Access the full Ricoz ecosystem when your requirement grows.",
      currentSlug: "kalyan",
    },
    {
      type: "conversion",
      eyebrow: "THANE DISTRICT · INDIA",
      headline: "Start with a conversation.",
      statement:
        "Tell us what you're working on. We'll help you understand what the next step could look like.",
      primaryCta: {
        label: "Discuss your requirement",
        href: "/contact?franchise=kalyan",
      },
      secondaryCta: {
        label: "Schedule a Consultation",
        href: "/consultation?franchise=kalyan",
      },
    },
  ],
  seo: {
    title: "Ricoz Kalyan — Technology & Business Transformation",
    description:
      "Ricoz Kalyan delivers local technology expertise and business transformation for organisations across Kalyan-Dombivli and the Mumbai Metropolitan Region.",
    canonical: "/franchise/kalyan",
    keywords: [
      "Ricoz Kalyan",
      "technology Kalyan",
      "digital business Kalyan",
      "business growth MMR",
    ],
    ogTitle:
      "Ricoz Kalyan — Technology Works Better When It Starts with People",
    ogDescription:
      "Local leadership. Ricoz ecosystem. Practical technology and business support for businesses across Kalyan and MMR.",
    ogImage: null,
  },
}
