# RICOZ NAGPUR — FRANCHISE LANDING PAGE

## Phase 2 — Complete Page Implementation

Build the second complete franchise landing page using the existing Franchise Landing System.

Target route:

`/franchise/nagpur`

The architecture already exists.

The global Header/Footer franchise discovery integration already exists.

Mumbai is already implemented.

Now create the **Nagpur-specific experience**.

---

# 1. CREATIVE DIRECTION

### Nagpur Personality

**Growth · Connection · Opportunity · Modern India**

Nagpur should feel fundamentally different from Mumbai.

Mumbai = urban / executive / high-pressure.

Nagpur = **connected / emerging / opportunity-driven / practical / forward-looking**.

The page should communicate:

> A strong local business presence connected to the wider Ricoz ecosystem.

The visual language should be:

* modern
* confident
* warm
* spacious
* optimistic
* structured
* contemporary

Avoid:

* copying Mumbai's asymmetric composition
* generic city skyline imagery
* tourist photography
* orange-heavy "Central India" clichés
* excessive gradients
* generic corporate stock photography

---

# 2. HERO — CONNECTED GROWTH

Use a **centered-to-split hero composition**, deliberately different from Mumbai.

Suggested structure:

```text
------------------------------------------------
                RICOZ / NAGPUR

        Technology for businesses
           ready for what comes next.

    Strategy, digital capabilities and
    technology delivered with local context.

                [ Director ]

       [ Discuss your requirement ]
       [ Schedule a Consultation ]

        NAGPUR · RICOZ FRANCHISE
------------------------------------------------
```

The director portrait should be integrated into the composition without copying Mumbai's 60/40 portrait treatment.

Prefer:

* large portrait block
* controlled rectangular crop
* subtle framing
* editorial positioning

Do not use a circular profile image.

If the real director image is not available, retain the existing neutral portrait placeholder.

Never fabricate a person.

---

# 3. HERO COPY

Eyebrow:

> RICOZ / NAGPUR

Headline:

> Technology for businesses ready for what's next.

Supporting copy:

> Build stronger digital capabilities, modernise operations and turn ambitious ideas into practical business outcomes with Ricoz Nagpur.

Director identity:

> [Director Name]
> Franchise Director, Ricoz Nagpur

Hide the name until supplied.

Primary CTA:

> Discuss your requirement

`/contact?franchise=nagpur`

Secondary CTA:

> Schedule a Consultation

`/consultation?franchise=nagpur`

---

# 4. SECTION 01 — LOCAL OPPORTUNITY

Create a strong introductory editorial section.

Eyebrow:

> NAGPUR / OPPORTUNITY

Headline:

> Growth is easier when the right capabilities are connected.

Copy:

> Businesses are increasingly expected to improve technology, reach customers digitally, operate efficiently and make faster decisions. Ricoz Nagpur brings these capabilities together through one connected ecosystem.

Use an editorial composition rather than cards.

---

# 5. SECTION 02 — WHAT BUSINESSES NEED NOW

Create a 5-part problem/opportunity layout.

### Modern Technology

Build technology that can evolve with the business.

### Digital Reach

Create stronger digital visibility and customer acquisition.

### Better Operations

Connect processes, teams and systems.

### Smarter Decisions

Turn business data into useful intelligence.

### Sustainable Growth

Build foundations that support the next stage of growth.

Use numbered editorial blocks.

Avoid unsupported market statistics.

---

# 6. SECTION 03 — THE RICOZ ECOSYSTEM

Headline:

> Everything your next stage of growth may require.

Introduce:

### Products

Ready-to-use technology capabilities.

### Services

Specialist strategy, implementation and execution.

### Solutions

Connected approaches built around business requirements.

Use a visually distinctive **three-column ecosystem architecture**.

This section should feel more open and modular than Mumbai's presentation.

---

# 7. SECTION 04 — PRODUCTS

