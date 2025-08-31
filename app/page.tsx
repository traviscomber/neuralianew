"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Brain,
  Zap,
  Shield,
  Users,
  BarChart3,
  Star,
  Play,
  Pause,
  ArrowRight,
  CheckCircle,
  Globe,
  Smartphone,
  TrendingUp,
  Target,
} from "lucide-react"

export default function LandingPage() {
  const [currentDemo, setCurrentDemo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  const demos = [
    {
      id: "ecosuelo",
      name: "EcosueloLab",
      description: "Career coaching and professional development",
      color: "from-emerald-500 to-teal-600",
      messages: [
        { sender: "user", text: "Hola, necesito ayuda para encontrar trabajo en tecnología" },
        {
          sender: "bot",
          text: "¡Hola! Soy tu coach de carrera de EcosueloLab. Te ayudo a encontrar oportunidades en tech. ¿Qué área te interesa más?",
        },
        { sender: "user", text: "Me interesa el desarrollo web, pero no tengo experiencia formal" },
        {
          sender: "bot",
          text: "Perfecto! El desarrollo web es muy demandado. Te recomiendo empezar con HTML, CSS y JavaScript. ¿Has considerado hacer proyectos personales para tu portafolio?",
        },
        { sender: "user", text: "No, ¿qué tipo de proyectos me recomiendas?" },
        {
          sender: "bot",
          text: "Te sugiero: 1) Una página web personal, 2) Un e-commerce básico, 3) Una app de tareas. Estos proyectos muestran habilidades clave que buscan los empleadores.",
        },
      ],
    },
    {
      id: "despega",
      name: "Despega tu Carrera",
      description: "Personal career acceleration and mentorship",
      color: "from-blue-500 to-indigo-600",
      messages: [
        { sender: "user", text: "Quiero cambiar de carrera pero tengo miedo de empezar de cero" },
        {
          sender: "bot",
          text: "Entiendo tu preocupación. Cambiar de carrera es un gran paso, pero también una oportunidad increíble. ¿En qué área trabajas actualmente?",
        },
        { sender: "user", text: "Trabajo en marketing, pero me atrae mucho la programación" },
        {
          sender: "bot",
          text: "¡Excelente! Tu experiencia en marketing es muy valiosa en tech. Muchas empresas buscan desarrolladores que entiendan el negocio. ¿Has probado algún lenguaje de programación?",
        },
        { sender: "user", text: "Solo he hecho algunos tutoriales de Python" },
        {
          sender: "bot",
          text: "Python es perfecto para empezar. Te recomiendo enfocarte en desarrollo web con Django o Flask. Tu background en marketing te dará ventaja en productos digitales.",
        },
      ],
    },
    {
      id: "parrotfy",
      name: "ParrotfyIA",
      description: "AI-powered language learning and pronunciation",
      color: "from-purple-500 to-pink-600",
      messages: [
        { sender: "user", text: "I want to improve my English pronunciation for job interviews" },
        {
          sender: "bot",
          text: "Great goal! I'm ParrotfyIA, your AI pronunciation coach. Let's work on interview-specific pronunciation. Can you tell me about your current English level?",
        },
        { sender: "user", text: "I can read and write well, but speaking makes me nervous" },
        {
          sender: "bot",
          text: "That's very common! Let's practice with common interview phrases. Try saying: 'I have experience in project management.' I'll analyze your pronunciation.",
        },
        { sender: "user", text: "I have experience in project management" },
        {
          sender: "bot",
          text: "Good! Your pronunciation is 85% accurate. Focus on the 'th' sound in 'the' and stress 'EX-per-ience'. Let's practice: 'I'm EX-per-ienced in project management.'",
        },
      ],
    },
  ]

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        const currentDemoMessages = demos[currentDemo].messages
        if (prev >= currentDemoMessages.length - 1) {
          // Move to next demo
          setCurrentDemo((prevDemo) => (prevDemo + 1) % demos.length)
          return 0
        }
        return prev + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [currentDemo, isPlaying, demos])

  const currentDemoData = demos[currentDemo]
  const visibleMessages = currentDemoData.messages.slice(0, currentMessageIndex + 1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Neuralia</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#use-cases" className="text-gray-600 hover:text-blue-600 transition-colors">
                Use Cases
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
                Testimonials
              </a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
                FAQ
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Sign In</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              AI Agents
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Ecosystem
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Build, deploy, and scale intelligent AI agents that transform how businesses operate. From customer
              service to data analysis, our platform makes AI accessible to everyone.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50K+</div>
                <div className="text-gray-600">Active Agents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">150+</div>
                <div className="text-gray-600">Integrations</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Start Building <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo <Play className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">See Our AI Agents in Action</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience real conversations with our specialized AI agents across different industries and use cases.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4 bg-gray-100 rounded-lg p-1">
                {demos.map((demo, index) => (
                  <button
                    key={demo.id}
                    onClick={() => {
                      setCurrentDemo(index)
                      setCurrentMessageIndex(0)
                    }}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      currentDemo === index ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {demo.name}
                  </button>
                ))}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="ml-4 p-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader className={`bg-gradient-to-r ${currentDemoData.color} text-white`}>
                <CardTitle className="flex items-center justify-between">
                  <span>{currentDemoData.name}</span>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Live Demo
                  </Badge>
                </CardTitle>
                <CardDescription className="text-white/90">{currentDemoData.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {visibleMessages.map((message, index) => (
                    <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                  {isPlaying && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg px-4 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to build, deploy, and manage intelligent AI agents at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Intelligent Conversations</CardTitle>
                <CardDescription>
                  Advanced NLP capabilities that understand context, intent, and nuance for natural interactions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Sub-second response times with optimized AI models and global edge deployment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>
                  Bank-level encryption, compliance certifications, and privacy-first architecture.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Multi-Agent Orchestration</CardTitle>
                <CardDescription>
                  Coordinate multiple specialized agents to handle complex workflows and tasks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>
                  Real-time insights, performance metrics, and detailed conversation analytics.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Global Scale</CardTitle>
                <CardDescription>
                  Deploy worldwide with automatic scaling, load balancing, and 99.9% uptime SLA.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Use Cases</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI agents are transforming industries and solving real business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-emerald-50 to-teal-50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-emerald-800">EcosueloLab</CardTitle>
                <CardDescription className="text-emerald-700">
                  Career coaching and professional development platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-emerald-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-emerald-600" />
                    Personalized career guidance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-emerald-600" />
                    Skill assessment and recommendations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-emerald-600" />
                    Job market insights
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-emerald-600" />
                    Interview preparation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-blue-800">Despega tu Carrera</CardTitle>
                <CardDescription className="text-blue-700">Personal career acceleration and mentorship</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                    Career transition support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                    Personal branding guidance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                    Networking strategies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                    Goal setting and tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-purple-800">ParrotfyIA</CardTitle>
                <CardDescription className="text-purple-700">
                  AI-powered language learning and pronunciation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-purple-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-purple-600" />
                    Real-time pronunciation feedback
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-purple-600" />
                    Conversational practice
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-purple-600" />
                    Accent reduction training
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-purple-600" />
                    Progress tracking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of businesses and professionals worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "EcosueloLab helped me transition from marketing to tech in just 6 months. The personalized guidance
                  was incredible."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Maria Rodriguez</div>
                    <div className="text-sm text-gray-600">Software Developer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "ParrotfyIA improved my English pronunciation dramatically. I got the job I wanted thanks to better
                  communication skills."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-semibold">CL</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Carlos Lopez</div>
                    <div className="text-sm text-gray-600">Project Manager</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The career acceleration program gave me the confidence and strategy I needed to advance to senior
                  management."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-emerald-600 font-semibold">AS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Ana Silva</div>
                    <div className="text-sm text-gray-600">Senior Manager</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about our AI agents platform.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                How do I get started with building my first AI agent?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Getting started is simple! Sign up for a free account, choose from our pre-built templates or start from
                scratch, configure your agent's personality and knowledge base, then deploy with one click. Our
                step-by-step wizard guides you through the entire process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                What makes Neuralia different from other AI platforms?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Neuralia focuses on specialized, industry-specific AI agents rather than generic chatbots. Our agents
                are pre-trained for specific use cases like career coaching, language learning, and business consulting,
                providing more accurate and contextually relevant responses.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Can I integrate Neuralia agents with my existing systems?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We offer REST APIs, webhooks, and pre-built integrations with popular platforms like Slack, Microsoft
                Teams, Salesforce, and more. Our technical team can also help with custom integrations for enterprise
                clients.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">How secure is my data with Neuralia?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Security is our top priority. We use end-to-end encryption, comply with GDPR and SOC 2 standards, and
                never use your data to train our models. All data is processed in secure, isolated environments with
                regular security audits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">What kind of support do you provide?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We offer 24/7 technical support, comprehensive documentation, video tutorials, and a community forum.
                Enterprise customers get dedicated account managers and priority support with guaranteed response times.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Can I customize the AI agent's personality and responses?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes! You have full control over your agent's personality, tone, knowledge base, and response style. You
                can upload custom training data, set conversation flows, and even define specific responses for common
                scenarios.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">What languages do your AI agents support?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our agents support over 50 languages with native-level fluency. This includes major languages like
                English, Spanish, French, German, Chinese, Japanese, and many others. Language detection and switching
                happen automatically based on user input.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">How do you handle scaling and performance?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our platform automatically scales based on demand using cloud infrastructure across multiple regions. We
                guarantee 99.9% uptime and sub-second response times even during peak usage. Load balancing and caching
                ensure optimal performance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of companies already using Neuralia to automate workflows, enhance customer experiences,
              and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
            <p className="text-blue-200 text-sm mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Neuralia</span>
              </div>
              <p className="text-gray-400 mb-4">
                Building the future of AI-powered business automation and customer engagement.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Neuralia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
