const assets = [
  ["visibility", "/images/solutions/section02/visibility.png"],
  ["workflow-automation", "/images/solutions/section02/workflow-automation.png"],
  ["decision-intelligence", "/images/solutions/section02/decision-intelligence.png"],
  ["durable-systems", "/images/solutions/section02/durable-systems.png"],
] as const

export default function AssetAuditPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#061313", color: "#e8ffff", padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: 8 }}>Section 02 canonical asset audit</h1>
      <p style={{ marginTop: 0, opacity: 0.72 }}>Direct canonical PNG routes served through the Supabase rewrites.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginTop: 32 }}>
        {assets.map(([name, src]) => (
          <figure key={src} style={{ margin: 0, border: "1px solid rgba(96,255,238,.25)", borderRadius: 16, padding: 16, background: "rgba(255,255,255,.03)" }}>
            <img src={src} alt={name} style={{ display: "block", width: "100%", height: 320, objectFit: "contain", background: "#081b1b", borderRadius: 10 }} />
            <figcaption style={{ marginTop: 12, fontFamily: "monospace", fontSize: 13, overflowWrap: "anywhere" }}>{src}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  )
}
