export interface Agent {
  id: string
  name: string
  type: string
  status: "active" | "inactive" | "error"
  description?: string
  icon?: string
  uptime?: string
  lastActive?: string
  createdAt?: string
  updatedAt?: string
}

export interface ErrorDetails {
  message: string
  code?: string
  status?: number
}

export interface ServiceResponse<T> {
  success: boolean
  data?: T
  error?: ErrorDetails
}
