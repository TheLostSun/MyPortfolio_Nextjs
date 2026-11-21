import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import Seo from "@/components/Seo";
import Video from "@/components/Video";
import { contact } from "@/data/site";

const ENQUIRY = `mailto:${contact.email}?subject=${encodeURIComponent("Fruit Slice for our event")}&body=${encodeURIComponent(
  "Hi Prabhu,\n\nWe'd like to talk about an interactive floor game like Fruit Slice.\n\nEvent / brand:\nDates and location:\nFloor or screen size:\nWhat we'd like it to teach:\n"
)}`;

const glance: [string, string][] = [
  ["Players", "One child at a time; every foot on the floor is tracked"],
  ["Session", "About 2 minutes: name, language, how to play, a 45-second game, a 10-second frenzy and a report card"],
  ["Hardware", "A 2.0 × 1.5 m LED floor, a LiDAR scanning just above it, one Windows PC and speakers"],
  ["Input", "Any LiDAR: TUIO (default), raw X,Y over UDP, or Windows touch"],
  ["Languages", "English and Arabic, chosen on the floor, with full right-to-left text"],
  ["Take-home", "A report card with a QR code, carrying the child's name"],
  ["Data", "Every round saved as JSON and Excel on the PC"],
  ["Built with", "Unity 6, C#, URP, TextMesh Pro, OSC / TUIO"],
];

const steps = [
  {
    name: "Step on the footprints",
    text: "The home screen speaks both languages. A child stands on the glowing footprints and holds still for a moment; the ring fills and the game begins.",
  },
  {
    name: "Your name, by phone",
    text: "A parent scans the QR on the floor and types the child's name on their phone. Seconds later the floor says “Hi, Sara!”. No app, no login.",
  },
  {
    name: "Choose a language",
    text: "Stand for three seconds on the Arabic or the English circle. Everything after that, down to the report card, follows the choice.",
  },
  {
    name: "Slice healthy food",
    text: "Apples, broccoli, milk, rice and nine more pop up around the child. Stamp on them to slice them, grab the stars, skip the chips and sugary juice, and stay off the bombs. Three in a row is a combo.",
  },
  {
    name: "Food frenzy",
    text: "For the last ten seconds the garden turns to dusk, the music speeds up and food arrives twice as fast.",
  },
  {
    name: "Take the report card home",
    text: "The score earns one of seven titles, from Brave Beginner to Healthy Hero, with a healthy-eating tip. The QR opens the same card on the parent's phone, with the child's name on it.",
  },
];

const gallery = [
  { src: "/fruitslice/home.jpg", alt: "Bilingual home screen with glowing footprints, two characters and the foods to slice and avoid", caption: "Home: bilingual, with the footprints to start and the foods to slice and to avoid." },
  { src: "/fruitslice/name-qr.jpg", alt: "Name screen with a QR code and three steps in English and Arabic", caption: "A parent scans the code and types the name. A new code every round." },
  { src: "/fruitslice/language.jpg", alt: "Two floor circles: Arabic on the left, English on the right", caption: "Choosing a language by standing in a circle; the ring fills as you hold." },
  { src: "/fruitslice/rules.jpg", alt: "How to play card with one example of each item on the floor below", caption: "How to play: the card explains, and one of each item appears on the floor." },
  { src: "/fruitslice/combo.jpg", alt: "Main game: foods in white discs, a bomb and a star, with the player's name, score, time and a x5 combo", caption: "Main game with the player's name, score, time and a five-in-a-row combo." },
  { src: "/fruitslice/frenzy.jpg", alt: "Food frenzy: the floor turns purple and more food appears", caption: "The frenzy: a dusk garden and twice the food." },
  { src: "/fruitslice/report.jpg", alt: "Report card: Veggie Champion, score 855, stats, a tip and a QR code, in the campaign frame", caption: "The report card in the campaign's frame, with a QR to download it." },
  { src: "/fruitslice/name-hi.jpg", alt: "The floor greeting the child by name in English and Arabic", caption: "The name arrives from the phone and the floor says hello." },
];

