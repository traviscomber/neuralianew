# Recognition assets

Recognition production images should use stable canonical runtime URLs. Do not embed image data in page components or create version-numbered runtime URLs.

## Section 04 canonical workflow

Section 04 renders exactly one production artwork URL:

- `/recognition-section04-platform-final.webp`

The source artwork is a real 640×1137 WebP. Because repository connector writes are text-safe, its exact bytes are stored as four base64 payload modules in `lib/recognition-section04-final-asset/` and reconstructed by `app/recognition-section04-platform-final.webp/route.ts`. The route returns `Content-Type: image/webp` and a refresh-safe cache policy.

The rendering component is:

- `components/recognition-section04-final.tsx`
- `components/recognition-section04-final.module.css`

The component uses a native `<img>` pointing at the canonical WebP URL; Section 04 contains no inline SVG artwork.

CI validates the reconstructed asset byte length (30,482 bytes), RIFF/WEBP signature, SHA-256 hash, route content type, cache policy, and removal of legacy Section 04 image paths.

Expected production assets for the rest of Recognition remain unchanged.
