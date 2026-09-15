export const solutionSitemapRoutes = [
  // High-confidence solution and platform pages. Legacy acquisition pages with
  // unsupported quantified performance/ROI claims remain crawlable through
  // internal links but are not proactively submitted until evidence review.
  ['/agentes-ia-chile', 0.9, 'weekly'],
  ['/agentic-systems', 0.85, 'monthly'],
  ['/ai-infrastructure', 0.85, 'monthly'],
  ['/conversational-intelligence', 0.8, 'monthly'],
  ['/integraciones-empresariales', 0.8, 'monthly'],
  ['/operaciones-autonomas', 0.8, 'monthly'],
  ['/para-empresas', 0.8, 'monthly'],
  ['/para-startups', 0.8, 'monthly'],
  ['/para-desarrolladores', 0.8, 'monthly'],
  ['/platform', 0.7, 'monthly'],
  ['/platform/nodes', 0.65, 'monthly'],
  ['/platform/patterns', 0.65, 'monthly'],
  ['/platform/security', 0.65, 'monthly'],
  ['/agentes-ia-chile/ciudades', 0.75, 'monthly'],
] as const
