export type LinkItem = { label: string; href: string };

export type Project = {
  id: string;
  title: string;
  client: string;
  year?: string;
  summary: string;
  role: string[];
  stack: string;
  video?: string;
  poster?: string;
  image?: string;
  links: LinkItem[];
};

export type Group = { id: string; name: string; intro: string; projects: Project[] };

export const contact = {
  email: "iamprabhuawasthi@gmail.com",
  phone: "+91 6391307609",
  phoneHref: "tel:+916391307609",
  location: "Gurugram, Delhi NCR, India",
  cv: "/Prabhu_Awasthi_CV.pdf",
  showreel: "https://youtube.com/shorts/CPF3rxwpoMI",
};

export const socials: LinkItem[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prabhu-awasthi" },
  { label: "GitHub", href: "https://github.com/TheLostSun" },
  { label: "itch.io", href: "https://thelostsun-studios.itch.io" },
  { label: "Instagram", href: "https://www.instagram.com/prabhu.awasthi/" },
  { label: "Discord", href: "https://discord.com/invite/qVqmyKtdfq" },
];

const finRace: Project = {
  id: "finrace",
  title: "FinRace",
  client: "Financial-literacy brand activation, UAE",
  year: "2026",
  summary:
    "A two-player racing game that teaches money habits in under three minutes. Each player drives on a tablet, starts with a AED 10,000 salary and steers into savings, investments, wants and scams, while a big screen shows both races, a live leaderboard and a financial health score at the finish.",
  role: [
    "Designed and built the whole game solo: gameplay, money model, scoring and results",
    "Tablet-to-screen networking over OSC with a no-data-loss channel for registrations and results",
    "Event-ready data capture: JSON journals, backups and a live Excel leaderboard on the screen PC",
    "Visual pass: post-processing, jump and barrel-roll tricks, obstacles, particles and a streamed city",
  ],
  stack: "Unity 6, C#, URP, OSC, Android + Windows",
  video: "/videos/FinRace.mp4",
  poster: "/posters/FinRace.jpg",
  links: [{ label: "Read the case study", href: "/CaseStudies/FinRace" }],
};

const vectra: Project = {
  id: "vectra",
  title: "Vectra",
  client: "Zibal Technologies",
  year: "2026",
  summary:
    "An air traffic control training simulator built in Unity. Trainee controllers work a live radar scope, issue clearances and manage arrivals and holds across advanced exercises.",
  role: [
    "Owned the flight plan system end to end",
    "Built the holding pattern and approach monitor systems",
    "Worked on peer-to-peer multiplayer for instructor and trainee sessions",
    "Redesigned the full controller UI",
    "Supported the product pitch to the Civil Aviation Training College, AAI",
  ],
  stack: "Unity, C#, P2P networking, UI Toolkit",
  video: "/videos/Vectra.mp4",
  poster: "/posters/Vectra.jpg",
  links: [],
};

const tata: Project = {
  id: "tata-adas",
  title: "TATA ADAS Simulator",
  client: "Tata Motors, Bharat Mobility Expo",
  year: "2025",
  summary:
    "A driving simulator for the Bharat Mobility Auto Expo at Pragati Maidan. Visitors drove around a small island and met scenarios that triggered six driver-assistance features, scored on accuracy and response time.",
  role: [
    "Built the driving, scenario and scoring systems in Unity",
    "Turned six ADAS features into short, readable scenarios for expo visitors",
    "Ran the build through the expo floor",
  ],
  stack: "Unity, C#, Shader Graph",
  video: "/videos/TataADAS_Simulator.mp4",
  poster: "/posters/TataADAS_Simulator.jpg",
  links: [
    {
      label: "LinkedIn post",
      href: "https://www.linkedin.com/posts/prabhu-awasthi_nothing-beats-the-joy-of-seeing-people-especially-activity-7288620529991749633-nfjO",
    },
  ],
};

const gati: Project = {
  id: "gati-shakti",
  title: "PM Gati Shakti",
  client: "Government of India",
  year: "2024",
  summary:
    "An interactive Unity experience explaining India's national infrastructure and connectivity plan, combining a 3D world with layered UI. It was shown to Prime Minister Narendra Modi.",
  role: [
    "Game design, programming and UX in a multidisciplinary team",
    "Modular architecture so new content could be added after launch",
  ],
  stack: "Unity, C#",
  video: "/videos/GatiShakti.mp4",
  poster: "/posters/GatiShakti.jpg",
  links: [
    {
      label: "LinkedIn post",
      href: "https://www.linkedin.com/posts/prabhu-awasthi_im-happy-to-share-this-pm-gati-shakti-project-activity-7253694049214218240-_R9c",
    },
  ],
};

