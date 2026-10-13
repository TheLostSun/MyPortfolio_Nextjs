import type { ReactNode } from "react";

export default function PageIntro({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-page px-4 sm:px-6 pt-12 pb-6">
      <h1 className="font-display font-extrabold text-6xl sm:text-7xl leading-[0.9] tracking-tight">{title}</h1>
      {children && <div className="mt-4 text-lg max-w-2xl text-muted">{children}</div>}
    </section>
  );
}
