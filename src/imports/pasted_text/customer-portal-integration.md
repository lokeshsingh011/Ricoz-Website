# RICOZ — CUSTOMER PORTAL INTEGRATION

## Phase 4 — Customer Portal Entry & Platform Authentication

Integrate the existing Customer Portal into the Ricoz platform navigation and user journey.

This is an integration pass, not a request to build a new authentication backend.

---

# 1. FIRST — INSPECT EXISTING AUTHENTICATION

Before changing anything, inspect the existing application for:

* login components
* authentication context
* protected routes
* customer portal routes
* session state
* logout handling
* existing portal pages
* existing auth utilities
* existing user/customer data models

Reuse the existing architecture wherever available.

Do not create duplicate authentication systems.

Do not create fake authentication.

---

# 2. DEFINE THE CUSTOMER PORTAL ENTRY

The Ricoz platform should have one clear customer-facing entry:

> Customer Portal

Use this consistently across the platform.

The entry should take the user to the existing customer authentication/portal route.

If the existing route is already defined, preserve it.

If the existing portal exists but has no dedicated route, establish the smallest appropriate route around the existing implementation.

Do not redesign the entire portal during this task.

---

# 3. GLOBAL HEADER

Add the Customer Portal entry to the existing global Header.

Recommended placement:

```text
RICOZ

Products
Services
Solutions
Resources
Company

Customer Portal
```

The portal action should be visually distinct from ordinary navigation while remaining consistent with the Ricoz design system.

Use a compact text/button treatment.

Do not introduce:

* oversized login buttons
* gradients
* pills
* unnecessary icons
* separate navigation bars

---

# 4. FRANCHISE HEADER

The existing `FranchiseHeader` must also provide access to the same Customer Portal.

Do not duplicate the authentication interface.

The franchise header can expose:

> Customer Portal

through its compact platform menu.

Example:

```text
EXPLORE RICOZ

Products
Services
Solutions
Resources
About

────────────────

Customer Portal →
```

Both global and franchise navigation must resolve to the **same portal entry**.

---

# 5. MOBILE

The Customer Portal must remain accessible on mobile.

Global mobile navigation:

```text
Products
Services
Solutions
Resources
Company
Customer Portal
```

Franchise mobile navigation:

```text
Franchise sections
Explore Ricoz
Customer Portal
```

Do not create two separate login experiences.

---

# 6. AUTHENTICATED STATE

If the existing authentication system supports authenticated customers, the navigation should respond appropriately.

Unauthenticated:

> Customer Portal

Authenticated:

> Portal

or the existing authenticated navigation label already established by the application.

If customer identity information is already available, use it appropriately.

Do not display fabricated names or account information.

---

# 7. PORTAL RETURN JOURNEY

Preserve normal browser navigation.

Example:

```text
Ricoz Homepage
      ↓
Customer Portal
      ↓
Login
      ↓
Customer Portal Dashboard
```

From franchise:

```text
Kalyan
      ↓
Customer Portal
      ↓
Login
      ↓
Customer Portal
```

The portal should remain platform-level.

Do not create:

```text
Kalyan Portal
Mumbai Portal
Delhi Portal
```

unless the existing backend architecture explicitly requires franchise-specific tenancy.

---

# 8. AUTHENTICATION BOUNDARIES

Keep authentication concerns separate from public franchise content.

Franchise pages should never require authentication.

The following remain publicly accessible:

```text
/franchise
/franchise/mumbai
/franchise/nagpur
/franchise/delhi
/franchise/kalyan
/franchise/kolkata
```

Only actual customer portal routes should use authentication protection.

---

# 9. LOGIN PAGE

If a login page already exists:

Reuse it.

Do not rebuild it unnecessarily.

If the current login page needs visual alignment, bring it into the Ricoz design language:

* light background
* near-black typography
* Ricoz Red `#C41230`
* thin borders
* 4px radius
* restrained shadows
* clean form hierarchy
* accessible inputs
* clear validation states

Keep the page focused.

---

# 10. LOGIN EXPERIENCE

The login interface should clearly communicate:

> Customer Portal

Supporting text can explain that customers can use their account to access their Ricoz services, requests or platform workspace, **only if those capabilities actually exist**.

Do not claim functionality that has not been implemented.

---

