SUPPORTING PROMPT — TYPOGRAPHY & VISUAL REFINEMENT

Objective

Perform a global typography and visual-quality refinement of the existing Ricoz digital ecosystem.

This is NOT a redesign and NOT a restructuring of the product architecture.

The existing functionality, routes, components, data model, SEO implementation, product catalogue, navigation flows, search behavior, forms, and responsive behavior must remain intact.

The goal is to make the existing Ricoz website feel significantly more premium, elegant, restrained, modern, and professionally designed.

==================================================
1. TYPOGRAPHY SYSTEM
==================================================

Replace the current Instrument Serif + Inter typography combination with a single, cohesive typeface:

PRIMARY FONT:
Manrope

Use Manrope throughout the entire Ricoz ecosystem.

Do not introduce another display serif font.

Typography should feel:

- premium
- minimal
- confident
- highly readable
- contemporary
- sophisticated
- understated

Avoid exaggerated SaaS typography, oversized futuristic lettering, decorative fonts, or excessive font-weight variation.

Recommended hierarchy:

Display / Hero:
Manrope 600

H1:
Manrope 600

H2:
Manrope 600

H3:
Manrope 600

H4:
Manrope 600

Body:
Manrope 400

Navigation:
Manrope 500

Buttons:
Manrope 600

Eyebrows / Labels:
Manrope 600

Product names:
Manrope 600

Metadata:
Manrope 500

Do not use 700/800 weights excessively.

Typography should rely primarily on:

400
500
600

rather than making everything bold.

==================================================
2. TYPOGRAPHY SCALE
==================================================

Create a consistent responsive typography scale.

Desktop:

Hero display:
56–72px depending on viewport

H1:
48–56px

H2:
36–44px

H3:
26–32px

H4:
20–24px

Body large:
18px

Body:
16px

Small:
14px

Micro / metadata:
12–13px

Mobile:

Hero:
40–48px

H1:
36–42px

H2:
30–34px

H3:
22–26px

Body:
16px

Small:
14px

Do not allow headings to become unnecessarily huge.

Use responsive clamp() values where appropriate rather than hardcoded desktop-only sizing.

==================================================
3. LINE HEIGHT
==================================================

Improve readability through deliberate line-height.

Display:
1.05–1.12

H1:
1.1–1.15

H2:
1.15–1.2

H3:
1.2–1.25

Body:
1.55–1.7

Metadata:
1.4–1.5

Avoid tightly packed paragraphs.

Long-form product descriptions should feel comfortable to read.

==================================================
4. LETTER SPACING
==================================================

Use restrained tracking.

Large headings:
slightly negative tracking where appropriate

Example:
-0.02em to -0.04em

Body:
normal tracking

Uppercase labels:
0.04em–0.08em

Do not overuse letter spacing.

==================================================
5. RICOZ COLOR SYSTEM
==================================================

Preserve the established Ricoz Red:

Primary accent:
#C41230

Do NOT increase the amount of red throughout the interface.

Ricoz Red should remain an accent, not the dominant background color.

Use:

Near-black:
#111111

Primary text:
near-black

Secondary text:
muted neutral gray

Background:
warm off-white

Cards:
slightly differentiated warm/neutral surface

Borders:
very subtle neutral borders

Ricoz Red should primarily appear in:

- primary CTA buttons
- active navigation states
- selected filters
- important links
- small UI indicators
- focused states
- meaningful highlights

Avoid:

- red backgrounds everywhere
- red cards
- red gradients
- excessive red icons
- glowing red effects
- neon treatments

==================================================
6. VISUAL LANGUAGE
==================================================

Refine the existing visual system toward:

Editorial technology
+
Premium enterprise software
+
Minimal product design

The interface should feel expensive because of:

- spacing
- typography
- hierarchy
- alignment
- restraint
- consistency

NOT because of:

- gradients
- glassmorphism
- shadows everywhere
- excessive animation
- decorative graphics
- glowing effects

Maintain the existing:

8px spacing system

4px border radius

thin-border card language

Keep these principles consistent across all screens.

==================================================
7. HEADINGS
==================================================

Review every major heading across the application.

Headings should:

- communicate hierarchy immediately
- have comfortable line lengths
- avoid unnecessary line breaks
- avoid awkward single-word orphan lines
- use strong but restrained weight
- have generous surrounding whitespace

For hero sections, prioritize typography and whitespace over decorative graphics.

Where appropriate, constrain heading width to approximately:

600–800px

rather than allowing extremely long lines.

==================================================
8. BODY COPY
==================================================

Improve all body copy presentation.

Maximum readable paragraph width:

approximately 620–720px

Avoid full-width paragraphs.

Increase vertical spacing between:

heading
subheading
paragraph
CTA

Product descriptions should feel editorial rather than like dense documentation.

==================================================
9. PRODUCT CATALOGUE
==================================================

Apply the typography refinement consistently across the entire 109+ product catalogue.

Product cards should have:

Product name
Category
Short description/tagline
Optional status/badge
CTA

Hierarchy:

1. Product name
2. Value proposition
3. Supporting metadata
4. CTA

Do not make every piece of information visually equal.

Product names should be immediately scannable.

Category labels should be quieter.

Descriptions should use muted text.

CTAs should remain visually clear but restrained.

==================================================
10. PRODUCT DETAIL PAGES
==================================================

Refine ProductDetail.tsx visually without changing functionality.

Improve:

- hero hierarchy
- product name typography
- tagline
- category breadcrumb
- capability presentation
- feature sections
- benefits
- use cases
- FAQs
- related products
- CTA sections

The product hero should feel premium and spacious.

Avoid overwhelming users with large blocks of information above the fold.

Use clear visual rhythm between sections.

Preserve all existing:

- JSON-LD
- Product schema
- FAQ schema
- Breadcrumb schema
- metadata
- ?product= behavior
- Contact CTA
- Consultation CTA

==================================================
11. NAVIGATION
==================================================

Refine Header.tsx typography.

Desktop navigation:

- Manrope 500
- compact
- precise spacing
- subtle hover states
- Ricoz Red for active state

Mega panels should feel editorial and structured.

Do not make navigation typography oversized.

Mobile navigation should use the same typography system.

Preserve all existing navigation functionality.

Do NOT alter:

- React Router links
- mega-panel behavior
- hover delay
- click toggle
- Escape handling
- mobile accordions
- body scroll locking
- accessibility attributes

==================================================
12. SEARCH
==================================================

Refine Search.tsx visually.

Search overlay should feel premium and calm.

Improve:

- search input typography
- result hierarchy
- filter chip typography
- category labels
- result descriptions
- recent search presentation
- empty state

Search results should be highly scannable.

Preserve:

- multi-field ranking
- content-type filters
- live counts
- recent searches
- localStorage
- loading state
- no-result state
- accessibility
- overlay-only behavior
- no URL changes

==================================================
13. BUTTONS
==================================================

Refine Button component globally.

Primary:
Ricoz Red background
white text

Secondary:
transparent / neutral surface
thin border
near-black text

Ghost:
minimal
text-led

Buttons should have:

- consistent height
- consistent horizontal padding
- Manrope 600
- 4px radius
- subtle hover transition

Avoid pill-shaped buttons unless an existing component specifically requires them.

Do not add excessive shadows.

==================================================
14. CARDS
==================================================

Refine:

ProductCard
ServiceCard
ResourceCard
CaseStudyCard

Cards should have stronger typography hierarchy and more whitespace.

Prefer:

thin borders
subtle surface contrast
minimal radius
clean alignment

Avoid:

large shadows
floating glass effects
gradients
heavy decorative backgrounds

Cards should feel like part of an editorial system rather than generic SaaS templates.

==================================================
15. FORMS
==================================================

Refine Contact.tsx and Consultation.tsx.

Improve:

- label typography
- input typography
- helper text
- validation messages
- spacing
- focus states
- select controls
- CTA hierarchy

Inputs should feel clean and premium.

Focus state should use Ricoz Red subtly.

Preserve all current functionality including:

?product=
?solution=

product context banner

solution context banner

pre-selected interest/purpose

Step 5 review summary

validation

submission behavior

==================================================
16. ACCESSIBILITY
==================================================

Do not sacrifice accessibility for visual refinement.

Maintain:

- sufficient contrast
- visible keyboard focus
- semantic heading hierarchy
- accessible labels
- aria attributes
- keyboard navigation
- Escape behavior
- screen-reader-friendly structure

Do not use color as the only method of communicating state.

==================================================
17. RESPONSIVE DESIGN
==================================================

Audit typography across:

1440px+
1280px
1024px
768px
480px
375px

Prevent:

- heading overflow
- awkward wrapping
- cramped navigation
- horizontal scrolling
- oversized typography on mobile
- inconsistent card heights caused by typography

Use responsive clamp() values where beneficial.

Mobile should feel intentionally designed, not simply compressed desktop.

==================================================
18. MICRO-INTERACTIONS
==================================================

Keep animation extremely restrained.

Allowed:

- 150–250ms transitions
- subtle opacity changes
- small translate movements
- button hover transitions
- chevron rotation
- focus transitions

Avoid:

- bouncing
- excessive scaling
- parallax
- flashy entrance animations
- infinite animations
- glowing effects

The interface should feel calm.

==================================================
19. SEO SAFETY
==================================================

This refinement must NOT negatively affect SEO.

Preserve:

- semantic HTML
- existing heading hierarchy
- page metadata
- canonical URLs
- JSON-LD
- Product schema
- Service schema
- FAQ schema
- Breadcrumb schema
- internal linking
- crawlable React Router routes

Do not replace semantic headings with divs.

Do not hide important SEO content behind inaccessible UI.

Search overlay must remain non-indexable and must not create unnecessary URLs.

==================================================
20. PERFORMANCE
==================================================

Do not introduce unnecessary font libraries, animation packages, icon libraries, or UI frameworks.

Load Manrope efficiently.

Prefer only the required font weights:

400
500
600

Avoid loading unnecessary weights.

Do not create a large performance regression.

The existing 109+ product catalogue must continue to build successfully.

==================================================
21. GLOBAL CONSISTENCY AUDIT
==================================================

After applying the typography system, inspect every existing route.

At minimum verify:

/
 /products
 /products/category/:categorySlug
 /products/:slug
 /services
 /services/category/:categorySlug
 /services/:slug
 /resources
 /resources/case-studies
 /resources/case-studies/:slug
 /resources/:slug
 /contact
 /consultation

Check:

- typography
- spacing
- heading hierarchy
- buttons
- cards
- forms
- breadcrumbs
- navigation
- mobile behavior

Do not redesign individual pages independently.

The entire ecosystem should look like one coherent product.

==================================================
22. DO NOT BREAK EXISTING WORK
==================================================

This is critical.

Do NOT:

- remove existing products
- modify product IDs
- modify product slugs
- modify category slugs
- remove SEO metadata
- remove JSON-LD
- change routes
- change CTA behavior
- remove search functionality
- remove filters
- remove responsive behavior
- remove accessibility
- rewrite product data
- change business logic

This is a visual and typography refinement only.

==================================================
23. VALIDATION
==================================================

After implementation:

1. Run the production build.

2. Confirm TypeScript has no errors.

3. Confirm all routes compile.

4. Confirm all 109+ products remain available.

5. Confirm no duplicate product IDs.

6. Confirm no duplicate product slugs.

7. Confirm all product categories remain valid.

8. Confirm related-product references remain valid.

9. Confirm SEO metadata still works.

10. Confirm JSON-LD remains present.

11. Confirm Header navigation still works.

12. Confirm Search still works.

13. Confirm Contact and Consultation still work.

14. Confirm ?product= context still works.

15. Confirm ?solution= context still works.

16. Confirm mobile navigation still works.

17. Confirm keyboard accessibility.

18. Confirm responsive typography.

==================================================
FINAL DESIGN PRINCIPLE
==================================================

Ricoz should now feel like a premium technology company with a mature digital product ecosystem.

The design language should communicate:

"Serious technology.
Clear thinking.
Premium execution.
No unnecessary noise."

Use typography, spacing and hierarchy as the primary design tools.

Do not compensate for weak hierarchy with decoration.

Make it simpler.
Make it sharper.
Make it more refined.

Most importantly:

DO NOT redesign the existing Ricoz architecture.

REFINE IT.