const floorReady = [
  {
    name: "Any LiDAR, no driver code",
    text: "The game listens for TUIO 1.1 and 2.0 (including 2.5D and 3D cursors and pixel coordinates), raw X,Y as JSON or text over UDP, and Windows touch, all at once if needed. Swap, mirror, flip, trim and shift line any scanner up with the floor.",
  },
  {
    name: "Feet, not points",
    text: "A LiDAR sees both sides of an ankle. Close points merge into one foot, a foot that stays is the same foot, and a slice only counts when a foot comes down into the scan, so standing still never farms points.",
  },
  {
    name: "Set up remotely",
    text: "A staff menu shows what the LiDAR is really sending: how many points, where they land and why any are dropped. Every setting works from the keyboard, so the floor can be lined up over a remote-desktop session.",
  },
  {
    name: "Names without an app",
    text: "The QR opens a static page that sends the name to the game through a relay on a fresh random channel each round, so a late phone can never name the next child. The report-card link keeps the name after the '#', so the website never receives it.",
  },
  {
    name: "Runs itself all day",
    text: "No one on the floor for a few seconds, or five seconds on the HOME circle, and it goes back to the start. An unfinished round is never saved. Staff only need the keyboard to change a setting.",
  },
  {
    name: "No lost rounds",
    text: "Every finished round is written as JSON with a mirror copy and daily backups, and an Excel sheet the organisers can open at any time.",
  },
  {
    name: "Arabic done properly",
    text: "Arabic letters are shaped and ordered in code, mixed with English and numbers without breaking, and every text box shrinks its font to fit. An automated check fails the build if any text overflows.",
  },
  {
    name: "Tested before the event",
    text: "56 automated tests drive the whole flow with simulated feet and real UDP packets, from the footprints to the report card, in both languages.",
  },
];

const customise = [
  "The foods, their points and what counts as healthy",
  "Languages and every word on the floor",
  "Report-card titles, score bands and tips",
  "Floor scenes, colours, logos and the campaign frame",
  "Timing and difficulty, from the staff settings menu",
  "Floor size and the sensor: LiDAR, touch floor or camera",
];

