import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Seo from "@/components/Seo";
import ProjectRow from "@/components/ProjectRow";
import { contact, experience, featured, services, socials } from "@/data/site";

export default function Home() {
  const reel = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = reel.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) el.pause();
    else el.play().catch(() => undefined);
  }, []);

  return (
    <>
      <Seo
        title="Prabhu Awasthi"
        description="Unity developer in Delhi NCR building simulators, interactive installations, VR and games. Vectra ATC simulator, TATA ADAS Simulator, Samudra Manthan VR, Fart Frog."
      />

      <section className="mx-auto max-w-page px-4 sm:px-6 pt-10 sm:pt-14 pb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-5">
          <h1 className="font-display font-extrabold text-[3.4rem] sm:text-7xl xl:text-[5.5rem] leading-[0.88] tracking-tight">
            Unity developer for simulators, installations and games
          </h1>
          <p className="mt-6 text-lg leading-relaxed max-w-md">
            I build real-time software that people use in front of them: air traffic control trainers, expo-floor driving
            simulators, VR for festivals and games on Steam and Google Play.
          </p>
          <p className="mt-3 text-muted">{contact.location}. Open to remote work and relocation.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link href="/GameDev" className="sign sign-direction">
              <span aria-hidden="true">&#8599;</span>See the work
            </Link>
            <a href="#contact" className="sign sign-direction">
              <span aria-hidden="true">&#8600;</span>Contact
            </a>
          </div>
        </div>

        <figure className="lg:col-span-7">
          <div className="border-2 border-ink bg-scope p-2 sm:p-3">
            <video
              ref={reel}
              className="block w-full aspect-video object-cover"
              src="/videos/reel.mp4"
              poster="/posters/reel.jpg"
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
              aria-label="Reel: Vectra, TATA ADAS Simulator, Samudra Manthan VR, PM Gati Shakti, Fart Frog and MIMIC"
            />
            <figcaption className="flex justify-between gap-4 pt-2 text-xs text-paper/70">
              <span>Vectra, TATA ADAS, Samudra Manthan, Gati Shakti, Fart Frog, MIMIC</span>
              <a className="hover:text-sign whitespace-nowrap" href={contact.showreel} target="_blank" rel="noreferrer">
                Full showreel
              </a>
            </figcaption>
          </div>
        </figure>
      </section>

      <section aria-labelledby="selected" className="bg-paper border-t-2 border-ink">
        <div className="mx-auto max-w-page px-4 sm:px-6 pt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="selected" className="font-display font-extrabold text-5xl leading-none">
              Selected work
            </h2>
            <Link href="/GameDev" className="sign sign-direction">
              <span aria-hidden="true">&#8599;</span>All projects
            </Link>
          </div>
          {featured.map((p, i) => (
            <ProjectRow key={p.id} p={p} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section aria-labelledby="services" className="bg-ink text-paper">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-14">
          <h2 id="services" className="font-display font-extrabold text-5xl leading-none text-sign">
            What I can build for you
          </h2>
          <dl className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.name} className="border-l-4 border-sign pl-4">
                <dt className="font-display font-bold text-2xl">{s.name}</dt>
                <dd className="mt-1 text-paper/80 leading-relaxed max-w-prose">{s.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="experience" className="mx-auto max-w-page px-4 sm:px-6 py-14 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="experience" className="font-display font-extrabold text-5xl leading-none">
            Experience
          </h2>
          <div className="mt-6 relative w-40 aspect-square border-2 border-ink">
            <Image src="/profile.jpg" alt="Prabhu Awasthi" fill sizes="160px" className="object-cover" />
          </div>
        </div>
        <ol className="lg:col-span-8">
          {experience.map((e) => (
            <li key={e.org} className="grid sm:grid-cols-[11rem_1fr] gap-x-6 gap-y-1 py-5 border-t border-rule first:border-t-0">
              <span className="text-sm text-muted pt-1">{e.when}</span>
              <div>
                <h3 className="font-display font-bold text-2xl leading-tight">
                  {e.org}
                  <span className="font-sans font-normal text-base text-muted">, {e.role}</span>
                </h3>
                <p className="mt-1 leading-relaxed max-w-prose">{e.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="contact" aria-labelledby="contact-h" className="border-t-2 border-ink">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-14 grid gap-8 lg:grid-cols-12">
          <h2 id="contact-h" className="lg:col-span-5 font-display font-extrabold text-5xl leading-none">
            Get in touch
          </h2>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed max-w-prose">
              Available for full-time roles, remote or with relocation, and for freelance installation and event work.
            </p>
            <ul className="mt-6 space-y-2 text-lg">
              <li>
                <a className="text-link" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </li>
              <li>
                <a className="text-link" href={contact.phoneHref}>
                  {contact.phone}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={contact.cv} download className="sign sign-direction">
                <span aria-hidden="true">&#8595;</span>Download CV
              </a>
              {socials.slice(0, 3).map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="sign sign-direction">
                  <span aria-hidden="true">&#8599;</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
