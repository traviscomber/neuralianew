export type ChileCityPage = {
  slug: string
  city: string
  region: string
  zone: 'norte-grande' | 'norte-chico' | 'central' | 'centro-sur' | 'patagonia'
  industries: string[]
  focusEs: string
  focusEn: string
}

export const chileCityPages: ChileCityPage[] = [
  { slug: 'arica', city: 'Arica', region: 'Arica y Parinacota', zone: 'norte-grande', industries: ['logística fronteriza', 'comercio', 'turismo', 'servicios'], focusEs: 'operaciones fronterizas, coordinación logística, atención y trazabilidad', focusEn: 'border operations, logistics coordination, service workflows and traceability' },
  { slug: 'iquique', city: 'Iquique', region: 'Tarapacá', zone: 'norte-grande', industries: ['logística', 'comercio', 'minería', 'turismo'], focusEs: 'logística, comercio, operaciones mineras y coordinación de servicios', focusEn: 'logistics, commerce, mining operations and service coordination' },
  { slug: 'antofagasta', city: 'Antofagasta', region: 'Antofagasta', zone: 'norte-grande', industries: ['minería', 'energía', 'servicios industriales', 'logística'], focusEs: 'minería, energía, mantenimiento, control operacional y servicios industriales', focusEn: 'mining, energy, maintenance, operational control and industrial services' },
  { slug: 'calama', city: 'Calama', region: 'Antofagasta', zone: 'norte-grande', industries: ['minería', 'mantenimiento', 'contratistas', 'logística'], focusEs: 'faena minera, mantenimiento, contratistas, documentos y coordinación operacional', focusEn: 'mine-site operations, maintenance, contractors, documents and operational coordination' },
  { slug: 'copiapo', city: 'Copiapó', region: 'Atacama', zone: 'norte-chico', industries: ['minería', 'energía', 'servicios técnicos', 'logística'], focusEs: 'minería, servicios técnicos, control de activos y coordinación de terreno', focusEn: 'mining, technical services, asset control and field coordination' },
  { slug: 'la-serena', city: 'La Serena', region: 'Coquimbo', zone: 'norte-chico', industries: ['servicios', 'turismo', 'agricultura', 'minería'], focusEs: 'servicios, turismo, agroindustria y operaciones vinculadas a minería', focusEn: 'services, tourism, agribusiness and mining-linked operations' },
  { slug: 'coquimbo', city: 'Coquimbo', region: 'Coquimbo', zone: 'norte-chico', industries: ['puerto', 'logística', 'pesca', 'minería'], focusEs: 'logística portuaria, pesca, distribución y cadenas vinculadas a minería', focusEn: 'port logistics, fisheries, distribution and mining-linked supply chains' },
  { slug: 'valparaiso', city: 'Valparaíso', region: 'Valparaíso', zone: 'central', industries: ['puertos', 'logística', 'servicios', 'turismo'], focusEs: 'puertos, logística, servicios, documentos y coordinación multi-actor', focusEn: 'ports, logistics, services, documents and multi-party coordination' },
  { slug: 'vina-del-mar', city: 'Viña del Mar', region: 'Valparaíso', zone: 'central', industries: ['servicios', 'turismo', 'retail', 'hospitalidad'], focusEs: 'servicios, turismo, retail, hospitalidad y operaciones de atención', focusEn: 'services, tourism, retail, hospitality and customer operations' },
  { slug: 'san-antonio', city: 'San Antonio', region: 'Valparaíso', zone: 'central', industries: ['puerto', 'logística', 'transporte', 'distribución'], focusEs: 'operaciones portuarias, transporte, distribución, excepciones y trazabilidad', focusEn: 'port operations, transport, distribution, exception handling and traceability' },
  { slug: 'santiago', city: 'Santiago', region: 'Metropolitana', zone: 'central', industries: ['servicios empresariales', 'retail', 'logística', 'finanzas'], focusEs: 'servicios empresariales, retail, logística, finanzas y operaciones corporativas', focusEn: 'business services, retail, logistics, finance and corporate operations' },
  { slug: 'rancagua', city: 'Rancagua', region: "O'Higgins", zone: 'central', industries: ['minería', 'agroindustria', 'logística', 'servicios'], focusEs: 'minería, agroindustria, logística y coordinación de operaciones de terreno', focusEn: 'mining, agribusiness, logistics and field-operations coordination' },
  { slug: 'talca', city: 'Talca', region: 'Maule', zone: 'central', industries: ['agroindustria', 'alimentos', 'logística', 'servicios'], focusEs: 'agroindustria, alimentos, distribución, documentos y control operacional', focusEn: 'agribusiness, food production, distribution, documents and operational control' },
  { slug: 'chillan', city: 'Chillán', region: 'Ñuble', zone: 'centro-sur', industries: ['agricultura', 'alimentos', 'logística', 'servicios'], focusEs: 'agricultura, alimentos, logística regional y operaciones de servicios', focusEn: 'agriculture, food production, regional logistics and service operations' },
  { slug: 'concepcion', city: 'Concepción', region: 'Biobío', zone: 'centro-sur', industries: ['industria', 'forestal', 'logística', 'servicios'], focusEs: 'industria, forestal, manufactura, logística y operaciones multi-sitio', focusEn: 'industry, forestry, manufacturing, logistics and multi-site operations' },
  { slug: 'los-angeles', city: 'Los Ángeles', region: 'Biobío', zone: 'centro-sur', industries: ['forestal', 'agricultura', 'logística', 'manufactura'], focusEs: 'forestal, agricultura, manufactura, activos y coordinación de terreno', focusEn: 'forestry, agriculture, manufacturing, assets and field coordination' },
  { slug: 'temuco', city: 'Temuco', region: 'La Araucanía', zone: 'centro-sur', industries: ['agricultura', 'forestal', 'servicios', 'logística'], focusEs: 'agricultura, forestal, servicios regionales y coordinación operacional', focusEn: 'agriculture, forestry, regional services and operational coordination' },
  { slug: 'valdivia', city: 'Valdivia', region: 'Los Ríos', zone: 'centro-sur', industries: ['alimentos', 'turismo', 'forestal', 'servicios'], focusEs: 'alimentos, turismo, forestal, servicios y operaciones distribuidas', focusEn: 'food production, tourism, forestry, services and distributed operations' },
  { slug: 'osorno', city: 'Osorno', region: 'Los Lagos', zone: 'centro-sur', industries: ['ganadería', 'alimentos', 'agricultura', 'logística'], focusEs: 'ganadería, alimentos, agricultura, calidad y trazabilidad operacional', focusEn: 'livestock, food production, agriculture, quality and operational traceability' },
  { slug: 'puerto-montt', city: 'Puerto Montt', region: 'Los Lagos', zone: 'centro-sur', industries: ['acuicultura', 'logística', 'alimentos', 'servicios'], focusEs: 'acuicultura, alimentos, logística, calidad, trazabilidad y coordinación marítima', focusEn: 'aquaculture, food production, logistics, quality, traceability and maritime coordination' },
  { slug: 'coyhaique', city: 'Coyhaique', region: 'Aysén', zone: 'patagonia', industries: ['ganadería', 'turismo', 'energía', 'servicios'], focusEs: 'operaciones remotas, ganadería, turismo, energía y coordinación de terreno', focusEn: 'remote operations, livestock, tourism, energy and field coordination' },
  { slug: 'punta-arenas', city: 'Punta Arenas', region: 'Magallanes', zone: 'patagonia', industries: ['energía', 'logística', 'turismo', 'servicios'], focusEs: 'energía, logística austral, turismo y operaciones remotas con trazabilidad', focusEn: 'energy, southern logistics, tourism and traceable remote operations' },
]

export function cityRouteSlug(city: ChileCityPage) {
  return `agentes-ia-${city.slug}-chile`
}

export function findChileCityRoute(route: string) {
  const prefix = 'agentes-ia-'
  const suffix = '-chile'
  if (!route.startsWith(prefix) || !route.endsWith(suffix)) return null
  const slug = route.slice(prefix.length, -suffix.length)
  return chileCityPages.find((city) => city.slug === slug) ?? null
}
