import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import Seo from "@/components/Seo";
import Video from "@/components/Video";
import { contact } from "@/data/site";

const ENQUIRY = `mailto:${contact.email}?subject=${encodeURIComponent("Every Move Matters for our event")}&body=${encodeURIComponent(
  "Hi Prabhu,\n\nWe'd like to talk about a body-tracked game like Every Move Matters.\n\nEvent / brand:\nDates and location:\nScreen or wall size:\nWhat we'd like players to do:\n"
)}`;

const glance: [string, string][] = [
  ["Players", "One child at a time, read by their whole body"],
  ["Session", "About 3 minutes: name, language, buddy, ten poses and a report card"],
  ["Hardware", "An LED wall, a Kinect depth camera in front of it, one Windows PC and speakers"],
  ["Sensor", "Kinect v2 at the event; Azure Kinect also supported, chosen automatically"],
  ["Languages", "Arabic and English, chosen with a raised hand"],
  ["Take-home", "A badge with a QR code, carrying the child's name"],
  ["Controls", "None to hold or touch: raise your hands, hold a pose"],
  ["Built with", "Unity 6, C#, URP, Kinect body tracking, TextMesh Pro"],
];

const steps = [
  {
    name: "Raise both hands",
    text: "The wall invites children to raise both hands to start. Every screen waits for the hands to come down first, so a gesture never skips two screens at once.",
  },
  {
    name: "Your name, by phone",
    text: "A parent scans the QR on the wall and types the child's name; the wall greets them by name. The same no-app system as Fruit Slice, on a new code every round.",
  },
  {
    name: "Choose a language",
    text: "Hold the left hand up for three seconds for Arabic, or the right hand for English. Everything after that follows the choice.",
  },
  {
    name: "Pick a yoga buddy",
    text: "Three buddies in a carousel: Yoga Girl, Yoga Boy and Mindful Monkey. One hand up steps the carousel, both hands up chooses. The chosen buddy demonstrates every pose.",
  },
  {
    name: "Ten poses",
    text: "Forward Fold, Raised Arms, Tree, Chair, Warrior, Star, Butterfly, Easy Seat, Kneeling and Child's Rest. Copy the buddy and hold the pose for five seconds while the ring fills. The camera scores the shape, how steady you stay and how still you hold.",
  },
  {
    name: "Take your badge home",
    text: "A score out of 100 with Flexibility, Balance and Mindfulness, and one of seven titles from Brave Beginner to Yoga Master. The QR opens the badge on the parent's phone, with the child's name.",
  },
];

const poses = [
  "Forward Fold",
  "Raised Arms",
  "Tree Pose, either leg",
  "Chair Pose",
  "Warrior, either side",
  "Star Pose",
  "Butterfly",
  "Easy Seat",
  "Kneeling",
  "Child's Rest",
];

const bodyReady = [
  {
    name: "Two ways to judge a pose",
    text: "Every pose is scored twice and blended: a set of rules on the skeleton (joint angles, arm and leg directions, heights and distances, each with a tolerance) and a 3D template that compares the direction of nine main bones in a body-relative frame, so it works wherever the child stands or faces.",
  },
  {
    name: "Three scores, not one",
    text: "Flexibility is how well the shape matched, Balance is how little the hips swayed while holding, and Mindfulness is how still the head and hands stayed. A child can match the shape and still learn to hold it calmly.",
  },
  {
    name: "Forgiving when the camera can't see",
    text: "Joints the depth camera only guesses, such as a hand hidden behind a knee in a seated pose, count for less instead of being trusted or ignored, so a brief occlusion never ruins a pose.",
  },
  {
    name: "Sized to every child",
    text: "Sitting, kneeling and floor poses are measured against the child's own standing height, taken while they stand on the first screens, so the same pose works for a small and a tall child.",
  },
  {
    name: "Tuned for real children",
    text: "Thresholds were worked out from children's proportions, not the adult guide pictures: a Forward Fold clears with a genuine lean, not a full adult fold. Staff can record a pose template from a real person on site, which then counts for more of the score.",
  },
  {
    name: "The right player in control",
    text: "In a busy mall several people stand in view. A play spot, a detection radius and a player-priority rule decide who controls the game, set from a live top-down map in the staff menu.",
  },
  {
    name: "Gestures that never misfire",
    text: "Every gesture screen waits for both hands to drop first. A T-pose sends the game home, but only on the language, buddy and report screens, never during the poses, where Warrior and Star also spread the arms.",
  },
  {
    name: "Runs itself all day",
    text: "Idle menus time out, a player who walks away mid-session sends it home, and the report card returns to the start after 30 seconds. The camera reconnects by itself if it is unplugged.",
  },
  {
    name: "Thirty painted scenes",
    text: "Each buddy has its own picture for every pose and its own world behind it: a garden for the girl, an adventure for the boy and outer space for the monkey. Ten poses, three buddies, thirty scenes.",
  },
  {
    name: "Bilingual to the last pixel",
    text: "Arabic is shaped and ordered in code, mixed with numbers and English without breaking, and every text box fits its words in both languages.",
  },
];

