"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How is this different from ChatGPT or other AI tools?",
      answer:
        "Unlike conversational AI tools, Neuralia deploys autonomous AI executives that can think strategically, make decisions independently, and execute complex multi-step plans. They're designed to work like senior team members, not just answer questions.",
    },
    {
      question: "What does 'AI executive' actually mean?",
      answer:
        "An AI executive is an autonomous agent that can analyze business contexts, make strategic decisions, coordinate with other systems, and execute plans over time. Think of it as hiring a senior executive who happens to be AI-powered and can work 24/7.",
    },
    {
      question: "How quickly can I integrate this into my existing systems?",
      answer:
        "Most developers have their first AI executive deployed within hours. Our APIs are RESTful, documentation is comprehensive, and we provide SDKs for popular languages. No complex setup or infrastructure changes required.",
    },
    {
      question: "Is this secure enough for enterprise use?",
      answer:
        "Absolutely. We use bank-grade encryption, maintain SOC 2 compliance, provide detailed audit logs, and support on-premise deployment for sensitive workloads. Your data never leaves your control.",
    },
    {
      question: "Can AI executives work together on complex projects?",
      answer:
        "Yes, our multi-agent orchestration system allows multiple AI executives to collaborate, share context, and coordinate their efforts. They can handle complex projects that require different areas of expertise.",
    },
    {
      question: "What happens if an AI executive makes a wrong decision?",
      answer:
        "AI executives include built-in safeguards, approval workflows for critical decisions, and comprehensive logging. You maintain full oversight and can set boundaries for autonomous actions.",
    },
    {
      question: "How do you handle context and memory?",
      answer:
        "Each AI executive maintains persistent memory of all interactions, decisions, and outcomes. They learn from experience and can reference historical context to make better decisions over time.",
    },
    {
      question: "What's the pricing model?",
      answer:
        "We offer flexible pricing based on the number of AI executives deployed and their usage. Start with our free tier to deploy your first executive, then scale as needed. Enterprise plans include custom SLAs and dedicated support.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Questions Developers
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Actually Ask
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real answers to the technical questions that matter most when evaluating AI executive deployment.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-muted-foreground leading-relaxed text-base">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Still have questions? Our technical team is here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:developers@neuralia.ai"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Contact Technical Team
            </a>
            <a
              href="/docs"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
