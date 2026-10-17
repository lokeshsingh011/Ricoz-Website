# RICOZ — CUSTOMER PORTAL ACCESS & COMPLETE CUSTOMER JOURNEY

## Phase 6 — Customer Portal Foundation

The current `/portal` implementation is too limited.

It currently communicates that the portal is being set up, but there is no meaningful customer access flow.

Turn the Customer Portal into a **real, usable customer-facing application shell** with:

* Login
* Authentication state
* Protected portal routes
* Customer dashboard
* Navigation
* Profile/account access
* Enquiries
* Consultations
* Services/products visibility
* Support/contact access
* Logout
* Empty states
* Error states
* Responsive mobile experience

Do not build a fake backend.

Do not invent real customer records.

Do not fabricate credentials.

First inspect the existing application and reuse any existing authentication, customer, enquiry, consultation and product/service data architecture.

---

# 1. INSPECT THE EXISTING PORTAL FIRST

Before implementation, inspect:

* `/portal`
* existing authentication components
* `AuthContext`
* protected route implementation
* customer data types
* enquiry data
* consultation data
* product data
* service data
* existing contact/consultation flows
* localStorage/demo persistence if already present
* existing route structure

Determine what already exists.

Do not create duplicate:

* AuthContext
* authentication provider
* customer model
* protected route
* portal shell
* data stores

Extend the existing architecture where possible.

---

# 2. PORTAL ARCHITECTURE

The resulting architecture should be:

```text
RICOZ
│
├── Public Platform
│
├── Franchise Network
│
└── Customer Portal
    │
    ├── Login
    │
    └── Authenticated Portal
        ├── Dashboard
        ├── My Enquiries
        ├── Consultations
        ├── Products
        ├── Services
        ├── Profile
        └── Support
```

The Customer Portal is a separate authenticated application experience inside Ricoz.

---

# 3. ROUTES

Create or complete the following routes using the existing router architecture:

```text
/portal
/portal/login
/portal/dashboard
/portal/enquiries
/portal/consultations
/portal/products
/portal/services
/portal/profile
/portal/support
```

If `/portal` already exists, preserve it.

`/portal` should intelligently resolve:

### Unauthenticated

```text
/portal
↓
/portal/login
```

### Authenticated

```text
/portal
↓
/portal/dashboard
```

Do not create unnecessary redirects.

---

# 4. PROTECTED ROUTES

Create/reuse:

`PortalProtectedRoute`

All authenticated routes must require an authenticated customer session.

Protected:

```text
/portal/dashboard
/portal/enquiries
/portal/consultations
/portal/products
/portal/services
/portal/profile
/portal/support
```

Unauthenticated users attempting to access these routes should be redirected to:

`/portal/login`

Authenticated users attempting to access `/portal/login` should be redirected to:

`/portal/dashboard`

---

# 5. LOGIN PAGE

Replace the current placeholder experience with a proper login interface.

Page identity:

> RICOZ CUSTOMER PORTAL

Headline:

> Welcome back.

Supporting copy:

> Sign in to access your Ricoz customer workspace.

Form:

```text
Email
Password

[ Sign in ]

Forgot password?
```

Only include Forgot Password if the application can actually support the flow.

Do not show fake recovery functionality.

---

# 6. AUTHENTICATION IMPLEMENTATION

Inspect the existing authentication architecture.

### If a real authentication provider already exists

Connect the portal login to it.

Do not replace it.

### If no real authentication backend exists

Create a clean authentication abstraction that can later connect to a real backend.

For prototype/development mode:

* use clearly defined demo/local session handling
* keep authentication logic isolated
* persist only non-sensitive prototype state
* clearly distinguish prototype authentication from production authentication

Do not present a fabricated account as a real Ricoz customer.

Do not hardcode arbitrary production credentials.

---

# 7. AUTHENTICATION STATE

The application must distinguish:

```text
UNAUTHENTICATED
AUTHENTICATING
AUTHENTICATED
AUTH_ERROR
```

The UI should respond appropriately.

During authentication:

> Signing you in…

On failure:

> We couldn't sign you in. Check your details and try again.

