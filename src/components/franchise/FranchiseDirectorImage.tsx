import { useState } from "react"
import type { ImageReference } from "@/data/franchises/types"

interface Props {
  image?: ImageReference | null
  franchiseName: string
  city: string
  directorName?: string | null
  className?: string
  objectPosition?: string
}

function EditorialPlaceholder({
  franchiseName,
  city,
}: {
  franchiseName: string
  city: string
}) {
  return (
    <div
      className="relative w-full h-full bg-[#F0EEE8] flex flex-col items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      {/* Architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#111110 1px, transparent 1px), linear-gradient(90deg, #111110 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Vertical rule */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-[#C41230]/20" />
      {/* Frame */}
      <div className="relative z-10 flex flex-col items-center gap-4 px-8 text-center">
        <div className="w-8 h-px bg-[#C41230]" />
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C41230] mb-1">
            {franchiseName}
          </p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8A8A84]">
            Director Portrait
          </p>
          <p className="text-[10px] text-[#A0A09B] mt-1 tracking-wide">
            Image coming soon
          </p>
        </div>
        <div className="w-8 h-px bg-[#E5E5E0]" />
        <p className="text-[9px] font-mono text-[#C5C5C0] uppercase tracking-widest">
          {city}
        </p>
      </div>
    </div>
  )
}

export default function FranchiseDirectorImage({
  image,
  franchiseName,
  city,
  directorName,
  className = "w-full h-full",
  objectPosition = "center top",
}: Props) {
  const [hasError, setHasError] = useState(false)

  const hasSrc = image?.src && !hasError
  const alt = directorName
    ? `${directorName}, Franchise Director of ${franchiseName}`
    : (image?.alt ?? `${franchiseName} franchise director`)

  if (!hasSrc) {
    return (
      <div className={className}>
        <EditorialPlaceholder franchiseName={franchiseName} city={city} />
      </div>
    )
  }

  return (
    <div className={className}>
      <img
        src={image!.src!}
        alt={alt}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover"
        style={{ objectPosition }}
      />
    </div>
  )
}
