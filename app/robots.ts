import type { MetadataRoute } from "next"
import { SITE_URL, absoluteUrl } from "@/lib/site"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/dashboard/",
          "/admin/",
          // Internal/utility pages — not for public indexing
          "/*/api-docs",
          "/*/coordination",
          "/*/error-tracking",
          "/*/performance",
          "/*/sabana-home",
          "/*/labs",
          "/*/vibe-selling",
          "/*/living-agents/constellation-demo",
          "/*/living-agents/demo",
          "/*/living-agents/evolution",
        ],
      },
      {
        // Block GPTBot and other AI scrapers from training on content
        userAgent: ["GPTBot", "Google-Extended", "CCBot", "anthropic-ai", "ClaudeBot"],
        disallow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE_URL,
  }
}
