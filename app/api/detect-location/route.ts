import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // Get client IP from headers
    const forwarded = request.headers.get("x-forwarded-for")
    const realIp = request.headers.get("x-real-ip")
    const clientIp = forwarded?.split(",")[0] || realIp || "127.0.0.1"

    // For development/localhost, return Chile as default for demo
    if (
      clientIp === "127.0.0.1" ||
      clientIp === "::1" ||
      clientIp.startsWith("192.168.") ||
      clientIp.startsWith("10.")
    ) {
      return NextResponse.json({
        country: "Chile",
        countryCode: "CL",
        region: "South America",
        city: "Santiago",
        ip: clientIp,
        detectionMethod: "development_default",
        success: true,
      })
    }

    // Check for Cloudflare country header first
    const cfCountry = request.headers.get("cf-ipcountry")
    if (cfCountry && cfCountry !== "XX") {
      const countryMap: { [key: string]: { name: string; region: string } } = {
        CL: { name: "Chile", region: "South America" },
        AR: { name: "Argentina", region: "South America" },
        BR: { name: "Brazil", region: "South America" },
        CO: { name: "Colombia", region: "South America" },
        PE: { name: "Peru", region: "South America" },
        UY: { name: "Uruguay", region: "South America" },
        EC: { name: "Ecuador", region: "South America" },
        BO: { name: "Bolivia", region: "South America" },
        PY: { name: "Paraguay", region: "South America" },
        VE: { name: "Venezuela", region: "South America" },
        US: { name: "United States", region: "North America" },
        CA: { name: "Canada", region: "North America" },
        MX: { name: "Mexico", region: "North America" },
        GB: { name: "United Kingdom", region: "Europe" },
        DE: { name: "Germany", region: "Europe" },
        FR: { name: "France", region: "Europe" },
        ES: { name: "Spain", region: "Europe" },
        IT: { name: "Italy", region: "Europe" },
        JP: { name: "Japan", region: "Asia" },
        CN: { name: "China", region: "Asia" },
        IN: { name: "India", region: "Asia" },
        AU: { name: "Australia", region: "Oceania" },
      }

      const countryData = countryMap[cfCountry] || { name: cfCountry, region: "Unknown" }

      return NextResponse.json({
        country: countryData.name,
        countryCode: cfCountry,
        region: countryData.region,
        source: "cloudflare",
        success: true,
      })
    }

    // Try using ip-api.com for geolocation
    try {
      const geoResponse = await fetch(
        `http://ip-api.com/json/${clientIp}?fields=status,country,countryCode,region,regionName,city`,
        { timeout: 5000 },
      )

      if (geoResponse.ok) {
        const geoData = await geoResponse.json()

        if (geoData.status === "success") {
          // Map regions to our standard regions with focus on South America
          let standardRegion = "Unknown"
          const countryCode = geoData.countryCode

          if (["CL", "AR", "BR", "CO", "PE", "UY", "EC", "BO", "PY", "VE"].includes(countryCode)) {
            standardRegion = "South America"
          } else if (["US", "CA", "MX"].includes(countryCode)) {
            standardRegion = "North America"
          } else if (
            ["GB", "DE", "FR", "ES", "IT", "NL", "SE", "NO", "DK", "FI", "CH", "AT", "BE"].includes(countryCode)
          ) {
            standardRegion = "Europe"
          } else if (["JP", "KR", "CN", "IN", "SG", "HK", "TW", "TH", "MY", "ID", "PH", "VN"].includes(countryCode)) {
            standardRegion = "Asia"
          } else if (["AU", "NZ"].includes(countryCode)) {
            standardRegion = "Oceania"
          } else if (["ZA", "NG", "KE", "EG"].includes(countryCode)) {
            standardRegion = "Africa"
          } else if (["AE", "SA", "IL", "TR"].includes(countryCode)) {
            standardRegion = "Middle East"
          }

          return NextResponse.json({
            country: geoData.country,
            countryCode: geoData.countryCode,
            region: standardRegion,
            city: geoData.city,
            source: "ip-api",
            success: true,
          })
        }
      }
    } catch (geoError) {
      console.error("IP geolocation service error:", geoError)
    }

    // Final fallback - default to Chile for demo purposes
    return NextResponse.json({
      country: "Chile",
      countryCode: "CL",
      region: "South America",
      city: "Santiago",
      source: "fallback_chile",
      success: true,
    })
  } catch (error) {
    console.error("Location detection error:", error)

    // Return Chile as fallback for demo
    return NextResponse.json({
      country: "Chile",
      countryCode: "CL",
      region: "South America",
      city: "Santiago",
      source: "error_fallback_chile",
      success: false,
      error: "Location detection failed, defaulting to Chile",
    })
  }
}
