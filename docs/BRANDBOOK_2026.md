# N3URALIA BRANDBOOK 2026

**Status:** Canonical  
**Version:** 2.0  
**Effective date:** July 2026  
**Source of truth:** The production design system implemented in `app/globals.css`, `app/layout.tsx`, active landing components, and assets under `public/n3uralia-brand/`.

> This document supersedes `docs/BRANDBOOK.md`.

---

## 1. Brand Positioning

N3uralia builds production AI systems, agentic workflows, and software automation for teams in Chile and LATAM.

The brand should feel:

- Precise, not decorative
- Technical, not generic SaaS
- Cinematic, not flashy
- Industrial, not playful
- Human-controlled, not autonomous by default
- Premium, but never ornamental

The visual identity is **retro-futurist operational intelligence**.

---

## 2. Visual Principles

### Dark operational environment

Near-black is the primary environment. It evokes control rooms, active infrastructure, telemetry, and live operations.

### Teal signal language

Cyan-teal communicates active states, focus, status, controls, traces, scanning, and technical emphasis. It is a signal color, not a decorative wash.

### Editorial contrast

Pale cyan light sections create narrative rhythm and separate outcomes, projects, and explanatory content. They are contrast moments, not the default page background.

### Structured asymmetry

Prefer wide image fields, narrow copy columns, offset grids, split panels, sticky introductions, long dividers, and horizontal systems diagrams.

### Restrained motion

Motion must communicate state, direction, scanning, focus, or system activity. Avoid decorative animation without functional meaning.

---

## 3. Color System

### Canonical tokens

| Token | Value | Primary use |
|---|---:|---|
| `--n3-black` | `#030606` | Main dark background |
| `--n3-deep` | `#071010` | Deep panels and image fades |
| `--n3-dark-surface` | `#0B1516` | Cards and raised dark surfaces |
| `--n3-teal` | `#45D1CF` | Active signals, scan lines, focus |
| `--n3-teal-soft` | `#A8D9D8` | Interface text, borders, controls |
| `--n3-text-light` | `#E8F0F0` | Primary text on dark surfaces |
| `--n3-text-muted` | `#8FA7A8` | Secondary text on dark surfaces |
| `--n3-light-bg` | `#EAF1F1` | Light editorial sections |
| `--n3-light-surface` | `#F4F8F8` | Light cards and panels |
| `--n3-light-text` | `#102326` | Primary text on light surfaces |
| `--n3-light-muted` | `#5D7073` | Secondary text on light surfaces |
| `--n3-border-light` | `#C9D8D8` | Dividers on light surfaces |

### Usage rules

- Near-black should dominate primary landing experiences.
- Teal should highlight meaning, interaction, or system state.
- Use thin translucent borders instead of heavy card outlines.
- Avoid unrelated accent colors unless they communicate warnings or errors.
- Do not reintroduce the legacy brown, cream, and sage palette as the main identity.
- Maintain WCAG AA contrast for text and controls.

---

## 4. Typography

### Font families

| Role | Font | Typical weight |
|---|---|---:|
| Display headings | Rajdhani | 400 |
| Body and navigation | Montserrat | 400–500 |
| Telemetry and technical labels | System monospace | 400 |

Fonts are loaded with `next/font` and `display: swap`.

### Display headings

- Uppercase by default
- Wide tracking around `0.14em`
- Tight line height around `1.08`
- Light visual weight
- Responsive sizing with `clamp()`
- Hero sizes may reach approximately 78px on large screens

### Body copy

- Montserrat
- Comfortable line height around `1.65`
- Narrow readable measure, usually 460–590px
- Muted cool-gray text on dark backgrounds

### Telemetry labels

- Monospace
- 9–11px
- Uppercase
- Tracking around `0.15em–0.18em`
- Teal or muted-teal color

Avoid bold, rounded, generic SaaS typography as the dominant visual language.

---

## 5. Layout and Spacing

### Container

- Maximum working width: approximately 1240px
- Mobile side padding: approximately 20px
- Section spacing should feel editorial and deliberate

### Preferred structures

