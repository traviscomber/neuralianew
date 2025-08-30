"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  MessageSquare,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  Clock,
  Smartphone,
  Globe,
  Target,
  BookOpen,
  Trophy,
  Lightbulb,
  Calendar,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Heart,
  Coffee,
  Rocket,
  Brain,
  Award,
  Sparkles,
  ChevronRight,
  DollarSign,
  FileText,
  BarChart3,
  Building2,
} from "lucide-react"

interface ChatMessage {
  id: string
  content: string
  sender: "user" | "coach" | "system" | "assistant" | "tutor"
  timestamp: string
  type?: "encouragement" | "recommendation" | "milestone" | "challenge" | "resource"
  metadata?: {
    category?: string
    priority?: "high" | "medium" | "low"
    actionRequired?: boolean
    resources?: string[]
    nextSteps?: string[]
  }
}

interface LearningProgress {
  currentLevel: number
  totalLevels: number
  skillsAcquired: string[]
  weeklyGoals: { goal: string; completed: boolean; dueDate: string }[]
  readingList: { title: string; author: string; progress: number; recommended: boolean }[]
  achievements: { title: string; date: string; description: string }[]
}

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("ecosuelobot")
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const [ecosueloBotChatMessages, setEcosueloBotChatMessages] = useState<ChatMessage[]>([])
  const [ecosueloMessageIndex, setEcosueloMessageIndex] = useState(0)
  const [ecosueloIsPlaying, setEcosueloIsPlaying] = useState(false)

  const [parrotfyChatMessages, setParrotfyChatMessages] = useState<ChatMessage[]>([])
  const [parrotfyMessageIndex, setParrotfyMessageIndex] = useState(0)
  const [parrotfyIsPlaying, setParrotfyIsPlaying] = useState(false)

  const [learningProgress, setLearningProgress] = useState<LearningProgress>({
    currentLevel: 7,
    totalLevels: 10,
    skillsAcquired: ["Leadership Communication", "Strategic Thinking", "Data Analysis", "Team Management"],
    weeklyGoals: [
      { goal: "Complete 'Good to Great' chapters 1-3", completed: true, dueDate: "Today" },
      { goal: "Practice public speaking 15 minutes daily", completed: true, dueDate: "Today" },
      { goal: "Network with 3 industry professionals", completed: false, dueDate: "Friday" },
      { goal: "Update LinkedIn with new skills", completed: false, dueDate: "Sunday" },
    ],
    readingList: [
      { title: "Good to Great", author: "Jim Collins", progress: 65, recommended: true },
      { title: "The Lean Startup", author: "Eric Ries", progress: 100, recommended: true },
      { title: "Atomic Habits", author: "James Clear", progress: 30, recommended: true },
      { title: "The 7 Habits", author: "Stephen Covey", progress: 0, recommended: false },
    ],
    achievements: [
      { title: "Leadership Milestone", date: "2 days ago", description: "Completed advanced leadership module" },
      { title: "Reading Streak", date: "1 week ago", description: "7 consecutive days of reading" },
      { title: "Skill Mastery", date: "2 weeks ago", description: "Mastered Data Analysis fundamentals" },
    ],
  })

  // Enhanced career coaching conversation
  const careerChatMessages: ChatMessage[] = [
    {
      id: "1",
      content:
        "Good morning, Sarah! 🌅 I noticed you've been consistently hitting your daily reading goals. How are you feeling about the leadership concepts from 'Good to Great'?",
      sender: "coach",
      timestamp: "8:30 AM",
      type: "encouragement",
      metadata: {
        category: "daily_check_in",
        priority: "medium",
        actionRequired: false,
      },
    },
    {
      id: "2",
      content:
        "Hi Coach! I'm really enjoying the book. The concept of Level 5 Leadership is fascinating. I'm trying to apply the humility aspect in my team meetings.",
      sender: "user",
      timestamp: "8:35 AM",
    },
    {
      id: "3",
      content:
        "That's excellent self-awareness! 🎯 Applying Level 5 Leadership principles shows real growth. I have a challenge for you: try implementing the 'First Who, Then What' principle in your next project. Also, I found 3 TED talks on humble leadership that align perfectly with your learning style. Should I add them to your personalized playlist?",
      sender: "coach",
      timestamp: "8:36 AM",
      type: "challenge",
      metadata: {
        category: "skill_application",
        priority: "high",
        actionRequired: true,
        resources: [
          "TED Talk: The Power of Humble Leadership",
          "Harvard Business Review: Level 5 Leadership",
          "Podcast: Leadership in Practice",
        ],
        nextSteps: [
          "Watch recommended TED talks",
          "Apply 'First Who, Then What' in next project",
          "Reflect on leadership style",
        ],
      },
    },
    {
      id: "4",
      content: "Yes, please add them! I love how you always know exactly what I need to learn next.",
      sender: "user",
      timestamp: "8:38 AM",
    },
    {
      id: "5",
      content:
        "Perfect! 📚 I've added them to your learning queue. Here's what I'm seeing in your progress: You're 65% through 'Good to Great' and your comprehension scores are in the top 10% of learners. Your consistency is paying off! \n\nQuick insight: Based on your learning pattern, you absorb leadership concepts best in the morning. I've scheduled your next skill assessment for tomorrow at 9 AM. Ready to level up? 🚀",
      sender: "coach",
      timestamp: "8:39 AM",
      type: "milestone",
      metadata: {
        category: "progress_update",
        priority: "high",
        actionRequired: true,
        resources: ["Skill Assessment: Leadership Styles", "Morning Learning Optimization Guide"],
      },
    },
    {
      id: "6",
      content:
        "I'm ready! But I'm feeling a bit overwhelmed with my current workload. How do I balance learning with my job responsibilities?",
      sender: "user",
      timestamp: "8:42 AM",
    },
    {
      id: "7",
      content:
        "I hear you, Sarah. 💪 Feeling overwhelmed is normal when you're growing rapidly. Let's optimize your approach:\n\n🎯 **Micro-learning Strategy:**\n• 15-minute morning reading sessions (you're already doing this!)\n• Listen to leadership podcasts during commute\n• Practice one new skill during lunch breaks\n\n📈 **Integration Approach:**\n• Apply new concepts immediately in your current role\n• Turn work challenges into learning opportunities\n• Use your team as a practice ground for leadership skills\n\nRemember: You're not adding to your workload, you're enhancing it. Every leadership principle you learn makes your current job easier and more effective. You've got this! 🌟",
      sender: "coach",
      timestamp: "8:43 AM",
      type: "encouragement",
      metadata: {
        category: "work_life_balance",
        priority: "high",
        actionRequired: true,
        resources: ["Time Management for Leaders", "Micro-learning Techniques", "Leadership in Daily Work"],
        nextSteps: [
          "Implement 15-min morning sessions",
          "Choose leadership podcast",
          "Identify practice opportunities at work",
        ],
      },
    },
    {
      id: "8",
      content: "This is exactly what I needed to hear. Thank you for always knowing how to motivate me!",
      sender: "user",
      timestamp: "8:45 AM",
    },
    {
      id: "9",
      content:
        "That's what I'm here for! 🎉 Your growth mindset is inspiring. I'm tracking your progress and I can see you're building momentum. \n\n🏆 **This Week's Wins:**\n• 7-day reading streak maintained\n• Applied active listening in 3 team meetings\n• Completed leadership self-assessment\n\n📅 **Tomorrow's Focus:**\n• Morning: Leadership assessment (9 AM)\n• Afternoon: Practice delegation with your team\n• Evening: Reflect on the day's leadership moments\n\nI'll check in with you tomorrow evening to see how the assessment went. Keep pushing forward - you're closer to that promotion than you think! 💼✨",
      sender: "coach",
      timestamp: "8:46 AM",
      type: "milestone",
      metadata: {
        category: "weekly_review",
        priority: "medium",
        actionRequired: false,
        resources: ["Leadership Assessment Prep", "Delegation Best Practices", "Reflection Journal Template"],
      },
    },
    {
      id: "10",
      content:
        "🌟 **Evening Check-in Reminder** 🌟\n\nHey Sarah! How did your leadership assessment go today? I'm excited to hear about your progress and help you plan tomorrow's growth activities. Remember, every small step counts toward your bigger career goals! 💪\n\nReply when you're ready to share your wins from today! 🎯",
      sender: "coach",
      timestamp: "6:30 PM",
      type: "encouragement",
      metadata: {
        category: "evening_checkin",
        priority: "medium",
        actionRequired: false,
      },
    },
  ]

  // EcosueloBot WhatsApp conversation
  const ecosueloBotChatMessagesData: ChatMessage[] = [
    {
      id: "1",
      content: "🌱 ¡Hola! Soy EcosueloBot. ¿Cómo está tu cultivo hoy?",
      sender: "assistant",
      timestamp: "10:30 AM",
    },
    {
      id: "2",
      content: "Hola! Mis tomates se ven un poco amarillos. ¿Qué puede ser?",
      sender: "user",
      timestamp: "10:32 AM",
    },
    {
      id: "3",
      content:
        "🔍 Analizando tu ubicación y datos del suelo...\n\n📊 **Diagnóstico IA:**\n• Deficiencia de nitrógeno (85% probabilidad)\n• Humedad del suelo: 45% (óptimo: 60-70%)\n• pH detectado: 6.8 (bueno para tomates)\n\n💡 **Recomendación:**\nAplica fertilizante rico en nitrógeno y aumenta riego 20%. ¿Quieres que te envíe el plan detallado?",
      sender: "assistant",
      timestamp: "10:33 AM",
    },
    {
      id: "4",
      content: "¡Sí, por favor! Y gracias por el análisis tan rápido.",
      sender: "user",
      timestamp: "10:34 AM",
    },
    {
      id: "5",
      content:
        "📋 **Plan de Acción (7 días):**\n\n**Día 1-2:** Fertilizante NPK 15-15-15\n**Día 3-7:** Riego cada 2 días (mañana)\n**Monitoreo:** Fotos cada 3 días\n\n📈 Mejora esperada: 15-20% en 2 semanas\n💰 Costo estimado: $25,000 CLP\n\nTe recordaré cada paso. ¡Tus tomates van a estar perfectos! 🍅✨",
      sender: "assistant",
      timestamp: "10:35 AM",
    },
    {
      id: "6",
      content: "¡Perfecto! ¿Puedes también revisar mi maíz? Está en otra parcela.",
      sender: "user",
      timestamp: "10:36 AM",
    },
    {
      id: "7",
      content:
        "¡Por supuesto! 🌽 Conectándome a los sensores de tu parcela de maíz...\n\n📊 **Análisis de Maíz:**\n• Estado general: Excelente\n• Humedad: 68% (perfecto)\n• Temperatura del suelo: 22°C (ideal)\n• Predicción climática: 3 días soleados\n\n✅ **Todo está perfecto!** Tu maíz está en condiciones óptimas. Solo mantén el riego actual y estarás listo para una cosecha excepcional en 6 semanas.",
      sender: "assistant",
      timestamp: "10:37 AM",
    },
  ]

  // CRM conversation for Parrotfy
  const parrotfyBusinessMessages = [
    {
      id: "1",
      content: "¡Hola! Soy ParrotfyIA, tu asistente de ERP conversacional. ¿En qué puedo ayudarte con tu negocio hoy?",
      sender: "assistant",
      timestamp: "10:30 AM",
    },
    {
      id: "2",
      content: "Hola! Necesito ver el estado de mis proyectos activos y cuáles necesitan atención.",
      sender: "user",
      timestamp: "10:31 AM",
    },
    {
      id: "3",
      content:
        "📊 **Estado de Proyectos Activos:**\n\n🟢 **En tiempo:** 8 proyectos\n• Proyecto Alpha - 85% completado\n• Desarrollo Web XYZ - 92% completado\n• Consultoría ABC - 67% completado\n\n🟡 **Requieren atención:** 3 proyectos\n• Proyecto Beta - 45% (retraso de 3 días)\n• App Mobile - 78% (pendiente aprobación cliente)\n\n🔴 **Crítico:** 1 proyecto\n• Sistema ERP - 30% (retraso de 1 semana)\n\n¿Quieres que programe reuniones de seguimiento?",
      sender: "assistant",
      timestamp: "10:32 AM",
    },
    {
      id: "4",
      content: "Sí, programa las reuniones. También muéstrame los ingresos de este mes.",
      sender: "user",
      timestamp: "10:33 AM",
    },
    {
      id: "5",
      content:
        "✅ **Reuniones programadas** para mañana 9 AM, 11 AM y 2 PM.\n\n💰 **Ingresos Marzo 2024:**\n\n📈 **Total:** $89,450 (112% del objetivo)\n🏆 **Cliente top:** TechSolutions Inc. ($28,900)\n📊 **Crecimiento:** +23% vs febrero\n\n💳 **Facturación:**\n• Facturas emitidas: 24\n• Cobradas: $66,050\n• Pendientes: $23,400 (6 facturas)\n• Tiempo promedio cobro: 18 días\n\n¿Necesitas que envíe recordatorios de pago?",
      sender: "assistant",
      timestamp: "10:34 AM",
    },
    {
      id: "6",
      content: "Perfecto! ¿Puedes mostrarme también el inventario y qué necesito reabastecer?",
      sender: "user",
      timestamp: "10:35 AM",
    },
    {
      id: "7",
      content:
        "📦 **Estado del Inventario:**\n\n🔴 **Stock crítico (reabastecer urgente):**\n• Componente A - 5 unidades (mín: 20)\n• Material B - 12 unidades (mín: 50)\n\n🟡 **Stock bajo:**\n• Producto C - 35 unidades (mín: 30)\n• Herramienta D - 8 unidades (mín: 15)\n\n🟢 **Stock óptimo:** 15 productos\n\n💡 **Recomendación:** Generar orden de compra por $12,400 para reabastecer stock crítico. ¿Procedo?",
      sender: "assistant",
      timestamp: "10:36 AM",
    },
    {
      id: "8",
      content: "Sí, genera la orden de compra. ¿Cómo está la satisfacción de nuestros clientes?",
      sender: "user",
      timestamp: "10:37 AM",
    },
    {
      id: "9",
      content:
        '✅ **Orden de compra #OC-2024-089** generada y enviada a proveedores.\n\n😊 **Satisfacción del Cliente:**\n\n⭐ **NPS Score:** 8.4/10 (Excelente)\n📊 **Encuestas completadas:** 18 este mes\n\n🟢 **Muy satisfechos:** 72%\n🟡 **Satisfechos:** 22%\n🔴 **Necesitan atención:** 6% (1 cliente)\n\n💬 **Comentarios destacados:**\n• "Excelente servicio y tiempos de entrega"\n• "Muy profesionales, recomendado"\n\n¿Quieres que contacte al cliente que necesita atención?',
      sender: "assistant",
      timestamp: "10:38 AM",
    },
  ]

  // Remove the parrotfyMode state - no longer needed
  // const [parrotfyMode, setParrotfyMode] = useState("language")

  // Remove the parrotfyLanguageMessages array entirely since it's no longer used.
  // const parrotfyLanguageMessages = [
  //   {
  //     id: "1",
  //     content: "Hola! ¿Cómo puedo ayudarte a aprender español hoy?",
  //     sender: "tutor",
  //     timestamp: "10:30 AM",
  //   },
  //   {
  //     id: "2",
  //     content: "Hola! Me gustaría practicar cómo ordenar comida en un restaurante.",
  //     sender: "user",
  //     timestamp: "10:31 AM",
  //   },
  //   {
  //     id: "3",
  //     content: "¡Excelente! Vamos a empezar. Primero, el camarero se acerca a tu mesa. ¿Qué le dices?",
  //     sender: "tutor",
  //     timestamp: "10:32 AM",
  //   },
  //   {
  //     id: "4",
  //     content: "Mmm... ¿'Quisiera una mesa, por favor'?",
  //     sender: "user",
  //     timestamp: "10:33 AM",
  //   },
  //   {
  //     id: "5",
  //     content:
  //       "Muy bien! También puedes decir '¿Tiene una mesa para uno/dos, por favor?'. Ahora, estás sentado. ¿Qué le dices al camarero cuando te pregunta qué quieres?",
  //     sender: "tutor",
  //     timestamp: "10:34 AM",
  //   },
  //   {
  //     id: "6",
  //     content: "Podría ver el menú, por favor?",
  //     sender: "user",
  //     timestamp: "10:35 AM",
  //   },
  //   {
  //     id: "7",
  //     content:
  //       "Perfecto! Ahora, después de ver el menú, decides qué quieres. ¿Cómo le dices al camarero qué vas a ordenar?",
  //     sender: "tutor",
  //     timestamp: "10:36 AM",
  //   },
  //   {
  //     id: "8",
  //     content: "Podría pedir el pollo asado, por favor.",
  //     sender: "user",
  //     timestamp: "10:37 AM",
  //   },
  //   {
  //     id: "9",
  //     content: "¡Fantástico! Y si quieres algo para beber, ¿qué dirías?",
  //     sender: "tutor",
  //     timestamp: "10:38 AM",
  //   },
  // ]

  // Update the auto-start logic for ParrotfyIA
  useEffect(() => {
    if (activeTab === "career") {
      // Auto-start career demo
      if (chatMessages.length === 0) {
        setChatMessages([careerChatMessages[0]])
        setCurrentMessageIndex(0)
        setIsPlaying(true)
      }
    } else if (activeTab === "ecosuelobot") {
      // Auto-start EcosueloBot demo
      if (ecosueloBotChatMessages.length === 0) {
        setEcosueloBotChatMessages([ecosueloBotChatMessagesData[0]])
        setEcosueloMessageIndex(0)
        setEcosueloIsPlaying(true)
      }
    } else if (activeTab === "parrotfy") {
      // Auto-start ParrotfyIA demo - only business messages
      if (parrotfyChatMessages.length === 0) {
        setParrotfyChatMessages([parrotfyBusinessMessages[0]])
        setParrotfyMessageIndex(0)
        setParrotfyIsPlaying(true)
      }
    }
  }, [activeTab]) // Remove parrotfyMode dependency

  // Career chat auto-play
  useEffect(() => {
    if (activeTab === "career" && isPlaying) {
      const timer = setInterval(() => {
        if (currentMessageIndex < careerChatMessages.length - 1) {
          setCurrentMessageIndex((prev) => prev + 1)
          setChatMessages((prev) => [...prev, careerChatMessages[currentMessageIndex + 1]])
        } else {
          setIsPlaying(false)
        }
      }, 3000)

      return () => clearInterval(timer)
    }
  }, [activeTab, isPlaying, currentMessageIndex])

  // EcosueloBot chat auto-play
  useEffect(() => {
    if (activeTab === "ecosuelobot" && ecosueloIsPlaying) {
      const timer = setInterval(() => {
        if (ecosueloMessageIndex < ecosueloBotChatMessagesData.length - 1) {
          setEcosueloMessageIndex((prev) => prev + 1)
          setEcosueloBotChatMessages((prev) => [...prev, ecosueloBotChatMessagesData[ecosueloMessageIndex + 1]])
        } else {
          setEcosueloIsPlaying(false)
        }
      }, 3000)

      return () => clearInterval(timer)
    }
  }, [activeTab, ecosueloIsPlaying, ecosueloMessageIndex])

  // Update the ParrotfyIA chat auto-play to only use business messages
  useEffect(() => {
    if (activeTab === "parrotfy" && parrotfyIsPlaying) {
      const timer = setInterval(() => {
        if (parrotfyMessageIndex < parrotfyBusinessMessages.length - 1) {
          setParrotfyMessageIndex((prev) => prev + 1)
          setParrotfyChatMessages((prev) => [...prev, parrotfyBusinessMessages[parrotfyMessageIndex + 1]])
        } else {
          setParrotfyIsPlaying(false)
        }
      }, 3000)

      return () => clearInterval(timer)
    }
  }, [activeTab, parrotfyIsPlaying, parrotfyMessageIndex])

  // Remove the mode change effect - no longer needed
  // useEffect(() => {
  //   if (activeTab === "parrotfy") {
  //     const messagesToUse = parrotfyMode === "language" ? parrotfyLanguageMessages : parrotfyBusinessMessages
  //     setParrotfyChatMessages([messagesToUse[0]])
  //     setParrotfyMessageIndex(0)
  //     setParrotfyIsPlaying(true)
  //   }
  // }, [parrotfyMode])

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Real AI Executives in Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our Neural AI Executives are transforming businesses across industries with intelligent,
            personalized solutions that deliver measurable results.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="ecosuelobot" className="text-sm">
              🌱 EcosueloBot
            </TabsTrigger>
            <TabsTrigger value="career" className="text-sm">
              🚀 Launch Your Career
            </TabsTrigger>
            <TabsTrigger value="parrotfy" className="text-sm">
              🦜 ParrotfyIA
            </TabsTrigger>
          </TabsList>

          {/* EcosueloBot Tab */}
          <TabsContent value="ecosuelobot">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">EcosueloBot</h3>
                      <p className="text-gray-600">AI Agricultural Assistant via WhatsApp</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    EcosueloBot transforms complex agricultural data into simple WhatsApp conversations. Powered by{" "}
                    <strong>OpenAI ChatGPT 4.0 agentic AI</strong> backend, it connects to multiple APIs including{" "}
                    <strong>IrriWatch</strong>, <strong>SoilGrids</strong>, and <strong>OpenWeatherMap Agro</strong>
                    to provide farmers with intelligent, real-time agricultural insights through the familiar WhatsApp
                    interface.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="h-5 w-5 text-green-600" />
                        <span className="font-semibold">Active Farmers</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">15,000+</div>
                      <div className="text-sm text-gray-500">Across 12 countries</div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        <span className="font-semibold">Crop Yield</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">+23%</div>
                      <div className="text-sm text-gray-500">Average improvement</div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="h-5 w-5 text-green-600" />
                        <span className="font-semibold">Response Time</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">{"<2s"}</div>
                      <div className="text-sm text-gray-500">Average AI response</div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="font-semibold">Accuracy</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">96%</div>
                      <div className="text-sm text-gray-500">Prediction accuracy</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Technical Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">OpenAI ChatGPT 4.0</Badge>
                      <Badge variant="secondary">WhatsApp Business API</Badge>
                      <Badge variant="secondary">IrriWatch API</Badge>
                      <Badge variant="secondary">SoilGrids API</Badge>
                      <Badge variant="secondary">OpenWeatherMap Agro</Badge>
                      <Badge variant="secondary">Agentic AI Architecture</Badge>
                      <Badge variant="secondary">Real-time Data Processing</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-green-600 text-white p-4">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="h-6 w-6" />
                    <div>
                      <div className="font-semibold">WhatsApp Business</div>
                      <div className="text-sm opacity-90">EcosueloBot • Online</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-4 h-80 overflow-y-auto bg-gray-50">
                  {ecosueloBotChatMessages.map((message, index) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`rounded-lg p-3 max-w-xs ${
                          message.sender === "user" ? "bg-green-500 text-white" : "bg-white shadow-sm"
                        }`}
                      >
                        <div className="text-sm whitespace-pre-line">{message.content}</div>
                        <div
                          className={`text-xs mt-1 ${message.sender === "user" ? "text-green-100" : "text-gray-500"}`}
                        >
                          {message.timestamp}
                        </div>
                      </div>
                    </div>
                  ))}

                  {ecosueloIsPlaying && ecosueloMessageIndex < ecosueloBotChatMessagesData.length - 1 && (
                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <span className="text-xs text-gray-500 ml-2">EcosueloBot está analizando...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 border-t bg-white">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Globe className="h-4 w-4" />
                    <span>Powered by OpenAI GPT-4 • Connected to IrriWatch, SoilGrids & Weather APIs • Auto Demo</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Career Coaching Tab */}
          <TabsContent value="career">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Launch Your Career</h3>
                      <p className="text-gray-600">AI Career Coach Always With You</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Your personal AI career coach that never sleeps. Get continuous encouragement, personalized learning
                    paths, reading recommendations, and skill development guidance. From daily check-ins to milestone
                    celebrations, your coach is always there to push you forward.
                  </p>

                  {/* Learning Progress Dashboard */}
                  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-blue-600" />
                        Sarah's Learning Journey
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Career Level Progress</span>
                          <span>
                            {learningProgress.currentLevel}/{learningProgress.totalLevels}
                          </span>
                        </div>
                        <Progress
                          value={(learningProgress.currentLevel / learningProgress.totalLevels) * 100}
                          className="h-2"
                        />
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Skills Mastered:</h4>
                        <div className="flex flex-wrap gap-1">
                          {learningProgress.skillsAcquired.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">This Week's Goals:</h4>
                        <div className="space-y-1">
                          {learningProgress.weeklyGoals.map((goal, index) => (
                            <div key={index} className="flex items-center space-x-2 text-xs">
                              {goal.completed ? (
                                <CheckCircle className="h-3 w-3 text-green-500" />
                              ) : (
                                <Clock className="h-3 w-3 text-orange-500" />
                              )}
                              <span className={goal.completed ? "line-through text-gray-500" : "text-gray-700"}>
                                {goal.goal}
                              </span>
                              <Badge variant="outline" className="text-xs">
                                {goal.dueDate}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Current Reading:</h4>
                        <div className="space-y-2">
                          {learningProgress.readingList.slice(0, 2).map((book, index) => (
                            <div key={index} className="bg-white p-2 rounded border">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-xs font-medium">{book.title}</span>
                                <span className="text-xs text-gray-500">{book.progress}%</span>
                              </div>
                              <Progress value={book.progress} className="h-1" />
                              <div className="text-xs text-gray-500 mt-1">by {book.author}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold">Goals Achieved</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">47/52</div>
                      <div className="text-sm text-gray-500">This year</div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center space-x-2 mb-2">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold">Books Read</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">12</div>
                      <div className="text-sm text-gray-500">Goal: 15 this year</div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center space-x-2 mb-2">
                        <Briefcase className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold">Skill Level</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">Senior</div>
                      <div className="text-sm text-gray-500">Next: Executive</div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center space-x-2 mb-2">
                        <Heart className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold">Motivation</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">98%</div>
                      <div className="text-sm text-gray-500">Daily average</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Brain className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">AI Career Coach</div>
                        <div className="text-sm opacity-90">Always here to support you • Online 24/7</div>
                      </div>
                    </div>
                  </div>
                </div>

                <ScrollArea className="h-96 p-4 bg-gray-50">
                  <div className="space-y-4">
                    {chatMessages.map((message) => (
                      <div key={message.id} className="space-y-2">
                        <div className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                          <div className="flex items-start space-x-2 max-w-[85%]">
                            {message.sender === "coach" && (
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <Brain className="h-4 w-4 text-white" />
                              </div>
                            )}
                            <div>
                              <div
                                className={`rounded-lg p-3 ${
                                  message.sender === "user"
                                    ? "bg-blue-600 text-white"
                                    : message.type === "encouragement"
                                      ? "bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200"
                                      : message.type === "challenge"
                                        ? "bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-200"
                                        : message.type === "milestone"
                                          ? "bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200"
                                          : "bg-white border"
                                }`}
                              >
                                <div className="text-sm whitespace-pre-line">{message.content}</div>

                                {message.metadata?.resources && (
                                  <div className="mt-3 pt-2 border-t border-gray-200">
                                    <div className="text-xs font-semibold text-gray-700 mb-1">
                                      📚 Recommended Resources:
                                    </div>
                                    <div className="space-y-1">
                                      {message.metadata.resources.map((resource, index) => (
                                        <div key={index} className="text-xs text-blue-600 flex items-center">
                                          <ChevronRight className="h-3 w-3 mr-1" />
                                          {resource}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {message.metadata?.nextSteps && (
                                  <div className="mt-3 pt-2 border-t border-gray-200">
                                    <div className="text-xs font-semibold text-gray-700 mb-1">🎯 Next Steps:</div>
                                    <div className="space-y-1">
                                      {message.metadata.nextSteps.map((step, index) => (
                                        <div key={index} className="text-xs text-gray-600 flex items-center">
                                          <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                                          {step}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="text-xs text-gray-400 mt-1 px-1">
                                {message.timestamp}
                                {message.type && (
                                  <span className="ml-2">
                                    {message.type === "encouragement" && "💪"}
                                    {message.type === "challenge" && "🎯"}
                                    {message.type === "milestone" && "🏆"}
                                    {message.type === "recommendation" && "💡"}
                                  </span>
                                )}
                              </div>
                            </div>
                            {message.sender === "user" && (
                              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                                <Users className="h-4 w-4 text-gray-600" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}

                    {isPlaying && currentMessageIndex < careerChatMessages.length - 1 && (
                      <div className="flex justify-start">
                        <div className="flex items-start space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                            <Brain className="h-4 w-4 text-white" />
                          </div>
                          <div className="bg-white border rounded-lg p-3">
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                              <div
                                className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                              <span className="text-xs text-gray-500 ml-2">Coach is thinking...</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                <div className="p-4 border-t bg-white">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Sparkles className="h-4 w-4" />
                    <span>AI Coach • Always Encouraging • Personalized Growth • Auto Demo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Features Panel */}
            <div className="mt-8 space-y-4">
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center text-green-700">
                    <Heart className="h-5 w-5 mr-2" />
                    Always-On Support Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Coffee className="h-4 w-4 text-green-600" />
                    <div className="text-sm">
                      <div className="font-medium">Morning Motivation</div>
                      <div className="text-gray-600">Daily personalized encouragement & goal setting</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-4 w-4 text-green-600" />
                    <div className="text-sm">
                      <div className="font-medium">Smart Reading Recommendations</div>
                      <div className="text-gray-600">AI-curated books based on your career goals</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Lightbulb className="h-4 w-4 text-green-600" />
                    <div className="text-sm">
                      <div className="font-medium">Skill Gap Analysis</div>
                      <div className="text-gray-600">Identifies areas for improvement & creates action plans</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-green-600" />
                    <div className="text-sm">
                      <div className="font-medium">Progress Tracking</div>
                      <div className="text-gray-600">Weekly reviews, milestone celebrations & adjustments</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center text-purple-700">
                    <Award className="h-5 w-5 mr-2" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {learningProgress.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 bg-white rounded border">
                      <Trophy className="h-4 w-4 text-yellow-500" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">{achievement.title}</div>
                        <div className="text-xs text-gray-500">{achievement.description}</div>
                      </div>
                      <div className="text-xs text-gray-400">{achievement.date}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-center space-x-2 mb-2">
                    <Rocket className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold">Career Growth</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">+2 Levels</div>
                  <div className="text-sm text-gray-500">In 6 months</div>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold">Salary Impact</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">+35%</div>
                  <div className="text-sm text-gray-500">Average increase</div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* ParrotfyIA Tab */}
          <TabsContent value="parrotfy">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">ParrotfyIA</h3>
                      <p className="text-gray-600">Conversational AI CRM Assistant with OpenAI GPT-4</p>
                      <div className="flex gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-transparent"
                          onClick={() => window.open("https://www.parrotfy.com/", "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Parrotfy Platform
                        </Button>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    ParrotfyIA is a conversational AI assistant powered by <strong>OpenAI ChatGPT 4.0</strong> that
                    transforms how SMEs interact with their ERP system. Instead of navigating complex interfaces, simply
                    chat with your AI assistant to manage customers, projects, invoicing, and business operations
                    through natural conversation.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="h-5 w-5 text-purple-600" />
                        <span className="font-semibold">SME Clients</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">5,000+</div>
                      <div className="text-sm text-gray-500">Using Parrotfy ERP</div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-purple-600" />
                        <span className="font-semibold">Efficiency Gain</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">60%</div>
                      <div className="text-sm text-gray-500">Faster operations</div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="h-5 w-5 text-purple-600" />
                        <span className="font-semibold">Response Time</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">{"<1s"}</div>
                      <div className="text-sm text-gray-500">AI assistant response</div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-purple-600" />
                        <span className="font-semibold">Task Accuracy</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">98%</div>
                      <div className="text-sm text-gray-500">Correct operations</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">AI-Powered ERP Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">OpenAI ChatGPT 4.0</Badge>
                      <Badge variant="secondary">Conversational CRM</Badge>
                      <Badge variant="secondary">Project Management</Badge>
                      <Badge variant="secondary">Electronic Invoicing</Badge>
                      <Badge variant="secondary">Inventory Control</Badge>
                      <Badge variant="secondary">Financial Reports</Badge>
                      <Badge variant="secondary">Customer Satisfaction</Badge>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-700 mb-2 flex items-center">
                      <Brain className="h-4 w-4 mr-2" />
                      Conversational ERP Management
                    </h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      <div>• "Show me this month's top customers and revenue"</div>
                      <div>• "Create a quote for ABC Company with our premium package"</div>
                      <div>• "What projects are behind schedule this week?"</div>
                      <div>• "Generate invoice for Project XYZ and send payment reminder"</div>
                      <div>• "How is our inventory looking for next month's production?"</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">ParrotfyIA Assistant</div>
                      <div className="text-sm opacity-90">Connected to Parrotfy ERP • Powered by OpenAI GPT-4</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-4 h-80 overflow-y-auto bg-gradient-to-b from-purple-50 to-white">
                  {parrotfyChatMessages.map((message, index) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className="flex items-start space-x-2 max-w-[85%]">
                        {(message.sender === "assistant" || message.sender === "tutor") && (
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <MessageSquare className="h-4 w-4 text-white" />
                          </div>
                        )}
                        <div>
                          <div
                            className={`rounded-lg p-3 ${
                              message.sender === "user"
                                ? "bg-purple-600 text-white"
                                : "bg-white border border-purple-200"
                            }`}
                          >
                            <div className="text-sm whitespace-pre-line">{message.content}</div>
                          </div>
                          <div className="text-xs text-gray-400 mt-1 px-1">{message.timestamp}</div>
                        </div>
                        {message.sender === "user" && (
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                            <Users className="h-4 w-4 text-gray-600" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {parrotfyIsPlaying && parrotfyMessageIndex < parrotfyBusinessMessages.length - 1 && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-white border rounded-lg p-3">
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                            <span className="text-xs text-gray-500 ml-2">ParrotfyIA is analyzing your ERP data...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ERP Data Panels */}
                  {parrotfyChatMessages.length > 3 && (
                    <>
                      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <DollarSign className="h-4 w-4 text-blue-600" />
                            <span className="text-sm font-semibold text-blue-700">Sales & Revenue</span>
                          </div>
                          <Badge variant="secondary" className="bg-blue-200 text-blue-800">
                            Live ERP Data
                          </Badge>
                        </div>
                        <div className="space-y-1 text-xs text-blue-700">
                          <div>• Monthly Revenue: $89,450 (112% of target)</div>
                          <div>• Top Client: TechSolutions Inc. ($28,900)</div>
                          <div>• Active Quotes: 12 pending ($45,600 potential)</div>
                          <div>• Conversion Rate: 68% this month</div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-semibold text-green-700">Project Status</span>
                        </div>
                        <div className="space-y-1 text-xs text-green-700">
                          <div>🟢 8 projects on schedule</div>
                          <div>🟡 3 projects need attention</div>
                          <div>🔴 1 project overdue (requires immediate action)</div>
                          <div>📊 Overall completion rate: 87%</div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-200 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <FileText className="h-4 w-4 text-orange-600" />
                          <span className="text-sm font-semibold text-orange-700">Invoicing & Collections</span>
                        </div>
                        <div className="space-y-1 text-xs text-orange-700">
                          <div>💰 Outstanding invoices: $23,400 (6 invoices)</div>
                          <div>⏰ Average collection time: 18 days</div>
                          <div>📧 Auto-reminders sent: 4 this week</div>
                          <div>✅ Payment success rate: 94%</div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-4 border-t bg-white">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Brain className="h-4 w-4" />
                    <span>Powered by OpenAI GPT-4 • Connected to Parrotfy ERP • Real-time Business Intelligence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ERP Management Features */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <Building2 className="h-5 w-5 mr-2" />
                    Conversational ERP Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Users className="h-4 w-4 text-purple-600" />
                    <div className="text-sm">
                      <div className="font-medium">Customer & Sales Management</div>
                      <div className="text-gray-600">CRM, quotes, proposals, and online store integration</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="h-4 w-4 text-purple-600" />
                    <div className="text-sm">
                      <div className="font-medium">Project & Work Management</div>
                      <div className="text-gray-600">Complete work cycle, scheduling, inventory, production boards</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-4 w-4 text-purple-600" />
                    <div className="text-sm">
                      <div className="font-medium">Electronic Invoicing & Collections</div>
                      <div className="text-gray-600">Automated billing, online payments, bank reconciliation</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-4 w-4 text-purple-600" />
                    <div className="text-sm">
                      <div className="font-medium">Customer Experience & Collaboration</div>
                      <div className="text-gray-600">Satisfaction surveys, NPS tracking, team collaboration</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700">
                    <Brain className="h-5 w-5 mr-2" />
                    AI-Powered Business Intelligence
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="h-4 w-4 text-blue-600" />
                    <div className="text-sm">
                      <div className="font-medium">Real-time Analytics</div>
                      <div className="text-gray-600">Instant business insights through natural conversation</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-4 w-4 text-blue-600" />
                    <div className="text-sm">
                      <div className="font-medium">Automated Operations</div>
                      <div className="text-gray-600">AI handles routine tasks and generates reports</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                    <div className="text-sm">
                      <div className="font-medium">Predictive Insights</div>
                      <div className="text-gray-600">Forecast trends and identify opportunities</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-4 w-4 text-blue-600" />
                    <div className="text-sm">
                      <div className="font-medium">Natural Language Interface</div>
                      <div className="text-gray-600">No complex menus - just ask your AI assistant</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Success Metrics Overview */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">EcosueloBot</h3>
              <p className="text-gray-600 mb-4">WhatsApp + OpenAI GPT-4 for smart farming</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Active Farmers</span>
                  <span className="font-semibold">15,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Crop Yield Increase</span>
                  <span className="font-semibold text-green-600">+23%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">API Integrations</span>
                  <span className="font-semibold">3 Major</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Launch Your Career</h3>
              <p className="text-gray-600 mb-4">AI coach that's always encouraging growth</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Career Accelerations</span>
                  <span className="font-semibold">8,500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Avg Salary Increase</span>
                  <span className="font-semibold text-blue-600">+35%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Daily Engagement</span>
                  <span className="font-semibold">98%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ParrotfyIA</h3>
              <p className="text-gray-600 mb-4">Conversational AI ERP assistant with OpenAI GPT-4</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">SME Clients</span>
                  <span className="font-semibold">5,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Efficiency Gain</span>
                  <span className="font-semibold text-purple-600">60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Task Accuracy</span>
                  <span className="font-semibold text-purple-600">98%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-0">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-3xl font-bold mb-4">Ready to Build Your AI Executive?</h3>
              <p className="text-xl mb-6 opacity-90">
                Join thousands of businesses already using Neural AI Executives to transform their operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Rocket className="h-5 w-5 mr-2" />
                  Start Building Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
