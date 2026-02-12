import { z } from "zod"

/**
 * API Version Management
 * Current version: v1
 * Supported versions: v1
 *
 * Versioning Strategy:
 * - Breaking changes → new version (v1 → v2)
 * - New endpoints → add to current version
 * - Deprecations → announced, moved to /deprecated
 *
 * Migration path: /api/v1/* → /api/v2/* when major changes occur
 */

export const API_VERSION = "v1"
export const API_VERSIONS = ["v1"] as const

export type ApiVersion = (typeof API_VERSIONS)[number]

// API Endpoint Metadata
export const API_ENDPOINTS = {
  // Living Agents
  livingAgents: {
    list: {
      path: "/api/v1/living-agents",
      method: "GET",
      description: "List all living agents",
      tags: ["Living Agents"],
      authentication: "optional",
    },
    create: {
      path: "/api/v1/living-agents",
      method: "POST",
      description: "Create a new living agent",
      tags: ["Living Agents"],
      authentication: "required",
    },
    get: {
      path: "/api/v1/living-agents/:id",
      method: "GET",
      description: "Get a specific living agent",
      tags: ["Living Agents"],
      authentication: "optional",
    },
    evolution: {
      path: "/api/v1/living-agents/:id/evolution",
      method: "GET",
      description: "Get agent evolution history",
      tags: ["Living Agents"],
      authentication: "optional",
    },
    interact: {
      path: "/api/v1/living-agents/:id/interact",
      method: "POST",
      description: "Interact with a living agent",
      tags: ["Living Agents"],
      authentication: "optional",
    },
  },

  // Agentic Systems
  agenticSystems: {
    list: {
      path: "/api/v1/agentic-systems",
      method: "GET",
      description: "List production-grade agentic systems",
      tags: ["Agentic Systems"],
      authentication: "optional",
    },
    deploy: {
      path: "/api/v1/agentic-systems",
      method: "POST",
      description: "Deploy a new agentic system",
      tags: ["Agentic Systems"],
      authentication: "required",
    },
  },

  // Chat & Conversions
  chat: {
    send: {
      path: "/api/v1/chat",
      method: "POST",
      description: "Send a message to conversational assistant",
      tags: ["Chat"],
      authentication: "optional",
    },
  },

  // Analytics
  analytics: {
    track: {
      path: "/api/v1/analytics",
      method: "POST",
      description: "Track user event or conversion",
      tags: ["Analytics"],
      authentication: "optional",
    },
    heatmap: {
      path: "/api/v1/analytics/heatmap",
      method: "POST",
      description: "Record heatmap data",
      tags: ["Analytics"],
      authentication: "optional",
    },
  },

  // Health & Monitoring
  health: {
    check: {
      path: "/api/v1/health",
      method: "GET",
      description: "System health status",
      tags: ["Monitoring"],
      authentication: "none",
    },
    stats: {
      path: "/api/v1/monitoring/stats",
      method: "GET",
      description: "Performance statistics",
      tags: ["Monitoring"],
      authentication: "required",
    },
  },
} as const

// Request/Response Schemas
export const schemas = {
  // Living Agents
  LivingAgent: z.object({
    id: z.string().uuid(),
    name: z.string(),
    archetype: z.enum(["Centinela", "Tejedor", "Historiador", "Visionario", "Maestro"]),
    description: z.string(),
    personality: z.record(z.string(), z.number()).optional(),
    status: z.enum(["active", "inactive", "archived"]),
    createdAt: z.date(),
    updatedAt: z.date(),
  }),

  AgentEvolution: z.object({
    id: z.string().uuid(),
    agentId: z.string().uuid(),
    previousPersonality: z.record(z.string(), z.number()),
    newPersonality: z.record(z.string(), z.number()),
    trigger: z.string(),
    timestamp: z.date(),
  }),

  ChatMessage: z.object({
    id: z.string().uuid(),
    role: z.enum(["user", "assistant"]),
    content: z.string(),
    timestamp: z.date(),
    metadata: z.record(z.unknown()).optional(),
  }),

  AnalyticsEvent: z.object({
    id: z.string().uuid(),
    eventName: z.string(),
    userId: z.string().optional(),
    properties: z.record(z.unknown()),
    timestamp: z.date(),
  }),

  HealthStatus: z.object({
    status: z.enum(["healthy", "degraded", "unhealthy"]),
    timestamp: z.string(),
    version: z.string(),
    environment: z.string(),
    services: z.record(
      z.object({
        status: z.string(),
        message: z.string().optional(),
      }),
    ),
  }),
}

export type LivingAgent = z.infer<typeof schemas.LivingAgent>
export type AgentEvolution = z.infer<typeof schemas.AgentEvolution>
export type ChatMessage = z.infer<typeof schemas.ChatMessage>
export type AnalyticsEvent = z.infer<typeof schemas.AnalyticsEvent>
export type HealthStatus = z.infer<typeof schemas.HealthStatus>

// Error Response Schema
export const ErrorResponse = z.object({
  status: z.literal("error"),
  message: z.string(),
  code: z.string(),
  details: z.record(z.unknown()).optional(),
  timestamp: z.string(),
  path: z.string().optional(),
})

export type ErrorResponse = z.infer<typeof ErrorResponse>

// Success Response Schema
export const SuccessResponse = z.object({
  status: z.literal("success"),
  data: z.unknown(),
  timestamp: z.string(),
  version: z.string(),
})

export type SuccessResponse = z.infer<typeof SuccessResponse>
