# RICOZ FRANCHISE SYSTEM — PHASE 1

## Architecture, Routing, Typed Contracts & Reusable Foundation

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

# 3. Explicit TypeScript Contracts — REQUIRED

Create explicit TypeScript interfaces/types for the entire franchise architecture.

Do NOT use `any`.

Do NOT rely on loose object literals for the franchise data model.

Create a central type contract, preferably:

```text
src/data/franchises/types.ts
```

The exact location may be adapted to the existing project structure.

## 3.1 FranchiseSlug

Use a reusable slug type.

```ts
export type FranchiseSlug =
  | "mumbai"
  | "nagpur"
  | "delhi"
  | "kalyan"
  | "kolkata";
```

However, the architecture must remain extensible.

If a literal union would make adding future franchises unnecessarily difficult, use a branded/string-compatible approach while keeping the registry strongly typed.

The important requirement is that all current franchise records are type-safe.

---

## 3.2 FranchiseStatus

```ts
export type FranchiseStatus =
  | "active"
  | "draft"
  | "coming-soon"
  | "inactive";
```

Do not invent additional statuses unless required by the existing application.

---

## 3.3 ImageReference

Create a reusable image type.

```ts
export interface ImageReference {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy";
}
```

Director portraits, hero images, section images and OG images should use this shared type.

Do not allow raw untyped image objects throughout the franchise system.

---

# 4. Director Types

Create:

```ts
export interface FranchiseDirector {
  name: string;
  designation: string;
  portrait?: ImageReference;
  shortBio?: string;
  statement?: string;
  socialLinks?: SocialLink[];
  contact?: FranchiseContact;
}
```

Create:

```ts
export interface SocialLink {
  label: string;
  href: string;
  platform?: string;
}
```

The actual director information can remain empty/undefined until supplied.

Do not fabricate names, biographies, portraits, social accounts, or contact details.

---

# 5. Contact Types

Create:

```ts
export interface FranchiseContact {
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  region?: string;
  postalCode?: string;
}
```

All fields that may not yet exist must be optional.

Do not use fake contact information.

---

# 6. CTA Types

Create a reusable CTA contract:

```ts
export interface FranchiseCTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "text";
}
```

The architecture must allow franchise-specific CTA labels while preserving the same conversion destinations.

---

# 7. Hero Types

Create:

```ts
export interface FranchiseHero {
  eyebrow?: string;
  headline: string;
  statement?: string;
  heroImage?: ImageReference;
  directorPortrait?: ImageReference;
  directorLabel?: string;
  primaryCta?: FranchiseCTA;
  secondaryCta?: FranchiseCTA;
  style?: HeroStyle;
}
```

Create:

```ts
export type HeroStyle =
  | "editorial"
  | "split"
  | "centered"
  | "immersive"
  | "asymmetric";
```

Do not make the visual style a free-form string.

---

# 8. Theme Types

Create explicit types for franchise themes.

```ts
export interface FranchiseTheme {
  primaryAccent: string;
  secondaryAccent?: string;
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  border: string;

  heroStyle: HeroStyle;
  navigationStyle: NavigationStyle;
  cardStyle: CardStyle;
  sectionStyle: SectionStyle;
  typographyTreatment: TypographyTreatment;
  imageTreatment: ImageTreatment;
  buttonTreatment: ButtonTreatment;
  footerStyle: FooterStyle;
}
```

Create explicit unions:

```ts
export type NavigationStyle =
  | "standard"
  | "editorial"
  | "minimal"
  | "compact"
  | "immersive";
```

```ts
export type CardStyle =
  | "standard"
  | "editorial"
  | "bordered"
  | "minimal"
  | "feature";
```

```ts
export type SectionStyle =
  | "standard"
  | "editorial"
  | "spacious"
  | "compact"
  | "asymmetric";
```

```ts
export type TypographyTreatment =
  | "standard"
  | "editorial"
  | "bold"
  | "minimal";
```

```ts
export type ImageTreatment =
  | "standard"
  | "editorial"
  | "full-bleed"
  | "portrait"
  | "duotone";
```

```ts
export type ButtonTreatment =
  | "standard"
  | "compact"
  | "editorial"
  | "rounded";
```

```ts
export type FooterStyle =
  | "standard"
  | "editorial"
  | "minimal"
  | "expanded"
  | "local";
```

Do not permit arbitrary theme values where a controlled union is appropriate.

