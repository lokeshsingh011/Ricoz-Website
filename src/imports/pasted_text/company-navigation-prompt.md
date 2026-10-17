### Figma Make Prompt — Flow 43: Company Navigation

Implement **Flow 43 — Company Navigation** for the Ricoz platform.

**Journey:**
Company → About / Leadership / Careers / Contact

### Objective

Create a clear, consistent Company navigation experience that allows visitors to move between the existing Company destinations:

* About Ricoz
* Leadership
* Careers
* Contact

The goal is to make these destinations discoverable and connected without redesigning their individual experiences.

### Preserve Existing Architecture

Reuse:

* existing global navigation
* existing `/about` experience from Flow 42
* existing Leadership route/page if already present
* existing Careers route/page if already present
* existing `/contact` experience
* existing routing utilities
* existing Ricoz design system
* existing responsive navigation components

Do not create duplicate pages or a second navigation system.

### Company Navigation Entry

Where the existing global navigation has a **Company** entry, ensure it provides access to the Company destinations.

The Company navigation should expose:

* **About**
* **Leadership**
* **Careers**
* **Contact**

Use the actual existing routes.

If a Leadership or Careers page does not yet have a dedicated route, do not invent detailed page content as part of this flow. Create only the minimum navigation connection required by the existing architecture.

### Company Section Navigation

On Company-level pages where appropriate, provide a lightweight secondary navigation or related-links area containing:

**About | Leadership | Careers | Contact**

The navigation should make the visitor's current location clear without becoming a large dashboard or mega-menu.

Use the existing navigation pattern if one already exists.

### Active State

The current Company destination should have a clear active state.

Examples:

* About → About highlighted
* Leadership → Leadership highlighted
* Careers → Careers highlighted
* Contact → Contact highlighted

Do not rely on color alone to communicate the active state.

### Routing

Verify that every navigation item resolves to its existing canonical route.

Expected destinations where already established:

* About → `/about`
* Contact → `/contact`

For Leadership and Careers, use their existing routes if present.

Do not introduce arbitrary route names if the application already has canonical routes.

### Company → Contact

The Contact destination should open the existing General Contact experience.

Do not attach Product, Service or Solution context when entering Contact from Company navigation.

The resulting journey is:

Company → Contact → General Enquiry

Existing contextual Contact flows from Products, Services and Solutions must remain unchanged.

### Responsive Behavior

Desktop:

* Company navigation should be easy to discover.
* Maintain clear active states.
* Avoid an oversized mega-navigation.

Mobile:

* Integrate with the existing mobile navigation.
* Keep all four destinations easily accessible.
* Use comfortable touch targets.
* Ensure the menu does not introduce horizontal overflow.

### Visual Direction

Follow the established Ricoz system:

* Manrope
* Ricoz Red `#C41230`
* warm off-white background
* near-black text
* restrained borders
* 8px spacing scale
* 4px radius
* minimal shadows
* no gradients
* no glassmorphism

Keep the navigation understated and premium.

### Accessibility

Ensure:

* keyboard-accessible navigation
* visible focus states
* semantic navigation landmarks
* clear link names
* accessible active-state indication
* logical tab order
* mobile menu remains keyboard accessible where applicable

### SEO

Do not create additional indexable navigation pages.

Preserve the canonical URLs and existing metadata for each destination.

Do not create duplicate Company routes solely for navigation purposes.

### Scope Boundary

Do NOT implement:

* Leadership content redesign
* Careers content redesign
* About redesign beyond navigation integration
* Contact form redesign
* Product / Service / Solution changes
* CMS
* backend
* CRM
* authentication
* AI
* personalization
* mega-menu architecture
* new Company taxonomy

This flow is primarily about **discoverability, routing and navigation consistency**.

### Validation

Verify:

1. Company navigation is accessible from the existing global navigation.
2. About links to the correct About page.
3. Leadership links to its existing canonical route where available.
4. Careers links to its existing canonical route where available.
5. Contact opens the General Contact experience.
6. Current Company destination receives a clear active state.
7. Company navigation works on desktop.
8. Company navigation works on mobile.
9. Keyboard navigation works correctly.
10. No duplicate routes or navigation systems are created.
11. Existing Product → Contact, Service → Contact and Solution → Contact flows remain unchanged.
12. Existing consultation flows remain unchanged.
13. Build completes without TypeScript errors.
