export const knowledgeSitemapRoutes = [
  // Keep only knowledge surfaces with a distinct, current role.
  // Studies and Playbooks are consolidated into Learning Hub; duplicate
  // Nodes/Patterns/Security pages are consolidated under /platform/*.
  ['/learning-hub', 0.75, 'weekly'],
  ['/living-agents', 0.75, 'monthly'],
  ['/outcomes', 0.7, 'monthly'],
] as const
