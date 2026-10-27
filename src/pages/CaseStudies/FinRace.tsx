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
  ["Players", "1 or 2 at a time: solo, or head to head"],
  ["Session", "About 90 seconds: a 60-second race, then results and the leaderboard"],
  ["Hardware", "2 Android tablets, 1 Windows PC driving an LED wall, a router, and (final version) a button box with 3 buttons per player"],
  ["Versions", "Two, from one codebase: a backup played on the tablets, and the final played on the LED"],
  ["Worlds", "A procedural city, and a real Abu Dhabi street built from map data"],
  ["Internet", "Not needed. Everything runs on the local network"],
  ["Data", "Registration + results saved on the PC, live Excel leaderboard"],
  ["Built with", "Unity 6, C#, URP, OSC"],
];

const steps = [
  {
    name: "Register on the tablet",
    text: "Players pick a runner and type their name on a tablet. The form is generated from a config file, so the fields can be whatever the client needs.",
  },
  {
    name: "Start with a salary",
    text: "Each player starts their career with AED 10,000. One player can race alone, or two head to head; the LED counts them in.",
  },
  {
    name: "Every choice moves money",
    text: "Run through piggy banks and investment seeds to grow savings and investments. Shopping bags and late fees eat money, scams lose it. Change lanes to choose, jump trucks and barriers; hitting one costs a repair bill, not the run.",
  },
  {
    name: "Five life stages in 60 seconds",
    text: "From First Paycheck to Financial Freedom, the road speeds up and the time to decide shrinks from 5.5 seconds to under 2.",
  },
  {
    name: "Get your financial health score",
    text: "At the finish each player gets a score out of 100 against the 50/30/20 rule, a title like Smart Saver or Impulse Spender, a personal takeaway and what their savings could grow to.",
  },
];

const gallery = [
  { src: "/finrace/led-lobby.jpg", alt: "LED lobby: register on a tablet to play, open seats and the all-time top five", caption: "Between races the LED invites people to register and shows the all-time top five." },
  { src: "/finrace/led-race.jpg", alt: "Two runners side by side on the Abu Dhabi street with money pickups and HUD pills", caption: "Two players head to head down the Abu Dhabi street, each with balance, health and life stage." },
  { src: "/finrace/led-collect.jpg", alt: "A burst of gold particles as a player collects a savings item", caption: "Every pickup bursts in its category colour; hazards flash red with their cost." },
  { src: "/finrace/led-finish.jpg", alt: "The finish camera framing the glass tower at the end of the route", caption: "At the line the camera swings out to the glass tower at the finish." },
  { src: "/finrace/led-results.jpg", alt: "Results cards for both players with balance, health ring and breakdown", caption: "Results: final balance, financial health, race rank and where the money went." },
  { src: "/finrace/led-leaderboard.jpg", alt: "All-time leaderboard with balance, health and title", caption: "The all-time leaderboard keeps the crowd coming back for another run." },
];

const tabletShots = [
  { src: "/finrace/tab-character.jpg", alt: "Tablet: choose your character", caption: "Pick a runner" },
  { src: "/finrace/tab-name.jpg", alt: "Tablet: choose your name", caption: "Type a name" },
  { src: "/finrace/tab-howto.jpg", alt: "Tablet: how to play", caption: "How to play" },
  { src: "/finrace/tab-race.jpg", alt: "Tablet: the race in portrait, jumping over an item", caption: "Race (backup)" },
  { src: "/finrace/tab-results.jpg", alt: "Tablet: your results with balance and health score", caption: "Your results" },
];

const worlds = [
  {
    name: "The procedural city",
    tag: "Built first, kept as an option",
    image: "/finrace/procedural.jpg",
    points: [
      "Road, sidewalks, lamps, trees, hydrants and city blocks are generated tile by tile as the runner moves, so the road never ends and memory stays flat on a tablet.",
      "Everything comes from the race seed, so the tablet and the LED build the same street without sending it. Only the buildings, chosen on the tablet, travel over the network.",
      "Fog streams new tiles in at the horizon. No level design is needed to change the race length or speed.",
    ],
  },
  {
    name: "The Abu Dhabi street",
    tag: "What the event ran",
    image: "/finrace/led-race.jpg",
    points: [
      "A real city model built from map data (roads, buildings, land use and water, about 20 × 19 km), imported at full scale.",
      "The race follows a spline snapped to a real 2.5 km stretch of coastal road; the 60-second race is stretched onto it, so the start and finish land on real corners.",
      "Built at runtime along the route: the race road, sidewalks, a trimmed hedge, branded feather banners waving in a custom wind shader, billboards, a daytime HDRI sky and real-size building facades.",
      "At the finish the camera swings out to frame the runner against a glass tower. On the LED, the second player races in their own copy of the city 25 km away, so the two never shade each other.",
    ],
  },
];