- Asymmetric two-column hero grids
- Image-to-copy operational rows
- Sticky section introductions
- Long horizontal divider systems
- Four-column product grids on large screens
- Timelines with active signal markers
- Alternating dark and pale-cyan sections

### Responsive behavior

- Collapse complex grids cleanly on tablets and phones
- Preserve information hierarchy before preserving visual symmetry
- Keep interactive targets at least 44px high; 46px is the current button baseline
- Prevent horizontal overflow from diagrams, labels, or wide letter spacing

---

## 6. Components

### Buttons

Default technical button:

- Transparent background
- 1px soft-teal border
- Square corners
- Rajdhani uppercase label
- Wide tracking
- Minimum height: 46px
- Horizontal padding around 30px
- Subtle 250ms transition

Primary button:

- Soft-teal background
- Near-black text
- No rounded-pill treatment
- Hover may brighten slightly but should not glow excessively

### Cards and panels

- Prefer flat framed panels over floating rounded cards
- Use thin borders and restrained surface contrast
- Dark panels use `--n3-dark-surface`
- Light panels may use translucent white over `--n3-light-bg`
- Corner markers can be used for technical framing
- Avoid oversized shadows and excessive rounding

### Dividers

- Thin 1px lines
- Low-opacity teal on dark surfaces
- Cool gray on light surfaces
- Dividers should reinforce grid structure and system flow

### Timeline signals

- Small circular markers
- Teal border in inactive state
- Filled teal and restrained glow in active state
- Connected by a thin vertical line

---

## 7. Imagery and Graphics

### Photography

- Cinematic, operational, industrial, or human-in-context
- Avoid generic smiling-office stock photography
- Use dark edge fades so imagery integrates into the environment
- Favor wide, architectural crops

### Technical graphics

Preferred motifs:

- Radar and circular systems diagrams
- Operations graphs
- Network traces
- Telemetry strings
- Scan lines
- Coordinate and status labels
- Thin geometric frames

### Image treatment

- Mild grayscale is acceptable
- Dark overlays should preserve readable text contrast
- Edge gradients may blend images into near-black surfaces
- Avoid loud gradients, glossy 3D blobs, and decorative AI clichés

---

## 8. Motion

### Allowed

- Slow scan-line movement
- Focus and blur transitions
- Subtle active-state glow
- Controlled panel expansion
- Border and color transitions around 250ms

### Requirements

- Respect `prefers-reduced-motion`
- Avoid rapid flashing
- Do not make critical content dependent on animation
- Keep ambient loops slow and low contrast

---

## 9. Voice and Messaging

### Positioning language

Lead with production outcomes and operational control:

- Production AI systems
- Agentic workflows
- Software automation
- Human oversight
- Measurable operational impact
- Chile and LATAM relevance

### Tone

- Direct
- Evidence-based
- Technically credible
- Calm and confident
- Specific about outcomes

### Avoid

- Empty AI superlatives
- Futurism without operational meaning
- Claims that cannot be supported
- Overuse of words such as revolutionary, magical, limitless, or effortless
- Presenting uncontrolled autonomy as the goal

---

## 10. Accessibility and Quality

- WCAG AA contrast minimum
- Semantic heading hierarchy
- Visible keyboard focus
- Descriptive alternative text
- Keyboard-operable controls
- Minimum 44px interactive targets
- User-scalable viewport
- Reduced-motion support
- No information conveyed by color alone

All production changes must pass type checking, linting, and the production build.

---

## 11. Canonical Implementation References

- `app/globals.css`
- `app/layout.tsx`
- Active landing-page components
- `public/n3uralia-brand/`
- `.github/workflows/ci.yml`
- `.github/workflows/codeql.yml`

When this document conflicts with current production code, resolve the mismatch intentionally: either update the implementation or revise this document in the same change.

---

## 12. Governance

- Design changes must use canonical tokens.
- New visual patterns should be documented before broad reuse.
- Exceptions require a clear product or accessibility reason.
- Review this document every six months or after a major redesign.
- Next scheduled review: January 2027.

---

**Owner:** N3uralia Design and Engineering  
**Repository:** `traviscomber/neuralianew`  
**Canonical file:** `docs/BRANDBOOK_2026.md`
