# RICOZ — FRANCHISE SHELL, CUSTOMER PORTAL & KOLKATA COMPLETION

## Phase 3 — Platform Navigation & Franchise Network Completion

Resolve the current franchise-page shell issue, integrate the Customer Portal entry into the Ricoz platform, and complete the missing Kolkata franchise page.

Do not rebuild the existing franchise architecture.

Preserve:

* existing FranchiseHeader
* existing FranchiseFooter
* existing franchise registry
* existing franchise section renderer
* existing franchise data contracts
* existing global Header/Footer
* existing public routes
* existing product/service/solution data
* existing customer portal implementation, if already present

---

# 1. FRANCHISE PAGES MUST NOT SHOW THE GLOBAL NAVBAR

Current issue:

Franchise pages are displaying:

```text
Global Ricoz Navbar
+
Franchise Navbar
```

This is incorrect.

When the current route is:

```text
/franchise
/franchise/:franchiseSlug
```

the global `Header` must NOT render.

Instead, franchise pages must render only:

```text
FranchiseHeader
```

The franchise experience should therefore be:

```text
FranchiseHeader
        ↓
FranchiseHero
        ↓
FranchiseSections
        ↓
FranchiseCTA
        ↓
FranchiseFooter
```

There must be no second global navigation above it.

---

# 2. IMPLEMENT ROUTE-AWARE SHELL LOGIC

Inspect the existing root/application shell.

Identify where:

```text
Header
Footer
```

are globally rendered.

Update the shell so franchise routes are treated as a dedicated public shell.

Conceptually:

```tsx
const isFranchiseRoute =
  location.pathname === "/franchise" ||
  location.pathname.startsWith("/franchise/");
```

For normal Ricoz routes:

```text
Global Header
Page
Global Footer
```

For franchise routes:

```text
FranchiseHeader
Franchise Page
FranchiseFooter
```

Do not render both systems.

Do not duplicate footer logic either.

The franchise page should remain responsible for its own:

* FranchiseHeader
* FranchiseFooter

while the root shell should avoid wrapping franchise routes with the global versions.

---

# 3. DO NOT REMOVE THE GLOBAL NAVIGATION FROM THE PLATFORM

The global Header must continue working normally everywhere else.

Examples:

```text
/
 /products
 /services
 /solutions
 /resources
 /contact
 /consultation
 /about
 /leadership
 /careers
```

must continue using:

```text
Global Header
Global Footer
```

Only the franchise route tree receives the dedicated shell.

Do not alter unrelated page layouts.

---

# 4. FRANCHISE HEADER BECOMES THE ONLY NAVIGATION

The existing:

`FranchiseHeader.tsx`

should become the sole navigation system on franchise pages.

Maintain:

```text
RICOZ / CITY
```

identity.

For example:

```text
RICOZ / MUMBAI
RICOZ / NAGPUR
RICOZ / DELHI
RICOZ / KALYAN
RICOZ / KOLKATA
```

The navigation should provide access to appropriate franchise-page destinations and important Ricoz platform destinations.

Do not recreate the entire global navigation inside the franchise header.

Keep it focused.

---

# 5. ADD RICOZ PLATFORM ACCESS TO THE FRANCHISE HEADER

The franchise header should still allow users to move into the broader Ricoz platform.

Add a compact platform entry such as:

> RICOZ

or:

> Explore Ricoz

This should open a purposeful navigation menu or route back into the main Ricoz ecosystem.

Possible destinations:

```text
Products
Services
Solutions
Resources
About
```

Do not create a second navbar.

The interaction should be a compact menu/dropdown.

---

# 6. CUSTOMER PORTAL / LOGIN INTEGRATION

There should be a clear way for an existing Ricoz customer to enter the Customer Portal.

The portal entry should be part of the platform navigation architecture rather than being treated as a separate website.

Add a clearly identifiable action:

> Customer Login

or:

> Customer Portal

Use the terminology already established by the existing portal implementation.

