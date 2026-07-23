/**
 * Travis: Reusable WhatsApp Sales Agent for N3uralia
 * This file contains shared types and interfaces for the Travis agent.
 * Usage: Import in your webhook endpoint to build Travis for your project.
 */

export interface TravisConfig {
  /** Agent name (e.g., "Travis", "Sofia", etc.) */
  agentName: string
  /** Company name (e.g., "N3uralia") */
  companyName: string
  /** OpenAI model to use (e.g., "gpt-4o-mini") */
  model: string
  /** Team WhatsApp phone number to receive handoff alerts */
  teamNotifyPhone: string
  /** System prompt prefix (before catalog is injected) */
  systemPromptPrefix: string
  /** Custom catalog markdown for the system prompt */
  catalogMarkdown: string
  /** Pricing and quotation approach */
  pricingApproach: string
}

export interface WebhookPayload {
  typeWebhook: "incomingMessageReceived" | string
  senderData: {
    chatId: string
    sender: string
    chatName?: string
  }
  messageData?: {
    typeMessage: string
    textMessageData?: {
      textMessage: string
    }
  }
}

export interface TravisReply {
  reply: string
  handoff: boolean
}

export interface GreenAPIMessage {
  type: "incoming" | "outgoing"
  timestamp?: string
  textMessage?: string
  extendedTextMessage?: {
    text: string
  }
}

export interface HandoffNotification {
  contact: string
  phone: string
  lastMessage: string
  timestamp: string
}
