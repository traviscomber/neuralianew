import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How are AI executives different from chatbots?",
      answer:
        "AI executives are designed for strategic thinking and autonomous execution. Unlike chatbots that respond to queries, they proactively analyze situations, make decisions, and execute complex workflows without constant supervision.",
    },
    {
      question: "What kind of tasks can AI executives handle?",
      answer:
        "They excel at strategic planning, data analysis, process optimization, stakeholder communication, project management, and complex decision-making that typically requires senior-level thinking.",
    },
    {
      question: "How secure is my data with Neuralia?",
      answer:
        "We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and full audit trails. Your data never leaves our secure infrastructure and is never used to train models.",
    },
    {
      question: "Can I customize the AI executive for my industry?",
      answer:
        "Absolutely. Our AI executives can be trained on your specific industry knowledge, company processes, and decision-making frameworks to operate exactly how you need them to.",
    },
    {
      question: "What's the ROI of deploying AI executives?",
      answer:
        "Most clients see 60-80% reduction in management overhead and 3-5x faster decision-making cycles. The average ROI is 400% within the first 6 months of deployment.",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Everything you need to know about AI executives</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
