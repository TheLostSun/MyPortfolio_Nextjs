import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import PageIntro from "@/components/PageIntro";
import Seo from "@/components/Seo";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  return (
    <>
      <Seo
        title="Case studies"
        path="/CaseStudies"
        image="/posters/FinRace.jpg"
        description="Case studies by Prabhu Awasthi: how event games, simulators and installations were designed, built and run in front of the public."
      />
      <PageIntro title="Case studies">
        The story behind selected projects: the brief, how it plays, how it was built to survive a live event, and how it
        can be adapted for your brand.
      </PageIntro>
      <div className="mx-auto max-w-page px-4 sm:px-6 pb-16 border-t-2 border-ink">
        <ul className="grid gap-8 pt-10 md:grid-cols-2">
          {caseStudies.map((c) => (
            <li key={c.slug}>
              <Link href={c.href} className="group block border-2 border-ink bg-paper hover:bg-ink hover:text-paper transition-colors">
                <div className="relative aspect-video border-b-2 border-ink bg-scope">
                  <Image src={c.poster} alt={`${c.title} gameplay`} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted group-hover:text-paper/70">
                    {c.client}, {c.year}
                  </p>
                  <h2 className="mt-1 font-display font-extrabold text-4xl leading-none">{c.title}</h2>
                  <p className="mt-2 font-semibold">{c.tagline}</p>
                  <p className="mt-3 leading-relaxed">{c.blurb}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tags">
                    {c.tags.map((t) => (
                      <li key={t} className="text-xs uppercase tracking-wide border border-current px-2 py-1">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 sign sign-direction">
                    <Arrow dir="ne" />
                    Read the case study
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
