# Recognition assets

Canonical production location: `public/`.

Recognition production images must be referenced directly from stable WebP files in `public/`. Do not use data URIs, runtime image routes, versioned duplicate copies, or generated-asset directories in page code.

## Section 04 canonical workflow

Section 04 has exactly one runtime artwork source:

- `public/platform-system-behind-recognition.webp`

The rendering component is:

- `components/recognition-section04-final.tsx`
- `components/recognition-section04-final.module.css`

To replace the Section 04 artwork:

1. Start from a task branch; never edit `main` directly.
2. Replace `public/platform-system-behind-recognition.webp` in place. Keep the stable filename; do not create `v2`, `v3`, or other versioned runtime copies.
3. Verify the file is a valid WebP and is larger than 4 KB.
4. Run the repository CI checks: Section 04 asset guard, type-check, lint, and production build.
5. Verify the Vercel preview for `/en/recognition` and `/es/recognition` on desktop and mobile.
6. Merge only after checks and preview verification pass.

The CI guard rejects Section 04 regressions such as embedded data URIs, legacy runtime image routes, versioned Section 04 public copies, or a missing/invalid canonical WebP.

`recognition-upload/` remains temporary transfer staging for other Recognition assets. A `.ready` marker can trigger `.github/workflows/materialize-recognition-assets.yml`. Staging files are never runtime sources.

Expected production assets:
- `public/hero-command-center-cougar.webp`
- `public/usecase-cougar-clean.webp`
- `public/usecase-cow-clean.webp`
- `public/usecase-sea-urchin-clean.webp`
- `public/usecase-security-clean.webp`
- `public/value-chain-detection-action.webp`
- `public/platform-system-behind-recognition.webp`
- `public/command-center-scale.webp`
