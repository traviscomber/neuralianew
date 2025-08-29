import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 })
    }

    // Parse the URL to extract domain information
    const parsedUrl = new URL(url.startsWith("http") ? url : `https://${url}`)
    const domain = parsedUrl.hostname.toLowerCase()

    // Detect country from domain TLD
    const getCountryFromDomain = (domain: string): string | null => {
      const countryTlds: { [key: string]: string } = {
        ".uk": "GB",
        ".co.uk": "GB",
        ".org.uk": "GB",
        ".de": "DE",
        ".fr": "FR",
        ".es": "ES",
        ".it": "IT",
        ".nl": "NL",
        ".se": "SE",
        ".no": "NO",
        ".dk": "DK",
        ".fi": "FI",
        ".ch": "CH",
        ".at": "AT",
        ".be": "BE",
        ".au": "AU",
        ".com.au": "AU",
        ".co.nz": "NZ",
        ".jp": "JP",
        ".kr": "KR",
        ".cn": "CN",
        ".in": "IN",
        ".sg": "SG",
        ".hk": "HK",
        ".tw": "TW",
        ".th": "TH",
        ".my": "MY",
        ".id": "ID",
        ".ph": "PH",
        ".vn": "VN",
        ".br": "BR",
        ".com.br": "BR",
        ".ar": "AR",
        ".cl": "CL",
        ".co": "CO",
        ".mx": "MX",
        ".za": "ZA",
        ".co.za": "ZA",
        ".ng": "NG",
        ".ke": "KE",
        ".eg": "EG",
        ".ae": "AE",
        ".sa": "SA",
        ".il": "IL",
        ".tr": "TR",
        ".ru": "RU",
      }

      for (const [tld, countryCode] of Object.entries(countryTlds)) {
        if (domain.endsWith(tld)) {
          return countryCode
        }
      }
      return null
    }

    let detectedCountry = getCountryFromDomain(domain)

    // Detect country from domain name if TLD detection fails
    if (!detectedCountry) {
      if (domain.includes(".cl") || domain.includes("chile")) {
        detectedCountry = "CL"
      } else if (domain.includes(".ar") || domain.includes("argentina")) {
        detectedCountry = "AR"
      } else if (domain.includes(".br") || domain.includes("brasil")) {
        detectedCountry = "BR"
      } else if (domain.includes(".co") || domain.includes("colombia")) {
        detectedCountry = "CO"
      }
    }

    // Industry detection based on domain keywords and common patterns
    const detectIndustry = (domain: string): string => {
      if (domain.includes("tech") || domain.includes("software") || domain.includes("app")) {
        return "Technology"
      } else if (domain.includes("finance") || domain.includes("bank") || domain.includes("pay")) {
        return "Financial Services"
      } else if (domain.includes("health") || domain.includes("medical") || domain.includes("clinic")) {
        return "Healthcare"
      } else if (domain.includes("edu") || domain.includes("school") || domain.includes("university")) {
        return "Education"
      } else if (domain.includes("shop") || domain.includes("store") || domain.includes("commerce")) {
        return "E-commerce"
      } else {
        return "Business Services"
      }
    }

    const industry = detectIndustry(domain)

    // Business type detection
    const detectBusinessType = (domain: string): string => {
      const b2bIndicators = [
        "enterprise",
        "business",
        "corporate",
        "solutions",
        "services",
        "consulting",
        "software",
        "saas",
        "platform",
      ]
      const b2cIndicators = ["shop", "store", "buy", "consumer", "retail", "personal", "individual", "home"]

      const isB2B = b2bIndicators.some((indicator) => domain.includes(indicator))
      const isB2C = b2cIndicators.some((indicator) => domain.includes(indicator))

      if (isB2B && isB2C) return "B2B/B2C"
      if (isB2B) return "B2B"
      if (isB2C) return "B2C"
      return "B2B" // Default assumption
    }

    const businessType = detectBusinessType(domain)

    // Generate analysis based on domain and detected patterns
    const analysis = {
      title: `${domain.split(".")[0].charAt(0).toUpperCase() + domain.split(".")[0].slice(1)} ${businessType === "B2B" ? "Solutions" : businessType === "B2C" ? "Store" : "Platform"}`,
      description: `Professional ${industry.toLowerCase()} ${businessType.toLowerCase()} platform`,
      industry: industry,
      businessType: businessType,
      keyFeatures: getKeyFeatures(industry, businessType),
      targetAudience: getTargetAudience(industry, businessType),
      competitors: getCompetitors(industry),
      detectedCountry: detectedCountry,
    }

    return NextResponse.json(analysis)
  } catch (error) {
    console.error("Website analysis error:", error)

    return NextResponse.json(
      {
        title: "Business Website",
        description: "Professional business platform",
        industry: "Business Services",
        businessType: "B2B",
        keyFeatures: ["Professional Services", "Business Solutions"],
        targetAudience: "Business Professionals",
        competitors: ["Industry Leaders"],
        detectedCountry: null,
      },
      { status: 500 },
    )
  }
}

