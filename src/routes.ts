import { createBrowserRouter } from "react-router"
import Root from "./pages/Root"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetail from "./templates/ProductDetail"
import ProductCategory from "./pages/ProductCategory"
import Services from "./pages/Services"
import ServiceDetail from "./templates/ServiceDetail"
import ServiceCategory from "./pages/ServiceCategory"
import Resources from "./pages/Resources"
import ResourceTypeList from "./pages/ResourceTypeList"
import CaseStudies from "./pages/CaseStudies"
import CaseStudyDetail from "./templates/CaseStudyDetail"
import ResourceDetail from "./templates/ResourceDetail"
import Contact from "./pages/Contact"
import Consultation from "./pages/Consultation"
import ComingSoon from "./pages/ComingSoon"
import NotFound from "./pages/NotFound"
import Solutions from "./pages/Solutions"
import SolutionDetail from "./templates/SolutionDetail"
import About from "./pages/About"
import Leadership from "./pages/Leadership"
import Careers from "./pages/Careers"
import Franchise, { FranchiseIndex } from "./pages/Franchise"
import FranchiseShell from "./pages/FranchiseShell"

// Portal
import PortalRoot from "./pages/portal/PortalRoot"
import PortalIndex from "./pages/portal/PortalIndex"
import PortalLogin from "./pages/portal/PortalLogin"
import PortalShell from "./components/portal/PortalShell"
import PortalDashboard from "./pages/portal/PortalDashboard"
import PortalEnquiries from "./pages/portal/PortalEnquiries"
import PortalConsultations from "./pages/portal/PortalConsultations"
import PortalProducts from "./pages/portal/PortalProducts"
import PortalServices from "./pages/portal/PortalServices"
import PortalProfile from "./pages/portal/PortalProfile"
import PortalSupport from "./pages/portal/PortalSupport"

// Admin
import AdminLogin from "./pages/admin/AdminLogin"
import AdminRoot from "./pages/admin/AdminRoot"
import AdminDashboard from "./pages/admin/AdminDashboard"
import AdminLeads from "./pages/admin/AdminLeads"
import AdminLeadDetail from "./pages/admin/AdminLeadDetail"
import AdminConsultations from "./pages/admin/AdminConsultations"
import AdminConsultationDetail from "./pages/admin/AdminConsultationDetail"
import AdminCustomers from "./pages/admin/AdminCustomers"
import AdminCustomerDetail from "./pages/admin/AdminCustomerDetail"

// Admin catalogue modules — imported lazily to allow agent to finish writing them.
// Temporarily use ComingSoon until agent completes; replace below once files exist.
import AdminProducts from "./pages/admin/AdminProducts"
import AdminProductDetail from "./pages/admin/AdminProductDetail"
import AdminServices from "./pages/admin/AdminServices"
import AdminServiceDetail from "./pages/admin/AdminServiceDetail"
import AdminResources from "./pages/admin/AdminResources"
import AdminResourceDetail from "./pages/admin/AdminResourceDetail"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "products/category/:categorySlug", Component: ProductCategory },
      { path: "products/:slug", Component: ProductDetail },
      { path: "services", Component: Services },
      { path: "services/category/:categorySlug", Component: ServiceCategory },
      { path: "services/:slug", Component: ServiceDetail },
      { path: "solutions", Component: Solutions },
      { path: "solutions/:slug", Component: SolutionDetail },
      { path: "resources", Component: Resources },
      { path: "resources/type/:type", Component: ResourceTypeList },
      { path: "resources/case-studies", Component: CaseStudies },
      { path: "resources/case-studies/:slug", Component: CaseStudyDetail },
      { path: "resources/:slug", Component: ResourceDetail },
      { path: "about", Component: About },
      { path: "leadership", Component: Leadership },
      { path: "careers", Component: Careers },
      { path: "company", Component: About },
      { path: "contact", Component: Contact },
      { path: "consultation", Component: Consultation },
      { path: "consultation/confirmed", Component: ComingSoon },
      { path: "*", Component: NotFound },
    ],
  },

  // Portal — dedicated auth shell (no global Header/Footer)
  {
    path: "/portal",
    Component: PortalRoot,
    children: [
      { index: true, Component: PortalIndex },
      { path: "login", Component: PortalLogin },
      {
        Component: PortalShell,
        children: [
          { path: "dashboard", Component: PortalDashboard },
          { path: "enquiries", Component: PortalEnquiries },
          { path: "consultations", Component: PortalConsultations },
          { path: "products", Component: PortalProducts },
          { path: "services", Component: PortalServices },
          { path: "profile", Component: PortalProfile },
          { path: "support", Component: PortalSupport },
        ],
      },
    ],
  },

  // Franchise routes — dedicated shell (no global Header/Footer)
  {
    path: "/franchise",
    Component: FranchiseShell,
    children: [
      { index: true, Component: FranchiseIndex },
      { path: ":franchiseSlug", Component: Franchise },
    ],
  },

  // Admin login — public, outside protected shell
  { path: "/admin/login", Component: AdminLogin },

  // Protected admin area
  {
    path: "/admin",
    Component: AdminRoot,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "products", Component: AdminProducts },
      { path: "products/:slug", Component: AdminProductDetail },
      { path: "services", Component: AdminServices },
      { path: "services/:slug", Component: AdminServiceDetail },
      { path: "resources", Component: AdminResources },
      { path: "resources/new", Component: AdminResourceDetail },
      { path: "resources/:slug", Component: AdminResourceDetail },
      { path: "leads", Component: AdminLeads },
      { path: "leads/:id", Component: AdminLeadDetail },
      { path: "consultations", Component: AdminConsultations },
      { path: "consultations/:id", Component: AdminConsultationDetail },
      { path: "customers", Component: AdminCustomers },
      { path: "customers/:id", Component: AdminCustomerDetail },
    ],
  },
])
