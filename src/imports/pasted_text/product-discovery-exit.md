# FLOW 14 — PRODUCT DISCOVERY EXIT

## Objective

Implement the **Product Discovery Exit** experience.

The goal is to prevent the Product Detail page from becoming a dead end. After understanding a product, visitors should have meaningful next paths into the wider Ricoz ecosystem—particularly **Resources and Case Studies**.

The intended journey is:

**Product → Understand → Explore Related Knowledge → Continue Exploring Ricoz**

This is the final flow of **Flow Group 02 — Product Ecosystem**.

Use the existing product, resource, and case-study data.

Do not create a new recommendation engine.

---

## 1. Preserve Existing Architecture

Use the existing:

* Product Detail template
* Product catalogue
* Product slugs
* Resource data
* Resource routes
* Case Study data
* Case Study routes
* Existing Product Card / Resource Card / Case Study Card components
* React Router
* SEO architecture
* Manrope typography
* Ricoz design system

Do not duplicate products or resources.

Do not create new standalone data structures if existing relationships can be reused.

---

## 2. Product → Resource Relationship

Use the existing product-to-resource relationships where available.

A Product Detail page should be able to surface relevant resources that help the visitor continue learning about the subject surrounding the product.

Prioritize existing relationships such as:

* `relatedProducts`
* Resource `relatedProducts`
* Relevant topics/tags
* Existing category relationships

Use deterministic logic only.

Do not introduce AI recommendations.

---

## 3. Product → Case Study Relationship

Where relevant case-study relationships already exist, surface them as part of the Product Discovery Exit experience.

Use existing case-study relationships and product references.

Do not fabricate case studies.

Do not invent customers, results, statistics, or implementation stories.

If no valid case study is associated with a product, do not display an empty or fake case-study card.

---

## 4. Discovery Exit Section

Add a meaningful lower-page section after the core Product Detail content.

Possible heading:

**Keep exploring**

Supporting copy:

**Go deeper into the ideas, applications, and work surrounding this product.**

The section should provide two discovery paths where data supports them:

### Resources

Help the visitor learn more.

### Case Studies

Help the visitor explore practical applications and real project stories.

Keep the section compact.

This should be an **exit point**, not another large product landing page.

---

## 5. Resource Cards

Use the existing Resource Card component.

Display only the information necessary for discovery:

* Resource type
* Title
* Short excerpt
* Topic/category where useful
* Reading time where already supported
* Discovery action

The title should be the strongest element.

The card should clearly communicate that clicking it takes the visitor into the Resources experience.

---

## 6. Case Study Cards

Use the existing Case Study Card component.

Display:

* Case study title
* Relevant category/solution where available
* Short summary
* Discovery action

Do not overload the card with metrics unless those metrics already exist as verified content in the data model.

---

## 7. Deterministic Relevance

Use a simple predictable relevance model.

Prioritize:

1. Explicit product relationship
2. Shared solution relationship
3. Shared category
4. Shared topic/tag
5. Existing curated/featured status where applicable

Do not randomly select content.

Do not show unrelated resources merely to fill a fixed number of cards.

If only one relevant resource exists, show one.

If no relevant resource exists, gracefully provide a broader Resources navigation path.

---

## 8. Resource Navigation

The journey should be:

**Product → Resource → Resource Detail**

Use the existing resource slug and route.

Do not create product-specific resource URLs.

Use React Router without a full-page reload.

The Resource Detail page must retain its existing:

* Breadcrumb
* Content
* Author information
* Topic information
* Related ecosystem
* SEO
* Consultation/contact pathways

Do not redesign the Resource Detail page in this flow.

---

## 9. Case Study Navigation

The journey should be:

**Product → Case Study → Case Study Detail**

Use the existing case-study slug and route.

Do not duplicate case-study content.

Use React Router.

The existing Case Study Detail experience must remain intact.

---

## 10. Continue Exploring

After the Resource/Case Study cards, provide a restrained continuation path back into the wider ecosystem.

Useful destinations may include:

* Explore Products
* Explore Solutions
* Explore Services
* Explore Resources

Only use routes that already exist.

Do not introduce new navigation destinations simply for this flow.

The goal is to prevent discovery from ending after one click.

---

## 11. Product Context

Where an existing resource or case study already contains product relationships, preserve those relationships.

