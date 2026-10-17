# RICOZ KALYAN — FRANCHISE LANDING PAGE

## Phase 2 — Complete Page Implementation

Build the fourth franchise landing page using the existing Franchise Landing System.

Target route:

`/franchise/kalyan`

Mumbai, Nagpur and Delhi are already implemented.

Do not copy their compositions.

Kalyan should establish a fourth distinct visual direction:

**Human · Local · Approachable · Relationship-led · Practical**

The page should feel closer to a trusted local business partner than a corporate consulting presentation.

---

# 1. CREATIVE DIRECTION

### Kalyan Personality

**Human · Practical · Connected · Trustworthy · Growth-minded**

Core idea:

> Technology and business expertise, delivered through a relationship you can actually build.

The experience should feel:

* warm
* personal
* confident
* accessible
* modern
* premium
* locally connected

Avoid:

* generic local-business aesthetics
* excessive corporate language
* tourist imagery
* Mumbai-style metropolitan visuals
* Delhi-style institutional layouts
* excessive cards
* artificial testimonials
* fake local statistics

---

# 2. HERO — PEOPLE FIRST

Make the director the central human element of the hero.

Unlike:

* Mumbai → asymmetric executive portrait
* Nagpur → open growth composition
* Delhi → structured leadership split

Kalyan should use a **human-led portrait composition**.

Recommended structure:

```text
------------------------------------------------
|                                              |
|       RICOZ / KALYAN                         |
|                                              |
|       Technology works better                |
|       when it starts with people.            |
|                                              |
|       Supporting statement                   |
|                                              |
|       [ Director Portrait ]                  |
|                                              |
|       [ Discuss your requirement ]           |
|       [ Schedule a Consultation ]            |
|                                              |
------------------------------------------------
```

The portrait can overlap two visual areas slightly.

Use a rectangular or editorial portrait treatment.

Do not use a circular profile photo.

If the real director portrait is unavailable, use the existing neutral placeholder.

Never fabricate a person.

---

# 3. HERO COPY

Eyebrow:

> RICOZ / KALYAN

Headline:

> Technology works better when it starts with people.

Supporting copy:

> Ricoz Kalyan helps businesses find practical ways to improve technology, digital growth and operations—with local understanding and the wider Ricoz ecosystem behind every conversation.

Director:

> [Director Name]
> Franchise Director, Ricoz Kalyan

Hide the name until supplied.

Primary CTA:

> Discuss your requirement

`/contact?franchise=kalyan`

Secondary CTA:

> Schedule a Consultation

`/consultation?franchise=kalyan`

---

# 4. HERO SUPPORTING DETAIL

Introduce a small human-oriented information line:

```text
LOCAL PRESENCE
RICOZ CAPABILITY
ONE CONVERSATION AT A TIME
```

Keep it subtle.

Do not turn this into a statistics block.

---

# 5. SECTION 01 — START WITH THE BUSINESS

Create a large statement section.

Eyebrow:

> START WITH THE BUSINESS

Headline:

> Before recommending technology, understand what the business actually needs.

Copy:

> Every organisation has different priorities, constraints and ambitions. Our approach starts with listening, understanding the situation and identifying where Ricoz can create the most useful impact.

Use an editorial text-first composition.

No card grid.

---

# 6. SECTION 02 — WHAT WE HELP WITH

Create a relationship-oriented capability layout.

Headline:

> Bring us the problem. We'll help find the path.

Create six capability areas:

### Build

Digital products and technology capabilities.

### Grow

Digital marketing, customer acquisition and growth strategy.

### Connect

Integration, systems and operational workflows.

### Understand

Data, intelligence and business insights.

### Protect

Security, compliance and resilience.

### Improve

Operations, efficiency and transformation.

Each item should use concise copy and canonical Ricoz capabilities.

---

# 7. SECTION 03 — THE RICOZ ECOSYSTEM

Introduce the broader Ricoz ecosystem.

Headline:

> Local conversation. Wider capability.

Supporting copy:

> Start with a local conversation and access the broader Ricoz ecosystem when your requirement grows.

Use three connected blocks:

### Products

Technology capabilities.

→ `/products`

### Services

Specialist expertise and execution.

→ `/services`

### Solutions

Connected approaches to broader business requirements.

→ `/solutions`

