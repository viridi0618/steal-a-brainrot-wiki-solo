import type {
  GameInfo,
  ClassData,
  Region,
  JourneyCard,
  ToolCard,
  GuideItem,
  NewsItem,
  FAQ,
  WeaponType,
  Weapon,
  Boss,
  Dungeon,
  Profession,
  SystemRequirement,
  ReleaseDateInfo,
  RoadmapItem,
} from "./types";

/* ==============================
   1. Game Info
   ============================== */

export const gameData: GameInfo = {
  title: "Steal a Brainrot",
  subtitle: "Collect. Trade. Dominate.",
  description:
    "Steal a Brainrot is a Roblox collection game where you gather internet meme-themed characters called brainrots. Each brainrot generates passive income measured in millions per second (M/S), allowing you to build wealth and expand your collection over time. Trade brainrots with other players, participate in weekly events like Admin Abuse and Taco Tuesday, and discover hidden rituals that require coordinated teamwork with other players.\n\nMaster the Rebirth system to reset your progress in exchange for permanent bonuses, complete your Index to track every brainrot you own, and chase rare traits and mutations that can dramatically multiply your income. With over 100 brainrots to collect and a thriving community of millions of daily players, Steal a Brainrot is the ultimate Roblox collection experience.",
  heroTitle: "Steal a Brainrot Wiki",
  heroSubtitle:
    "The complete community wiki for Steal a Brainrot on Roblox. Brainrot guides, event schedules, ritual secrets, and more.",
  heroStats: [
    { label: "Brainrots", value: "100+" },
    { label: "Daily Players", value: "24M+" },
    { label: "Events", value: "Weekly" },
    { label: "Platform", value: "Roblox" },
  ],
  quickFacts: [
    { label: "Developer", value: "Community-created" },
    { label: "Platform", value: "Roblox" },
    { label: "Genre", value: "Collection / Trading" },
    { label: "Price", value: "Free" },
    { label: "Release", value: "2024" },
    { label: "Rebirth System", value: "Permanent bonuses" },
    { label: "Trading", value: "Player-to-player" },
    { label: "Events", value: "Weekly (Admin Abuse, Taco Tuesday)" },
  ],
};

/* ==============================
   2. Brainrots
   ============================== */

