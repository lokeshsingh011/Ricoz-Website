/**
 * Admin data types — enquiry, consultation, and customer relationship contracts.
 *
 * These types define the data architecture for Flows 49–58.
 * The structures are designed so a future backend/CRM can replace the
 * demo data layer without changing Admin UI components.
 */

// ─── Enquiry (Flow 49) ────────────────────────────────────────────────────────

export type EnquiryStatus = "new" | "in-review" | "contacted" | "follow-up" | "closed"
export type EnquiryType = "general" | "product" | "service" | "solution"

export interface Enquiry {
  id: string
  type: EnquiryType
  status: EnquiryStatus
  submittedAt: string // ISO timestamp
  // Customer
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  // Context
  productSlug?: string
  serviceSlug?: string
  solutionSlug?: string
  // Operational
  assignedTo?: string // Future: user ID or team ID
  followUpRequired?: boolean
}

// ─── Consultation record (Flow 50) ───────────────────────────────────────────

export type ConsultationStatus = "booked" | "confirmed" | "reminder-sent" | "meeting" | "follow-up" | "completed"

export type ConsultationPurpose = "product-demo" | "service-inquiry" | "solution-discovery" | "general"

export interface ConsultationRecord {
  id: string
  status: ConsultationStatus
  createdAt: string // ISO timestamp
  // Customer
  name: string
  email: string
  phone?: string
  company?: string
  // Booking
  purpose: ConsultationPurpose
  preferredDate: string // e.g. "September 12, 2026"
  preferredTime: string // e.g. "10:00 AM"
  notes?: string
  // Context
  productSlug?: string
  serviceSlug?: string
  solutionSlug?: string
  // Operational
  assignedTo?: string
  followUpRequired?: boolean
  scheduledDate?: string // May differ from preferredDate once confirmed
  scheduledTime?: string
  // Relationship
  enquiryId?: string // Link to originating enquiry if applicable
  customerId?: string // Link to customer record if established
}

// ─── Customer relationship (Flow 51) ─────────────────────────────────────────

export type RelationshipStage = "new" | "engaged" | "follow-up" | "ongoing"

export interface CustomerRelationship {
  id: string
  stage: RelationshipStage
  createdAt: string
  // Identity
  name: string
  email: string
  phone?: string
  company?: string
  // Linked interactions (IDs)
  enquiryIds: string[]
  consultationIds: string[]
  // Interests
  productSlugs: string[]
  serviceSlugs: string[]
  solutionSlugs: string[]
  // Next action
  nextAction?: string
}
