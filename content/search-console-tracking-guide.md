# Google Search Console Tracking & Optimization Guide for N3uralia Chile

## Part 1: Initial Setup (Week 1)

### Verification & Property Configuration

1. **Add Property in Google Search Console**
   - Go to: https://search.google.com/search-console
   - Add property: https://n3uralia.com/es
   - Verify ownership (DNS record or meta tag)

2. **Configure Settings**
   - [ ] Set preferred domain (www vs non-www)
   - [ ] Set crawl rate (recommended: default, let Google optimize)
   - [ ] Verify sitemap is submitted (check `/sitemap.xml`)
   - [ ] Remove parameters (unnecessary for language-only URLs)
   - [ ] Set international targeting: Spanish (Spain + Chile)

3. **Link GA4**
   - [ ] Connect Google Analytics 4 property
   - [ ] Enable linking in GA4 → Admin → Property Settings
   - [ ] Verify GA4 data flowing in GSC

### Sitemap Submission

Verify sitemap is properly configured:
- Sitemap URL: https://n3uralia.com/es/sitemap.xml
- Should contain 51 Chile-specific pages (0.9+ priority)
- Resubmit: GSC Dashboard → Sitemaps → Submit new sitemap

---

## Part 2: Keyword Tracking Setup (Weeks 1-2)

### Primary Keywords (Tier 1)

**Primary Focus Keywords** (track daily):

| Keyword | Target Position | Target URL | Monthly Volume | Intent |
|---------|-----------------|------------|-----------------|--------|
| agentes ia chile | 1-3 | /es/agentes-ia-chile | 1,500-2,000 | Commercial |
| soluciones agenticas chile | 1-3 | /es/soluciones-agenticas-chile | 800-1,200 | Commercial |
| automatización ia empresas chile | 1-5 | /es/automatizacion-ia-empresas-chile | 600-900 | Commercial |

**Current Position Tracking** (baseline from day 1):
- Note starting positions for all 3 keywords
- Establish 90-day improvement target: +5-10 positions

### Secondary Keywords (Tier 2)

**Industry Vertical Keywords** (track weekly):

| Keyword | Target URL | Target Position |
|---------|------------|-----------------|
| agentes ia retail chile | /es/agentes-ia-retail-chile | 1-5 |
| automatización mineria chile | /es/agentes-ia-mineria-chile | 5-10 |
| optimización rutas logistica | /es/agentes-ia-logistica-chile | 5-10 |
| manufactura inteligente chile | /es/agentes-ia-manufactura-chile | 5-10 |
| turismo automatización ia | /es/agentes-ia-turismo-chile | 5-10 |

### Long-Tail Keywords (Tier 3)

**Blog-Specific Keywords** (track bi-weekly):

| Keyword | Target URL | Current Position |
|---------|------------|------------------|
| costo implementar agentes ia | /blog/costo-implementar-... | TBD |
| tiempo implementación ia empresas | /blog/tiempo-implementacion-... | TBD |
| rpa vs agentes ia chile | /blog/rpa-vs-agentes-ia-... | TBD |
| compliance tributario ia | /blog/agentes-ia-compliance-... | TBD |
| sii facturación automática | /blog/agentes-ia-sii-facturacion | TBD |
| (+ 19 more blog posts) | Various | TBD |

---

## Part 3: Tracking Tools & Setup

### Option A: Google Search Console (Free)

**Limitations**:
- Tracks position for last 16 months
- Data delayed 2-3 days
- Position data shows up to position 100

**Setup**:
- [ ] Add all primary keywords to filters
- [ ] Create custom report for tracked keywords
- [ ] Export GSC data weekly (Performance report)

### Option B: Rank Tracking Service (Recommended)

**Recommended Tool**: Semrush or Ahrefs (free or basic tier)

| Tool | Cost | Benefits |
|------|------|----------|
| Semrush Position Tracking | Free tier available | Daily tracking, position history |
| Ahrefs Rank Tracker | Free tier limited | Competitor tracking, keyword ranking |
| Moz Pro Rank Tracker | $99+/mo | 300 keyword limit, good for SMB |
| SE Ranking | $39+/mo | Unlimited keywords, affordable |

**Setup (Semrush example)**:
1. Create project: n3uralia.com/es
2. Add keywords (3 primary + 12 secondary)
3. Set location: Chile
4. Set language: Spanish
5. Monitor: Daily rankings

### Option C: Manual Spreadsheet (Low-Cost Alternative)

**Weekly Manual Tracking**:
1. Search each keyword on Google
2. Record position for your URL
3. Update spreadsheet each week
4. Track trend (↑ ↓ →)

**Template**:
```
| Keyword | Week 1 | Week 2 | Week 3 | Trend | Target |
|---------|--------|--------|--------|-------|--------|
| agentes ia chile | 52 | 48 | 41 | ↑ | 3 |
| soluciones agenticas | 75 | 68 | 58 | ↑ | 3 |
```