export const classes: ClassData[] = [
  {
    id: "garama-and-madundung",
    name: "Garama and Madundung",
    icon: "🧠",
    tag: "Common · Income",
    shortDescription: "A starter duo brainrot that generates steady income for new collectors.",
    description:
      "Garama and Madundung are a pair of brainrots that work together to produce a base income of 50M/S. Community-reported as a common brainrot, they are among the first brainrots new players encounter. Their combined value makes them a reliable foundation for any starting collection. Rarity and trait data are pending verification.",
    role: "Starter Income",
    difficulty: "Easy",
    rating: "Common",
    weaponType: "Income, Common, Starter",
    armorType: "Common",
    abilities: [
      "Steady base income",
      "Duo synergy bonus",
      "Easy to obtain",
      "Rebirth-friendly",
    ],
    tips: "An excellent first brainrot to build your collection around. Keep them through your first few rebirths.",
  },
  {
    id: "cerberus",
    name: "Cerberus",
    icon: "🧠",
    tag: "Rare · Income",
    shortDescription: "A three-headed brainrot with strong income potential and community demand.",
    description:
      "Cerberus is a rare brainrot generating a base income of 175M/S. According to community reports, its three-headed design may relate to special trait synergy. It is considered a mid-tier brainrot that bridges the gap between common starters and legendary earners. Exact trait data is unverified and pending community confirmation.",
    role: "Mid-tier Earner",
    difficulty: "Medium",
    rating: "Rare",
    weaponType: "Income, Rare, Multiplier",
    armorType: "Rare",
    abilities: [
      "Strong base income",
      "Triple-head synergy",
      "Trait potential",
      "Trade value",
    ],
    tips: "A solid mid-game brainrot. Look for traits that multiply its already strong base income.",
  },
  {
    id: "la-secret-combinasion",
    name: "La Secret Combinasion",
    icon: "🧠",
    tag: "Legendary · Income",
    shortDescription: "A legendary brainrot with an extraordinary 375M/S base income rate.",
    description:
      "La Secret Combinasion is a legendary-tier brainrot with a base income of 375M/S, making it one of the highest-earning brainrots in the game. Community-reported data suggests it may be obtained through special events or rituals. Its rarity and value are widely acknowledged by the trading community, though specific trait interactions remain unverified.",
    role: "High-value Earner",
    difficulty: "Hard",
    rating: "Legendary",
    weaponType: "Legendary, Income, Event",
    armorType: "Legendary",
    abilities: [
      "Massive base income",
      "Collection value boost",
      "Rarity prestige",
      "Event potential",
    ],
    tips: "A top-tier earner. Prioritize protecting this brainrot and maximizing its trait multipliers.",
  },
  {
    id: "spaghetti-tualetti",
    name: "Spaghetti Tualetti",
    icon: "🧠",
    tag: "Common · Income",
    shortDescription: "A food-themed brainrot with a modest 60M/S base income.",
    description:
      "Spaghetti Tualetti is a common brainrot generating 60M/S base income. Community-reported as a food-themed brainrot, it is relatively easy to obtain and serves as a decent early-game earner. Data on its specific traits and mutations is pending verification from the community.",
    role: "Early-game Earner",
    difficulty: "Easy",
    rating: "Common",
    weaponType: "Income, Common, Food",
    armorType: "Common",
    abilities: [
      "Modest base income",
      "Easy to acquire",
      "Beginner-friendly",
      "Collection filler",
    ],
    tips: "A step up from the most basic brainrots. Use it to bridge into mid-tier earners.",
  },
  {
    id: "capitano-moby",
    name: "Capitano Moby",
    icon: "🧠",
    tag: "Rare · Income",
    shortDescription: "A captain-themed brainrot with a solid 160M/S base income.",
    description:
      "Capitano Moby is a rare brainrot generating 160M/S base income. According to community reports, it has a maritime theme and may have special synergy with other aquatic-themed brainrots. Its income places it in the upper mid-tier, making it a desirable addition to growing collections. Trait data is unverified.",
    role: "Mid-tier Earner",
    difficulty: "Medium",
    rating: "Rare",
    weaponType: "Rare, Income, Themed",
    armorType: "Rare",
    abilities: [
      "Solid base income",
      "Theme synergy potential",
      "Trade demand",
      "Collection value",
    ],
    tips: "Look for themed brainrot synergies. Capitano Moby may pair well with other nautical brainrots.",
  },
  {
    id: "burguro-and-fryuro",
    name: "Burguro And Fryuro",
    icon: "🧠",
    tag: "Legendary · Income",
    shortDescription: "The highest-earning verified brainrot duo at an incredible 675M/S base income.",
    description:
      "Burguro And Fryuro are a legendary duo brainrot generating a staggering 675M/S base income -- the highest among all verified brainrots. Community-reported data indicates they are extremely rare and highly sought after in the trading market. Their combination of duo synergy and massive income makes them the crown jewel of any collection. Specific trait and mutation data is pending verification.",
    role: "Ultimate Earner",
    difficulty: "Hard",
    rating: "Legendary",
    weaponType: "Legendary, Income, Duo, Ultimate",
    armorType: "Legendary",
    abilities: [
      "Highest base income",
      "Duo synergy bonus",
      "Extreme trade value",
      "Collection prestige",
    ],
    tips: "The ultimate brainrot. If you acquire these, invest heavily in traits and protect them at all costs.",
  },
  {
    id: "dragon-cannelloni",
    name: "Dragon Cannelloni",
    icon: "🧠",
    tag: "Rare · Income",
    shortDescription: "A dragon-themed brainrot with a powerful 250M/S base income.",
    description:
      "Dragon Cannelloni is a rare brainrot generating 250M/S base income. Community-reported as a dragon-themed brainrot, it sits at the upper end of the rare tier and is a favorite among collectors for both its income and theme. Its exact trait interactions and acquisition methods are unverified and based on community reports.",
    role: "Upper-tier Earner",
    difficulty: "Medium",
    rating: "Rare",
    weaponType: "Rare, Income, Dragon, Themed",
    armorType: "Rare",
    abilities: [
      "High base income",
      "Dragon theme prestige",
      "Strong trade value",
      "Collection highlight",
    ],
    tips: "A powerful mid-to-late game brainrot. Its dragon theme may unlock special synergies.",
  },
  {
    id: "ketchuru-and-musturu",
    name: "Ketchuru and Musturu",
    icon: "🧠",
    tag: "Common · Income",
    shortDescription: "A condiment-themed brainrot duo with a modest 42.5M/S base income.",
    description:
      "Ketchuru and Musturu are a common duo brainrot generating 42.5M/S base income. Community-reported as a condiment-themed pair, they are among the more accessible brainrots for new players. Their duo mechanic provides a small synergy bonus that can help early-game progression. Trait and mutation data is unverified.",
    role: "Starter Duo",
    difficulty: "Easy",
    rating: "Common",
    weaponType: "Income, Common, Duo, Food",
    armorType: "Common",
    abilities: [
      "Modest base income",
      "Duo synergy bonus",
      "Easy to obtain",
      "Beginner-friendly",
    ],
    tips: "A solid starter duo. Their low income means you should upgrade to better brainrots as soon as possible.",
  },
];

/* ==============================
   3. Ritual Brainrots
   ============================== */