const samudra: Project = {
  id: "samudra-manthan",
  title: "Samudra Manthan VR",
  client: "Mahakumbh 2025",
  year: "2025",
  summary:
    "A VR retelling of the churning of the ocean for the Mahakumbh 2025 centre. Visitors pull the serpent Vasuki with the controllers and collect the treasures that rise from the sea.",
  role: [
    "Built the VR interaction and narrative progression",
    "Tuned it for a public exhibition: short sessions, quick resets, first-time VR users",
  ],
  stack: "Unity, C#, VR, Shader Graph, Blender",
  video: "/videos/SamudraManthan.mp4",
  poster: "/posters/SamudraManthan.jpg",
  links: [
    {
      label: "LinkedIn post",
      href: "https://www.linkedin.com/posts/prabhu-awasthi_bringing-mythology-to-life-samudra-manthan-activity-7364658232486711296-xcFb",
    },
  ],
};

const fartFrog: Project = {
  id: "fart-frog",
  title: "Fart Frog",
  client: "TheLostSun Studios",
  year: "2026",
  summary:
    "An endless mobile game about a frog with one weapon. Tap to aim fart attacks, land headshots and chain combos for score, then spend coins on new skins and fart types.",
  role: [
    "Solo development: gameplay, scoring, shop and progression",
    "Sound and haptic feedback tuned for one-thumb play",
    "Published on Google Play",
  ],
  stack: "Unity, C#, Android",
  video: "/videos/FartFrog.mp4",
  poster: "/posters/FartFrog.jpg",
  links: [
    {
      label: "Get it on Google Play",
      href: "https://play.google.com/store/apps/details?id=com.TheLostSunStudios.FartFrog&referrer=utm_source%3Dportfolio%26utm_medium%3Dwork_page",
    },
    { label: "Game page and press kit", href: "/FartFrog" },
  ],
};

const mimic: Project = {
  id: "mimic",
  title: "MIMIC",
  client: "Released on Steam",
  year: "2024",
  summary:
    "A psychological horror puzzle game. You are locked in a room with Subject #23, a creature that copies everything you do, and you have to find the clues and escape.",
  role: ["Gameplay and puzzle programming", "Shaders and lighting for the horror atmosphere"],
  stack: "Unity, C#, Blender, Shader Graph",
  video: "/videos/MIMIC.mp4",
  poster: "/posters/MIMIC.jpg",
  links: [{ label: "MIMIC on Steam", href: "https://store.steampowered.com/app/2961970/MIMIC/" }],
};

const slasher: Project = {
  id: "impossible-slasher",
  title: "Impossible Slasher",
  client: "With Angel Star Studios",
  summary:
    "A retro pixel-art hack and slash with three maps, four playable characters with their own abilities, and enemies with distinct attacks.",
  role: ["Combat, enemy behaviour and character abilities"],
  stack: "Unity, C#, Shader Graph",
  video: "/videos/ImpossibleSlasher.mp4",
  poster: "/posters/ImpossibleSlasher.jpg",
  links: [{ label: "Play on itch.io", href: "https://thelostsun-studios.itch.io/impossible-slasher" }],
};

const hyper: Project = {
  id: "hyper-casual",
  title: "Hyper-casual prototypes",
  client: "Personal",
  summary:
    "A run of small games built to test one mechanic each, quickly. Short loops, clear feedback and builds light enough to run in a browser.",
  role: ["Rapid prototyping and iteration", "Performance tuning for WebGL and mobile"],
  stack: "Unity, C#, WebGL",
  video: "/videos/Compilation.mp4",
  poster: "/posters/Compilation.jpg",
  links: [
    { label: "Basketball", href: "https://thelostsun.github.io/BasketBallGame" },
    { label: "Sweet Frog", href: "https://thelostsun-studios.itch.io/sweet-frog" },
    { label: "Driving Game", href: "https://thelostsun.github.io/Driving-Game" },
  ],
};

const ether: Project = {
  id: "ether-surfers",
  title: "Ether Surfers",
  client: "Mobile, Play Store and App Store",
  summary:
    "An endless runner with weekly leaderboards, where top players were rewarded with the game's token. Firebase handled accounts and scores.",
  role: ["Gameplay, leaderboard and Firebase integration", "Art pipeline from Blender and Cinema 4D into Unity"],
  stack: "Unity, C#, Firebase, Blender, Cinema 4D",
  image: "/images/gameImages/EtherSurfer.png",
  links: [
    { label: "Ether Surfers on Google Play", href: "https://play.google.com/store/apps/details?id=com.EtherSurferLeaderBoard" },
  ],
};

