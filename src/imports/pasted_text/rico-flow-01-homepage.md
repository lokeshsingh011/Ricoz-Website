# RICOZ — FLOW 01: FIRST VISIT / HOMEPAGE

Enhance the existing Ricoz digital ecosystem prototype by implementing FLOW 01 — First Visit / Homepage.

IMPORTANT:

This is an enhancement of the existing implementation.

Do NOT rebuild the application from scratch.

Do NOT change the established Ricoz design system.

Do NOT change the Ricoz Red #C41230.

Do NOT replace Instrument Serif + Inter.

Do NOT redesign the global header or footer unless a small adjustment is necessary for this flow.

Do NOT modify unrelated routes or flows.

Reuse all existing components, tokens, data structures and architecture wherever possible.

The existing foundation already contains:

* Ricoz Red #C41230
* Instrument Serif display typography
* Inter UI/body typography
* Warm off-white background
* Near-black text
* Thin editorial borders
* 8px spacing system
* 4px radius
* Global Header
* Global Footer
* Product cards
* Service cards
* Resource cards
* Case Study cards
* React Router
* Product data
* Service data
* Resource data
* Case study data
* Contact flow
* Consultation flow

The homepage must feel like the entry point to a mature Ricoz ecosystem.

---

# 01. FLOW OBJECTIVE

The first-visit experience should allow a visitor to understand Ricoz within seconds.

Primary journey:

FIRST VISIT

↓

Understand Ricoz

↓

Discover Products / Services / Solutions

↓

Explore relevant content

↓

Build confidence

↓

Contact Ricoz OR Schedule Consultation

The homepage should not attempt to explain every product or service.

Its purpose is:

ORIENT
DISCOVER
BUILD TRUST
CONVERT

---

# 02. HERO SECTION

Create a sophisticated editorial hero.

Eyebrow:

THE RICOZ ECOSYSTEM

Primary headline:

Build what comes next with Ricoz.

Supporting copy:

Explore products, services and capabilities designed to help businesses solve meaningful challenges, improve operations and move forward with confidence.

Primary CTA:

Explore Products

Secondary CTA:

Explore Services

Additional subtle text link:

Discover Solutions →

---

# 03. HERO VISUAL

Retain the existing network-inspired SVG concept if it is already implemented.

Refine it rather than replacing it.

The visual should communicate:

* Connected capabilities
* Products
* Services
* Business systems
* Intelligent infrastructure

Do NOT use:

* Generic stock technology imagery
* Futuristic city imagery
* Glowing neon networks
* Cryptocurrency-style visuals
* Excessive gradients
* Generic AI imagery

Keep the visual restrained and editorial.

The hero should have substantial whitespace.

---

# 04. ECOSYSTEM SIGNAL BAR

Immediately below the hero, create a refined information strip.

Use realistic ecosystem indicators such as:

125+
Products

50+
Services

Multiple
Capabilities

One
Connected Ecosystem

Do not make unsupported business claims such as revenue, customer counts or market leadership.

The numbers should communicate ecosystem breadth rather than marketing hype.

---

# 05. ECOSYSTEM INTRODUCTION

Create a strong editorial introduction.

Eyebrow:

ONE ECOSYSTEM

Heading:

Everything begins with understanding what your business needs.

Supporting copy:

Ricoz brings products, professional services, solutions and knowledge together within one connected digital ecosystem. Explore individual capabilities or start with the challenge you are trying to solve.

Use a two-column layout:

Left:
Large editorial statement.

Right:
Supporting explanation with a subtle CTA:

Explore the ecosystem →

---

# 06. PRODUCT DISCOVERY

Create the first major product discovery section.

Eyebrow:

PRODUCTS

Heading:

Capabilities built to move work forward.

Supporting copy:

Explore the Ricoz product ecosystem and discover focused capabilities designed around real business needs.

Display a refined selection of approximately 6 featured products using the existing ProductCard component.

Do NOT show all products.

Use a structured editorial grid.

CTA:

Explore All Products →

Clicking this must navigate to:

/products/

---

# 07. PRODUCT CATEGORY SIGNAL

