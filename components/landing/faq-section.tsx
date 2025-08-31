"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "What is vibe coding and how does it work?",
    answer:
      "Vibe coding is our unique methodology that makes AI development feel natural and intuitive. Instead of complex configurations, our platform understands your intent and creates solutions that just work, focusing on the 'vibe' or feeling of seamless interaction.",
  },
  {
    question: "How quickly can I deploy AI agents?",
    answer:
      "With our vibe coding approach, most AI agents can be deployed in minutes, not months. Our platform handles the complex setup automatically, so you can focus on defining what you want your AI to accomplish.",
  },
  {
    question: "Do I need technical expertise to use Neuralia?",
    answer:
      "Not at all! Vibe coding makes AI accessible to everyone. Our intuitive interface and natural language setup mean you can create powerful AI solutions without any programming knowledge.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR adherence. Your data is processed securely and never used to train models for other customers.",
  },
  {
    question: "Can Neuralia integrate with my existing tools?",
    answer:
      "Yes! Our AI agents work seamlessly with popular platforms like Slack, Microsoft Teams, Salesforce, HubSpot, and hundreds of other tools through our extensive API and webhook support.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer 24/7 technical support, comprehensive documentation, video tutorials, and dedicated customer success managers for enterprise clients. Our vibe coding philosophy extends to our support - it's designed to be helpful and human.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We offer flexible pricing based on usage and features. Start with our free tier to explore vibe coding, then scale up as your needs grow. Enterprise plans include custom pricing and dedicated support.",
  },
  {
    question: "What makes Neuralia different from other AI platforms?",
    answer:
      "Our vibe coding methodology focuses on creating AI that feels natural and intuitive. While other platforms require complex setup and technical expertise, we make AI accessible through intelligent automation and user-friendly design.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about vibe coding and our AI platform.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
