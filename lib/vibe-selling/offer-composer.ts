/**
 * Live Value Composer - Generates dynamic offers in real time
 * Composes scope, timeline, tech stack, and pricing dynamically
 */

import type { BuyerIntent } from "./intent-detector"

export interface OfferScope {
  components: string[]
  datasets: number
  timelineWeeks: number
  technology: string[]
  pricingModel: "fixed" | "monthly" | "revenue-share"
  estimatedBudget: string
  deliverables: string[]
}

export interface LiveOffer {
  headline: string
  scope: OfferScope
  vibes: string // Tone/positioning
  nextSteps: string[]
  visualPreview: string
}

const offerTemplates: Record<string, OfferScope> = {
  "explorer-startup": {
    components: ["1x Immersive Portal", "5x Heritage Datasets", "1x AI Curator"],
    datasets: 5,
    timelineWeeks: 4,
    technology: ["Next.js", "Supabase", "AI Agents"],
    pricingModel: "monthly",
    estimatedBudget: "$2K-5K/month",
    deliverables: ["Portal", "Datasets", "Documentation"],
  },
  "explorer-mid-market": {
    components: ["2x Portals", "12x Datasets", "1x AI Curator", "Analytics Dashboard"],
    datasets: 12,
    timelineWeeks: 8,
    technology: ["Next.js", "Supabase", "AI Agents", "Custom Analytics"],
    pricingModel: "monthly",
    estimatedBudget: "$5K-15K/month",
    deliverables: ["Dual Portals", "Datasets", "Analytics", "Training"],
  },
  "explorer-enterprise": {
    components: ["N3x Portals", "30x Datasets", "Multi-AI Curators", "Dome Integration", "VR Support"],
    datasets: 30,
    timelineWeeks: 16,
    technology: ["Next.js", "Supabase", "AI Agents", "WebGL", "VR.js"],
    pricingModel: "fixed",
    estimatedBudget: "$50K-200K",
    deliverables: ["Multi-Portal", "Full Datasets", "Immersive Experience", "Support"],
  },

  "builder-startup": {
    components: ["API Access", "Code Templates", "Deployment Guide"],
    datasets: 2,
    timelineWeeks: 2,
    technology: ["Node.js", "Vercel", "Supabase"],
    pricingModel: "monthly",
    estimatedBudget: "$500-1K/month",
    deliverables: ["APIs", "Starter Code", "Docs"],
  },
  "builder-mid-market": {
    components: ["Full API Suite", "Custom Stack", "Infra Setup", "Monitoring"],
    datasets: 8,
    timelineWeeks: 6,
    technology: ["Node.js/Python", "Custom Infra", "Vercel/AWS"],
    pricingModel: "monthly",
    estimatedBudget: "$3K-10K/month",
    deliverables: ["APIs", "Custom Code", "Infrastructure", "24/7 Support"],
  },
  "builder-enterprise": {
    components: ["Enterprise APIs", "White-label Option", "Managed Service", "SLA"],
    datasets: 50,
    timelineWeeks: 12,
    technology: ["Custom Stack", "Enterprise Infra", "Multi-region"],
    pricingModel: "fixed",
    estimatedBudget: "$100K-500K",
    deliverables: ["White-label Platform", "Full Support", "Custom Development"],
  },

  "buyer-startup": {
    components: ["Pre-built Solution", "1x Portal", "Basic Support"],
    datasets: 3,
    timelineWeeks: 1,
    technology: ["Off-the-shelf"],
    pricingModel: "monthly",
    estimatedBudget: "$1K-2K/month",
    deliverables: ["Ready-to-use Portal", "Basic Data"],
  },
  "buyer-mid-market": {
    components: ["Customized Solution", "2-3x Portals", "Data Integration", "Reporting"],
    datasets: 15,
    timelineWeeks: 4,
    technology: ["Next.js", "Supabase", "Custom Auth"],
    pricingModel: "monthly",
    estimatedBudget: "$5K-20K/month",
    deliverables: ["Turnkey Platform", "Data", "Monthly Reports"],
  },
  "buyer-enterprise": {
    components: ["Enterprise Solution", "Multi-portal", "SSO", "Advanced Analytics", "Compliance"],
    datasets: 100,
    timelineWeeks: 8,
    technology: ["Enterprise Stack", "Custom Security"],
    pricingModel: "fixed",
    estimatedBudget: "$200K-1M",
    deliverables: ["Enterprise Platform", "Full Data Library", "Dedicated Support"],
  },

  "partner-startup": {
    components: ["Revenue Share: 30%", "Co-marketing", "API Access"],
    datasets: 5,
    timelineWeeks: 2,
    technology: ["Shared Infrastructure"],
    pricingModel: "revenue-share",
    estimatedBudget: "30% of revenue",
    deliverables: ["Integration", "Co-promotion", "Revenue Split"],
  },
  "partner-mid-market": {
    components: ["Revenue Share: 20-40%", "Joint Go-to-market", "White-label Option"],
    datasets: 20,
    timelineWeeks: 6,
    technology: ["Shared + Custom"],
    pricingModel: "revenue-share",
    estimatedBudget: "20-40% of revenue",
    deliverables: ["White-label", "GTM Strategy", "Revenue Share"],
  },
  "partner-enterprise": {
    components: ["Strategic Partnership", "Equity Option", "Exclusive Territory", "Co-development"],
    datasets: "unlimited",
    timelineWeeks: 12,
    technology: ["Full Stack Collaboration"],
    pricingModel: "revenue-share",
    estimatedBudget: "Negotiable - equity/revenue mix",
    deliverables: ["Strategic Alliance", "Co-IP", "Exclusive Terms"],
  },
}

export function composeOffer(intent: BuyerIntent): LiveOffer {
  const templateKey = intent.suggestedOfferTemplate
  const scope = offerTemplates[templateKey] || offerTemplates["explorer-mid-market"]

  const headlines: Record<string, string> = {
    explorer:
      "Here's what a typical exploration looks like for teams like yours – no commitment, full transparency.",
    builder: "Here's the tech stack and timeline we'd recommend for your build:",
    buyer: "This is exactly what we'd deploy for your use case – turnkey, ready to go:",
    partner: "Let's build something bigger together – here's the partnership structure:",
  }

  const vibes: Record<string, string> = {
    explorer: "Curious. Collaborative. We show you what's possible.",
    builder: "Technical. Scalable. We build what you envision.",
    buyer: "Efficient. Results-focused. We deliver what you need.",
    partner: "Visionary. Aligned. We grow together.",
  }

  return {
    headline: headlines[intent.intent],
    scope,
    vibes: vibes[intent.intent],
    nextSteps: generateNextSteps(intent),
    visualPreview: generatePreview(scope),
  }
}

function generateNextSteps(intent: BuyerIntent): string[] {
  const steps: Record<string, string[]> = {
    explorer: ["1. Book a 20-min discovery call", "2. We'll sketch your vision", "3. Get a custom proposal"],
    builder: ["1. Share your tech requirements", "2. We architect a solution", "3. Start building"],
    buyer: ["1. Confirm your timeline", "2. We provision infrastructure", "3. Go live in days"],
    partner: ["1. Schedule partnership call", "2. Review terms", "3. Sign MoU & align on roadmap"],
  }
  return steps[intent.intent]
}

function generatePreview(scope: OfferScope): string {
  return `📦 ${scope.components.length} components | 📊 ${scope.datasets}+ datasets | ⏱️ ${scope.timelineWeeks} weeks | 💰 ${scope.estimatedBudget}`
}
