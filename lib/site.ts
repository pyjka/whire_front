/**
 * Site-wide facts used by metadata, the footer and the privacy policy.
 * TODO: confirm the four values marked below before deploying.
 */
export const site = {
  name: "Whire",
  url: "https://whire.ai",
  tagline: "The execution layer for agent payments.",
  description:
    "Whire turns agent intent into authorized, compliant bank transfers: consent, controls and settlement in one integration. SEPA Instant first, every A2A rail next.",
  // TODO: confirm contact email
  email: "hello@whire.ai",
  // TODO: confirm LinkedIn company URL
  linkedin: "https://www.linkedin.com/company/whire",
  // TODO: confirm registered legal entity name
  legalName: "Whire",
  // TODO: confirm registered address
  address: "Amsterdam, Netherlands",
  privacyUpdated: "2026-10-13"
} as const;