export const groups: Group[] = [
  {
    id: "simulation",
    name: "Simulation",
    intro: "Training and demonstration software where the systems have to behave like the real thing.",
    projects: [vectra, tata, gati],
  },
  {
    id: "installations",
    name: "Installations and XR",
    intro: "Experiences for exhibitions, museums and live events, built to run all day in front of the public.",
    projects: [finRace, samudra],
  },
  {
    id: "games",
    name: "Games",
    intro: "Shipped games on Steam, Google Play and itch.io, from horror to one-thumb arcade.",
    projects: [fartFrog, mimic, slasher, hyper, ether],
  },
];

/** Order used across the site and the hero reel. */
export const allWork: Project[] = [finRace, gati, tata, samudra, vectra, mimic, fartFrog, slasher, hyper, ether];

export const featured: Project[] = [finRace, gati, tata, samudra, vectra, mimic];

export const web: Project[] = [
  {
    id: "portfolio",
    title: "This portfolio",
    client: "Personal",
    year: "2026",
    summary: "Built with Next.js and Tailwind, deployed on Vercel. Video is encoded for the web and loads only when it scrolls into view.",
    role: [],
    stack: "Next.js, React, TypeScript, Tailwind CSS",
    image: "/images/gameImages/Portfolio.png",
    links: [{ label: "Source on GitHub", href: "https://github.com/TheLostSun/MyPortfolio_Nextjs" }],
  },
  {
    id: "education-adda",
    title: "Education Adda",
    client: "MERN stack",
      summary: "An e-learning site with courses, lectures, quizzes and assignments. React front end on a MongoDB, Express and Node back end.",
    role: [],
    stack: "React, MongoDB, Express, Node.js, Bootstrap",
    image: "/images/gameImages/Website2.png",
    links: [{ label: "Source on GitHub", href: "https://github.com/TheLostSun/E-Learning" }],
  },
  {
    id: "shoppers-hub",
    title: "Shoppers Hub",
    client: "Full stack",
      summary: "An e-commerce site with separate buyer and seller accounts, sessions, a cart, and encrypted user data.",
    role: [],
    stack: "Node.js, Express, MongoDB, EJS, Bootstrap",
    image: "/images/gameImages/Website.png",
    links: [{ label: "Source on GitHub", href: "https://github.com/TheLostSun/eCommProject" }],
  },
];

export const course: Project = {
  id: "course",
  title: "Complete 2D Game Development in Unity",
  client: "Udemy and Tutorials Point",
  summary:
    "A two-hour course for non-coders: build a 2D platformer in Unity while learning the C# behind it. Includes coding notes and assets. 300+ students, rated 4.5+.",
  role: [],
  stack: "Unity, C#",
  image: "/images/gameImages/course.jpg",
  links: [
    { label: "Udemy", href: "https://www.udemy.com/course/complete-2d-game-development-in-unity-for-non-coders/" },
    {
      label: "Tutorials Point",
      href: "https://www.tutorialspoint.com/complete-2d-game-development-in-unity-with-coding-explained/index.asp",
    },
  ],
};

export const services = [
  {
    name: "Simulators and training tools",
    text: "Rule-heavy systems like air traffic control and driver assistance, with multiplayer instructor sessions and UI that trainees can read under pressure.",
  },
  {
    name: "Installations and event tech",
    text: "Kinect, LiDAR floors, touch tables, Arduino and DMX wired into Unity. I build it, install it and stay for show day.",
  },
  {
    name: "VR, AR and real-time 3D",
    text: "Immersive pieces for exhibitions and brand activations, tuned for first-time users and short sessions.",
  },
  {
    name: "Games",
    text: "From prototype to store release on Steam, Google Play and the web.",
  },
];

export const experience = [
  {
    when: "Apr 2026 – Oct 2026",
    org: "Zibal Technologies",
    role: "Junior Unity Developer",
    text: "Vectra air traffic control simulator: flight plans, holding patterns, approach monitoring, P2P multiplayer and the UI redesign.",
  },
  {
    when: "Mar 2024 – Apr 2026",
    org: "Tagglabs Experiential",
    role: "Software and Application Developer",
    text: "Production Unity apps for exhibitions, museums, auto expos and brand activations, including the National Judicial Museum at the Supreme Court of India.",
  },
  {
    when: "Ongoing",
    org: "Udemy and Tutorials Point",
    role: "Course author",
    text: "Unity and C# course for beginners with 300+ students.",
  },
  {
    when: "Graduated 2024",
    org: "GLA University",
    role: "B.Tech, Computer Science",
    text: "CGPA 8.33.",
  },
];
