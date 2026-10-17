### Figma Make Prompt — Flow 42: About Ricoz

Implement **Flow 42 — About Ricoz** for the Ricoz platform.

**Journey:**
Company → About → Story → Principles → Capabilities

### Objective

Create a polished `/about` experience that explains who Ricoz is, what it believes in, how it approaches work, and the capabilities represented across the existing ecosystem.

The page should feel like a natural Company-level destination rather than another product/service landing page.

### Preserve Existing Architecture

Reuse:

* existing routing architecture
* existing Ricoz navigation
* existing Product / Service / Solution catalogues
* existing design system
* existing typography and spacing tokens
* existing SEO utilities
* existing reusable layout and card components where appropriate

If an About page already exists, improve and structure that page rather than creating a duplicate route.

Use the canonical `/about` route if that is already the established route.

### Page Structure

Build the page in this hierarchy:

**1. Breadcrumb**

Company → About

Keep the breadcrumb simple and consistent with the rest of the platform.

**2. Hero**

Create a concise editorial introduction to Ricoz.

Include:

* H1: About Ricoz
* short supporting statement
* optional existing company descriptor/tagline if already present

Do not introduce fake company statistics, customer counts, years of experience or market claims.

**3. Our Story**

Create a dedicated story section explaining Ricoz's purpose and evolution using the existing company content/data.

Structure the content for readability rather than creating a large wall of text.

If the existing data contains milestones or stages, present only those actual milestones.

Do not invent dates, founders, achievements or historical events.

**4. Our Principles**

Present the existing Ricoz principles/values as a concise set of clearly differentiated items.

Each principle should contain:

* principle name
* short explanation

Use existing company content where available.

Do not invent corporate values solely to fill empty space.

**5. Our Capabilities**

Connect the company story to the actual Ricoz ecosystem.

Use existing catalogue data to represent capability areas across:

* Products
* Services
* Solutions

Where category structures already exist, reuse them rather than introducing a new capability taxonomy.

Each capability entry should provide a clear route into the relevant existing area.

Examples of valid destinations:

* `/products`
* `/services`
* `/solutions`
* existing category routes where supported

Do not duplicate the complete product/service catalogue on the About page.

### Content Integrity

This page represents the company, so content accuracy is critical.

Use only:

* existing Ricoz company content
* existing catalogue information
* existing relationships
* existing structured data

Do not invent:

* customer logos
* testimonials
* revenue
* employee counts
* offices
* awards
* certifications
* partnerships
* market position claims
* fictional leadership history
* performance statistics

If a content field is unavailable, omit the section or keep the presentation intentionally concise.

### Visual Direction

Use the established Ricoz visual language:

* Manrope typography
* Ricoz Red `#C41230`
* warm off-white background
* near-black text
* restrained borders
* 8px spacing system
* subtle 4px radius
* minimal shadows
* no gradients
* no glassmorphism

The page should feel:

**Editorial + modern + credible + enterprise + human**

Avoid making the About page look like a generic corporate template.

### Responsive Behavior

Desktop:

* strong editorial hierarchy
* generous but controlled whitespace
* readable content widths
* clear section separation

Tablet:

* preserve hierarchy while reducing density

Mobile:

* single-column content
* comfortable spacing
* readable line lengths
* no horizontal overflow
* touch-friendly links and navigation

### Accessibility

Ensure:

* semantic heading hierarchy
* accessible navigation
* visible focus states
* sufficient text contrast
* keyboard-accessible links
* meaningful link labels
* no information communicated through color alone

### SEO

Configure the About page using the existing SEO utilities.

Include:

* unique page title
* unique meta description
* canonical `/about`
* appropriate Organization/AboutPage structured data only if the existing SEO architecture supports it

Do not add fabricated organization attributes.

### Scope Boundary

Do NOT implement:

* Leadership page
* Careers page
* Company navigation redesign
* Contact redesign
* new Product / Service / Solution taxonomy
* CMS
* backend
* authentication
* CRM
* AI
* personalization
* fake company statistics
* testimonials or customer proof
* unrelated homepage changes

Flow 43 will handle broader Company navigation separately.

### Validation

Verify:

1. `/about` resolves correctly.
2. Breadcrumb correctly identifies Company → About.
3. Hero displays the correct Ricoz company introduction.
4. Story content uses existing company information only.
5. Principles render correctly from available data.
6. Capabilities connect to existing Products, Services and Solutions.
7. No duplicate catalogue architecture is introduced.
8. Missing content does not produce empty/broken sections.
9. Navigation remains functional.
10. SEO metadata and canonical behavior are correct.
11. Desktop, tablet and mobile layouts work correctly.
12. Keyboard and accessibility behavior is correct.
13. No fabricated company claims appear.
14. Build completes without TypeScript errors.
