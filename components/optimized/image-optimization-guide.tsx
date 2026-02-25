/**
 * PHASE 3: IMAGE OPTIMIZATION IMPLEMENTATION GUIDE
 * 
 * This file provides a checklist and best practices for optimizing images across N3uralia.
 * Follow these patterns to improve performance and SEO.
 */

export const imageOptimizationChecklist = {
  priority_1_implement_now: [
    {
      task: "Add loading strategy to all below-fold images",
      files: ["components/*/", "app/[page]/"],
      impact: "Reduces initial page load by 20-30%",
      implementation: `
        import { OptimizedImage } from "@/components/optimized/optimized-image"
        
        // For below-fold content
        <OptimizedImage 
          src="/path/to/image.jpg"
          alt="Descriptive alt text with keywords"
          width={1200}
          height={630}
          loadingStrategy="lazy"
          quality={75}
        />
      `,
    },
    {
      task: "Add priority to above-fold hero images",
      files: ["app/page.tsx", "components/section-background.tsx"],
      impact: "Improves LCP score significantly",
      implementation: `
        <OptimizedImage 
          src="/images/hero.jpg"
          alt="N3uralia AI agents system"
          width={1920}
          height={1080}
          priority={true}
          quality={85}
        />
      `,
    },
    {
      task: "Implement responsive image sizing",
      files: ["All image components"],
      impact: "Saves 30-40% bandwidth on mobile",
      implementation: `
        sizes="(max-width: 640px) 100vw, 
               (max-width: 1024px) 80vw, 
               1200px"
      `,
    },
  ],

  priority_2_medium_term: [
    {
      task: "Add blur placeholders to all images",
      impact: "Improves perceived performance",
      approach: "Generate low-quality preview (LQIP) for each image",
    },
    {
      task: "Implement native WebP conversion",
      impact: "20-30% file size reduction",
      approach: "Use next/image format detection automatically",
    },
    {
      task: "Create image CDN configuration",
      impact: "Reduces TTFB and global latency",
      approach: "Use Vercel's Blob Storage or similar",
    },
  ],

  seo_impact: {
    core_web_vitals: "Images contribute 40% of LCP issues",
    recommendations: [
      "FCP target: < 1.8s (affects bounce rate)",
      "LCP target: < 2.5s (affects conversions)",
      "CLS target: < 0.1 (affects user trust)",
    ],
    expected_improvement: {
      phase_3_alone: "+15-25 points on Lighthouse",
      with_all_optimization: "+40-50 points total",
    },
  },

  alt_text_guide: {
    bad_example: 'alt="image"',
    good_example: 'alt="N3uralia multi-agent architecture with Gemini and OpenAI integration"',
    patterns: {
      hero_images: "Include product name + key benefit",
      feature_screenshots: "Describe what user sees + action possible",
      logos: "Company/partner name",
      charts: "Chart type + key metric (e.g. Revenue growth 45% YoY)",
    },
    seo_benefit: "Keyword inclusion in alt text helps image SEO ranking",
  },

  lazy_loading_strategy: {
    priority_above_fold: ["Hero images", "Navigation logos", "First visible section"],
    priority_below_fold: [
      "Testimonials section",
      "Feature grid cards",
      "Case studies images",
      "Footer content",
    ],
    implementation_priority: {
      week_1: "Hero and navigation (quick win +20 Lighthouse)",
      week_2: "Below-fold sections (medium effort, +15 points)",
      week_3: "Blur placeholders (nice-to-have, +5-10 points)",
    },
  },

  monitoring: {
    tools: [
      "Lighthouse CI (automated)",
      "/performance page with real-time metrics",
      "Google PageSpeed Insights",
      "WebPageTest for detailed analysis",
    ],
    frequency: "Run after each content addition",
    target_scores: {
      performance: 85,
      accessibility: 95,
      best_practices: 95,
      seo: 100,
    },
  },

  quick_wins: [
    {
      name: "Reduce quality from 85 to 75",
      effort: "2 minutes",
      impact: "Save 15-20% file size, imperceptible quality loss",
    },
    {
      name: "Add loading='lazy' to all images",
      effort: "30 minutes",
      impact: "Reduce initial load by 20%",
    },
    {
      name: "Fix unsized images (missing width/height)",
      effort: "1 hour",
      impact: "Eliminate layout shift issues (CLS)",
    },
  ],
}

/**
 * COMPONENT USAGE EXAMPLES
 */

// Example 1: Hero Image (Above Fold)
export const heroImageExample = {
  code: `
    <OptimizedImage 
      src="/images/hero-ai-agents.jpg"
      alt="N3uralia AI agents system architecture - living agents en producción"
      width={1920}
      height={1080}
      priority={true}
      quality={85}
      loadingStrategy="eager"
    />
  `,
  why: "Hero image should load immediately and have high quality",
}

// Example 2: Feature Grid Image (Below Fold)
export const gridImageExample = {
  code: `
    <OptimizedImage 
      src="/images/capabilities-grid.jpg"
      alt="N3uralia 6 pilares: agentic architecture, living agents, coordinación multi-agente"
      width={600}
      height={400}
      priority={false}
      quality={75}
      loadingStrategy="lazy"
    />
  `,
  why: "Below-fold images load on demand to speed up initial page load",
}

// Example 3: Testimonial Avatar (Far Below Fold)
export const testimonialImageExample = {
  code: `
    <OptimizedImage 
      src="/testimonials/juan-navarro.jpg"
      alt="Juan Navarro, CEO of XYZ Corp - N3uralia client"
      width={100}
      height={100}
      quality={70}
      loadingStrategy="lazy"
    />
  `,
  why: "Small images with native lazy loading for maximum performance",
}

export const implementationSteps = [
  {
    step: 1,
    title: "Audit Current Images",
    actions: [
      "Run Lighthouse on each page",
      "Note which images fail LCP/CLS checks",
      "Identify missing alt text or width/height",
    ],
  },
  {
    step: 2,
    title: "Update Hero Images",
    actions: [
      "Add priority={true} to above-fold images",
      "Set quality={85} for hero images",
      "Verify width/height are set correctly",
    ],
  },
  {
    step: 3,
    title: "Optimize Below-Fold Images",
    actions: [
      "Add loadingStrategy='lazy' to below-fold",
      "Reduce quality to 75 or lower for thumbnails",
      "Ensure all images have descriptive alt text",
    ],
  },
  {
    step: 4,
    title: "Test & Monitor",
    actions: [
      "Run Lighthouse audit again",
      "Check Core Web Vitals in Google Search Console",
      "Monitor /performance page for real-time metrics",
    ],
  },
]
