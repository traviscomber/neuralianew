"use client"

export function MinimalistCore() {
  const systems = [
    {
      title: "Agentes Conversacionales",
      description:
        "Asistentes de IA que entienden, responden y aprenden en lenguaje natural. Perfectos para atención al cliente, soporte técnico y consultoría.",
      icon: "💬",
    },
    {
      title: "Automatización Inteligente",
      description:
        "Flujos de trabajo que se ejecutan solos, toman decisiones y se adaptan. Reduce tareas manuales hasta 80% en tu operación.",
      icon: "⚡",
    },
    {
      title: "Integración Sin Fricción",
      description:
        "Conecta con Salesforce, SAP, Facturación Electrónica, sistemas legados. Una API que habla con todo tu ecosistema.",
      icon: "🔗",
    },
    {
      title: "Análisis en Tiempo Real",
      description:
        "Métricas claras sobre rendimiento, decisiones y ROI. Dashboards que entienden lo que importa a tu negocio.",
      icon: "📊",
    },
  ]

  return (
    <section className="bg-white py-24 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Lo que Hacemos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Cuatro pilares que transforman operaciones en Chile</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {systems.map((system, i) => (
            <div key={i} className="p-8 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
              <div className="text-4xl mb-4">{system.icon}</div>
              <h3 className="text-2xl font-bold text-black mb-3">{system.title}</h3>
              <p className="text-gray-600 leading-relaxed">{system.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
