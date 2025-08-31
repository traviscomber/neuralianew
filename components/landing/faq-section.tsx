"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, MessageSquare } from "lucide-react"

const faqs = [
  {
    question: "What is vibe coding and how is it different from traditional AI development?",
    answer:
      "Vibe coding is our unique approach to AI development that focuses on creating authentic, emotionally intelligent interactions. Unlike traditional AI that prioritizes functionality, vibe coding emphasizes understanding context, personality, and emotional nuance to create AI that feels genuinely human and connects with users on a deeper level.",
  },
  {
    question: "How quickly can I deploy a vibe-coded AI agent?",
    answer:
      "With Neuralia's platform, you can have a basic AI agent running in minutes. Our intuitive interface and pre-built templates allow for rapid deployment, while our vibe coding methodology ensures your AI maintains authentic personality and brand alignment from day one.",
  },
  {
    question: "Can the AI handle multiple languages and cultural contexts?",
    answer:
      "Our vibe-coded AI agents are designed with cultural intelligence built-in. They can communicate naturally in multiple languages while understanding cultural nuances, local expressions, and context-specific communication styles.",
  },
  {
    question: "How does Neuralia ensure data privacy and security?",
    answer:
      "We implement enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, and GDPR adherence. Your data remains private and secure, with full control over how it's used and stored. We never use your data to train models for other customers.",
  },
  {
    question: "What kind of support and training do you provide?",
    answer:
      "We offer comprehensive onboarding, 24/7 technical support, and ongoing training resources. Our team works closely with you to ensure your AI agents are perfectly aligned with your brand voice and business objectives.",
  },
  {
    question: "Can I integrate Neuralia AI with my existing systems?",
    answer:
      "Yes! Our platform offers robust APIs and integrations with popular tools like CRM systems, help desks, e-commerce platforms, and communication channels. We support seamless integration with your existing workflow.",
  },
  {
    question: "What makes Neuralia's AI more empathetic than other solutions?",
    answer:
      "Our vibe coding methodology incorporates emotional intelligence training, context awareness, and personality modeling. This allows our AI to recognize emotional cues, respond with appropriate empathy, and maintain consistent personality traits that align with your brand values.",
  },
  {
    question: "How do you measure the success of vibe-coded AI implementations?",
    answer:
      "We track both traditional metrics (response time, resolution rate) and vibe-specific metrics (emotional satisfaction, personality consistency, brand alignment). Our analytics dashboard provides insights into how well your AI is connecting with users on an emotional level.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything You Need to Know</h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about vibe coding and how Neuralia can transform your AI experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <MessageSquare className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Still Have Questions?</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Our team is here to help you understand how vibe coding can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Schedule a Demo</Button>
                <Button variant="outline" size="lg">
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