Do not invent a new authentication system if one already exists.

Do not create fake authentication.

Do not create fake credentials.

---

# 7. PORTAL ENTRY LOCATION

The Customer Portal entry should be available from the main Ricoz platform navigation.

Recommended structure:

```text
Global Header

...

Customer Portal
```

It may also be available from the compact platform menu inside `FranchiseHeader`.

For example:

```text
EXPLORE RICOZ

Products
Services
Solutions
Resources
About

──────────────

Customer Portal →
```

This gives franchise visitors access to the broader platform without introducing a second global navbar.

---

# 8. FRANCHISE CONTEXT MUST NOT BREAK CUSTOMER JOURNEYS

If a visitor arrives from:

```text
/franchise/mumbai
```

and selects:

```text
Discuss your requirement
```

preserve:

```text
/contact?franchise=mumbai
```

Likewise:

```text
/consultation?franchise=mumbai
```

Repeat for:

```text
nagpur
delhi
kalyan
kolkata
```

Do not lose the franchise context during navigation.

---

# 9. CUSTOMER PORTAL SHOULD BE PLATFORM-LEVEL

Do not create separate:

```text
Mumbai Login
Nagpur Login
Delhi Login
Kalyan Login
Kolkata Login
```

unless an existing authentication architecture explicitly requires this.

The Customer Portal is a Ricoz platform capability.

Franchise pages should point into the same portal.

Architecture:

```text
Ricoz
│
├── Public Platform
│
├── Franchise Network
│   ├── Mumbai
│   ├── Nagpur
│   ├── Delhi
│   ├── Kalyan
│   └── Kolkata
│
└── Customer Portal
```

---

# 10. MOBILE NAVIGATION

On franchise pages, mobile navigation must also use only:

`FranchiseHeader`

Do not allow the global mobile menu to appear underneath or above it.

The franchise mobile menu should contain:

```text
Franchise navigation
+
Explore Ricoz
+
Customer Portal
```

Keep the menu single-open and accessible.

Preserve:

* body scroll lock
* keyboard navigation
* Escape-to-close
* accessible labels
* visible focus states
* sufficient tap targets

---

# 11. FRANCHISE INDEX

Ensure:

`/franchise`

is a functioning franchise directory.

It must list:

```text
Mumbai
Nagpur
Delhi
Kalyan
Kolkata
```

The directory should be registry-driven.

Do not hardcode the list into the component if `franchiseRegistry` already exists.

Use:

```ts
getAllFranchises()
```

or the appropriate existing registry method.

---

# 12. KOLKATA — COMPLETE THE MISSING FRANCHISE

The current franchise network is missing the Kolkata page.

Complete:

```text
/franchise/kolkata
```

using the existing franchise architecture.

Kolkata must NOT simply copy Mumbai, Nagpur, Delhi or Kalyan.

Create a fifth distinct personality:

**Cultural · Creative · Established · Intelligent · Expressive**

The experience should communicate:

* heritage
* creativity
* thoughtful business thinking
* modern technology
* established commercial character
* intellectual confidence

Avoid:

* tourism aesthetics
* clichés
* excessive cultural decoration
* fabricated local statistics
* generic Kolkata imagery
* competitor references

---

# 13. KOLKATA HERO

Use a sophisticated editorial composition.

Headline:

> Technology with a sharper point of view.

Supporting copy:

> Ricoz Kolkata brings technology, digital capability and business thinking together for organisations looking to evolve with clarity and confidence.

Eyebrow:

> RICOZ / KOLKATA

Director portrait:

Use the existing:

`FranchiseDirectorImage`

component.

Do not fabricate:

* director name
* portrait
* biography

If unavailable, use the existing editorial placeholder.

Primary CTA:

> Discuss your requirement

`/contact?franchise=kolkata`

Secondary CTA:

> Schedule a Consultation

`/consultation?franchise=kolkata`

---

# 14. KOLKATA SECTION STRUCTURE