Use canonical Ricoz products only.

Select a relevant subset from the existing catalogue.

Display:

* product name
* category
* short description
* link

Headline:

> Technology that helps you move forward.

Supporting copy:

> Explore selected products from the Ricoz ecosystem that can support modern business operations and growth.

CTA:

> Explore Products

`/products`

Do not create Nagpur-only products.

---

# 8. SECTION 05 — SERVICES

Use the existing canonical 60-service catalogue.

Recommended themes:

* Business Consulting
* Growth Strategy
* Digital Product Strategy
* Market Research
* Implementation & Integration
* Digital Marketing
* Data & Intelligence
* Operations & Efficiency

Headline:

> Expertise that turns direction into action.

Supporting copy:

> From strategy through execution, the Ricoz ecosystem brings together the capabilities required to solve complex business requirements.

CTA:

> Explore Services

`/services`

---

# 9. SECTION 06 — SOLUTIONS

Use existing canonical solutions.

Headline:

> Connect the pieces. Solve the bigger problem.

Supporting copy:

> When business challenges cross technology, operations and customer experience, a connected solution can create a clearer path forward.

Display selected solutions.

Every item must link to its canonical solution detail route.

CTA:

> Explore Solutions

`/solutions`

---

# 10. SECTION 07 — INDUSTRIES

Create a flexible industry section.

Suggested areas:

* Manufacturing
* Logistics
* Retail
* Professional Services
* Real Estate
* Healthcare
* Education
* Startups & Growth Businesses

Headline:

> Different businesses. Different challenges. One connected approach.

Do not claim existing clients or local expertise unless supported by actual data.

---

# 11. SECTION 08 — THE NAGPUR APPROACH

Use a **horizontal growth journey**, visually different from Mumbai's timeline.

```text
01
Understand

↓

02
Prioritise

↓

03
Build

↓

04
Launch

↓

05
Improve
```

### Understand

Start with the business context.

### Prioritise

Identify what matters most.

### Build

Select the right products, services and capabilities.

### Launch

Turn strategy into practical execution.

### Improve

Continue evolving as requirements change.

Use concise copy.

---

# 12. SECTION 09 — LOCAL LEADERSHIP

Create the Nagpur director section.

Headline:

> Local perspective. Wider capability.

Supporting copy:

> Work with a local Ricoz team while accessing the broader capabilities of the Ricoz ecosystem.

Show:

* director portrait
* director name
* designation
* short biography
* optional statement

All content must come from:

`nagpur.ts`

Do not fabricate information.

If the director information is unavailable, preserve the designed structure without inventing content.

---

# 13. SECTION 10 — ECOSYSTEM DISCOVERY

Create a visually distinctive navigation section.

Headline:

> There's more to explore.

Provide:

* Products
* Services
* Solutions
* Resources
* Case Studies
* About Ricoz
* Other Franchises

Include:

> Explore the Ricoz franchise network

linking to:

`/franchise`

This creates a direct connection between the local experience and the broader Ricoz network.

---

# 14. SECTION 11 — CONVERSION

Create a warm, confident closing section.

Eyebrow:

> RICOZ / NAGPUR

Headline:

> Ready to work on what's next?

Supporting copy:

> Tell us what you're trying to build, improve or solve. We'll help you find the right place to begin.

Primary:

> Discuss your requirement

`/contact?franchise=nagpur`

Secondary:

> Schedule a Consultation

`/consultation?franchise=nagpur`

---

# 15. NAGPUR FOOTER

Use the existing `FranchiseFooter`.

However, configure Nagpur-specific composition.

Do not simply copy the Mumbai footer styling.

Direction:

**Open · structured · connected**

Include:

RICOZ / NAGPUR

Local information only when available.

Navigation:

### Ecosystem

Products
Services
Solutions
Resources

### Company

About
Leadership
Careers
Contact

### Franchise Network

All Franchises
Mumbai
Nagpur
Delhi
Kalyan
Kolkata