Do not expose technical errors to customers.

---

# 8. PORTAL SHELL

Authenticated pages should use a dedicated:

`PortalShell`

Structure:

```text
┌─────────────────────────────────────────────┐
│ RICOZ                         Customer Menu │
├───────────────┬─────────────────────────────┤
│ Dashboard     │                             │
│ Enquiries     │        Page Content         │
│ Consultations│                             │
│ Products      │                             │
│ Services      │                             │
│ Profile       │                             │
│ Support       │                             │
│               │                             │
│ Sign out      │                             │
└───────────────┴─────────────────────────────┘
```

Desktop:

* left navigation
* main content area
* compact top account area

Mobile:

* compact header
* menu/drawer
* full-width content

Do not reuse the public global navbar inside the authenticated portal.

---

# 9. PORTAL HEADER

Portal header should clearly communicate:

> RICOZ CUSTOMER PORTAL

Include:

* account/profile access
* notification area only if actual notification data exists
* menu control on mobile

Do not add decorative navigation.

---

# 10. DASHBOARD

Create the primary customer dashboard.

Headline:

> Welcome back.

Use the authenticated customer's actual available data.

Dashboard modules:

```text
Overview

Open Enquiries
Upcoming Consultations
Active Services
Recommended Products
```

Only show modules for which data actually exists.

If there is no data:

Use intentional empty states.

Example:

> No enquiries yet.

> Your enquiries will appear here once you contact Ricoz.

CTA:

> Start a conversation

→ `/contact`

---

# 11. DASHBOARD QUICK ACTIONS

Provide useful actions:

```text
Start an Enquiry
Book a Consultation
Explore Products
Explore Services
Contact Ricoz
```

Use actual existing routes.

Do not create actions that do nothing.

Every button/link must have a meaningful destination.

---

# 12. MY ENQUIRIES

Route:

`/portal/enquiries`

Display the customer's enquiries using the existing enquiry data model where available.

Possible states:

### Active enquiry

```text
Enquiry
Status
Created
Last updated
```

### Empty

> You don't have any enquiries yet.

CTA:

> Start an Enquiry

→ `/contact`

Do not invent enquiry records.

If demo data is used, clearly label the environment as prototype/demo.

---

# 13. ENQUIRY DETAIL

If the existing architecture supports individual enquiry records, provide a detail route.

Recommended:

`/portal/enquiries/:id`

Show:

* enquiry title/subject
* submitted date
* status
* description
* relevant service/product
* timeline where actual data exists

Do not create fake communication history.

---

# 14. CONSULTATIONS

Route:

`/portal/consultations`

Show existing consultation records associated with the authenticated customer.

Possible information:

* consultation title
* date
* status
* related requirement
* next action

Empty state:

> No consultations scheduled.

CTA:

> Schedule a Consultation

→ `/consultation`

---

# 15. CONSULTATION DETAIL

If supported by the existing data architecture:

`/portal/consultations/:id`

Display actual consultation information.

Do not create fake:

* meeting links
* calendar events
* consultant names
* appointment times
* confirmation numbers

unless they exist in the application's data.

---

# 16. PRODUCTS

Route:

`/portal/products`

This is not a second product catalogue.

Use it as a customer-oriented discovery area.

Allow customers to:

* browse relevant Ricoz products
* open product details
* initiate an enquiry

Use canonical product data.

Primary action:

> Enquire about this product

Preserve customer context where appropriate.

---

# 17. SERVICES

Route:

`/portal/services`

Display the existing canonical service catalogue in a customer-oriented way.

Actions:

> Learn More

> Discuss this Service

Use canonical service routes/data.

Do not duplicate service definitions.

---

# 18. PROFILE

Route:

`/portal/profile`

Provide an account overview.

Possible fields:

```text
Name
Email
Phone
Company
```

Only display fields that actually exist in the customer model.

If editing is not backed by persistence, do not create a fake save system.

Instead, use:

> Contact Ricoz to update account information.

if appropriate.

---

# 19. SUPPORT

Route:

`/portal/support`

Provide real navigation to available support/contact functionality.