export const regions: Region[] = [
  {
    id: "la-vacca-saturno-saturnita",
    name: "La Vacca Saturno Saturnita",
    tag: "Ritual",
    levelRange: "Special",
    description:
      "La Vacca Saturno Saturnita is a ritual brainrot unlocked through a hidden player combination. The ritual creates Las Vaquitas Saturnitas, which generate a base income of 750K per second. The ritual requires a 160M cash investment to perform. According to community reports, this ritual requires 3-4 players working together.",
    features: [
      "Ritual creation: Las Vaquitas Saturnitas",
      "Base income: 750K/s",
      "Ritual cost: 160M cash",
      "Requires 3-4 player coordination",
    ],
    pointsOfInterest: [
      "Ritual activation zone",
      "Las Vaquitas Saturnitas spawn point",
      "Team coordination area",
      "Post-ritual reward collection",
    ],
  },
  {
    id: "bombardiro-crocodilos",
    name: "Bombardiro Crocodilos",
    tag: "Ritual",
    levelRange: "Special",
    description:
      "Bombardiro Crocodilos is a ritual brainrot that creates Los Crocodillitos. The ritual grants the Bombardiro trait, which provides a 4x multiplier to income. This makes it one of the most powerful ritual brainrots in the game. Community reports indicate the ritual requires specific player actions and coordination.",
    features: [
      "Ritual creation: Los Crocodillitos",
      "Grants Bombardiro trait",
      "4x income multiplier",
      "Multi-player ritual requirement",
    ],
    pointsOfInterest: [
      "Crocodilos ritual site",
      "Los Crocodillitos spawn area",
      "Trait activation zone",
      "Multiplier effect region",
    ],
  },
  {
    id: "orcalero-orcalas",
    name: "Orcalero Orcalas",
    tag: "Ritual",
    levelRange: "Special",
    description:
      "Orcalero Orcalas is a ritual brainrot that creates Los Orcalitos. The ritual costs 45M cash and produces brainrots with a base income of 235K per second. Community reports suggest this ritual is a mid-tier ritual that is accessible to players who have progressed beyond the early game.",
    features: [
      "Ritual creation: Los Orcalitos",
      "Base income: 235K/s",
      "Ritual cost: 45M cash",
      "Mid-tier ritual accessibility",
    ],
    pointsOfInterest: [
      "Orcalero ritual site",
      "Los Orcalitos spawn area",
      "Cash investment zone",
      "Income collection point",
    ],
  },
  {
    id: "matteo",
    name: "Matteo",
    tag: "Ritual",
    levelRange: "Special",
    description:
      "Matteo is a ritual brainrot that creates Los Matteos. The ritual costs 100M cash and produces brainrots generating 300K per second. The Matteo trait hat is a unique cosmetic reward from this ritual. According to community reports, this is a popular ritual due to its distinctive trait hat reward.",
    features: [
      "Ritual creation: Los Matteos",
      "Base income: 300K/s",
      "Ritual cost: 100M cash",
      "Unique Matteo trait hat reward",
    ],
    pointsOfInterest: [
      "Matteo ritual site",
      "Los Matteos spawn area",
      "Trait hat collection point",
      "Cash investment zone",
    ],
  },
  {
    id: "coco-and-mango",
    name: "Coco and Mango",
    icon: "🧠",
    tag: "Limited",
    levelRange: "Event",
    description:
      "Coco and Mango are a limited brainrot duo generating 33.5M/S base income. Verified through the LOLGA marketplace, they are a fruit-themed brainrot pair that may be available during specific events. Community reports suggest they are sought after by collectors despite their modest income. Trait and acquisition data is pending verification.",
    features: [
      "Base income: 33.5M/S",
      "Fruit-themed duo",
      "Limited availability",
      "Collector appeal",
    ],
    pointsOfInterest: [
      "Event spawn location",
      "Duo synergy zone",
      "Trading hub presence",
      "Collection milestone marker",
    ],
  },
  {
    id: "la-anniversary-grande",
    name: "La Anniversary Grande",
    icon: "🧠",
    tag: "Limited",
    levelRange: "Event",
    description:
      "La Anniversary Grande is a limited brainrot generating 50M/S base income. Verified through the LOLGA marketplace, it is likely an anniversary event brainrot. Community reports suggest it may only be available during the game's anniversary celebrations. Its event-exclusive nature makes it a prized possession for dedicated collectors.",
    features: [
      "Base income: 50M/S",
      "Anniversary event exclusive",
      "Limited availability",
      "Collection prestige",
    ],
    pointsOfInterest: [
      "Anniversary event zone",
      "Limited-time spawn area",
      "Collection showcase spot",
      "Trading market highlight",
    ],
  },
  {
    id: "john-doe",
    name: "John Doe",
    icon: "🧠",
    tag: "Limited",
    levelRange: "Event",
    description:
      "John Doe is a limited brainrot generating 71.2M/S base income. Verified through the LOLGA marketplace, this brainrot has a mysterious theme and an unusual income value. Community reports suggest it may be tied to special events or challenges. Specific trait and mutation data is unverified.",
    features: [
      "Base income: 71.2M/S",
      "Mysterious theme",
      "Unusual income value",
      "Limited availability",
    ],
    pointsOfInterest: [
      "Mystery event zone",
      "Hidden spawn location",
      "Challenge completion area",
      "Trading market niche",
    ],
  },
  {
    id: "cash-or-card",
    name: "Cash or Card",
    icon: "🧠",
    tag: "Limited",
    levelRange: "Event",
    description:
      "Cash or Card is a limited brainrot generating 100M/S base income. Verified through the LOLGA marketplace, this brainrot has a payment-themed design. Community reports suggest it may be available during economy-themed events. Its solid 100M/S income makes it a desirable mid-tier earner for collectors.",
    features: [
      "Base income: 100M/S",
      "Payment-themed design",
      "Solid mid-tier income",
      "Limited availability",
    ],
    pointsOfInterest: [
      "Economy event zone",
      "Limited spawn location",
      "Trading market staple",
      "Income milestone marker",
    ],
  },
];

