# FLOW 54 — SERVICE MANAGEMENT

## Objective

Establish the internal Service Management workflow:

**Services → Search → Service → Edit → Save → Publish**

The goal is to allow authenticated Admin users to manage the existing Ricoz service catalogue through the same operational architecture established for Products.

Build on the existing **60-service catalogue**, seven established service categories, existing relationships, SEO metadata, and reusable Service Detail architecture.

Do not replace or duplicate the public Service ecosystem.

---

## 1. Admin Service Route

Create the authenticated Service Management area within the existing Admin architecture.

Use routes such as:

* `/admin/services`
* `/admin/services/:serviceSlug`

These routes must inherit the authentication protection established in Flow 52.

Unauthenticated users must be redirected to:

`/admin/login`

Do not create a second authentication mechanism.

---

## 2. Service Management Catalogue

Create the main Service Management screen showing the existing services.

Provide:

* Page title
* Short management description
* Live service count
* Search
* Existing service-category filtering
* Service list/grid
* Service status where supported
* Edit action
* Publish/status action where supported

Use the existing service catalogue as the source of truth.

Do not introduce fake services, fake metrics, or invented operational information.

---

## 3. Service Search

Implement deterministic client-side search across the existing Service data model.

Search relevant existing fields such as:

* Service name
* Tagline
* Overview
* Category
* Problems addressed
* Capabilities
* Process
* Outcomes
* Use cases
* FAQs
* Relevant searchable metadata

Maintain the existing search patterns where possible.

Provide:

* Result count
* No-results state
* Clear search action

Do not introduce AI or semantic search.

---

## 4. Service Selection

Selecting a service should open its Admin management view.

The management view should expose the existing service information in an editing-oriented structure.

Where available, show:

### Core Information

* Service name
* Slug
* Category
* Tagline
* Overview

### Service Content

* Problems addressed
* Capabilities
* Process
* Outcomes
* Use cases
* FAQs

### Relationships

* Related products
* Related services

### SEO

* SEO title
* Meta description
* Canonical information where supported

Do not create a separate Admin-only representation of the service.

---

## 5. Service Editing

Allow authenticated Admin users to modify fields already supported by the existing Service data model.

Editing should cover the established content structure rather than introducing new service concepts.

Support editing of:

* Name
* Slug
* Category
* Tagline
* Overview
* Problems addressed
* Capabilities
* Process
* Outcomes
* Use cases
* FAQs
* Related products
* Related services
* SEO metadata

Preserve the existing seven-category taxonomy.

Do not create new categories simply to populate the Admin interface.

---

## 6. Relationship Integrity

Maintain valid relationships between services and the rest of the Ricoz ecosystem.

When editing relationships:

* Related products must resolve to existing products.
* Related services must resolve to existing services.
* Self-references must be prevented.
* Duplicate relationships must be prevented.
* Invalid references must not be introduced.

Preserve the relationships already used by the public Service ecosystem.

---

## 7. Save Workflow

Implement:

**Service → Edit → Modify → Save → Saved State**

The interface should provide:

* Save action
* Saving state
* Duplicate-submit prevention
* Success feedback
* Error feedback
* Unsaved-change awareness where practical

If the current application does not have a real backend, do not present frontend state as production persistence.

Keep the data layer replaceable so a future API/database can be connected without rebuilding the Service Management UI.

---

## 8. Publish Workflow

Establish the same basic publishing concept used for Product Management.

Support a simple lifecycle such as:

**Draft → Published**

Publishing should operate on the existing service record and canonical service route.

Do not invent:

* publication dates
* editor names
* approval records
* deployment IDs
* revision history

unless those capabilities already exist.

Do not create duplicate service records when publishing.

---

## 9. Public Service Relationship

The Admin Service record must remain connected to the canonical public Service ecosystem.

Changes should conceptually apply to the same service record used by:

* `/services`
* `/services/:serviceSlug`
* Service category discovery
* Service search
* Related products
* Related services
* Contact context
* Consultation context
* SEO metadata

Do not create an independent Admin service catalogue.

---

## 10. Validation

Validate service information before saving.

At minimum:

* Service name cannot be empty.
* Slug must be valid.
* Category must belong to the existing taxonomy.
* Required fields must satisfy the existing data model.
* Product relationships must resolve.
* Service relationships must resolve.
* Duplicate/self relationships must be prevented.
* SEO fields should respect existing metadata constraints.

Validation errors should be displayed clearly without losing entered information.

---

## 11. Unsaved Changes & Recovery

Where practical, detect unsaved changes before navigation.

If a save fails:

* preserve all edited values
* keep the user on the editing screen
* display an accessible error
* allow retry
* do not silently discard changes

A failed save must never appear as a successful save.

---

## 12. Responsive & Accessibility

The Service Management experience must work across:

* desktop
* tablet
* mobile

Maintain the established Ricoz visual language:

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
* accessible validation feedback
* accessible save/publish status messaging
* logical heading hierarchy

---

## 13. Scope Boundary

Do **not** build:

* New service taxonomy
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
* AI service classification
* Analytics
* Customer-facing Service redesign
* Service purchasing

Those belong to later Admin and Platform flows.

The priority is a clean Service Management foundation that mirrors the Product Management architecture while preserving the existing Ricoz service ecosystem.

## Validation

Verify:

* Admin authentication protects Service Management.
* `/admin/services` loads the existing 60-service catalogue.
* Service search works deterministically.
* Existing seven-category taxonomy is preserved.
* Service selection opens the correct management record.
* Existing service fields can be edited where supported.
* Product/service relationships remain valid.
* Validation prevents invalid saves.
* Save loading/success/error states work correctly.
* Publishing has a clear state model.
* Public Service routes remain intact.
* Existing service slugs and relationships are not unnecessarily changed.
* No duplicate Service data model is created.
* No fake backend persistence is presented as real.
* Responsive behavior works across desktop, tablet, and mobile.
* Build completes without TypeScript errors.
