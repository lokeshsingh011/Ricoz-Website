/**
 * Demo data for Admin prototype (Flows 49–58).
 *
 * This data represents a small set of example records for the prototype.
 * It is clearly marked as demonstration data. Replace with API calls / real
 * persistence when a backend is established.
 *
 * No real customer information is used.
 */

import type { Enquiry, ConsultationRecord, CustomerRelationship } from "./types"

// ─── Demo enquiries / leads ───────────────────────────────────────────────────

export const demoEnquiries: Enquiry[] = [
  {
    id: "enq-001",
    type: "product",
    status: "new",
    submittedAt: "2026-08-28T09:14:00Z",
    name: "Alex Morgan",
    email: "alex.morgan@example.org",
    phone: "+44 7700 900001",
    company: "Meridian Group",
    message:
      "We are evaluating enterprise analytics tooling. Could you walk us through the analytics product suite?",
    productSlug: "enterprise-analytics-suite",
    followUpRequired: true,
  },
  {
    id: "enq-002",
    type: "service",
    status: "in-review",
    submittedAt: "2026-08-25T14:32:00Z",
    name: "Sam Okafor",
    email: "sam.okafor@horisontech.io",
    company: "Horison Technology",
    message:
      "We need advisory support for a large-scale digital transformation programme beginning Q1 next year.",
    serviceSlug: "digital-transformation-strategy",
    followUpRequired: true,
  },
  {
    id: "enq-003",
    type: "general",
    status: "contacted",
    submittedAt: "2026-08-20T11:05:00Z",
    name: "Jordan Blake",
    email: "j.blake@crestline.co",
    phone: "+44 7700 900003",
    company: "Crestline Partners",
    message:
      "Looking to understand the Ricoz ecosystem broadly before a board-level discussion next month.",
    followUpRequired: false,
  },
  {
    id: "enq-004",
    type: "solution",
    status: "follow-up",
    submittedAt: "2026-08-15T16:48:00Z",
    name: "Priya Sharma",
    email: "priya.sharma@novaharbor.com",
    company: "Nova Harbour Ltd",
    message:
      "Interested in the data governance solution — we have a compliance deadline in six months.",
    solutionSlug: "data-governance",
    followUpRequired: true,
  },
  {
    id: "enq-005",
    type: "product",
    status: "closed",
    submittedAt: "2026-08-01T08:20:00Z",
    name: "Chris Delacroix",
    email: "c.delacroix@verdelogic.eu",
    company: "Verde Logic",
    message:
      "Evaluating workflow automation tools. Went with an alternative vendor for this cycle.",
    followUpRequired: false,
  },
]

// ─── Demo consultations ───────────────────────────────────────────────────────

export const demoConsultations: ConsultationRecord[] = [
  {
    id: "con-001",
    status: "booked",
    createdAt: "2026-08-29T10:00:00Z",
    name: "Alex Morgan",
    email: "alex.morgan@example.org",
    company: "Meridian Group",
    purpose: "product-demo",
    preferredDate: "September 12, 2026",
    preferredTime: "10:00 AM",
    notes: "Prefer a technical overview with time for Q&A.",
    productSlug: "enterprise-analytics-suite",
    enquiryId: "enq-001",
    followUpRequired: false,
  },
  {
    id: "con-002",
    status: "confirmed",
    createdAt: "2026-08-26T09:15:00Z",
    name: "Sam Okafor",
    email: "sam.okafor@horisontech.io",
    company: "Horison Technology",
    purpose: "service-inquiry",
    preferredDate: "September 9, 2026",
    preferredTime: "2:00 PM",
    serviceSlug: "digital-transformation-strategy",
    enquiryId: "enq-002",
    scheduledDate: "September 9, 2026",
    scheduledTime: "2:00 PM",
    followUpRequired: false,
  },
  {
    id: "con-003",
    status: "follow-up",
    createdAt: "2026-08-10T14:00:00Z",
    name: "Priya Sharma",
    email: "priya.sharma@novaharbor.com",
    company: "Nova Harbour Ltd",
    purpose: "solution-discovery",
    preferredDate: "August 22, 2026",
    preferredTime: "11:00 AM",
    solutionSlug: "data-governance",
    enquiryId: "enq-004",
    scheduledDate: "August 22, 2026",
    scheduledTime: "11:00 AM",
    followUpRequired: true,
    customerId: "cus-001",
  },
]

// ─── Demo customers ───────────────────────────────────────────────────────────

export const demoCustomers: CustomerRelationship[] = [
  {
    id: "cus-001",
    stage: "follow-up",
    createdAt: "2026-08-10T14:00:00Z",
    name: "Priya Sharma",
    email: "priya.sharma@novaharbor.com",
    company: "Nova Harbour Ltd",
    enquiryIds: ["enq-004"],
    consultationIds: ["con-003"],
    productSlugs: [],
    serviceSlugs: [],
    solutionSlugs: ["data-governance"],
    nextAction:
      "Send data governance capability overview and proposed engagement outline.",
  },
  {
    id: "cus-002",
    stage: "engaged",
    createdAt: "2026-08-25T14:32:00Z",
    name: "Sam Okafor",
    email: "sam.okafor@horisontech.io",
    company: "Horison Technology",
    enquiryIds: ["enq-002"],
    consultationIds: ["con-002"],
    productSlugs: [],
    serviceSlugs: ["digital-transformation-strategy"],
    solutionSlugs: [],
    nextAction:
      "Prepare programme assessment proposal following confirmed consultation.",
  },
  {
    id: "cus-003",
    stage: "new",
    createdAt: "2026-08-28T09:14:00Z",
    name: "Alex Morgan",
    email: "alex.morgan@example.org",
    company: "Meridian Group",
    enquiryIds: ["enq-001"],
    consultationIds: ["con-001"],
    productSlugs: ["enterprise-analytics-suite"],
    serviceSlugs: [],
    solutionSlugs: [],
  },
]
