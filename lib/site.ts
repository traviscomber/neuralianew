export const SITE_NAME = "N3uralia"
export const SITE_URL = "https://www.n3uralia.com"
export const SITE_TWITTER_HANDLE = "@n3uralia"
export const OG_IMAGE_PATH = "/og-image.png"

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString()
}

