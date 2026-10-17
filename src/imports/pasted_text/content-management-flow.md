# FLOW 55 — CONTENT MANAGEMENT

## Objective

Establish the internal Resource Content Management workflow:

**Resources → Create/Edit → Review → Publish**

The goal is to give authenticated Admin users a controlled way to manage Ricoz resource content while preserving the existing public Resources architecture, resource taxonomy, relationships, and SEO structure.

Do not build a complete CMS, editorial collaboration platform, or publishing infrastructure in this flow.

---

## 1. Admin Resource Route

Create the authenticated Content Management area within the existing Admin architecture.

Use routes such as:

* `/admin/resources`
* `/admin/resources/new`
* `/admin/resources/:resourceSlug`

All routes must inherit the authentication protection established in Flow 52.

Unauthenticated users must be redirected to:

`/admin/login`

Do not create another authentication mechanism.

---

## 2. Resource Management Catalogue

Create the main Content Management screen showing the existing Resources.

Provide:

* Page title
* Short management description
* Live resource count
* Search
* Existing resource-category/type filtering where supported
* Resource list/grid
* Resource status where available
* Create Resource action
* Edit action
* Review action
* Publish/status action

Use the existing Resource catalogue as the source of truth.

Do not create fake resources simply to populate the interface.

---

## 3. Resource Search

Implement deterministic client-side search across existing resource data.

Search relevant fields such as:

* Title
* Description/excerpt
* Resource type
* Category
* Tags/topics
* Author where available
* Existing searchable metadata

Maintain the existing public Resource search logic where practical.

Provide:

* Result count
* No-results state
* Clear search action

Do not introduce AI or semantic search.

---

## 4. Create Resource

Provide a controlled Create Resource workflow using the existing Resource data model.

The creation interface should only expose fields supported by the current architecture.

Where applicable, support:

### Core Content

* Title
* Slug
* Description/excerpt
* Resource type
* Category
* Tags/topics
* Author where supported
* Main content

### Relationships

* Related products
* Related services
* Related solutions where an established relationship exists

### SEO

* SEO title
* Meta description
* Canonical information where supported

Do not invent new content types or taxonomy merely for the Admin interface.

---

## 5. Edit Resource

Selecting an existing resource should open its management view.

Allow authenticated Admin users to modify supported existing fields without creating a separate Admin-only content representation.

The editing interface should make it clear whether the user is:

**Creating → Editing → Reviewing → Publishing**

Preserve existing resource relationships and metadata.

---

## 6. Review State

Introduce a clear review stage before publishing.

The intended workflow is:

**Draft → Review → Published**

The Review state should allow the Admin user to inspect:

* Content
* Metadata
* Category/type
* Relationships
* SEO information
* Public-facing presentation where practical

The review experience should make it possible to identify incomplete or invalid content before publishing.

Do not build multi-user editorial approvals yet.

---

## 7. Publish Workflow

Publishing should provide a deliberate transition:

**Review → Publish → Published**

The interface should provide:

* Publish action
* Publishing/loading state
* Success feedback
* Error feedback
* Clear current status

Do not invent:

* publication timestamps
* editor names
* approval records
* revision numbers
* deployment IDs

unless those capabilities already exist in the application.

If the current implementation is frontend/local-state based, do not present it as a production publishing backend.

---

## 8. Public Resource Relationship

Admin-managed resources must remain connected to the canonical public Resource ecosystem.

Changes should conceptually apply to the same resource used by:

* `/resources`
* Resource categories
* Resource search
* `/resources/:resourceSlug`
* Case Study discovery where applicable
* Related products
* Related services
* Contact context
* Consultation context
* SEO metadata

Do not create a second Resource catalogue for Admin.

---

## 9. Case Study Compatibility

Respect the existing distinction between general Resources and Case Studies.

Do not accidentally convert ordinary resources into case studies or create a new Case Study architecture.

If the existing Resource model already distinguishes Case Studies through a type/category, preserve that structure.

Future Case Study management can build on this architecture without duplicating the entire content system.

---

## 10. Content Validation

Validate content before allowing Review or Publish.

At minimum:

* Title cannot be empty.
* Slug must be valid.
* Resource type must use the established taxonomy.
* Category must be valid.
* Required content must exist where required by the current data model.
* Relationships must resolve to valid existing records.
* Duplicate/self relationships must be prevented where applicable.
* SEO fields should follow existing metadata constraints.

Show validation errors clearly and preserve entered content.

---

## 11. Unsaved Changes & Recovery

Where practical, detect unsaved changes before leaving an editing screen.

If saving or publishing fails:

* preserve entered content
* remain on the current screen
* display an accessible error
* allow retry
* do not falsely mark the resource as published

The user must never lose significant editorial work because of a failed action.

---

## 12. Responsive & Accessibility

The Content Management interface must work across:

* desktop
* tablet
* mobile

Maintain the established Ricoz design system:

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
* accessible save/review/publish status messaging
* logical heading hierarchy

---

## 13. Scope Boundary

Do **not** build:

* Full CMS
* Backend content API
* Database
* Media asset management platform
* Rich collaborative editor
* Multi-user editorial workflow
* Approval hierarchy
* Version history
* Revision comparison
* Scheduled publishing
* Bulk publishing
* Import/export
* AI content generation
* AI content optimisation
* Analytics
* Customer-facing Resource redesign

Those capabilities can be introduced later if required.

The priority is a clean **Content Management foundation** that connects the existing Resource catalogue to a controlled editorial lifecycle.

## Validation

Verify:

* Admin authentication protects Content Management.
* `/admin/resources` loads the existing Resource catalogue.
* Resource search works deterministically.
* Existing resource categories/types are preserved.
* Existing Resource data structure remains the source of truth.
* New resources can be structured using supported fields.
* Existing resources can be edited.
* Review provides a meaningful pre-publish checkpoint.
* Publish has a clear state transition.
* Validation prevents incomplete or invalid content from being published.
* Resource relationships remain valid.
* Public Resource routes remain intact.
* Existing resource slugs and relationships are not unnecessarily changed.
* Case Study architecture remains compatible.
* No fake backend publishing is presented as real.
* Responsive behavior works across desktop, tablet, and mobile.
* Build completes without TypeScript errors.