export default function FruitSliceCaseStudy() {
  return (
    <>
      <Seo
        title="Fruit Slice case study"
        path="/CaseStudies/FruitSlice"
        image="/posters/FruitSlice.jpg"
        description="Fruit Slice: a bilingual LED-floor game for young children, tracked by a LiDAR, that teaches healthy eating. Name by phone, English or Arabic, a 45-second game and a report card to take home. Run at Early Childhood Week in Abu Dhabi."
      />

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-page px-4 sm:px-6 pt-10 pb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <Link href="/CaseStudies" className="text-sm text-paper/70 hover:text-sign">
              Case studies
            </Link>
            <h1 className="mt-3 font-display font-extrabold text-[4rem] sm:text-[6rem] leading-[0.85] tracking-tight text-sign">
              Fruit Slice
            </h1>
            <p className="mt-4 text-xl sm:text-2xl leading-snug">
              An LED floor where children stamp on healthy food, dodge the junk, and take home a report card with their
              name on it.
            </p>
            <p className="mt-3 text-paper/70">Children&apos;s health campaign, Early Childhood Week, Abu Dhabi, 2026</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={ENQUIRY} className="sign sign-direction">
                <Arrow dir="ne" />
                Bring a floor game to your event
              </a>
            </div>
          </div>
          <figure className="lg:col-span-7">
            <div className="border-2 border-sign bg-scope p-2">
              <div className="relative aspect-[4/3]">
                <Image src="/fruitslice/play.jpg" alt="Fruit Slice on the LED floor: foods in white discs around the player's feet" fill priority sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" />
              </div>
            </div>
            <figcaption className="pt-2 text-xs text-paper/60">The LED floor mid-game: healthy food, a bomb and junk food around the player&apos;s feet.</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="onsite-h" className="bg-scope text-paper border-t-2 border-sign">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-sm text-paper/60">On site</p>
            <h2 id="onsite-h" className="mt-1 font-display font-extrabold text-5xl leading-none text-sign">
              Live at the mall
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-paper/85 max-w-prose">
              Children playing on the LED floor at the campaign stand in a busy Abu Dhabi mall during Early Childhood
              Week, with the LiDAR reading their steps along the floor&apos;s edge.
            </p>
          </div>
          <figure className="lg:col-span-5 w-full max-w-sm mx-auto lg:mx-0 lg:justify-self-end">
            <div className="border-2 border-sign bg-ink">
              <Video
                src="/videos/FruitSlice_Onsite.mp4"
                poster="/posters/FruitSlice_Onsite.jpg"
                label="Fruit Slice on site: children playing on the LED floor"
                aspect="aspect-[576/1024]"
              />
            </div>
            <figcaption className="pt-2 text-xs text-paper/60">Filmed on site, Abu Dhabi.</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="glance-h" className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="glance-h" className="font-display font-extrabold text-5xl leading-none">
            The brief
          </h2>
          <p className="mt-4 text-lg leading-relaxed max-w-prose">
            Teach young children which foods help them grow, at a mall stand, in English and Arabic, with nothing to hold
            and nothing to wear. It had to be understood by a four-year-old in seconds, look like the campaign, and give
            every family something to take home.
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
            On the floor
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {gallery.map((g) => (
              <li key={g.src}>
                <figure>
                  <div className="relative aspect-[4/3] border-2 border-paper/30">
                    <Image src={g.src} alt={g.alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <figcaption className="mt-2 text-paper/80 leading-snug">{g.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="video-h" className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <h2 id="video-h" className="font-display font-extrabold text-5xl leading-none">
            A full round
          </h2>
          <p className="mt-4 text-lg leading-relaxed max-w-prose">
            One complete session as it plays on the floor, with the game&apos;s own music and sound: footprints, name by
            phone, language, how to play, the game, the frenzy and the report card. The music and every sound effect were
            made from scratch for the game.
          </p>
        </div>
        <figure className="lg:col-span-7">
          <div className="border-2 border-ink">
            <Video src="/videos/FruitSlice.mp4" poster="/fruitslice/video-poster.jpg" label="A full Fruit Slice round on the LED floor, with sound" aspect="aspect-[4/3]" />
          </div>
          <figcaption className="pt-2 text-sm text-muted">Recorded from the game with a simulated player. Unmute for sound.</figcaption>
        </figure>
      </section>

      <section aria-labelledby="ready-h" className="border-t-2 border-ink">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12">
          <h2 id="ready-h" className="font-display font-extrabold text-5xl leading-none">
            Built for a floor full of children
          </h2>
          <p className="mt-4 text-lg max-w-2xl text-muted">
            The floor has no buttons and the players can&apos;t read the instructions, so the game has to understand feet,
            fix itself and keep every result.
          </p>
          <dl className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {floorReady.map((f) => (
              <div key={f.name} className="border-l-4 border-sign pl-4">
                <dt className="font-display font-bold text-2xl">{f.name}</dt>
                <dd className="mt-1 leading-relaxed max-w-prose">{f.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="staff-h" className="bg-scope text-paper">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-sm text-paper/60">For the crew</p>
            <h2 id="staff-h" className="mt-1 font-display font-extrabold text-5xl leading-none text-sign">
              Settings, not rebuilds
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-paper/85 max-w-prose">
              Everything the venue might need to change lives on eight pages behind the Tab key: the LiDAR input and its
              mapping, how feet are detected, timing, difficulty, effects, sound and name registration. Each row explains
              itself in plain words, and Apply restarts the game with the new values. A two-page setup guide goes with
              every build.
            </p>
          </div>
          <figure className="lg:col-span-7">
            <div className="relative aspect-[4/3] border-2 border-paper/30">
              <Image src="/fruitslice/settings.jpg" alt="The staff settings menu on the LiDAR mapping page" fill sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="pt-2 text-xs text-paper/60">The settings menu, LiDAR mapping page. Mouse or keyboard only.</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="custom-h" className="border-t-2 border-ink">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="custom-h" className="font-display font-extrabold text-5xl leading-none">
              Make it yours
            </h2>
            <p className="mt-4 text-lg leading-relaxed max-w-prose">
              Fruit Slice is a floor game engine with a healthy-eating skin. The same game can teach recycling, road
              safety or a brand&apos;s products on any LED floor or projected floor.
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
              I designed and built Fruit Slice: the game flow and scoring, the LiDAR input and foot tracking, the
              bilingual floor UI in the campaign&apos;s brand, name registration by phone, the report cards and their
              website, the data capture, the sound and the staff tools.
            </p>
            <p>
              The foods, characters and floor scenes were generated with AI image tools in one consistent style, then cut
              out, padded and colour-graded for an LED floor. The music and sound effects are synthesised by a script, so
              every sound belongs to the project.
            </p>
            <p>
              On site the LiDAR&apos;s software reported positions against the PC&apos;s main monitor rather than the
              floor on the second display. The staff menu showed exactly where the points were landing, and the mapping
              settings, driven entirely from the keyboard, let the floor be lined up over a remote-desktop session.
            </p>
            <p className="text-muted">Unity 6, C#, Universal Render Pipeline, TextMesh Pro, Input System, TUIO / OSC over UDP, GitHub Pages, Windows.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="cta-h" className="bg-sign">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h2 id="cta-h" className="font-display font-extrabold text-5xl leading-none">
              Want a floor game at your event?
            </h2>
            <p className="mt-3 text-lg leading-relaxed max-w-prose">
              I can adapt Fruit Slice to your message, your floor and your sensor, set it up on site and support it through
              the event. Tell me about it and I&apos;ll come back with what it would take.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
            <a href={ENQUIRY} className="sign bg-ink text-sign border-ink hover:bg-paper hover:text-ink">
              <Arrow dir="ne" />
              Email me about Fruit Slice
            </a>
            <Link href="/CaseStudies" className="sign bg-paper text-ink border-ink hover:bg-ink hover:text-sign">
              <Arrow dir="ne" />
              More case studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
