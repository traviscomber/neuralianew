"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export function FAQSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Know</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to the most common questions about AI executives and how they can transform your business.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="bg-card/50 backdrop-blur-sm rounded-lg border px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              What makes AI executives different from regular chatbots?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              AI executives are designed for strategic thinking and autonomous execution, not just conversation. They
              understand business context, make complex decisions, analyze data, and take action to achieve specific
              objectives. Unlike chatbots that respond to queries, AI executives proactively identify opportunities,
              solve problems, and drive results without constant human oversight.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card/50 backdrop-blur-sm rounded-lg border px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              How quickly can I deploy an AI executive?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Most AI executives can be deployed within 24-48 hours. Our streamlined onboarding process includes data
              integration, custom training on your business context, and initial configuration. More complex
              implementations with extensive customization typically take 1-2 weeks. We provide full support throughout
              the deployment process.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card/50 backdrop-blur-sm rounded-lg border px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              What kind of decisions can AI executives make autonomously?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              AI executives can handle a wide range of strategic and operational decisions including resource
              allocation, market analysis, customer segmentation, pricing optimization, workflow management, and
              performance optimization. You set the parameters and objectives, and they execute within those boundaries.
              Critical decisions can be configured to require human approval.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card/50 backdrop-blur-sm rounded-lg border px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              How secure is my business data?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              We implement bank-level security with end-to-end encryption, zero-trust architecture, and SOC 2 Type II
              compliance. Your data is processed in isolated environments with role-based access controls. We never
              share or use your data to train models for other clients. All AI executive actions are logged and
              auditable for complete transparency.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card/50 backdrop-blur-sm rounded-lg border px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              Can AI executives integrate with my existing tools?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Yes, AI executives are built with integration in mind. They connect seamlessly with popular business tools
              including CRM systems (Salesforce, HubSpot), project management (Asana, Jira), analytics platforms (Google
              Analytics, Mixpanel), and communication tools (Slack, Teams). We also provide APIs and webhooks for custom
              integrations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card/50 backdrop-blur-sm rounded-lg border px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              What's the ROI of implementing AI executives?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Most clients see positive ROI within 30-60 days. Typical benefits include 30-50% reduction in operational
              costs, 25-40% improvement in decision-making speed, and 20-35% increase in revenue through optimized
              strategies. The exact ROI depends on your use case, but our AI executives are designed to pay for
              themselves quickly through efficiency gains and strategic improvements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="bg-card/50 backdrop-blur-sm rounded-lg border px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              Do I need technical expertise to manage AI executives?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              No technical expertise is required for day-to-day management. AI executives are designed with intuitive
              interfaces that business users can easily navigate. You communicate with them in natural language, set
              objectives through simple forms, and monitor performance through visual dashboards. Our team handles all
              technical maintenance and updates.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="bg-card/50 backdrop-blur-sm rounded-lg border px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              What happens if an AI executive makes a mistake?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              AI executives include built-in safeguards and learning mechanisms. All actions are logged and can be
              reviewed or reversed if needed. They learn from mistakes and adjust their decision-making accordingly. You
              can set approval workflows for high-impact decisions and configure alerts for unusual activities. We also
              provide 24/7 monitoring and support to address any issues quickly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
