import { Permit } from "../types/permits";

export const PERMITS: Permit[] = [
  {
    id: "1",
    name: "Food Service Establishment Permit",
    issuingAgency: "NYC Department of Health and Mental Hygiene (DOHMH)",
    description: "Required permit for all food service establishments in NYC",
    applicationUrl: "https://www1.nyc.gov/nycbusiness/description/food-service-establishment-permit",
    renewalPeriod: "Annual",
    cost: "$280",
    prerequisites: [
      "Food Protection Certificate",
      "Sales Tax ID",
      "Certificate of Occupancy",
    ],
    status: "active",
    expirationDate: "2024-12-31",
    lastRenewalDate: "2023-12-31",
    nextRenewalDate: "2024-12-31",
    requiredDocuments: [
      {
        id: "doc1",
        name: "Food Protection Certificate",
        status: "missing",
      },
      {
        id: "doc2",
        name: "Certificate of Occupancy",
        status: "uploaded",
        uploadDate: "2023-12-01",
      }
    ]
  },
  {
    id: "2",
    name: "Sign Permit",
    issuingAgency: "NYC Department of Buildings (DOB)",
    description: "Required for installing or modifying business signage",
    applicationUrl: "https://www1.nyc.gov/site/buildings/business/permits.page",
    renewalPeriod: "Annual",
    cost: "$200",
    prerequisites: ["Building Owner Authorization", "Sign Drawings"],
    status: "pending",
    expirationDate: "2024-12-31",
    lastRenewalDate: "2023-12-31",
    nextRenewalDate: "2024-12-31",
    requiredDocuments: [
      {
        id: "doc3",
        name: "Sign Drawings",
        status: "missing",
      }
    ]
  },
  {
    id: "3",
    name: "Sidewalk Cafe Permit",
    issuingAgency: "NYC Department of Consumer Affairs (DCA)",
    description: "Required for operating an outdoor cafe on city sidewalks",
    applicationUrl: "https://www1.nyc.gov/site/dca/businesses/license-checklist-sidewalk-cafe.page",
    renewalPeriod: "Biennial",
    cost: "$510+",
    prerequisites: ["Site Plan", "Insurance Certificate"],
    status: "active",
    expirationDate: "2025-12-31",
    lastRenewalDate: "2023-12-31",
    nextRenewalDate: "2025-12-31",
    requiredDocuments: []
  },
  {
    id: "4",
    name: "Music and Entertainment License",
    issuingAgency: "NYC Department of Consumer Affairs (DCA)",
    description: "Required for venues providing music or entertainment",
    applicationUrl: "https://www1.nyc.gov/site/dca/businesses/licenses.page",
    renewalPeriod: "Annual",
    cost: "$250",
    prerequisites: ["Certificate of Occupancy", "Sound Level Test"],
    status: "expired",
    expirationDate: "2023-12-31",
    lastRenewalDate: "2022-12-31",
    nextRenewalDate: "2024-12-31",
    requiredDocuments: []
  },
  {
    id: "5",
    name: "Fire Safety Permit",
    issuingAgency: "Fire Department of New York (FDNY)",
    description: "Required for fire safety compliance",
    applicationUrl: "https://www1.nyc.gov/site/fdny/business/permits/permits.page",
    renewalPeriod: "Annual",
    cost: "$200",
    prerequisites: ["Fire Inspection", "Emergency Action Plan"],
    status: "active",
    expirationDate: "2024-06-30",
    lastRenewalDate: "2023-06-30",
    nextRenewalDate: "2024-06-30",
    requiredDocuments: []
  }
];