---

# 9. Navigation Types

Create:

```ts
export interface FranchiseNavigationItem {
  label: string;
  href: string;
  external?: boolean;
  featured?: boolean;
}
```

Create:

```ts
export interface FranchiseNavigation {
  primary: FranchiseNavigationItem[];
  secondary?: FranchiseNavigationItem[];
  featured?: FranchiseNavigationItem[];
  cta?: FranchiseCTA;
}
```

Navigation configuration must be data-driven.

Do not duplicate Header.tsx for each franchise.

---

# 10. Section Types

Create a strongly typed section system.

At minimum:

```ts
export type FranchiseSectionType =
  | "local-introduction"
  | "capabilities"
  | "industries"
  | "director"
  | "products"
  | "services"
  | "solutions"
  | "resources"
  | "case-studies"
  | "proof"
  | "statement"
  | "process"
  | "conversion";
```

Create:

```ts
export type SectionVariant =
  | "editorial"
  | "cards"
  | "split"
  | "statement"
  | "grid"
  | "feature"
  | "timeline"
  | "quote"
  | "showcase";
```

Then create a typed section configuration:

```ts
export interface FranchiseSection {
  id: string;
  type: FranchiseSectionType;
  variant?: SectionVariant;
  eyebrow?: string;
  title?: string;
  description?: string;
  enabled?: boolean;
}
```

If specific section types require additional structured data, create discriminated unions rather than adding numerous optional fields to one enormous interface.

For example:

```ts
type FranchiseSection =
  | LocalIntroductionSection
  | CapabilitiesSection
  | ProductsSection
  | ServicesSection
  | SolutionsSection
  | DirectorSection
  | ProofSection
  | ConversionSection;
```

Use the approach that best fits the existing TypeScript architecture.

The requirement is:

**strong typing + extensibility + no `any`.**

---

# 11. Catalogue References

Create reusable reference types for existing Ricoz catalogue entities.

```ts
export interface CatalogueReference {
  slug: string;
}
```

Then:

```ts
export interface FranchiseCatalogue {
  products: CatalogueReference[];
  services: CatalogueReference[];
  solutions: CatalogueReference[];
  resources?: CatalogueReference[];
  caseStudies?: CatalogueReference[];
}
```

Where the existing application already has typed Product, Service, Solution, Resource, or Case Study types, reuse those types rather than creating duplicate definitions.

Franchise data must reference canonical records.

Do not duplicate complete catalogue objects.

---

# 12. Local Information

Create:

```ts
export interface FranchiseLocation {
  city: string;
  region?: string;
  country?: string;
  address?: string;
  postalCode?: string;
}
```

The architecture must support local information without requiring it to be fabricated.

---

# 13. SEO Types

Create:

```ts
export interface FranchiseSEO {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: ImageReference;
  schema?: Record<string, unknown>;
}
```

Use `Record<string, unknown>` only where schema data genuinely needs flexible structured content.

Do not use `any`.

---

# 14. Conversion Types

Create:

```ts
export interface FranchiseConversion {
  primary: FranchiseCTA;
  secondary?: FranchiseCTA;
  contactHref: string;
  consultationHref: string;
}
```

The architecture must support franchise-aware URLs.

Examples:

```text
/contact?franchise=mumbai
```

```text
/consultation?franchise=mumbai
```

---

# 15. Complete Franchise Interface

Create a central interface:

```ts
export interface Franchise {
  slug: FranchiseSlug;
  name: string;
  city: string;
  region?: string;
  status: FranchiseStatus;

  shortDescription?: string;
  positioning?: string;

  director?: FranchiseDirector;
  contact?: FranchiseContact;
  location?: FranchiseLocation;

  navigation: FranchiseNavigation;
  theme: FranchiseTheme;
  hero: FranchiseHero;

  sections: FranchiseSection[];

  industries: string[];

  catalogue: FranchiseCatalogue;

  seo: FranchiseSEO;

  conversion: FranchiseConversion;
}
```

Adapt field names if the existing codebase has stronger conventions, but maintain equivalent type safety.

---

# 16. Explicit Defaults — REQUIRED

Create centralized defaults.

Do NOT repeat default values independently inside Mumbai/Nagpur/Delhi/Kalyan/Kolkata configuration files.

Create something such as:

```text
src/data/franchises/defaults.ts
```

Define defaults for:

* theme
* navigation
* hero
* CTA
* contact
* location
* SEO
* sections
* catalogue references

Example:

```ts
export const defaultFranchiseTheme: FranchiseTheme = {
  primaryAccent: "#C41230",
  background: "#F8F6F2",
  surface: "#FFFFFF",
  text: "#111111",
  mutedText: "#666666",
  border: "#DDDDDD",

  heroStyle: "editorial",
  navigationStyle: "standard",
  cardStyle: "bordered",
  sectionStyle: "standard",
  typographyTreatment: "standard",
  imageTreatment: "standard",
  buttonTreatment: "standard",
  footerStyle: "standard",
};
```

Use the actual existing Ricoz design tokens if they already exist in the project.

Do not introduce conflicting duplicate design tokens.

---

# 17. Default Content Behavior

Defaults must be safe and non-deceptive.

For missing information:

* use empty/undefined values
* omit the section where appropriate
* render a neutral fallback
* never invent business claims

Examples:

If no director portrait exists:

**Do not generate a fake person.**

If no case studies exist:

**Do not create fabricated case studies.**

If no local address exists:

**Do not display an invented address.**

---

# 18. Configuration Merge Strategy

Create a predictable method for resolving franchise configuration against defaults.

For example:

```ts
resolveFranchiseConfig(config)
```

The resolver should:

1. Apply global Ricoz defaults.
2. Apply franchise defaults.
3. Apply franchise-specific overrides.
4. Return a fully typed `Franchise`.

Do not mutate source configuration objects.

Prefer immutable configuration resolution.

The final result must satisfy the complete `Franchise` interface.

---

# 19. Franchise Registry

Create a central registry.

```ts
export const franchiseRegistry: Record<FranchiseSlug, Franchise> = {
  mumbai: mumbaiFranchise,
  nagpur: nagpurFranchise,
  delhi: delhiFranchise,
  kalyan: kalyanFranchise,
  kolkata: kolkataFranchise,
};
```

If the architecture requires lazy loading, use a typed registry of loaders instead.

The important requirement is that the registry remains strongly typed.

Create:

```ts
export function getFranchise(
  slug: string
): Franchise | undefined
```

This should safely resolve unknown slugs without throwing unexpectedly.

---

# 20. Initial Franchise Records

Create five typed records:

```text
mumbai
nagpur
delhi
kalyan
kolkata
```

At this phase they are **architectural records**, not final content.

Use:

* correct slug
* correct city
* correct franchise name
* default theme
* default navigation
* default conversion structure
* empty/placeholder-safe director data
* empty catalogue references where actual franchise selections have not yet been decided

Do not invent local business information.

---

# 21. Franchise Context Resolver

Create a reusable context resolver for:

```text
product
service
solution
franchise
```

It must support:

```text
/contact?franchise=mumbai
```

and:

```text
/contact?franchise=delhi&service=business-consulting
```

and:

```text
/consultation?franchise=kolkata&solution=digital-transformation
```

Create explicit types for resolved context rather than returning untyped objects.

Example:

```ts
export interface ResolvedFranchiseContext {
  franchise?: Franchise;
  product?: Product;
  service?: Service;
  solution?: Solution;
}
```

Reuse existing Product/Service/Solution types from the project.

---

# 22. Component Architecture

Create reusable components where appropriate.

Suggested structure:

```text
src/
├── data/
│   └── franchises/
│       ├── types.ts
│       ├── defaults.ts
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

Adapt this structure to the existing project architecture.

Do not blindly duplicate existing components.

Do not create a monolithic franchise page.

---

# 23. Existing Ecosystem Integration

Franchise pages must connect to the existing Ricoz catalogue.

Use the existing canonical:

* Products
* Services
* Solutions
* Resources
* Case Studies

Do not duplicate those datasets.

Franchise-specific selections should reference existing canonical slugs.

---

# 24. Franchise Header

Create a reusable FranchiseHeader architecture supporting:

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

The exact navigation can vary by franchise configuration.

Do not create five Header components.

---

# 25. Franchise Footer

Create a reusable `FranchiseFooter`.

It must support:

* franchise identity
* local positioning
* director/local leadership
* local contact
* location
* ecosystem navigation
* products
* services
* solutions
* resources
* consultation CTA
* legal links
* Ricoz parent-brand reference

Footer composition must be themeable.

Do not simply reuse the current global footer unchanged.

---

# 26. Franchise Page Composition

Create:

```text
FranchisePage
│
├── FranchiseHeader
├── FranchiseHero
├── FranchiseSectionRenderer
├── FranchiseConversion
└── FranchiseFooter
```

The section renderer must consume typed configuration.

The exact visual composition will be decided in the next phase.

---

# 27. Contact Integration

Support:

```text
/franchise/mumbai
      ↓