const customise = [
  "The poses, their order and how strict each one is",
  "Buddy characters and their background scenes",
  "Languages and every word on screen",
  "Report-card titles, badges and the campaign frame",
  "Session length, timeouts and gestures, from the staff menu",
  "Sensor: Kinect v2 or Azure Kinect, picked automatically",
];

export default function EveryMoveMattersCaseStudy() {
  return (
    <>
      <Seo
        title="Every Move Matters case study"
        path="/CaseStudies/EveryMoveMatters"
        image="/posters/EveryMoveMatters.jpg"
        description="Every Move Matters: a bilingual yoga game for children on an LED wall, read by a Kinect depth camera. Raise your hands to play, pick a yoga buddy, hold ten poses and take home a badge. Run at Early Childhood Week in Abu Dhabi."
      />

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-page px-4 sm:px-6 pt-10 pb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <Link href="/CaseStudies" className="text-sm text-paper/70 hover:text-sign">
              Case studies
            </Link>
            <h1 className="mt-3 font-display font-extrabold text-[3.4rem] sm:text-[5.2rem] leading-[0.85] tracking-tight text-sign">
              Every Move Matters
            </h1>
            <p className="mt-4 text-xl sm:text-2xl leading-snug">
              A yoga game on an LED wall: children copy a buddy through ten poses, and a depth camera checks every one.
            </p>
            <p className="mt-3 text-paper/70">Children&apos;s health campaign, Early Childhood Week, Abu Dhabi, 2026</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={ENQUIRY} className="sign sign-direction">
                <Arrow dir="ne" />
                Bring a body-tracked game to your event
              </a>
            </div>
          </div>
          <figure className="lg:col-span-7">
            <div className="border-2 border-sign bg-scope p-2">
              <div className="relative aspect-video">
                <Image src={HERO.src} alt={HERO.alt} fill priority sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" />
              </div>
            </div>
            <figcaption className="pt-2 text-xs text-paper/60">{HERO.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="onsite-h" className="bg-scope text-paper border-t-2 border-sign">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12">
          <p className="text-sm text-paper/60">On site</p>
          <h2 id="onsite-h" className="mt-1 font-display font-extrabold text-5xl leading-none text-sign">
            Live at the mall
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-paper/85 max-w-prose">
            The LED wall at the campaign stand in a busy Abu Dhabi mall during Early Childhood Week, next to the Fruit Slice
            floor: visitors working through the poses while the Kinect above the wall reads their whole body.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 max-w-3xl">
            <figure>
              <div className="border-2 border-sign bg-ink">
                <Video
                  src="/videos/EveryMoveMatters_Poses.mp4"
                  poster="/posters/EveryMoveMatters_Poses.jpg"
                  label="Every Move Matters on site: a visitor holding Forward Fold, Raised Arms and Tree Pose at the LED wall"
                  aspect="aspect-[464/832]"
                />
              </div>
              <figcaption className="pt-2 text-xs text-paper/60">Forward Fold, Raised Arms and Tree Pose on the wall.</figcaption>
            </figure>
            <figure>
              <div className="border-2 border-sign bg-ink">
                <Video
                  src="/videos/EveryMoveMatters_Onsite.mp4"
                  poster="/posters/EveryMoveMatters_Onsite.jpg"
                  label="The campaign stand: the yoga LED wall, the Fruit Slice floor and the activity tables"
                  aspect="aspect-[464/832]"
                />
              </div>
              <figcaption className="pt-2 text-xs text-paper/60">The stand: the yoga wall, the Fruit Slice floor and the tables.</figcaption>
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
            Get young children moving and show them that every move counts, at a mall stand, in Arabic and English. No
            controller, no mat, no touch screen: the game had to read the child&apos;s body, judge real yoga poses fairly
            for small bodies, and run all day without a member of staff at the wall.
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
            On the wall
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

      <section aria-labelledby="poses-h" className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="poses-h" className="font-display font-extrabold text-5xl leading-none">
            Ten poses
          </h2>
          <p className="mt-4 text-lg leading-relaxed max-w-prose">
            Standing, balancing, sitting and kneeling, chosen so a child of any age can try each one and most can hold it.
            Each shows the buddy, the child&apos;s own tracked skeleton and a ring that fills while the pose is held.
          </p>
        </div>
        <ol className="lg:col-span-7 grid gap-x-8 sm:grid-cols-2 text-lg">
          {poses.map((p, i) => (
            <li key={p} className="py-2 border-t border-rule flex gap-3">
              <span className="font-display font-extrabold text-sign [-webkit-text-stroke:1px_#111C27] w-7">{i + 1}</span>
              {p}
            </li>
          ))}
        </ol>
      </section>

      {VIDEO && (
        <section aria-labelledby="video-h" className="border-t-2 border-ink">
          <div className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <h2 id="video-h" className="font-display font-extrabold text-5xl leading-none">
                A full session
              </h2>
              <p className="mt-4 text-lg leading-relaxed max-w-prose">
                One complete session as it plays on the wall, with the game&apos;s own music and sound: hands up, name,
                language, buddy, the ten poses and the badge.
              </p>
            </div>
            <figure className="lg:col-span-7">
              <div className="border-2 border-ink">
                <Video src={VIDEO.src} poster={VIDEO.poster} label="A full Every Move Matters session on the LED wall, with sound" />
              </div>
              <figcaption className="pt-2 text-sm text-muted">Recorded from the game with a simulated player. Unmute for sound.</figcaption>
            </figure>
          </div>
        </section>
      )}

      <section aria-labelledby="ready-h" className="border-t-2 border-ink">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12">
          <h2 id="ready-h" className="font-display font-extrabold text-5xl leading-none">
            Reading a child&apos;s body, fairly
          </h2>
          <p className="mt-4 text-lg max-w-2xl text-muted">
            A pose game is only fun if it agrees with the child. Most of the engineering went into judging poses the way a
            kind teacher would, and into keeping the right person in control.
          </p>
          <dl className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {bodyReady.map((f) => (
              <div key={f.name} className="border-l-4 border-sign pl-4">
                <dt className="font-display font-bold text-2xl">{f.name}</dt>
                <dd className="mt-1 leading-relaxed max-w-prose">{f.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="custom-h" className="border-t-2 border-ink">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="custom-h" className="font-display font-extrabold text-5xl leading-none">
              Make it yours
            </h2>
            <p className="mt-4 text-lg leading-relaxed max-w-prose">
              The poses are data, not code. The same game can run a stretching break for an office wellness day, a sports
              brand&apos;s warm-up or a physiotherapy routine.
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
              I designed and built Every Move Matters: the gesture-driven flow, the pose rules and templates, player
              selection in a crowd, the bilingual wall UI in the campaign&apos;s brand, name registration by phone, the
              badges and their website, the sound and the staff tools.
            </p>
            <p>
              The three buddies, their thirty pose pictures and thirty background scenes were generated with AI image tools
              from one approved style reference, then cut out and graded so every buddy looks the same in every pose.
            </p>
            <p>
              Without a camera, a simulated skeleton plays the whole game from the keyboard, which is how every pose and
              screen was tested before the hardware arrived.
            </p>
            <p className="text-muted">Unity 6, C#, Universal Render Pipeline, Kinect v2 / Azure Kinect body tracking, TextMesh Pro, GitHub Pages, Windows.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="cta-h" className="bg-sign">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-12 grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h2 id="cta-h" className="font-display font-extrabold text-5xl leading-none">
              Want a movement game at your event?
            </h2>
            <p className="mt-3 text-lg leading-relaxed max-w-prose">
              I can adapt Every Move Matters to your poses, characters and screen, set up the camera on site and support it
              through the event. Tell me about it and I&apos;ll come back with what it would take.
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

// ---- media (filled from the game's own screenshots)
const HERO = {
  src: "/everymovematters/pose-warrior.jpg",
  alt: "Warrior Pose on the LED wall: Mindful Monkey demonstrates, the player's skeleton holds the pose and the hold ring counts down",
  caption: "Pose 5, Warrior: the buddy demonstrates, the child's skeleton copies, the ring counts the hold.",
};
const gallery: { src: string; alt: string; caption: string }[] = [
  { src: "/everymovematters/attract.jpg", alt: "Home screen: the three buddies wave and invite the player to raise both hands", caption: "Home: the three buddies invite children to raise both hands." },
  { src: "/everymovematters/name-qr.jpg", alt: "Name screen with a QR code, in English and Arabic", caption: "A parent scans the code and types the child's name." },
  { src: "/everymovematters/language.jpg", alt: "Language screen: raise your left hand for Arabic or your right hand for English", caption: "Left hand for Arabic, right hand for English." },
  { src: "/everymovematters/carousel.jpg", alt: "Buddy carousel with Yoga Girl in the centre between Mindful Monkey and Yoga Boy", caption: "One hand up turns the carousel, both hands choose the buddy." },
  { src: "/everymovematters/pose-forward-fold.jpg", alt: "Forward Fold: Mindful Monkey demonstrates in a space scene while the player's skeleton bends forward", caption: "Pose 1, Forward Fold, in Mindful Monkey's space world." },
  { src: "/everymovematters/pose-result.jpg", alt: "A held pose scoring +10 with a Perfect! bubble", caption: "A pose held to the end: Perfect! and +10." },
  { src: "/everymovematters/report.jpg", alt: "Report card: 100 out of 100, Balance, Flexibility and Mindfulness, the Yoga Master crown and a QR code, in the campaign frame", caption: "The report card in the campaign's frame: the score, three measures, a title and a QR to take it home." },
];
const VIDEO: { src: string; poster: string } | null = null;
