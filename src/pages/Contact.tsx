import { useState } from "react"
import { Link, useSearchParams } from "react-router"
import Button from "@/components/ui/Button"
import Icon from "@/components/ui/Icon"
import { getProductBySlug } from "@/data/products"
import { getSolutionBySlug } from "@/data/solutions"
import { getServiceBySlug } from "@/data/services"
import { getFranchise } from "@/data/franchises/registry"
import { usePageMeta, breadcrumbSchema } from "@/lib/seo"

const interestOptions = [
  "Products",
  "Professional Services",
  "Solutions",
  "Partnership",
  "General Enquiry",
]

interface FormState {
  name: string
  organization: string
  email: string
  phone: string
  interestedIn: string
  message: string
}

export default function Contact() {
  usePageMeta({
    title: "Contact Ricoz — Get in Touch",
    description:
      "Contact the Ricoz team to discuss your technology, digital or business requirements. We're here to help you find the right next step.",
    canonical: "/contact/",
  })

  const [searchParams] = useSearchParams()
  const productSlug = searchParams.get("product")
  const contextProduct = productSlug ? getProductBySlug(productSlug) : undefined
  const solutionSlug = searchParams.get("solution")
  const contextSolution = solutionSlug
    ? getSolutionBySlug(solutionSlug)
    : undefined
  const serviceSlug = searchParams.get("service")
  const contextService = serviceSlug ? getServiceBySlug(serviceSlug) : undefined
  const franchiseSlug = searchParams.get("franchise")
  const contextFranchise = franchiseSlug
    ? getFranchise(franchiseSlug)
    : undefined

  const [form, setForm] = useState<FormState>({
    name: "",
    organization: "",
    email: "",
    phone: "",
    interestedIn: contextSolution
      ? "Solutions"
      : contextProduct
        ? "Products"
        : contextService
          ? "Professional Services"
          : "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  function validate(): boolean {
    const newErrors: Partial<FormState> = {}
    if (!form.name.trim()) newErrors.name = "Name is required"
    if (!form.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address"
    if (!form.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    const firstErrorKey = Object.keys(newErrors)[0]
    if (firstErrorKey) {
      setTimeout(() => document.getElementById(firstErrorKey)?.focus(), 0)
    }
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (isSubmitting) return
    setSubmissionError(false)
    if (!validate()) return
    setIsSubmitting(true)
    try {
      await new Promise<void>((resolve) => setTimeout(resolve, 700))
      setSubmitted(true)
    } catch {
      setSubmissionError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[(name as keyof FormState)]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const fieldClass =
    "w-full px-4 py-3.5 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"

  const labelClass = "block text-sm font-medium text-foreground mb-2"

  const errorClass = "mt-1.5 text-xs text-primary font-medium"

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <section className="flex flex-1 items-center py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center rounded-2xl border border-border bg-card p-10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-rose text-primary">
                <Icon name="knowledge" size={24} />
              </div>
              <h1 className="mb-4 font-display text-3xl text-foreground sm:text-4xl">
                Enquiry received
              </h1>
              <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                Thank you for getting in touch. A member of our team will review
                your enquiry and respond within one business day.
              </p>
              {(contextProduct || contextService || contextSolution) && (
                <div className="mb-8 rounded-lg bg-secondary/50 p-4 border border-border">
                  <p className="text-sm text-muted-foreground">
                    {contextService && (
                      <>
                        Enquiry filed for{" "}
                        <span className="font-semibold text-foreground">
                          {contextService.name}
                        </span>
                        .
                      </>
                    )}
                    {contextProduct && !contextService && (
                      <>
                        Enquiry filed for{" "}
                        <span className="font-semibold text-foreground">
                          {contextProduct.name}
                        </span>
                        .
                      </>
                    )}
                    {contextSolution && !contextService && !contextProduct && (
                      <>
                        Enquiry filed for{" "}
                        <span className="font-semibold text-foreground">
                          {contextSolution.name}
                        </span>
                        .
                      </>
                    )}
                  </p>
                </div>
              )}
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                {contextService ? (
                  <Button
                    as="link"
                    to={`/services/${contextService.slug}`}
                    variant="primary"
                  >
                    Back to {contextService.name}
                  </Button>
                ) : contextProduct ? (
                  <Button
                    as="link"
                    to={`/products/${contextProduct.slug}`}
                    variant="primary"
                  >
                    Back to {contextProduct.name}
                  </Button>
                ) : contextSolution ? (
                  <Button
                    as="link"
                    to={`/solutions/${contextSolution.slug}`}
                    variant="primary"
                  >
                    Back to {contextSolution.name}
                  </Button>
                ) : (
                  <Button as="link" to="/" variant="primary">
                    Return to home
                  </Button>
                )}
                <Button as="link" to="/consultation" variant="secondary">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero */}
      <section className="relative border-b border-border bg-card overflow-hidden">
        <div className="absolute inset-0 bg-secondary/50" />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Contact
            </p>
            <h1 className="mb-6 font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
              Get in touch with Ricoz
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Whether you have a question about our products, want to discuss a
              service engagement, or are exploring a solution for your
              organization — we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Franchise context banner */}
      {contextFranchise && (
        <div className="border-b border-border bg-secondary py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <span className="shrink-0 size-2 rounded-full bg-primary" />
              <p className="text-sm text-foreground">
                Contacting{" "}
                <span className="font-semibold">{contextFranchise.name}</span>
                <span className="ml-1 text-muted-foreground">
                  — {contextFranchise.city}, {contextFranchise.region}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Context banner — product, solution, or service */}
      {(contextProduct || contextSolution || contextService) && (
        <div className="border-b border-border bg-secondary py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <span className="shrink-0 size-2 rounded-full bg-primary" />
              <p className="text-sm text-foreground">
                Enquiring about{" "}
                <span className="font-semibold">
                  {contextSolution
                    ? contextSolution.name
                    : contextService
                      ? contextService.name
                      : contextProduct!.name}
                </span>
                <span className="text-muted-foreground">
                  {" "}
                  —{" "}
                  {contextSolution
                    ? contextSolution.tagline
                    : contextService
                      ? contextService.tagline
                      : contextProduct!.tagline}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_400px] lg:gap-20">
            {/* Form */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm">
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact enquiry form"
              >
                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name{" "}
                      <span className="text-primary" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className={[
                        fieldClass,
                        errors.name ? "border-primary bg-rose/10" : "",
                      ].join(" ")}
                      placeholder="Your full name"
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className={errorClass} role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="organization" className={labelClass}>
                      Business / Organization
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={form.organization}
                      onChange={handleChange}
                      className={fieldClass}
                      placeholder="Your organization"
                      autoComplete="organization"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email{" "}
                      <span className="text-primary" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={[
                        fieldClass,
                        errors.email ? "border-primary bg-rose/10" : "",
                      ].join(" ")}
                      placeholder="your@email.com"
                      autoComplete="email"
                      aria-required="true"
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                    />
                    {errors.email && (
                      <p id="email-error" className={errorClass} role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className={fieldClass}
                      placeholder="+1 (000) 000 0000"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="interestedIn" className={labelClass}>
                    Interested In
                  </label>
                  <select
                    id="interestedIn"
                    name="interestedIn"
                    value={form.interestedIn}
                    onChange={handleChange}
                    className={[
                      fieldClass,
                      "appearance-none cursor-pointer",
                    ].join(" ")}
                  >
                    <option value="">Select a topic</option>
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-10">
                  <label htmlFor="message" className={labelClass}>
                    Message{" "}
                    <span className="text-primary" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    className={[
                      fieldClass,
                      "resize-none",
                      errors.message ? "border-primary bg-rose/10" : "",
                    ].join(" ")}
                    placeholder="Tell us about your enquiry…"
                    aria-required="true"
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <p id="message-error" className={errorClass} role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submissionError && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="mb-8 flex items-start gap-3 rounded-lg border border-border bg-rose/20 p-4"
                  >
                    <span
                      className="mt-1.5 shrink-0 size-2 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="mb-1 text-sm font-semibold text-foreground">
                        We couldn't submit your enquiry.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Please review your details and try again.
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    aria-disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending…" : "Send Enquiry"}
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Or{" "}
                    <Link
                      to="/consultation"
                      className="font-medium text-primary hover:underline"
                    >
                      schedule a consultation
                    </Link>{" "}
                    if you prefer a structured conversation.
                  </p>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-border bg-secondary/50 p-8 shadow-sm">
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-background text-primary shadow-sm">
                  <Icon name="strategy" size={24} />
                </div>
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  Prefer a structured conversation?
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  Schedule a consultation with our team. We will review your
                  context in advance and come prepared to discuss relevant
                  solutions.
                </p>
                <Button
                  as="link"
                  to="/consultation"
                  variant="primary"
                  fullWidth
                >
                  Schedule a Consultation
                </Button>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  What to expect
                </h3>
                <ul className="flex flex-col gap-4">
                  {[
                    "Response within one business day",
                    "Your enquiry routed to the right team",
                    "No pressure, no sales calls unless you request them",
                    "Confidential and professional handling",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Icon name="knowledge" size={16} className="mt-0.5 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
