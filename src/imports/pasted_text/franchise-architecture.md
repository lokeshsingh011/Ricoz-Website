# RICOZ FRANCHISE SYSTEM — PHASE 1

## Architecture, Routing & Reusable Foundation

Build the **Franchise Landing Page Architecture** for the Ricoz ecosystem.

This phase is **architecture only**.

Do NOT build the five final franchise landing pages yet.

The five initial franchises will be:

1. Mumbai
2. Nagpur
3. Delhi
4. Kalyan
5. Kolkata

The objective is to create a scalable franchise system where every franchise can have a substantially different visual experience while sharing the same Ricoz design language, content architecture, conversion flows, and technical foundation.

---

# 1. Core Principle

Do NOT create five independent page implementations.

Create one reusable:

**Franchise Landing System**

with:

**Shared Ricoz DNA**

*

**Franchise-specific configuration**

*

**Franchise-specific visual composition**

*

**Franchise-specific content**

The architecture must allow additional franchises to be added later without restructuring the application.

---

# 2. Routing Architecture

Establish franchise routes using a scalable slug structure:

```text
/franchise
/franchise/:franchiseSlug
```

Initial franchise slugs:

```text
/franchise/mumbai
/franchise/nagpur
/franchise/delhi
/franchise/kalyan
/franchise/kolkata
```

Do not create separate hardcoded route logic for every city.

The route should:

1. Read the franchise slug.
2. Resolve the corresponding franchise configuration.
3. Load the appropriate franchise content.
4. Load the appropriate visual/theme configuration.
5. Render the reusable FranchisePage system.

Invalid franchise slugs must produce a proper not-found state.

---

# 3. Franchise Data Model

Create a centralized franchise data structure.

Suggested structure:

```text
Franchise
├── slug
├── name
├── city
├── region
├── status
├── shortDescription
├── positioning
├── director
├── contact
├── address
├── navigation
├── theme
├── hero
├── sections
├── industries
├── products
├── services
├── solutions
├── resources
├── caseStudies
├── seo
└── conversion
```

Do not duplicate global product/service/solution records.

Franchise configuration should reference existing canonical catalogue slugs.

Example:

```text
products:
  - ricoanalytics
  - ricoflow
```

rather than duplicating the complete product objects.

---

# 4. Director Data Model

Create a dedicated director structure.

```text
Director
├── name
├── designation
├── portrait
├── shortBio
├── statement
├── socialLinks
└── contact
```

The portrait field must support a future real director image.

Do not generate placeholder people or AI portraits.

Use a neutral image placeholder until the actual director assets are supplied.

The architecture must allow each franchise to have a completely different director presentation.

---

# 5. Franchise Theme Architecture

Create a franchise-level theme/configuration system.

The theme should be capable of controlling:

```text
theme
├── primaryAccent
├── secondaryAccent
├── background
├── surface
├── text
├── mutedText
├── border
├── heroStyle
├── navigationStyle
├── cardStyle
├── sectionStyle
├── typographyTreatment
├── imageTreatment
├── buttonTreatment
└── footerStyle
```

Important:

The franchise theme must **not replace Ricoz's core identity**.

It should extend the Ricoz design language.

The system must preserve:

* premium minimalism
* editorial quality
* strong typography
* restrained UI
* generous whitespace
* clear hierarchy
* accessibility
* conversion clarity

Do not create five unrelated design systems.

---

# 6. Visual Variant Architecture

Create support for different franchise page compositions.

The architecture must allow:

```text
heroStyle:
  editorial
  split
  centered
  immersive
  asymmetric
```

Similarly allow section variants:

```text
sectionVariant:
  editorial
  cards
  split
  statement
  grid
  feature
  timeline
  quote
  showcase
```

These are architectural capabilities only at this stage.

Do not finalize the five visual designs yet.

---

# 7. Franchise Navigation

Create a reusable FranchiseHeader architecture.

It must support:

* Ricoz identity
* Franchise identity
* Franchise-specific navigation
* Products
* Services
* Solutions
* Resources
* About
* Contact
* Consultation

Navigation labels and emphasis must be configurable per franchise.

Do not duplicate Header.tsx five times.

The system should allow:

```text
navigation:
  primary:
  secondary:
  featured:
  cta:
```

The franchise page must still feel connected to the main Ricoz ecosystem.

---

# 8. Franchise Footer

Create a reusable `FranchiseFooter`.

Do NOT simply reuse the current global footer unchanged.

The footer must support franchise-specific configuration.

Architecture should allow:

```text
FranchiseFooter
├── franchise identity
├── local positioning
├── director/local leadership
├── local contact
├── location
├── ecosystem navigation
├── products
├── services
├── solutions
├── resources
├── consultation CTA
├── legal links
└── Ricoz parent-brand reference
```

The footer composition itself must later be able to vary by franchise.

---