Example:

> Need help?

> Tell us what you need and we'll help you find the right next step.

Actions:

```text
Contact Ricoz
Start an Enquiry
Schedule a Consultation
```

Use actual routes.

Do not invent live chat, ticketing or SLA functionality.

---

# 20. CUSTOMER ACCOUNT MENU

Create a compact account menu.

Example:

```text
Customer Name
email@example.com

Profile
Support

────────────

Sign out
```

Only display customer information from the authenticated session.

If identity information is unavailable, use:

> My Account

rather than fabricated information.

---

# 21. LOGOUT

Logout must actually clear the application's authentication state.

Flow:

```text
Authenticated
↓
Sign out
↓
Session cleared
↓
/portal/login
```

After logout, protected routes must no longer be accessible.

Browser back navigation must not expose authenticated UI as an active session.

---

# 22. SESSION PERSISTENCE

Use the existing authentication mechanism.

If the current prototype uses local session state, ensure a page refresh does not unnecessarily log the customer out.

However:

* never store plaintext passwords
* never store sensitive authentication data unnecessarily
* do not create insecure production authentication
* isolate prototype auth from future production auth

---

# 23. LOGIN ERROR STATES

Handle:

```text
Empty email
Empty password
Invalid email format
Authentication failure
Loading
Session expiration
Unauthorized access
```

Use concise, customer-friendly messages.

Do not expose:

* stack traces
* API errors
* internal IDs
* implementation details

---

# 24. EMPTY STATES

Every portal module needs a meaningful empty state.

Examples:

### Enquiries

> No enquiries yet.

### Consultations

> No consultations scheduled.

### Services

> Explore Ricoz services to find the right capability.

### Products

> Explore products built for modern business needs.

Empty states must include useful next actions.

---

# 25. PORTAL ↔ PUBLIC PLATFORM

Provide controlled exits from the portal:

```text
Explore Ricoz
View Products
View Services
View Solutions
Resources
Contact
```

Do not place the entire public navigation inside the portal.

The portal remains a focused authenticated workspace.

---

# 26. PORTAL ↔ FRANCHISE

The portal should not become franchise-specific.

A customer who enters from:

```text
/franchise/mumbai
```

still enters the same:

`/portal`

Do not create separate franchise portals.

---

# 27. CUSTOMER CONTEXT

If an enquiry or consultation was initiated from a franchise page, preserve that franchise context in the relevant public journey.

For example:

```text
Kalyan
↓
Contact
↓
Enquiry
↓
Portal / My Enquiries
```

If the existing data architecture supports storing franchise context, preserve it.

Do not add fake franchise data to unrelated customer records.

---

# 28. RESPONSIVE PORTAL

Desktop:

```text
Sidebar + Content
```

Tablet:

```text
Compact navigation + Content
```

Mobile:

```text
Header
↓
Menu
↓
Content
```

Ensure:

* no horizontal overflow
* readable tables/cards
* accessible buttons
* usable forms
* proper spacing
* sticky elements do not cover content

---

# 29. VISUAL SYSTEM

Use the Ricoz platform language:

```text
Ricoz Red      #C41230
Near Black     #111111 / #141414
Warm Off-white #F7F5F1
White          #FFFFFF
Rule           #D9D6D0
Muted          #77736D
```

Portal should feel slightly more functional than the marketing website.

Use:

* clean panels
* thin borders
* restrained shadows
* 4px radius
* clear hierarchy
* generous whitespace

Avoid:

* glassmorphism
* gradients
* excessive cards
* giant dashboard widgets
* excessive icons
* gamification

---

# 30. TYPOGRAPHY

Use the existing Ricoz typography system.

Prioritise:

* clear dashboard hierarchy
* compact navigation
* readable data
* strong page titles
* accessible form labels

Do not make the portal feel like a marketing landing page.

---

# 31. MOBILE ACCOUNT EXPERIENCE

On mobile:

```text
RICOZ CUSTOMER PORTAL

[Menu]                    [Account]
```

Menu:

```text
Dashboard
Enquiries
Consultations
Products
Services
Profile
Support

──────────

Sign out
```

