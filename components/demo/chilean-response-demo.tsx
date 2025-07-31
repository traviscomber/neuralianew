"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, CheckCircle, Lightbulb, BarChart3, Crown, TrendingUp, Zap } from "lucide-react"

interface ChileanResponseExample {
  question: string
  executive: "ceo" | "cmo" | "cto"
  response: string
  insights: string[]
  recommendations: string[]
  quickReplies: string[]
}

const CHILEAN_RESPONSE_EXAMPLES: ChileanResponseExample[] = [
  {
    question: "¿Cómo manejamos la volatilidad del peso chileno en nuestro planning financiero?",
    executive: "ceo",
    response: `La volatilidad histórica del peso chileno (CLP) contra el dólar estadounidense representa uno de los desafíos más críticos para las empresas chilenas, especialmente considerando las fluctuaciones entre 600-900 CLP/USD en los últimos años.

**ESTRATEGIA INTEGRAL DE COBERTURA FINANCIERA:**

**1. DIVERSIFICACIÓN DE INGRESOS (Implementación: 90 días)**
• 60% ingresos en pesos chilenos (mercado doméstico)
• 25% en dólares estadounidenses (exportaciones/servicios internacionales)  
• 15% en euros (diversificación adicional para reducir correlación)
• Objetivo: Reducir exposición cambiaria del 80% actual al 40%

**2. INSTRUMENTOS FINANCIEROS DE COBERTURA**
• **Contratos Forward**: Cubrir 70% de gastos en USD a 6 meses vista
• **Opciones de divisas**: Protección contra movimientos extremos (>15%)
• **Swaps de monedas**: Para obligaciones de largo plazo (+24 meses)
• **Costo estimado**: 0.5-1.5% del volumen cubierto anualmente

**3. ESTRATEGIAS OPERACIONALES ESPECÍFICAS CHILE**
• **Pricing dinámico**: Ajustar precios trimestralmente según UF (Unidad de Fomento)
• **Contratos en UF**: Para servicios de largo plazo (>12 meses) - elimina riesgo inflacionario
• **Proveedores locales**: Reducir dependencia de importaciones del 40% al 25%
• **Inventario estratégico**: Mantener 2-3 meses de stock en productos importados críticos

**4. GESTIÓN DE TESORERÍA AVANZADA**
• **Cuentas multidivisa**: BancoEstado, Santander Chile, BCI ofrecen soluciones corporativas
• **Líneas de crédito**: 50% en CLP, 30% en USD, 20% en EUR para flexibilidad
• **Inversiones temporales**: Depósitos a plazo en UF para excedentes de caja
• **Monitoreo diario**: Implementar sistema de alertas por volatilidad >3%

**5. CRONOGRAMA DE IMPLEMENTACIÓN**
• **Mes 1**: Análisis de exposición actual, selección de instrumentos financieros
• **Mes 2**: Negociación con bancos (BancoEstado, Santander, BCI), implementación de contratos forward
• **Mes 3**: Diversificación de ingresos, ajuste de pricing, capacitación de equipos
• **Mes 4-6**: Monitoreo y optimización, evaluación de resultados

**CONSIDERACIONES ESPECÍFICAS MERCADO CHILENO:**
• **Banco Central**: Monitorear decisiones de política monetaria (TPM actualmente 7-11%)
• **Estacionalidad**: Mayor volatilidad en diciembre-febrero por menor liquidez
• **Commodities**: Precio del cobre afecta directamente al peso chileno
• **Regulaciones**: CMF requiere reportes de posiciones en derivados >USD 5M

**MÉTRICAS DE ÉXITO:**
• Reducir volatilidad de flujo de caja en 40%
• Mantener margen operacional estable ±2%
• Costo de cobertura <1% de ingresos anuales
• Tiempo de reacción a volatilidad <24 horas

Esta estrategia ha sido implementada exitosamente por empresas chilenas como Falabella, LATAM Airlines y Codelco, adaptándose a las particularidades del mercado local y aprovechando las herramientas financieras disponibles en el sistema bancario chileno.`,
    insights: [
      "Análisis de Volatilidad CLP/USD",
      "Estrategia de Cobertura Multidivisa",
      "Instrumentos Financieros Chilenos",
      "Regulaciones CMF y Banco Central",
      "Estacionalidad del Mercado Chileno",
    ],
    recommendations: [
      "Implementar contratos forward a 6 meses",
      "Diversificar ingresos: 60% CLP, 40% divisas",
      "Usar UF para contratos largo plazo",
      "Monitorear TPM del Banco Central",
      "Mantener inventario estratégico 2-3 meses",
    ],
    quickReplies: [
      "¿Cómo negociamos mejores condiciones con bancos chilenos?",
      "¿Cuál es nuestra estrategia para el Pacific Alliance?",
      "¿Cómo aprovechamos las fluctuaciones del precio del cobre?",
      "Necesito hablar con soporte humano",
    ],
  },
  {
    question: "¿Cuál es nuestra estrategia de WhatsApp Business para PyMEs chilenas?",
    executive: "cmo",
    response: `WhatsApp Business representa la oportunidad más significativa para conectar con PyMEs chilenas, considerando que el 95% de los chilenos usa WhatsApp y es el canal preferido para comunicación comercial en el segmento PyME.

**ESTRATEGIA INTEGRAL WHATSAPP BUSINESS CHILE:**

**1. CONFIGURACIÓN Y OPTIMIZACIÓN INICIAL**
• **Perfil empresarial completo**: Logo, descripción, horarios, ubicación, sitio web
• **Catálogo digital**: Productos/servicios con precios en CLP y UF
• **Mensajes automáticos**: Bienvenida, ausencia, respuestas rápidas en lenguaje chileno
• **Verificación empresarial**: Badge verde para generar confianza (proceso 2-4 semanas)

**2. SEGMENTACIÓN ESPECÍFICA PYMES CHILE**
• **Por tamaño**: Micro (1-9 empleados), Pequeña (10-49), Mediana (50-199)
• **Por sector**: Retail, servicios, manufactura, gastronomía, construcción
• **Por ubicación**: Santiago (40%), Valparaíso, Concepción, regiones
• **Por madurez digital**: Básico, intermedio, avanzado

**3. ESTRATEGIA DE CONTENIDO Y MESSAGING**
• **Lenguaje chileno familiar**: "¿Cómo estai?", "bacán", "al tiro", "cachai"
• **Horarios chilenos**: Respuestas 9:00-18:00, respeto por "once" (16:00-17:00)
• **Contenido estacional**: Fiestas Patrias, Navidad, vacaciones de verano
• **Casos de éxito locales**: Testimonios de PyMEs chilenas exitosas

**4. INTEGRACIÓN TECNOLÓGICA AVANZADA**
• **Sistemas de pago**: Transbank WebPay Plus, Khipu, Flow, Mercado Pago
• **CRM integration**: Conectar con Salesforce, HubSpot, o soluciones locales como Clientify
• **Facturación electrónica**: Integración con SII para boletas y facturas automáticas
• **APIs bancarias**: BancoEstado, Santander Chile, BCI para verificación de pagos

**5. AUTOMATIZACIÓN INTELIGENTE**
• **Chatbots en español chileno**: Respuestas contextuales con expresiones locales
• **Flujos de venta**: Consulta → Cotización → Pago → Seguimiento
• **Segmentación automática**: Por comportamiento, frecuencia, valor de compra
• **Escalamiento humano**: Transferencia a ejecutivos para casos complejos

**6. ESTRATEGIAS DE ADQUISICIÓN Y RETENCIÓN**
• **Campañas Facebook/Instagram**: Dirigir tráfico a WhatsApp (13.2M usuarios FB Chile)
• **QR codes**: En locales físicos, tarjetas de presentación, material promocional
• **Referencias**: Programa de incentivos para recomendaciones entre PyMEs
• **Eventos networking**: Presencia en ferias PyME, cámaras de comercio

**7. MÉTRICAS Y OPTIMIZACIÓN**
• **Tasa de respuesta**: Objetivo 90% en <5 minutos horario comercial
• **Conversión**: 25% de consultas a cotización, 15% cotización a venta
• **Ticket promedio**: $50,000-150,000 CLP según sector
• **Retención**: 70% de clientes activos a 6 meses

Esta estrategia aprovecha la alta penetración de WhatsApp en Chile y las características específicas del mercado PyME local, integrándose con el ecosistema financiero y regulatorio chileno para maximizar resultados.`,
    insights: [
      "Penetración WhatsApp 95% en Chile",
      "Segmentación PyME por Tamaño y Sector",
      "Integración Sistemas Pago Chilenos",
      "Automatización con Lenguaje Local",
      "Estacionalidad Comercial Chilena",
    ],
    recommendations: [
      "Implementar catálogo con precios CLP/UF",
      "Integrar Transbank y sistemas locales",
      "Usar lenguaje chileno en automatización",
      "Respetar horarios y cultura local",
      "Medir conversión consulta-venta 25%",
    ],
    quickReplies: [
      "¿Cómo integramos con facturación electrónica SII?",
      "¿Qué presupuesto necesitamos para automatización?",
      "¿Cómo competimos con soluciones existentes?",
      "Necesito hablar con soporte humano",
    ],
  },
  {
    question: "¿Cómo aprovechamos la región AWS Santiago para residencia de datos?",
    executive: "cto",
    response: `La región AWS Santiago (sa-east-1), lanzada en 2021, representa una oportunidad estratégica fundamental para empresas chilenas que requieren residencia de datos local, cumplimiento regulatorio y optimización de latencia para el mercado nacional.

**ESTRATEGIA INTEGRAL AWS SANTIAGO:**

**1. ARQUITECTURA MULTI-REGIÓN OPTIMIZADA**
• **Región primaria**: sa-east-1 (Santiago) para datos sensibles y aplicaciones críticas
• **Región secundaria**: us-east-1 (Virginia) para backup, DR y servicios globales
• **Edge locations**: Santiago, Valparaíso para CloudFront y mejor experiencia usuario
• **Latencia objetivo**: <20ms Santiago-Valparaíso-Concepción, <15ms dentro de Santiago

**2. CUMPLIMIENTO REGULATORIO CHILENO**
• **Ley 19.628 (Protección Datos Personales)**: Datos personales obligatoriamente en territorio chileno
• **Normativas CMF**: Datos financieros con residencia local para bancos y fintech
• **Regulaciones SII**: Información tributaria y facturación electrónica en Chile
• **Certificaciones requeridas**: ISO 27001, SOC 2 Type II para clientes enterprise

**3. SERVICIOS AWS DISPONIBLES EN SANTIAGO**
• **Compute**: EC2 (todas las familias), Lambda, ECS, EKS
• **Storage**: S3, EBS, EFS con encriptación local
• **Database**: RDS (PostgreSQL, MySQL), DynamoDB, ElastiCache
• **Networking**: VPC, Direct Connect, Transit Gateway
• **Security**: IAM, KMS con llaves locales, CloudTrail
• **Analytics**: EMR, Redshift, Kinesis (disponibilidad limitada)

**4. ESTRATEGIA DE DATOS Y COMPLIANCE**
• **Clasificación de datos**: Públicos (global), Internos (Santiago), Confidenciales (Santiago encriptado)
• **Encriptación**: KMS con llaves administradas en Santiago
• **Backup y DR**: Replicación cross-region con retención local 7 años
• **Auditoría**: CloudTrail, Config, GuardDuty con logs en Santiago
• **Acceso**: IAM roles con restricciones geográficas

**5. INTEGRACIÓN ECOSISTEMA CHILENO**
• **APIs bancarias**: Conexión directa BancoEstado, Santander Chile, BCI, Banco de Chile
• **Sistemas de pago**: Integración Transbank WebPay Plus, Khipu, Flow
• **Facturación SII**: APIs para boletas y facturas electrónicas
• **Identidad digital**: Integración Clave Única, validación RUT
• **Conectividad**: Fibra óptica dedicada con ISPs locales (Entel, Movistar, VTR)

**6. OPTIMIZACIÓN DE COSTOS ESPECÍFICA CHILE**
• **Reserved Instances**: 40-60% descuento con compromiso 1-3 años
• **Spot Instances**: Hasta 90% descuento para cargas no críticas
• **Data Transfer**: Optimizar tráfico interno región (gratis) vs. cross-region
• **Storage classes**: S3 Intelligent Tiering para optimización automática
• **Monitoreo**: CloudWatch con alertas de costos en CLP

Esta estrategia aprovecha las capacidades únicas de AWS Santiago para crear una infraestructura robusta, compliant y optimizada específicamente para el mercado chileno, considerando regulaciones locales, integraciones necesarias y características del ecosistema tecnológico nacional.`,
    insights: [
      "AWS Santiago Región sa-east-1",
      "Compliance Ley 19.628 y CMF",
      "Latencia <20ms Nacional",
      "Integración APIs Bancarias Chilenas",
      "Optimización Costos Multi-Región",
    ],
    recommendations: [
      "Usar sa-east-1 para datos sensibles",
      "Implementar arquitectura multi-AZ",
      "Integrar APIs bancarias locales",
      "Configurar DR en us-east-1",
      "Monitorear costos en CLP",
    ],
    quickReplies: [
      "¿Cómo integramos con APIs del BancoEstado?",
      "¿Cuál es el costo de migración completa?",
      "¿Qué certificaciones necesitamos para compliance?",
      "Necesito hablar con soporte humano",
    ],
  },
]