Add a compact category navigation layer beneath or alongside the product showcase.

Use the existing product categories.

Allow visitors to discover categories without creating a visually heavy filter interface.

Example structure:

All Products
Category
Category
Category
Category
Category
Category

Selecting a category should navigate to the appropriate category route.

---

# 08. SERVICES DISCOVERY

Create the equivalent service discovery section.

Eyebrow:

SERVICES

Heading:

Expertise where complexity needs a human touch.

Supporting copy:

Explore professional services designed to help businesses plan, implement, improve and evolve.

Display approximately 4–6 featured services using the existing ServiceCard component.

CTA:

Explore All Services →

Navigate to:

/services/

---

# 09. SOLUTIONS SECTION

Introduce Solutions as a bridge between individual products/services and customer problems.

Eyebrow:

SOLUTIONS

Heading:

Start with the challenge, not the category.

Supporting copy:

Sometimes the right starting point is not a product or a service. Explore solution-oriented capabilities organized around the outcomes businesses are trying to achieve.

Create 3–4 solution cards.

Possible examples:

Operational Efficiency

Digital Transformation

Data & Intelligence

Business Growth

These are conceptual prototype categories and should not imply unavailable capabilities.

CTA:

Explore Solutions →

Navigate to:

/solutions/

---

# 10. HOW RICOZ CONNECTS

Create a visually minimal ecosystem relationship section.

Show the relationship:

PRODUCTS

*

SERVICES

*

SOLUTIONS

*

KNOWLEDGE

↓

RICOZ ECOSYSTEM

Explain that visitors can move naturally between capabilities.

Example:

Product
→ Related Service
→ Related Resource
→ Consultation

Service
→ Related Product
→ Case Study
→ Consultation

This section should reinforce the interconnected architecture without looking like a technical architecture diagram.

---

# 11. WHY RICOZ

Create a restrained credibility section.

Eyebrow:

WHY RICOZ

Heading:

Designed around clarity, capability and progress.

Use 3–4 principles.

Example:

01
Clarity

Make complex capabilities easier to discover and understand.

02
Connected Thinking

Bring products, services and expertise closer together.

03
Practical Capability

Focus on useful outcomes rather than unnecessary complexity.

04
Continuous Evolution

Build an ecosystem capable of adapting as needs change.

Keep the visual treatment minimal.

---

# 12. CASE STUDIES

Use the existing CaseStudyCard component.

Eyebrow:

SELECTED WORK

Heading:

Ideas become valuable when they create real outcomes.

Display 2–3 case studies.

Each card should support:

* Image / visual
* Category
* Title
* Short description
* Explore link

CTA:

View All Case Studies →

Navigate to:

/resources/case-studies/

Do not fabricate performance metrics.

---

# 13. RESOURCES

Create a compact resources section.

Eyebrow:

RESOURCES

Heading:

Useful thinking for what comes next.

Display 3 resource cards.

Use existing ResourceCard components.

Include:

* Category
* Title
* Short summary
* Reading/exploration action

CTA:

Explore Resources →

Navigate to:

/resources/

---

# 14. CONSULTATION CTA

Create a strong but minimal conversion section near the bottom.

Do not use an aggressive sales design.

Eyebrow:

START A CONVERSATION

Heading:

Have something you're trying to solve?

Supporting copy:

Tell us what you are working toward. We can help you identify the right place to begin.

Primary CTA:

Schedule a Consultation

Secondary CTA:

Contact Us

Routes:

/consultation/

/contact/

Use Ricoz Red selectively.

---

# 15. FOOTER

Reuse the existing Ricoz footer.

Do not redesign it.

Ensure links correctly navigate to:

Products
Services
Solutions
Resources
Company
Contact
Privacy
Terms

---

# 16. HOMEPAGE INFORMATION HIERARCHY

The final page hierarchy should be:

HEADER

↓

HERO

↓

ECOSYSTEM SIGNALS

↓

ECOSYSTEM INTRODUCTION

↓

PRODUCTS

↓

PRODUCT CATEGORIES

↓

SERVICES

↓

SOLUTIONS

↓

