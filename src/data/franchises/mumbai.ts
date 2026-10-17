import type { Franchise } from "./types"
import { defaultFranchiseTheme, defaultFranchiseNavigation } from "./defaults"

export const mumbaiFranchise: Franchise = {
  slug: "mumbai",
  name: "Ricoz Mumbai",
  city: "Mumbai",
  region: "Maharashtra",
  status: "active",
  shortDescription:
    "Technology, digital growth and business transformation for organisations moving at Mumbai speed.",
  positioning: "Ricoz capabilities with a Mumbai-level pace of execution.",
  director: {
    name: null,
    designation: "Franchise Director, Ricoz Mumbai",
    portrait: { src: null, alt: "Ricoz Mumbai Franchise Director" },
    shortBio: null,
    statement: null,
    socialLinks: [],
    email: null,
    phone: null,
  },
  contact: {
    email: "info@ricoz.in",
    phone: "+91 70500 62084",
    address: null,
    city: "Mumbai",
    region: "Maharashtra",
  },
  navigation: {
    ...defaultFranchiseNavigation,
    cta: {
      label: "Discuss your requirement",
      href: "/contact?franchise=mumbai",
    },
  },
  theme: {
    ...defaultFranchiseTheme,
    typographyTreatment: "editorial",
    footerStyle: "dark",
  },
  hero: {
    eyebrow: "MAHARASHTRA · INDIA",
    headline: "Built for businesses that move at Mumbai speed.",
    statement:
      "Technology, digital growth and business transformation delivered locally, with the capabilities of the Ricoz ecosystem behind you.",
    primaryCta: {
      label: "Discuss your requirement",
      href: "/contact?franchise=mumbai",
    },
    secondaryCta: {
      label: "Schedule a Consultation",
      href: "/consultation?franchise=mumbai",
    },
    style: "asymmetric",
  },
  sections: [
    {
      type: "local-introduction",
      eyebrow: "MUMBAI / MOMENTUM",
      headline:
        "When the market moves fast, your business needs to move smarter.",
      body: "Mumbai brings together ambitious businesses, competitive markets and rapidly changing customer expectations. Ricoz Mumbai helps organisations respond with the technology, digital capabilities and strategic support required to keep moving forward.",
    },
    {
      type: "challenges",
      headline: "Business challenges rarely arrive one at a time.",
      subheadline:
        "Growth, technology, customer experience and operational efficiency are increasingly connected. We help bring those requirements together into a clearer path forward.",
      items: [
        {
          title: "Modernise",
          body: "Replace fragmented or outdated technology with scalable systems.",
        },
        {
          title: "Grow",
          body: "Create stronger digital acquisition and customer experiences.",
        },
        {
          title: "Connect",
          body: "Bring platforms, processes and teams together.",
        },
        {
          title: "Understand",
          body: "Use data and intelligence to make better decisions.",
        },
        {
          title: "Protect",
          body: "Strengthen security, compliance and operational resilience.",
        },
        {
          title: "Execute",
          body: "Turn strategy into practical implementation.",
        },
      ],
    },
    {
      type: "capabilities",
      headline: "One ecosystem. Multiple capabilities.",
      pillars: [
        {
          title: "Products",
          description:
            "Technology products designed to support modern business operations.",
          cta: { label: "Explore Products", href: "/products" },
        },
        {
          title: "Services",
          description:
            "Implementation, strategy, digital, operations, data and security expertise.",
          cta: { label: "Explore Services", href: "/services" },
        },
        {
          title: "Solutions",
          description:
            "Connected approaches designed around broader business requirements.",
          cta: { label: "Explore Solutions", href: "/solutions" },
        },
      ],
    },
    {
      type: "products",
      headline: "Technology that supports the work.",
      statement:
        "Explore selected Ricoz products available through the Mumbai franchise ecosystem.",
      productSlugs: [
        "rico-analytics",
        "rico-flow",
        "rico-connect",
        "rico-shield",
        "sales-crm",
        "data-analytics",
      ],
      cta: { label: "Explore all products", href: "/products" },
    },
    {
      type: "services",
      headline: "Expertise when execution matters.",
      statement:
        "From strategy and transformation to implementation and digital growth, access the broader Ricoz service ecosystem through the Mumbai team.",
      serviceSlugs: [
        "business-consulting",
        "digital-product-strategy",
        "go-to-market-strategy",
        "growth-strategy",
        "data-analytics-services",
        "cybersecurity-advisory",
        "digital-transformation-consulting",
        "technology-strategy-roadmap",
      ],
      cta: { label: "Explore all services", href: "/services" },
    },
    {
      type: "solutions",
      headline: "Solutions built around business outcomes.",
      statement:
        "Bring technology, strategy and execution together around the problem you're actually trying to solve.",
      solutionSlugs: [
        "revenue-growth",
        "customer-experience",
        "data-intelligence",
        "technology-modernization",
        "cybersecurity",
        "business-automation",
      ],
      cta: { label: "Explore Solutions", href: "/solutions" },
    },
    {
      type: "industries",
      headline: "Built for ambitious organisations.",
      statement:
        "Different industries face different pressures. Our approach starts with understanding the business before recommending the technology.",
      industries: [
        { name: "Professional Services" },
        { name: "Retail & Consumer" },
        { name: "Real Estate" },
        { name: "Financial Services" },
        { name: "Healthcare" },
        { name: "Education" },
        { name: "Manufacturing" },
        { name: "Startups & Growth Businesses" },
      ],
    },
    {
      type: "how-we-work",
      headline: "How we work.",
      steps: [
        {
          number: "01",
          title: "Understand",
          body: "We start with your business context, goals and challenges.",
        },
        {
          number: "02",
          title: "Define",
          body: "We identify the right combination of products, services and capabilities.",
        },
        {
          number: "03",
          title: "Execute",
          body: "Our teams turn the agreed direction into practical implementation.",
        },
        {
          number: "04",
          title: "Evolve",
          body: "The relationship continues as your business changes and grows.",
        },
      ],
    },
    {
      type: "director",
      headline: "Local leadership. Ricoz capability.",
    },
    {
      type: "ecosystem",
      headline: "Explore the Ricoz ecosystem.",
      links: [
        { label: "Products", href: "/products" },
        { label: "Services", href: "/services" },
        { label: "Solutions", href: "/solutions" },
        { label: "Resources", href: "/resources" },
        { label: "Case Studies", href: "/resources/case-studies" },
        { label: "About Ricoz", href: "/about" },
      ],
    },
    {
      type: "conversion",
      eyebrow: "MAHARASHTRA · INDIA",
      headline: "Have something you want to build, improve or solve?",
      statement:
        "Tell us what you're working on. The Mumbai team will help you identify the right place to start.",
      primaryCta: {
        label: "Discuss your requirement",
        href: "/contact?franchise=mumbai",
      },
      secondaryCta: {
        label: "Schedule a Consultation",
        href: "/consultation?franchise=mumbai",
      },
    },
  ],
  seo: {
    title: "Ricoz Mumbai — Technology & Business Transformation",
    description:
      "Ricoz Mumbai delivers technology, digital growth and business transformation for organisations across Mumbai and Maharashtra. Local capability, global ecosystem.",
    canonical: "/franchise/mumbai",
    keywords: [
      "Ricoz Mumbai",
      "technology consulting Mumbai",
      "digital transformation Mumbai",
      "business transformation Maharashtra",
    ],
    ogTitle:
      "Ricoz Mumbai — Technology, Digital Growth & Business Transformation",
    ogDescription:
      "Local leadership. Ricoz capability. Technology and digital growth for ambitious Mumbai businesses.",
    ogImage: null,
  },
}