Visually connect the three using a simple line or relationship diagram.

Keep it minimal.

---

# 8. SECTION 04 — PRODUCTS

Use existing canonical products.

Select a focused set relevant to practical business needs.

Headline:

> Useful technology, without unnecessary complexity.

Supporting copy:

> Explore products from the Ricoz ecosystem that can help businesses operate, connect and grow more effectively.

Display selected ProductCards.

CTA:

> Explore Products

`/products`

Do not create Kalyan-specific products.

---

# 9. SECTION 05 — SERVICES

Use the existing canonical service catalogue.

Prioritise practical services such as:

* Implementation & Integration
* Operations & Efficiency
* Digital Marketing
* Social Media & Content
* Data & Intelligence
* Business Consulting
* Growth Strategy
* Security & Compliance

Headline:

> Expertise that fits the real situation.

Supporting copy:

> Whether you need to build something new, improve an existing operation or grow digitally, connect with the right Ricoz capability.

CTA:

> Explore Services

`/services`

---

# 10. SECTION 06 — SOLUTIONS

Use canonical solutions.

Headline:

> Bigger problems need connected thinking.

Supporting copy:

> When a requirement crosses technology, operations, customers and growth, Ricoz brings the right capabilities together.

Display selected solutions.

Each must use its canonical route.

CTA:

> Explore Solutions

`/solutions`

---

# 11. SECTION 07 — LOCAL BUSINESS CONTEXT

Create a more human industry section.

Headline:

> Every business has a different starting point.

Use an editorial matrix:

```text
STARTING A BUSINESS
        ↓
BUILDING DIGITAL CAPABILITY
        ↓
IMPROVING OPERATIONS
        ↓
REACHING MORE CUSTOMERS
        ↓
PREPARING FOR GROWTH
```

Supporting copy should explain that Ricoz can engage at different stages.

Do not claim that Ricoz serves specific local businesses unless supported by actual data.

---

# 12. SECTION 08 — HOW WE WORK TOGETHER

This is the signature Kalyan section.

Use a **relationship journey**, not a consulting framework.

```text
01
TALK

02
UNDERSTAND

03
RECOMMEND

04
BUILD

05
CONTINUE
```

### Talk

Start with a conversation.

### Understand

Understand the business and requirement.

### Recommend

Identify the appropriate products, services or solutions.

### Build

Turn the agreed direction into execution.

### Continue

Stay connected as the requirement evolves.

Visually present this as a continuous line/relationship rather than five disconnected cards.

This should become the defining interaction pattern of the Kalyan page.

---

# 13. SECTION 09 — DIRECTOR / LOCAL LEADERSHIP

Make this section more personal than the other franchise pages.

Headline:

> A local team you can speak to directly.

Supporting copy:

> Ricoz Kalyan brings local leadership to the relationship while remaining connected to the wider Ricoz ecosystem.

Show:

* large director portrait
* director name
* designation
* biography
* optional statement

Data source:

`src/data/franchises/kalyan.ts`

Only render information actually present in the configuration.

Do not fabricate a biography.

---

# 14. SECTION 10 — THE RICOZ NETWORK

Create a visually lighter franchise-network section.

Headline:

> And when you need more, you're still connected to Ricoz.

Show:

```text
Mumbai
Nagpur
Delhi
Kalyan
Kolkata
```

Highlight Kalyan.

Include:

> Explore the franchise network

→ `/franchise`

This section should communicate connection rather than competition between locations.

---

# 15. SECTION 11 — CONVERSION

Make the final CTA conversational.

Eyebrow:

> RICOZ / KALYAN

Headline:

> Start with a conversation.

Supporting copy:

> Tell us what you're working on. We'll help you understand what the next step could look like.

Primary:

> Discuss your requirement

`/contact?franchise=kalyan`

Secondary:

> Schedule a Consultation

`/consultation?franchise=kalyan`

The CTA should feel approachable rather than sales-heavy.

---

# 16. KALYAN FOOTER

Use the existing `FranchiseFooter`.

Configure a warmer, more human footer treatment.

Visual direction:

**Warm · Personal · Clean**

Structure:

