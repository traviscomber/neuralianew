export const contentSitemapRoutes = [
  // Only validated case studies are proactively submitted. The four curated
  // library articles remain accessible from /blog but stay out of the sitemap
  // until bilingual evidence/localization review is complete. Legacy SEO
  // articles have been removed from the route tree entirely.
  ['/case-studies/blackswan-facility-core', 0.8, 'monthly'],
  ['/case-studies/despega-tu-carrera', 0.8, 'monthly'],
  ['/case-studies/ecosuelolab', 0.8, 'monthly'],
] as const