Implement the complete 11-section structure already supported by the franchise system.

Use:

1. Local Introduction
2. Challenges
3. Capabilities
4. Products
5. Services
6. Solutions
7. Industries
8. How We Work
9. Director
10. Franchise Network
11. Conversion

Do not create a new section type unless the existing architecture genuinely cannot support the experience.

---

# 15. KOLKATA — LOCAL INTRODUCTION

Eyebrow:

> KOLKATA / BUSINESS & TECHNOLOGY

Headline:

> Established thinking. Modern capability.

Copy:

> Businesses evolve differently. Ricoz Kolkata combines practical technology, digital capability and strategic thinking to help organisations move forward without losing sight of what already works.

Use a strong editorial statement.

Avoid fabricated claims about Kolkata's economy or business statistics.

---

# 16. KOLKATA — CHALLENGES

Frame the section around thoughtful business questions.

Examples:

```text
What should we modernise first?

Where is technology creating unnecessary complexity?

How do we improve customer experience?

How can digital growth become more consistent?

What should we build internally — and what should we connect?
```

Present them as editorial questions rather than generic cards.

---

# 17. KOLKATA — CAPABILITIES

Use three primary pillars:

### THINK

Strategy, planning and business direction.

### BUILD

Products, technology and implementation.

### GROW

Digital marketing, customer engagement and operational improvement.

Each pillar should connect to canonical Ricoz capabilities.

Do not invent new services.

---

# 18. KOLKATA — PRODUCTS

Use canonical Ricoz products from the existing product catalogue.

Display a focused selection.

Do not create Kolkata-specific products.

CTA:

> Explore Products

`/products`

---

# 19. KOLKATA — SERVICES

Use canonical Ricoz services.

Prioritise relevant categories from the existing catalogue.

Examples:

* Strategy & Transformation
* Implementation & Integration
* Operations & Efficiency
* Digital Marketing
* Data & Intelligence
* Social Media & Content
* Security & Compliance

CTA:

> Explore Services

`/services`

Do not hardcode duplicate service definitions.

---

# 20. KOLKATA — SOLUTIONS

Use canonical Ricoz solutions.

Headline:

> Connected capability for complex requirements.

Display selected solutions with canonical routes.

CTA:

> Explore Solutions

`/solutions`

---

# 21. KOLKATA — INDUSTRIES

Use industries already supported by Ricoz data.

Present them as an editorial field rather than a large card grid.

Possible structure:

```text
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

Only display industries that already exist in the canonical data.

Do not invent local client claims.

---

# 22. KOLKATA — HOW WE WORK

Create a distinct Kolkata process.

Use:

```text
01 LISTEN
02 FRAME
03 CREATE
04 EXECUTE
05 REFINE
```

### Listen

Understand the business.

### Frame

Define the real requirement.

### Create

Design the appropriate direction.

### Execute

Turn the direction into practical implementation.

### Refine

Improve based on what the business learns.

Visually use a flowing editorial sequence rather than disconnected cards.

---

# 23. KOLKATA — DIRECTOR

Headline:

> Local leadership. Wider perspective.

Show:

* director portrait
* name
* designation
* biography
* optional statement

Only render fields present in:

`src/data/franchises/kolkata.ts`

Do not fabricate unavailable information.

---

# 24. KOLKATA — FRANCHISE NETWORK

Use the existing:

`franchise-network`

section type.

Display:

```text
Mumbai
Nagpur
Delhi
Kalyan
Kolkata
```

Highlight:

**Kolkata**

CTA:

> Explore the franchise network

`/franchise`

---

# 25. KOLKATA — CONVERSION

Eyebrow:

> RICOZ / KOLKATA

Headline:

> Let's build the right next step.

Supporting copy:

> Tell us where the business is today and what you want to improve. We'll help you understand where to begin.

Primary:

> Discuss your requirement

`/contact?franchise=kolkata`

Secondary:

> Schedule a Consultation

`/consultation?franchise=kolkata`

---

# 26. KOLKATA FOOTER

Use:

`FranchiseFooter`

Keep the visual treatment:

**Editorial · Refined · Connected**

Include:

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
Customer Login →
```

