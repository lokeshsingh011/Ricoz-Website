import { Link } from "react-router"
import type { Franchise } from "@/data/franchises/types"
import FranchiseDirectorImage from "./FranchiseDirectorImage"

interface Props {
  franchise: Franchise
}

// ─── Mumbai Hero: Dark dramatic, cinematic asymmetric ─────────────────────────

function MumbaiHero({ franchise }: Props) {
  const { hero, director, name, city, contact } = franchise
  return (
    <section
      className="relative bg-[#111110] overflow-hidden"
      style={{ minHeight: "min(640px, 90svh)" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />
      {/* Red accent top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#C41230]"
        aria-hidden="true"
      />
      {/* Diagonal accent */}
      <div
        className="absolute right-[38%] top-0 bottom-0 w-[1px] bg-white/5"
        aria-hidden="true"
      />

      <div
        className="relative max-w-7xl mx-auto flex flex-col lg:flex-row"
        style={{ minHeight: "min(640px, 90svh)" }}
      >
        {/* Left content — 60% */}
        <div className="flex-1 flex flex-col justify-between px-4 sm:px-8 lg:px-16 py-10 sm:py-14 lg:py-24 animate-fade-in-up">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C41230] mb-8">
              {hero.eyebrow}
            </p>
            <h1
              className="font-display font-semibold leading-[1.05] tracking-tight text-white mb-8"
              style={{ fontSize: "clamp(2.25rem,4.5vw,3.75rem)" }}
            >
              {hero.headline}
            </h1>
            <p className="text-[#9B9B97] text-base lg:text-lg leading-relaxed max-w-[44ch] mb-10">
              {hero.statement}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={hero.primaryCta.href}
                className="inline-flex items-center justify-center bg-[#C41230] hover:bg-[#A50F28] text-white text-sm font-medium px-6 py-3 rounded-[3px] transition-colors duration-150"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                to={hero.secondaryCta.href}
                className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white text-sm font-medium px-6 py-3 rounded-[3px] transition-colors duration-150"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="mt-16 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="w-5 h-[1px] bg-[#C41230]" aria-hidden="true" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                {city}, India
              </span>
            </div>
            {contact.phone && (
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="text-[10px] font-mono text-white/30 hover:text-white/60 transition-colors tracking-wide"
              >
                {contact.phone}
              </a>
            )}
            <span className="text-[10px] font-mono text-white/20 tracking-widest hidden xl:block">
              18.9667° N · 72.8333° E
            </span>
          </div>
        </div>

        {/* Right portrait — 40% */}
        <div
          className="hidden lg:block relative shrink-0 border-l border-white/10 overflow-hidden"
          style={{ width: "40%" }}
        >
          <div className="absolute inset-0">
            <FranchiseDirectorImage
              image={director.portrait}
              franchiseName={name}
              city={city}
              directorName={director.name}
              className="w-full h-full"
            />
          </div>
          {/* Red corner detail */}
          <div
            className="absolute top-8 right-8 w-8 h-8 border-t border-r border-[#C41230]/40"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-[#C41230]/40"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Mobile portrait */}
      <div className="lg:hidden relative h-56 border-t border-white/10">
        <FranchiseDirectorImage
          image={director.portrait}
          franchiseName={name}
          city={city}
          directorName={director.name}
          className="w-full h-full"
        />
      </div>
    </section>
  )
}

// ─── Nagpur Hero: Editorial centred, warm optimistic ─────────────────────────

function NagpurHero({ franchise }: Props) {
  const { hero, contact, city } = franchise
  return (
    <section className="relative bg-[#FAFAF8] border-b border-[#E5E5E0] overflow-hidden">
      {/* Decorative large "+" */}
      <div
        className="absolute right-[-2rem] bottom-[-4rem] text-[clamp(20rem,40vw,40rem)] font-display leading-none select-none text-[#C41230]/[0.03] pointer-events-none"
        aria-hidden="true"
      >
        +
      </div>
      {/* Horizontal rule top */}
      <div className="border-b border-[#E5E5E0] px-4 sm:px-8 lg:px-16 py-3 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C41230]">
          Ricoz / Nagpur
        </span>
        <span className="text-[10px] font-mono text-[#C5C5C0] tracking-widest hidden sm:block">
          21.1458° N · 79.0882° E
        </span>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-28 text-center animate-fade-in-up">
        <h1
          className="font-display font-semibold leading-[1.1] tracking-tight text-[#111110] mb-6 mx-auto"
          style={{ fontSize: "clamp(2rem,4vw,3.5rem)", maxWidth: "22ch" }}
        >
          {hero.headline}
        </h1>
        <p className="text-[#6B6B67] text-base lg:text-lg leading-relaxed max-w-[48ch] mx-auto mb-10">
          {hero.statement}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to={hero.primaryCta.href}
            className="inline-flex items-center justify-center bg-[#C41230] hover:bg-[#A50F28] text-white text-sm font-medium px-6 py-3 rounded-[3px] transition-colors duration-150"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            to={hero.secondaryCta.href}
            className="inline-flex items-center justify-center border border-[#E5E5E0] hover:border-[#111110] text-[#111110] text-sm font-medium px-6 py-3 rounded-[3px] transition-colors duration-150"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>

        <div className="mt-16 pt-6 border-t border-[#E5E5E0] flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <span className="w-4 h-[1px] bg-[#C41230]" aria-hidden="true" />
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B97]">
              {city}, India
            </span>
          </div>
          {contact.phone && (
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="text-[10px] font-mono text-[#B0ADA8] hover:text-[#6B6B67] transition-colors tracking-wide"
            >
              {contact.phone}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

// ─── Delhi Hero: Institutional split, authoritative ───────────────────────────

function DelhiHero({ franchise }: Props) {
  const { hero, director, name, city, contact } = franchise
  return (
    <section className="relative overflow-hidden border-b border-[#E5E5E0]">
      {/* Top black band */}
      <div className="bg-[#111110] px-4 sm:px-8 lg:px-16 py-3 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
          {hero.eyebrow}
        </span>
        <span className="text-[10px] font-mono text-white/25 tracking-widest hidden sm:block">
          28.6139° N · 77.2090° E
        </span>
      </div>

      {/* Main two-column */}
      <div className="bg-[#FAFAF8] grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E5E0]">
        {/* Left: headline + CTAs */}
        <div className="px-4 sm:px-8 lg:px-16 py-10 sm:py-14 lg:py-24 flex flex-col justify-between animate-fade-in-left">
          <div>
            <h1
              className="font-display font-semibold leading-[1.1] tracking-tight text-[#111110] mb-6"
              style={{ fontSize: "clamp(1.875rem,3.5vw,3rem)" }}
            >
              {hero.headline}
            </h1>
            <p className="text-[#6B6B67] text-base leading-relaxed max-w-[44ch] mb-10">
              {hero.statement}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={hero.primaryCta.href}
                className="inline-flex items-center justify-center bg-[#C41230] hover:bg-[#A50F28] text-white text-sm font-medium px-6 py-3 rounded-[3px] transition-colors duration-150"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                to={hero.secondaryCta.href}
                className="inline-flex items-center justify-center border border-[#E5E5E0] hover:border-[#111110] text-[#111110] text-sm font-medium px-6 py-3 rounded-[3px] transition-colors duration-150"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>
          {contact.phone && (
            <div className="mt-12 pt-6 border-t border-[#E5E5E0] flex items-center gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B97]">
                {city}
              </span>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="text-[11px] font-mono text-[#B0ADA8] hover:text-[#6B6B67] transition-colors"
              >
                {contact.phone}
              </a>
            </div>
          )}
        </div>

        {/* Right: director portrait + strategy markers */}
        <div
          className="relative overflow-hidden animate-fade-in-right"
          style={{ minHeight: "400px" }}
        >
          <FranchiseDirectorImage
            image={director.portrait}
            franchiseName={name}
            city={city}
            directorName={director.name}
            className="w-full h-full absolute inset-0"
          />
          {/* Capability tags overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
            {["Strategy", "Technology", "Execution"].map((cap) => (
              <span
                key={cap}
                className="px-3 py-1.5 bg-[#111110]/80 backdrop-blur-sm text-white/80 text-[10px] font-semibold uppercase tracking-widest rounded-[2px]"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Kalyan Hero: Warm, human, relationship-led ────────────────────────────────

function KalyanHero({ franchise }: Props) {
  const { hero, contact, city } = franchise
  return (
    <section
      className="relative border-b border-[#E5E5E0] overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FDF9F4 0%, #F7F5F1 100%)",
      }}
    >
      {/* Soft left accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C41230]/60 via-[#C41230]/20 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-10 sm:py-14 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-center">
          {/* Left: personal content */}
          <div className="animate-fade-in-up">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C41230] mb-6">
              {hero.eyebrow}
            </p>
            <h1
              className="font-display font-semibold leading-[1.15] tracking-tight text-[#111110] mb-6"
              style={{ fontSize: "clamp(1.875rem,3.5vw,2.875rem)" }}
            >
              {hero.headline}
            </h1>
            <p className="text-[#6B6B67] text-base leading-relaxed max-w-[48ch] mb-10">
              {hero.statement}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={hero.primaryCta.href}
                className="inline-flex items-center justify-center bg-[#C41230] hover:bg-[#A50F28] text-white text-sm font-medium px-6 py-3 rounded-[3px] transition-colors duration-150"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                to={hero.secondaryCta.href}
                className="inline-flex items-center justify-center border border-[#D9D6D0] hover:border-[#111110] text-[#3A3A3A] text-sm font-medium px-6 py-3 rounded-[3px] transition-colors duration-150"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Right: contact / local card */}
          <div className="border border-[#E5E5E0] bg-white/70 backdrop-blur-sm rounded-[4px] p-7 animate-fade-in-right">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9B9B97] mb-5">
              Reach us in {city}
            </p>
            <div className="flex flex-col gap-4">
              {contact.phone && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#B0ADA8] mb-1">
                    Phone
                  </p>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="text-sm font-medium text-[#111110] hover:text-[#C41230] transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              )}
              {contact.email && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#B0ADA8] mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm font-medium text-[#111110] hover:text-[#C41230] transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              )}
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#B0ADA8] mb-1">
                  Location
                </p>
                <p className="text-sm text-[#3A3A3A]">
                  {city}, Maharashtra, India
                </p>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-[#F0EDE8]">
              <Link
                to="/consultation?franchise=kalyan"
                className="text-xs font-medium text-[#C41230] hover:text-[#A50F28] transition-colors"
              >
                Book a local consultation →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom city marker */}
        <div className="mt-12 pt-6 border-t border-[#E5E5E0] flex items-center gap-3">
          <span className="w-4 h-[1px] bg-[#C41230]" aria-hidden="true" />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B97]">
            {city}, India · 19.2437° N · 73.1355° E
          </span>
        </div>
      </div>
    </section>
  )
}

// ─── Kolkata Hero: Cultural, typographic, intelligent ────────────────────────

function KolkataHero({ franchise }: Props) {
  const { hero, director, name, city, contact } = franchise
  return (
    <section className="relative bg-[#F7F5F1] border-b border-[#E5E5E0] overflow-hidden">
      {/* Large decorative letterform */}
      <div
        className="absolute -bottom-16 -right-8 font-display font-semibold leading-none select-none pointer-events-none text-[#111110]/[0.035]"
        style={{ fontSize: "clamp(18rem,35vw,36rem)" }}
        aria-hidden="true"
      >
        K
      </div>

      {/* Top rule */}
      <div className="border-b border-[#E5E5E0] px-4 sm:px-8 lg:px-16 py-3 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C41230]">
          Ricoz / Kolkata
        </span>
        <span className="text-[10px] font-mono text-[#C5C5C0] tracking-widest hidden sm:block">
          22.5726° N · 88.3639° E
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-10 sm:py-14 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_1px_380px] gap-0 items-start">
          {/* Left: large headline */}
          <div className="lg:pr-16 animate-fade-in-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C41230] mb-8">
              {hero.eyebrow}
            </p>
            <h1
              className="font-display font-semibold leading-[1.1] tracking-tight text-[#111110]"
              style={{ fontSize: "clamp(2rem,4vw,3.5rem)", maxWidth: "20ch" }}
            >
              {hero.headline}
            </h1>
          </div>

          {/* Divider — desktop only */}
          <div
            className="hidden lg:block w-[1px] bg-[#E5E5E0] self-stretch"
            aria-hidden="true"
          />

          {/* Right: statement + CTAs + contact */}
          <div className="lg:pl-16 mt-10 lg:mt-0 animate-fade-in-right">
            <p className="text-[#6B6B67] text-base leading-relaxed mb-8">
              {hero.statement}
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 mb-10">
              <Link
                to={hero.primaryCta.href}
                className="inline-flex items-center justify-center bg-[#C41230] hover:bg-[#A50F28] text-white text-sm font-medium px-6 py-3 rounded-[3px] transition-colors duration-150"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                to={hero.secondaryCta.href}
                className="inline-flex items-center justify-center border border-[#E5E5E0] hover:border-[#111110] text-[#111110] text-sm font-medium px-6 py-3 rounded-[3px] transition-colors duration-150"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>

            {/* Contact details */}
            <div className="border-t border-[#E5E5E0] pt-6 flex flex-col gap-3">
              {contact.phone && (
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 group"
                >
                  <span className="text-[10px] uppercase tracking-widest text-[#B0ADA8] w-14 shrink-0">
                    Phone
                  </span>
                  <span className="text-sm font-medium text-[#111110] group-hover:text-[#C41230] transition-colors">
                    {contact.phone}
                  </span>
                </a>
              )}
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 group"
                >
                  <span className="text-[10px] uppercase tracking-widest text-[#B0ADA8] w-14 shrink-0">
                    Email
                  </span>
                  <span className="text-sm font-medium text-[#111110] group-hover:text-[#C41230] transition-colors">
                    {contact.email}
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Director portrait — bottom strip on mobile */}
        <div className="mt-16 border-t border-[#E5E5E0] pt-8 lg:hidden">
          <div className="h-56 relative rounded-[4px] overflow-hidden">
            <FranchiseDirectorImage
              image={director.portrait}
              franchiseName={name}
              city={city}
              directorName={director.name}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function FranchiseHero({ franchise }: Props) {
  switch (franchise.slug) {
    case "mumbai":
      return <MumbaiHero franchise={franchise} />
    case "nagpur":
      return <NagpurHero franchise={franchise} />
    case "delhi":
      return <DelhiHero franchise={franchise} />
    case "kalyan":
      return <KalyanHero franchise={franchise} />
    case "kolkata":
      return <KolkataHero franchise={franchise} />
    default:
      return <NagpurHero franchise={franchise} />
  }
}