```text
RICOZ / KALYAN

Local perspective.
Wider Ricoz capability.

────────────────────────

ECOSYSTEM
Products
Services
Solutions
Resources

COMPANY
About
Leadership
Careers
Contact

FRANCHISE NETWORK
All Franchises
Mumbai
Nagpur
Delhi
Kalyan
Kolkata

────────────────────────

Start a conversation →
```

Use only actual local contact information.

Do not invent:

* address
* phone
* email
* director information

---

# 17. HEADER

Use the existing:

`FranchiseHeader`

Identity:

> RICOZ / KALYAN

Do not modify the global Header.

The franchise header should retain the same technical navigation architecture as Mumbai, Nagpur and Delhi.

---

# 18. RESPONSIVE DESIGN

The mobile experience must feel intentionally designed.

### Mobile Hero

Recommended:

```text
RICOZ / KALYAN

Headline

Supporting copy

Director portrait

Director identity

Primary CTA

Secondary CTA
```

### Relationship Journey

Convert the horizontal relationship line into:

```text
01 TALK
│
02 UNDERSTAND
│
03 RECOMMEND
│
04 BUILD
│
05 CONTINUE
```

### Local Context

Use a stacked editorial layout.

Ensure:

* no horizontal overflow
* accessible tap targets
* readable line lengths
* correct portrait cropping
* consistent spacing

---

# 19. ANIMATION

Keep motion warm and subtle.

Recommended:

* portrait reveal
* text fade/reveal
* relationship-line progression
* hover transitions
* section reveal

Avoid:

* aggressive parallax
* excessive stagger
* continuous animation
* decorative movement

Respect reduced-motion preferences.

---

# 20. SEO

Configure Kalyan-specific metadata.

Title:

**Ricoz Kalyan**

Description should naturally communicate:

* Ricoz
* Kalyan
* technology
* digital capabilities
* business growth

Canonical:

`/franchise/kalyan`

Use the existing `FranchiseSEO` configuration.

Do not duplicate metadata from other franchises.

---

# 21. INTERNAL LINKING

Provide natural routes to:

* Products
* Services
* Solutions
* Resources
* Case Studies
* About
* Contact
* Consultation
* Franchise Network

Use existing canonical routes.

---

# 22. DATA ARCHITECTURE

All Kalyan-specific data belongs in:

`src/data/franchises/kalyan.ts`

Do not hardcode Kalyan content into shared components.

The existing reusable architecture must remain intact.

---

# 23. NO FABRICATION

Do not invent:

* director name
* portrait
* biography
* local address
* phone
* email
* customers
* testimonials
* statistics
* awards
* partnerships
* local market claims

Use existing placeholders or omit unavailable information.

---

# 24. DIFFERENTIATION REQUIREMENT

Kalyan must feel different from all three completed experiences.

### Mumbai

Urban / Executive / Momentum

### Nagpur

Growth / Connected / Opportunity

### Delhi

Strategic / Institutional / Authority

### Kalyan

Human / Local / Relationship

Do not achieve differentiation merely through colour changes.

Change:

* hero composition
* storytelling rhythm
* relationship between sections
* process presentation
* leadership treatment
* CTA tone
* footer composition

---

# 25. VALIDATION

Verify:

* `/franchise/kalyan` loads.
* Kalyan configuration resolves correctly.
* Kalyan visual direction is applied.
* Header identifies Kalyan.
* Hero contains director image slot.
* No fabricated director information.
* Contact preserves `franchise=kalyan`.
* Consultation preserves `franchise=kalyan`.
* Products use canonical data.
* Services use canonical data.
* Solutions use canonical data.
* Footer is Kalyan-specific.
* Franchise network is accessible.
* SEO is Kalyan-specific.
* Mobile layout works correctly.
* No horizontal overflow.
* Accessibility remains intact.
* Mumbai remains unaffected.
* Nagpur remains unaffected.
* Delhi remains unaffected.
* Global navigation remains functional.
* TypeScript passes cleanly.
* Production build passes cleanly.

---

# FINAL OUTCOME

The franchise network now represents four distinct experiences:

Mumbai
**Urban / Executive / Momentum**

Nagpur
**Growth / Connected / Opportunity**

Delhi
**Strategic / Institutional / Authority**

Kalyan
**Human / Local / Relationship**

All four share the same:

**Ricoz architecture + ecosystem + design language**

but each should communicate a genuinely different local experience.
