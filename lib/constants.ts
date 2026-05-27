/**
 * Global CTA constants
 * Used across all pages to ensure consistent messaging
 */

export const CTA_LABELS = {
  PRIMARY: "Agendar diagnóstico (30 min)",
  SECONDARY: "Ver casos reales",
  CONTACT: "Contactar soporte",
} as const

// Validate no duplicates or conflicting CTAs
export const VALID_CTA_PHRASES = new Set([
  CTA_LABELS.PRIMARY,
  CTA_LABELS.SECONDARY,
  CTA_LABELS.CONTACT,
])
