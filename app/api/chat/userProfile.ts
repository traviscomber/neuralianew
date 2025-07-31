export interface UserProfile {
  name: string
  country: string
  website?: string
  preferences?: {
    language: string
    currency: string
    timezone: string
  }
}

export const userProfile = {
  // Default profile for new users
  default: {
    name: "",
    country: "Unknown",
    language: "en",
    currency: "USD",
    timezone: "UTC",
  },

  // Chilean market profile
  chilean: {
    name: "",
    country: "Chile",
    language: "es",
    currency: "CLP",
    timezone: "America/Santiago",
  },

  // Create profile from user data
  create: (name: string, country: string, website?: string): UserProfile => ({
    name,
    country,
    website,
    preferences: {
      language: country === "Chile" ? "es" : "en",
      currency: country === "Chile" ? "CLP" : "USD",
      timezone: country === "Chile" ? "America/Santiago" : "UTC",
    },
  }),

  // Check if user is from Chile
  isChilean: (profile: UserProfile): boolean => {
    return profile.country === "Chile" || profile.country === "CL"
  },

  // Get appropriate greeting based on profile
  getGreeting: (profile: UserProfile): string => {
    if (userProfile.isChilean(profile)) {
      return `¡Hola ${profile.name}! Soy tu Neural Executive, especializado en el mercado chileno.`
    }
    return `Hello ${profile.name}! I'm your Neural Executive, powered by advanced AI reasoning.`
  },
}