/* ==============================
   4. Quick Links
   ============================== */

export const journeys: JourneyCard[] = [
  {
    icon: "🏠",
    title: "Home",
    description: "Return to the main page and explore the world of Steal a Brainrot on Roblox",
    href: "/",
  },
  {
    icon: "🧠",
    title: "Brainrots",
    description: "Browse all brainrots, their stats, income rates, traits, and collection strategies",
    href: "/brainrots/",
  },
  {
    icon: "⭐",
    title: "Traits",
    description: "Complete trait reference with effects, multipliers, and how to obtain each trait",
    href: "/traits/",
  },
  {
    icon: "📋",
    title: "Index",
    description: "Track your collection progress with the in-game Index mechanic -- see which brainrots you own and which you still need (note: some brainrots are not in the Index)",
    href: "/catalog/",
  },
  {
    icon: "🏆",
    title: "Best Brainrots",
    description: "Tier rankings and income comparisons of the most valuable brainrots in the game",
    href: "/best-brainrots/",
  },
  {
    icon: "🛡️",
    title: "Admin Abuse",
    description: "Weekly event where admins unleash special powers, modifiers, and exclusive rewards",
    href: "/admin-abuse/",
  },
  {
    icon: "🌮",
    title: "Taco Tuesday",
    description: "Weekly Tuesday event featuring special brainrot drops, bonus income, and limited-time rewards",
    href: "/taco-tuesday/",
  },
  {
    icon: "❓",
    title: "FAQ",
    description: "Frequently asked questions about game mechanics, rebirth, rituals, trading, and more",
    href: "/faq/",
  },
];

/* ==============================
   5. Tools
   ============================== */

export const tools: ToolCard[] = [
  {
    icon: "📖",
    tag: "Database",
    title: "Brainrot Database",
    description: "Complete database of all brainrots with verified income rates, rarity tiers, and community-reported traits",
    href: "/brainrots/",
  },
  {
    icon: "📋",
    tag: "Tracker",
    title: "Index Tracker",
    description: "Track your Index completion progress. See which brainrots you have collected and which are still missing from your collection book",
    href: "/catalog/",
  },
  {
    icon: "🔮",
    tag: "Guide",
    title: "Ritual Guide",
    description: "Comprehensive reference for all known rituals -- hidden combinations, costs, requirements, and rewards",
    href: "/brainrots/",
  },
  {
    icon: "⭐",
    tag: "Reference",
    title: "Trait Reference",
    description: "Complete reference of all traits with their effects, multipliers, and how they interact with different brainrots",
    href: "/traits/",
  },
  {
    icon: "🔄",
    tag: "Calculator",
    title: "Rebirth Calculator",
    description: "Plan your rebirths -- calculate optimal reset timing and compare permanent bonus strategies",
    href: "/best-brainrots/",
  },
  {
    icon: "📅",
    tag: "Calendar",
    title: "Event Calendar",
    description: "Weekly event schedule including Admin Abuse, Taco Tuesday, and special limited-time events",
    href: "/admin-abuse/",
  },
];

/* ==============================
   6. Featured Guides
   ============================== */

export const featuredGuides: GuideItem[] = [
  {
    tag: "Beginner",
    title: "Beginner's Guide to Steal a Brainrot",
    description: "Complete beginner walkthrough: how to start collecting brainrots, understand income rates, and build your first million on Roblox.",
    href: "/brainrots/",
  },
  {
    tag: "Mechanics",
    title: "How the Rebirth System Works",
    description: "Master the Rebirth system. Learn optimal reset timing, permanent bonus strategies, and when to sacrifice progress for long-term gain.",
    href: "/best-brainrots/",
  },
  {
    tag: "Advanced",
    title: "Complete Ritual Guide",
    description: "Every known ritual explained. Hidden combinations, player requirements, costs, and the best rituals to perform for maximum rewards.",
    href: "/brainrots/",
  },
];

/* ==============================
   7. News
   ============================== */

export const news: NewsItem[] = [
  {
    date: "2026-07-04",
    content: "July 4th event live! Limited-time brainrots and double income bonuses active through the weekend. Taco Tuesday special edition announced for July 7.",
  },
  {
    date: "2026-06-15",
    content: "New brainrots added to the Index! Community reports confirm several new additions to the collection book. Ritual adjustments and balance changes rolled out.",
  },
  {
    date: "2026-05-22",
    content: "Admin Abuse event reaches record participation. Over 24 million daily players logged in during the event window. New admin powers teased for next month.",
  },
  {
    date: "2026-04-10",
    content: "Spring update brings trait system overhaul. Rebirth bonuses have been rebalanced based on community feedback. Several new limited brainrots spotted in the marketplace.",
  },
  {
    date: "2026-03-01",
    content: "Steal a Brainrot surpasses 20 million daily active players on Roblox. Developer announces plans for expanded event system and new ritual discoveries.",
  },
];

