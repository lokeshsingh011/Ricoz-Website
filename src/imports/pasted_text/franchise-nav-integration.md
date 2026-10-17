# RICOZ FRANCHISE SYSTEM — NAVIGATION & FOOTER INTEGRATION

The Franchise Landing Page architecture and `/franchise` system are already implemented and TypeScript is clean.

The current issue is discoverability:

**The franchise pages exist, but users cannot conveniently access them from the main Ricoz navigation and footer.**

Now integrate the Franchise system into the existing public-facing navigation architecture.

This is a **targeted navigation + footer integration task**.

Do not redesign the franchise pages themselves.

Do not modify the existing franchise architecture unless required for integration.

---

# 1. PRIMARY OBJECTIVE

Make the Franchise ecosystem discoverable from the main Ricoz website.

Users must be able to reach:

```text
Ricoz
  ↓
Franchises
  ↓
All Franchises
  ↓
Mumbai
  ↓
Nagpur
  ↓
Delhi
  ↓
Kalyan
  ↓
Kolkata
```

The architecture must remain scalable so that additional franchises can be added later without manually rewriting navigation logic.

Use the existing:

```text
franchiseRegistry
getAllFranchises()
getActiveFranchises()
getFranchise()
```

where appropriate.

Do not hardcode five separate navigation implementations.

---

# 2. MAIN HEADER — ADD FRANCHISE ACCESS

Update the existing `Header.tsx` architecture.

Add:

> Franchises

to the main Company/navigation ecosystem in a way that fits the existing Ricoz navigation hierarchy.

Recommended structure:

```text
Products
Services
Solutions
Resources
Company
Franchises
```

If the current header has a better established information architecture, preserve it rather than unnecessarily restructuring the entire header.

The important requirement is that **Franchises is clearly discoverable**.

---

# 3. DESKTOP FRANCHISE NAVIGATION

When the user interacts with:

> Franchises

show a dedicated franchise panel/dropdown.

Do not create a massive mega-menu.

Recommended structure:

```text
FRANCHISES

Ricoz beyond the central team
Local leadership and capabilities across our franchise network.

--------------------------------------------

EXPLORE

All Franchises
Explore the Ricoz franchise network

LOCATIONS

Mumbai
Nagpur
Delhi
Kalyan
Kolkata
```

Each location should link to:

```text
/franchise/mumbai
/franchise/nagpur
/franchise/delhi
/franchise/kalyan
/franchise/kolkata
```

Use franchise registry data rather than duplicating city names throughout Header.tsx.

---

# 4. ACTIVE FRANCHISE STATE

When the user is currently on:

```text
/franchise
/franchise/mumbai
/franchise/nagpur
/franchise/delhi
/franchise/kalyan
/franchise/kolkata
```

the Franchises navigation item should have the appropriate active state.

Use the existing Ricoz active navigation treatment.

Do not introduce a completely different navigation interaction.

---

# 5. FRANCHISE DIRECTORY

The existing:

```text
/franchise
```

FranchiseIndex page should become the central directory.

Make sure:

> Franchises

in the header links to:

```text
/franchise
```

The directory should expose the available franchise locations.

For the current five:

```text
Mumbai
Nagpur
Delhi
Kalyan
Kolkata
```

However, use the franchise registry as the source of truth.

Future franchises added to the registry should automatically become available where appropriate.

---

# 6. COMING-SOON HANDLING

The registry currently contains architectural stubs for:

* Nagpur
* Delhi
* Kalyan
* Kolkata

with `coming-soon` status.

Do not create broken navigation.

The navigation should distinguish between:

### Active

Mumbai

→ clickable

### Coming Soon

Nagpur
Delhi
Kalyan
Kolkata

These can either:

**Option A — Recommended**

remain visible but visually marked:

> Nagpur — Coming Soon

and not behave as a normal active destination until the page is ready.

OR, if the existing architecture already renders their architectural pages safely, allow navigation to their pages while clearly displaying their `coming-soon` state.

Do not expose a broken or empty page.

The implementation must follow the actual `FranchiseStatus` value from the registry.

---

# 7. MOBILE NAVIGATION

Update the existing mobile navigation/accordion.

Add:

> Franchises

as a dedicated accordion section.

Recommended:

```text
FRANCHISES
   All Franchises
   Mumbai
   Nagpur — Coming Soon
   Delhi — Coming Soon
   Kalyan — Coming Soon
   Kolkata — Coming Soon
```

