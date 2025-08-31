"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FAQSection() {
  const faqs = [
    {
      question: "How does EcosueloLab's agentic AI work differently from regular chatbots?",
      answer:
        "EcosueloLab uses agentic OpenAI technology that can reason, plan, and take autonomous actions. Unlike simple chatbots that follow scripts, our AI executive can fetch data from external agricultural APIs, analyze complex soil conditions, and provide strategic recommendations. It thinks like a human agricultural expert but with access to vast databases and real-time information.",
    },
    {
      question: "What makes your AI executives different from automation tools?",
      answer:
        "Our AI executives use neural networks to think strategically and make complex decisions. They don't just automate tasks - they understand context, reason through problems, and adapt to new situations. They can handle unexpected scenarios, learn from interactions, and provide executive-level strategic thinking that traditional automation cannot match.",
    },
    {
      question: "How do you integrate with external APIs and existing systems?",
      answer:
        "Our agentic AI can seamlessly connect to any external API or database. For EcosueloLab, we integrate with agricultural databases, weather services, and soil analysis APIs. The AI agent autonomously fetches relevant data, processes it contextually, and presents insights through simple interfaces like WhatsApp. Integration typically takes 2-4 weeks depending on complexity.",
    },
    {
      question: "Can the AI executives work in different languages and regions?",
      answer:
        "Yes, our neural AI executives are multilingual and culturally aware. EcosueloLab, for example, operates in Spanish, Portuguese, and English, understanding regional farming practices and local agricultural conditions. The AI adapts its recommendations based on geographic location, climate data, and local farming traditions.",
    },
    {
      question: "How do you ensure data security and privacy?",
      answer:
        "We implement enterprise-grade security with end-to-end encryption, secure API connections, and compliance with international data protection standards. All conversations and data processing happen through secure channels, and we never store sensitive customer information without explicit consent.",
    },
    {
      question: "What kind of results can we expect from deploying an AI executive?",
      answer:
        "Results vary by industry, but our clients typically see 40-70% improvements in efficiency, 60-95% customer satisfaction rates, and significant cost reductions. EcosueloLab users report 40% yield increases and 60% fertilizer savings. We provide detailed ROI analysis and success metrics for each deployment.",
    },
    {
      question: "How long does it take to deploy a custom AI executive?",
      answer:
        "Deployment typically takes 3-8 weeks depending on complexity. This includes understanding your business processes, integrating with your systems, training the AI on your specific requirements, and testing. Simple conversational bots like EcosueloLab can be deployed faster, while complex financial or operations AIs may take longer.",
    },
    {
      question: "Do you provide ongoing support and AI executive optimization?",
      answer:
        "Yes, we provide 24/7 monitoring, continuous learning optimization, and regular performance reviews. Our AI executives improve over time through machine learning and feedback loops. We also provide training for your team and strategic consulting to maximize the AI's impact on your business.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Frequently{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Asked Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our AI executives and neural technology
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Common Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
