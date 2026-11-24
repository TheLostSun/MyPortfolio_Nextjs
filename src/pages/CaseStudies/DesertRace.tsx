import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import Seo from "@/components/Seo";
import Video from "@/components/Video";
import { contact } from "@/data/site";

const ENQUIRY = `mailto:${contact.email}?subject=${encodeURIComponent("A Desert Race style game for our event")}&body=${encodeURIComponent(
  "Hi Prabhu,\n\nWe'd like to talk about an arcade-style event game like The Great Desert Race.\n\nEvent / brand:\nDates and location:\nScreen or cabinet:\nWhat the story should be:\n"
)}`;

const glance: [string, string][] = [
  ["Players", "One or two at the same time, side by side; a solo race is a first-class session"],
  ["Session", "About three minutes: scan to register, pick a language, pick a camel, a race through 200 years, a badge and a leaderboard"],
  ["Hardware", "An arcade cabinet with a wide screen, a joystick box with three buttons per player on a USB serial port, one Windows PC"],
  ["Input", "The joystick box first; PlayStation and USB gamepads and the keyboard stay on as backups"],
  ["Languages", "English and Arabic, chosen on screen, with properly shaped right-to-left text"],
  ["Take-home", "A badge on the player's phone: 1st place, 2nd place, or a solo rank badge, with their name and leaderboard rank"],
  ["Data", "Every result saved on the PC as JSON and Excel, shown on an on-screen leaderboard"],
  ["Built with", "Unity 6, C#, URP, TextMesh Pro, Input System, a static GitHub Pages site"],
];

const steps = [
  {
    name: "Press any button",
    text: "The home screen shows two camels crossing eight eras of the UAE, from 1926 to 2126. Either player presses any button on the joystick box and the screen switches to registration.",
  },
  {
    name: "Scan to play",
    text: "Two QR codes, one per player. Each player scans theirs, types a name on their phone, and it appears on the screen seconds later. If only one player scans, a bar counts 20 seconds for the other to join, then the game carries on as a solo race. If nobody scans, it returns to the home screen after a minute.",
  },
  {
    name: "Choose a language",
    text: "Only once a solo or two-player session is confirmed. Either player can switch between English and Arabic with the left and right buttons, and the whole screen changes at once.",
  },
  {
    name: "Pick a camel",
    text: "Four coats to choose from, then a press on jump when ready. Both players ready starts the race at once; a lone ready player starts a solo race after a short wait.",
  },
  {
    name: "Race through 200 years",
    text: "Hold right to run, left to brake, jump to clear hurdles. Orange pickups give a boost and purple ones slow you down. The ground and the painted skyline change through eight eras, and the last stretch is a final sprint.",
  },
  {
    name: "Take the badge home",
    text: "A summary of the race with a QR code for each player. Scanning it opens a badge on the phone with the player's name, the in-game place and the overall leaderboard rank, ready to download.",
  },
  {
    name: "See the leaderboard",
    text: "Fastest times, with the players' own rows lit in their colours, and a button to go home straight away or a countdown that does it after fifteen seconds.",
  },
];

