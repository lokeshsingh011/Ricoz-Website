# RESOLVE FRANCHISE DIRECTOR PORTRAIT FALLBACK

Update the existing franchise director image architecture.

The current `FranchiseHero` and director section use a neutral silhouette when a real director portrait is unavailable.

Do not generate or introduce a fictional person.

The fallback should instead be an intentional **Ricoz editorial image placeholder** that looks like a designed part of the page.

---

## 1. IMAGE STATES

The director portrait component must support three states:

### State A — Valid image

If the franchise configuration contains a valid image reference:

```ts
director.image
```

render the actual image.

### State B — Image fails

If an image URL/reference exists but fails to load:

```text
onError → fallback
```

The component must immediately switch to the designed fallback.

Do not leave a broken `<img>` element visible.

### State C — No image

If no director image is configured:

render the fallback automatically.

Do not display:

* broken image icon
* empty image container
* fictional person
* stock portrait
* generated person
* misleading placeholder photo

---

# 2. FALLBACK DESIGN

Replace the existing generic silhouette with a **Ricoz editorial portrait placeholder**.

Use the franchise's visual language while maintaining the Ricoz design system.

Recommended composition:

```text
┌──────────────────────────────┐
│                              │
│                              │
│          RICOZ               │
│                              │
│          / KALYAN            │
│                              │
│                              │
│     DIRECTOR PORTRAIT        │
│        COMING SOON            │
│                              │
│                              │
│                              │
└──────────────────────────────┘
```

The fallback should use:

* warm off-white / neutral background
* near-black typography
* Ricoz Red accent
* thin architectural rules
* subtle grid structure
* restrained geometric framing

It should feel like an **editorial image placeholder**, not an error state.

---

# 3. DO NOT SHOW "COMING SOON" IF IMAGE IS TEMPORARILY LOADING

Loading state and missing-image state must be different.

### Loading

Display a subtle neutral placeholder/skeleton.

### Loaded

Display the portrait.

### Missing / failed

Display:

> DIRECTOR PORTRAIT
> IMAGE COMING SOON

Do not show "Coming Soon" while the image is loading.

---

# 4. REUSABLE COMPONENT

Create or update:

```text
src/components/franchise/FranchiseDirectorImage.tsx
```

The component should be reusable by:

* FranchiseHero
* Franchise director section
* future franchise pages

Do not duplicate fallback logic inside `FranchiseHero.tsx`.

Suggested typed contract:

```ts
interface FranchiseDirectorImageProps {
  image?: ImageReference;
  franchiseName: string;
  city: string;
  alt?: string;
  priority?: boolean;
  className?: string;
}
```

Use the existing `ImageReference` type.

Do not introduce `any`.

---

# 5. ACCESSIBILITY

When a real image exists:

Use meaningful alt text such as:

```text
[Director Name], Franchise Director of Ricoz Kalyan
```

Only construct this when the director name actually exists.

When the image is unavailable:

the fallback is decorative/informational UI and should not pretend to be a photograph.

Do not use a fictional person's name in alt text.

---

# 6. ERROR HANDLING

The image component should maintain local image state.

Conceptually:

```text
image exists?
    ↓
  yes
    ↓
attempt load
    ↓
success → portrait
failure → fallback

no image
    ↓
fallback
```

Once an image fails, do not repeatedly attempt to load it during the same render.

Avoid infinite image-error loops.

---

# 7. DATA COMPATIBILITY

Do not modify the franchise data contract unnecessarily.

Continue supporting:

```text
FranchiseDirectorData
ImageReference
```

The existing franchise configuration should remain valid.

For example:

```ts
director: {
  name: undefined,
  image: undefined,
}
```

must safely render the fallback.

Do not require every franchise to have an image before the page can render.

---

# 8. VISUAL DIFFERENTIATION

The fallback should inherit the current franchise theme.

For example:

### Mumbai

Editorial / metropolitan placeholder.

### Nagpur

Open / connected placeholder.

### Delhi

Structured / institutional placeholder.

### Kalyan

Human / warm placeholder.

### Kolkata

Editorial / distinctive placeholder.

However, do not create five separate components.

Use the existing `FranchiseTheme` configuration to influence the presentation.

---

# 9. IMAGE CROPPING

When a real portrait is supplied:

Use:

```text
object-fit: cover
```

with an appropriate configurable focal position.

Do not distort the portrait.

Support:

```ts
objectPosition?: string;
```

through the existing image configuration if the data model already supports it.

If it does not exist, add it only if useful and keep it optional.

Default:

```text
center center
```

---

# 10. HERO BEHAVIOUR

The hero must maintain its intended composition regardless of image availability.

The fallback must occupy exactly the same visual area as the eventual portrait.

This is important.

When the real portrait is later added:

**No layout changes should be necessary.**

Only the configuration/image changes.

---

# 11. DIRECTOR SECTION

Apply the same component to the dedicated director section.

Do not allow:

```text
Hero → fallback
Director section → broken image
```

Both locations must use the same image resolution/fallback architecture.

---

# 12. REAL IMAGE REPLACEMENT

When an actual director portrait is added to:

```text
src/data/franchises/[franchise].ts
```

the page should automatically transition from:

```text
Editorial Placeholder
```

to:

```text
Actual Director Portrait
```

without modifying:

* FranchiseHero
* FranchiseSectionRenderer
* FranchisePage
* FranchiseFooter

---

# 13. VALIDATION

Test all three states.

### Test 1 — No image

Remove the image reference.

Expected:

**Designed Ricoz fallback**

No broken image.

### Test 2 — Invalid image

Provide an invalid image reference.

Expected:

**Fallback after image error**

No broken-image icon.

### Test 3 — Valid image

Provide a real portrait.

Expected:

**Actual portrait**

Correct crop, alt text and layout.

Also verify:

* desktop
* tablet
* mobile
* hero
* director section
* loading state
* reduced-motion compatibility
* no layout shift where practical
* TypeScript clean
* production build clean

---

# FINAL REQUIREMENT

The portrait fallback must never communicate:

> "We couldn't load something."

It should communicate:

> **"This franchise is ready; the leadership portrait will be added when supplied."**

The component must therefore behave as a deliberate **content placeholder**, not an error state.

Do not generate a replacement person.
Do not use a stock person.
Do not invent director identity.

Keep the portrait slot ready for the actual franchise director photograph.
