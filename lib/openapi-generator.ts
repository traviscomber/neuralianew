import { API_ENDPOINTS, API_VERSION, schemas } from "./api-schema"

/**
 * Generate OpenAPI 3.0.0 specification for N3uralia API
 * Used for documentation and client generation
 */
export function generateOpenAPISpec() {
  return {
    openapi: "3.0.0",
    info: {
      title: "N3uralia API",
      description:
        "Production-grade API for Living Agents and Agentic Systems. Powers real-time agent interactions and system orchestration.",
      version: API_VERSION,
      contact: {
        name: "N3uralia Support",
        url: "https://neuralia.ai",
        email: "support@neuralia.ai",
      },
      license: {
        name: "Proprietary",
        url: "https://neuralia.ai/license",
      },
    },
    servers: [
      {
        url: "https://api.neuralia.ai",
        description: "Production server",
      },
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
    tags: [
      {
        name: "Living Agents",
        description: "Endpoints for interacting with living agents",
      },
      {
        name: "Agentic Systems",
        description: "Production-grade agentic systems management",
      },
      {
        name: "Chat",
        description: "Conversational AI endpoints",
      },
      {
        name: "Analytics",
        description: "Event tracking and analytics",
      },
      {
        name: "Monitoring",
        description: "Health checks and monitoring",
      },
    ],
    paths: {
      "/api/v1/health": {
        get: {
          operationId: "getHealth",
          tags: ["Monitoring"],
          summary: "System health status",
          description: "Returns the current health status of all services",
          responses: {
            200: {
              description: "System is healthy",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/HealthStatus",
                  },
                },
              },
            },
            503: {
              description: "System is unhealthy",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/ErrorResponse",
                  },
                },
              },
            },
          },
        },
      },
      "/api/v1/living-agents": {
        get: {
          operationId: "listLivingAgents",
          tags: ["Living Agents"],
          summary: "List living agents",
          description: "Returns a list of all available living agents",
          parameters: [
            {
              name: "limit",
              in: "query",
              schema: { type: "integer", default: 10 },
              description: "Number of results to return",
            },
            {
              name: "offset",
              in: "query",
              schema: { type: "integer", default: 0 },
              description: "Offset for pagination",
            },
            {
              name: "archetype",
              in: "query",
              schema: {
                type: "string",
                enum: ["Curador", "Tejedora", "Cronista", "Visionario", "Arquitecto"],
              },
              description: "Filter by agent archetype",
            },
          ],
          responses: {
            200: {
              description: "List of living agents",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      data: {
                        type: "array",
                        items: {
                          $ref: "#/components/schemas/LivingAgent",
                        },
                      },
                      total: {
                        type: "integer",
                      },
                      limit: {
                        type: "integer",
                      },
                      offset: {
                        type: "integer",
                      },
                    },
                  },
                },
              },
            },
          },
        },
        post: {
          operationId: "createLivingAgent",
          tags: ["Living Agents"],
          summary: "Create living agent",
          description: "Creates a new living agent with specified archetype",
          security: [{ bearerAuth: [] }],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["name", "archetype", "description"],
                  properties: {
                    name: { type: "string" },
                    archetype: {
                      type: "string",
                      enum: ["Curador", "Tejedora", "Cronista", "Visionario", "Arquitecto"],
                    },
                    description: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            201: {
              description: "Living agent created",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/LivingAgent",
                  },
                },
              },
            },
            400: {
              description: "Invalid request",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/ErrorResponse",
                  },
                },
              },
            },
          },
        },
      },
      "/api/v1/chat": {
        post: {
          operationId: "sendChatMessage",
          tags: ["Chat"],
          summary: "Send chat message",
          description: "Send a message to the conversational AI assistant",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["messages"],
                  properties: {
                    messages: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          role: { type: "string", enum: ["user", "assistant"] },
                          content: { type: "string" },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "Response from assistant",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/ChatMessage",
                  },
                },
              },
            },
          },
        },
      },
      "/api/v1/analytics": {
        post: {
          operationId: "trackEvent",
          tags: ["Analytics"],
          summary: "Track event",
          description: "Record an analytics event",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["eventName"],
                  properties: {
                    eventName: { type: "string" },
                    userId: { type: "string" },
                    properties: { type: "object" },
                  },
                },
              },
            },
          },
          responses: {
            201: {
              description: "Event recorded",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/AnalyticsEvent",
                  },
                },
              },
            },
          },
        },
      },
    },
    components: {
      schemas: {
        LivingAgent: {
          type: "object",
          required: ["id", "name", "archetype", "description", "status"],
          properties: {
            id: { type: "string", format: "uuid" },
            name: { type: "string" },
            archetype: {
              type: "string",
              enum: ["Curador", "Tejedora", "Cronista", "Visionario", "Arquitecto"],
            },
            description: { type: "string" },
            personality: { type: "object" },
            status: { type: "string", enum: ["active", "inactive", "archived"] },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        HealthStatus: {
          type: "object",
          properties: {
            status: { type: "string", enum: ["healthy", "degraded", "unhealthy"] },
            timestamp: { type: "string" },
            version: { type: "string" },
            environment: { type: "string" },
            services: { type: "object" },
          },
        },
        ChatMessage: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            role: { type: "string", enum: ["user", "assistant"] },
            content: { type: "string" },
            timestamp: { type: "string", format: "date-time" },
          },
        },
        AnalyticsEvent: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            eventName: { type: "string" },
            userId: { type: "string" },
            properties: { type: "object" },
            timestamp: { type: "string", format: "date-time" },
          },
        },
        ErrorResponse: {
          type: "object",
          required: ["status", "message", "code", "timestamp"],
          properties: {
            status: { type: "string", enum: ["error"] },
            message: { type: "string" },
            code: { type: "string" },
            details: { type: "object" },
            timestamp: { type: "string", format: "date-time" },
            path: { type: "string" },
          },
        },
      },
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "JWT Bearer token for authentication",
        },
      },
    },
  }
}

/**
 * Generate API documentation in Markdown format
 */
export function generateMarkdownDocs() {
  let markdown = `# N3uralia API Documentation

## Overview

The N3uralia API provides production-grade endpoints for Living Agents and Agentic Systems.

### Base URL

\`\`\`
https://api.neuralia.ai/api/v1
\`\`\`

### Authentication

All protected endpoints require a Bearer token:

\`\`\`
Authorization: Bearer YOUR_JWT_TOKEN
\`\`\`

## Endpoints

`

  Object.entries(API_ENDPOINTS).forEach(([category, endpoints]) => {
    markdown += `\n### ${category.charAt(0).toUpperCase() + category.slice(1)}\n`

    Object.entries(endpoints).forEach(([name, endpoint]) => {
      markdown += `\n#### ${endpoint.description}\n`
      markdown += `- **Path**: \`${endpoint.path}\`\n`
      markdown += `- **Method**: \`${endpoint.method}\`\n`
      markdown += `- **Auth**: \`${endpoint.authentication}\`\n`
      markdown += `- **Tags**: ${endpoint.tags.join(", ")}\n`
    })
  })

  return markdown
}
