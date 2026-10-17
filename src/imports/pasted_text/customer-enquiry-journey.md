# FLOW 49 — CUSTOMER ENQUIRY JOURNEY

## Objective

Establish the complete customer-side lifecycle immediately after an enquiry is submitted:

**Enquiry → Confirmation → Internal handling → Customer communication**

The goal is to make the existing Contact journey feel like the beginning of a real customer relationship rather than an isolated form submission.

Do not build the complete customer portal, CRM, messaging system, or admin dashboard in this flow.

---

## 1. Preserve Existing Contact Architecture

Build on the existing Contact implementation from Flows 35–39.

Preserve:

* `/contact`
* Product enquiry context
* Service enquiry context
* Solution enquiry context
* Existing validation
* Existing submission/loading state
* Existing error/retry handling
* Existing confirmation state
* Existing contextual back-links
* Existing responsive behavior
* Existing accessibility behavior

Do not replace the existing Contact architecture.

---

## 2. Establish an Enquiry Record Concept

After successful submission, establish a structured enquiry representation containing the information already collected by the Contact flow.

Where applicable, the enquiry should retain:

* Name
* Email
* Phone
* Company
* Enquiry type
* Message
* Product context
* Service context
* Solution context
* Submission timestamp/state

Use the existing frontend data structures where possible.

Do not introduce a backend database or external CRM.

The purpose is to establish the data contract that later Lead Management and Customer Management flows can consume.

---

## 3. Improve Confirmation as a Journey Start

The existing confirmation screen should communicate that the enquiry has entered the Ricoz process.

Keep it concise and credible.

The confirmation should communicate:

* enquiry received
* what the enquiry relates to, when contextual information exists
* that the request will be reviewed
* that Ricoz will follow up using the submitted contact details

Do not invent:

* ticket numbers
* lead IDs
* response-time guarantees
* assigned employee names
* fake status updates

---

## 4. Establish Internal Handling State

Introduce a lightweight enquiry lifecycle state model that can later be consumed by the Admin / Lead Management flows.

Use simple deterministic states such as:

**New → In Review → Contacted → Follow-up → Closed**

Only introduce states that are useful to the later operational architecture.

The current public experience does not need to expose the complete internal lifecycle.

The state should be represented in the enquiry data model rather than simulated as a visible fake backend process.

---

## 5. Establish Customer Communication Context

The enquiry should retain enough context for future customer communication.

The communication context should allow future systems to understand:

* who submitted the enquiry
* what they are enquiring about
* what message they submitted
* what product/service/solution context exists
* the current enquiry state

Do not build:

* email infrastructure
* chat
* messaging inbox
* notifications backend
* SMS/WhatsApp integration
* communication automation

Those belong to later platform flows.

---

## 6. Context Preservation

Ensure contextual enquiries remain connected throughout the journey.

Examples:

**Product → Contact → Enquiry → Confirmation**

**Service → Contact → Enquiry → Confirmation**

**Solution → Contact → Enquiry → Confirmation**

The original context must not disappear after submission.

General enquiries should continue to work without product/service/solution context.

---

## 7. Failure and Recovery

Preserve the existing Flow 39 behavior.

If submission fails:

* preserve entered values
* preserve contextual product/service/solution information
* display the existing error state
* allow retry
* prevent duplicate submissions
* return to the normal confirmation state after successful retry

Do not create a second error-handling architecture.

---

## 8. Future Admin Compatibility

Structure the enquiry representation so that Flow 56 — Lead Management can later consume it.

The architecture should conceptually support:

**Enquiry → Lead → Lead Details → Status → Assignment → Follow-up**

Do not implement the Admin Lead Management interface in this flow.

Do not create `/admin` routes yet unless they already exist.

---

## 9. Responsive, Accessibility & UX

Ensure the complete journey works across:

* desktop
* tablet
* mobile

Maintain Ricoz's existing design system:

* Manrope typography
* Ricoz Red `#C41230`
* warm off-white background
* near-black text
* thin borders
* restrained cards
* 4px radius
* 8px spacing system
* no gradients
* no glassmorphism
* no excessive shadows

Maintain:

* keyboard accessibility
* visible focus states
* semantic form controls
* accessible alerts
* logical heading hierarchy
* readable confirmation messaging

---

## 10. Scope Boundary

Do **not** build:

* customer portal
* CRM
* admin dashboard
* lead management UI
* customer login
* customer accounts
* messaging inbox
* email automation
* SMS/WhatsApp integration
* real backend persistence
* payment
* AI lead scoring
* analytics dashboard

Those belong to later flows.

The final result should make the existing enquiry experience feel like the **first step of a structured Ricoz customer lifecycle**, while keeping the implementation architecture ready for Flows 51, 56, 58, 59, 62 and 63.

## Validation

Verify:

* General enquiry still works.
* Product enquiry retains product context.
* Service enquiry retains service context.
* Solution enquiry retains solution context.
* Confirmation accurately reflects the enquiry context.
* Submission states still prevent duplicates.
* Errors still preserve data and context.
* Enquiry state/data structure is reusable by future operational flows.
* No existing Contact functionality regresses.
* Build completes without TypeScript errors.
