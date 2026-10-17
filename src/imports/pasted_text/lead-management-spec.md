# FLOW 56 — LEAD MANAGEMENT

## Objective

Establish the internal Lead Management workflow:

**Leads → Lead → Details → Status → Assignment → Follow-up**

The goal is to give authenticated Admin users a structured operational view of enquiries and their progression toward follow-up.

This flow should consume the enquiry and relationship architecture established in Flows 49–51.

Do not build a complete CRM, automated sales system, or AI lead-scoring platform yet.

---

## 1. Admin Lead Route

Create the authenticated Lead Management area within the existing Admin architecture.

Use routes such as:

* `/admin/leads`
* `/admin/leads/:leadId`

All routes must inherit the authentication protection established in Flow 52.

Unauthenticated users must be redirected to:

`/admin/login`

Do not create another authentication mechanism.

---

## 2. Lead Catalogue

Create the main Lead Management screen showing available enquiry/lead records.

Provide:

* Page title
* Short management description
* Lead count based on available data
* Search
* Status filtering
* Lead list/table
* Lead selection
* Current status
* Follow-up indicator where supported

Use the enquiry records established through the existing Contact journey as the initial source.

Do not generate fake leads simply to make the dashboard look populated.

If the current application only has local/demo data, clearly structure it as such rather than presenting fabricated operational activity as real.

---

## 3. Lead Search

Implement deterministic client-side search across relevant existing lead information.

Search fields may include:

* Name
* Email
* Phone
* Company
* Enquiry type
* Product context
* Service context
* Solution context
* Message
* Lead status

Provide:

* Result count
* No-results state
* Clear search action

Do not introduce AI-powered search.

---

## 4. Lead Detail

Selecting a lead should open a structured Lead Detail view.

Display relevant information from the original enquiry:

### Contact Information

* Name
* Email
* Phone
* Company

### Enquiry Context

* Enquiry type
* Original message
* Product, if applicable
* Service, if applicable
* Solution, if applicable
* Original interaction information

### Relationship Context

Where available, show the relationship between the lead and the originating customer interaction.

Do not expose unnecessary internal or sensitive information.

---

## 5. Lead Status

Implement the lead lifecycle established by Flow 49.

Use a simple deterministic status model:

**New → In Review → Contacted → Follow-up → Closed**

Allow an authenticated Admin user to update the current status.

Status changes should:

* update the current lead state
* provide immediate visual feedback
* prevent invalid status values
* preserve the lead's original enquiry context

Do not introduce complex sales pipelines at this stage.

---

## 6. Lead Assignment

Establish the architecture for assigning a lead to an internal owner.

Where the current application does not have a real user/employee directory, use a neutral assignment representation rather than inventing real employee identities.

The structure should conceptually support:

**Lead → Assigned Owner**

An assigned owner may later be represented by:

* user ID
* internal team
* responsible role

Do not implement full Admin user management or permissions here.

---

## 7. Follow-up

Allow the Lead Detail experience to represent the need for follow-up.

Where supported, provide a simple follow-up state such as:

* Follow-up required
* Follow-up pending
* Follow-up completed

The lead should retain its original context when moving into follow-up.

The architecture should support the future relationship:

**Lead → Follow-up → Customer Relationship**

Do not implement automated email, SMS, WhatsApp, or other outbound communication.

Do not claim that a follow-up occurred unless the application actually records one.

---

## 8. Lead Activity Foundation

Prepare the lead record for future activity history.

The architecture should be capable of associating future events such as:

* enquiry received
* status changed
* assignment changed
* follow-up recorded
* consultation associated

Do not build a complete audit-log system yet.

Do not fabricate historical activities.

Only display activity that is actually represented by application state.

---

## 9. Context Preservation

The original customer context must remain intact throughout lead management.

Examples:

**Product → Contact → Enquiry → Lead**

**Service → Contact → Enquiry → Lead**

**Solution → Contact → Enquiry → Lead**

**Consultation → Customer Relationship → Lead/Customer context where applicable**

Do not detach or overwrite the originating product, service, solution, or consultation relationship when changing lead status or assignment.

---

## 10. Future Intelligence Compatibility

Structure the lead representation so Flow 62 can later support:

**New lead → Classification → Context extraction → Priority → Assignment → Follow-up**

For now, keep classification and priority deterministic.

Do not implement:

* AI lead scoring
* automatic classification
* predictive conversion probability
* sentiment analysis
* hidden customer profiling

Flow 62 will introduce intelligence separately.

---

## 11. Future Customer Management Compatibility

The Lead architecture should be capable of transitioning toward Flow 58:

**Lead → Customer → Profile → Activity → Communication**

Do not automatically convert every lead into a customer.

A customer relationship should only be established when supported by the application lifecycle.

---

## 12. Responsive & Accessibility

The Lead Management interface must work across:

* desktop
* tablet
* mobile

For dense lead data, prioritize readability and hierarchy over decorative UI.

Maintain:

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
* accessible validation/error feedback
* logical heading hierarchy

---

## 13. Scope Boundary

Do **not** build:

* Full CRM
* Sales pipeline management
* Customer portal
* Customer login
* Automated outreach
* Email/SMS/WhatsApp integration
* AI lead scoring
* Predictive analytics
* Marketing automation
* Advanced permissions
* Employee management
* Full audit logging
* Real backend database
* Bulk lead import/export

Those belong to later operational and platform flows.

The priority is a clean Lead Management foundation that consumes the existing enquiry architecture and prepares Ricoz for future customer and intelligence workflows.

## Validation

Verify:

* Admin authentication protects Lead Management.
* `/admin/leads` loads correctly.
* Existing enquiry data can form the basis of lead records.
* Lead search works deterministically.
* Lead detail preserves original enquiry context.
* Product/service/solution relationships remain intact.
* Lead status can be changed through the defined lifecycle.
* Assignment has a reusable structure without inventing employees.
* Follow-up state can be represented without claiming communication occurred.
* No fake historical activity is generated.
* Lead data remains compatible with Customer Management.
* Lead data remains compatible with Flow 62 Lead Intelligence.
* Existing Contact and Customer Relationship architecture is not duplicated.
* Responsive behavior works across desktop, tablet, and mobile.
* Build completes without TypeScript errors.
