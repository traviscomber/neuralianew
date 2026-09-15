import type { MetadataRoute } from "next"
import { SITE_URL, absoluteUrl } from "@/lib/site"

const privatePaths = [
  "/api/",
  "/dashboard/",
  "/admin/",
  "/*/api-docs",
  "/*/coordination",
  "/*/error-tracking",
  "/*/performance",
  "/*/sabana-home",
  "/*/vibe-selling",
  "/*/living-agents/constellation-demo",
  "/*/living-agents/demo",
  "/*/living-agents/evolution",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: privatePaths,
      },
      {
        // Search discovery is separate from model-training permissions.
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: privatePaths,
      },
      {
        // Preserve the existing opt-out for training/data-collection crawlers.
        userAgent: ["GPTBot", "Google-Extended", "CCBot", "anthropic-ai", "ClaudeBot"],
        disallow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE_URL,
  }
}
