import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import Seo from "@/components/Seo";
import Video from "@/components/Video";
import { contact } from "@/data/site";

const ENQUIRY = `mailto:${contact.email}?subject=${encodeURIComponent("FinRace for our event")}&body=${encodeURIComponent(
  "Hi Prabhu,\n\nWe'd like to talk about running FinRace at our event.\n\nEvent / brand:\nDates and location:\nExpected visitors:\nWhat we'd like to change (currency, content, branding):\n"
)}`;

const glance: [string, string][] = [
  ["Players", "2 at a time, head to head"],
  ["Session", "About 3 minutes: 2.5 minute race + results"],
  ["Hardware", "2 Android tablets, 1 Windows PC, a large screen or LED wall, a Wi-Fi router"],
  ["Internet", "Not needed. Everything runs on the local network"],
  ["Data", "Registration + results saved on the PC, live Excel leaderboard"],
  ["Built with", "Unity 6, C#, URP, OSC"],
];

const steps = [
  {
    name: "Register on the tablet",
    text: "Players enter their details on their own tablet and pick a car. The form is generated from a config file, so the fields can be whatever the client needs.",
  },
  {
    name: "Start with a salary",
    text: "Both players start their career with AED 10,000. The big screen counts them in and the race starts on both tablets at the same moment.",
  },
  {
    name: "Every choice moves money",
    text: "Piggy banks and investment seeds move money into savings and investments. Shopping bags and late fees eat it. Scams lose it. Swipe to change lanes, swipe up to jump the trucks and barriers.",
  },
  {
    name: "Five life stages, faster each time",
    text: "From First Paycheck to Financial Freedom, the road speeds up and the time to decide shrinks from 5.5 seconds to under 2. Hit an obstacle and your session is over.",
  },
  {
    name: "Get your financial health score",
    text: "At the finish each player gets a score out of 100 against the 50/30/20 rule, a title like Smart Saver or Impulse Spender, a personal takeaway and what their savings could grow to.",
  },
];

const gallery = [
  { src: "/finrace/countdown.jpg", alt: "Both players on the start line with a AED 10,000 salary", caption: "Both players start on the same salary. The big screen mirrors each tablet live." },
  { src: "/finrace/collect.jpg", alt: "Green particles burst as a player collects a savings item", caption: "Every pickup bursts in its category colour: green to grow, orange to spend, red for hazards." },
  { src: "/finrace/flip.jpg", alt: "A car doing a barrel roll over a truck", caption: "Swipe up to jump and barrel-roll over obstacles. Hit one and your run ends." },
  { src: "/finrace/crash.jpg", alt: "A car crashed into a barrier with a Crashed banner", caption: "A crash ends that player's session; the other keeps racing to the finish." },
  { src: "/finrace/results.jpg", alt: "Results screen with health scores and benchmark bars for both players", caption: "Results: health score, where the money went against 50/30/20, title and takeaway." },
];

const eventReady = [
  {
    name: "No lost leads",
    text: "Registrations and results are acknowledged only after they are written to disk on the PC, in two folders, plus a raw copy of every message. Until then the tablet keeps resending, even if the app is closed and reopened.",
  },
  {
    name: "Runs itself between players",
    text: "When both tablets are ready the race starts on its own, results show for 30 seconds, then everything resets for the next pair. Staff only step in if they want to.",
  },
  {
    name: "Live leaderboard and Excel",
    text: "The lobby shows an all-time leaderboard between races. The same data is mirrored to an Excel file with leaderboard, registration and full results sheets, ready to hand to the client.",
  },
  {
    name: "Offline by design",
    text: "Tablets and screen talk over the local Wi-Fi, so a weak venue connection never stops the game. Large messages are split, checksummed and resent until they arrive.",
  },
  {
    name: "Quick to set up",
    text: "Each tablet asks for the screen's IP once per launch. Hotkeys on the PC start a race, reset the floor or run a local test with a keyboard.",
  },
  {
    name: "Smooth on tablets",
    text: "The car model was cut from 500k to 70k triangles with the wheels split out to spin and steer. Heavy effects such as motion blur switch off automatically on mobile.",
  },
];

const customise = [
  "Currency, starting salary and every amount on the road",
  "The 50 road objects: names, what they do and which life stage they appear in",
  "Stage names, speed and difficulty",
  "Registration fields: name, phone, email, company, opt-ins or anything else",
  "Score titles and takeaway messages",
  "Car colours, roadside city and the look of the race (sky, fog, lighting, post-processing)",
];