Discuss your requirement
      ↓
/contact?franchise=mumbai
```

The Contact page must preserve franchise context.

Do not create five separate Contact pages.

---

# 28. Consultation Integration

Support:

```text
/franchise/mumbai
      ↓
Schedule a Consultation
      ↓
/consultation?franchise=mumbai
```

The existing consultation architecture must preserve franchise context.

Do not create separate consultation flows.

---

# 29. SEO Architecture

Each franchise must have independently configurable SEO metadata.

Support:

* title
* description
* canonical
* keywords
* Open Graph title
* Open Graph description
* Open Graph image
* structured data

Do not duplicate metadata across all franchises.

Do not invent local business claims.

---

# 30. Design System Compatibility

Franchise-specific themes must extend, not replace, the Ricoz design language.

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
* accessibility

Do not introduce:

* random gradients
* glassmorphism
* excessive shadows
* unrelated typography systems
* inconsistent button behavior

---

# 31. Mobile Architecture

Support franchise-specific mobile compositions.

Architecture must allow:

* mobile hero variants
* mobile navigation
* mobile image treatment
* mobile section ordering
* mobile CTA behavior
* mobile footer organization

Do not assume every desktop layout simply collapses vertically.

---

# 32. Image Architecture

Support:

```text
heroImage
directorPortrait
sectionImages
ogImage
```

All image data must use the shared `ImageReference` type.

Director portraits will be supplied later.

Do not invent director imagery.

---

# 33. Scope Boundary — VERY IMPORTANT

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

The goal is to create the technical, typed and content architecture that will support the five landing pages.

---

# 34. Validation — REQUIRED

Before completing this phase, verify:

### Routing

* `/franchise` exists.
* `/franchise/mumbai` resolves.
* `/franchise/nagpur` resolves.
* `/franchise/delhi` resolves.
* `/franchise/kalyan` resolves.
* `/franchise/kolkata` resolves.
* Invalid slugs produce a proper not-found state.

### Type Safety

* No `any` introduced.
* Franchise records satisfy the `Franchise` interface.
* Registry is strongly typed.
* Theme variants use explicit unions.
* Hero variants use explicit unions.
* Section types are explicit.
* Context resolver is typed.
* Image references are typed.
* CTA structures are typed.
* Defaults satisfy their interfaces.

### Architecture

* All five franchises use the same reusable FranchisePage system.
* Franchise configuration is separated from component logic.
* Defaults are centralized.
* Configuration merging is deterministic.
* Products/services/solutions reference canonical catalogue records.
* No duplicate catalogue datasets exist.
* Header is reusable.
* Footer is reusable.
* Director architecture exists.
* Theme architecture exists.
* Section architecture exists.

### Conversion

* Contact supports franchise context.
* Consultation supports franchise context.
* Franchise context survives navigation where appropriate.
* Existing Contact and Consultation flows remain functional.

### SEO

* Franchise-specific metadata is supported.
* Canonical URLs are franchise-specific.
* OG metadata is configurable.
* Structured-data architecture exists without fabricated business information.

### Quality

* Responsive architecture is supported.
* Accessibility requirements remain intact.
* Existing Ricoz public routes remain unaffected.
* No unnecessary dependencies are introduced.
* TypeScript passes cleanly.
* Production build passes cleanly.

---

# FINAL OUTCOME

At the end of Phase 1, Ricoz should have a **fully typed, default-backed, reusable Franchise Landing System foundation**.

The system should be ready for the next phase:

**Phase 1 — Architecture ✅**

↓

**Phase 2 — Mumbai**

**Phase 2 — Nagpur**

**Phase 2 — Delhi**

**Phase 2 — Kalyan**

**Phase 2 — Kolkata**

Each franchise will then receive its own:

* visual direction
* hero composition
* director presentation
* section order
* local storytelling
* products/services/solutions emphasis
* CTA treatment
* footer composition

while continuing to use the same underlying Ricoz architecture and design language.