CTA:

> Start a conversation

Use:

`/contact?franchise=nagpur`

---

# 16. HEADER

Use the existing `FranchiseHeader`.

Identity:

> RICOZ / NAGPUR

Do not modify the global header architecture.

Navigation should remain configurable through:

`nagpur.ts`

---

# 17. RESPONSIVE DESIGN

Do not simply collapse the desktop page.

### Mobile Hero

Recommended order:

```text
RICOZ / NAGPUR

Headline

Supporting copy

Director portrait

Director identity

Primary CTA

Secondary CTA
```

### Mobile ecosystem

Convert horizontal layouts into vertical sections.

### Mobile process

Convert the growth journey into a vertical numbered sequence.

Ensure:

* no horizontal overflow
* accessible tap targets
* readable text
* appropriate image cropping
* comfortable spacing

---

# 18. ANIMATION

Use subtle transitions only.

Recommended:

* hero entrance
* portrait reveal
* section reveal
* hover transitions
* controlled card movement

Respect reduced-motion preferences.

Do not use aggressive parallax or scroll effects.

---

# 19. SEO

Configure Nagpur-specific SEO.

Title:

Ricoz Nagpur

Description should naturally communicate:

* Ricoz
* Nagpur
* technology
* digital capabilities
* business growth

Canonical:

`/franchise/nagpur`

OG metadata must be configurable through the existing `FranchiseSEO` type.

Do not duplicate Mumbai metadata.

---

# 20. INTERNAL LINKING

Ensure:

Nagpur

→ Products

→ Services

→ Solutions

→ Resources

→ Case Studies

→ About

→ Contact

→ Consultation

→ Franchise Network

All links must use existing canonical routes.

---

# 21. DATA ARCHITECTURE

All Nagpur-specific content must live in:

```text
src/data/franchises/nagpur.ts
```

Do not hardcode Nagpur content into:

* FranchisePage.tsx
* FranchiseHero.tsx
* FranchiseSectionRenderer.tsx
* FranchiseFooter.tsx

The components remain reusable.

---

# 22. NO FABRICATION

Do not invent:

* director name
* director portrait
* biography
* office address
* phone number
* email
* testimonials
* clients
* case studies
* statistics
* awards
* partnerships

Use configuration placeholders or omit unavailable information.

---

# 23. DIFFERENT FROM MUMBAI

This requirement is important.

Do NOT reuse Mumbai's page composition.

### Mumbai

Urban
Asymmetric
Executive
Editorial
High-pressure

### Nagpur

Connected
Open
Growth-oriented
Structured
Optimistic

They should feel like:

**two different premium experiences built by the same brand.**

---

# 24. VALIDATION

Verify:

* `/franchise/nagpur` loads.
* Nagpur configuration resolves correctly.
* Nagpur theme is applied.
* Header identifies Nagpur.
* Hero uses the director image slot.
* No fake director is introduced.
* Contact CTA preserves `franchise=nagpur`.
* Consultation CTA preserves `franchise=nagpur`.
* Products use canonical catalogue data.
* Services use canonical catalogue data.
* Solutions use canonical catalogue data.
* Footer is Nagpur-specific.
* Franchise network remains accessible.
* SEO metadata is Nagpur-specific.
* Mobile layout works.
* No horizontal overflow.
* Accessibility remains intact.
* Mumbai remains unaffected.
* Global navigation remains unaffected.
* TypeScript passes.
* Production build passes.

---

# FINAL OUTCOME

The Ricoz franchise ecosystem should now have:

```text
RICOZ
  │
  └── Franchise Network
          │
          ├── Mumbai
          │   Urban / Executive
          │
          └── Nagpur
              Growth / Connected
```

The two pages must share the same **technical architecture and Ricoz design language**, but they must not feel like the same template with different text.

Nagpur establishes the second distinct visual direction for the franchise system.
