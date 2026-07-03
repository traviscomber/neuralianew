import { Agent, ServiceResponse } from "@/lib/types"

const AgentService = {
  async getAgent(id: string): Promise<ServiceResponse<Agent>> {
    return { success: false, error: { message: "Not implemented", code: "NOT_IMPLEMENTED" } }
  },

  async batchGetAgents(ids: string[]): Promise<ServiceResponse<Agent[]>> {
    return { success: false, error: { message: "Not implemented", code: "NOT_IMPLEMENTED" } }
  },

  async getAgentsByType(type: string): Promise<ServiceResponse<Agent[]>> {
    return { success: false, error: { message: "Not implemented", code: "NOT_IMPLEMENTED" } }
  },
}

export default AgentService
