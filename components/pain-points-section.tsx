import type { Locale } from "@/lib/get-locale"
import { getDict } from "@/content/dictionaries"
import { AlertCircle, DollarSign, Zap } from "lucide-react"

export function PainPointsSection({ locale }: { locale: Locale }) {
  const isES = locale === "es"
  const d = getDict(locale)

  const industryBreakdown = isES 
    ? [
        {
          industry: "Retail (200 SKU + 50 locales)",
          breakdown: [
            { item: "Coordinación de inventario", value: "3 FTE = $12K/mes" },
            { item: "Errores en reordenes", value: "$5K/mes" },
            { item: "Retrasos en decisiones", value: "$20K/mes" },
          ],
          total: "$37K/mes = $444K/año",
        },
        {
          industry: "Manufactura (Control calidad + ensamblaje)",
          breakdown: [
            { item: "Ingreso manual de datos QC", value: "$50K/mes" },
            { item: "Demora en detección de defectos", value: "$8K/mes" },
            { item: "Paradas esperando decisiones", value: "$25K/mes" },
          ],
          total: "$83K/mes = $996K/año",
        },
        {
          industry: "Logística (Rutas + entregas)",
          breakdown: [
            { item: "Planificación de rutas manual", value: "$25K/mes" },
            { item: "Combustible desperdiciado (rutas ineficientes)", value: "$45K/mes" },
            { item: "Penalizaciones por incumplimientos SLA", value: "$35K/mes" },
          ],
          total: "$105K/mes = $1.26M/año",
        },
        {
          industry: "Finanzas (Aprobaciones + reportes)",
          breakdown: [
            { item: "Procesamiento de documentos", value: "$80K/mes" },
            { item: "Errores en consolidación de datos", value: "$15K/mes" },
            { item: "Auditorías lentas + correcciones", value: "$90K/mes" },
          ],
          total: "$185K/mes = $2.22M/año",
        },
      ]
    : [
        {
          industry: "Retail (200 SKU + 50 locations)",
          breakdown: [
            { item: "Inventory coordination", value: "3 FTE = $12K/mo" },
            { item: "Reorder errors", value: "$5K/mo" },
            { item: "Decision delays", value: "$20K/mo" },
          ],
          total: "$37K/mo = $444K/year",
        },
        {
          industry: "Manufacturing (QC + Assembly)",
          breakdown: [
            { item: "Manual QC data entry", value: "$50K/mo" },
            { item: "Defect detection delay", value: "$8K/mo" },
            { item: "Stoppages waiting for decisions", value: "$25K/mo" },
          ],
          total: "$83K/mo = $996K/year",
        },
        {
          industry: "Logistics (Routes + Deliveries)",
          breakdown: [
            { item: "Manual route planning", value: "$25K/mo" },
            { item: "Wasted fuel (inefficient routes)", value: "$45K/mo" },
            { item: "SLA miss penalties", value: "$35K/mo" },
          ],
          total: "$105K/mo = $1.26M/year",
        },
        {
          industry: "Finance (Approvals + Reporting)",
          breakdown: [
            { item: "Document processing", value: "$80K/mo" },
            { item: "Data consolidation errors", value: "$15K/mo" },
            { item: "Slow audits + corrections", value: "$90K/mo" },
          ],
          total: "$185K/mo = $2.22M/year",
        },
      ]

  return (
    <section className="py-24 px-4 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-destructive/30 mb-6 bg-destructive/5">
            <AlertCircle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">
              {isES ? "Análisis de Costos Ocultos" : "Hidden Cost Analysis"}
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {isES 
              ? "¿Cuánto te está costando realmente funcionar manualmente?"
              : "How much is manual operation really costing you?"}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isES 
              ? "Desglose financiero real de dónde se pierde el dinero en operaciones manuales" 
              : "Real financial breakdown of where money is lost in manual operations"}
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {industryBreakdown.map((ind, i) => (
            <div key={i} className="border border-border/50 rounded-lg overflow-hidden hover:border-destructive/30 transition-colors">
              {/* Header */}
              <div className="bg-destructive/5 border-b border-destructive/20 p-4">
                <h3 className="font-semibold text-foreground">{ind.industry}</h3>
              </div>
              
              {/* Breakdown Items */}
              <div className="p-4 space-y-3">
                {ind.breakdown.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <DollarSign className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-foreground font-medium">{item.item}</p>
                      <p className="text-xs text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Total */}
              <div className="bg-primary/5 border-t border-primary/20 p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">
                    {isES ? "Costo anual oculto" : "Annual hidden cost"}
                  </span>
                  <span className="text-lg font-bold text-destructive">{ind.total}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-8">
          <div className="flex gap-4">
            <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                {isES ? "La realidad:" : "The reality:"}
              </h3>
              <p className="text-muted-foreground">
                {isES
                  ? "Si operas manualmente, pierdes entre $444K y $2.2M+ por año en fricción operativa. La mayoría de empresas no conoce estos números. Los que sí, ya están automatizando."
                  : "If you operate manually, you're losing between $444K and $2.2M+ per year in operational friction. Most companies don't track this. The ones that do are already automating."}
              </p>
            </div>
          </div>
        </div>

        {/* Source */}
        <p className="text-xs text-muted-foreground mt-6 text-center">
          {isES 
            ? "Datos basados en análisis de 50+ empresas chilenas en Retail, Manufactura, Logística y Finanzas (2024-2025)"
            : "Based on analysis of 50+ Chilean companies in Retail, Manufacturing, Logistics, and Finance (2024-2025)"}
        </p>
      </div>
    </section>
  )
}