---

## Part 4: Bi-Weekly Performance Review (Start Week 3)

### Review Cadence

**Every 2 Weeks**:
- [ ] Check GSC Performance report (2-week avg)
- [ ] Compare to previous 2-week period
- [ ] Identify keywords improving/declining
- [ ] Note any ranking drops >5 positions

### Key Metrics to Monitor

| Metric | Baseline | 30-Day Target | 90-Day Target | How to Track |
|--------|----------|---------------|---------------|------------|
| Impressions | Establish day 14 | +50% | +200% | GSC |
| Clicks | Establish day 14 | +50% | +150% | GSC |
| Avg Position | Baseline keywords | -5 to -10 | -15 to -25 | GSC/Semrush |
| CTR (avg) | Establish baseline | +10% | +25% | GSC |
| Pages indexed | 51 (target) | 51+ | 51+ | GSC coverage |

### GSC Performance Report Template

**Every 2 weeks, check**:

1. **Top performing queries**:
   - Which keywords have most impressions?
   - Which have highest CTR?
   - Which are converting (lowest position)?

2. **Queries by position range**:
   - Position 1-3: Maintain and optimize
   - Position 4-10: Push to 1-3 with content improvements
   - Position 11-20: Target with new content or optimization
   - Position 20+: Consider if worth focusing

3. **Queries with low CTR**:
   - If position 1-5 but low CTR → Improve title/description
   - If position 11-20 → Improve title/description to push higher

---

## Part 5: Optimization Actions (Triggered by Performance Data)

### Action Triggers

**Trigger 1: Keyword stuck in position 8-15**
- [ ] Check current page content (too thin?)
- [ ] Add more internal links from blog/verticals
- [ ] Improve title tag for local intent signals
- [ ] Add FAQ section if missing
- [ ] Check search intent: align content better

**Trigger 2: Keyword at position 1-5 but low CTR**
- [ ] A/B test title tags (add power words)
- [ ] Add local signals: "en Chile", location mentions
- [ ] Update meta description for clarity
- [ ] Add schema markup if not present

**Trigger 3: Keyword ranking dropped 5+ positions**
- [ ] Check for technical issues (404s, crawl errors)
- [ ] Verify internal links still intact
- [ ] Confirm content quality unchanged
- [ ] Check for new competitors
- [ ] Review manual actions in GSC

**Trigger 4: New keyword appearing in impressions**
- [ ] If relevant and position <20: add content targeting that keyword
- [ ] If irrelevant: filter out or suppress with meta robots

### Optimization Workflow

```
Week 1-2: Baseline data
  ↓
Week 3-4: Identify optimization candidates
  ↓
Week 5-6: Implement changes
  ↓
Week 7-8: Monitor for improvements
  ↓
Week 9-10: Measure results, iterate
```

---

## Part 6: Content Optimization Based on GSC Data

### Priority Matrix (Effort vs. Impact)

|  | Low Effort | Medium Effort | High Effort |
|---|-----------|--------------|-----------|
| **High Impact** | Update title/desc, Add FAQ | New blog post, Add content | Major restructure |
| **Medium Impact** | Add internal links | Update meta desc | Split/consolidate pages |
| **Low Impact** | Minor tweaks | Schema markup | Full rewrite |

**Focus on**: High impact + low/medium effort

### Optimization Examples

#### Example 1: Keyword at Position 8 (Medium-Effort Fix)

Current: "Agentes de IA para empresas | N3uralia"
Position: 8
Impression: 500/month, CTR: 0.8%, Clicks: 4

**Action**:
1. Update title: "Agentes de IA para Empresas en Chile | N3uralia" (add location)
2. Update description: Add specific results like "-45% costs, +70% productivity"
3. Add internal links from 2-3 blog posts
4. Expected: Move to position 3-5 in 2-4 weeks

#### Example 2: Keyword at Position 12 (Higher-Effort Fix)

Current: "Automatización de Procesos | N3uralia"
Position: 12
Impression: 300/month, CTR: 0%, Clicks: 0

**Action**:
1. Check content length: If <800 words, expand to 1,500+
2. Add specific Chile examples
3. Create new blog post on this topic
4. Internal link from new blog post to money page
5. Add FAQ section with related questions
6. Expected: Move to position 5-8 in 4-8 weeks

---

## Part 7: Competitive Monitoring

### Competitor Analysis (Monthly)

1. **Identify Top 3 Competitors** for each keyword:
   - Search "agentes ia chile"
   - Note top 3 domains (positions 1-3)

2. **Track Their Rankings**:
   - Are they moving up/down?
   - How many backlinks do they have?
   - What content strategy are they using?

