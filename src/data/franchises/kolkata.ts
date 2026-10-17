import type { Franchise } from "./types"
import { defaultFranchiseTheme, defaultFranchiseNavigation } from "./defaults"

export const kolkataFranchise: Franchise = {
  slug: "kolkata",
  name: "Ricoz Kolkata",
  city: "Kolkata",
  region: "West Bengal",
  status: "active",
  shortDescription: "Local perspective. Wider Ricoz capability.",
  positioning: "Technology with a sharper point of view.",
  director: {
    name: null,
    designation: "Franchise Director, Ricoz Kolkata",
    portrait: { src: null, alt: "Ricoz Kolkata Franchise Director" },
    shortBio: null,
    statement: null,
    socialLinks: [],
    email: null,
    phone: null,
  },
  contact: {
    email: "info@ricoz.in",
    phone: "+91 85850 63036",
    address: null,
    city: "Kolkata",
    region: "West Bengal",
  },
  navigation: {
    ...defaultFranchiseNavigation,
    cta: {
      label: "Discuss your requirement",
      href: "/contact?franchise=kolkata",
    },
  },
  theme: { ...defaultFranchiseTheme },
  hero: {
    eyebrow: "WEST BENGAL · INDIA",
    headline: "Technology with a sharper point of view.",
    statement:
      "Ricoz Kolkata brings technology, digital capability and business thinking together for organisations looking to evolve with clarity and confidence.",
    primaryCta: {
      label: "Discuss your requirement",
      href: "/contact?franchise=kolkata",
    },
    secondaryCta: {
      label: "Schedule a Consultation",
      href: "/consultation?franchise=kolkata",
    },
    style: "editorial",
  },
  sections: [
    {
      type: "local-introduction",
      eyebrow: "KOLKATA / BUSINESS & TECHNOLOGY",
      headline: "Established thinking. Modern capability.",
      body: "Businesses evolve differently. Ricoz Kolkata combines practical technology, digital capability and strategic thinking to help organisations move forward without losing sight of what already works.",
    },
    {
      type: "challenges",
      headline: "Questions worth asking.",
      subheadline:
        "Every business faces moments of strategic uncertainty. We help organisations think clearly and act decisively.",
      items: [
        {
          title: "What should we modernise first?",
          body: "Prioritising the right changes — rather than changing everything — is where real transformation begins.",
        },
        {
          title: "Where is technology creating unnecessary complexity?",
          body: "Complexity often accumulates quietly. Identifying where it costs most gives clarity on what to simplify.",
        },
        {
          title: "How do we improve customer experience?",
          body: "Better customer outcomes come from understanding the full journey and removing the friction inside it.",
        },
        {
          title: "How can digital growth become more consistent?",
          body: "Inconsistent growth is often a systems problem. The right digital foundations make results repeatable.",
        },
        {
          title:
            "What should we build internally — and what should we connect?",
          body: "Knowing which capabilities to own and which to integrate is a strategic decision, not just a technical one.",
        },
      ],
    },
    {
      type: "capabilities",
      headline: "Three capabilities. One connected approach.",
      pillars: [
        {
          title: "THINK",
          description:
            "Strategy, planning and business direction. We help organisations understand what to build, improve or change — and in what order.",
          cta: {
            label: "Explore Strategy services",
            href: "/services/category/strategy-transformation",
          },
        },
        {
          title: "BUILD",
          description:
            "Products, technology and implementation. From digital platforms to enterprise systems — we turn direction into working capability.",
          cta: { label: "Explore Products", href: "/products" },
        },
        {
          title: "GROW",
          description:
            "Digital marketing, customer engagement and operational improvement. We help organisations expand reach and improve how they operate.",
          cta: {
            label: "Explore Growth services",
            href: "/services/category/digital-marketing",
          },
        },
      ],
    },
    {
      type: "products",
      headline: "Useful technology for modern business.",
      statement:
        "Enterprise-grade products designed for the way organisations actually work.",
      productSlugs: [
        "sales-crm",
        "marketing-growth",
        "customer-experience",
        "data-analytics",
        "automation-workflow",
        "ai-intelligence",
      ],
      cta: { label: "Explore Products", href: "/products" },
    },
    {
      type: "services",
      headline: "Capability across every business dimension.",
      statement:
        "Ricoz services cover strategy, implementation, operations, marketing and more — applied to where your organisation needs to move.",
      serviceSlugs: [
        "digital-transformation-consulting",
        "enterprise-systems-integration",
        "process-optimization",
        "data-analytics-services",
        "cybersecurity-advisory",
        "go-to-market-strategy",
        "customer-experience-consulting",
      ],
      cta: { label: "Explore Services", href: "/services" },
    },
    {
      type: "solutions",
      headline: "Connected capability for complex requirements.",
      statement:
        "Integrated solutions that address the real challenges organisations face when technology, people and processes must work together.",
      solutionSlugs: [
        "revenue-growth",
        "customer-experience",
        "business-automation",
        "data-intelligence",
        "technology-modernization",
        "cybersecurity",
      ],
      cta: { label: "Explore Solutions", href: "/solutions" },
    },
    {
      type: "industries",
      headline: "Industries we can support.",
      statement:
        "We work with organisations across a range of sectors, applying Ricoz capability to the specific demands of each industry.",
      industries: [
        { name: "Retail" },
        { name: "Professional Services" },
        { name: "Education" },
        { name: "Hospitality" },
        { name: "Real Estate" },
        { name: "Manufacturing" },
        { name: "Healthcare" },
        { name: "Financial Services" },
        { name: "Technology" },
      ],
    },
    {
      type: "how-we-work",
      headline: "How we work.",
      steps: [
        {
          number: "01",
          title: "LISTEN",
          body: "Understand the business, context and requirement.",
        },
        {
          number: "02",
          title: "FRAME",
          body: "Define the real problem and the direction worth pursuing.",
        },
        {
          number: "03",
          title: "CREATE",
          body: "Shape the appropriate product, service or solution.",
        },
        {
          number: "04",
          title: "EXECUTE",
          body: "Turn the direction into practical implementation.",
        },
        {
          number: "05",
          title: "REFINE",
          body: "Learn, improve and evolve what has been built.",
        },
      ],
    },
    {
      type: "director",
      headline: "Local leadership. Wider perspective.",
    },
    {
      type: "franchise-network",
      headline: "One Ricoz ecosystem. Multiple local points of presence.",
      statement:
        "The Ricoz franchise network brings enterprise-grade capability to organisations across India — each city with local understanding, all connected to the wider Ricoz platform.",
      currentSlug: "kolkata",
    },
    {
      type: "conversion",
      eyebrow: "WEST BENGAL · INDIA",
      headline: "Let's build the right next step.",
      statement:
        "Tell us where the business is today and what you want to improve. We'll help you understand where to begin.",
      primaryCta: {
        label: "Discuss your requirement",
        href: "/contact?franchise=kolkata",
      },
      secondaryCta: {
        label: "Schedule a Consultation",
        href: "/consultation?franchise=kolkata",
      },
    },
  ],
  seo: {
    title: "Ricoz Kolkata — Technology, Digital & Business Capabilities",
    description:
      "Ricoz Kolkata delivers technology, digital capability and strategic business thinking for organisations in Kolkata and eastern India.",
    canonical: "/franchise/kolkata",
    ogImage: null,
  },
}
