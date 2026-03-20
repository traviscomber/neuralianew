import React from "react";

export function Section(props: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="py-10 border-t border-border/50">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-2xl font-semibold text-foreground">{props.title}</h2>
        {props.subtitle ? (
          <p className="text-muted-foreground leading-relaxed mt-2">{props.subtitle}</p>
        ) : null}
        <div className="mt-4">{props.children}</div>
      </div>
    </section>
  );
}
