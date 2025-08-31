"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Brain,
  MessageSquare,
  Zap,
  Shield,
  Globe,
  Users,
  BarChart3,
  Sparkles,
  ArrowRight,
  Star,
  Play,
  Pause,
  Bot,
  Briefcase,
  GraduationCap,
} from "lucide-react"

export default function LandingPage() {
  const [currentDemo, setCurrentDemo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [messageIndex, setMessageIndex] = useState(0)

  const demos = [
    {
      name: "EcosueloLab",
      description: "Análisis de suelos con IA",
      color: "from-green-500 to-emerald-600",
      messages: [
        { role: "user", content: "Necesito analizar mi suelo para cultivo de tomates" },
        {
          role: "assistant",
          content:
            "¡Perfecto! Para el cultivo de tomates necesitamos analizar pH, nutrientes y materia orgánica. ¿Tienes los datos del análisis de suelo?",
        },
        { role: "user", content: "Sí, pH 6.2, nitrógeno bajo, fósforo medio" },
        {
          role: "assistant",
          content:
            "Excelente. Con pH 6.2 estás en rango óptimo para tomates (6.0-6.8). Para el nitrógeno bajo, recomiendo fertilización con compost o urea. El fósforo medio está bien. ¿Qué superficie vas a cultivar?",
        },
      ],
    },
    {
      name: "Despega tu Carrera",
      description: "Coaching profesional personalizado",
      color: "from-blue-500 to-cyan-600",
      messages: [
        { role: "user", content: "Me siento estancado en mi trabajo actual" },
        {
          role: "assistant",
          content:
            "Entiendo esa sensación. Es muy común y el primer paso es reconocerlo. Cuéntame, ¿qué aspectos específicos te hacen sentir estancado? ¿Es el crecimiento profesional, los desafíos, o algo más?",
        },
        { role: "user", content: "Siento que no aprendo nada nuevo y las tareas son repetitivas" },
        {
          role: "assistant",
          content:
            "Esa falta de crecimiento puede ser muy desmotivante. Vamos a trabajar juntos para identificar oportunidades. ¿Has considerado proponer nuevos proyectos en tu área actual o explorar capacitaciones que te interesen?",
        },
      ],
    },
    {
      name: "ParrotfyIA",
      description: "Language learning with AI conversation",
      color: "from-purple-500 to-pink-600",
      messages: [
        { role: "user", content: "I want to practice my Spanish pronunciation" },
        {
          role: "assistant",
          content:
            "¡Excelente! Let's start with some basic phrases. Try saying 'Hola, ¿cómo estás?' - focus on rolling the 'r' in 'cómo'. I'll listen and give you feedback on your pronunciation.",
        },
        { role: "user", content: "Hola, como estas?" },
        {
          role: "assistant",
          content:
            "Good attempt! I noticed you missed the accent marks which affect pronunciation. Try 'CÓ-mo es-TÁS' with emphasis on those syllables. Also, don't forget the opening question mark: '¿Cómo estás?' Let's try again!",
        },
      ],
    },
  ]

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setMessageIndex((prev) => {
        const currentMessages = demos[currentDemo].messages
        if (prev >= currentMessages.length - 1) {
          // Move to next demo
          setCurrentDemo((prevDemo) => (prevDemo + 1) % demos.length)
          return 0
        }
        return prev + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [currentDemo, isPlaying, demos])

  const stats = [
    { label: "Active Users", value: "50K+", icon: Users },
    { label: "AI Conversations", value: "2M+", icon: MessageSquare },
    { label: "Success Rate", value: "98%", icon: BarChart3 },
    { label: "Languages", value: "25+", icon: Globe },
  ]

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Powered by GPT-4 and custom-trained models for specialized domains",
    },
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Engage in human-like conversations with context awareness and memory",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second response times with optimized infrastructure",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with global privacy standards",
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Communicate in 25+ languages with native-level fluency",
    },
    {
      icon: Sparkles,
      title: "Continuous Learning",
      description: "AI agents that improve over time through interaction and feedback",
    },
  ]

  const testimonials = [
    {
      name: "María González",
      role: "Agricultural Engineer",
      company: "AgroTech Solutions",
      content:
        "EcosueloLab transformed how we analyze soil composition. The AI recommendations increased our crop yield by 35%.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Carlos Mendoza",
      role: "Career Transition Specialist",
      company: "Professional Growth Inc",
      content:
        "The career coaching AI helped me transition from engineering to product management. The personalized guidance was invaluable.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Sarah Johnson",
      role: "Language Learning Coordinator",
      company: "Global Education Corp",
      content:
        "ParrotfyIA's pronunciation feedback is incredibly accurate. Our students improved their speaking skills 3x faster.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const faqs = [
    {
      question: "How does Neuralia's AI technology work?",
      answer:
        "Our AI agents are built on advanced language models, fine-tuned for specific domains like agriculture, career coaching, and language learning. They use natural language processing, machine learning, and domain expertise to provide accurate, contextual responses.",
    },
    {
      question: "Is my data secure with Neuralia?",
      answer:
        "Absolutely. We use enterprise-grade encryption, comply with GDPR and other privacy regulations, and never share your personal data with third parties. All conversations are encrypted and stored securely.",
    },
    {
      question: "Can I customize AI agents for my specific needs?",
      answer:
        "Yes! Our platform allows you to create custom AI agents tailored to your industry, use case, and specific requirements. You can train them on your data and customize their personality and expertise.",
    },
    {
      question: "What languages are supported?",
      answer:
        "We currently support 25+ languages including English, Spanish, French, German, Portuguese, Italian, Chinese, Japanese, and many more. Our AI agents can seamlessly switch between languages in the same conversation.",
    },
    {
      question: "How accurate are the AI recommendations?",
      answer:
        "Our AI agents maintain a 98% accuracy rate across different domains. They're continuously learning and improving through user interactions and expert feedback, ensuring high-quality recommendations.",
    },
    {
      question: "What's the pricing structure?",
      answer:
        "We offer flexible pricing plans starting from a free tier for basic usage, professional plans for individuals and small teams, and enterprise solutions for large organizations. Contact us for custom pricing based on your needs.",
    },
    {
      question: "How quickly can I get started?",
      answer:
        "You can start using our AI agents immediately after signing up. No setup required - just choose your use case and begin conversing. For custom agents, deployment typically takes 1-2 weeks.",
    },
    {
      question: "Do you offer API access?",
      answer:
        "Yes, we provide comprehensive APIs for developers who want to integrate our AI agents into their own applications. Full documentation and SDKs are available for popular programming languages.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Neuralia</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a href="#demos" className="text-gray-600 hover:text-gray-900">
                Demos
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">
                Testimonials
              </a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900">
                FAQ
              </a>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Future of
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                AI Agents
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Specialized AI agents for agriculture, career coaching, language learning, and more. Built with
              cutting-edge technology to solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
                <Play className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features for Every Use Case</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI agents are designed with advanced capabilities to handle complex, domain-specific tasks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demos Section */}
      <section id="demos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See Our AI Agents in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch real conversations with our specialized AI agents
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4">
                <Button variant={isPlaying ? "default" : "outline"} size="sm" onClick={() => setIsPlaying(!isPlaying)}>
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  {isPlaying ? "Pause" : "Play"}
                </Button>
                <div className="flex gap-2">
                  {demos.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentDemo ? "bg-blue-600" : "bg-gray-300"
                      }`}
                      onClick={() => {
                        setCurrentDemo(index)
                        setMessageIndex(0)
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardHeader className={`bg-gradient-to-r ${demos[currentDemo].color} text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white flex items-center gap-2">
                      {currentDemo === 0 && <Bot className="h-5 w-5" />}
                      {currentDemo === 1 && <Briefcase className="h-5 w-5" />}
                      {currentDemo === 2 && <GraduationCap className="h-5 w-5" />}
                      {demos[currentDemo].name}
                    </CardTitle>
                    <CardDescription className="text-white/80">{demos[currentDemo].description}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Live Demo
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 min-h-[300px]">
                  {demos[currentDemo].messages.slice(0, messageIndex + 1).map((message, index) => (
                    <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isPlaying && messageIndex < demos[currentDemo].messages.length - 1 && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 p-3 rounded-lg">
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Professionals Worldwide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our users say about their experience with Neuralia AI agents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about Neuralia AI agents</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals already using Neuralia AI agents to solve complex problems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">Neuralia</span>
              </div>
              <p className="text-gray-400">
                Building the future of AI agents for specialized domains and real-world applications.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
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
