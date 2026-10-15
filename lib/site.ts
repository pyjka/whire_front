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
  linkedin: "https://www.linkedin.com/company/whire-ai/",
  // TODO: confirm registered legal entity name
  legalName: "Whire",
  address: "Haarlemmerweg 331-333 A, 1051 LH Amsterdam, The Netherlands",
  privacyUpdated: "2026-10-13"
} as const;
