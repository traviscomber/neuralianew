# Recognition assets

Recognition production images should use stable, canonical runtime URLs. Do not embed image data in page components or create version-numbered copies.

## Section 04 canonical workflow

Section 04 has exactly one runtime artwork URL:

- `/recognition-section04-platform-canonical.webp`

The canonical portrait WebP is assembled server-side from:

- `lib/recognition-section04-asset/part0.ts`
- `lib/recognition-section04-asset/part1.ts`
- `lib/recognition-section04-asset/part2.ts`
- `app/recognition-section04-platform-canonical.webp/route.ts`

The rendering component is:

- `components/recognition-section04-final.tsx`
- `components/recognition-section04-final.module.css`

Section 04 is intentionally a long portrait composition. Its five visual bands align with the five existing ProcessNode stages; the node component rules remain shared and unchanged.

To replace the Section 04 artwork:

1. Start from a task branch; never edit `main` directly.
2. Replace the three canonical asset payload parts while keeping the stable runtime URL.
3. Verify the assembled file is a valid WebP and is larger than 4 KB.
4. Run the repository CI checks: Section 04 asset guard, type-check, lint, and production build.
5. Verify the Vercel preview for `/en/recognition` and `/es/reconocimiento` on desktop and mobile.
6. Merge only after checks and preview verification pass.

The CI guard rejects Section 04 regressions such as embedded page data URIs, the obsolete landscape asset, legacy runtime image routes, versioned Section 04 copies, or an invalid assembled canonical WebP.

`recognition-upload/` remains temporary transfer staging for other Recognition assets. A `.ready` marker can trigger `.github/workflows/materialize-recognition-assets.yml`. Staging files are never runtime sources.

Expected production assets include:
- `public/hero-command-center-cougar.webp`
- `public/usecase-cougar-clean.webp`
- `public/usecase-cow-clean.webp`
- `public/usecase-sea-urchin-clean.webp`
- `public/usecase-security-clean.webp`
- `public/value-chain-detection-action.webp`
- `/recognition-section04-platform-canonical.webp`
- `public/command-center-scale.webp`
