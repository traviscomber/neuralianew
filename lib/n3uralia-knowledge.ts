// Central, verified knowledge base for N3uralia's products, projects, industries
// and how we quote. This is the single source of truth the WhatsApp sales agent
// (and any other assistant) uses so it never invents offerings or numbers.

export interface CatalogItem {
  name: string
  category: string
  tagline: string
  forWhom: string
  pain: string
  does: string
  results: string
  status: string
  keywords: string[]
}

// ─── Products (packaged, ready to deploy) ──────────────────────────────────────
export const PRODUCTS: CatalogItem[] = [
  {
    name: "MermasApp",
    category: "Alimentos / Reducción de desperdicio",
    tagline: "Merma en pesos, en tiempo real, con IA explicable",
    forWhom:
      "Plantas de alimentos y lecherías chilenas pequeñas y medianas que pierden entre $1M y $2M CLP al mes en merma sin saber por qué.",
    pain: "El desperdicio se mide tarde, en planillas, y nadie sabe exactamente dónde ni por qué se pierde.",
    does: "Mide la merma en CLP en tiempo real, explica las causas con IA y envía alertas por WhatsApp. Setup en 2-3 semanas, compatible con la maquinaria existente.",
    results:
      "5-10% de reducción de merma. 60-75% más económico que soluciones globales como Tetra Pak o SAP. Cumple HACCP/MINSAL/SAG.",
    status: "Disponible para diagnóstico",
    keywords: ["merma", "desperdicio", "alimentos", "lecheria", "planta", "produccion", "haccp", "comida"],
  },
  {
    name: "Motil",
    category: "Minería / Operaciones",
    tagline: "Operación minera trazable, de terreno a gerencia",
    forWhom:
      "Operaciones mineras con información fragmentada: sensores aislados, órdenes manuales, bodega ciega, HSE tardío y auditoría imposible.",
    pain: "Producción, mantención, bodega, HSE y documentos viven en silos; las decisiones se toman con reportes manuales.",
    does: "Conecta todo en un flujo trazable: Alerta → OT automática → Repuesto → HSE → Evidencia → KPI.",
    results: "+15% disponibilidad de equipos, -40% MTTR, -25% costos de mantención, 100% trazabilidad auditada.",
    status: "Disponible para demostración",
    keywords: ["mineria", "minera", "faena", "mantencion", "mantenimiento", "hse", "bodega", "ot", "operacion", "mttr"],
  },
  {
    name: "DocuFleet",
    category: "Transporte y Flotas / Cumplimiento documental",
    tagline: "Ningún vehículo detenido por documentos vencidos",
    forWhom:
      "Empresas de transporte y facilities con flota propia y subcontratistas cuyos documentos (revisión técnica, permiso de circulación, SOAP, licencias) se gestionan en Excel, carpetas y WhatsApp sin alertas.",
    pain: "Documentos vencidos detienen operaciones y cuestan dinero; la evidencia está dispersa y no hay alertas.",
    does: "IA clasifica documentos, extrae fechas de vencimiento y dispara alertas escalonadas 30/15/5 días antes. Panel ejecutivo, command center de riesgos, portal de subcontratistas y carpetas auditables.",
    results: "86% de cobertura documental, riesgos visibles en tiempo real y evidencia auditable lista en segundos.",
    status: "Disponible para implementación",
    keywords: ["transporte", "flota", "documento", "vencimiento", "cumplimiento", "revision tecnica", "soap", "permiso", "subcontratista", "facilities", "compliance"],
  },
  {
    name: "Clar1ty",
    category: "Imagen / IA visual",
    tagline: "Mejora y restauración de imágenes que respeta la identidad",
    forWhom:
      "Fotógrafos, creadores, archivos de patrimonio e instituciones culturales que trabajan con retratos o imágenes de herencia donde el detalle cultural importa.",
    pain: "Los upscalers genéricos alteran tonos de piel, facciones, textiles y ornamentos culturales.",
    does: "Upscale de retratos, restauración de fotos de archivo y mejora de assets creativos preservando la identidad. Flujo simple: subir → preset → descargar.",
    results: "Imágenes profesionales listas para impresión, con identidad y detalle cultural preservados.",
    status: "Disponible — prueba gratis",
    keywords: ["imagen", "foto", "retrato", "restauracion", "upscale", "upscaler", "fotografia", "patrimonio"],
  },
  {
    name: "N3uralia Nano Agents",
    category: "Multi-industria / Agentes especializados sin código",
    tagline: "21 agentes de IA expertos, listos en 3 días",
    forWhom:
      "Empresas que necesitan automatizar operaciones críticas sin equipo técnico — desde una inmobiliaria hasta un operador logístico.",
    pain: "La IA genérica no resuelve tareas de dominio; montar automatización propia requiere equipo técnico y tiempo.",
    does: "Plataforma de 21 agentes especializados en 5 categorías (Marketing, Desarrollo, Diseño, Análisis y Blockchain), más Coach IA, Transporte IA (permisos y certificados chilenos), Bienes Raíces IA, Hospitalidad IA y Agro IA. Sin código, setup en 3 días.",
    results: "85% menos errores operacionales, 42% de eficiencia ganada, 10x velocidad de procesamiento. Resultados desde el día 1.",
    status: "Disponible — comenzar gratis",
    keywords: ["agente", "agentes", "nano", "automatizar", "sin codigo", "marketing", "diseno", "desarrollo", "blockchain", "coach", "hospitalidad", "inmobiliaria", "agro"],
  },
]

