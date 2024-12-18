export type PermitStatus = "active" | "expiring" | "expired" | "pending";

export interface Permit {
  id: string;
  name: string;
  issuingAgency: string;
  description: string;
  applicationUrl: string;
  renewalPeriod: string;
  cost: string;
  prerequisites: string[];
  status: PermitStatus;
  expirationDate: string;
  lastRenewalDate: string;
  nextRenewalDate: string;
}

export interface Business {
  id: string;
  name: string;
  address: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
}