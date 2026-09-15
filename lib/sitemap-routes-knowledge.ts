export const knowledgeSitemapRoutes = [
  // Studies are temporarily excluded from sitemap submission because the
  // English variants are not consistently localized yet. Keep them crawlable
  // through internal links until ES/EN content parity is complete.
  ['/learning-hub', 0.75, 'weekly'],
  ['/living-agents', 0.75, 'monthly'],
  ['/nodes', 0.7, 'monthly'],
  ['/nuestro-enfoque', 0.7, 'monthly'],
  ['/outcomes', 0.7, 'monthly'],
  ['/patterns', 0.7, 'monthly'],
  ['/playbooks', 0.7, 'monthly'],
  ['/security', 0.7, 'monthly'],
] as const
