"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "What is vibe coding and how does it enhance AI solutions?",
    answer:
      "Vibe coding is our innovative approach to AI development that focuses on intuitive, human-centered design principles. It combines traditional coding methodologies with empathetic understanding of user needs, resulting in AI solutions that feel natural and responsive. This approach leads to better user adoption, higher satisfaction rates, and more effective AI implementations.",
  },
  {
    question: "How quickly can I integrate Neuralia's AI solutions into my existing systems?",
    answer:
      "Our vibe coding framework is designed for rapid integration. Most clients see initial results within 2-4 weeks, with full deployment typically completed within 6-8 weeks. Our solutions are built with compatibility in mind, minimizing disruption to your existing workflows while maximizing the benefits of AI automation.",
  },
  {
    question: "What industries benefit most from vibe coding AI solutions?",
    answer:
      "While our vibe coding approach is versatile across industries, we've seen exceptional results in enterprise automation, e-commerce, healthcare, education, and financial services. The key is that vibe coding adapts to the unique 'vibe' or culture of each industry, making AI solutions feel native to your business environment.",
  },
  {
    question: "Is technical expertise required to use Neuralia's AI tools?",
    answer:
      "Not at all! The beauty of vibe coding is its emphasis on intuitive design. Our AI solutions are built to be user-friendly, with interfaces that feel natural to use. We provide comprehensive training and support, but many clients find they can start benefiting from our tools immediately without extensive technical knowledge.",
  },
  {
    question: "How does Neuralia ensure data security and privacy?",
    answer:
      "Security is paramount in our vibe coding philosophy. We implement bank-level encryption, comply with international data protection regulations (GDPR, CCPA), and use secure cloud infrastructure. Our vibe coding approach includes security by design, meaning privacy and protection are built into every solution from the ground up.",
  },
  {
    question: "Can Neuralia's AI solutions scale with my business growth?",
    answer:
      "Scalability is a core principle of vibe coding. Our solutions are architected to grow with your business, from startup to enterprise level. Whether you're processing hundreds or millions of transactions, our AI infrastructure adapts seamlessly, maintaining performance and the intuitive vibe that makes our solutions special.",
  },
  {
    question: "What kind of support and training does Neuralia provide?",
    answer:
      "We offer comprehensive support including onboarding training, documentation, 24/7 technical support, and ongoing consultation. Our vibe coding philosophy extends to our support - we believe in empowering our clients with knowledge and providing assistance that feels helpful rather than overwhelming.",
  },
  {
    question: "How do I measure the ROI of implementing vibe coding AI solutions?",
    answer:
      "We provide detailed analytics and reporting tools that track key performance indicators relevant to your business. Most clients see measurable improvements in efficiency (average 95% gain), cost reduction (typically 30-50%), and user satisfaction within the first quarter of implementation. Our vibe coding approach ensures these benefits are sustainable long-term.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions About <span className="gradient-text">Vibe Coding</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Get answers to common questions about our vibe coding approach and how it can transform your business with
            AI.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
