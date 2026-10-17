# RICOZ — FLOW 03: GLOBAL SEARCH & DISCOVERY

Implement FLOW 03 — Global Search in the existing Ricoz digital ecosystem.

IMPORTANT:

Do NOT rebuild the application.

Do NOT redesign the Ricoz design system.

Preserve:

* Ricoz Red #C41230
* Instrument Serif
* Inter
* Warm off-white background
* Near-black typography
* 8px spacing system
* 4px radius
* Editorial borders
* Existing Header
* Existing Footer
* Existing Product architecture
* Existing Service architecture
* Existing Resource architecture
* Existing Case Study architecture
* Existing routing
* Existing SEO architecture

Reuse existing components wherever possible.

Only modify components required for the search experience.

---

# 01. FLOW OBJECTIVE

The search experience should allow visitors to quickly discover anything within the Ricoz ecosystem.

Primary journey:

SEARCH

↓

ENTER QUERY

↓

UNDERSTAND RESULTS

↓

FILTER BY CONTENT TYPE

↓

OPEN RELEVANT CONTENT

↓

CONTINUE EXPLORATION

↓

CONTACT / CONSULTATION

Searchable content types:

Products

Services

Solutions

Resources

Case Studies

The search experience must remain useful when the ecosystem grows from the current prototype dataset to:

125+ Products

50+ Services

and a significantly larger resource library.

---

# 02. SEARCH ENTRY

The global Header already contains the Search action.

Clicking Search should open a polished search interface.

Preferred behavior:

Header

↓

Search overlay / command-style search surface

The search surface should feel integrated into the Ricoz ecosystem rather than like a separate application.

---

# 03. SEARCH OVERLAY

Create a large but restrained search overlay.

Structure:

Top:

Close

Search input

Below:

Suggested discovery categories

Products

Services

Solutions

Resources

Case Studies

The overlay should provide generous whitespace.

Do not use excessive shadows or decorative effects.

---

# 04. SEARCH INPUT

Create a prominent search field.

Placeholder:

Search products, services, solutions and resources...

Support:

* Text input
* Clear button
* Keyboard interaction
* Focus state
* Loading state
* Empty state

The input should receive focus automatically when the search overlay opens.

---

# 05. KEYBOARD EXPERIENCE

Support common keyboard behavior.

ESC

→ Close search

ENTER

→ Submit search

TAB

→ Navigate controls

Arrow keys may be used for result navigation where appropriate.

Do not over-engineer keyboard behavior.

---

# 06. INITIAL SEARCH STATE

Before a query is entered, display useful discovery options.

Example:

EXPLORE

Products

Services

Solutions

Resources

Case Studies

Also display a small section:

FEATURED

Use existing product/service/resource data.

Do not display excessive content.

---

# 07. SEARCH RESULTS

After entering a query, display results in a structured layout.

Example:

SEARCH RESULTS

"analytics"

12 results

---

PRODUCTS

RicoAnalytics

Short description

View Product →

---

SERVICES

Relevant Service

Short description

View Service →

---

RESOURCES

Relevant Resource

Short description

Read Resource →

Results should be grouped by content type.

---

# 08. RESULT CARD

Create a reusable search-result component.

Each result should contain:

Content type

Title

Short description

Optional category

Optional metadata

Arrow / action

The result should be fully clickable.

Use descriptive links.

Do not overload the result card with unnecessary information.

---

# 09. CONTENT TYPE FILTERS

Provide simple filtering controls:

All

Products

Services

Solutions

Resources

Case Studies

The active filter should use the existing Ricoz Red treatment.

Do not create dozens of filters.

The goal is quick discovery.

---

# 10. RESULT COUNT

When appropriate, show:

X results

Examples:

24 results

6 products

4 services

8 resources

6 case studies

Counts must come from the actual search dataset.

Do not fabricate numbers.

---

# 11. SEARCH MATCHING

For the prototype, search against the existing structured data.

Search should consider relevant fields such as:

Product:

Name
Category
Short description
Description
Capabilities
Use cases

Service:

Name
Category
Description
Capabilities
Problems solved

Resource:

Title
Category
Summary
Content topics

Case Study:

Title
Category
Summary
Capabilities

Do not search arbitrary UI text.

---

# 12. SEARCH RELEVANCE

Prioritize exact and meaningful matches.

Suggested priority:

1. Exact title match
2. Name match
3. Category match
4. Description match
5. Capability / topic match
6. Related content match

A title match should appear above a weak description match.

---

# 13. TYPO TOLERANCE

Provide lightweight tolerance for common spelling differences where practical.

Example:

"analytcs"

should still have the potential to surface:

RicoAnalytics

Do not introduce a heavy search dependency solely for this prototype.

---

# 14. NO RESULTS

Create a polished empty state.

Example:

NO RESULTS

We couldn't find anything matching “xyz”.

Try:

* A broader term
* A product category
* A service category
* Another keyword

Then provide:

Explore Products →

Explore Services →

Explore Resources →

Do not leave the user at a dead end.

---

# 15. SEARCH SUGGESTIONS

As the user types, provide lightweight suggestions.

Example:

SEARCHING FOR

Analytics

↓

RicoAnalytics
Product

↓

Data & Intelligence
Category

↓

Analytics Resources
Resource

Suggestions should be limited.

Do not create a huge autocomplete panel.

