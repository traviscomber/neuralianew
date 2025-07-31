"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ChevronDown, Brain, Shield, CreditCard, Zap, Users, MessageCircle } from "lucide-react"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (value: string) => {
    setOpenItems((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]))
  }

  const faqs = [
    {
      id: "what-are-neural-executives",
      icon: Brain,
      question: "What are Neural AI Executives?",
      answer:
        "Neural AI Executives are advanced AI systems trained on 175B parameters using quantum-inspired algorithms. They simulate C-suite executive thinking patterns, providing strategic decision-making, leadership insights, and business intelligence. Unlike ChatGPT, they're specifically designed for executive-level business functions with specialized training on corporate strategy, financial planning, and operational excellence.",
    },
    {
      id: "how-trial-works",
      icon: Zap,
      question: "How does the 5-day free trial work?",
      answer:
        "Simply deploy any AI executive and get full access for 5 days at no cost. During the trial, you can chat with your agent, receive strategic insights, and test all capabilities. No credit card required upfront. After 5 days, upgrade with USDT payment to continue using your neural executive, or the agent will be deactivated.",
    },
    {
      id: "why-usdt-only",
      icon: CreditCard,
      question: "Why do you only accept USDT payments?",
      answer:
        "We use USDT (Tether) for instant global transactions, lower fees, and enhanced privacy. USDT provides stability against market volatility while enabling seamless international payments. For enterprise clients requiring traditional payment methods, contact our team at hello@neuralia.ai for custom arrangements.",
    },
    {
      id: "vs-chatgpt",
      icon: Users,
      question: "How is this different from ChatGPT?",
      answer:
        "While ChatGPT is a general-purpose AI, our Neural Executives are specialized for C-suite functions. They're trained on executive decision patterns, corporate strategy frameworks, and business intelligence. Each agent has persistent memory of your business context, provides role-specific insights, and maintains executive-level conversation depth that general AI cannot match.",
    },
    {
      id: "integration",
      icon: Shield,
      question: "How do I integrate with my existing systems?",
      answer:
        "Neural Executives work through our secure chat interface initially. For enterprise clients, we offer API integrations, Slack/Teams bots, and custom integrations with your CRM, ERP, or business intelligence tools. All integrations maintain SOC 2 and ISO 27001 compliance with end-to-end encryption.",
    },
    {
      id: "security",
      icon: Shield,
      question: "Is my business data secure?",
      answer:
        "Absolutely. We maintain SOC 2 Type II and ISO 27001 certifications. All conversations are encrypted end-to-end, data is never used for training other models, and we offer on-premise deployment for enterprise clients. Your business intelligence remains completely confidential and is never shared or accessed by unauthorized parties.",
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about Neural AI Executives</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const Icon = faq.icon
            const isOpen = openItems.includes(faq.id)

            return (
              <Card key={faq.id} className="border-0 shadow-md">
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <CardHeader
                      className="cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => toggleItem(faq.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <CardTitle className="text-left text-lg">{faq.question}</CardTitle>
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 leading-relaxed pl-13">{faq.answer}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-4">
                Our team is here to help you understand how Neural AI Executives can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline">Email: hello@neuralia.ai</Button>
                <Button variant="outline">Telegram: @neuralia_support</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
