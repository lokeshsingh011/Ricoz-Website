# FLOW 57 — CONSULTATION MANAGEMENT

## Objective

Establish the internal Consultation Management workflow:

**Appointments → Appointment → Details → Update → Follow-up**

The goal is to give authenticated Admin users a structured view of consultation requests/bookings and allow operational updates without prematurely building a complete calendar or meeting platform.

Build on the consultation records and lifecycle architecture established in Flow 50.

---

## 1. Admin Consultation Route

Create the authenticated Consultation Management area within the existing Admin architecture.

Use routes such as:

* `/admin/consultations`
* `/admin/consultations/:consultationId`

All routes must inherit the authentication protection established in Flow 52.

Unauthenticated users must be redirected to:

`/admin/login`

Do not create another authentication mechanism.

---

## 2. Appointment Catalogue

Create the main Consultation Management screen showing available consultation records.

Provide:

* Page title
* Short management description
* Consultation count based on available data
* Search
* Status filtering
* Consultation list/table
* Date/time visibility
* Context indicator
* Follow-up indicator where supported

Use existing consultation data as the source of truth.

Do not create fake appointments simply to populate the interface.

If the current application only contains local/demo records, keep the distinction clear rather than presenting fabricated bookings as real appointments.

---

## 3. Consultation Search

Implement deterministic client-side search across relevant consultation information.

Search may consider:

* Customer name
* Email
* Phone
* Company
* Consultation purpose
* Product context
* Service context
* Solution context
* Date
* Status

Provide:

* Result count
* No-results state
* Clear search action

Do not introduce AI-powered search.

---

## 4. Appointment Detail

Selecting an appointment should open a structured Consultation Detail view.

Display relevant information from the original booking:

### Customer Information

* Name
* Email
* Phone
* Company

### Consultation Information

* Purpose
* Preferred/scheduled date
* Preferred/scheduled time
* Current status

### Context

Where applicable:

* Product
* Service
* Solution

### Relationship

Where available, show the relationship to the originating enquiry/customer interaction.

Do not expose unnecessary internal information.

---

## 5. Consultation Status

Establish the lifecycle from Flow 50:

**Booked → Confirmed → Reminder → Meeting → Follow-up → Completed**

Allow authenticated Admin users to update the consultation status where the current architecture supports it.

Status transitions should:

* update the consultation state
* provide immediate feedback
* prevent invalid status values
* preserve customer and contextual information

Do not simulate external calendar events or meeting completion.

---

## 6. Date & Time Updates

Allow operational users to update the consultation date/time only where the existing frontend architecture can safely represent that change.

The interface should clearly distinguish between:

* originally requested date/time
* currently scheduled date/time

Do not claim real-time calendar availability.

Do not automatically book an external calendar event.

Do not invent available slots.

If actual scheduling infrastructure does not exist, keep the update as application state only.

---

## 7. Follow-up Management

The Consultation Detail view should support the follow-up stage established in Flow 50.

Represent whether:

* Follow-up is required
* Follow-up is pending
* Follow-up is completed

Preserve the consultation context throughout the follow-up process.

The architecture should support:

**Consultation → Follow-up → Customer Relationship**

Do not implement automated communications.

Do not claim that a customer was contacted unless that interaction is actually recorded.

---

## 8. Consultation Activity Foundation

Prepare the consultation record for future activity history.

The structure should be capable of representing events such as:

* consultation booked
* status changed
* date/time updated
* follow-up required
* follow-up completed

Only display activity that is actually represented by application state.

Do not fabricate historical events.

Do not build a complete audit-log system yet.

---

## 9. Context Preservation

Consultation context must remain intact when operational changes occur.

Examples:

**Product → Consultation → Appointment**

**Service → Consultation → Appointment**

**Solution → Consultation → Appointment**

Changing the status, date, time, or follow-up state must not remove the original product/service/solution relationship.

---

## 10. Customer Relationship Compatibility

The Consultation Management model must remain compatible with Flow 51 and Flow 58.

Conceptually:

**Customer → Consultation → Activity → Follow-up**

A consultation should be associated with the relevant customer relationship when sufficient information exists.

Do not create duplicate customer records simply because a consultation exists.

Do not automatically convert every consultation into a customer.

---

## 11. Lead Compatibility

Where a consultation originates from an enquiry or lead, preserve that relationship.

The architecture should support:

**Lead → Consultation → Follow-up**

Do not create a separate lead system.

Use existing lead/enquiry identifiers or context where available.

---

## 12. Responsive & Accessibility

The Consultation Management experience must work across:

* desktop
* tablet
* mobile

For appointment tables or lists, prioritize:

* date/time readability
* status clarity
* customer identification
* contextual relationships
* clear actions

Maintain the Ricoz design system:

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
* semantic controls
* accessible status controls
* accessible error/success feedback
* logical heading hierarchy

---

## 13. Scope Boundary

Do **not** build:

* Full calendar platform
* Real-time availability engine
* External calendar integration
* Video meeting integration
* Automated reminders
* Email/SMS/WhatsApp delivery
* Customer portal
* CRM
* AI scheduling
* AI meeting analysis
* Payment
* Employee management
* Advanced permissions
* Full audit logging
* Real backend appointment database

Those belong to later Integration, Automation, Customer, and Platform flows.

The priority is a clean operational Consultation Management foundation that consumes the existing consultation lifecycle without pretending that external scheduling infrastructure already exists.

## Validation

Verify:

* Admin authentication protects Consultation Management.
* `/admin/consultations` loads correctly.
* Existing consultation records are used as the source of truth.
* Consultation search works deterministically.
* Appointment detail preserves customer and contextual information.
* Product/service/solution relationships remain intact.
* Consultation status follows the defined lifecycle.
* Date/time updates do not imply external calendar synchronization.
* Follow-up state can be represented without fabricating communication.
* Existing lead/customer relationships remain intact where available.
* No duplicate customer or lead architecture is created.
* No fake appointment history is generated.
* Public consultation booking remains unaffected.
* Responsive behavior works across desktop, tablet, and mobile.
* Build completes without TypeScript errors.
