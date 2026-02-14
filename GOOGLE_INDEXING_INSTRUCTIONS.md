# GOOGLE INDEXING INSTRUCTIONS - N3URALIA COMPLETE GUIDE

**Last Updated:** February 13, 2026
**Status:** Ready for Indexing with Full Metadata Optimization

---

## PHASE 1: SETUP & VERIFICATION (Do This First)

### 1.1 Google Search Console Setup
**URL:** https://search.google.com/search-console

**Steps:**
1. Go to Google Search Console
2. Click "Add Property"
3. Choose "URL prefix" → Enter: `https://n3uralia.com`
4. Verify ownership using one of these methods:
   - **Recommended:** HTML file upload (place verification file in `/public/`)
   - **Alternative:** HTML meta tag (add to `<head>` in layout.tsx)
   - **Alternative:** Domain provider verification (recommended if using Vercel)

**Verification Command:**
```
Add to layout.tsx <head>:
<meta name="google-site-verification" content="[your-verification-code]" />
```

---

## PHASE 2: SITEMAP & ROBOTS.TXT VERIFICATION

### 2.1 Current Sitemap Status ✓
**File:** `/public/sitemap.xml`
- **Status:** Active & Complete
- **URLs:** 14+ critical pages indexed
- **Last Modified:** Auto-updated daily
- **Namespace:** Includes hreflang for bilingual content

### 2.2 Current Robots.txt Status ✓
**File:** `/public/robots.txt`
- **Status:** Properly Configured
- **Sitemap Declaration:** ✓ Included
- **Google/Bing Bots:** ✓ Allowed
- **AI Bots:** ✓ Allowed (ChatGPT, Claude, Perplexity, etc.)

---

## PHASE 3: SUBMIT TO GOOGLE

### 3.1 Submit Sitemap to Google Search Console

**In Google Search Console Dashboard:**

1. Left sidebar → "Sitemaps"
2. Click "New Sitemap"
3. Enter: `https://n3uralia.com/sitemap.xml`
4. Click "Submit"

**Expected Response:**
- "Success" status (may take 24-48 hours to fully process)
- Google begins crawling discovered URLs

### 3.2 Request Indexing for Key Pages

**In Google Search Console:**

1. Go to "URL Inspection" tool
2. Paste each key URL:
   - `https://n3uralia.com`
   - `https://n3uralia.com/capacidades`
   - `https://n3uralia.com/soluciones`
   - `https://n3uralia.com/blog`
3. Click "Request Indexing" for each

**Why:** Accelerates crawling of newly optimized metadata

---

## PHASE 4: METADATA VERIFICATION

### 4.1 Check Your Keywords Are Indexed

**In Google Search Console:**
1. Go to "Performance"
2. Check "Queries" tab
3. Look for these search terms appearing:
   - "n3uralia"
   - "neuralia"
   - "AI agents"
   - "agentes IA"
   - "sistemas agenticos"
   - "fullstack"

**Timeline:** 1-2 weeks for full keyword indexing

### 4.2 Verify Metadata with Google's Rich Results Test

**URL:** https://search.google.com/test/rich-results

**Steps:**
1. Paste your homepage URL: `https://n3uralia.com`
2. Check for:
   - ✓ Organization schema detected
   - ✓ Metadata properly formatted
   - ✓ No structured data errors

---

## PHASE 5: KEYWORD MONITORING

### 5.1 Monitor These Keyword Groups

**Primary Keywords (Track Weekly):**
- "n3uralia" - Brand
- "neuralia" - Brand variant
- "n3uralia agentes" - Product (Spanish)
- "n3uralia agents" - Product (English)

**Secondary Keywords (Track Monthly):**
- "sistemas agenticos"
- "AI agents"
- "agentes IA"
- "fullstack"
- "multi-agent systems"

**Track In:**
- Google Search Console → Performance → Queries
- Google Analytics (Goals/Conversions)

### 5.2 Monitor Rankings

**Tools:**
- Google Search Console (free)
- Ahrefs (paid)
- SEMrush (paid)

**Target Metrics:**
- Average Position: Aim for < 10
- Impressions: Should grow weekly
- CTR: Target 3-5% for position 1-3

---

## PHASE 6: ONGOING OPTIMIZATION

### 6.1 Content Updates (Critical)

**Update Schedule:**
- Whenever you publish new blog posts → Update sitemap.xml
- When you modify page content → Update `lastmod` timestamp
- Add new pages → Include in sitemap within 24 hours

