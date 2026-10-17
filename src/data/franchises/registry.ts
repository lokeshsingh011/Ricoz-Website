import type { Franchise, FranchiseSlug } from "./types"
import { mumbaiFranchise } from "./mumbai"
import { nagpurFranchise } from "./nagpur"
import { delhiFranchise } from "./delhi"
import { kalyanFranchise } from "./kalyan"
import { kolkataFranchise } from "./kolkata"

export const franchiseRegistry: Record<FranchiseSlug, Franchise> = {
  mumbai: mumbaiFranchise,
  nagpur: nagpurFranchise,
  delhi: delhiFranchise,
  kalyan: kalyanFranchise,
  kolkata: kolkataFranchise,
}

export function getFranchise(slug: string): Franchise | undefined {
  return franchiseRegistry[(slug as FranchiseSlug)]
}

export function getAllFranchises(): Franchise[] {
  return Object.values(franchiseRegistry)
}

export function getActiveFranchises(): Franchise[] {
  return getAllFranchises().filter((f) => f.status === "active")
}
