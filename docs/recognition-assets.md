# Recognition assets

Canonical production location: `public/`.

The Recognition page must reference WebP files directly from `public/`.

`recognition-upload/` is temporary transfer staging only. A `.ready` marker triggers `.github/workflows/materialize-recognition-assets.yml`, which reconstructs and validates a staged WebP, writes it to `public/`, and removes its staging chunks.

Do not create additional recognition asset source or generated-asset directories. Do not use data URIs or duplicate copies.

Expected production assets:
- `public/hero-command-center-cougar.webp`
- `public/usecase-cougar-clean.webp`
- `public/usecase-cow-clean.webp`
- `public/usecase-sea-urchin-clean.webp`
- `public/usecase-security-clean.webp`
- `public/value-chain-detection-action.webp`
- `public/platform-system-behind-recognition.webp`
- `public/command-center-scale.webp`
