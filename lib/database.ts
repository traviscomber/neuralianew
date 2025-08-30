import { dbHelpers } from "./supabase"

export const dbService = {
  /* ---------------- profiles ---------------- */
  createProfile: dbHelpers.createProfile,
  getProfile: dbHelpers.getProfile,

  /* ---------------- deployed agents ---------------- */
  deployAgent: dbHelpers.deployAgent,
  getUserDeployedAgents: dbHelpers.getUserDeployedAgents,
  removeDeployedAgent: dbHelpers.removeDeployedAgent,

  /* ---------------- purchases + composite flow ---------------- */
  async processPurchase(userId: string, cartItems: any[]) {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const purchase = await dbHelpers.createPurchase(userId, cartItems, total)

    const deployments = await Promise.all(
      cartItems.map((item) =>
        dbHelpers.deployAgent(userId, item.id, {
          name: item.name,
          description: item.description,
          price_paid: item.price * item.quantity,
          features: item.features,
          purchase_id: purchase.id,
        }),
      ),
    )

    return { purchase, deployments }
  },

  getUserPurchases: dbHelpers.getUserPurchases,

  /* ---------------- conversations ---------------- */
  async saveConversation(userId: string, agentType: string, messages: any[]) {
    return await dbHelpers.saveConversation(userId, agentType, messages)
  },

  async getConversationHistory(userId: string, agentType: string, limit = 50) {
    return await dbHelpers.getConversationHistory(userId, agentType, limit)
  },

  /* ---------------- user preferences ---------------- */
  async updateUserPreferences(userId: string, preferences: any) {
    return await dbHelpers.updateUserPreferences(userId, preferences)
  },

  async getUserPreferences(userId: string) {
    return await dbHelpers.getUserPreferences(userId)
  },

  /* ---------------- misc ---------------- */
  async trackUserAction(userId: string, action: string, metadata: any = {}) {
    console.log("Tracking user action", { userId, action, metadata })
    return { success: true }
  },
}