# 9. Franchise Page Composition

Create a reusable page composition system.

Architecture:

```text
FranchisePage
│
├── FranchiseHeader
│
├── FranchiseHero
│
├── FranchiseSectionRenderer
│
├── FranchiseConversion
│
└── FranchiseFooter
```

The section renderer must consume configuration rather than requiring separate page implementations.

Example:

```text
sections:
  - type: local-introduction
  - type: capabilities
  - type: industries
  - type: director
  - type: products
  - type: services
  - type: solutions
  - type: proof
  - type: conversion
```

The exact section order will be decided when each franchise is designed.

---

# 10. Existing Ecosystem Integration

Franchise pages must connect to the existing Ricoz catalogue.

Use the existing canonical:

* Products
* Services
* Solutions
* Resources
* Case Studies

Do not duplicate those datasets.

Franchise-specific selections should reference existing records.

For example:

```text
Mumbai
→ selected products
→ selected services
→ selected solutions
```

The same product can therefore appear:

**Global Product Catalogue**

and:

**Mumbai Franchise**

without creating two product records.

---

# 11. Contact Integration

Franchise pages must integrate with the existing Contact architecture.

Support:

```text
/franchise/mumbai
      ↓
Discuss your requirement
      ↓
/contact?franchise=mumbai
```

The contact experience must preserve:

* franchise
* city
* relevant context

The existing Contact page should display a franchise context banner when the parameter is present.

Do not create five separate Contact pages.

---

# 12. Consultation Integration

Support:

```text
/franchise/mumbai
      ↓
Schedule a Consultation
      ↓
/consultation?franchise=mumbai
```

The existing consultation architecture must preserve franchise context.

The consultation experience should be capable of showing:

**Franchise: Ricoz Mumbai**

alongside any existing product/service/solution context.

Do not create separate consultation flows.

---

# 13. Context Architecture

Create a reusable context resolver capable of supporting:

```text
product
service
solution
franchise
```

Where appropriate, combinations should also be possible.

For example:

```text
/contact?franchise=mumbai&service=business-consulting
```

or:

```text
/consultation?franchise=delhi&solution=digital-transformation
```

The architecture must avoid conflicting context resolution.

Franchise context should remain available throughout the conversion journey.

---

# 14. SEO Architecture

Each franchise must be independently SEO-capable.

Franchise configuration should support:

```text
seo
├── title
├── description
├── canonical
├── keywords
├── ogTitle
├── ogDescription
├── ogImage
└── schema
```

Generate canonical URLs based on the franchise slug.

Example:

```text
/franchise/mumbai
```

must have a canonical URL specific to Mumbai.

Do not use duplicate metadata across all five franchises.

The architecture must also support LocalBusiness/Organization structured data when the actual franchise business information is available.

Do not invent addresses, phone numbers, emails, registration details, or business claims.

---

# 15. Content Configuration

Do not hardcode franchise-specific copy inside reusable components.

Components should receive content from the franchise configuration.

For example:

```text
hero:
  eyebrow
  headline
  statement
  primaryCta
  secondaryCta
```

and:

```text
director:
  name
  designation
  statement
  bio
  image
```

This allows content changes without rewriting components.

---

# 16. Local Information

The architecture must support franchise-specific:

* City
* Region
* Address
* Phone
* Email
* Operating information
* Industries
* Local positioning
* Leadership
* Service focus

Do not populate missing information with assumptions.

Use explicit placeholders until the actual franchise data is provided.

---

# 17. Franchise Registry

Create a central franchise registry.

Example:

```text
franchiseRegistry
├── mumbai
├── nagpur
├── delhi
├── kalyan
└── kolkata
```

Each entry should resolve to its configuration.

The registry should make adding a sixth franchise straightforward.

Future example:

```text
franchiseRegistry
├── mumbai
├── nagpur
├── delhi
├── kalyan
├── kolkata
└── new-franchise
```

No routing rewrite should be necessary.

---

# 18. Component Architecture

Create reusable components where appropriate.

Suggested structure:

```text
src/
├── data/
│   └── franchises/
│       ├── types.ts
│       ├── registry.ts
│       ├── mumbai.ts
│       ├── nagpur.ts
│       ├── delhi.ts
│       ├── kalyan.ts
│       └── kolkata.ts
│
├── components/
│   └── franchise/
│       ├── FranchisePage.tsx
│       ├── FranchiseHeader.tsx
│       ├── FranchiseHero.tsx
│       ├── FranchiseSectionRenderer.tsx
│       ├── FranchiseDirector.tsx
│       ├── FranchiseCapabilities.tsx
│       ├── FranchiseProducts.tsx
│       ├── FranchiseServices.tsx
│       ├── FranchiseSolutions.tsx
│       ├── FranchiseProof.tsx
│       ├── FranchiseCTA.tsx
│       └── FranchiseFooter.tsx
│
└── pages/
    └── Franchise.tsx
```