const gallery = [
  { src: "/desertrace/attract.jpg", alt: "Home screen: two camels crossing the eras, title on the left and the eight eras on the right", caption: "Home: two camels crossing eight eras, any button to play." },
  { src: "/desertrace/solo-countdown.jpg", alt: "Registration screen with two QR codes, one name received and a bar counting down to a solo race", caption: "One player has scanned: a bar counts down to a solo race while the other can still join." },
  { src: "/desertrace/registration.jpg", alt: "Registration screen with two empty QR codes and a countdown back to the home screen", caption: "Two QR codes, one per player, in English and Arabic. If nobody scans, it goes back to the home screen after a minute." },
  { src: "/desertrace/language.jpg", alt: "Language screen with English and Arabic cards", caption: "English or Arabic: either player can switch, and the whole game follows." },
  { src: "/desertrace/lobby.jpg", alt: "Lobby with a camel and player card for each player", caption: "Each player picks a camel; the card shows their name." },
  { src: "/desertrace/race-1950.jpg", alt: "Two-lane race in the 1950s pearl diving era", caption: "Head to head, a lane each, with speed, boost and the era." },
  { src: "/desertrace/race-2100.jpg", alt: "Two-lane race in the 2100 era with a neon track", caption: "The track and sky change with the era, here 2100." },
  { src: "/desertrace/arabic-race.jpg", alt: "Solo race in Arabic", caption: "The same race in Arabic, in its own font and outline." },
  { src: "/desertrace/winner.jpg", alt: "Winner screen with the winner's name", caption: "The winner, by name." },
  { src: "/desertrace/summary.jpg", alt: "Race summary with two QR codes and each player's rank", caption: "Summary with a badge QR and rank for each player." },
  { src: "/desertrace/leaderboard.jpg", alt: "Leaderboard with the players' rows highlighted and a home button", caption: "The leaderboard, with a home button and a countdown." },
];

const badges = [
  { src: "/desertrace/badge-1st.png", alt: "First place badge with a name, race time and leaderboard rank", caption: "1st place in a two-player race." },
  { src: "/desertrace/badge-2nd.png", alt: "Second place badge with a name, race time and leaderboard rank", caption: "2nd place." },
  { src: "/desertrace/badge-rank.png", alt: "Solo rank badge in Arabic with the leaderboard rank", caption: "A solo player gets the leaderboard rank, here in Arabic." },
];

const builtFor = [
  {
    name: "Names without an app",
    text: "The QR opens a static page where the player types a name. It travels to the game through a relay on a fresh random channel for each player, every round, so a late phone can never name the next player. The same idea carries the badge: the name, rank and time sit in the part of the link after the #, which a website never receives.",
  },
  {
    name: "A joystick box on a serial port",
    text: "The box is an ESP32 on USB serial. The game reads it on its own thread, matches what it sends against values the staff can edit on site, and saves them. Opening the port the usual way resets some ESP32 boards, so DTR and RTS are held off and the port is opened with the long COM-name form that ports above COM9 need.",
  },
  {
    name: "Settings, not rebuilds",
    text: "A staff menu on the Tab key chooses the COM port and speed, edits the text each button sends, and shows every message arriving live. It saves to a file and reconnects by itself at the next start.",
  },
  {
    name: "Solo and two players, one flow",
    text: "Whoever registers is in. One name starts a countdown bar for the other player; two names move straight on; none returns to the home screen. The same race, camera and leaderboard serve a lone player and a pair.",
  },
  {
    name: "Arabic done properly",
    text: "Arabic letters are joined and ordered in code and drawn in an Arabic font with the same outline as the English. Names typed on a phone in either script are shaped correctly, and every name shrinks to fit its box, however long.",
  },
  {
    name: "No server, nothing lost",
    text: "Results are written to JSON with a backup copy, and to an Excel sheet that is retried while someone has it open. The leaderboard and the badge ranks come from the same saved results, so what a player sees on screen and on their phone agrees.",
  },
  {
    name: "Runs itself all day",
    text: "Every screen has a timeout back to the start; an idle registration, a half-finished lobby and a forgotten leaderboard all reset without anyone touching the PC.",
  },
  {
    name: "Tested without a crowd",
    text: "The build can play itself: two simulated players register, race, jump the hurdles and read the leaderboard, in either language. It was how the flow was rehearsed and recorded before the event.",
  },
];

const customise = [
  "The story and the eras: colours, landmarks, painted skylines and the era names",
  "Languages and every word on screen",
  "Brand: colours, type, logos and the badge design",
  "Race length, speed, jump and pickup tuning, from the settings menu",
  "Controls: a joystick box, gamepads or the keyboard",
  "The leaderboard rule: fastest time, highest score or a points table",
];

