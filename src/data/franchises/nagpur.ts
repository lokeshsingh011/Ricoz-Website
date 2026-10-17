import type { Franchise } from "./types"
import { defaultFranchiseTheme, defaultFranchiseNavigation } from "./defaults"

export const nagpurFranchise: Franchise = {
  slug: "nagpur",
  name: "Ricoz Nagpur",
  city: "Nagpur",
  region: "Maharashtra",
  status: "active",
  shortDescription:
    "Technology, digital growth and business transformation for organisations in central India.",
  positioning:
    "A strong local business presence connected to the wider Ricoz ecosystem.",
  director: {
    name: null,
    designation: "Franchise Director, Ricoz Nagpur",
    portrait: { src: null, alt: "Ricoz Nagpur Franchise Director" },
    shortBio: null,
    statement: null,
    socialLinks: [],
    email: null,
    phone: null,
  },
  contact: {
    email: "nagpurbranch@ricoz.in",
    phone: "+91 73854 40614",
    address: null,
    city: "Nagpur",
    region: "Maharashtra",
  },
  navigation: {
    ...defaultFranchiseNavigation,
    cta: {
      label: "Discuss your requirement",
      href: "/contact?franchise=nagpur",
    },
  },
  theme: {
    ...defaultFranchiseTheme,
    typographyTreatment: "modern",
  },
  hero: {
    eyebrow: "VIDARBHA REGION · INDIA",
    headline: "Technology for businesses ready for what's next.",
    statement:
      "Build stronger digital capabilities, modernise operations and turn ambitious ideas into practical business outcomes with Ricoz Nagpur.",
    primaryCta: {
      label: "Discuss your requirement",
      href: "/contact?franchise=nagpur",
    },
    secondaryCta: {
      label: "Schedule a Consultation",
      href: "/consultation?franchise=nagpur",
    },
    style: "editorial",
  },
  sections: [
    {
      type: "local-introduction",
      eyebrow: "NAGPUR / OPPORTUNITY",
      headline: "Growth is easier when the right capabilities are connected.",
      body: "Businesses are increasingly expected to improve technology, reach customers digitally, operate efficiently and make faster decisions. Ricoz Nagpur brings these capabilities together through one connected ecosystem.",
    },
    {
      type: "challenges",
      headline: "What businesses need now.",
      subheadline:
        "Modern growth requires progress across technology, digital presence and operational clarity — often at the same time.",
      items: [
        {
          title: "Modern Technology",
          body: "Build technology that can evolve with the business.",
        },
        {
          title: "Digital Reach",
          body: "Create stronger digital visibility and customer acquisition.",
        },
        {
          title: "Better Operations",
          body: "Connect processes, teams and systems.",
        },
        {
          title: "Smarter Decisions",
          body: "Turn business data into useful intelligence.",
        },
        {
          title: "Sustainable Growth",
          body: "Build foundations that support the next stage of growth.",
        },
      ],
    },
    {
      type: "capabilities",
      headline: "Everything your next stage of growth may require.",
      pillars: [
        {
          title: "Products",
          description: "Ready-to-use technology capabilities.",
          cta: { label: "Explore Products", href: "/products" },
        },
        {
          title: "Services",
          description: "Specialist strategy, implementation and execution.",
          cta: { label: "Explore Services", href: "/services" },
        },
        {
          title: "Solutions",
          description:
            "Connected approaches built around business requirements.",
          cta: { label: "Explore Solutions", href: "/solutions" },
        },
      ],
    },
    {
      type: "products",
      headline: "Technology that helps you move forward.",
      statement:
        "Explore selected products from the Ricoz ecosystem that can support modern business operations and growth.",
      productSlugs: [
        "rico-analytics",
        "rico-flow",
        "rico-connect",
        "sales-crm",
        "data-analytics",
        "marketing-growth",
      ],
      cta: { label: "Explore Products", href: "/products" },
    },
    {
      type: "services",
      headline: "Expertise that turns direction into action.",
      statement:
        "From strategy through execution, the Ricoz ecosystem brings together the capabilities required to solve complex business requirements.",
      serviceSlugs: [
        "business-consulting",
        "growth-strategy",
        "digital-product-strategy",
        "market-research",
        "enterprise-systems-integration",
        "data-analytics-services",
        "process-optimization",
        "go-to-market-strategy",
      ],
      cta: { label: "Explore Services", href: "/services" },
    },
    {
      type: "solutions",
      headline: "Connect the pieces. Solve the bigger problem.",
      statement:
        "When business challenges cross technology, operations and customer experience, a connected solution can create a clearer path forward.",
      solutionSlugs: [
        "revenue-growth",
        "customer-experience",
        "business-automation",
        "data-intelligence",
        "technology-modernization",
        "people-operations",
      ],
      cta: { label: "Explore Solutions", href: "/solutions" },
    },
    {
      type: "industries",
      headline:
        "Different businesses. Different challenges. One connected approach.",
      statement:
        "Our approach starts with understanding the specific pressures and opportunities of your business context.",
      industries: [
        { name: "Manufacturing" },
        { name: "Logistics" },
        { name: "Retail" },
        { name: "Professional Services" },
        { name: "Real Estate" },
        { name: "Healthcare" },
        { name: "Education" },
        { name: "Startups & Growth Businesses" },
      ],
    },
    {
      type: "how-we-work",
      headline: "The Nagpur approach.",
      steps: [
        {
          number: "01",
          title: "Understand",
          body: "Start with the business context.",
        },
        {
          number: "02",
          title: "Prioritise",
          body: "Identify what matters most.",
        },
        {
          number: "03",
          title: "Build",
          body: "Select the right products, services and capabilities.",
        },
        {
          number: "04",
          title: "Launch",
          body: "Turn strategy into practical execution.",
        },
        {
          number: "05",
          title: "Improve",
          body: "Continue evolving as requirements change.",
        },
      ],
    },
    {
      type: "director",
      headline: "Local perspective. Wider capability.",
    },
    {
      type: "ecosystem",
      headline: "There's more to explore.",
      links: [
        { label: "Products", href: "/products" },
        { label: "Services", href: "/services" },
        { label: "Solutions", href: "/solutions" },
        { label: "Resources", href: "/resources" },
        { label: "Case Studies", href: "/resources/case-studies" },
        { label: "About Ricoz", href: "/about" },
        { label: "Franchise Network", href: "/franchise" },
      ],
    },
    {
      type: "conversion",
      eyebrow: "VIDARBHA REGION · INDIA",
      headline: "Ready to work on what's next?",
      statement:
        "Tell us what you're trying to build, improve or solve. We'll help you find the right place to begin.",
      primaryCta: {
        label: "Discuss your requirement",
        href: "/contact?franchise=nagpur",
      },
      secondaryCta: {
        label: "Schedule a Consultation",
        href: "/consultation?franchise=nagpur",
      },
    },
  ],
  seo: {
    title: "Ricoz Nagpur — Technology & Business Growth",
    description:
      "Ricoz Nagpur delivers technology, digital capabilities and business transformation for organisations across Nagpur and central Maharashtra. Local leadership, Ricoz ecosystem.",
    canonical: "/franchise/nagpur",
    keywords: [
      "Ricoz Nagpur",
      "technology Nagpur",
      "digital transformation Nagpur",
      "business growth central India",
    ],
    ogTitle: "Ricoz Nagpur — Technology for Businesses Ready for What's Next",
    ogDescription:
      "Local expertise. Connected ecosystem. Business growth through technology and digital capabilities in Nagpur.",
    ogImage: null,
  },
}
