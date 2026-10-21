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
    tagline: "A two-player money race for brand activations",
    client: "Financial-literacy brand activation, UAE",
    year: "2026",
    poster: "/posters/FinRace.jpg",
    tags: ["Event game", "2 players", "Tablets + big screen", "Lead capture"],
    blurb:
      "How a three-minute racing game gets crowds talking about saving, spending and investing, captures every player's details without losing a single record, and can be re-branded for a new client in days.",
  },
];
