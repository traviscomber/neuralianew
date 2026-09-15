export const contentSitemapRoutes = [
  // Legacy blog articles remain crawlable through the blog index and internal
  // links, but are temporarily excluded from sitemap submission until each
  // ES/EN pair passes localization and evidence-quality review.

  // Case studies are validated bilingual canonical pages.
  ['/case-studies/blackswan-facility-core', 0.8, 'monthly'],
  ['/case-studies/despega-tu-carrera', 0.8, 'monthly'],
  ['/case-studies/ecosuelolab', 0.8, 'monthly'],
] as const