// ─── Projects (custom builds we've delivered) ──────────────────────────────────
export const PROJECTS: CatalogItem[] = [
  {
    name: "LABBE (DocuFleet)",
    category: "Transporte / Cumplimiento documental",
    tagline: "Capa inteligente de cumplimiento documental para transporte",
    forWhom: "Flotas y contratistas de transporte en Chile.",
    pain: "Documentos de flota (revisión técnica, permiso, SOAP) gestionados en Excel, WhatsApp y carpetas sin alertas.",
    does: "IA que clasifica documentos, extrae vencimientos, dispara alertas 30/15/5 días y arma carpetas listas para mandantes e inspecciones.",
    results: "86% de cobertura documental y evidencia auditable en segundos.",
    status: "En producción",
    keywords: ["labbe", "transporte", "documento", "flota"],
  },
  {
    name: "SegurIA",
    category: "Seguridad operativa con IA",
    tagline: "La seguridad instalada se vuelve operación inteligente",
    forWhom: "Empresas con cámaras, sensores y control de acceso desconectados (campos, bodegas, hotelería, propiedades).",
    pain: "Mucho ruido, sin visibilidad real ni respuesta a tiempo.",
    does: "Capa de IA sobre la infraestructura existente (sin reemplazarla) con dashboard de sitios, eventos y respuesta en tiempo real.",
    results: "Menos falsas alarmas, alertas con contexto y evidencia lista para decidir.",
    status: "En producción",
    keywords: ["seguridad", "camara", "sensor", "seguria", "monitoreo", "incidente", "campo", "hoteleria"],
  },
  {
    name: "La Patagua (Motil)",
    category: "Minería / Operaciones",
    tagline: "Plataforma operacional minera completa",
    forWhom: "Operaciones mineras con información fragmentada en faena.",
    pain: "Sensores aislados, órdenes manuales, bodega ciega, HSE tardío.",
    does: "Producción, mantención, bodega, HSE, documentos y gerencia en un flujo trazable de terreno a dirección.",
    results: "+15% disponibilidad, -40% MTTR, -25% costos de mantención.",
    status: "En producción",
    keywords: ["patagua", "mineria", "motil", "operacion"],
  },
  {
    name: "EcoSueloLab",
    category: "Agtech / WhatsApp IA",
    tagline: "El campo conectado al agricultor por WhatsApp",
    forWhom: "Agricultores con datos satelitales que no tienen forma fácil de consultarlos.",
    pain: "Navegar dashboards no es parte del día de campo.",
    does: "Agente por WhatsApp que responde en lenguaje natural ('¿cómo está el nitrógeno en mi campo?') consultando datos satelitales del día.",
    results: "Decisiones de riego y nutrición desde el celular, sin abrir ninguna app.",
    status: "En producción",
    keywords: ["ecosuelo", "agro", "agricultor", "campo", "satelite", "nitrogeno", "riego"],
  },
  {
    name: "Despega Tu Carrera (Vera)",
    category: "Desarrollo personal / Coach IA",
    tagline: "Claridad, estructura y ruta en 30 días",
    forWhom: "Profesionales que se sienten estancados y no tienen con quién estructurar su camino.",
    pain: "Los cursos no ayudan porque el problema no es conocimiento, es claridad y foco.",
    does: "Plataforma con Vera, coach IA 24/7. Metodología en 4 etapas: Radar Estratégico, Despega Cerebral, Entrenamiento y Tu Ruta (misión de 30 días).",
    results: "Fortalezas detectadas, brechas identificadas y primer paso concreto con acompañamiento continuo.",
    status: "En producción",
    keywords: ["despega", "carrera", "vera", "coach", "empleabilidad", "profesional"],
  },
  {
    name: "Black Swan FS",
    category: "Facilities / Flota y subcontratistas",
    tagline: "Command center de flota y subcontratistas",
    forWhom: "Empresas de facilities con flota propia y subcontratistas en silos.",
    pain: "Documentación de conductores, vehículos y equipos sin visibilidad ni control en tiempo real.",
    does: "Panel de control operativo: 4.113 documentos gestionados, command center de alertas, gestión de equipo, subcontratistas y conductores, analítica ROI.",
    results: "86% de cobertura documental y 583 riesgos activos visibles en tiempo real.",
    status: "En producción",
    keywords: ["black swan", "blackswan", "facilities", "subcontratista", "flota", "roi"],
  },
  {
    name: "Parrotfy",
    category: "ERP / WhatsApp IA",
    tagline: "Opera tu ERP completo desde WhatsApp",
    forWhom: "PYMEs que usan el ERP Parrotfy y navegan la interfaz manualmente.",
    pain: "Consultar datos, facturar o gestionar órdenes exige entrar y navegar la app.",
    does: "Conector agéntico de WhatsApp que interpreta lenguaje natural y ejecuta acciones dentro del ERP desde el chat.",
    results: "El equipo opera el ERP completo desde WhatsApp — consultas, facturas y órdenes en lenguaje natural.",
    status: "En producción",
    keywords: ["parrotfy", "erp", "factura", "orden", "pyme"],
  },
]

