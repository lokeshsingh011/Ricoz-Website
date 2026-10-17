# RICOZ — FLOW 02: GLOBAL NAVIGATION & DISCOVERY

Enhance the existing Ricoz digital ecosystem by implementing FLOW 02 — Global Navigation.

IMPORTANT:

Do NOT rebuild the application.

Do NOT redesign the Ricoz visual identity.

Do NOT change:

* Ricoz Red #C41230
* Instrument Serif
* Inter
* Existing spacing system
* Existing border/radius language
* Existing page layouts
* Existing product/service architecture
* Existing SEO architecture

Reuse the current Header, Footer, routing system, design tokens and components.

Only modify the navigation system and the minimum shared components required to complete this flow.

---

# 01. FLOW OBJECTIVE

The global navigation must allow users to move naturally across the Ricoz ecosystem.

Primary navigation:

Ricoz

Products
Services
Solutions
Resources
Company

Utility:

Search

Contact Us

Primary CTA:

Schedule a Consultation

The navigation must remain simple despite the size of the ecosystem.

Do not attempt to expose every product or service directly in the header.

---

# 02. DESKTOP HEADER

Create a premium sticky desktop header.

Structure:

LEFT

RICOZ

CENTER

Products
Services
Solutions
Resources
Company

RIGHT

Search

Contact Us

Schedule a Consultation

Maintain generous horizontal spacing.

The header should remain visually lightweight.

Use the existing Ricoz typography and color system.

---

# 03. HEADER STATES

Support:

Default

Hover

Active

Scrolled

Keyboard Focus

The scrolled state may introduce a subtle background/border treatment.

Do not introduce heavy shadows.

Active navigation should use a restrained Ricoz Red treatment.

---

# 04. PRODUCTS NAVIGATION

Products should open a sophisticated mega-navigation or structured dropdown.

Do NOT list all 125 products.

Instead expose:

Products

View All Products →

Categories

Featured Products

Explore by Need

Example structure:

PRODUCTS

Explore All Products
View the complete product ecosystem.

CATEGORIES

Category
Category
Category
Category
Category
Category

FEATURED

RicoAnalytics
RicoFlow
RicoShield

Use the existing product data.

The featured products must be generated from the existing data layer.

CTA:

Explore All Products →

Route:

/products/

---

# 05. PRODUCT CATEGORY NAVIGATION

Category items must link to the existing category architecture.

Current category route pattern:

/products/category/:categorySlug

Do not create duplicate category URLs.

Ensure category navigation uses the existing route structure.

---

# 06. SERVICES NAVIGATION

Create equivalent structured navigation for Services.

Structure:

SERVICES

Explore All Services →

CATEGORIES

Existing service categories

FEATURED SERVICES

Use several existing services from the data layer.

CTA:

Explore All Services →

Route:

/services/

Category routes must use:

/services/category/:categorySlug

Do not list all 50 future services in the header.

---

# 07. SOLUTIONS NAVIGATION

Create a lightweight Solutions navigation.

Possible structure:

SOLUTIONS

Explore Solutions →

BY OUTCOME

Operational Efficiency

Digital Transformation

Data & Intelligence

Business Growth

Do not imply unsupported products or capabilities.

Solutions should function as a discovery layer between customer needs and Ricoz capabilities.

Route:

/solutions/

If the Solutions route does not yet exist, create only the minimum placeholder route required for navigation.

Do not build the complete Solutions ecosystem in this flow.

---

# 08. RESOURCES NAVIGATION

Create a structured Resources dropdown.

Include:

Resources Overview

Insights / Articles

Case Studies

Potential future resource categories

Routes:

/resources/

/resources/case-studies/

Use the existing resource and case-study data.

Do not create unnecessary resource pages.

---

# 09. COMPANY NAVIGATION

Create a lightweight Company dropdown.

Include:

About Ricoz

Capabilities / Overview

Contact

Potential future company sections

The navigation should remain concise.

Do not create large speculative company functionality.

---

# 10. SEARCH ENTRY

The existing search foundation should be accessible globally.

Clicking Search should open a polished search experience.

Do not implement a complex backend search engine in this flow.

Create the UI state:

Search

↓

Search overlay

↓

Search input

↓

Suggested categories

↓

Recent / suggested results

↓

Results grouped by:

Products
Services
Resources
Case Studies

Search result items must be clickable.

---

# 11. CONTACT CTA

Contact Us should navigate to:

/contact/

Do not duplicate the contact form inside the navigation.

---

# 12. CONSULTATION CTA

Schedule a Consultation should navigate to:

/consultation/

Maintain the existing consultation wizard.

Do not create a second booking flow.

---

# 13. MOBILE NAVIGATION