/* ==============================
   8. FAQs
   ============================== */

export const faqs: FAQ[] = [
  {
    question: "What is Steal a Brainrot?",
    answer:
      "Steal a Brainrot is a free-to-play Roblox collection game where you collect internet meme-themed characters called brainrots. Each brainrot generates passive income measured in millions per second (M/S). The goal is to build the most valuable collection by stealing, trading, and discovering brainrots through events, rituals, and the marketplace.",
  },
  {
    question: "How do I get more brainrots?",
    answer:
      "Brainrots can be obtained through several methods: stealing them during gameplay, trading with other players in the player-to-player marketplace, purchasing them from the LOLGA marketplace, participating in weekly events like Admin Abuse and Taco Tuesday, and completing hidden rituals that require coordinated teamwork with 3-4 players.",
  },
  {
    question: "What is the Rebirth system?",
    answer:
      "The Rebirth system allows you to reset your progress in exchange for permanent bonuses. When you rebirth, you lose your current brainrots and cash but gain permanent multipliers that boost your income in future runs. According to community reports, multiple rebirths stack these bonuses, making each subsequent playthrough faster and more profitable.",
  },
  {
    question: "What is the Index?",
    answer:
      "The Index is an in-game collection book that tracks which brainrots you have owned. It serves as a completion log for collectors. Community reports indicate that some brainrots are NOT included in the Index, making them hidden or secret brainrots that only dedicated collectors will discover. Completing the Index is a major long-term goal for many players.",
  },
  {
    question: "What are rituals?",
    answer:
      "Rituals are hidden player combinations that require 3-4 players to perform specific actions together. When completed correctly, rituals create special brainrots with unique traits and income rates. Verified rituals include La Vacca Saturno Saturnita (creates Las Vaquitas Saturnitas at 750K/s), Bombardiro Crocodilos (creates Los Crocodillitos with 4x multiplier), Orcalero Orcalas (creates Los Orcalitos at 235K/s), and Matteo (creates Los Matteos at 300K/s).",
  },
  {
    question: "How does trading work?",
    answer:
      "Trading is player-to-player and takes place in the in-game marketplace. Players can list brainrots for sale, make offers on other players' collections, and negotiate trades directly. Brainrot values fluctuate based on rarity, income rate, traits, mutations, and market demand. Community reports indicate that the LOLGA marketplace is the primary external trading hub.",
  },
  {
    question: "What is Admin Abuse?",
    answer:
      "Admin Abuse is a weekly event where game administrators activate special powers and modifiers that affect all players. During Admin Abuse, unusual effects may occur such as random brainrot spawns, income multipliers, and exclusive rewards. It is one of the most popular events and draws large numbers of players. The event schedule is announced in advance.",
  },
  {
    question: "What is Taco Tuesday?",
    answer:
      "Taco Tuesday is a weekly event held every Tuesday. During the event, special brainrots with exclusive traits are available, bonus income rates are active, and limited-time rewards can be earned. Community reports suggest it is the best time for new players to boost their early-game progression. The event is free for all players to participate in.",
  },
  {
    question: "How do traits work?",
    answer:
      "Traits are special attributes that modify a brainrot's income through multipliers. For example, the Bombardiro trait provides a 4x income multiplier. According to community reports, traits can be obtained through rituals, events, trading, and possibly through the Rebirth system. The exact mechanics of trait acquisition and stacking are still being documented by the community and should be considered partially unverified.",
  },
  {
    question: "What are mutations?",
    answer:
      "Mutations are special variants of brainrots that may have altered appearance, income rates, or traits. Community reports describe mutations as rare transformations that can occur under specific conditions. The exact mutation mechanics are not fully verified and remain a topic of active community research. Some players report that mutations can dramatically increase a brainrot's value.",
  },
  {
    question: "How do I increase my income?",
    answer:
      "Income can be increased through several verified methods: collecting higher-earning brainrots (the best verified earner is Burguro And Fryuro at 675M/S), performing rebirths to gain permanent multipliers, acquiring traits that boost income (such as the Bombardiro trait's 4x multiplier), and participating in events that offer temporary income bonuses. Stacking multiple methods is the most effective strategy.",
  },
  {
    question: "What is the best brainrot?",
    answer:
      "The best brainrot depends on your playstyle and goals. For pure income, Burguro And Fryuro is the highest verified earner at 675M/S base income. La Secret Combinasion (375M/S) and Dragon Cannelloni (250M/S) are also top earners. For rituals, Bombardiro Crocodilos provides a 4x multiplier. For collection completion, limited brainrots like La Anniversary Grande and John Doe are highly sought after. Community opinions vary on which brainrot is truly the best overall.",
  },
  {
    question: "How does the in-game economy work?",
    answer:
      "The in-game economy is based on cash per second (M/S) generation. Each brainrot you own generates income continuously. Your total income rate is the sum of all your brainrots' base rates multiplied by any active traits and rebirth bonuses. Cash is used to purchase new brainrots, perform rituals, and participate in the trading economy. The economy is entirely player-driven with no pay-to-win mechanics.",
  },
  {
    question: "Is the game free?",
    answer:
      "Yes, Steal a Brainrot is completely free-to-play on Roblox. There is no cost to download or play the game. All brainrots can be obtained through gameplay, trading, and events without spending real money. The game is accessible on any device that supports Roblox, including PC, mobile, tablet, and console.",
  },
  {
    question: "How do I participate in events?",
    answer:
      "Events like Admin Abuse and Taco Tuesday occur on a weekly schedule. To participate, simply join the game during the scheduled event time. Community reports indicate that event times are announced in advance through the game's Roblox page and community channels. No special requirements are needed -- all players can join events for free. Some limited brainrots are only available during specific event windows.",
  },
];

