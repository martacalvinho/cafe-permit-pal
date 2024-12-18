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
  },
  {
    id: "2",
    name: "Food Protection Certificate",
    issuingAgency: "NYC Department of Health and Mental Hygiene (DOHMH)",
    description: "Required for food service establishment supervisors",
    applicationUrl: "https://www1.nyc.gov/nycbusiness/description/food-protection-certificate",
    renewalPeriod: "Every 5 years",
    cost: "$115",
    prerequisites: ["Food Safety Course Completion"],
    status: "active",
    expirationDate: "2028-12-31",
    lastRenewalDate: "2023-12-31",
    nextRenewalDate: "2028-12-31",
  },
  {
    id: "3",
    name: "Sales Tax Certificate of Authority",
    issuingAgency: "NY State Department of Taxation and Finance",
    description: "Required for collecting sales tax",
    applicationUrl: "https://www.tax.ny.gov/bus/ads/webdtf17.htm",
    renewalPeriod: "One-time",
    cost: "Free",
    prerequisites: ["Business Registration"],
    status: "active",
    expirationDate: "N/A",
    lastRenewalDate: "2023-01-01",
    nextRenewalDate: "N/A",
  },
  {
    id: "4",
    name: "Business License",
    issuingAgency: "NYC Department of Consumer Affairs",
    description: "Basic business operation license",
    applicationUrl: "https://www1.nyc.gov/site/dca/businesses/licenses.page",
    renewalPeriod: "Biennial",
    cost: "$150",
    prerequisites: ["EIN Number", "Business Registration"],
    status: "expiring",
    expirationDate: "2024-06-30",
    lastRenewalDate: "2022-06-30",
    nextRenewalDate: "2024-06-30",
  },
  {
    id: "5",
    name: "Certificate of Occupancy",
    issuingAgency: "NYC Department of Buildings",
    description: "Certifies building safety and legal use",
    applicationUrl: "https://www1.nyc.gov/site/buildings/homeowner/certificates-of-occupancy.page",
    renewalPeriod: "One-time",
    cost: "Varies",
    prerequisites: ["Building Inspection", "Fire Safety Inspection"],
    status: "active",
    expirationDate: "N/A",
    lastRenewalDate: "2023-01-01",
    nextRenewalDate: "N/A",
  },
];