const versions = [
  {
    name: "Backup: race on the tablets",
    dark: true,
    points: [
      "Each player registers and races on their own tablet with swipes. The LED mirrors both races live over OSC and runs the lobby, results and leaderboard.",
      "Needs only hardware I controlled: two tablets, a Windows PC and a router.",
      "Finished, tested end to end and approved first, then frozen. It went to the event ready to install.",
    ],
  },
  {
    name: "Final: race on the LED",
    dark: false,
    points: [
      "Tablets only register players. The race runs on the LED, played on an embedded button box with left, right and jump for each player, sending OSC messages.",
      "Players press JUMP to say they are ready. One ready player races solo after a short wait; two race together. Anyone who registers mid-race sees “race in progress” and is next up.",
      "The box was built by another team, so I published the exact messages and port it must send, accepted several forms, ignored repeats, and added an on-screen monitor that lights each press so staff can check the box in seconds. Keyboard keys do the same job.",
    ],
  },
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
    name: "Light enough for a tablet",
    text: "Parts of the city beyond the fog are switched off, each feather banner is one mesh and one draw call, and heavy effects such as motion blur switch off automatically on mobile.",
  },
  {
    name: "Two zips, one click",
    text: "One editor menu builds all four apps (two tablet APKs, two LED apps) and packs two zips, each with a setup script that opens the firewall ports, the apps and a one-page guide.",
  },
];

const customise = [
  "Currency, starting salary and every amount on the road",
  "The 50 road objects: names, what they do and which life stage they appear in",
  "Stage names, speed and difficulty",
  "Registration fields: name, phone, email, company, opt-ins or anything else",
  "Score titles and takeaway messages",
  "Runner characters, the procedural or real-world street, and the look of the race (sky, fog, lighting, post-processing)",
];