// ─── Friction-based entry points (matches the site's Solutions Fit explorer) ────
export const FRICTIONS = [
  {
    key: "visibilidad",
    label: "No veo la operación completa",
    build: "Un centro de control con datos clave, alertas y responsables claros.",
    keywords: ["visibilidad", "no veo", "planilla", "excel", "reporte", "reunion", "disperso", "fragmentado"],
  },
  {
    key: "manual",
    label: "Hay demasiado trabajo manual",
    build: "Un piloto de automatización que conecte herramientas y elimine pasos repetidos.",
    keywords: ["manual", "copiar", "pegar", "repetido", "repetitivo", "tedioso", "a mano", "tiempo"],
  },
  {
    key: "respuesta",
    label: "Respondemos tarde",
    build: "Una capa de respuesta inteligente conectada a WhatsApp, email o sistemas internos.",
    keywords: ["tarde", "demora", "lento", "responder", "cliente espera", "atencion", "soporte"],
  },
  {
    key: "riesgo",
    label: "Necesito más control y trazabilidad",
    build: "Un sistema gobernado con roles, historial, guardrails y checkpoints humanos.",
    keywords: ["control", "trazabilidad", "auditoria", "compliance", "riesgo", "permiso", "legal", "seguridad"],
  },
]

// How N3uralia quotes — the agent uses this instead of inventing prices.
export const PRICING_APPROACH = `## CÓMO COTIZAMOS
- N3uralia no vende licencias de estante: cada solución se dimensiona según el alcance real.
- El punto de partida SIEMPRE es un diagnóstico gratuito de 30 minutos donde entendemos el proceso, el volumen y las integraciones necesarias.
- El precio depende de: (1) qué producto o agentes se usan, (2) cuántos procesos/integraciones se conectan, (3) el volumen y la cantidad de usuarios.
- Trabajamos por fases: normalmente arrancamos con un piloto acotado y medible, y luego escalamos.
- NUNCA inventes cifras exactas en pesos ni plazos cerrados. Si te piden precio, explica cómo cotizamos, reúne los datos del alcance y ofrece preparar una cotización formal con el equipo (o el diagnóstico gratuito).`

// Compact catalog rendering for the model's system prompt.
export function renderCatalogForPrompt(): string {
  const fmt = (item: CatalogItem) =>
    `• ${item.name} [${item.category}] — ${item.tagline}. Para: ${item.forWhom} Resuelve: ${item.does} Resultado: ${item.results} (${item.status})`

  return [
    "## PRODUCTOS N3URALIA (listos para desplegar)",
    ...PRODUCTS.map(fmt),
    "",
    "## PROYECTOS ENTREGADOS (casos reales, úsalos como prueba social)",
    ...PROJECTS.map(fmt),
    "",
    "## SEGÚN LA FRICCIÓN DEL CLIENTE, POR DÓNDE PARTIR",
    ...FRICTIONS.map((f) => `• "${f.label}" → ${f.build}`),
  ].join("\n")
}