# 11. ERROR STATES

Implement clear states for:

* invalid credentials
* missing fields
* authentication failure
* expired session
* unauthorized access
* logout
* unavailable portal

Use the application's actual authentication behavior.

Do not simulate successful login.

---

# 12. LOGOUT

If logout already exists, preserve it.

Authenticated users should have a clear way to sign out.

Do not create duplicate logout logic.

Ensure logout returns the user to an appropriate public Ricoz page or existing login route.

---

# 13. FRANCHISE CONTEXT

Customer Portal navigation must **not accidentally attach franchise context** to authentication.

For example:

```text
/franchise/kalyan
      ↓
Customer Portal
```

should not become:

```text
/customer-login?franchise=kalyan
```

unless the existing authentication architecture explicitly supports this.

The portal is platform-level.

Franchise context belongs to:

* Contact
* Consultation
* franchise-specific enquiries

not ordinary customer authentication.

---

# 14. NAVIGATION ARCHITECTURE

The final platform navigation should conceptually be:

```text
GLOBAL RICOZ
│
├── Products
├── Services
├── Solutions
├── Resources
├── Company
├── Franchises
│
└── Customer Portal
```

Franchise navigation:

```text
RICOZ / KALYAN
│
├── Franchise content
│
├── Explore Ricoz
│   ├── Products
│   ├── Services
│   ├── Solutions
│   ├── Resources
│   └── About
│
└── Customer Portal
```

---

# 15. DO NOT CREATE A SECOND NAVBAR

This is critical.

The Customer Portal integration must not introduce another global navigation component.

Franchise page:

```text
FranchiseHeader
       ↓
Franchise content
       ↓
FranchiseFooter
```

Global page:

```text
Global Header
       ↓
Public content
       ↓
Global Footer
```

Portal:

```text
Portal/Auth Shell
       ↓
Portal content
```

Each experience owns its appropriate shell.

---

# 16. ACCESSIBILITY

Verify:

* keyboard navigation
* visible focus state
* correct semantic links/buttons
* accessible menu labels
* mobile tap targets
* form labels
* password visibility control if already supported
* error announcements
* Escape handling for menus

Do not sacrifice accessibility for visual styling.

---

# 17. RESPONSIVE BEHAVIOUR

Verify the Customer Portal entry across:

* desktop
* tablet
* mobile

Ensure it never causes:

* navbar overflow
* wrapped navigation
* clipped buttons
* inaccessible mobile menu items

---

# 18. ROUTING VALIDATION

Verify:

### Public

```text
/
 /products
 /services
 /solutions
 /resources
 /contact
 /consultation
```

continue working.

### Franchise

```text
/franchise
/franchise/mumbai
/franchise/nagpur
/franchise/delhi
/franchise/kalyan
/franchise/kolkata
```

continue working.

### Portal

Verify the actual existing customer portal/authentication routes.

Do not invent routes where an existing route already exists.

---

# 19. AUTHENTICATION VALIDATION

Test:

```text
Unauthenticated
    ↓
Customer Portal
    ↓
Login
    ↓
Valid authentication
    ↓
Portal
```

Also:

```text
Portal
    ↓
Logout
    ↓
Public Ricoz
```

And:

```text
Unauthenticated
    ↓
Protected Portal Route
    ↓
Login
```

if protected routes already exist.

---

# 20. REGRESSION TEST

Confirm:

* global navigation works
* franchise navigation works
* no double navbar
* no double footer
* Customer Portal is accessible
* existing authentication remains intact
* authenticated state remains intact
* logout remains intact
* franchise pages remain public
* Contact franchise context remains intact
* Consultation franchise context remains intact
* Kolkata remains accessible
* TypeScript passes
* production build passes

Do not modify unrelated product, service, solution or resource functionality.

---

# FINAL OUTCOME

Ricoz should now behave as one connected platform:

```text
                    RICOZ
                      │
        ┌─────────────┼─────────────┐
        │             │             │
     Platform      Franchise     Customer
      Pages         Network       Portal
        │             │             │
   Global Shell   Local Shell   Auth Shell
        │             │             │
        └─────────────┴─────────────┘
```

The Customer Portal is a **platform capability**, not a separate website and not a separate franchise product.

Keep the implementation clean, reusable and compatible with the existing architecture.
