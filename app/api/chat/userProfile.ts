export interface UserProfile {
  name: string
  country: string
  website?: string
}

export const userProfile = {
  create: (name: string, country: string, website?: string): UserProfile => ({
    name,
    country,
    website,
  }),

  default: {
    name: "User",
    country: "Global",
  } as UserProfile,

  isChilean: (profile: UserProfile): boolean => {
    return (
      profile.country?.toLowerCase().includes("chile") ||
      profile.country?.toLowerCase().includes("cl") ||
      profile.website?.includes(".cl") ||
      false
    )
  },
}
