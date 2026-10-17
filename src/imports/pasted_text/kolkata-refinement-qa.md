# RICOZ KOLKATA — VISUAL REFINEMENT & CONTENT QA

## Phase 5 — Final Kolkata Experience Refinement

Refine the existing:

`/franchise/kolkata`

implementation.

This is a **polish and QA pass**, not a rebuild.

Do not modify the established franchise architecture, registry, section types, shared components, or routing unless required to correct a genuine issue.

Kolkata must feel like a finished Ricoz franchise experience and must remain visually distinct from:

* Mumbai
* Nagpur
* Delhi
* Kalyan

---

# 1. KOLKATA CREATIVE DIRECTION

The final visual personality is:

**Cultural · Creative · Established · Intelligent · Expressive**

The page should feel:

* sophisticated
* thoughtful
* editorial
* human
* commercially credible
* creatively confident
* modern without feeling generic

The design should communicate **point of view**, not decoration.

Do not use obvious Kolkata stereotypes.

Avoid:

* monuments as decorative backgrounds
* excessive cultural motifs
* tourist photography
* festival imagery
* decorative patterns without purpose
* fake local statistics
* generic corporate stock imagery
* excessive gradients
* glassmorphism
* oversized rounded cards

---

# 2. VISUAL SYSTEM

Use the established Ricoz design language.

Core:

```text
Ricoz Red     #C41230
Near Black    #141414
Soft Ink      #3A3A3A
Paper         #F7F5F1
White         #FFFFFF
Rule          #D9D6D0
Muted         #77736D
```

Use Ricoz Red primarily for:

* active states
* important labels
* CTA emphasis
* rules/details
* small editorial accents

Do not flood sections with red.

Surfaces should remain predominantly:

* Paper
* White
* Near Black for selected contrast sections

---

# 3. TYPOGRAPHY

Preserve the established typography system.

Display:

**Instrument Serif**

UI/body:

**Inter**

Create clear hierarchy.

Recommended desktop scale:

```text
Hero H1       64–76px
Section H2    42–52px
Large intro   32–42px
Body          16–18px
Small UI      12–14px
```

Use generous line-height.

Avoid:

* excessively condensed text
* overly bold body copy
* too many font weights
* all-caps paragraphs

---

# 4. HERO REFINEMENT

The hero is the first major differentiator.

Refine it into a sophisticated editorial composition.

Structure:

```text
RICOZ / KOLKATA

Technology with
a sharper point
of view.

Supporting statement

[Director Portrait]

Discuss your requirement
Schedule a Consultation
```

The hero should have strong negative space.

Do not overcrowd the first viewport.

The director portrait should feel integrated into the composition rather than appearing as an ordinary profile card.

---

# 5. DIRECTOR IMAGE

Continue using:

`FranchiseDirectorImage`

Do not bypass the fallback component.

States must remain:

```text
Valid image
    ↓
Actual portrait

Missing image
    ↓
Editorial placeholder

Broken image
    ↓
Editorial placeholder
```

The placeholder must not visually dominate the hero.

When the real portrait is eventually supplied:

* preserve the existing dimensions
* preserve layout
* preserve cropping
* preserve spacing
* replace only the image state

Do not fabricate a director.

---

# 6. HERO IMAGE TREATMENT

Use:

```css
object-fit: cover;
```

with an appropriate editorial crop.

Avoid:

* circular portraits
* excessive rounded corners
* floating avatar treatment
* fake background environments
* artificial AI-generated people

If the image supports it, allow a subtle overlap between image and content.

The composition should remain stable across image states.

---

# 7. HERO MICRO DETAILS

Add restrained editorial details where useful:

```text
RICOZ / KOLKATA
LOCAL PRESENCE
RICOZ ECOSYSTEM
```

Use small typography and thin rules.

These details should create structure rather than decoration.

---

# 8. SECTION RHYTHM

Create a deliberate alternating rhythm.

Recommended:

```text
Hero              Paper
Introduction      White
Challenges        Paper
Capabilities      White
Products          Paper
Services          White
Solutions         Paper
Industries        Dark
How We Work       White
Director          Paper
Network           White
Conversion        Dark
Footer            Dark
```

Do not make every section look like the same template.

Each section should have a clear visual purpose.

---

# 9. LOCAL INTRODUCTION

Refine the introduction into a strong editorial statement.

Use:

> Established thinking. Modern capability.

Supporting copy should remain concise.

Give the statement substantial whitespace.

Do not turn it into a three-card feature section.

The goal is to establish Kolkata's personality immediately.

---

# 10. CHALLENGES SECTION

The strategic questions should feel like editorial prompts.

Preferred presentation:

```text
01   What should we modernise first?

02   Where is technology creating
     unnecessary complexity?

03   How do we improve customer experience?

04   How can digital growth become
     more consistent?

05   What should we build internally —
     and what should we connect?
```

Use typography and rules instead of five generic cards.

Add subtle hover treatment if appropriate.

The questions should remain readable on mobile.

---

# 11. CAPABILITIES

Use the three pillars:

```text
01 THINK
02 BUILD
03 GROW
```

Give each pillar enough visual space.

Each should contain:

* number
* title
* short description
* relevant canonical capability links where appropriate

Avoid turning these into icon-heavy feature cards.

Use editorial blocks with thin borders.

---

# 12. PRODUCTS

Use canonical Ricoz ProductCard components.

Do not redesign ProductCard specifically for Kolkata.

However, adjust the section composition around the cards so the page remains editorial.

Recommended:

```text
PRODUCTS

Useful technology for
modern business.

[Product] [Product] [Product]

Explore Products →
```

Show a focused selection rather than dumping the catalogue.

Every product must resolve to its existing canonical route.

---

# 13. SERVICES

Use canonical Ricoz services.

Prioritise relevant categories without inventing Kolkata-specific offerings.

Keep the section more typographic than promotional.

Possible presentation:

```text
STRATEGY & TRANSFORMATION
IMPLEMENTATION & INTEGRATION
OPERATIONS & EFFICIENCY
DIGITAL MARKETING
DATA & INTELLIGENCE
SOCIAL MEDIA & CONTENT
SECURITY & COMPLIANCE
```

Use the existing service data.

Do not hardcode duplicate service content.

---

# 14. SOLUTIONS

Make the Solutions section feel more strategic.

Headline:

> Connected capability for complex requirements.

Use selected canonical solutions.

Cards should be:

* clean
* informational
* concise
* consistent

Do not add fake outcomes or customer claims.

---

# 15. INDUSTRIES

The industry section should become the strongest visual departure from the other franchise pages.

Use an editorial field/list rather than a standard grid.

Example:

```text
INDUSTRIES WE CAN SUPPORT

Retail
Professional Services
Education
Hospitality
Real Estate
Manufacturing
Healthcare
Financial Services
Technology
```

Use the actual canonical industry data.

Introduce hierarchy through typography, spacing and thin rules.

Do not add local customer references unless real data exists.

---

# 16. INDUSTRIES — OPTIONAL INTERACTION

If the existing architecture supports interaction cleanly, allow hover/focus emphasis on an industry.

For example:

```text
Retail
Professional Services
Education
Hospitality
...
```

On interaction:

* text emphasis
* Ricoz Red marker
* subtle movement

Do not create complex filters or application-like behaviour.

This is a landing-page storytelling section.

---

# 17. HOW WE WORK

Preserve the Kolkata-specific process:

```text
01 LISTEN
02 FRAME
03 CREATE
04 EXECUTE
05 REFINE
```

This must not look like Delhi's consulting framework.

Kolkata should feel more creative and iterative.

Use a flowing horizontal editorial treatment on desktop:

```text
LISTEN ───── FRAME ───── CREATE ───── EXECUTE ───── REFINE
```

Mobile:

```text
01 LISTEN
   │
02 FRAME
   │
03 CREATE
   │
04 EXECUTE
   │
05 REFINE
```

---

# 18. PROCESS MICROCOPY

Keep descriptions concise.

### LISTEN

Understand the business, context and requirement.

### FRAME

Define the real problem and the direction worth pursuing.

### CREATE

Shape the appropriate product, service or solution.

### EXECUTE

Turn the direction into practical implementation.

### REFINE

Learn, improve and evolve what has been built.

Do not over-explain.

---

# 19. DIRECTOR SECTION

Create a visually calm leadership section.

Headline:

> Local leadership. Wider perspective.

Use:

* large portrait
* name
* designation
* biography
* optional statement

Only render populated fields.

If the director information is unavailable, the layout must still feel intentional.

Do not leave awkward empty metadata gaps.

---

# 20. FRANCHISE NETWORK

Use the existing `franchise-network` renderer.

Display:

```text
Mumbai
Nagpur
Delhi
Kalyan
Kolkata
```

Highlight Kolkata.

The interaction should communicate:

**One Ricoz ecosystem, multiple local points of presence.**

Do not make franchises appear as competing brands.

CTA:

> Explore the franchise network

`/franchise`

---

# 21. FINAL CTA

The final CTA should be strong but restrained.

Eyebrow:

> RICOZ / KOLKATA

Headline:

> Let's build the right next step.

Supporting text:

> Tell us where the business is today and what you want to improve. We'll help you understand where to begin.

Actions:

> Discuss your requirement

`/contact?franchise=kolkata`

> Schedule a Consultation

`/consultation?franchise=kolkata`

Use a dark section with controlled Ricoz Red accents.

---

# 22. NAVIGATION

Kolkata must use only:

`FranchiseHeader`

There must be:

* no Global Header above it
* no duplicate navigation
* no second mobile menu

The header identity must read:

> RICOZ / KOLKATA

Ensure:

* franchise navigation works
* Explore Ricoz works
* Customer Portal works
* franchise network access works

---

# 23. FOOTER

Use:

`FranchiseFooter`

Ensure Kolkata appears as the active/current franchise where appropriate.

Footer hierarchy:

```text
RICOZ / KOLKATA

Local perspective.
Wider Ricoz capability.

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
Mumbai
Nagpur
Delhi
Kalyan
Kolkata

CUSTOMER PORTAL
Customer Portal →
```

Do not fabricate local contact details.

---

# 24. CONTENT QA

Review every visible piece of Kolkata copy.

Remove:

* duplicate statements
* generic filler
* unsupported claims
* placeholder lorem ipsum
* fake statistics
* fake testimonials
* invented customers
* invented partnerships
* invented awards
* invented director details

Every statement should either:

1. describe Ricoz accurately,
2. describe the page's intended positioning,
3. link to canonical Ricoz data,
4. or be clearly presented as a general capability.

---

# 25. COPY LENGTH

Reduce unnecessary copy.

Preferred landing-page rhythm:

```text
Eyebrow
Headline
1 short paragraph
Optional supporting detail
CTA
```

Avoid paragraphs longer than approximately 3–4 lines on desktop.

The page should feel premium because of **clarity and restraint**, not because it contains more information.

---

# 26. SPACING

Use the established 8px spacing system.

Desktop:

* section vertical padding: approximately 96–128px
* content gap: 32–64px
* major content blocks: 64–96px
* card/grid gaps: 24–32px

Tablet:

Reduce proportionally.

Mobile:

* section padding: approximately 64–80px
* content gap: 24–40px

Do not compress sections excessively.

---

# 27. BORDERS & SURFACES

Use thin rules:

`1px`

Prefer:

* borders
* whitespace
* typography
* alignment

over shadows.

Cards should generally have:

```text
border: 1px solid
border-radius: 4px
```

Avoid:

* 12–24px rounded cards
* floating glass cards
* excessive drop shadows

---

# 28. BUTTONS