HOW RICOZ CONNECTS

↓

WHY RICOZ

↓

CASE STUDIES

↓

RESOURCES

↓

CONSULTATION CTA

↓

FOOTER

Do not add unnecessary sections beyond this structure.

---

# 17. HOMEPAGE SEO

Ensure the homepage remains SEO-ready.

Primary H1:

Build what comes next with Ricoz.

Use logical H2 sections.

The homepage should support:

Title
Meta Description
Canonical URL
Open Graph title
Open Graph description
Open Graph image

Canonical:

/

Do not keyword-stuff the homepage.

The copy should naturally communicate the Ricoz ecosystem, products, services and solutions.

---

# 18. INTERNAL LINKING

Ensure the homepage provides strong contextual links toward:

Products

Services

Solutions

Resources

Case Studies

Contact

Consultation

These links should use descriptive anchor text.

Avoid excessive repeated links to the same destination.

---

# 19. ACCESSIBILITY

Ensure:

* One H1
* Logical heading hierarchy
* Keyboard-accessible navigation
* Visible focus states
* Accessible buttons
* Accessible links
* Meaningful image alt text
* Decorative SVGs appropriately marked
* Adequate contrast
* No hover-only functionality

---

# 20. RESPONSIVE BEHAVIOR

Desktop:

Use wide editorial layouts and generous whitespace.

Tablet:

Collapse multi-column layouts intelligently.

Mobile:

* Hero becomes single-column
* Navigation uses existing mobile menu
* Cards become stacked or horizontally scrollable where appropriate
* Typography scales naturally
* CTA buttons remain touch-friendly
* No horizontal overflow

Do not simply shrink the desktop layout.

---

# 21. MICRO-INTERACTIONS

Use subtle interactions only.

Examples:

* Card hover elevation
* Slight image movement
* Link underline transition
* Button transition
* Section reveal

Avoid:

* Parallax-heavy effects
* Continuous animations
* Auto-rotating content
* Excessive motion
* Large animated backgrounds

Respect reduced-motion preferences.

---

# 22. PERFORMANCE

Do not introduce large assets simply to make the homepage feel impressive.

Prioritize:

* Existing SVG assets
* Optimized images
* Lazy-loaded below-the-fold media
* Lightweight components
* Minimal animation

The homepage should remain fast.

---

# 23. DATA-DRIVEN IMPLEMENTATION

Featured products must come from the existing product data.

Featured services must come from existing service data.

Resources must come from existing resource data.

Case studies must come from existing case-study data.

Do not hard-code duplicate content directly into page components when existing data structures can be reused.

---

# 24. FLOW TESTING

After implementation, verify the following complete journeys:

Homepage
→ Explore Products
→ Products

Homepage
→ Explore Services
→ Services

Homepage
→ Discover Solutions
→ Solutions

Homepage
→ Resource
→ Resource Detail

Homepage
→ Case Study
→ Case Study Detail

Homepage
→ Contact
→ Contact Confirmation

Homepage
→ Consultation
→ Consultation Confirmation

Homepage
→ Product
→ Product Detail

Homepage
→ Service
→ Service Detail

All navigation must work through the existing React Router architecture.

---

# 25. FINAL QUALITY BAR

The homepage should feel:

Premium
Minimal
Editorial
Confident
Clear
Sophisticated
Responsive
Fast
Purposeful

The visitor should understand within a few seconds:

WHAT RICOZ IS

WHAT RICOZ OFFERS

WHERE TO EXPLORE

HOW TO GET STARTED

Do not make the homepage feel like a catalogue.

It is the entrance to the Ricoz ecosystem.

---

# IMPORTANT IMPLEMENTATION RULE

Only modify the homepage and the minimum shared components required for this flow.

Do NOT alter:

* Product detail architecture
* Service detail architecture
* Contact architecture
* Consultation architecture
* Data models
* SEO utilities

unless a change is absolutely required for this flow.

Preserve all existing functionality.

At completion, report:

1. Homepage sections implemented
2. Components reused
3. Routes verified
4. Responsive behavior verified
5. SEO elements verified
6. Any issues requiring the next flow
