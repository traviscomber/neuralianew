import { dbHelpers as supabaseHelpers } from "./supabase"
import { neonHelpers } from "./neon"

// Database abstraction layer - can switch between Supabase and Neon
const USE_NEON = process.env.USE_NEON === "true"

export const db = USE_NEON ? neonHelpers : supabaseHelpers

export const dbService = {
  async getAIAgents() {
    return await db.getAIAgents()
  },

  async deployAgent(userId: string, agentId: string, configuration: any) {
    return await db.deployAgent(userId, agentId, configuration)
  },

  async updateDeploymentStatus(deploymentId: string, status: string, progress?: number) {
    return await db.updateDeploymentStatus(deploymentId, status, progress)
  },

  async getUserDeployedAgents(userId: string) {
    return await db.getUserDeployedAgents(userId)
  },

  async saveConversation(userId: string, agentType: string, messages: any[]) {
    return await db.saveConversation(userId, agentType, messages)
  },

  async getConversationHistory(userId: string, agentType: string, limit?: number) {
    return await db.getConversationHistory(userId, agentType, limit)
  },

  async updateUserPreferences(userId: string, preferences: any) {
    return await db.updateUserPreferences(userId, preferences)
  },

  async getUserPreferences(userId: string) {
    return await db.getUserPreferences(userId)
  },

  async getProfile(userId: string) {
    if ("getProfile" in db) {
      return await db.getProfile(userId)
    }
    return null
  },

  async createProfile(userId: string, email: string, data: any = {}) {
    if ("createProfile" in db) {
      return await db.createProfile(userId, email, data)
    }
    return null
  },
}

export default dbService
