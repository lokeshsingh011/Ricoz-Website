import type { FranchiseTheme, FranchiseNavConfig } from "./types"

export const defaultFranchiseTheme: FranchiseTheme = {
  primaryAccent: "#C41230",
  background: "#FAFAF8",
  surface: "#FFFFFF",
  text: "#111110",
  mutedText: "#6B6B67",
  border: "#E5E5E0",
  navigationStyle: "light",
  cardStyle: "bordered",
  typographyTreatment: "editorial",
  imageTreatment: "contained",
  buttonTreatment: "solid",
  footerStyle: "dark",
}

export const defaultFranchiseNavigation: FranchiseNavConfig = {
  primary: [
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
  ],
  cta: { label: "Discuss your requirement", href: "" },
}