/* ==============================
   9. Trait Categories
   ============================== */

export const weaponTypes: WeaponType[] = [
  {
    name: "Income Boost",
    description: "Increases base income generation. The most common and essential trait category. Community-reported.",
    classes: ["garama-and-madundung", "cerberus", "spaghetti-tualetti", "ketchuru-and-musturu"],
  },
  {
    name: "Viral",
    description: "Amplifies income spikes and spread rate. Popular for event-based strategies. Community-reported.",
    classes: ["la-secret-combinasion", "dragon-cannelloni", "capitano-moby"],
  },
  {
    name: "Legendary",
    description: "Massive stat boosts reserved for the rarest brainrots. Extremely hard to obtain. Community-reported.",
    classes: ["la-secret-combinasion", "burguro-and-fryuro"],
  },
  {
    name: "Meme",
    description: "Enhances community engagement and trade visibility. Fun and unpredictable effects. Community-reported.",
    classes: ["spaghetti-tualetti", "ketchuru-and-musturu", "garama-and-madundung"],
  },
  {
    name: "Cursed",
    description: "Unpredictable effects with high risk and high reward. Not for the faint of heart. Community-reported.",
    classes: ["cerberus", "dragon-cannelloni"],
  },
  {
    name: "Rebirth",
    description: "Scales with rebirth count. Becomes more powerful as you reset and progress. Community-reported.",
    classes: ["garama-and-madundung", "capitano-moby", "spaghetti-tualetti"],
  },
  {
    name: "Ritual",
    description: "Unlocked through completing hidden rituals. Grants unique effects tied to ritual brainrots. Community-reported.",
    classes: ["la-secret-combinasion", "burguro-and-fryuro"],
  },
  {
    name: "Growth",
    description: "Gradually increases income over time. Rewards patient, long-term collectors. Community-reported.",
    classes: ["capitano-moby", "ketchuru-and-musturu"],
  },
  {
    name: "Charisma",
    description: "Boosts trade value and negotiation power. Essential for marketplace-focused players. Community-reported.",
    classes: ["dragon-cannelloni", "cerberus"],
  },
  {
    name: "Event",
    description: "Only active during special events. Provides temporary but powerful bonuses. Community-reported.",
    classes: ["la-secret-combinasion", "burguro-and-fryuro", "cerberus"],
  },
];

/* ==============================
   10. Brainrot-Trait Map
   ============================== */

export const classWeaponMap: { class: string; weapons: string[] }[] = [
  { class: "Garama and Madundung", weapons: ["Income Boost", "Meme", "Rebirth"] },
  { class: "Cerberus", weapons: ["Income Boost", "Cursed", "Charisma"] },
  { class: "La Secret Combinasion", weapons: ["Viral", "Legendary", "Ritual"] },
  { class: "Spaghetti Tualetti", weapons: ["Income Boost", "Meme", "Rebirth"] },
  { class: "Capitano Moby", weapons: ["Viral", "Rebirth", "Growth"] },
  { class: "Burguro And Fryuro", weapons: ["Legendary", "Ritual", "Event"] },
  { class: "Dragon Cannelloni", weapons: ["Viral", "Cursed", "Charisma"] },
  { class: "Ketchuru and Musturu", weapons: ["Income Boost", "Meme", "Growth"] },
];

/* ==============================
   11. Top Brainrots
   ============================== */

