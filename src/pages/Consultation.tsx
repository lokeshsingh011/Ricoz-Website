import { useState } from "react"
import { Link, useSearchParams } from "react-router"
import Button from "@/components/ui/Button"
import Icon from "@/components/ui/Icon"
import { getProductBySlug } from "@/data/products"
import { getSolutionBySlug } from "@/data/solutions"
import { getServiceBySlug } from "@/data/services"
import { getFranchise } from "@/data/franchises/registry"
import { usePageMeta } from "@/lib/seo"

type PurposeOption = {
  id: string
  label: string
  description: string
  icon: "product" | "service" | "solution" | "people"
}

const purposes: PurposeOption[] = [
  {
    id: "product-demo",
    label: "Product Demo",
    description:
      "See a specific product in action and explore how it applies to your context.",
    icon: "product",
  },
  {
    id: "service-inquiry",
    label: "Service Inquiry",
    description:
      "Explore how our professional services can support your objectives.",
    icon: "service",
  },
  {
    id: "technical-consultation",
    label: "Technical Consultation",
    description:
      "Discuss a technical challenge or integration requirement with our experts.",
    icon: "solution",
  },
  {
    id: "general-inquiry",
    label: "General Inquiry",
    description:
      "An introductory conversation to explore how Ricoz can help your organization.",
    icon: "people",
  },
]

const months = ["October", "November", "December", "January"]
const daysInMonth = 22

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
]

const unavailableDays = [6, 7, 13, 14, 20, 21]
const bookedSlots: string[] = ["9:00 AM", "11:00 AM", "3:30 PM"]

type Step = 1 | 2 | 3 | 4 | 5