---

# 16. RECENT SEARCHES

Support recent searches locally for the prototype.

Example:

RECENT

Analytics

Digital transformation

Data

Each recent search should be removable.

Do not store sensitive information.

Use local browser state only for this prototype.

---

# 17. SEARCH RESULT ROUTING

Every result must navigate to the correct existing route.

Products:

/products/:productSlug

Services:

/services/:serviceSlug

Resources:

/resources/:resourceSlug

Case studies:

/resources/case-studies/:slug

Solutions:

/solutions/:slug

If the Solutions detail architecture does not yet exist, do not invent a complex system. Use the currently supported route structure.

---

# 18. SEARCH → PRODUCT FLOW

Verify:

Search

→ Query

→ Product result

→ Product detail

→ Related Products / Services

→ Contact or Consultation

---

# 19. SEARCH → SERVICE FLOW

Verify:

Search

→ Query

→ Service result

→ Service detail

→ Related Products / Services

→ Contact or Consultation

---

# 20. SEARCH → RESOURCE FLOW

Verify:

Search

→ Query

→ Resource result

→ Resource detail

→ Related Products / Services

---

# 21. SEARCH → CASE STUDY FLOW

Verify:

Search

→ Query

→ Case Study

→ Case Study detail

→ Related capability

→ Product / Service

→ Conversion

---

# 22. SEARCH → CONVERSION

Search itself should not aggressively sell.

However, result/detail journeys should naturally allow:

Contact Us

Schedule a Consultation

The conversion should occur after the visitor has discovered something relevant.

---

# 23. SEARCH PAGE OPTION

If the existing architecture supports a dedicated search page, create:

/search/

The search overlay may transition into the full search page when appropriate.

If implementing a dedicated search page creates unnecessary architectural complexity, keep the experience as a full-screen overlay.

Do not create duplicate search systems.

---

# 24. SEO RULE

Search result pages must NOT become indexable content pages.

The architecture should prevent search queries such as:

/search?q=analytics

from becoming individual SEO landing pages.

Do not include search URLs in the sitemap.

Do not generate canonical SEO pages for arbitrary searches.

The actual Product, Service, Resource and Case Study pages remain the indexable destinations.

---

# 25. ACCESSIBILITY

Ensure:

* Search button has accessible label
* Search input has proper label
* Focus enters the search input
* Escape closes the overlay
* Keyboard navigation works
* Results are accessible
* Active filters are understandable
* Focus does not become trapped incorrectly
* Screen readers can understand result types

Use appropriate ARIA patterns only where needed.

---

# 26. MOBILE SEARCH

On mobile:

Search should open as a full-screen experience.

Structure:

Close

Search field

Suggested categories

Results

Filters

The search field should remain easy to access.

Results should become single-column.

Do not create horizontal overflow.

---

# 27. PERFORMANCE

Do not load the entire future 125+ product and 50+ service catalogue unnecessarily into the UI on initial page load.

The current prototype can use the existing local data.

Structure the search logic so it can later be replaced by a server-side or indexed search service without rebuilding the UI.

Keep the search UI independent from the search implementation.

---

# 28. COMPONENT ARCHITECTURE

Create or reuse:

SearchTrigger

SearchOverlay

SearchInput

SearchSuggestion

SearchResult

SearchResultGroup

SearchFilter

RecentSearch

SearchEmptyState

Do not create duplicate components if equivalent components already exist.

---

# 29. DATA ARCHITECTURE

Keep search logic separate from visual components.

Conceptually:

Content Data

↓

Search / Ranking Logic

↓

Search Results

↓

Search UI

This allows the future backend search implementation to replace the prototype search logic without redesigning the interface.

---

# 30. VISUAL DIRECTION

The search experience should feel:

Quiet

Fast

Precise

Premium

Editorial

Confident

Avoid:

* Neon search effects
* Giant glowing search bars
* Excessive animations
* Generic dashboard styling
* Dense result tables

Typography and whitespace should carry the experience.

---

# 31. FLOW TESTING

Test at minimum:

Search
→ Empty state

Search
→ Product

Search
→ Service

Search
→ Resource

Search
→ Case Study

Search
→ Category match

Search
→ Filter Products

Search
→ Filter Services

Search
→ No Results

Search
→ Clear Query

Search
→ Recent Search

Search
→ Product Detail
→ Consultation

Search
→ Service Detail
→ Contact

Search
→ Mobile Search

Search
→ ESC Close

---

# 32. FINAL ACCEPTANCE CRITERIA

The completed Flow 03 must provide:

✓ Global search trigger

✓ Search overlay/page

✓ Automatic input focus

✓ Search suggestions

✓ Search results

✓ Result grouping

✓ Content-type filtering

✓ Relevant ranking

✓ Recent searches

✓ Empty state

✓ Clear state

✓ Product discovery

✓ Service discovery

✓ Resource discovery

✓ Case-study discovery

✓ Correct routing

✓ Mobile search

✓ Keyboard accessibility

✓ SEO-safe search architecture

✓ Scalable data/search separation

Do not modify unrelated flows.

At completion, report:

1. Search components created or modified
2. Search states implemented
3. Searchable content types
4. Ranking/matching behavior
5. Routes verified
6. Mobile behavior verified
7. Accessibility verified
8. SEO safeguards verified
9. Any issues or dependencies discovered