export const recommendedWeapons: Weapon[] = [
  {
    name: "Burguro And Fryuro",
    type: "Legendary",
    class: "Ultimate",
    damage: "S",
    speed: "B",
    range: "Long",
    description: "The highest verified earner at 675M/S base income. The ultimate goal for serious collectors.",
  },
  {
    name: "La Secret Combinasion",
    type: "Legendary",
    class: "High-value",
    damage: "S",
    speed: "B",
    range: "Long",
    description: "A legendary earner at 375M/S base income. A prestigious addition to any collection.",
  },
  {
    name: "Dragon Cannelloni",
    type: "Rare",
    class: "Upper-tier",
    damage: "A",
    speed: "A",
    range: "Medium",
    description: "A powerful 250M/S earner with dragon-themed prestige. Strong mid-to-late game option.",
  },
  {
    name: "Cerberus",
    type: "Rare",
    class: "Mid-tier",
    damage: "A",
    speed: "A",
    range: "Medium",
    description: "A solid 175M/S earner that bridges the gap between common and legendary brainrots.",
  },
  {
    name: "Celestial Pegasus",
    type: "Rare",
    class: "Mid-tier",
    damage: "A",
    speed: "B",
    range: "Medium",
    description: "A 175M/S earner verified through the LOLGA marketplace. Information pending verification.",
  },
  {
    name: "Popcuru and Fizzuru",
    type: "Rare",
    class: "Mid-tier",
    damage: "A",
    speed: "A",
    range: "Medium",
    description: "A 170M/S duo brainrot with strong synergy. Community-reported as a solid mid-tier earner.",
  },
  {
    name: "Capitano Moby",
    type: "Rare",
    class: "Mid-tier",
    damage: "B",
    speed: "A",
    range: "Medium",
    description: "A reliable 160M/S earner with maritime theme. A good stepping stone to legendary brainrots.",
  },
  {
    name: "Cooki and Milki",
    type: "Rare",
    class: "Mid-tier",
    damage: "B",
    speed: "A",
    range: "Medium",
    description: "A 155M/S duo brainrot verified through the LOLGA marketplace. Solid mid-tier income earner.",
  },
];

/* ==============================
   12. Enemies & Threats
   ============================== */

export const bosses: Boss[] = [
  {
    name: "Trade Scammer",
    location: "Trading Hub (Community speculation)",
    level: "Common",
    description: "A player threat that attempts unfair trades. Always verify trade values before accepting. Community speculation based on player reports.",
    type: "normal",
  },
  {
    name: "Income Drain",
    location: "All Zones (Community speculation)",
    level: "Medium",
    description: "A temporary debuff that reduces income generation. Players report it may occur during certain events or after failed rituals. Unverified.",
    type: "normal",
  },
  {
    name: "Ritual Disruptor",
    location: "Ritual Zones (Community speculation)",
    level: "Medium",
    description: "A mechanic that can interrupt rituals if players do not coordinate correctly. Community reports suggest precise timing is required to avoid disruption. Unverified.",
    type: "normal",
  },
  {
    name: "Collection Wipe",
    location: "Rebirth Chamber (Community speculation)",
    level: "High",
    description: "The rebirth mechanic itself -- resets your collection in exchange for permanent bonuses. Players report this is a calculated risk. Information pending verification.",
    type: "normal",
  },
  {
    name: "Event Miss",
    location: "All Zones (Community speculation)",
    level: "High",
    description: "Missing a limited-time event means losing access to exclusive brainrots. Community reports suggest some event brainrots never return. Unverified.",
    type: "elite",
  },
  {
    name: "Market Crash",
    location: "Trading Hub (Community speculation)",
    level: "High",
    description: "A market event where brainrot values temporarily drop. Players report this can be devastating or opportunistic depending on your position. Unverified.",
    type: "elite",
  },
  {
    name: "Admin Abuse Wave",
    location: "All Zones (Community speculation)",
    level: "Boss",
    description: "During Admin Abuse events, admins can unleash chaotic effects across the server. Players report random income changes, forced trades, and unexpected spawns. Unverified.",
    type: "world",
  },
  {
    name: "The Great Reset",
    location: "All Zones (Community speculation)",
    level: "Boss",
    description: "A rumored server-wide event that resets all collections. Community speculation suggests this may be a myth, but some players claim to have witnessed it. Completely unverified.",
    type: "world",
  },
];

export const dungeons: Dungeon[] = [
  {
    name: "Starter Zone",
    level: "Common",
    description: "The beginner area where new players learn the basics of brainrot collection. Easy-to-obtain brainrots and simple mechanics. Partially verified based on community reports.",
    bosses: ["Trade Scammer"],
    rewards: ["Common Brainrots", "Starter Income", "Basic Tutorial Completion"],
  },
  {
    name: "Trading Hub",
    level: "Medium",
    description: "The central marketplace where players trade brainrots. High activity during peak hours. Player-to-player trading is the primary mechanic. Partially verified.",
    bosses: ["Income Drain", "Market Crash"],
    rewards: ["Rare Brainrots", "Trading Profit", "Market Knowledge"],
  },
  {
    name: "Ritual Chamber",
    level: "Hard",
    description: "A hidden area where 3-4 players can perform rituals to unlock special brainrots. Requires coordination and cash investment. Partially verified through ritual documentation.",
    bosses: ["Ritual Disruptor"],
    rewards: ["Ritual Brainrots", "Unique Traits", "Ritual-exclusive Rewards"],
  },
  {
    name: "Rebirth Altar",
    level: "Hard",
    description: "The location where players perform rebirths to gain permanent bonuses. The decision to rebirth is permanent and cannot be undone. Partially verified.",
    bosses: ["Collection Wipe"],
    rewards: ["Permanent Bonuses", "Income Multipliers", "Rebirth-exclusive Traits"],
  },
];