Do not attempt to pass the originating product through every URL unless the existing destination architecture genuinely benefits from it.

The primary purpose of this flow is **discovery**, not conversion tracking.

Do not modify Contact or Consultation behavior here.

---

## 12. Empty States

Handle missing relationships gracefully.

Examples:

If no relevant resources exist:

**Explore Ricoz Resources**

If no relevant case studies exist:

**Explore Case Studies**

Never show:

* Empty cards
* Broken links
* Placeholder titles
* Fake relationships

A missing recommendation should result in a clean alternative path.

---

## 13. Responsive Experience

Audit at:

* 1440px+
* 1280px
* 1024px
* 768px
* 480px
* 375px

Desktop:

* Use a balanced editorial layout
* Keep Product Detail content dominant
* Discovery cards should feel like a natural closing section

Tablet:

* Reduce columns appropriately
* Preserve readable card proportions

Mobile:

* Stack discovery content naturally
* Maintain comfortable touch targets
* Keep card descriptions readable
* Avoid excessive vertical repetition
* Prevent horizontal overflow

Do not create a carousel simply because the cards need to fit on mobile.

---

## 14. Accessibility

Ensure:

* Semantic section headings
* Accessible resource links
* Accessible case-study links
* Keyboard navigation
* Visible focus states
* Meaningful link labels
* Sufficient contrast

Do not make the entire card clickable unless the interaction remains semantically accessible.

---

## 15. Visual System

Follow the existing Ricoz visual language:

* Manrope 400 / 500 / 600
* Ricoz Red `#C41230`
* `#111111` foreground
* Warm off-white background
* Thin subtle borders
* 8px spacing rhythm
* 4px radius
* Minimal shadows
* Restrained hover transitions

This section should feel editorial rather than promotional.

Avoid:

* Large illustrations
* Gradients
* Glassmorphism
* Excessive shadows
* Oversized promotional banners
* Artificial recommendation UI

---

## 16. SEO & Internal Linking

Use this flow to strengthen internal linking between:

**Products ↔ Resources ↔ Case Studies**

Ensure all links resolve to the existing canonical destinations.

Do not create duplicate URLs.

Do not create indexable recommendation/query pages.

Do not modify existing Product, Resource, or Case Study canonical URLs unnecessarily.

---

## 17. Performance

Keep recommendation resolution lightweight.

Use existing data utilities and relationships.

Avoid:

* External recommendation APIs
* New heavy libraries
* AI services
* Duplicate datasets
* Expensive runtime calculations

For the current Ricoz catalogue, deterministic client-side relationship resolution is sufficient.

---

## 18. Scope Boundary

Do NOT implement:

* AI recommendations
* Personalized recommendations
* User behavior tracking
* Recommendation engines
* New CMS functionality
* New resource management systems
* New case-study management systems
* Contact redesign
* Consultation redesign
* Product search
* Product filtering
* Purchasing
* Checkout
* Authentication
* Dashboards

This flow is strictly:

**Product → Resource / Case Study → Continue Exploring**

---

## 19. Validation

Test multiple products from different categories.

Verify:

1. Product Detail pages expose the discovery-exit section where relevant.
2. Relevant resources are resolved correctly.
3. Relevant case studies are resolved correctly.
4. No unrelated content is randomly displayed.
5. Invalid references do not create broken cards.
6. Resource cards open the correct Resource Detail pages.
7. Case Study cards open the correct Case Study Detail pages.
8. Continue Exploring links resolve correctly.
9. Products without direct relationships receive graceful fallback navigation.
10. Existing Product Detail content remains intact.
11. Existing Resource and Case Study pages remain intact.
12. Mobile and desktop layouts work correctly.
13. Keyboard accessibility works.
14. No duplicate data was introduced.
15. Existing SEO remains valid.
16. Run:

`npm run build`

Fix actual build errors before finishing.

A pre-existing bundle-size warning is not a failure.

---

## Final Principle

**A product page should not be the end of the journey.**

Once someone understands a product, give them meaningful ways to go deeper:

**Product → Knowledge → Evidence → Continue Exploring**

The visitor should always have a useful next step—but never feel forced into one.

Keep recommendations relevant.

Keep relationships deterministic.

Keep the experience editorial and restrained.

**Complete the Product Ecosystem without turning it into a sales funnel.**
