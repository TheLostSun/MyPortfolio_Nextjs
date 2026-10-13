import Image from "next/image";
import Arrow from "@/components/Arrow";
import Seo from "@/components/Seo";

const PLAY =
  "https://play.google.com/store/apps/details?id=com.TheLostSunStudios.FartFrog&referrer=utm_source%3Dportfolio%26utm_medium%3Dgame_page";
const shots = [3, 7, 4, 6, 1, 8, 2, 5];

const features = [
  { name: "One thumb, one weapon", text: "Tap to aim, release to blast. Short runs you can play one-handed." },
  { name: "Headshots and combos", text: "Land Amazing and Explosive hits and chain them for big score multipliers." },
  { name: "Skins, hats and fart types", text: "Every takedown earns coins for new looks and farts with different abilities." },
  { name: "Feels as good as it sounds", text: "Crunchy sound effects and haptic feedback on every hit, hop and explosion." },
];

const facts: [string, string][] = [
  ["Developer", "TheLostSun Studios (Prabhu Awasthi)"],
  ["Based in", "Gurugram, India"],
  ["Platform", "Android, on Google Play"],
  ["Price", "Free, with ads and optional in-app purchases"],
  ["Age rating", "3+"],
  ["Engine", "Unity"],
];

function PlayButton({ big = false }: { big?: boolean }) {
  return (
    <a
      href={PLAY}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-3 border-2 border-ink bg-[#B5E83A] text-ink font-display font-extrabold uppercase leading-none tracking-wide shadow-[4px_4px_0_#111C27] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#111C27] transition-transform ${
        big ? "px-6 py-4 text-2xl" : "px-4 py-3 text-lg"
      }`}
    >
      <Arrow />
      Get it free on Google Play
    </a>
  );
}

export default function FartFrog() {
  return (
    <>
      <Seo
        title="Fart Frog"
        path="/FartFrog"
        image="/fartfrog/og.jpg"
        description="Fart Frog: a free endless arcade game for Android. Tap to aim, blast enemies with explosive farts, land headshots and unlock skins. Get it on Google Play."
      />

      <section className="bg-[#2E8EDB] text-white">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12 sm:py-16 grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <Image
                src="/fartfrog/icon.jpg"
                alt="Fart Frog app icon"
                width={96}
                height={96}
                className="rounded-[22px] border-2 border-ink"
                priority
              />
              <p className="text-white/85 leading-snug">
                TheLostSun Studios
                <br />
                Free on Android
              </p>
            </div>
            <h1 className="mt-6 font-display font-extrabold text-[4.5rem] sm:text-[7rem] leading-[0.85] tracking-tight">
              Fart Frog
            </h1>
            <p className="mt-5 text-xl sm:text-2xl leading-snug max-w-xl">
              A frog with one seriously explosive superpower. Tap to aim, let one rip, and blast enemies off the
              islands. How far can you fart your way?
            </p>
            <div className="mt-8">
              <PlayButton big />
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-[260px] sm:w-[300px] border-[6px] border-ink rounded-[36px] overflow-hidden bg-ink shadow-[8px_8px_0_#111C27]">
              <video
                className="block w-full aspect-[9/16] object-cover"
                src="/fartfrog/trailer-vertical.mp4"
                poster="/fartfrog/trailer-poster.jpg"
                controls
                playsInline
                preload="none"
                aria-label="Fart Frog trailer"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="shots-h" className="bg-[#1D6FB0] text-white">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-10">
          <h2 id="shots-h" className="font-display font-extrabold text-4xl">
            Screenshots
          </h2>
          <ul className="mt-6 flex gap-4 overflow-x-auto pb-4 snap-x" tabIndex={0} aria-label="Screenshots, scroll sideways">
            {shots.map((n) => (
              <li key={n} className="snap-start shrink-0">
                <Image
                  src={`/fartfrog/screen${n}-web.jpg`}
                  alt={`Fart Frog gameplay screenshot ${n}`}
                  width={203}
                  height={360}
                  className="h-[360px] w-auto border-2 border-ink rounded-xl"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="features-h" className="mx-auto max-w-page px-4 sm:px-6 py-14">
        <h2 id="features-h" className="font-display font-extrabold text-5xl leading-none">
          Why you will keep playing
        </h2>
        <dl className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.name} className="border-l-4 border-[#8CC63F] pl-4">
              <dt className="font-display font-bold text-2xl">{f.name}</dt>
              <dd className="mt-1 leading-relaxed max-w-prose">{f.text}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10">
          <PlayButton />
        </div>
      </section>

      <section id="press" aria-labelledby="press-h" className="border-t-2 border-ink">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="press-h" className="font-display font-extrabold text-5xl leading-none">
              Press kit
            </h2>
            <p className="mt-4 text-lg leading-relaxed max-w-prose">
              Writing about Fart Frog or making a video? Use anything here. For questions or interviews, email{" "}
              <a className="text-link" href="mailto:thelostsunstudios@gmail.com">
                thelostsunstudios@gmail.com
              </a>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href="/fartfrog/Fart_Frog_Press_Kit.zip" download className="sign sign-direction">
                <Arrow dir="down" />
                Download press kit (5.6 MB)
              </a>
            </div>
            <p className="mt-3 text-sm text-muted">Icon, 8 screenshots, vertical trailer and fact sheet.</p>
          </div>
          <dl className="lg:col-span-7 grid sm:grid-cols-[10rem_1fr] gap-x-6">
            {facts.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="py-3 border-t border-rule text-muted">{k}</dt>
                <dd className="py-3 sm:border-t border-rule">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