Keep the interaction simple.

---

# 32. SECURITY BOUNDARY

This is critical.

Never:

* expose passwords
* hardcode production credentials
* expose authentication tokens in UI
* claim production-grade authentication without a backend
* expose another customer's data
* use fabricated customer identity as if real

If the application currently has only frontend/demo authentication, clearly isolate it so a real authentication provider can replace it later.

---

# 33. DATA ARCHITECTURE

Reuse existing data types.

If needed, establish a clear customer portal data layer such as:

```text
src/data/portal/
```

with typed structures for:

* customer
* enquiry
* consultation
* portal state

Do not duplicate existing admin/customer types if reusable types already exist.

---

# 34. COMPONENT ARCHITECTURE

Prefer modular components:

```text
src/components/portal/
├── PortalShell.tsx
├── PortalHeader.tsx
├── PortalSidebar.tsx
├── PortalMobileMenu.tsx
├── PortalAccountMenu.tsx
├── PortalProtectedRoute.tsx
├── PortalEmptyState.tsx
├── PortalStat.tsx
├── EnquiryList.tsx
├── ConsultationList.tsx
└── ...
```

Do not create one giant portal component.

Keep components focused.

---

# 35. LOGIN ARCHITECTURE

Prefer:

```text
AuthContext
     ↓
PortalProtectedRoute
     ↓
PortalShell
     ↓
Portal Pages
```

The authentication provider should remain independent from visual portal components.

This will allow a real backend/auth provider to be connected later without rebuilding the portal UI.

---

# 36. ACCESSIBILITY

Verify:

* keyboard navigation
* focus states
* semantic navigation
* form labels
* accessible errors
* accessible menus
* Escape handling
* mobile menu accessibility
* sufficient contrast
* reduced motion

---

# 37. ROUTE TESTING

Verify unauthenticated:

```text
/portal
→ /portal/login
```

Verify authenticated:

```text
/portal
→ /portal/dashboard
```

Verify protected:

```text
/portal/dashboard
/portal/enquiries
/portal/consultations
/portal/products
/portal/services
/portal/profile
/portal/support
```

Verify logout:

```text
Sign out
→ /portal/login
```

---

# 38. GLOBAL NAVIGATION TEST

Verify:

```text
Global Header
→ Customer Portal
→ /portal
```

Verify:

```text
FranchiseHeader
→ Explore Ricoz
→ Customer Portal
→ /portal
```

Verify:

```text
FranchiseFooter
→ Customer Portal
→ /portal
```

All three must reach the same portal.

---

# 39. FRANCHISE REGRESSION

Verify:

```text
/franchise
/franchise/mumbai
/franchise/nagpur
/franchise/delhi
/franchise/kalyan
/franchise/kolkata
```

still use:

```text
FranchiseHeader
+
Franchise content
+
FranchiseFooter
```

No global Header/Footer should appear on these routes.

---

# 40. PUBLIC PLATFORM REGRESSION

Verify normal pages continue using:

```text
Global Header
+
Page
+
Global Footer
```

including:

```text
/
 /products
 /services
 /solutions
 /resources
 /contact
 /consultation
 /about
 /leadership
 /careers
```

---

# 41. FINAL BUILD VALIDATION

Run:

* TypeScript
* production build
* route validation
* responsive inspection
* accessibility inspection
* console-error inspection

Fix all:

* broken imports
* route conflicts
* authentication redirect loops
* stale session issues
* broken navigation
* layout overflow
* runtime errors

---

# FINAL OUTCOME

The Customer Portal should no longer feel like:

> "Portal coming soon."

It should feel like an actual Ricoz application:

```text
RICOZ CUSTOMER PORTAL
        │
        ├── Login
        │
        └── Customer Workspace
             │
             ├── Dashboard
             ├── My Enquiries
             ├── Consultations
             ├── Products
             ├── Services
             ├── Profile
             └── Support
```

The key requirement is:

**Build the complete customer access and portal flow without pretending that a real backend authentication system exists if one does not yet exist.**

Keep the architecture ready for production authentication later.
