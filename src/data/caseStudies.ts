export type CaseStudy = {
  slug: string;
  href: string;
  title: string;
  tagline: string;
  client: string;
  year: string;
  poster: string;
  tags: string[];
  blurb: string;
};

/** Long-form write-ups for projects I pitch to new clients. Newest first. */
export const caseStudies: CaseStudy[] = [
  {
    slug: "desertrace",
    href: "/CaseStudies/DesertRace",
    title: "The Great Desert Race",
    tagline: "A camel race through 200 years of the UAE, for one player or two",
    client: "Culture and tourism event, UAE",
    year: "2026",
    poster: "/posters/DesertRace.jpg",
    tags: ["Arcade cabinet", "Joystick box (serial)", "English + Arabic", "Name by phone QR", "Leaderboard + badges"],
    blurb:
      "How a two-player arcade race told the story of the UAE from 1926 to 2126: names sent from the players' phones, a solo race when only one scans, English and Arabic, a joystick box that staff can remap on site, and a badge and leaderboard rank for every player.",
  },
  {
    slug: "fruitslice",
    href: "/CaseStudies/FruitSlice",
    title: "Fruit Slice",
    tagline: "A healthy-eating game on an LED floor, read by a LiDAR",
    client: "Children's health campaign, Early Childhood Week, Abu Dhabi",
    year: "2026",
    poster: "/posters/FruitSlice.jpg",
    tags: ["LED floor", "LiDAR (TUIO)", "English + Arabic", "Name by phone QR", "Report card"],
    blurb:
      "How children learned which foods help them grow by stamping on them: a bilingual LED-floor game tracked by any LiDAR, with names sent from a parent's phone, a 45-second game and frenzy, and a report card to take home.",
  },
  {
    slug: "everymovematters",
    href: "/CaseStudies/EveryMoveMatters",
    title: "Every Move Matters",
    tagline: "A yoga game on an LED wall, judged by a depth camera",
    client: "Children's health campaign, Early Childhood Week, Abu Dhabi",
    year: "2026",
    poster: "/posters/EveryMoveMatters.jpg",
    tags: ["LED wall", "Kinect body tracking", "Arabic + English", "Gesture controls", "Badge with QR"],
    blurb:
      "How children copied a yoga buddy through ten poses with nothing to hold: a Kinect reads the whole body, gestures run every menu, poses are judged fairly for small bodies, and every child takes home a badge with their name.",
  },
  {
    slug: "finrace",
    href: "/CaseStudies/FinRace",
    title: "FinRace",
    tagline: "A money race for brand activations, with a backup and a final",
    client: "Financial-literacy brand activation, Abu Dhabi",
    year: "2026",
    poster: "/posters/FinRace.jpg",
    tags: ["Event game", "1–2 players", "Tablets + LED + button box", "Procedural + real-world city", "Lead capture"],
    blurb:
      "How a 60-second runner got crowds talking about saving, spending and investing, raced through a procedural city and a real Abu Dhabi street, and shipped as a tablet backup plus an LED final with a button box, without losing a single record.",
  },
];
