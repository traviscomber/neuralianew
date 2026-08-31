# Recognition Section 04 vector assets

Reusable SVG elements derived from the approved Section 04 mockup. They are intentionally separated from page layout so they can be positioned, layered, animated, and resized independently later.

- `edge-capture-camera.svg` — camera/scanner, scan cone, cougar detection frame and telemetry.
- `visual-classification.svg` — cougar classification, confidence meter and negative comparison state.
- `logic-action.svg` — rules/scoring, decision confirmation and report action.
- `records-insights.svg` — event record, location/map and analytics chart.
- `intelligence-hub.svg` — distribution hub and API/cloud/analytics/partners endpoints.
- `sequence-node.svg` — reusable numbered vertical-flow node; replace the `01` text per step when embedded inline.
- `alert-delivery.svg` — report delivery and trustworthy operator/device motif.

## Brand mark

Do not redraw the N3uralia logo inside SVG artwork. When the intelligence hub is assembled on the page, layer the existing real `BrandMark` component or official logo asset over the center of `intelligence-hub.svg`. This preserves the canonical N3uralia geometry.

## Animation intent

Recommended motion is subtle and implemented in CSS/DOM rather than baked into the SVG files: scan sweep, confidence fill, data pulse down the vertical spine, report-send pulse, chart rise, and low-amplitude intelligence rings from the hub.
