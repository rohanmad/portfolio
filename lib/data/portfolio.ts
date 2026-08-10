import {
  Globe,
  Zap,
  Gamepad2Icon as GameController2,
  Camera,
  Bot,
  type LucideIcon,
} from "lucide-react"

export const siteMeta = {
  domain: "rohanm.net",
  name: "rohan madan",
  greeting: "hey! i'm",
  resumeUrl:
    "https://drive.google.com/file/d/1bwROtaBfxwZzlRV-qhvXCtIAWjPIabFQ/view?usp=sharing",
}

export const typedStrings = [
  " a future software engineer",
  " a swe intern at moebius solutions",
  " an ai/ml enthusiast",
  " building scalable, clean code",
  " an avid tennis player",
  " a music enthusiast",
  " always hunting for the best food spots",
  " pursuing a bachelor's in computer science at UCSD",
]

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/madanrohan",
    handle: "@madanrohan",
  },
  {
    label: "GitHub",
    href: "https://github.com/rohanmad",
    handle: "@rohanmad",
  },
  {
    label: "Email",
    href: "mailto:rmadan@ucsd.edu",
    handle: "rmadan@ucsd.edu",
  },
]

export type AboutChapter = {
  id: string
  title: string
  lead: string
  paragraphs: string[]
  image: { src: string; alt: string }
  accent: "amber" | "violet" | "teal"
}

export const aboutChapters: AboutChapter[] = [
  {
    id: "origins",
    title: "origins",
    lead: "i'm rohan, a junior studying computer science at uc san diego.",
    paragraphs: [
      "i grew up in vancouver, canada, but have been living in san diego since 2010. growing up, i was constantly curious about how things worked, spending a lot of time tinkering, experimenting, and taking things apart just to see what was inside.",
      "i didn't really grow out of that phase. high school gave me places where curiosity actually felt useful, and joining my school's ftc robotics team and cyberpatriot club let me learn with other people who were just as invested.",
    ],
    image: { src: "/family-pic.JPG", alt: "rohan as a kid" },
    accent: "amber",
  },
  {
    id: "college",
    title: "college",
    lead: "college is where things started to feel real.",
    paragraphs: [
      "i took a less traditional path into computer science, starting at community college before transferring to uc san diego. at the time, it felt like i was behind. in reality, it forced me to slow down, take responsibility for my progress, and stay consistent even when no one was watching.",
      "at ucsd, finding acm changed everything. being surrounded by people who genuinely cared about building, learning, and helping each other grow gave me a sense of direction. through workshops, projects, and conversations, i learned just as much from the people around me as i did from my classes.",
    ],
    image: { src: "/hackathon-pic-me.JPG", alt: "hackathon pic" },
    accent: "violet",
  },
  {
    id: "beyond",
    title: "beyond",
    lead: "outside of technology, i value connection and exploration.",
    paragraphs: [
      "i enjoy spending time with friends through late night conversations, food runs, and spontaneous adventures, and i believe those shared moments matter as much as any professional achievement.",
      "i also love traveling and hiking, and am always seeking out new places to see and people to meet, because every experience teaches me something new and keeps life exciting.",
    ],
    image: { src: "/beach-throw.JPG", alt: "beach football" },
    accent: "teal",
  },
]

export type ProjectLink = {
  label: "code" | "demo"
  href: string
}

export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  icon: LucideIcon
  accent: "amber" | "violet" | "teal"
  links: ProjectLink[]
  images?: string[]
  mediaLayout?: "carousel" | "duo"
}

export const projects: Project[] = [
  {
    id: "rollcall",
    title: "rollcall",
    description:
      "ios-oriented mobile app that turns your camera roll into suggested memories. scan, cluster into events, review drafts, then post and share with friends.",
    tags: [
      "Expo",
      "React Native",
      "TypeScript",
      "Supabase",
      "OpenAI Vision",
      "AsyncStorage",
    ],
    icon: Camera,
    accent: "teal",
    images: ["/rollcall-homepage-front.png", "/rollcall-examplepost.png"],
    mediaLayout: "duo",
    links: [
      {
        label: "code",
        href: "https://github.com/rohanmad/RollCall",
      },
    ],
  },
  {
    id: "pokemon-red-rl-agent",
    title: "pokemon red rl agent",
    description:
      "ppo agent that learns to play pokémon red through pyboy + gymnasium. custom env, ram-mapped rewards, and stable-baselines3 training.",
    tags: [
      "Python",
      "PPO",
      "Stable-Baselines3",
      "Gymnasium",
      "PyBoy",
      "TensorBoard",
    ],
    icon: Bot,
    accent: "amber",
    links: [
      {
        label: "code",
        href: "https://github.com/rohanmad/Pokemon-Red-RL-Agent",
      },
    ],
  },
  {
    id: "ucsd-social-app",
    title: "ucsd social app",
    description:
      "full-stack social platform connecting ucsd students through campus events. features ai-powered flyer scanning, google calendar integration, real-time notifications, and intelligent event recommendations",
    tags: ["React", "Node.js", "MongoDB", "Google Maps"],
    icon: Globe,
    accent: "amber",
    links: [],
  },
  {
    id: "eventory",
    title: "eventory",
    description:
      "ai-powered discord bot that automatically detects and tracks academic deadlines, club events, and announcements. uses google gemini to parse natural language into structured calendar data",
    tags: ["Python", "Gemini AI", "Discord.py", "FastAPI", "MongoDB", "React"],
    icon: Zap,
    accent: "violet",
    images: ["/eventory-pic.png", "/eventory-homepage.png"],
    links: [
      {
        label: "code",
        href: " https://github.com/ryansoe/diamond-hacks-education",
      },
      {
        label: "demo",
        href: "https://devpost.com/software/eventory-pnfrq1",
      },
    ],
  },
  {
    id: "gym-trainer-bot",
    title: "gym trainer bot",
    description:
      "ai-powered fitness buddy that doesn't judge your form. gives personalized workouts and tracks your gains",
    tags: ["Python", "ML", "FastAPI"],
    icon: Zap,
    accent: "amber",
    links: [],
  },
  {
    id: "poker-buy-in-tracker",
    title: "poker buy-in tracker",
    description:
      'full-stack app for tracking poker games because someone always "forgets" how much they owe. features real-time stats and payment tracking',
    tags: ["React", "Node.js", "MongoDB"],
    icon: GameController2,
    accent: "violet",
    links: [],
  },
  {
    id: "stock-predictor",
    title: "stock predictor",
    description:
      "ml model that predicts stock movements (disclaimer: still broke). not financial advice!",
    tags: ["Python", "TensorFlow", "Pandas"],
    icon: Globe,
    accent: "teal",
    links: [],
  },
]

export const contactItems = [
  {
    id: "email",
    label: "email",
    value: "rmadan@ucsd.edu",
    href: "mailto:rmadan@ucsd.edu",
    accent: "amber" as const,
  },
  {
    id: "linkedin",
    label: "linkedin",
    value: "@madanrohan",
    href: "https://www.linkedin.com/in/madanrohan/",
    accent: "violet" as const,
  },
  {
    id: "github",
    label: "github",
    value: "@rohanmad",
    href: "https://github.com/rohanmad",
    accent: "teal" as const,
  },
  {
    id: "mobile",
    label: "mobile",
    value: "(858) 280-6220",
    href: null,
    accent: "amber" as const,
  },
]

export const navSections = [
  { id: "hero", label: "home", shortcut: "H" },
  { id: "about", label: "about", shortcut: "A" },
  { id: "projects", label: "projects", shortcut: "P" },
  { id: "contact", label: "contact", shortcut: "C" },
]
