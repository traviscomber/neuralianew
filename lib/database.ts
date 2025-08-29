import { dbHelpers } from "./supabase"

export const dbService = {
  // Profile management
  createProfile: dbHelpers.createProfile,
  getProfile: dbHelpers.getProfile,

  // Agent deployment
  deployAgent: dbHelpers.deployAgent,
  getUserDeployedAgents: dbHelpers.getUserDeployedAgents,
  removeDeployedAgent: dbHelpers.removeDeployedAgent,

  // Purchase processing
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

  // Analytics
  async trackUserAction(userId: string, action: string, metadata: any = {}) {
    console.log("Tracking user action", { userId, action, metadata })
    return { success: true }
  },
}
