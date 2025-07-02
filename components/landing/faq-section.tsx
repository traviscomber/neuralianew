"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Brain, Shield, CreditCard, Zap, Users, Clock } from "lucide-react"

const faqs = [
  {
    icon: Brain,
    question: "What exactly are 'Neural AI Executives'?",
    answer:
      "Neural AI Executives are specialized AI agents trained on millions of executive decision-making patterns from Fortune 500 companies. Each agent combines advanced transformer neural networks (175B+ parameters) with quantum-inspired algorithms to provide strategic insights, automate complex decisions, and execute business functions at an executive level. Think of them as having a world-class CEO, CMO, or CTO available 24/7 for your business.",
  },
  {
    icon: Clock,
    question: "How does the 5-day free trial work?",
    answer:
      "Your 5-day free trial gives you complete access to all neural network capabilities with no limitations. Simply deploy any agent and start using it immediately. You'll get full executive-level insights, unlimited queries, and access to all premium features. After 5 days, you can upgrade with USDT payment to continue unlimited access, or the agent will pause until upgraded.",
  },
  {
    icon: CreditCard,
    question: "Why do you only accept USDT payments?",
    answer:
      "We use USDT (Tether) for several strategic reasons: 1) Instant global transactions without banking delays, 2) Lower fees than traditional payment processors, 3) Enhanced privacy and security for enterprise clients, 4) Seamless integration with our decentralized neural network infrastructure. USDT is stable, widely accepted, and allows us to serve clients worldwide without geographic payment restrictions.",
  },
  {
    icon: Zap,
    question: "How is this different from ChatGPT or other AI tools?",
    answer:
      "While ChatGPT is a general-purpose conversational AI, our Neural AI Executives are specialized business decision-makers. They're trained specifically on executive decision patterns, have access to real-time business data, can execute complex multi-step strategies, and integrate directly with your business tools. Think ChatGPT for conversations vs. our agents for running your business operations.",
  },
  {
    icon: Users,
    question: "Can these agents integrate with my existing business tools?",
    answer:
      "Yes! Our Neural AI Executives integrate natively with 200+ business tools including Salesforce, HubSpot, Slack, Microsoft Teams, Google Workspace, Zoom, Notion, and most major CRM, ERP, and communication platforms. They can read your data, generate reports, send communications, and execute decisions across your entire tech stack.",
  },
  {
    icon: Shield,
    question: "How secure is my business data?",
    answer:
      "Security is our top priority. We're SOC 2 Type II certified, ISO 27001 compliant, and GDPR compliant. All data is encrypted end-to-end, processed in secure cloud environments, and never stored permanently. Our neural networks run in isolated containers with zero-trust architecture. We also offer on-premise deployment for enterprise clients with the highest security requirements.",
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (value: string) => {
    setOpenItems((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Neural AI Executives and how they can transform your business operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon
            const isOpen = openItems.includes(index.toString())

            return (
              <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
                <Collapsible>
                  <CollapsibleTrigger className="w-full" onClick={() => toggleItem(index.toString())}>
                    <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                      <div className="flex items-center space-x-4 flex-1 text-left">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg font-semibold text-gray-900">{faq.question}</CardTitle>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 leading-relaxed pl-14">{faq.answer}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@neuralia.ai" className="text-blue-600 hover:text-blue-700 font-medium">
              Email: hello@neuralia.ai
            </a>
            <a href="https://t.me/neuralia_support" className="text-blue-600 hover:text-blue-700 font-medium">
              Telegram: @neuralia_support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