Follow the existing mobile navigation behavior:

* single-open accordion
* accessible keyboard behavior
* body scroll lock
* Escape handling where already supported
* proper focus management
* touch-friendly targets

Do not introduce a second mobile-navigation system.

---

# 8. HEADER CTA

Do not replace the existing primary Ricoz CTA.

The Franchise navigation should coexist with the current:

> Discuss your requirement

or equivalent primary CTA.

If appropriate, the franchise dropdown may contain a secondary action:

> Become a Franchise Partner

BUT ONLY add this if such a destination actually exists in the current application.

Do not create a dead route.

Do not invent a franchise-partnership workflow.

---

# 9. FRANCHISE PAGE HEADER

The existing `FranchiseHeader.tsx` already supports:

> RICOZ / MUMBAI

Do not replace it with the global Header.

The relationship should be:

```text
Global Ricoz Website
        ↓
Franchise Directory
        ↓
Franchise Landing Page
        ↓
FranchiseHeader
```

The individual franchise page should continue using its dedicated `FranchiseHeader`.

Do not create nested duplicate navigation bars unless the existing architecture specifically requires it.

---

# 10. FOOTER — GLOBAL RICOZ FOOTER

Update the existing global `Footer.tsx`.

Add a dedicated:

> Franchises

navigation group.

Recommended:

```text
FRANCHISES

All Franchises
Mumbai
Nagpur
Delhi
Kalyan
Kolkata
```

Again, use the franchise registry rather than hardcoding the list if the current architecture allows it.

The footer should automatically accommodate future franchises.

---

# 11. FOOTER POSITIONING

The footer should communicate that Ricoz operates through a broader ecosystem.

Recommended high-level structure:

```text
RICOZ

Technology.
Strategy.
Digital growth.
Business transformation.

--------------------------------------------

PRODUCTS
SERVICES
SOLUTIONS
RESOURCES
FRANCHISES

--------------------------------------------

COMPANY
About
Leadership
Careers
Contact

--------------------------------------------

FRANCHISE NETWORK
Explore local Ricoz teams and capabilities.

[ Explore Franchises ]

--------------------------------------------

Legal
Privacy
Terms

© Ricoz
```

Preserve the existing footer's established visual language and content where appropriate.

Do not unnecessarily rewrite unrelated footer content.

---

# 12. FOOTER FRANCHISE CTA

Add a subtle franchise discovery CTA.

Example:

Eyebrow:

> RICOZ / FRANCHISE NETWORK

Headline:

> Find Ricoz closer to your business.

Supporting copy:

> Explore our growing network of locally led Ricoz franchises.

CTA:

> Explore Franchises

Destination:

```text
/franchise
```

Keep this concise.

Do not make the footer excessively large.

---

# 13. FRANCHISE PAGE FOOTER

Do not remove the existing `FranchiseFooter`.

There are now two footer contexts:

### Global Footer

Used across the main Ricoz website.

Its job:

**Expose the franchise network.**

### FranchiseFooter

Used inside an individual franchise experience.

Its job:

**Represent that specific franchise while remaining connected to Ricoz.**

Therefore:

```text
Global Ricoz
    ↓
Global Footer
    ↓
Franchises
```

while:

```text
Ricoz Mumbai
    ↓
FranchiseFooter
    ↓
Mumbai + Ricoz ecosystem
```

Do not merge the two components unnecessarily.

---

# 14. BREADCRUMBS

Ensure franchise pages have sensible breadcrumb/navigation context.

For the directory:

```text
Home → Franchises
```

For Mumbai:

```text
Home → Franchises → Mumbai
```

For future franchise pages:

```text
Home → Franchises → [Franchise]
```

Use the existing breadcrumb component if one already exists.

Do not create another breadcrumb implementation.

---

# 15. INTERNAL DISCOVERY

Ensure users can move naturally between:

```text
Homepage
   ↓
Franchises
   ↓
Mumbai
   ↓
Products
   ↓
Services
   ↓
Solutions
   ↓
Contact
   ↓
Consultation
```

And from a franchise page:

```text
Mumbai
   ↓
Franchises
   ↓
All Franchises
```

The franchise experience must not become a dead-end branch of the website.

---

# 16. FRANCHISE REGISTRY AS SOURCE OF TRUTH

Do not hardcode franchise lists independently in:

* Header.tsx
* Footer.tsx
* Mobile navigation
* Franchise directory
* Franchise cards

Use the existing registry.

For example:

```ts
getAllFranchises()
```

or the appropriate existing typed selector.

This ensures:

```text
Add new franchise
      ↓
Registry updated
      ↓
Directory updated
      ↓
Navigation updated
      ↓
Footer updated
```

without duplicating city configuration.

---

# 17. STATUS-AWARE NAVIGATION

Navigation must understand:

```ts
FranchiseStatus
```

At minimum:

```text
active
draft
coming-soon
inactive
```

Rules:

### active

Normal clickable navigation.

### coming-soon

Visible with a clear "Coming Soon" state.

### draft

Do not expose publicly unless the existing application explicitly supports preview mode.

### inactive

Do not show in public navigation.

Do not create custom status logic in Header.tsx.

Create/reuse a central helper if needed.

---

# 18. ACCESSIBILITY

The updated navigation must maintain:

* semantic navigation
* keyboard accessibility
* focus states
* Escape behavior
* screen-reader labels
* accessible dropdown/accordion semantics
* touch-friendly mobile controls

Do not sacrifice accessibility for the new franchise menu.

---

# 19. RESPONSIVE BEHAVIOR

Desktop:

```text
Header
  ↓
Franchises dropdown/panel
```

Tablet:

Use the existing responsive navigation behavior.

Mobile:

```text
Menu
 ↓
Franchises
 ↓
All Franchises
Mumbai
Nagpur
Delhi
Kalyan
Kolkata
```

Do not create separate unrelated navigation systems.

---

# 20. VISUAL DESIGN

The franchise navigation must look like a natural extension of Ricoz.

Use:

* existing Ricoz typography
* existing Ricoz red
* existing spacing
* existing borders
* existing dropdown behavior
* existing hover/focus states

Do not create a separate franchise navigation visual language.

The franchise pages themselves can be visually different.

The global navigation should remain recognisably Ricoz.

---

# 21. DO NOT CHANGE

Do not modify:

* Product ecosystem
* Service ecosystem
* Solution ecosystem
* Resource system
* Contact architecture
* Consultation architecture
* Existing catalogue data
* Existing admin architecture
* Existing authentication architecture
* Franchise page content
* Mumbai page sections
* Franchise theme system

unless a minimal integration change is strictly required.

---

# 22. VALIDATION

After implementation verify:

### Header

* Franchises is visible in the global navigation.
* Desktop dropdown/panel works.
* Mobile accordion works.
* All Franchises links to `/franchise`.
* Mumbai links to `/franchise/mumbai`.
* Coming-soon franchises are handled correctly.
* Active state works on franchise routes.

### Footer

* Franchises section exists.
* All Franchises links to `/franchise`.
* Franchise locations are discoverable.
* Footer CTA links correctly.
* Registry remains the source of truth.

### Routing

Verify:

```text
/franchise
/franchise/mumbai
/franchise/nagpur
/franchise/delhi
/franchise/kalyan
/franchise/kolkata
```

No existing route should break.

### Context

Verify:

```text
/franchise/mumbai
        ↓
/contact?franchise=mumbai
```

and:

```text
/franchise/mumbai
        ↓
/consultation?franchise=mumbai
```

still preserve franchise context.

### Quality

* TypeScript clean.
* Production build clean.
* No `any`.
* No duplicated franchise lists.
* No duplicate Header implementation.
* No duplicate Footer implementation.
* No broken links.
* No horizontal overflow.
* Existing public navigation remains functional.
* Existing mobile navigation remains functional.

---

# FINAL OUTCOME

The Ricoz franchise system must now be accessible from the entire public website.

The resulting architecture should be:

```text
                    RICOZ
                      │
        ┌─────────────┴─────────────┐
        │                           │
   Main Ecosystem              Franchise Network
        │                           │
 Products / Services /       All Franchises
 Solutions / Resources            │
                              ┌─────┼─────┐
                              │     │     │
                           Mumbai Nagpur Delhi
                              │     │     │
                           Kalyan Kolkata
```

The **global Header and Footer become the discovery layer**, while the dedicated `FranchiseHeader` and `FranchiseFooter` remain responsible for the individual franchise experience.

Do not redesign the existing site.

This is an integration task to make the already-built franchise system **properly discoverable, navigable and scalable**.
