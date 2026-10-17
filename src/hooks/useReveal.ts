import { useEffect, useRef } from "react"

/**
 * Attaches an IntersectionObserver to the returned ref, toggling the
 * "visible" class on the element when it enters the viewport.
 * Pair with the `.reveal` CSS class in index.css.
 */
export function useReveal<T extends Element>(threshold = 0.12) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          observer.unobserve(entry.target)
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