export function ChileanResponseDemo() {
  const [selectedExample, setSelectedExample] = useState<ChileanResponseExample>(CHILEAN_RESPONSE_EXAMPLES[0])
  const [showFullResponse, setShowFullResponse] = useState(false)

  const getExecutiveConfig = (executive: string) => {
    const configs = {
      ceo: {
        name: "CEO Neural Orchestrator",
        icon: Crown,
        color: "from-purple-600 to-indigo-600",
        bgColor: "bg-purple-50",
      },
      cmo: {
        name: "CMO Growth Engine",
        icon: TrendingUp,
        color: "from-green-600 to-emerald-600",
        bgColor: "bg-green-50",
      },
      cto: { name: "CTO Innovation Architect", icon: Zap, color: "from-blue-600 to-cyan-600", bgColor: "bg-blue-50" },
    }
    return configs[executive as keyof typeof configs]
  }

  const config = getExecutiveConfig(selectedExample.executive)
  const IconComponent = config.icon

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">🇨🇱 Experiencia Ejecutiva Chilena en Acción</h2>
        <p className="text-lg text-gray-600">Respuestas detalladas y especializadas para el mercado chileno</p>
      </div>

      {/* Executive Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {CHILEAN_RESPONSE_EXAMPLES.map((example, index) => {
          const exampleConfig = getExecutiveConfig(example.executive)
          const ExampleIcon = exampleConfig.icon
          return (
            <Button
              key={index}
              variant={selectedExample === example ? "default" : "outline"}
              onClick={() => setSelectedExample(example)}
              className={`h-auto p-4 ${selectedExample === example ? `bg-gradient-to-r ${exampleConfig.color} text-white` : ""}`}
            >
              <div className="flex flex-col items-center space-y-2">
                <ExampleIcon className="h-6 w-6" />
                <span className="font-semibold">{exampleConfig.name}</span>
                <span className="text-xs opacity-80">{example.question.substring(0, 40)}...</span>
              </div>
            </Button>
          )
        })}
      </div>

      {/* Question Display */}
      <Card className="border-2 border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <MessageCircle className="mr-2 h-5 w-5 text-orange-600" />
            Pregunta del Usuario Chileno:
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-medium text-gray-800">"{selectedExample.question}"</p>
        </CardContent>
      </Card>

      {/* Executive Response */}
      <Card className={`${config.bgColor} border-2`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center text-xl">
              <div
                className={`w-10 h-10 bg-gradient-to-r ${config.color} rounded-full flex items-center justify-center mr-3`}
              >
                <IconComponent className="h-5 w-5 text-white" />
              </div>
              Respuesta del {config.name}
            </CardTitle>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Respuesta en Español • Mercado Chileno</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white rounded-lg p-4 border">
            <div className={`prose max-w-none ${showFullResponse ? "" : "line-clamp-6"}`}>
              <div className="whitespace-pre-line text-gray-800">
                {showFullResponse ? selectedExample.response : selectedExample.response.substring(0, 800) + "..."}
              </div>
            </div>
            <Button
              variant="ghost"
              onClick={() => setShowFullResponse(!showFullResponse)}
              className="mt-2 text-blue-600 hover:text-blue-800"
            >
              {showFullResponse ? "Ver menos" : "Ver respuesta completa"}
            </Button>
          </div>

          {/* Performance Metrics */}
          <div className="flex items-center space-x-4 text-sm text-gray-600 bg-white rounded-lg p-3">
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>0.8s procesamiento</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>96% confianza</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>400+ palabras</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Contexto chileno</span>
            </div>
          </div>

          {/* Insights */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-4 w-4 text-yellow-500" />
              <span className="font-semibold text-gray-700">Insights Clave:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedExample.insights.map((insight, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {insight}
                </Badge>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4 text-blue-500" />
              <span className="font-semibold text-gray-700">Recomendaciones:</span>
            </div>
            <div className="space-y-1">
              {selectedExample.recommendations.map((rec, index) => (
                <div key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Replies */}
          <div className="space-y-2">
            <span className="font-semibold text-gray-700">Continúa la conversación:</span>
            <div className="grid grid-cols-1 gap-2">
              {selectedExample.quickReplies.map((reply, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-left justify-start text-xs h-auto py-2 px-3 bg-white hover:bg-gray-50"
                >
                  {reply}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card className="border-2 border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="text-lg text-green-800">🎯 Características de la Experiencia Chilena</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-green-800">Especialización Local:</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Respuestas 300-400+ palabras en español</li>
                <li>• Datos específicos del mercado chileno</li>
                <li>• Regulaciones locales (SII, CMF, Ley 19.628)</li>
                <li>• Cultura empresarial (pituto, jerarquías)</li>
                <li>• Presupuestos y cronogramas en CLP</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-green-800">Inteligencia de Mercado:</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Referencias a empresas chilenas exitosas</li>
                <li>• Integración con sistemas locales</li>
                <li>• Consideraciones estacionales y culturales</li>
                <li>• Oportunidades Pacific Alliance</li>
                <li>• Casos de éxito y mejores prácticas</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Default export for compatibility
export default ChileanResponseDemo
