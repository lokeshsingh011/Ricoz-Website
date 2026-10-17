# FLOW 53 — PRODUCT MANAGEMENT

## Objective

Establish the internal Product Management workflow:

**Products → Search → Product → Edit → Save → Publish**

The goal is to allow authenticated Admin users to manage the existing Ricoz product catalogue through a structured operational interface.

Build on the existing 123-product catalogue and existing product data model. Do not replace or duplicate the public Product ecosystem.

---

## 1. Admin Product Route

Create the authenticated Product Management area under the existing Admin architecture.

Use a route structure such as:

* `/admin/products`
* `/admin/products/:productSlug`

The Product Management module must inherit the authentication protection established in Flow 52.

Unauthenticated users attempting to access these routes must be redirected to `/admin/login`.

Do not create a second authentication mechanism.

---

## 2. Product Management Dashboard

Create a focused catalogue-management screen showing the existing products.

The main view should provide:

* Page title
* Short management description
* Product count
* Search
* Category filtering where the existing taxonomy supports it
* Product list/grid
* Product status where available
* Edit action
* Publish/status action where appropriate

Use the existing product catalogue as the source of truth.

Do not create fake products or fake operational metrics.

---

## 3. Product Search

Provide deterministic client-side search across existing product data.

Search should consider relevant existing fields such as:

* Product name
* Tagline
* Short description
* Category
* Overview
* Capabilities
* Benefits
* Features
* Use cases

Maintain the existing search logic where practical rather than creating a completely separate product-search implementation.

Provide:

* Result count
* No-results state
* Clear search action

Do not introduce AI search or semantic search.

---

## 4. Product Selection

Selecting a product should open its Admin management view.

The Admin Product view should identify:

* Product name
* Slug
* Category
* Tagline
* Overview
* Existing capabilities
* Existing benefits
* Existing features
* Existing use cases
* Existing FAQs
* Existing relationships
* SEO metadata

Present the information in a structured editing-oriented layout rather than the public Product Detail presentation.

---

## 5. Product Editing

Allow authenticated Admin users to edit the fields that already exist in the Product data model.

Where supported, editable areas should include:

### Core Information

* Name
* Slug
* Category
* Tagline
* Overview

### Product Content

* Capabilities
* Benefits
* Features
* Use cases
* FAQs

### Relationships

* Related products
* Related services

### SEO

* SEO title
* Meta description
* Canonical information where currently supported

Do not introduce a new product taxonomy.

Do not create additional fields simply to make the Admin screen appear more sophisticated.

---

## 6. Relationship Integrity

Product relationships must remain valid.

When editing:

* Related products must resolve to existing products.
* Related services must resolve to existing services.
* Self-references should not be allowed.
* Duplicate relationships should be prevented.
* Invalid references should not be introduced.

Preserve the existing relationship model used by the public Product ecosystem.

---

## 7. Save Workflow

Implement a clear editing lifecycle:

**Product → Edit → Modify → Save → Saved State**

The interface should provide:

* Save action
* Saving state
* Duplicate-submit prevention
* Successful save feedback
* Error feedback
* Unsaved-change awareness where practical

Do not imply server persistence if the current application does not have a real backend.

If persistence is currently frontend/local-state based, structure the implementation so a future API/data layer can replace it without redesigning the Admin UI.

---

## 8. Publish Workflow

Establish a basic product publishing concept.

The workflow should support a controlled transition such as:

**Draft → Published**

Where the existing application does not have true persistence, treat publishing as an architectural state rather than pretending that a production publishing service exists.

Do not create fake publication timestamps, fake editors, or fake deployment records.

Publishing should not silently create duplicate products or routes.

---

## 9. Public Product Relationship

The Admin Product record must remain connected to the public Product experience.

Changes to a product should conceptually affect the same canonical product record used by:

* `/products`
* `/products/category/:categorySlug`
* `/products/:productSlug`
* Product search
* Related products
* Related services
* Contact context
* Consultation context
* SEO metadata

Do not create an independent Admin-only product catalogue.

---

## 10. Validation

Validate important product fields before saving.

At minimum:

* Product name cannot be empty.
* Slug must be valid.
* Category must exist in the established taxonomy.
* Required content must be present where the existing data model requires it.
* Relationship references must be valid.
* SEO fields should follow existing metadata constraints where applicable.

Show validation errors clearly and preserve entered values.

---

## 11. Unsaved Changes & Recovery

Where practical, warn the Admin user before leaving an edited product with unsaved changes.

If saving fails:

* preserve the edited values
* display an accessible error
* keep the user on the editing screen
* allow retry

Do not discard work because of a failed save.

---

## 12. Responsive & Accessibility

The Admin Product Management experience must work across:

* desktop
* tablet
* mobile

The editing interface should prioritize clarity over visual decoration.

Maintain the Ricoz system:

* Manrope typography
* Ricoz Red `#C41230`
* warm off-white background
* near-black text
* thin borders
* restrained cards
* 4px radius
* 8px spacing scale
* light mode only
* no gradients
* no glassmorphism
* no excessive shadows

Maintain:

* keyboard navigation
* visible focus states
* semantic form controls
* accessible labels
* accessible validation messages
* accessible save/publish feedback

---

## 13. Scope Boundary

Do **not** build:

* Product creation from scratch unless the existing data architecture already supports it
* Full CMS
* Backend API
* Database
* Version history
* Approval workflow
* Role/permission management
* Audit logs
* Bulk editing
* Import/export
* AI content generation
* AI product classification
* Analytics
* Customer-facing product redesign
* Product purchasing

Those capabilities can be introduced through later Admin and Platform flows.

The priority is a clean **Product Management foundation** that can later evolve into a production-grade catalogue management system.

## Validation

Verify:

* Admin authentication protects Product Management.
* `/admin/products` loads the existing product catalogue.
* Product search works deterministically.
* Existing category taxonomy is preserved.
* Product selection opens the correct management record.
* Existing product fields can be edited where supported.
* Product/service relationships remain valid.
* Validation prevents invalid saves.
* Saving has a clear loading/success/error lifecycle.
* Publishing has a clear state model.
* Public Product routes remain intact.
* Existing product slugs and relationships are not unnecessarily changed.
* No duplicate Product data model is created.
* No fake backend persistence is presented as real.
* Responsive behavior works across desktop, tablet, and mobile.
* Build completes without TypeScript errors.