Use only real local contact information.

---

# 27. KOLKATA DATA ARCHITECTURE

Complete:

`src/data/franchises/kolkata.ts`

It must use the existing:

```ts
Franchise
FranchiseSection
FranchiseTheme
FranchiseDirectorData
```

contracts.

Set:

```ts
status: "active"
```

only if Kolkata is actually ready for public access.

Ensure:

```ts
franchiseRegistry
```

contains Kolkata exactly once.

Ensure:

```ts
getFranchise("kolkata")
```

returns the Kolkata configuration.

---

# 28. REGISTRY VALIDATION

Verify all five franchises:

```text
mumbai
nagpur
delhi
kalyan
kolkata
```

resolve correctly.

Verify:

```ts
getAllFranchises()
getActiveFranchises()
getFranchise(slug)
```

behave correctly.

No duplicate entries.

No stale coming-soon status for completed pages.

---

# 29. NAVIGATION VALIDATION

Verify:

### Normal Ricoz pages

```text
Global Header
Global Footer
```

### Franchise pages

```text
FranchiseHeader
FranchiseFooter
```

Never:

```text
Global Header
+
FranchiseHeader
```

Never:

```text
Global Footer
+
FranchiseFooter
```

---

# 30. CUSTOMER PORTAL VALIDATION

Verify the Customer Portal entry is accessible from the platform.

Verify:

* login action points to the existing portal route
* no fake authentication is introduced
* existing authentication is preserved
* no franchise-specific duplicate login pages are created
* portal entry works from the global navigation
* portal entry can be reached from franchise navigation
* mobile navigation exposes the same entry

If the existing portal route is not yet defined, inspect the current application routing and use the established portal/authentication architecture rather than inventing a new route.

---

# 31. DO NOT BREAK EXISTING FRANCHISE PAGES

Regression-test:

```text
/franchise/mumbai
/franchise/nagpur
/franchise/delhi
/franchise/kalyan
```

Each must:

* load normally
* show only FranchiseHeader
* show the correct franchise identity
* retain director fallback
* retain franchise context in Contact
* retain franchise context in Consultation
* retain network navigation
* retain canonical product/service/solution links

---

# 32. FINAL ARCHITECTURE

The resulting structure should be:

```text
RICOZ PLATFORM
│
├── Global Shell
│   ├── Global Header
│   ├── Public Pages
│   └── Global Footer
│
├── Franchise Network
│   ├── Franchise Index
│   │
│   ├── Mumbai
│   │   ├── FranchiseHeader
│   │   ├── Page
│   │   └── FranchiseFooter
│   │
│   ├── Nagpur
│   ├── Delhi
│   ├── Kalyan
│   └── Kolkata
│
└── Customer Portal
    └── Existing Authentication / Portal
```

The franchise network is therefore a **dedicated experience inside the Ricoz platform**, not a second website.

---

# 33. FINAL VALIDATION

Before finishing, verify:

* no double navbar
* no double footer
* global Header unaffected on normal pages
* FranchiseHeader only on franchise pages
* FranchiseFooter only on franchise pages
* Customer Portal accessible
* existing authentication preserved
* no fake login system
* no fake credentials
* `/franchise` works
* Mumbai works
* Nagpur works
* Delhi works
* Kalyan works
* Kolkata works
* Kolkata appears in registry
* Kolkata appears in franchise navigation
* Kolkata appears in footer
* franchise network highlights current city
* director fallback remains functional
* contact franchise context works
* consultation franchise context works
* mobile navigation works
* responsive layouts work
* no horizontal overflow
* TypeScript passes
* production build passes

Do not refactor unrelated Ricoz modules.

Do not redesign completed franchise pages.

Make this a focused architecture + completion pass.