export default function FinRaceCaseStudy() {
  return (
    <>
      <Seo
        title="FinRace case study"
        path="/CaseStudies/FinRace"
        image="/posters/FinRace.jpg"
        description="FinRace: a two-player financial-literacy racing game for brand activations. Tablets plus a big screen, lead capture with no lost records, and fully configurable content."
      />

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-page px-4 sm:px-6 pt-10 pb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <Link href="/CaseStudies" className="text-sm text-paper/70 hover:text-sign">
              Case studies
            </Link>
            <h1 className="mt-3 font-display font-extrabold text-[4rem] sm:text-[6rem] leading-[0.85] tracking-tight text-sign">
              FinRace
            </h1>
            <p className="mt-4 text-xl sm:text-2xl leading-snug">
              A two-player money race that turns saving, spending and investing into a three-minute, head-to-head race.
            </p>
            <p className="mt-3 text-paper/70">Financial-literacy brand activation, UAE, 2026</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={ENQUIRY} className="sign sign-direction">
                <Arrow dir="ne" />
                Bring FinRace to your event
              </a>
            </div>
          </div>
          <figure className="lg:col-span-7">
            <div className="border-2 border-sign bg-scope p-2">
              <Video src="/videos/FinRace.mp4" poster="/posters/FinRace.jpg" label="FinRace gameplay: two players racing side by side" />
            </div>
            <figcaption className="pt-2 text-xs text-paper/60">Big-screen view: each half is one player&apos;s tablet, mirrored live.</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="glance-h" className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="glance-h" className="font-display font-extrabold text-5xl leading-none">
            The brief
          </h2>
          <p className="mt-4 text-lg leading-relaxed max-w-prose">
            Make personal finance something visitors want to try at a busy booth. It had to be understood in seconds,
            be competitive enough to draw a crowd, leave every player with one useful idea about money, and capture each
            player&apos;s details for the client without losing a single record.
          </p>
        </div>
        <dl className="lg:col-span-7 grid sm:grid-cols-[9rem_1fr] gap-x-6">
          {glance.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="py-3 border-t border-rule text-muted">{k}</dt>
              <dd className="py-3 sm:border-t border-rule">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="play-h" className="border-t-2 border-ink">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12">
          <h2 id="play-h" className="font-display font-extrabold text-5xl leading-none">
            How it plays
          </h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.name} className="border-2 border-ink p-5 bg-paper">
                <span className="font-display font-extrabold text-5xl text-sign leading-none [-webkit-text-stroke:1.5px_#111C27]">
                  {i + 1}
                </span>
                <h3 className="mt-2 font-display font-bold text-2xl leading-tight">{s.name}</h3>
                <p className="mt-2 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="look-h" className="bg-scope text-paper">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12">
          <h2 id="look-h" className="font-display font-extrabold text-5xl leading-none text-sign">
            On the big screen
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {gallery.map((g, i) => (
              <li key={g.src} className={i === gallery.length - 1 ? "md:col-span-2" : ""}>
                <figure>
                  <div className="relative aspect-video border-2 border-paper/30">
                    <Image src={g.src} alt={g.alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <figcaption className="mt-2 text-paper/80 leading-snug">{g.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="ready-h" className="mx-auto max-w-page px-4 sm:px-6 py-12">
        <h2 id="ready-h" className="font-display font-extrabold text-5xl leading-none">
          Built for a live event floor
        </h2>
        <p className="mt-4 text-lg max-w-2xl text-muted">
          A booth game has one job on the day: keep running and keep the data safe. Most of the engineering went here.
        </p>
        <dl className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {eventReady.map((f) => (
            <div key={f.name} className="border-l-4 border-sign pl-4">
              <dt className="font-display font-bold text-2xl">{f.name}</dt>
              <dd className="mt-1 leading-relaxed max-w-prose">{f.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="custom-h" className="border-t-2 border-ink">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="custom-h" className="font-display font-extrabold text-5xl leading-none">
              Make it yours
            </h2>
            <p className="mt-4 text-lg leading-relaxed max-w-prose">
              Nearly everything in FinRace is data, not code. A bank, insurer, fintech or school programme can run its own
              version with its own currency, products and message, without rebuilding the game.
            </p>
          </div>
          <ul className="lg:col-span-7 space-y-3 text-lg">
            {customise.map((c) => (
              <li key={c} className="pl-6 relative leading-snug">
                <span aria-hidden="true" className="absolute left-0 top-[0.4em] h-2.5 w-2.5 bg-sign border border-ink" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="role-h" className="border-t-2 border-ink">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-8 lg:grid-cols-12">
          <h2 id="role-h" className="lg:col-span-5 font-display font-extrabold text-5xl leading-none">
            What I did
          </h2>
          <div className="lg:col-span-7 space-y-4 text-lg leading-relaxed max-w-prose">
            <p>
              I designed and built FinRace on my own: the money model and scoring, the two-device networking, the data
              capture, the event flow and the visuals.
            </p>
            <p>
              The race is deterministic from a shared seed and clock, so the big screen can replay each tablet&apos;s race
              exactly from a light stream of lane changes, pickups, jumps and crashes. Anything that must not be lost
              (registrations, results, each player&apos;s obstacle layout, the roadside city) travels on a separate reliable
              channel that is acknowledged only once it is saved.
            </p>
            <p className="text-muted">Unity 6, C#, Universal Render Pipeline, Input System, OSC (extOSC), Android, Windows.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="cta-h" className="bg-sign">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h2 id="cta-h" className="font-display font-extrabold text-5xl leading-none">
              Want FinRace at your event?
            </h2>
            <p className="mt-3 text-lg leading-relaxed max-w-prose">
              I can adapt it to your brand and market, set it up on site and stay for show day. Tell me about the event and
              I&apos;ll come back with what it would take.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
            <a href={ENQUIRY} className="sign bg-ink text-sign border-ink hover:bg-paper hover:text-ink">
              <Arrow dir="ne" />
              Email me about FinRace
            </a>
            <Link href="/GameDev" className="sign bg-paper text-ink border-ink hover:bg-ink hover:text-sign">
              <Arrow dir="ne" />
              More work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