export default function FinRaceCaseStudy() {
  return (
    <>
      <Seo
        title="FinRace case study"
        path="/CaseStudies/FinRace"
        image="/posters/FinRace.jpg"
        description="FinRace: a one- or two-player financial-literacy runner for brand activations, run in Abu Dhabi. A procedural city and a real Abu Dhabi street, a tablet backup and an LED final with a button box, and lead capture with no lost records."
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
              A money race that turns saving, spending and investing into a 60-second run, solo or head to head.
            </p>
            <p className="mt-3 text-paper/70">Financial-literacy brand activation, Abu Dhabi, 2026</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={ENQUIRY} className="sign sign-direction">
                <Arrow dir="ne" />
                Bring FinRace to your event
              </a>
            </div>
          </div>
          <figure className="lg:col-span-7">
            <div className="border-2 border-sign bg-scope p-2">
              <div className="relative aspect-video">
                <Image src="/finrace/led-race.jpg" alt="FinRace on the LED: two players racing down the Abu Dhabi street" fill priority sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" />
              </div>
            </div>
            <figcaption className="pt-2 text-xs text-paper/60">The LED wall: two players racing down the Abu Dhabi street.</figcaption>
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
            {gallery.map((g) => (
              <li key={g.src}>
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

      <section aria-labelledby="tablet-h" className="mx-auto max-w-page px-4 sm:px-6 py-12">
        <h2 id="tablet-h" className="font-display font-extrabold text-5xl leading-none">
          On the tablet
        </h2>
        <p className="mt-4 text-lg max-w-2xl text-muted">
          Registration takes four taps and a name. In the final version that is all the tablet does; in the backup the
          race runs on it too, in portrait.
        </p>
        <ul className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {tabletShots.map((t) => (
            <li key={t.src}>
              <figure>
                <div className="relative aspect-[5/8] border-2 border-ink bg-scope">
                  <Image src={t.src} alt={t.alt} fill sizes="(min-width:1024px) 20vw, (min-width:640px) 33vw, 50vw" className="object-cover" />
                </div>
                <figcaption className="mt-2 text-sm text-muted">{t.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="early-h" className="bg-scope text-paper">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-sm text-paper/60">Earlier version</p>
            <h2 id="early-h" className="mt-1 font-display font-extrabold text-5xl leading-none text-sign">
              Where it started
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-paper/85 max-w-prose">
              The first playable build raced cars through the procedural city, with barrel rolls over trucks, and a crash
              ended your run. Playtesting moved it to running characters, swapped the crash for a repair bill so everyone
              finishes, and cut the race to 60 seconds.
            </p>
          </div>
          <figure className="lg:col-span-7">
            <div className="border-2 border-paper/30">
              <Video src="/videos/FinRace.mp4" poster="/finrace/early/poster.jpg" label="Earlier version of FinRace: two cars racing side by side" />
            </div>
            <figcaption className="pt-2 text-xs text-paper/60">Early build, procedural city, cars instead of runners.</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="worlds-h" className="mx-auto max-w-page px-4 sm:px-6 py-12">
        <h2 id="worlds-h" className="font-display font-extrabold text-5xl leading-none">
          Two worlds, one race
        </h2>
        <p className="mt-4 text-lg max-w-2xl text-muted">
          The race logic doesn&apos;t care what it runs through. One switch per scene chooses the world, so the same game
          ran first through a generated city, then down a real Abu Dhabi road.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {worlds.map((w) => (
            <article key={w.name} className="border-2 border-ink p-5 bg-paper">
              <div className="relative aspect-video border-2 border-ink mb-4">
                <Image src={w.image} alt={`${w.name} in play`} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
              </div>
              <p className="text-sm text-muted">{w.tag}</p>
              <h3 className="mt-1 font-display font-bold text-3xl leading-tight">{w.name}</h3>
              <ul className="mt-4 space-y-3">
                {w.points.map((p) => (
                  <li key={p} className="pl-6 relative leading-relaxed">
                    <span aria-hidden="true" className="absolute left-0 top-[0.5em] h-2.5 w-2.5 bg-sign border border-ink" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="versions-h" className="border-t-2 border-ink">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12">
          <h2 id="versions-h" className="font-display font-extrabold text-5xl leading-none">
            A backup and a final
          </h2>
          <p className="mt-4 text-lg max-w-2xl leading-relaxed">
            Late in the project the client wanted the race on the LED wall, played on a button box another team was
            building. Rather than change the approved game, I kept it as the backup and built the final next to it, from
            the same code. Each version has its own scenes with a few switches ticked; with the switches off the code
            takes the original path, so a fix to the core reached both.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {versions.map((v) => (
              <article
                key={v.name}
                className={v.dark ? "border-2 border-ink p-5 bg-scope text-paper" : "border-2 border-ink p-5 bg-sign text-ink"}
              >
                <h3 className="font-display font-bold text-3xl leading-tight">{v.name}</h3>
                <ul className="mt-4 space-y-3">
                  {v.points.map((p) => (
                    <li key={p} className="leading-relaxed">
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-4 text-lg leading-relaxed max-w-prose">
              <h3 className="font-display font-bold text-3xl leading-tight">How the final ran</h3>
              <p>
                Tablets stood at the registration desk. A player picked a runner and typed a name, then walked to the LED,
                where their name was waiting on a seat. JUMP marked them ready, and the race, results and leaderboard all
                played on the wall. Every finished run was saved on the PC the moment it ended.
              </p>
              <p>
                The backup went in the same bag: installing the other app on the tablets and starting the other LED app
                switches over in minutes, with the same PC, network and saved data. Both versions also carry an end date,
                after which they stop, for a licence that runs out after the event.
              </p>
            </div>
            <figure className="lg:col-span-7">
              <a href="/finrace/backup-final-flow.svg" className="block border-2 border-ink bg-paper" aria-label="Open the backup and final flowchart full size">
                <Image
                  src="/finrace/backup-final-flow.svg"
                  alt="Flowchart: lock the brief, build one shared core, make each difference a scene switch, then a backup on hardware you control and a final on the venue's hardware; test both, package both, and on show day run the final or switch to the backup."
                  width={1200}
                  height={1560}
                  className="w-full h-auto"
                  unoptimized
                />
              </a>
              <figcaption className="pt-2 text-sm text-muted">
                The recipe I&apos;d reuse for any event game that depends on someone else&apos;s hardware. Click to open full
                size.
              </figcaption>
            </figure>
          </div>
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
              I designed and built FinRace on my own: the money model and scoring, the networking between tablets, the
              LED and the button box, the data capture, the event flow, both worlds and both versions.
            </p>
            <p>
              The race is deterministic from a shared seed and clock, so the big screen can replay each tablet&apos;s race
              exactly from a light stream of lane changes, pickups, jumps and crashes. Anything that must not be lost
              (registrations, results, each player&apos;s obstacle layout, the roadside city) travels on a separate reliable
              channel that is acknowledged only once it is saved.
            </p>
            <p>
              For the Abu Dhabi street I snapped the race route to the real road offline from the city model, wrote the
              wind and facade shaders for the tablet&apos;s GPU, and placed the billboards and finish landmark where the
              camera would see them.
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
