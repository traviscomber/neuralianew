import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.NEON_NEON_DATABASE_URL!)

export const neonHelpers = {
  async getAIAgents() {
    const result = await sql`
      SELECT * FROM ai_agents 
      ORDER BY created_at DESC
    `
    return result
  },

  async deployAgent(userId: string, agentId: string, configuration: any) {
    const result = await sql`
      INSERT INTO deployed_agents (user_id, agent_id, configuration, status, deployed_at)
      VALUES (${userId}, ${agentId}, ${JSON.stringify(configuration)}, 'deploying', NOW())
      RETURNING *
    `
    return result[0]
  },

  async updateDeploymentStatus(deploymentId: string, status: string, progress?: number) {
    let query = sql`
      UPDATE deployed_agents 
      SET status = ${status}, updated_at = NOW()
    `

    if (progress !== undefined) {
      query = sql`
        UPDATE deployed_agents 
        SET status = ${status}, deployment_progress = ${progress}, updated_at = NOW()
      `
    }

    if (status === "active") {
      query = sql`
        UPDATE deployed_agents 
        SET status = ${status}, activated_at = NOW(), updated_at = NOW()
      `
    }

    const result = await sql`
      ${query}
      WHERE id = ${deploymentId}
      RETURNING *
    `
    return result[0]
  },

  async getUserDeployedAgents(userId: string) {
    const result = await sql`
      SELECT da.*, aa.*
      FROM deployed_agents da
      JOIN ai_agents aa ON da.agent_id = aa.id
      WHERE da.user_id = ${userId}
      ORDER BY da.deployed_at DESC
    `
    return result
  },

  async saveConversation(userId: string, agentType: string, messages: any[]) {
    const conversations = messages.map((msg, index) => [
      userId,
      agentType,
      index % 2 === 0 ? msg.content : null,
      index % 2 === 1 ? msg.content : null,
      msg.timestamp || new Date().toISOString(),
    ])

    const result = await sql`
      INSERT INTO chat_conversations (user_id, agent_type, user_message, agent_response, created_at)
      SELECT * FROM UNNEST(${conversations})
      RETURNING *
    `
    return result
  },

  async getConversationHistory(userId: string, agentType: string, limit = 50) {
    const result = await sql`
      SELECT * FROM chat_conversations
      WHERE user_id = ${userId} AND agent_type = ${agentType}
      ORDER BY created_at DESC
      LIMIT ${limit}
    `
    return result
  },

  async updateUserPreferences(userId: string, preferences: any) {
    const result = await sql`
      INSERT INTO user_preferences (user_id, preferred_name, communication_style, agent_preferences, updated_at)
      VALUES (${userId}, ${preferences.preferred_name}, ${preferences.communication_style}, ${JSON.stringify(preferences.agent_preferences)}, NOW())
      ON CONFLICT (user_id) 
      DO UPDATE SET 
        preferred_name = EXCLUDED.preferred_name,
        communication_style = EXCLUDED.communication_style,
        agent_preferences = EXCLUDED.agent_preferences,
        updated_at = NOW()
      RETURNING *
    `
    return result[0]
  },

  async getUserPreferences(userId: string) {
    const result = await sql`
      SELECT * FROM user_preferences
      WHERE user_id = ${userId}
    `
    return result[0] || null
  },
}

export { sql }
export default neonHelpers