**Auto-Update in Next.js:**
Create `/app/sitemap.ts` (dynamic sitemap):
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://n3uralia.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://n3uralia.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
    },
  ]
}
```

### 6.2 Re-submit Updated Sitemap
- Every 2 weeks: Re-submit sitemap to Search Console
- This tells Google: "Hey, check my new content"

### 6.3 Monitor Crawl Stats

**In Google Search Console:**
1. Go to "Settings" → "Crawl Stats"
2. Check:
   - Requests per day (should be 20-50)
   - Crawl time (should be < 5 seconds per page)
   - Coverage (should show 0 errors)

---

## PHASE 7: STRUCTURED DATA MARKUP

### 7.1 Add Organization Schema (High Priority)

**Already in your site but ensure it's in layout.tsx:**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "N3uralia",
  "alternateName": "Neuralia",
  "url": "https://n3uralia.com",
  "description": "AI Agents & Sistemas Agenticos en Producción",
  "sameAs": [
    "https://linkedin.com/company/n3uralia",
    "https://twitter.com/n3uralia"
  ],
  "knowsAbout": [
    "AI Agents",
    "Agentic Systems",
    "Multi-Agent Orchestration",
    "Fullstack AI"
  ]
}
```

### 7.2 Add BlogPosting Schema to Blog Posts

**For each blog post, add:**
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Living Agents: AI Agents que Aprenden",
  "description": "...",
  "datePublished": "2026-02-09",
  "author": {
    "@type": "Organization",
    "name": "N3uralia"
  },
  "keywords": "living agents, AI agents, sistemas agenticos, n3uralia"
}
```

---

## PHASE 8: TRACKING & REPORTING

### 8.1 Create a Monitoring Dashboard

**Track Monthly:**
| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Indexed Pages | 14+ | ? | ? |
| Keyword Rankings | Top 10 | ? | ? |
| Monthly Impressions | 1,000+ | ? | ? |
| Monthly Clicks | 200+ | ? | ? |
| CTR (Click-Through Rate) | 3-5% | ? | ? |
| Crawl Errors | 0 | ? | ? |

### 8.2 Set Up Google Analytics 4 Goals

**Goals to Track:**
1. Contact Form Submission
2. Email Signup (if applicable)
3. Demo Request Click
4. Blog Post Visit
5. Product Page Visit

---

## QUICK REFERENCE: COMMANDS FOR YOUR DEVELOPMENT WORKFLOW

### When Publishing a New Blog Post:

```bash
# 1. Create blog post at: /app/blog/[slug]/page.tsx
# 2. Add metadata with keywords: n3uralia, neuralia, AI agents, fullstack
# 3. Update sitemap.xml (add new URL)
# 4. Commit and push to production
# 5. In Google Search Console: Request Indexing for new URL
```

### When Changing Metadata:

```bash
# 1. Update layout.tsx or page.tsx metadata
# 2. Test with: https://search.google.com/test/rich-results
# 3. Commit and push
# 4. In Search Console: "Request Indexing" for that page
# 5. Monitor in Performance → Queries (wait 1 week)
```

### Weekly Tasks:

```
Monday:
- Check Google Search Console Performance tab
- Note any new keywords appearing
- Check crawl stats

Friday:
- Review rankings for target keywords
- Check for any indexing issues
- Plan content updates for next week
```

---

## VERIFICATION CHECKLIST

**Before Declaring "Ready for Indexing":**

- [ ] Google Search Console: Property verified
- [ ] Sitemap: Submitted & shows "Success"
- [ ] robots.txt: Properly configured at /public/robots.txt
- [ ] Metadata: All pages have titles, descriptions, keywords
- [ ] Keywords Present: "n3uralia", "neuralia", "AI agents", "fullstack"
- [ ] Blog Posts: All have proper schema markup
- [ ] Mobile: Site is mobile-responsive (test with Mobile-Friendly Test)
- [ ] Crawl Errors: Zero errors in Search Console
- [ ] HTTPS: All pages served over HTTPS ✓

---

## EXPECTED TIMELINE

**Week 1-2:**
- Google discovers & crawls all pages
- Sitemap indexed
- Initial keywords start ranking

**Week 2-4:**
- Keywords begin appearing in search results
- Position 20-50 (not optimized yet)
- More pages indexed

**Month 2-3:**
- Keywords move to position 10-20
- Monthly searches reach 500+

**Month 3-6:**
- Target keywords in top 10
- Consistent 1,000+ monthly impressions
- Strong CTR (3-5%)

---

## IMPORTANT NOTES

1. **Google Doesn't Guarantee Ranking** - Having good metadata helps, but Google ranks based on content quality, backlinks, user experience, and more.

2. **Content is King** - Your blog posts and product pages must be genuinely useful. People must stay on your pages.

3. **Backlinks Matter** - Share your content on LinkedIn, mention it in industry forums, reach out to tech blogs.

4. **Regular Updates** - Blog weekly, update content monthly. Google favors fresh content.

5. **Mobile First** - Google prioritizes mobile versions. Ensure responsive design.

---

## CONTACT GOOGLE IF ISSUES ARISE

**Search Console Help Forum:** https://support.google.com/webmasters
**Issue:** Indexing problems, manual penalties, etc.

---

**Status:** All systems ready for Google indexing ✓
**Metadata Keywords Optimized:** ✓ (n3uralia, neuralia, AI agents, fullstack, sistemas agenticos, agentes IA)
**Next Step:** Execute Phase 1 - Google Search Console Verification
