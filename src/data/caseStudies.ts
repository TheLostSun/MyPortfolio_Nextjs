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