Adapt this structure to the existing project architecture rather than blindly creating duplicate files.

Do not create a monolithic `Franchise.tsx`.

---

# 19. Design System Compatibility

Franchise architecture must remain compatible with the existing Ricoz design system.

Preserve:

* Manrope typography
* Ricoz Red `#C41230`
* warm off-white foundation
* near-black text
* thin borders
* 4px radius
* 8px spacing system
* restrained cards
* premium minimalism
* responsive layouts
* accessible interactions

Franchise-specific styling should be additive.

Do not introduce:

* random gradients
* glassmorphism
* excessive shadows
* unrelated typography systems
* inconsistent button behavior
* decorative UI with no purpose

---

# 20. Mobile Architecture

The franchise system must support mobile-specific compositions.

Do not assume desktop layouts simply collapse vertically.

Architecture should support:

* mobile hero variants
* mobile navigation
* mobile image treatment
* mobile section ordering
* mobile CTA behavior
* mobile footer organization

Each franchise may eventually have a different mobile composition.

---

# 21. Image Architecture

Create support for:

```text
heroImage
directorPortrait
sectionImages
ogImage
```

Images must be configuration-driven.

Do not embed image paths directly into reusable components.

Director portraits will be supplied later.

Until then, use neutral placeholders.

Do not generate or invent director imagery.

---

# 22. Conversion Architecture

Every franchise must ultimately support:

### Primary

Discuss your requirement

### Secondary

Schedule a Consultation

But the actual labels should be configurable.

The conversion system must preserve franchise context.

All CTAs should have a clear destination.

Do not create decorative buttons.

---

# 23. Accessibility

The architecture must preserve:

* semantic HTML
* keyboard navigation
* visible focus states
* accessible navigation
* proper heading hierarchy
* alt text configuration
* accessible mobile navigation
* sufficient contrast
* reduced-motion compatibility where animations are introduced later

Accessibility must not depend on the specific franchise theme.

---

# 24. Performance

The architecture should avoid loading unnecessary franchise assets.

Only load the configuration and assets required for the active franchise.

Do not duplicate catalogue datasets.

Avoid unnecessary dependencies.

Keep components modular.

The implementation must remain compatible with the current Ricoz build architecture and avoid creating another oversized monolithic application file.

---

# 25. Scope Boundary — VERY IMPORTANT

This phase is **ARCHITECTURE ONLY**.

Do NOT:

* design the final Mumbai page
* design the final Nagpur page
* design the final Delhi page
* design the final Kalyan page
* design the final Kolkata page
* invent director biographies
* invent director photos
* invent office addresses
* invent phone numbers
* invent testimonials
* invent case studies
* invent local business statistics
* change the global Ricoz design system
* create separate codebases
* duplicate products/services/solutions
* build Admin functionality
* build analytics
* build automation
* build a franchise CRM
* build franchise dashboards

The goal is to create the **technical and content architecture** that will support the five landing pages.

---

# 26. Initial Franchise Records

Create the five registry entries with the correct slugs:

```text
Mumbai
slug: mumbai

Nagpur
slug: nagpur

Delhi
slug: delhi

Kalyan
slug: kalyan

Kolkata
slug: kolkata
```

For fields where actual information has not yet been supplied, use explicit empty/null values rather than fabricated content.

---

# 27. Validation

Before completing this phase, verify:

* `/franchise` route exists.
* `/franchise/mumbai` resolves.
* `/franchise/nagpur` resolves.
* `/franchise/delhi` resolves.
* `/franchise/kalyan` resolves.
* `/franchise/kolkata` resolves.
* Invalid franchise slugs show a proper not-found state.
* All five routes use the same reusable FranchisePage architecture.
* Franchise configuration is separate from component logic.
* Products/services/solutions reference existing canonical catalogue records.
* Contact supports franchise context.
* Consultation supports franchise context.
* Franchise-specific SEO metadata is supported.
* Franchise-specific header architecture exists.
* Franchise-specific footer architecture exists.
* Director data architecture exists.
* Theme/visual variant architecture exists.
* Mobile architecture is supported.
* No fake franchise business information has been introduced.
* No duplicate catalogue datasets have been created.
* Existing Ricoz public routes remain unaffected.
* Existing Contact and Consultation flows remain functional.
* TypeScript passes cleanly.
* Production build passes cleanly.

## Final Outcome

At the end of this phase, Ricoz should have a **working Franchise Landing System foundation**, but the five franchise pages should still be treated as the next design/build phase.

The architecture must make the next phase straightforward:

**Architecture**

↓

**Mumbai Landing Page**

**Nagpur Landing Page**

**Delhi Landing Page**

**Kalyan Landing Page**

**Kolkata Landing Page**

Each will use the same technical foundation while receiving a genuinely different visual composition and content strategy.