export default function Consultation() {
  usePageMeta({
    title: "Schedule a Consultation — Ricoz",
    description:
      "Book a consultation with the Ricoz team to explore how our products, services and solutions can help your organisation move forward.",
    canonical: "/consultation/",
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

  const [step, setStep] = useState<Step>(1)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState(false)
  const [purpose, setPurpose] = useState<string>(
    contextService
      ? "service-inquiry"
      : contextProduct
        ? "product-demo"
        : contextSolution
          ? "service-inquiry"
          : "",
  )
  const [selectedMonth, setSelectedMonth] = useState<string>(months[0])
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    notes: "",
  })
  const [detailErrors, setDetailErrors] = useState<Partial<typeof details>>({})

  function validateDetails(): boolean {
    const errors: Partial<typeof details> = {}
    if (!details.name.trim()) errors.name = "Name is required"
    if (!details.email.trim()) errors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email))
      errors.email = "Enter a valid email"
    setDetailErrors(errors)
    const fieldIdMap: Record<string, string> = {
      name: "c-name",
      email: "c-email",
      phone: "c-phone",
      organization: "c-org",
    }
    const firstKey = Object.keys(errors)[0]
    if (firstKey)
      setTimeout(
        () =>
          document.getElementById(fieldIdMap[firstKey] ?? firstKey)?.focus(),
        0,
      )
    return Object.keys(errors).length === 0
  }

  async function handleConfirm() {
    if (isSubmitting) return
    setSubmissionError(false)
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

  const steps = [
    { number: 1, label: "Purpose" },
    { number: 2, label: "Date" },
    { number: 3, label: "Time" },
    { number: 4, label: "Details" },
    { number: 5, label: "Confirm" },
  ]

  const fieldClass =
    "w-full px-4 py-3.5 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <section className="flex flex-1 items-center py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center rounded-2xl border border-border bg-card p-10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-rose text-primary">
                <Icon name="people" size={24} />
              </div>
              <h1 className="mb-4 font-display text-3xl text-foreground sm:text-4xl">
                Request received
              </h1>
              
              <div className="mb-6 rounded-lg bg-secondary/50 p-4 border border-border mt-6">
                {contextService && (
                  <p className="text-sm font-medium text-foreground">
                    Service: {contextService.name}
                  </p>
                )}
                {contextProduct && !contextService && (
                  <p className="text-sm font-medium text-foreground">
                    Product: {contextProduct.name}
                  </p>
                )}
                {contextSolution && !contextService && !contextProduct && (
                  <p className="text-sm font-medium text-foreground">
                    Solution: {contextSolution.name}
                  </p>
                )}
              </div>
              
              <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                A member of our team will review your request and reach out to
                confirm your session. Expect a response within one business day.
              </p>
              
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
                <Button as="link" to="/contact" variant="secondary">
                  Contact Us
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
      {/* Header */}
      <section className="relative border-b border-border bg-card overflow-hidden">
        <div className="absolute inset-0 bg-secondary/50" />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Consultation
            </p>
            <h1 className="mb-6 font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
              Schedule a consultation
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              A focused conversation with our team to explore how Ricoz products
              and services can support your organization.
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
                Scheduling with{" "}
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
                Scheduling a consultation about{" "}
                <span className="font-semibold">
                  {contextService
                    ? contextService.name
                    : contextSolution
                      ? contextSolution.name
                      : contextProduct!.name}
                </span>
                <span className="text-muted-foreground">
                  {" "}
                  —{" "}
                  {contextService
                    ? contextService.tagline
                    : contextSolution
                      ? contextSolution.tagline
                      : contextProduct!.tagline}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Step indicator */}
      <section className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Consultation steps"
            className="flex items-center justify-between sm:justify-start gap-1"
          >
            {steps.map((s, i) => (
              <div key={s.number} className="flex items-center gap-1 flex-1 sm:flex-none">
                <div
                  className={[
                    "flex flex-1 sm:flex-none items-center justify-center sm:justify-start gap-2 rounded-full sm:rounded-md px-3 py-2 text-xs font-medium transition-colors",
                    step === s.number
                      ? "bg-foreground text-background shadow-sm"
                      : step > s.number
                        ? "text-primary bg-rose/50"
                        : "text-muted-foreground bg-secondary/50",
                  ].join(" ")}
                >
                  {step > s.number ? (
                    <Icon name="arrow" size={14} />
                  ) : (
                    <span>{s.number}</span>
                  )}
                  <span className="hidden sm:inline">{s.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <span className="mx-2 text-border sm:block hidden">—</span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </section>

      {/* Steps */}
      <section className="flex-1 py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Step 1: Purpose */}
            {step === 1 && (
              <div>
                <h2 className="mb-4 font-display text-3xl text-foreground">
                  What is the purpose of your consultation?
                </h2>
                <p className="mb-10 text-muted-foreground">
                  This helps us prepare the right people and materials for your
                  session.
                </p>
                <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {purposes.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPurpose(p.id)}
                      className={[
                        "flex flex-col items-start rounded-xl border p-6 text-left transition-all duration-200",
                        purpose === p.id
                          ? "border-primary bg-rose/10 shadow-sm"
                          : "border-border bg-card hover:border-foreground/30 hover:bg-secondary/50",
                      ].join(" ")}
                      aria-pressed={purpose === p.id}
                    >
                      <div className={[
                        "mb-4 flex size-10 items-center justify-center rounded-lg",
                        purpose === p.id ? "bg-primary text-background" : "bg-secondary text-muted-foreground"
                      ].join(" ")}>
                        <Icon name={p.icon} size={20} />
                      </div>
                      <p className="mb-2 font-semibold text-foreground">
                        {p.label}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {p.description}
                      </p>
                    </button>
                  ))}
                </div>
                <div className="flex justify-end pt-6 border-t border-border">
                  <Button
                    variant="primary"
                    size="lg"
                    disabled={!purpose}
                    onClick={() => setStep(2)}
                  >
                    Continue to Date
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Date */}
            {step === 2 && (
              <div>
                <h2 className="mb-4 font-display text-3xl text-foreground">
                  Select a preferred date
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Available dates are shown below. Greyed days are unavailable.
                </p>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm mb-8">
                  {/* Month selector */}
                  <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2">
                    {months.map((m) => (
                      <button
                        key={m}
                        onClick={() => {
                          setSelectedMonth(m)
                          setSelectedDay(null)
                        }}
                        className={[
                          "rounded-full px-5 py-2 text-sm font-medium transition-all",
                          selectedMonth === m
                            ? "bg-foreground text-background shadow-sm"
                            : "border border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                        ].join(" ")}
                      >
                        {m} 2026
                      </button>
                    ))}
                  </div>

                  {/* Day grid */}
                  <div className="grid grid-cols-7 gap-2">
                    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                      <div
                        key={i}
                        className="py-2 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                      >
                        {d}
                      </div>
                    ))}
                    {/* Offset for month start */}
                    <div className="col-span-2" />
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
                      (day) => {
                        const isUnavailable = unavailableDays.includes(day)
                        const isSelected = selectedDay === day
                        return (
                          <button
                            key={day}
                            onClick={() => !isUnavailable && setSelectedDay(day)}
                            disabled={isUnavailable}
                            className={[
                              "flex aspect-square items-center justify-center rounded-lg text-sm transition-all duration-200",
                              isUnavailable
                                ? "cursor-not-allowed text-muted-foreground/30"
                                : isSelected
                                  ? "bg-primary font-semibold text-background shadow-sm"
                                  : "text-foreground hover:bg-secondary hover:text-primary",
                            ].join(" ")}
                            aria-label={`${selectedMonth} ${day}`}
                            aria-pressed={isSelected}
                          >
                            {day}
                          </button>
                        )
                      },
                    )}
                  </div>
                </div>

                <div className="flex justify-between pt-6 border-t border-border">
                  <Button variant="secondary" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    disabled={!selectedDay}
                    onClick={() => setStep(3)}
                  >
                    Continue to Time
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Time */}
            {step === 3 && (
              <div>
                <h2 className="mb-4 font-display text-3xl text-foreground">
                  Select a preferred time
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Available slots for <span className="font-semibold text-foreground">{selectedMonth} {selectedDay}</span>. All times
                  are shown in your local timezone.
                </p>

                <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {timeSlots.map((slot) => {
                    const isBooked = bookedSlots.includes(slot)
                    const isSelected = selectedTime === slot
                    return (
                      <button
                        key={slot}
                        onClick={() => !isBooked && setSelectedTime(slot)}
                        disabled={isBooked}
                        className={[
                          "rounded-xl border py-4 text-sm transition-all duration-200",
                          isBooked
                            ? "cursor-not-allowed border-border/50 bg-secondary/30 text-muted-foreground/50"
                            : isSelected
                              ? "border-primary bg-rose/10 font-semibold text-primary shadow-sm"
                              : "border-border bg-card text-foreground hover:border-foreground/30 hover:shadow-sm",
                        ].join(" ")}
                        aria-pressed={isSelected}
                        aria-disabled={isBooked}
                      >
                        {slot}
                      </button>
                    )
                  })}
                </div>

                <div className="flex justify-between pt-6 border-t border-border">
                  <Button variant="secondary" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    disabled={!selectedTime}
                    onClick={() => setStep(4)}
                  >
                    Continue to Details
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Details */}
            {step === 4 && (
              <div>
                <h2 className="mb-4 font-display text-3xl text-foreground">
                  Your details
                </h2>
                <p className="mb-8 text-muted-foreground">
                  We use this to confirm your booking and prepare for the
                  session.
                </p>

                <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm mb-8">
                  <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="c-name"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        value={details.name}
                        onChange={(e) =>
                          setDetails((d) => ({ ...d, name: e.target.value }))
                        }
                        className={[
                          fieldClass,
                          detailErrors.name ? "border-primary bg-rose/10" : "",
                        ].join(" ")}
                        placeholder="Your full name"
                      />
                      {detailErrors.name && (
                        <p className="mt-1.5 text-xs font-medium text-primary">
                          {detailErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="c-org"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Organization
                      </label>
                      <input
                        id="c-org"
                        type="text"
                        value={details.organization}
                        onChange={(e) =>
                          setDetails((d) => ({
                            ...d,
                            organization: e.target.value,
                          }))
                        }
                        className={fieldClass}
                        placeholder="Your organization"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="c-email"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        value={details.email}
                        onChange={(e) =>
                          setDetails((d) => ({ ...d, email: e.target.value }))
                        }
                        className={[
                          fieldClass,
                          detailErrors.email ? "border-primary bg-rose/10" : "",
                        ].join(" ")}
                        placeholder="your@email.com"
                      />
                      {detailErrors.email && (
                        <p className="mt-1.5 text-xs font-medium text-primary">
                          {detailErrors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="c-phone"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Phone
                      </label>
                      <input
                        id="c-phone"
                        type="tel"
                        value={details.phone}
                        onChange={(e) =>
                          setDetails((d) => ({ ...d, phone: e.target.value }))
                        }
                        className={fieldClass}
                        placeholder="+1 (000) 000 0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="c-notes"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Additional notes
                    </label>
                    <textarea
                      id="c-notes"
                      value={details.notes}
                      onChange={(e) =>
                        setDetails((d) => ({ ...d, notes: e.target.value }))
                      }
                      rows={4}
                      className={[fieldClass, "resize-none"].join(" ")}
                      placeholder="Anything you would like us to know in advance…"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-6 border-t border-border">
                  <Button variant="secondary" onClick={() => setStep(3)}>
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => {
                      if (validateDetails()) setStep(5)
                    }}
                  >
                    Review booking
                  </Button>
                </div>
              </div>
            )}

            {/* Step 5: Confirmation */}
            {step === 5 && (
              <div>
                <h2 className="mb-4 font-display text-3xl text-foreground">
                  Review your booking
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Please confirm the details below before submitting.
                </p>

                <div className="mb-8 rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm">
                  <h3 className="mb-6 border-b border-border pb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    Booking Summary
                  </h3>
                  <dl className="grid gap-y-6">
                    {[
                      contextService
                        ? { label: "Service", value: contextService.name }
                        : contextSolution
                          ? { label: "Solution", value: contextSolution.name }
                          : contextProduct
                            ? { label: "Product", value: contextProduct.name }
                            : null,
                      {
                        label: "Purpose",
                        value: purposes.find((p) => p.id === purpose)?.label,
                      },
                      {
                        label: "Date",
                        value: `${selectedMonth} ${selectedDay}, 2026`,
                      },
                      { label: "Time", value: selectedTime },
                      { label: "Name", value: details.name },
                      { label: "Email", value: details.email },
                      details.organization
                        ? { label: "Organization", value: details.organization }
                        : null,
                      details.phone
                        ? { label: "Phone", value: details.phone }
                        : null,
                    ]
                      .filter(Boolean)
                      .map((item) => (
                        <div
                          key={item!.label}
                          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                        >
                          <dt className="text-sm font-medium text-muted-foreground">
                            {item!.label}
                          </dt>
                          <dd className="text-sm font-semibold text-foreground sm:text-right">
                            {item!.value}
                          </dd>
                        </div>
                      ))}
                  </dl>
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
                        We couldn't confirm your booking.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Please try again or contact us directly.
                      </p>
                    </div>
                  </div>
                )}

                <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                  By confirming, you agree that a member of the Ricoz team will
                  contact you to finalize the session. No automated calendar
                  invite will be sent until your session is confirmed by our
                  team.
                </p>

                <div className="flex justify-between pt-6 border-t border-border">
                  <Button variant="secondary" onClick={() => setStep(4)}>
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleConfirm}
                    disabled={isSubmitting}
                    aria-disabled={isSubmitting}
                  >
                    {isSubmitting ? "Confirming…" : "Confirm Booking"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