function getKeyFeatures(industry: string, businessType: string): string[] {
  const featureMap: { [key: string]: string[] } = {
    Technology: ["Software Development", "Cloud Solutions", "AI/ML Services", "Digital Transformation"],
    Healthcare: ["Patient Care", "Medical Services", "Health Technology", "Wellness Programs"],
    Finance: ["Financial Services", "Investment Management", "Risk Assessment", "Digital Banking"],
    "E-commerce": ["Online Retail", "Payment Processing", "Inventory Management", "Customer Experience"],
    Education: ["Learning Management", "Course Development", "Student Services", "Educational Technology"],
    "Real Estate": ["Property Management", "Real Estate Services", "Market Analysis", "Investment Advisory"],
    Manufacturing: ["Production Management", "Supply Chain", "Quality Control", "Industrial Solutions"],
    Consulting: ["Strategic Advisory", "Business Consulting", "Process Optimization", "Change Management"],
    Media: ["Content Creation", "Digital Publishing", "Media Distribution", "Creative Services"],
    Travel: ["Travel Planning", "Booking Services", "Tourism Management", "Hospitality Solutions"],
  }

  return featureMap[industry] || ["Professional Services", "Business Solutions", "Customer Support", "Digital Platform"]
}

function getTargetAudience(industry: string, businessType: string): string {
  if (businessType === "B2C") {
    const audienceMap: { [key: string]: string } = {
      Technology: "Tech-Savvy Consumers",
      Healthcare: "Patients and Families",
      Finance: "Individual Investors",
      "E-commerce": "Online Shoppers",
      Education: "Students and Learners",
      "Real Estate": "Home Buyers and Sellers",
      Media: "Content Consumers",
      Travel: "Travelers and Tourists",
    }
    return audienceMap[industry] || "General Consumers"
  } else {
    const audienceMap: { [key: string]: string } = {
      Technology: "Enterprise IT Decision Makers",
      Healthcare: "Healthcare Organizations",
      Finance: "Financial Institutions",
      "E-commerce": "Retail Businesses",
      Education: "Educational Institutions",
      "Real Estate": "Real Estate Professionals",
      Manufacturing: "Manufacturing Companies",
      Consulting: "Business Leaders",
      Media: "Media Companies",
      Travel: "Travel Industry Partners",
    }
    return audienceMap[industry] || "Business Professionals"
  }
}

function getCompetitors(industry: string): string[] {
  const competitorMap: { [key: string]: string[] } = {
    Technology: ["Microsoft", "Google", "Amazon", "Salesforce"],
    Healthcare: ["Epic Systems", "Cerner", "Teladoc", "UnitedHealth"],
    Finance: ["JPMorgan Chase", "Goldman Sachs", "Stripe", "Square"],
    "E-commerce": ["Amazon", "Shopify", "WooCommerce", "BigCommerce"],
    Education: ["Coursera", "Udemy", "Khan Academy", "Blackboard"],
    "Real Estate": ["Zillow", "Realtor.com", "Redfin", "CoStar"],
    Manufacturing: ["Siemens", "GE", "Honeywell", "3M"],
    Consulting: ["McKinsey", "Deloitte", "Accenture", "PwC"],
    Media: ["Netflix", "Disney", "Warner Bros", "Spotify"],
    Travel: ["Expedia", "Booking.com", "Airbnb", "TripAdvisor"],
  }

  return competitorMap[industry] || ["Industry Leaders", "Market Competitors", "Established Players"]
}