Maintain Ricoz button language.

Primary:

**Ricoz Red**

Secondary:

**Transparent / bordered**

Use:

* 44–48px minimum height
* 4px radius
* strong readable labels
* subtle hover transition

Do not use pill-shaped buttons.

---

# 29. MOTION QA

Keep motion restrained.

Use:

* fade/reveal
* image reveal
* line progression
* subtle hover movement

Timing:

approximately:

`150–250ms`

Respect:

`prefers-reduced-motion`

No continuous decorative animation.

---

# 30. MOBILE QA

Review the complete page at mobile width.

Verify:

* no horizontal scrolling
* no clipped typography
* no oversized hero
* portrait remains correctly cropped
* CTA buttons remain accessible
* industry list remains readable
* process sequence becomes vertical
* franchise network remains usable
* footer columns collapse cleanly
* mobile navigation remains single-shell
* Customer Portal remains accessible

Do not simply shrink the desktop design.

---

# 31. TABLET QA

Check intermediate widths.

Pay particular attention to:

* hero composition
* portrait width
* heading wrapping
* three capability pillars
* product/service grids
* industry layout
* process sequence
* footer columns

Avoid awkward tablet-specific gaps.

---

# 32. ACCESSIBILITY QA

Verify:

* semantic heading hierarchy
* image alt text
* keyboard navigation
* visible focus states
* sufficient contrast
* accessible navigation labels
* accessible CTA labels
* reduced-motion behaviour
* touch target sizing

Do not use visual styling that reduces accessibility.

---

# 33. ROUTE QA

Verify:

```text
/franchise/kolkata
```

loads correctly.

Verify:

```text
/franchise
```

contains Kolkata.

Verify:

```text
/franchise/mumbai
/franchise/nagpur
/franchise/delhi
/franchise/kalyan
```

remain unaffected.

---

# 34. CONTEXTUAL CTA QA

Verify:

```text
/contact?franchise=kolkata
```

preserves Kolkata context.

Verify:

```text
/consultation?franchise=kolkata
```

preserves Kolkata context.

Do not alter the existing context architecture.

---

# 35. SEO QA

Verify Kolkata has unique:

* title
* meta description
* canonical
* Open Graph metadata where supported

Recommended title:

> Ricoz Kolkata — Technology, Digital & Business Capabilities

Keep the final metadata aligned with the existing SEO architecture.

Do not duplicate another franchise's metadata.

---

# 36. DIFFERENTIATION QA

Compare all five experiences.

### Mumbai

**Urban / Executive / Momentum**

### Nagpur

**Growth / Connected / Opportunity**

### Delhi

**Strategic / Institutional / Authority**

### Kalyan

**Human / Local / Relationship**

### Kolkata

**Cultural / Creative / Established / Intelligent**

Kolkata must differ through:

* composition
* typography rhythm
* storytelling
* process presentation
* industry treatment
* leadership presentation
* visual pacing

Do not rely on a different colour palette alone.

---

# 37. FINAL TECHNICAL QA

Run:

* TypeScript validation
* production build
* route validation
* responsive inspection
* accessibility inspection

Check for:

* console errors
* broken imports
* broken routes
* missing assets
* broken images
* duplicate navigation
* hydration/runtime issues
* horizontal overflow

Do not introduce new dependencies unless genuinely required.

---

# FINAL OUTCOME

Kolkata should now feel like a **finished, premium Ricoz franchise experience**:

```text
RICOZ / KOLKATA

Thoughtful technology.
Modern capability.
A distinct point of view.

        ↓

Local understanding

        ↓

THINK
BUILD
GROW

        ↓

Products
Services
Solutions

        ↓

Listen
Frame
Create
Execute
Refine

        ↓

Local Leadership

        ↓

Ricoz Network

        ↓

Let's build the right next step.
```

The result should feel **editorial, intelligent, expressive and commercially credible**, while remaining unmistakably part of the Ricoz ecosystem.
