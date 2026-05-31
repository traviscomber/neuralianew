import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"
import { buildSeo } from "@/lib/metadata-utils"

export const metadata: Metadata = buildSeo({
  locale: "es",
  path: "/es/blog/integracion-ia-legacy-systems",
  title: "Integración AI Agents con Legacy Systems | N3uralia Blog",
  description:
    "Estrategias probadas de N3uralia para integrar AI agents y sistemas agenticos con infraestructura existente. Modernización fullstack sin disrupciones. Patrones en producción para empresas.",
  keywords:
    "integración AI, n3uralia agents, legacy systems, modernización, sistemas agenticos, fullstack, compatibilidad",
})

export default function BlogPost() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <article className="max-w-3xl mx-auto py-16 px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" />
            Volver al Blog
          </Link>

          <div className="mb-8">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 mb-4">
              <span className="text-xs font-semibold text-primary">Caso de Estudio</span>
            </div>
            <h1 className="h1-light mb-4">Integración IA con Legacy Systems</h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-border/50 pt-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                8 de Febrero, 2026
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                N3uralia Team
              </div>
              <div>7 min lectura</div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none mb-16">
            <p>
              El 90% de las empresas chilenas con más de 500 empleados usan sistemas legacy. Migrar a "nativo cloud" no es opción. 
              Deben integrar IA CON lo que ya tienen. Este artículo cuenta cómo.
            </p>

            <h2>El Desafío Real</h2>
            <p>
              Imagina una aseguradora con:
            </p>
            <ul>
              <li>Mainframe de 20 años para procesos de pólizas</li>
              <li>Sistema ERP custom de 2005 para finanzas</li>
              <li>Documentos en PDF, Excel, papel</li>
              <li>APIs inexistentes o documentación perdida</li>
              <li>Equipos que conocen el sistema pero no saben cómo "hablar" con IA</li>
            </ul>

            <p>
              Aquí es donde falla la mayoría de "soluciones IA". Asumen infraestructura moderna. No existe.
            </p>

            <h2>Estrategia: Capas de Integración</h2>

            <h3>Capa 1: Adaptadores (Glue Code)</h3>
            <p>
              Construimos traductores entre systems antiguos y la IA:
            </p>
            <ul>
              <li>COBOL ↔ REST API (con queue intermediario)</li>
              <li>Base de datos legacy ↔ LLM-compatible format</li>
              <li>Reportes PDF ↔ Structured data</li>
            </ul>

            <h3>Capa 2: Orquestación Asíncrona</h3>
            <p>
              No conectamos directamente. Usamos colas de mensajes (RabbitMQ, Kafka).
            </p>
            <ul>
              <li>El sistema legacy publica evento: "Se creó nueva póliza"</li>
              <li>El agente IA consume el evento, procesa, y publica resultado</li>
              <li>Sistema legacy vuelve a consumir y actúa</li>
            </ul>

            <h3>Capa 3: Datos Espejo</h3>
            <p>
              Mantenemos una copia sincronizada (datamart) de datos legacy en formato moderno. 
              Así los agentes leen datos limpios sin tocar sistemas críticos.
            </p>

            <h2>Implementación Paso a Paso</h2>

            <h3>Fase 1: Mapping (Semanas 1-2)</h3>
            <p>
              ¿Qué sistemas existen? ¿Qué datos tienen? ¿Cuáles son los "puntos de dolor" donde IA agregará valor?
            </p>

            <h3>Fase 2: Adaptadores (Semanas 3-6)</h3>
            <p>
              Construir traductores para los primeros 2-3 sistemas críticos.
            </p>

            <h3>Fase 3: Pilot (Semanas 7-10)</h3>
            <p>
              Un agente piloto opera en shadow. Valida datos, aprende el contexto, mide ROI potencial.
            </p>

            <h3>Fase 4: Go Live (Semana 11+)</h3>
            <p>
              El agente comienza a tomar decisiones reales. Monitoreamos 24/7 durante 30 días.
            </p>

            <h2>Caso Real: Empresa de Seguros</h2>

            <p>
              <strong>Desafío:</strong> Procesar reclamaciones manuales. 80% es trabajo rutinario.
            </p>

            <p>
              <strong>Sistema:</strong> Mainframe COBOL + DB2 + archivos TIFF scaneados.
            </p>

            <p>
              <strong>Solución N3uralia:</strong>
            </p>
            <ul>
              <li>Adaptador que lee tablas DB2 de reclamaciones</li>
              <li>OCR pipeline para TIFF → texto estructurado</li>
              <li>Agente que valida completitud, calcula riesgo, recomienda aceptación/rechazo</li>
              <li>Resultado se escribe en tabla de staging en mainframe</li>
              <li>Sistema legacy procesa automáticamente</li>
            </ul>

            <p>
              <strong>Resultado en 3 meses:</strong>
            </p>
            <ul>
              <li>60% de reclamaciones procesadas automáticamente</li>
              <li>Tiempo promedio: 4 horas → 12 minutos</li>
              <li>Equipos redimensionados (no despedidos, reasignados a tareas complejas)</li>
              <li>Cero disrupciones al sistema core</li>
            </ul>

            <h2>Patrones de Error Comunes (y cómo evitarlos)</h2>

            <h3>Error 1: Conectar Directamente</h3>
            <p>
              "¡Hagamos query directa al mainframe!" No. Usas colas. Siempre.
            </p>

            <h3>Error 2: Confiar en "APIs Legacy"</h3>
            <p>
              Las APIs viejas a menudo son unstable. Valida CADA respuesta.
            </p>

            <h3>Error 3: Cambiar el Sistema Antiguo</h3>
            <p>
              No. Construye capas encima. El legacy es sagrado.
            </p>

            <h3>Error 4: Ignorar Data Quality</h3>
            <p>
              Los datos legacy son sucios. Limpiar y validar es 40% del trabajo.
            </p>

            <h2>Conclusión</h2>
            <p>
              Integrar IA con sistemas legacy no es imposible. Es diferente. Requiere arquitectura en capas, 
              paciencia y respeto por lo que ya funciona. Los mejores resultados vienen cuando tratas al legacy 
              como una fortaleza (es estable, confiable), no como un enemigo.
            </p>
          </div>

          {/* CTA */}
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground mb-4">
              ¿Tienes sistemas legacy que necesitan modernizarse con IA?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Conversar sobre tu Infraestructura
            </Link>
          </div>
          </article>
        </main>
      
      <Footer />
    </>
  )
}