export default function DesertRaceCaseStudy() {
  return (
    <>
      <Seo
        title="The Great Desert Race case study"
        path="/CaseStudies/DesertRace"
        image="/posters/DesertRace.jpg"
        description="The Great Desert Race: a two-player camel race through 200 years of the UAE on an arcade cabinet. Names by phone QR, English and Arabic, a joystick box on serial, a leaderboard and a badge for every player."
      />

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-page px-4 sm:px-6 pt-10 pb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <Link href="/CaseStudies" className="text-sm text-paper/70 hover:text-sign">
              Case studies
            </Link>
            <h1 className="mt-3 font-display font-extrabold text-[3.4rem] sm:text-[5rem] leading-[0.88] tracking-tight text-sign">
              The Great Desert Race
            </h1>
            <p className="mt-4 text-xl sm:text-2xl leading-snug">
              A camel race through 200 years of the UAE for one or two players on an arcade cabinet, with names by phone,
              English and Arabic, a leaderboard and a badge to take home.
            </p>
            <p className="mt-3 text-paper/70">{"Culture and tourism event, UAE, 2026"}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={ENQUIRY} className="sign sign-direction">
                <Arrow dir="ne" />
                Bring a game like this to your event
              </a>
            </div>
          </div>
          <figure className="lg:col-span-7">
            <div className="border-2 border-sign bg-scope p-2">
              <div className="relative aspect-video">
                <Image src="/desertrace/race-1950.jpg" alt="The Great Desert Race: two camels racing head to head through the 1950s" fill priority sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" />
              </div>
            </div>
            <figcaption className="pt-2 text-xs text-paper/60">Head to head: one lane each, the era changing as they run.</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="onsite-h" className="bg-scope text-paper border-t-2 border-sign">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="text-sm text-paper/60">On site</p>
            <h2 id="onsite-h" className="mt-1 font-display font-extrabold text-5xl leading-none text-sign">
              Played side by side
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-paper/85 max-w-prose">
              Visitors at the cabinet racing each other with its controls, watching the eras go by on the wide screen.
              Two players, one race, a crowd behind them.
            </p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0 lg:justify-self-end w-full">
            <figure>
              <div className="border-2 border-sign bg-ink">
                <Video src="/videos/DesertRace_Onsite.mp4" poster="/posters/DesertRace_Onsite.jpg" label="Two visitors racing on The Great Desert Race cabinet" aspect="aspect-[540/960]" />
              </div>
              <figcaption className="pt-2 text-xs text-paper/60">A two-player race in progress.</figcaption>
            </figure>
            <figure>
              <div className="border-2 border-sign bg-ink">
                <Video src="/videos/DesertRace_Onsite2.mp4" poster="/posters/DesertRace_Onsite2.jpg" label="Two visitors racing on The Great Desert Race cabinet, second recording" aspect="aspect-[540/960]" />
              </div>
              <figcaption className="pt-2 text-xs text-paper/60">Another pair, through the later eras.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section aria-labelledby="glance-h" className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="glance-h" className="font-display font-extrabold text-5xl leading-none">
            The brief
          </h2>
          <p className="mt-4 text-lg leading-relaxed max-w-prose">
            Tell the story of the UAE, from 1926 to 2126, as something two strangers can play in seconds. It had to work
            for one visitor or two, in English or Arabic, run all day with nobody looking after it, and send every player
            away with something of their own.
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
            On the screen
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

      <section aria-labelledby="badge-h" className="mx-auto max-w-page px-4 sm:px-6 py-12">
        <h2 id="badge-h" className="font-display font-extrabold text-5xl leading-none">
          A badge for every player
        </h2>
        <p className="mt-4 text-lg leading-relaxed max-w-prose">
          The summary QR opens a page on the player&apos;s own phone that draws their badge on the spot, with their name,
          race time, top speed and leaderboard rank, and lets them download it as an image. First and second place get
          their own badges; a solo player gets one that is all about the leaderboard.
        </p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-3">
          {badges.map((b) => (
            <li key={b.src}>
              <figure>
                <div className="relative aspect-[620/800] border-2 border-ink bg-scope">
                  <Image src={b.src} alt={b.alt} fill sizes="(min-width:640px) 33vw, 100vw" className="object-contain" />
                </div>
                <figcaption className="mt-2 text-sm text-muted">{b.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="video-h" className="bg-scope text-paper">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <h2 id="video-h" className="font-display font-extrabold text-5xl leading-none text-sign">
              A full round
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-paper/85 max-w-prose">
              Two complete sessions recorded from the finished build: a solo player in Arabic, then two players in English, each from the
              home screen through registration, language, a race through all eight eras and the winner to the summary with its
              badge QR codes and the leaderboard.
            </p>
          </div>
          <figure className="lg:col-span-7">
            <div className="border-2 border-paper/30">
              <Video src="/videos/DesertRace.mp4" poster="/posters/DesertRace.jpg" label="A full Desert Race round, from the home screen to the leaderboard" aspect="aspect-video" />
            </div>
            <figcaption className="pt-2 text-sm text-paper/60">Recorded from the finished build, played by a simulated pair: a solo race in Arabic, then two players in English.</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="ready-h" className="border-t-2 border-ink">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12">
          <h2 id="ready-h" className="font-display font-extrabold text-5xl leading-none">
            Built for a busy cabinet
          </h2>
          <p className="mt-4 text-lg max-w-2xl text-muted">
            There is no one to explain it and no keyboard to fall back on, so the game has to take whatever the box sends,
            cope with one player or two, and keep every result.
          </p>
          <dl className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {builtFor.map((f) => (
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
              The settings menu
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-paper/85 max-w-prose">
              Press Tab on site to pick the port and speed, edit the text each button sends, and watch the messages
              arrive. Connect and the choice is saved for next time, so a new box can be wired in without opening Unity.
            </p>
          </div>
          <figure className="lg:col-span-7">
            <div className="relative aspect-video border-2 border-paper/30">
              <Image src="/desertrace/settings.jpg" alt="The settings menu: COM port, baud rate, button values and a live monitor" fill sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="pt-2 text-xs text-paper/60">The joystick settings: port, baud rate, the value each button sends, and a live monitor.</figcaption>
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
              The Great Desert Race is a two-player arcade race engine with a story on top. The same game can run through
              a brand&apos;s history, a city&apos;s past and future, or a product line.
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
              I designed and built the game: the race and its feel, the camel and its run and jump, the eight eras with
              their ground, skyline and blends, the bilingual UI in the client&apos;s brand, the registration flow, the
              serial input, the leaderboard and the badge website.
            </p>
            <p>
              The painted backdrops, three layers for each era, were generated with AI image tools in one consistent style
              and cut out for parallax. The sounds are synthesised by script, so every sound belongs to the project.
            </p>
            <p>
              Registering from a phone instead of a tablet meant a QR code that changes every round, so the game and the
              site had to agree on a fresh channel for each player without any account. A late or repeated scan can never
              reach the wrong player, and a solo player is never left waiting for someone who is not there.
            </p>
            <p className="text-muted">Unity 6, C#, Universal Render Pipeline, TextMesh Pro, Input System, Windows serial, GitHub Pages, ntfy relay.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="cta-h" className="bg-sign">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h2 id="cta-h" className="font-display font-extrabold text-5xl leading-none">
              Want an arcade game at your event?
            </h2>
            <p className="mt-3 text-lg leading-relaxed max-w-prose">
              I can adapt The Great Desert Race to your story, your screen and your hardware, set it up on site and support
              it through the event. Tell me about it and I&apos;ll come back with what it would take.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
            <a href={ENQUIRY} className="sign bg-ink text-sign border-ink hover:bg-paper hover:text-ink">
              <Arrow dir="ne" />
              Email me about this game
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
