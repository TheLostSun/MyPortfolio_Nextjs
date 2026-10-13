import Image from "next/image";
import type { Project } from "@/data/site";
import Video from "./Video";

export default function ProjectRow({ p, flip = false }: { p: Project; flip?: boolean }) {
  return (
    <article id={p.id} className="scroll-mt-6 grid gap-6 lg:gap-10 lg:grid-cols-12 py-10 border-t border-rule first:border-t-0">
      <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <div className="border-2 border-ink bg-scope">
          {p.video ? (
            <Video src={p.video} poster={p.poster} label={`${p.title} gameplay video`} />
          ) : p.image ? (
            <div className="relative aspect-video">
              <Image src={p.image} alt={`${p.title} screenshot`} fill className="object-cover" sizes="(min-width:1024px) 60vw, 100vw" />
            </div>
          ) : null}
        </div>
      </div>
      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <h3 className="font-display font-extrabold text-4xl sm:text-5xl leading-[0.95]">{p.title}</h3>
        <p className="mt-2 text-muted">
          {p.client}
          {p.year ? `, ${p.year}` : ""}
        </p>
        <p className="mt-4 text-[17px] leading-relaxed max-w-prose">{p.summary}</p>
        {p.role.length > 0 && (
          <>
            <h4 className="mt-5 font-semibold">What I did</h4>
            <ul className="mt-2 space-y-1.5 max-w-prose">
              {p.role.map((r) => (
                <li key={r} className="pl-5 relative leading-snug">
                  <span aria-hidden="true" className="absolute left-0 top-[0.45em] h-2 w-2 bg-sign border border-ink" />
                  {r}
                </li>
              ))}
            </ul>
          </>
        )}
        <p className="mt-5 text-sm text-muted">{p.stack}</p>
        {p.links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {p.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="sign sign-direction">
                <span aria-hidden="true">&#8599;</span>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