/* ==============================
   13. Playstyles
   ============================== */

export const professions: Profession[] = [
  {
    name: "Income Grinder",
    icon: "💰",
    description: "Focus on acquiring the highest-earning brainrots and maximizing income per second. Prioritize Burguro And Fryuro and La Secret Combinasion. Community-reported playstyle.",
  },
  {
    name: "Completionist",
    icon: "📋",
    description: "Aim to complete the Index by collecting every brainrot, including hidden ones not in the collection book. A long-term goal requiring dedication. Community-reported playstyle.",
  },
  {
    name: "Trader",
    icon: "🤝",
    description: "Master the player-to-player marketplace. Buy low, sell high, and profit from market fluctuations. Skilled traders can acquire rare brainrots without grinding. Community-reported playstyle.",
  },
  {
    name: "Ritual Master",
    icon: "🔮",
    description: "Discover and perform all hidden rituals. Coordinate with other players to unlock ritual-exclusive brainrots like Bombardiro Crocodilos and Matteo. Community-reported playstyle.",
  },
  {
    name: "Rebirth Speedrunner",
    icon: "🔄",
    description: "Optimize rebirth cycles to stack permanent bonuses as quickly as possible. Sacrifice short-term gains for exponential long-term growth. Community-reported playstyle.",
  },
  {
    name: "Event Hunter",
    icon: "🎯",
    description: "Focus on limited-time events like Admin Abuse and Taco Tuesday. Collect exclusive event brainrots that may never return. Community-reported playstyle.",
  },
];

/* ==============================
   14. System Requirements
   ============================== */

export const systemRequirements: SystemRequirement[] = [
  {
    category: "Requirements",
    items: [
      { label: "Platform", value: "Roblox (any supported device)" },
      { label: "Devices", value: "PC, Mac, iOS, Android, Xbox, PlayStation" },
      { label: "Internet", value: "Broadband internet connection required" },
      { label: "Roblox Account", value: "Free Roblox account required" },
      { label: "Storage", value: "Roblox client installation (~500 MB)" },
      { label: "Age Rating", value: "All ages (Roblox platform rating)" },
    ],
  },
];

/* ==============================
   15. Release History
   ============================== */

export const releaseDates: ReleaseDateInfo[] = [
  {
    phase: "Initial Launch",
    date: "2024",
    description: "Steal a Brainrot launched on Roblox with basic brainrot collection, trading mechanics, and the first set of brainrots. The game began building its community on the Roblox platform.",
  },
  {
    phase: "Growth Phase",
    date: "2025",
    description: "The game gained significant traction on Roblox with the introduction of the Rebirth system, rituals, and weekly events. Daily player counts grew rapidly as word spread through the Roblox community.",
  },
  {
    phase: "Peak Popularity",
    date: "2026",
    description: "Steal a Brainrot reached approximately 24 million daily players on Roblox. The Index system, expanded trait mechanics, and regular events solidified its position as a top Roblox game.",
  },
  {
    phase: "Current Era",
    date: "2026 Q3",
    description: "Ongoing updates continue to add new brainrots, rituals, and events. The community remains highly active with a strong trading economy and regular content releases.",
  },
];

/* ==============================
   16. Roadmap
   ============================== */

export const roadmap: RoadmapItem[] = [
  {
    phase: "Released",
    title: "Core Features",
    items: [
      "Brainrot collection system with 100+ brainrots",
      "Income generation mechanics (millions per second)",
      "Player-to-player trading marketplace",
      "Rebirth system with permanent bonuses",
      "Index collection book for tracking progress",
      "Ritual system with hidden player combinations",
      "Weekly events: Admin Abuse and Taco Tuesday",
      "Trait and mutation system",
    ],
    status: "completed",
  },
  {
    phase: "Current Phase",
    title: "Ongoing Updates (Community speculation)",
    items: [
      "New brainrots being added regularly",
      "Trait balancing and meta adjustments",
      "Trading economy improvements",
      "New ritual discoveries being documented",
      "Event system expansions",
      "Community feedback-driven changes",
    ],
    status: "in-progress",
  },
  {
    phase: "Planned",
    title: "Future Updates (Community speculation)",
    items: [
      "Additional ritual brainrot combinations",
      "Expanded trait and mutation mechanics",
      "New event types and limited brainrots",
      "Collection leaderboard improvements",
      "Enhanced trading interface",
      "More Index categories and tracking",
    ],
    status: "planned",
  },
  {
    phase: "Long-term Vision",
    title: "Community Wishlist (Community speculation)",
    items: [
      "Guild or clan system for group play",
      "Cross-server trading capabilities",
      "Achievement and badge system",
      "Seasonal battle pass mechanics",
      "Custom brainrot showcase galleries",
      "Expanded lore and backstory content",
    ],
    status: "planned",
  },
];