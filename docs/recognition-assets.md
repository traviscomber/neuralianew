# Recognition assets

Recognition production images should use stable, canonical runtime URLs. Do not embed image data in page components or create version-numbered copies.

## Section 04 canonical workflow

Section 04 has exactly one production artwork file and runtime URL:

- `public/recognition-section04-platform-final.webp`
- `/recognition-section04-platform-final.webp`

The rendering component is:

- `components/recognition-section04-final.tsx`
- `components/recognition-section04-final.module.css`

Section 04 intentionally uses a long portrait WebP composition. Its visual bands align with the five existing ProcessNode stages; the node component rules remain shared and unchanged.

To replace the Section 04 artwork:

1. Export the approved portrait artwork as a real WebP file with the same 640:1137 aspect ratio.
2. Replace `public/recognition-section04-platform-final.webp` without changing the runtime URL.
3. Verify the file is a valid WebP and larger than 20 KB.
4. Run the repository CI checks: Section 04 asset guard, type-check, lint, and production build.
5. Verify `/en/recognition` and `/es/reconocimiento` on desktop and mobile before considering the change complete.

The CI guard rejects Section 04 regressions such as inline SVG artwork, embedded page data URIs, legacy runtime image routes, obsolete versioned copies, or an invalid WebP.

`recognition-upload/` remains temporary transfer staging for other Recognition assets. A `.ready` marker can trigger `.github/workflows/materialize-recognition-assets.yml`. Staging files are never runtime sources.

Expected production assets include:
- `public/hero-command-center-cougar.webp`
- `public/usecase-cougar-clean.webp`
- `public/usecase-cow-clean.webp`
- `public/usecase-sea-urchin-clean.webp`
- `public/usecase-security-clean.webp`
- `public/value-chain-detection-action.webp`
- `public/recognition-section04-platform-final.webp`
- `public/command-center-scale.webp`
