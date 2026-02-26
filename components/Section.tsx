import React from "react";

export function Section(props: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section style={{ padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: 28, margin: 0 }}>{props.title}</h2>
        {props.subtitle ? (
          <p style={{ opacity: 0.85, lineHeight: 1.6, marginTop: 10 }}>{props.subtitle}</p>
        ) : null}
        <div style={{ marginTop: 18 }}>{props.children}</div>
      </div>
    </section>
  );
}
