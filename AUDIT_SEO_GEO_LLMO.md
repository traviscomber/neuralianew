# N3uralia SEO / GEO / LLMO Audit

**Status:** current  
**Audit date:** 2026-09-11  
**Canonical domain:** `https://www.n3uralia.com`  
**Scope:** technical SEO, bilingual canonicalization, geographic discovery, structured entity data, crawler policy, sitemap hygiene and LLM-facing source guidance.

## Executive result

The September 2026 pass replaces the February audit. The previous document contained stale crawler assumptions, obsolete route references and unsupported example metrics. Those claims are intentionally removed.

The current implementation is designed around four rules:

1. Index only canonical, useful public URLs.
2. Keep Spanish and English pages connected through explicit hreflang pairs.
3. Describe N3uralia and its geographic scope with verifiable entity data rather than fabricated local-office signals.
4. Give search engines and language models a consistent source hierarchy without inventing customer outcomes, certifications or guarantees.

## Technical SEO

- Canonical host is `www.n3uralia.com`; non-www redirects permanently to the canonical host.
- Localized metadata uses canonical URLs plus `es-CL`, `es`, `en`, `en-US` and `x-default` alternates.
- Translated commercial slugs are paired explicitly, including Solutions, Projects, Products, Recognition and Methodology.
- Open Graph URLs use the same canonical localized URL model.
- The public sitemap is generated from canonical route registries rather than from every build route.
- Redirected URLs are excluded from the sitemap.
- Duplicate locale variants of the methodology route are permanently redirected to the intended localized slug.
- Public Labs is crawlable; internal demos, dashboards, APIs and utility surfaces remain excluded.

## Sitemap architecture

Primary sitemap: `https://www.n3uralia.com/sitemap.xml`

The sitemap contains:

- Spanish and English home pages.
- Canonical commercial pages and conversion surfaces.
- Canonical solution and knowledge pages.
- Published blog and case-study URLs.
- The Chile AI-agents pillar.
- Geographic city landing pages generated from the canonical Chile city registry.
- Reciprocal language alternates and `x-default` for every bilingual pair.

The sitemap must not contain:

- Redirect targets under an obsolete URL.
- Private/API/dashboard paths.
- Duplicate route aliases representing the same page.
- Deleted acquisition pages.

## GEO strategy

N3uralia is represented as based in Santiago, Chile and serving Chile and Latin America. Geographic pages are context pages, not fake branch-office pages.

The city-page system currently covers the cities defined in `lib/chile-city-pages.ts`. Each page states its city, region, relevant operating contexts and localized description, while explicitly avoiding an implication that N3uralia maintains a physical office in every city.

Canonical geographic pillar:

- `https://www.n3uralia.com/es/agentes-ia-chile`
- `https://www.n3uralia.com/en/agentes-ia-chile`

City pattern:

- `https://www.n3uralia.com/es/agentes-ia-{city}-chile`
- `https://www.n3uralia.com/en/agentes-ia-{city}-chile`

## Structured data

The global schema uses one connected `@graph` with:

- `Organization` as the canonical N3uralia entity.
- `WebSite` connected to that organization.
- Canonical logo, website, verified public contact channels and LinkedIn identity.
- Santiago / Chile location context and Chile / Latin America service area.
- Spanish and English language support.
- An `OfferCatalog` describing the current solution categories.

A generic `LocalBusiness` entity is deliberately not emitted because a city-level service presence should not be presented as a storefront or physical office without a verified street-level business location.

## LLMO / AI discovery

`/llms.txt` is maintained as a concise canonical briefing rather than as a ranking hack. It provides:

- Canonical entity identity.
- Canonical ES/EN URLs.
- Core solution taxonomy.
- Geographic scope.
- Operating principles.
- Evidence and citation hierarchy.
- Explicit rules against inferring unsupported ROI, metrics, certifications, awards, SLAs or outcomes.

Search discovery and model-training permissions remain separate. Public search crawlers can access canonical public content under the general crawler policy, and `OAI-SearchBot` is explicitly allowed. Existing opt-outs for selected training/data-collection crawlers remain intact.

## Current solution taxonomy

- Operational Intelligence
- Workflow Automation
- AI Assistants
- Document Intelligence
- Recognition Systems
- Internal Platforms
- Data Integrations
- Governance and Human Review

These terms should remain consistent across Solutions, structured data and `llms.txt`.

## Integrity gates

`scripts/check-portal-contract.mjs` now checks SEO/LLMO invariants in addition to the existing portal contract. It verifies, among other things:

- canonical bilingual sitemap pairs;
- GEO city generation;
- Labs crawlability;
- exclusion of the redirected mining-blog URL;
- canonical methodology redirects;
- structured-data entity shape;
- current solution taxonomy;
- updated `llms.txt` evidence rules.

The CI workflow runs the portal contract, type checking, linting and the production build before changes can be accepted on `main`.

## Claims policy

No SEO, GEO or LLMO implementation can guarantee a ranking or inclusion in a model/search result. N3uralia should not publish invented performance percentages, customer counts, rankings, certifications, availability guarantees or ROI figures. Material claims must be tied to a current canonical page, measurement source or contract.

## Next review

Re-run this audit when any of the following changes materially:

- primary public navigation;
- canonical domain or locale strategy;
- sitemap route registry;
- city-page registry;
- solution taxonomy;
- crawler policy;
- structured data;
- major project or product evidence.