The existing mobile full-screen navigation should be refined rather than replaced.

When opened:

Display:

Ricoz

Products
Services
Solutions
Resources
Company

Search

Contact Us

Schedule a Consultation

Each major section should be expandable where additional navigation is necessary.

---

# 14. MOBILE PRODUCTS MENU

Products accordion:

Products

→ Explore All Products

→ Categories

→ Featured Products

Keep the number of visible items limited.

Do not attempt to display 125 products.

---

# 15. MOBILE SERVICES MENU

Services accordion:

Services

→ Explore All Services

→ Categories

→ Featured Services

Again, do not display the entire future catalogue.

---

# 16. MOBILE RESOURCES MENU

Resources accordion:

Resources

→ All Resources

→ Case Studies

→ Articles / Insights

Use existing routes.

---

# 17. MOBILE COMPANY MENU

Company accordion:

Company

→ About

→ Contact

Keep this concise.

---

# 18. MOBILE UX

The mobile menu must:

* Lock background scrolling while open
* Have clear close control
* Support keyboard accessibility where applicable
* Have visible focus states
* Animate subtly
* Avoid excessive transitions
* Remain usable on small screens

Do not create a complicated nested navigation hierarchy.

---

# 19. NAVIGATION ROUTING

Verify all navigation destinations.

Products:

/products/

Product category:

/products/category/:categorySlug

Services:

/services/

Service category:

/services/category/:categorySlug

Resources:

/resources/

Case studies:

/resources/case-studies/

Contact:

/contact/

Consultation:

/consultation/

Ensure links use the existing React Router implementation rather than full-page reloads.

---

# 20. SEO CONSIDERATIONS

Navigation links should be normal crawlable internal links.

Use descriptive anchor text.

Do not hide critical navigation exclusively behind JavaScript interactions.

Mega-menu content should complement—not replace—the primary indexable page architecture.

Do not create indexable search/filter URLs from navigation interactions.

---

# 21. ACCESSIBILITY

Ensure:

* Semantic navigation
* Accessible dropdown triggers
* Keyboard navigation
* Escape closes open menus
* Focus management
* Visible focus indicators
* Correct ARIA relationships where required
* Mobile menu is accessible
* Screen readers can understand navigation hierarchy

Do not rely only on hover.

---

# 22. PERFORMANCE

The navigation should remain lightweight.

Do not load the entire product catalogue simply because the Products menu is opened.

Use the existing small product/service data subset for featured navigation content.

Do not introduce unnecessary libraries.

---

# 23. VISUAL BEHAVIOR

The navigation should feel:

Quiet

Precise

Premium

Confident

Editorial

It should never compete visually with the page content.

The primary Ricoz Red CTA should remain the strongest action.

Secondary navigation should remain neutral.

---

# 24. FLOW TESTING

Verify:

Homepage
→ Products
→ Products listing

Homepage
→ Products
→ Category
→ Product

Homepage
→ Services
→ Services listing

Homepage
→ Services
→ Category
→ Service

Homepage
→ Resources
→ Resource

Homepage
→ Resources
→ Case Studies
→ Case Study

Homepage
→ Company
→ About

Homepage
→ Contact

Homepage
→ Consultation

Header
→ Search

Mobile
→ Menu
→ Products
→ Category
→ Product

Mobile
→ Menu
→ Services
→ Category
→ Service

---

# 25. IMPORTANT SCOPE CONTROL

Do NOT build:

* Full Solutions ecosystem
* Full Company ecosystem
* Advanced search backend
* Customer dashboard
* Admin dashboard
* Authentication
* CRM
* Payments

Those are later flows.

This flow is ONLY:

GLOBAL NAVIGATION
+
DISCOVERY ENTRY POINTS
+
RESPONSIVE NAVIGATION
+
SEARCH ENTRY
+
ROUTING VALIDATION

---

# 26. FINAL ACCEPTANCE CRITERIA

The completed Flow 02 must provide:

✓ Premium desktop header

✓ Responsive mobile navigation

✓ Product mega-navigation

✓ Service mega-navigation

✓ Solutions navigation

✓ Resources navigation

✓ Company navigation

✓ Global search entry

✓ Contact CTA

✓ Consultation CTA

✓ Correct React Router navigation

✓ Crawlable internal links

✓ Accessible interaction states

✓ No unnecessary catalogue loading

✓ No unrelated page redesign

The navigation should comfortably support the future Ricoz ecosystem of:

125+ Products

50+ Services

without becoming visually overwhelming.

At completion, report:

1. Navigation components modified
2. Desktop behavior implemented
3. Mobile behavior implemented
4. Routes verified
5. Accessibility behavior verified
6. Search entry verified
7. Any issues or dependencies discovered
