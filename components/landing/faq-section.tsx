"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is vibe coding and how does it make AI better?",
    answer:
      "Vibe coding is our unique development methodology that prioritizes intuitive user experience and natural interaction patterns. Instead of building complex interfaces, we create AI that feels natural and responds the way humans expect. This approach results in higher adoption rates and better user satisfaction.",
  },
  {
    question: "How quickly can I deploy an AI agent for my business?",
    answer:
      "With our vibe coding approach, most AI agents can be deployed within 2-4 weeks. We focus on rapid prototyping and iterative development, allowing you to see results quickly and make adjustments based on real user feedback.",
  },
  {
    question: "What makes Neuralia different from other AI companies?",
    answer:
      "We combine cutting-edge AI technology with our signature vibe coding methodology. This means you get powerful AI that's actually usable. Our track record includes successful deployments like EcosueloLab (10,000+ farmers), ParrotfyIA (25,000+ language learners), and numerous enterprise solutions.",
  },
  {
    question: "Can your AI agents integrate with existing business systems?",
    answer:
      "Our vibe coding approach emphasizes seamless integration. We can connect with your existing CRM, databases, communication platforms (like WhatsApp, Slack, Teams), and custom APIs. The goal is to enhance your current workflow, not replace it.",
  },
  {
    question: "What kind of support do you provide after deployment?",
    answer:
      "We provide comprehensive support including 24/7 monitoring, regular performance optimization, user training, and continuous improvement based on usage analytics. Our vibe coding philosophy extends to support - we make sure your AI keeps working smoothly.",
  },
  {
    question: "How do you ensure data privacy and security?",
    answer:
      "Security is built into our vibe coding process from day one. We use enterprise-grade encryption, comply with GDPR and other privacy regulations, and can deploy on-premises or in your preferred cloud environment. Your data stays private and secure.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "Our vibe coding approach works across industries. We've successfully deployed AI solutions in agriculture (EcosueloLab), education (ParrotfyIA), career development, customer service, healthcare, finance, and manufacturing. The methodology adapts to any domain.",
  },
  {
    question: "How do you measure the success of an AI implementation?",
    answer:
      "We focus on real business metrics: user adoption rates, task completion times, customer satisfaction scores, cost savings, and ROI. Our vibe coding approach typically achieves 90%+ user adoption rates and measurable productivity improvements within the first month.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our vibe coding approach and AI solutions.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you understand how vibe coding can transform your business with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@neuralia.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                Contact Our Team
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