3. **Opportunity Analysis**:
   - If competitor drops, can we move up?
   - What content gaps exist?
   - Can we do better than them?

### Tool: SE Ranking or Semrush
- Set up competitor rank tracking
- Compare backlink profiles monthly
- Identify keyword opportunities they're missing

---

## Part 8: 90-Day Success Metrics

### Month 1 Metrics (By Day 30)

- [ ] 51 pages indexed
- [ ] 0 crawl errors
- [ ] Primary keywords: -10 to -20 position improvement each
- [ ] Impressions: +25-50%
- [ ] Clicks: +25-50%
- [ ] 1 keyword in top 10

**Target**: Establish clear trending direction

### Month 2 Metrics (By Day 60)

- [ ] Primary keywords: Target position 10-15 range
- [ ] Secondary keywords: Start appearing in impressions
- [ ] Total impressions: +50-100%
- [ ] Total clicks: +50-100%
- [ ] 2-3 keywords in top 10

**Target**: Momentum building, position improvements consistent

### Month 3 Metrics (By Day 90)

- [ ] "agentes ia chile": Position 3-5
- [ ] "soluciones agenticas": Position 3-5
- [ ] "automatización ia empresas": Position 5-10
- [ ] Total impressions: +150-200%
- [ ] Total clicks: +100-150%
- [ ] 5+ keywords in top 10
- [ ] 20+ keywords in top 20
- [ ] Organic traffic: +100-150%

**Target**: Top 3 ranking for at least 1 primary keyword

---

## Part 9: Monthly Reporting Dashboard

### Executive Summary (For stakeholder review)

```
MONTH 1 PERFORMANCE

Primary Keywords Status:
✓ agentes ia chile: 52→41 (position -11) ⬆
✓ soluciones agenticas: 75→58 (position -17) ⬆
✓ automatización ia: 60→48 (position -12) ⬆

Traffic Metrics:
• Impressions: +45% (400 → 580)
• Clicks: +38% (8 → 11)
• CTR Avg: 1.4%
• Avg Position: 54.3

Top Performing Pages:
1. /es/agentes-ia-chile (23 clicks, 1,200 impressions)
2. /es/agentes-ia-retail-chile (4 clicks, 280 impressions)
3. /es/blog/costo-implementar-agentes-ia-chile (2 clicks, 150 impressions)

Emerging Opportunities:
- Long-tail keywords appearing
- Blog posts gaining traction
- Mobile CTR lower than desktop

Next Month Focus:
- Push primary keywords to top 10
- Optimize low-CTR pages
- Launch backlink campaign
```

---

## Part 10: Tools & Resources

### Free Tools
- Google Search Console (free)
- Google Analytics 4 (free)
- Bing Webmaster Tools (free, backup)
- Google Ads Keyword Planner (free tier)

### Paid Tools (Optional)
- Semrush: $99+/month (recommended)
- SE Ranking: $39+/month (best value)
- Ahrefs: $99+/month (backlink data)

### Spreadsheet Template
Link: [Google Sheets template for tracking keywords]

### GSC Custom Report Setup
1. Navigate to Performance report
2. Click "New" → "Filters"
3. Add filters for:
   - Contains: "agentes ia" (branded queries)
   - Contains: "chile" (geographic queries)
   - Contains: "automatización" (solution queries)

---

## Part 11: Ongoing Maintenance Schedule

### Weekly (Every Monday)
- [ ] Check GSC new issues/errors
- [ ] Review Search Analytics for anomalies
- [ ] Monitor top 3 keywords' positions (manual or tool)

### Bi-Weekly (Every 2 Weeks)
- [ ] Full GSC Performance review (see Part 4)
- [ ] Identify optimization candidates
- [ ] Plan content/optimization for next 2 weeks

### Monthly (First day of month)
- [ ] Full performance report (see Part 9)
- [ ] Competitor monitoring
- [ ] Update tracking spreadsheet
- [ ] Plan next month's SEO priorities

### Quarterly (Every 3 months)
- [ ] Deep dive analysis: What worked?
- [ ] Adjust strategy based on data
- [ ] Plan next quarter focus
- [ ] Audit all pages for technical issues

---

## Summary: 90-Day SEO Roadmap

```
Week 1-2:   Setup GSC, baseline keywords, interlinking
Week 3-4:   First performance review, optimization actions
Week 5-6:   Implement changes, blog content launch
Week 7-8:   Monitor rankings, adjust strategy
Week 9-10:  2-month checkpoint, optimization round 2
Week 11-12: Final push, backlink campaign continuation
Week 13:    90-day review, report results, plan Q2
```

**Expected 90-Day Outcome**:
- Position 1-3 for "agentes ia chile" or "soluciones agenticas"
- +100-150% organic traffic
- 10+ keywords in top 20
- Established competitive advantage in Chile market
- Foundation for continued growth into Q2
