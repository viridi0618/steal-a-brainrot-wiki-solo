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
  subtitle: "Collect. Trade. Go Viral.",
  description:
    'Steal a Brainrot is a fast-paced collection game where you hunt down the internet\'s most viral brainrots (memes, trends, and cursed content). Collect rare brainrots, breed mutations, unlock legendary traits, and build the ultimate viral empire. Trade with other collectors, climb the leaderboard, and prove you have the most brainrot of them all.\n\nExplore themed zones, discover hidden brainrots, and master the art of the steal. With hundreds of brainrots to collect, infinite trait combinations, and a thriving trading economy, every session is a new chance to go viral.',
  heroTitle: "Steal the Best Brainrots",
  heroSubtitle:
    "Collect viral brainrots, breed rare mutations, and dominate the trading economy. Build your ultimate brainrot collection and go viral.",
  heroStats: [
    { label: "Brainrots", value: "200+" },
    { label: "Traits", value: "50+" },
    { label: "Zones", value: "12 Unique" },
    { label: "Players", value: "1M+" },
  ],
  quickFacts: [
    { label: "Developer", value: "Brainrot Studios" },
    { label: "Genre", value: "Collection / Trading" },
    { label: "Platform", value: "PC & Mobile" },
    { label: "Players", value: "Online Multiplayer" },
    { label: "Price", value: "Free to Play" },
    { label: "Rating", value: "4.8/5 (1M+ Reviews)" },
    { label: "Version", value: "v1.2.0" },
    { label: "Community", value: "250K+ Members" },
  ],
};

/* ==============================
   2. Game Modes
   ============================== */

export const classes: ClassData[] = [
  { id:"skibidi", name:"Skibidi", icon:"🚽", tag:"Viral · Common", shortDescription:"The toilet-headed meme icon. High meme value, decent income generation.", description:"Skibidi is a foundational brainrot from the Skibidi Toilet meme series. Known for its catchy beat and absurd premise, it generates steady viral income and pairs well with Goofy Ahh traits.", role:"Viral Generator", difficulty:"Easy", rating:"Popular", weaponType:"Viral, Meme, Cursed", armorType:"Common", abilities:["Steady income","Viral boost","Meme synergy","Easy to trade"], tips:"Pair with Ohio for maximum viral potential. Great starter brainrot." },
  { id:"rizzler", name:"Rizzler", icon:"😏", tag:"Rare · Charisma", shortDescription:"The ultimate charisma brainrot. Boosts trade value of nearby brainrots.", description:"The Rizzler radiates unmatched charisma. Its presence increases the value of all brainrots in your collection. High demand in trading markets and essential for collection value optimization.", role:"Value Booster", difficulty:"Medium", rating:"Rare", weaponType:"Rare, Viral, Legendary", armorType:"Rare", abilities:["Trade value boost","Collection synergy","Market demand","Charisma aura"], tips:"Keep near your most valuable brainrots. Essential for trading." },
  { id:"ohio", name:"Ohio", icon:"🌽", tag:"Cursed · Legendary", shortDescription:"Only in Ohio. Extremely rare with bizarre mutation potential.", description:"Ohio represents the epitome of cursed brainrot energy. Its mutations are unpredictable and often game-breaking. Collectors covet Ohio for its rarity and the sheer chaos it brings to any collection.", role:"Chaos Generator", difficulty:"Hard", rating:"Legendary", weaponType:"Cursed, Legendary, Meme", armorType:"Legendary", abilities:["Random mutations","Chaos events","High rarity","Unpredictable income"], tips:"Expect the unexpected. Ohio mutations can double or halve your income." },
  { id:"fanum-tax", name:"Fanum Tax", icon:"🍔", tag:"Rare · Income", shortDescription:"Skims a percentage from all trades. Passive income king.", description:"Fanum Tax takes a cut from every trade in your collection. The more brainrots you have, the more it earns. Essential for passive income strategies and long-term collection growth.", role:"Passive Income", difficulty:"Easy", rating:"Essential", weaponType:"Rare, Viral", armorType:"Rare", abilities:["Passive income","Trade skimming","Scales with collection","Compound growth"], tips:"Build a large collection to maximize returns. Pairs well with Skibidi." },
  { id:"gyatt", name:"Gyatt", icon:"👀", tag:"Viral · Rare", shortDescription:"Massive viral potential. Eye-catching and attention-grabbing.", description:"Gyatt commands attention. Its viral potential is among the highest in the game, making it a favorite for quick flips and trending moments. High risk, high reward brainrot with explosive income spikes.", role:"Viral Spike", difficulty:"Medium", rating:"Trending", weaponType:"Viral, Rare, Meme", armorType:"Rare", abilities:["Viral spikes","Attention grabbing","Quick flips","Trending bonus"], tips:"Sell during viral spikes. Hold for maximum profit." },
  { id:"sigma", name:"Sigma", icon:"🐺", tag:"Legendary · Solo", shortDescription:"The lone wolf brainrot. Works best alone, massive individual value.", description:"Sigma thrives in isolation. Its value increases when it's the only active brainrot in your collection. A high-risk, high-reward brainrot for collectors who prefer quality over quantity.", role:"Solo Value", difficulty:"Hard", rating:"Legendary", weaponType:"Legendary, Rare", armorType:"Legendary", abilities:["Solo bonus","Individual value","Lone wolf aura","Anti-synergy"], tips:"Keep your collection small. Sigma hates company." },
  { id:"mewing", name:"Mewing", icon:"🗿", tag:"Rare · Growth", shortDescription:"Slow but steady growth. Looksmaxxing for your collection.", description:"Mewing provides consistent, gradual growth to your collection's value. It's the patient collector's best friend. Over time, Mewing can transform common brainrots into rare gems.", role:"Growth Engine", difficulty:"Easy", rating:"Reliable", weaponType:"Rare, Viral", armorType:"Rare", abilities:["Gradual growth","Value increase","Collection looksmaxxing","Consistent returns"], tips:"Patience is key. Mewing rewards long-term holding." },
  { id:"goofy-ahh", name:"Goofy Ahh", icon:"🤪", tag:"Common · Fun", shortDescription:"Pure chaotic fun. Unpredictable but endlessly entertaining.", description:"Goofy Ahh is the wildcard of brainrots. Its behavior is completely unpredictable, generating random events, surprise income bursts, and hilarious mutations. Perfect for collectors who enjoy the chaos.", role:"Wildcard", difficulty:"Easy", rating:"Fun", weaponType:"Common, Meme, Cursed", armorType:"Common", abilities:["Random events","Surprise income","Fun mutations","Entertainment value"], tips:"Don't take it too seriously. Goofy Ahh is about having fun." },
];

/* ==============================
   3. Maps
   ============================== */

export const regions: Region[] = [
  {
    id: "skibidi-toilet",
    name: "Skibidi Toilet",
    tag: "Viral",
    levelRange: "Common",
    description:
      "The Skibidi Toilet is a foundational brainrot from the viral Skibidi Toilet meme series. Known for its hypnotic beat and absurd toilet-headed characters, it generates steady viral income and is a must-have for any starter collection.",
    features: [
      "Hypnotic viral beat",
      "Steady income generation",
      "Meme synergy potential",
      "Easy to trade and collect",
    ],
    pointsOfInterest: [
      "Toilet Dimension — Main spawn zone",
      "Speaker Tower — Viral boost location",
      "Camera Head Alley — Rare variant spawn",
      "Flush Chamber — Mutation zone",
    ],
  },
  {
    id: "rizzler-zone",
    name: "Rizzler Zone",
    tag: "Rare",
    levelRange: "Rare",
    description:
      "The Rizzler Zone is where charisma reigns supreme. This brainrot radiates pure confidence and boosts the trade value of all brainrots in your collection. High demand in trading markets worldwide.",
    features: [
      "Charisma aura effect",
      "Trade value multiplier",
      "Collection synergy boost",
      "High market demand",
    ],
    pointsOfInterest: [
      "Rizz Central — Main trading hub",
      "Charisma Chamber — Value boost area",
      "Smooth Operator Lane — Rare spawn point",
      "W Marketplace — Trading post",
    ],
  },
  {
    id: "ohio-realm",
    name: "Ohio Realm",
    tag: "Cursed",
    levelRange: "Legendary",
    description:
      "Only in Ohio. This cursed realm is home to the most bizarre and unpredictable brainrots. Mutations here are chaotic and game-breaking. Only the bravest collectors dare to venture into the Ohio Realm.",
    features: [
      "Unpredictable mutations",
      "Chaos events",
      "Extreme rarity",
      "High risk, high reward",
    ],
    pointsOfInterest: [
      "Cornfield Entrance — Only way in",
      "Swamp of Despair — Mutation ground zero",
      "Abandoned Gas Station — Trading post",
      "Ohio Final Boss Arena — Ultimate challenge",
    ],
  },
  {
    id: "fanum-tax-office",
    name: "Fanum Tax Office",
    tag: "Rare",
    levelRange: "Rare",
    description:
      "The Fanum Tax Office is where passive income flows. This brainrot skims a percentage from every trade in your collection. The more brainrots you own, the more it earns. Essential for any serious collector.",
    features: [
      "Passive income generation",
      "Trade skimming mechanic",
      "Scales with collection size",
      "Compound growth potential",
    ],
    pointsOfInterest: [
      "Tax Counter — Main collection point",
      "Burger Vault — Rare loot storage",
      "Audit Room — Income optimization",
      "Streamer Lounge — Bonus event zone",
    ],
  },
  {
    id: "gyatt-district",
    name: "Gyatt District",
    tag: "Viral",
    levelRange: "Rare",
    description:
      "The Gyatt District commands attention. Its viral potential is unmatched, making it a hotspot for quick flips and trending moments. High risk, high reward brainrot territory with explosive income spikes.",
    features: [
      "Explosive viral spikes",
      "Attention-grabbing events",
      "Quick flip opportunities",
      "Trending bonus system",
    ],
    pointsOfInterest: [
      "Lookout Point — Best viewing spot",
      "Trending Tower — Viral spike center",
      "Flip Market — Quick trade zone",
      "Influencer Alley — Bonus multiplier area",
    ],
  },
  {
    id: "sigma-sanctuary",
    name: "Sigma Sanctuary",
    tag: "Legendary",
    levelRange: "Legendary",
    description:
      "The Sigma Sanctuary is for lone wolves only. This brainrot thrives in isolation, with value increasing when it's the only active brainrot in your collection. Quality over quantity is the Sigma way.",
    features: [
      "Solo value bonus",
      "Individual power scaling",
      "Lone wolf aura",
      "Anti-synergy mechanics",
    ],
    pointsOfInterest: [
      "Wolf's Den — Solo meditation spot",
      "Grindset Peak — Value maximization zone",
      "Isolation Chamber — Power-up area",
      "Moonlit Clearing — Rare mutation spawn",
    ],
  },
  {
    id: "mewing-academy",
    name: "Mewing Academy",
    tag: "Rare",
    levelRange: "Rare",
    description:
      "The Mewing Academy is where brainrots go to looksmax. It provides consistent, gradual growth to your collection's value. The patient collector's paradise, where common brainrots transform into rare gems over time.",
    features: [
      "Gradual value growth",
      "Collection looksmaxxing",
      "Consistent returns",
      "Long-term investment",
    ],
    pointsOfInterest: [
      "Jawline Gym — Growth training zone",
      "Bone Structure Hall — Permanent buff area",
      "Posture Dojo — Alignment training",
      "Ascension Chamber — Final transformation",
    ],
  },
  {
    id: "goofy-ahh-zone",
    name: "Goofy Ahh Zone",
    tag: "Common",
    levelRange: "Common",
    description:
      "The Goofy Ahh Zone is pure chaotic fun. Brainrots here are completely unpredictable, generating random events, surprise income bursts, and hilarious mutations. The perfect place for collectors who just want to have a good time.",
    features: [
      "Random event generation",
      "Surprise income bursts",
      "Hilarious mutations",
      "Pure entertainment value",
    ],
    pointsOfInterest: [
      "Chaos Corner — Random event hub",
      "Laughter Lounge — Bonus income zone",
      "Meme Factory — Mutation crafting area",
      "Silly Street — Rare goofy spawns",
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
    description: "Return to the main page and explore the world of Steal a Brainrot",
    href: "/",
  },
  {
    icon: "🧠",
    title: "Brainrots",
    description: "Browse all brainrots, their stats, traits, mutations, and collection tips",
    href: "/brainrots/",
  },
  {
    icon: "⭐",
    title: "Traits",
    description: "Complete trait database with effects, multipliers, and how to obtain them",
    href: "/traits/",
  },
  {
    icon: "📋",
    title: "Index",
    description: "Full alphabetical index of every brainrot and trait in the game",
    href: "/catalog/",
  },
  {
    icon: "🏆",
    title: "Best Brainrots",
    description: "Tier list and rankings of the most valuable and powerful brainrots",
    href: "/best-brainrots/",
  },
  {
    icon: "🛡️",
    title: "Admin Abuse",
    description: "Report admin abuse, unfair trades, and community guideline violations",
    href: "/admin-abuse/",
  },
  {
    icon: "🌮",
    title: "Taco Tuesday",
    description: "Weekly community event featuring special brainrot drops and bonuses",
    href: "/taco-tuesday/",
  },
  {
    icon: "❓",
    title: "FAQ",
    description: "Frequently asked questions about game mechanics, trading, mutations, and more",
    href: "/faq/",
  },
];

/* ==============================
   5. Tools
   ============================== */

export const tools: ToolCard[] = [
  {
    icon: "📖",
    tag: "Reference",
    title: "Brainrot Wiki",
    description: "Complete Steal a Brainrot wiki covering all brainrots, traits, mutations, and trading mechanics",
    href: "/wiki",
  },
  {
    icon: "📋",
    tag: "Database",
    title: "Brainrot Index",
    description: "Searchable index of every brainrot with filters for rarity, value, traits, and mutations",
    href: "/catalog",
  },
  {
    icon: "🏆",
    tag: "Ranking",
    title: "Tier List",
    description: "Community-voted tier rankings for all brainrots based on value, rarity, and meta performance",
    href: "/tier-list/",
  },
  {
    icon: "⭐",
    tag: "Database",
    title: "Trait Database",
    description: "Complete database of all traits with effects, multipliers, and acquisition methods",
    href: "/traits/",
  },
  {
    icon: "🧬",
    tag: "Guide",
    title: "Mutation Guide",
    description: "How to breed mutations, combine traits, and create the rarest brainrot variants",
    href: "/guides/mutations",
  },
  {
    icon: "😂",
    tag: "Fun",
    title: "Memes",
    description: "Community brainrot memes and humorous content from the Steal a Brainrot community",
    href: "/guides/memes",
  },
];

/* ==============================
   6. Featured Guides
   ============================== */

export const featuredGuides: GuideItem[] = [
  {
    tag: "Beginner",
    title: "How to Start Your Brainrot Collection",
    description: "Complete beginner guide: how to find your first brainrots, understand rarity tiers, and build a valuable collection from scratch.",
    href: "/guides/beginners",
  },
  {
    tag: "Trading",
    title: "Brainrot Trading Guide -- Maximize Your Profits",
    description: "Master the trading economy. Learn value assessment, negotiation tactics, and how to spot undervalued brainrots in the market.",
    href: "/guides/trading",
  },
  {
    tag: "Meta",
    title: "Best Brainrot Tier List (v1.2.0)",
    description: "Complete tier ranking of all brainrots. Performance analysis, synergy combinations, and recommendations for every playstyle.",
    href: "/guides/tier-list",
  },
];

/* ==============================
   7. News
   ============================== */

export const news: NewsItem[] = [
  {
    date: "2026-06-28",
    content: "Steal a Brainrot v1.2.0 released! New brainrots, traits, mutation system overhaul, and trading economy improvements.",
  },
  {
    date: "2026-05-15",
    content: "Taco Tuesday event returns with exclusive brainrot drops. New Ohio Realm zone added with cursed brainrot variants.",
  },
  {
    date: "2026-04-20",
    content: "Community milestone reached: 250,000 Discord members! Thank you for your continued support and brainrot collecting.",
  },
];

/* ==============================
   8. FAQs
   ============================== */

export const faqs: FAQ[] = [
  {
    question: "What is Steal a Brainrot?",
    answer:
      "Steal a Brainrot is a free-to-play collection and trading game where you collect internet brainrots (memes, viral content, and cursed trends). Build your collection, breed mutations, unlock traits, and trade with other players to become the ultimate brainrot collector.",
  },
  {
    question: "How do I get my first brainrot?",
    answer:
      "New players start with a free Common brainrot after completing the tutorial. You can also find brainrots by exploring zones, completing daily challenges, participating in Taco Tuesday events, and trading with other players in the marketplace.",
  },
  {
    question: "What are brainrot rarities?",
    answer:
      "Brainrots come in five rarity tiers: Common (gray), Uncommon (green), Rare (blue), Legendary (purple), and Cursed (red). Higher rarity brainrots have better stats, more valuable traits, and higher trade value. Cursed brainrots are the rarest and most unpredictable.",
  },
  {
    question: "What are traits?",
    answer:
      "Traits are special attributes that modify a brainrot's behavior and value. Traits include Viral (boosts income), Meme (increases trade value), Cursed (random effects), Legendary (massive stat boosts), and more. Each brainrot can have up to 3 traits. Traits can be bred, mutated, or obtained through special events.",
  },
  {
    question: "What are mutations?",
    answer:
      "Mutations are rare transformations that can occur when breeding brainrots or through special events. Mutations can change a brainrot's appearance, stats, traits, and even rarity. Some mutations are highly sought after and can dramatically increase a brainrot's value. The Ohio Realm has the highest mutation rate.",
  },
  {
    question: "How does trading work?",
    answer:
      "Trading is done through the marketplace. Players can list brainrots for sale, make offers on other players' collections, and negotiate trades. The Fanum Tax brainrot skims a small percentage from all trades. Values fluctuate based on rarity, traits, mutations, and market demand.",
  },
  {
    question: "What is 'viral income'?",
    answer:
      "Viral income is the passive currency your brainrots generate over time. Higher rarity and better traits increase viral income. Some brainrots like Skibidi and Fanum Tax specialize in income generation. Viral income can be used to purchase new brainrots, trait boosters, and mutation catalysts.",
  },
  {
    question: "What is Taco Tuesday?",
    answer:
      "Taco Tuesday is a weekly community event held every Tuesday. During the event, special brainrots with exclusive traits are available, mutation rates are doubled, and bonus viral income is awarded. It's the best time to hunt for rare brainrots and complete your collection.",
  },
  {
    question: "How do I breed brainrots?",
    answer:
      "Breeding requires two compatible brainrots and a Breeding Pass. Place both brainrots in the Breeding Chamber and wait for the incubation period. The offspring inherits traits from both parents and has a chance to develop mutations. Breeding higher rarity brainrots takes longer but yields better results.",
  },
  {
    question: "What is the rarest brainrot?",
    answer:
      "Currently, the Ohio Realm brainrot is considered the rarest due to its Cursed rarity and unpredictable mutation potential. The Sigma brainrot in its fully mutated form is also extremely rare. Rarity changes with updates and events, so check the Tier List for the latest rankings.",
  },
  {
    question: "Can I lose my brainrots?",
    answer:
      "Your brainrots are permanently stored in your collection and cannot be lost through normal gameplay. However, trading them away, selling them on the marketplace, or using them in risky breeding experiments (which have a small chance of failure) can result in losing that specific brainrot. Always think carefully before trading.",
  },
  {
    question: "What are brainrot zones?",
    answer:
      "Zones are themed areas where specific brainrots spawn. Each zone has unique environmental effects, spawn rates, and mutation chances. Zones include Skibidi Toilet, Rizzler Zone, Ohio Realm, Fanum Tax Office, Gyatt District, Sigma Sanctuary, Mewing Academy, and Goofy Ahh Zone.",
  },
  {
    question: "How often does the game update?",
    answer:
      "Brainrot Studios releases major updates every 1-2 months with new brainrots, traits, zones, and features. Smaller patches for bug fixes and balance adjustments happen weekly. Seasonal events (like Halloween and Taco Tuesday specials) arrive annually. The current version is v1.2.0, released June 2026.",
  },
  {
    question: "Is there a competitive scene?",
    answer:
      "Yes! Steal a Brainrot features leaderboards for collection value, most brainrots collected, rarest mutations, and trading profit. Weekly and monthly competitions award exclusive brainrots and titles. The competitive scene is growing rapidly with community-run tournaments and trading leagues.",
  },
  {
    question: "How do I report admin abuse?",
    answer:
      "If you encounter unfair trades, scamming, or admin abuse, use the Admin Abuse reporting system. Navigate to the Admin Abuse page, provide details of the incident, and include screenshots if possible. All reports are reviewed by the moderation team within 24 hours. Repeat offenders are permanently banned from trading.",
  },
];

/* ==============================
   9. Weapons
   ============================== */

export const weaponTypes: WeaponType[] = [
  { name: "Viral", description: "Boosts viral income generation and spread rate. The most common trait type.", classes: ["skibidi", "gyatt", "mewing", "goofy-ahh"] },
  { name: "Rare", description: "Increases trade value and market demand. Essential for serious collectors.", classes: ["rizzler", "fanum-tax", "gyatt", "mewing"] },
  { name: "Legendary", description: "Massive stat boosts across all categories. Extremely hard to obtain.", classes: ["rizzler", "sigma", "ohio"] },
  { name: "Meme", description: "Enhances viral spread and community engagement. Great for social trading.", classes: ["skibidi", "gyatt", "goofy-ahh"] },
  { name: "Cursed", description: "Unpredictable effects -- can be devastating or game-breaking. High risk.", classes: ["ohio", "goofy-ahh"] },
  { name: "Common", description: "Standard traits with balanced stats. Easy to obtain and breed.", classes: ["skibidi", "goofy-ahh"] },
  { name: "Growth", description: "Gradual value increase over time. Rewards patient collectors.", classes: ["mewing", "fanum-tax"] },
  { name: "Solo", description: "Bonuses when alone in collection. Penalizes large collections.", classes: ["sigma"] },
  { name: "Charisma", description: "Boosts trade negotiations and collection synergy.", classes: ["rizzler"] },
  { name: "Income", description: "Direct viral income multiplier. The foundation of any economy build.", classes: ["fanum-tax", "skibidi"] },
];

export const classWeaponMap: { class: string; weapons: string[] }[] = [
  { class: "Skibidi", weapons: ["Viral", "Meme", "Common", "Income"] },
  { class: "Rizzler", weapons: ["Rare", "Legendary", "Charisma"] },
  { class: "Ohio", weapons: ["Legendary", "Cursed"] },
  { class: "Fanum Tax", weapons: ["Rare", "Income", "Growth"] },
  { class: "Gyatt", weapons: ["Viral", "Rare", "Meme"] },
  { class: "Sigma", weapons: ["Legendary", "Solo"] },
  { class: "Mewing", weapons: ["Rare", "Viral", "Growth"] },
  { class: "Goofy Ahh", weapons: ["Common", "Meme", "Cursed", "Viral"] },
];

export const recommendedWeapons: Weapon[] = [
  { name: "Skibidi Toilet", type: "Viral", class: "Common", damage: "B", speed: "A", range: "Medium", description: "Steady income generator, great starter brainrot" },
  { name: "Rizzler", type: "Rare", class: "Rare", damage: "A", speed: "B", range: "Short", description: "Trade value booster, essential for market play" },
  { name: "Ohio Realm", type: "Cursed", class: "Legendary", damage: "S", speed: "C", range: "Long", description: "Unpredictable chaos, highest risk-reward ratio" },
  { name: "Fanum Tax", type: "Rare", class: "Rare", damage: "B", speed: "S", range: "Long", description: "Passive income king, scales with collection size" },
  { name: "Gyatt", type: "Viral", class: "Rare", damage: "A", speed: "A", range: "Short", description: "Viral spike specialist, best for quick flips" },
  { name: "Sigma", type: "Legendary", class: "Legendary", damage: "S", speed: "B", range: "Medium", description: "Solo powerhouse, dominates in small collections" },
  { name: "Mewing", type: "Growth", class: "Rare", damage: "C", speed: "C", range: "Long", description: "Slow and steady growth, best for patient players" },
  { name: "Goofy Ahh", type: "Meme", class: "Common", damage: "C", speed: "S", range: "Short", description: "Pure fun and chaos, unpredictable but entertaining" },
];

/* ==============================
   10. Enemies & Bosses
   ============================== */

export const bosses: Boss[] = [
  { name: "Cringe Lord", location: "All Zones", level: "Common", description: "The embodiment of cringe content. Attacks with outdated memes and dad jokes. Weak to Viral traits.", type: "normal" },
  { name: "Copyright Strike", location: "All Zones", level: "Medium", description: "A DMCA takedown notice made manifest. Can temporarily disable a brainrot's abilities. Avoid at all costs.", type: "normal" },
  { name: "Shadowban Shade", location: "All Zones", level: "Medium", description: "A ghostly figure that reduces viral income when nearby. Hard to detect but devastating to passive income.", type: "normal" },
  { name: "Ratio Reaper", location: "All Zones", level: "High", description: "Wields the power of the ratio. Can instantly devalue brainrots with a single devastating comment. Feared by all traders.", type: "normal" },
  { name: "Algorithm Demon", location: "All Zones", level: "High", description: "Controls the flow of viral content. Randomly boosts or nerfs brainrot values. Unpredictable and dangerous.", type: "elite" },
  { name: "Deplatformer", location: "All Zones", level: "High", description: "The ultimate canceler. Can permanently remove a brainrot from your collection if not countered. Guard with Legendary traits.", type: "elite" },
  { name: "Meme Necromancer", location: "Ohio Realm (Boss Event)", level: "Boss", description: "Revives dead memes and sends them to attack your collection. Summons waves of forgotten brainrots. Requires a diverse collection to counter.", type: "world" },
  { name: "Brainrot Overlord", location: "All Zones (Boss Event)", level: "Boss", description: "The final boss of brainrot collecting. Combines the power of all negative traits. Only the most dedicated collectors can defeat it. Rewards the rarest brainrots upon defeat.", type: "world" },
];

export const dungeons: Dungeon[] = [
  {
    name: "Skibidi Toilet - Viral Factory",
    level: "Common",
    description: "The starting zone for all collectors. Learn the basics of brainrot collection, trading, and mutation in this beginner-friendly area.",
    bosses: ["Cringe Lord"],
    rewards: ["Common Brainrots", "Basic Traits", "Starter Currency"],
  },
  {
    name: "Rizzler Zone - Trading Hub",
    level: "Rare",
    description: "The premier trading destination. Navigate the bustling marketplace, negotiate deals, and find rare brainrots from other collectors.",
    bosses: ["Shadowban Shade"],
    rewards: ["Rare Brainrots", "Charisma Traits", "Trading Passes"],
  },
  {
    name: "Ohio Realm - Mutation Grounds",
    level: "Legendary",
    description: "The most dangerous zone. High mutation rates and unpredictable chaos events. Only for experienced collectors with strong collections.",
    bosses: ["Meme Necromancer", "Algorithm Demon"],
    rewards: ["Cursed Brainrots", "Mutation Catalysts", "Legendary Traits"],
  },
  {
    name: "Sigma Sanctuary - Solo Arena",
    level: "Legendary",
    description: "The proving grounds for solo collectors. Battle the Brainrot Overlord with only your best brainrots. No team support, pure individual skill.",
    bosses: ["Brainrot Overlord", "Deplatformer"],
    rewards: ["Legendary Brainrots", "Solo Traits", "Champion Title"],
  },
];

/* ==============================
   11. Classes
   ============================== */

export const professions: Profession[] = [
  { name: "Viral Traits", icon: "🔥", description: "Boost income generation and spread rate. Essential for economy builds." },
  { name: "Trading Traits", icon: "💎", description: "Increase trade value and market demand. Key for marketplace success." },
  { name: "Legendary Traits", icon: "👑", description: "Massive stat boosts across all categories. The holy grail of traits." },
  { name: "Meme Traits", icon: "😂", description: "Enhance viral spread and community engagement. Social trading power." },
  { name: "Cursed Traits", icon: "💀", description: "Unpredictable effects with high risk-reward. Not for the faint of heart." },
  { name: "Growth Traits", icon: "🌱", description: "Gradual value increase over time. Rewards patience and long-term strategy." },
];

/* ==============================
   12. System Requirements
   ============================== */

export const systemRequirements: SystemRequirement[] = [
  {
    category: "Minimum",
    items: [
      { label: "OS", value: "Windows 10 / macOS 11 / iOS 14 / Android 10" },
      { label: "CPU", value: "Intel Core i3 / AMD equivalent" },
      { label: "RAM", value: "4 GB RAM" },
      { label: "GPU", value: "Integrated GPU (DirectX 11 support)" },
      { label: "Storage", value: "~500 MB" },
      { label: "Network", value: "Broadband internet connection" },
    ],
  },
  {
    category: "Recommended",
    items: [
      { label: "OS", value: "Windows 11 / macOS 13+" },
      { label: "CPU", value: "Intel Core i5 / AMD Ryzen 5" },
      { label: "RAM", value: "8 GB RAM" },
      { label: "GPU", value: "Dedicated GPU (DirectX 12 support)" },
      { label: "Storage", value: "~500 MB" },
      { label: "Network", value: "Stable broadband connection" },
    ],
  },
];

/* ==============================
   13. Game Info (Release History)
   ============================== */

export const releaseDates: ReleaseDateInfo[] = [
  {
    phase: "Alpha Launch",
    date: "2024",
    description: "Steal a Brainrot entered alpha with basic brainrot collection, trading, and the first four zones",
  },
  {
    phase: "Beta Release",
    date: "2025",
    description: "Open beta launched with the full mutation system, trait breeding, and community marketplace",
  },
  {
    phase: "Full Release",
    date: "2025 Q4",
    description: "Version 1.0 launched with all 8 zones, 200+ brainrots, competitive leaderboards, and Taco Tuesday events",
  },
  {
    phase: "Recent Updates",
    date: "2026",
    description: "Continued content updates, new brainrots, trait balancing, and seasonal events including the Ohio Realm expansion",
  },
];

/* ==============================
   14. Updates & Roadmap
   ============================== */

export const roadmap: RoadmapItem[] = [
  {
    phase: "Released",
    title: "Core Content",
    items: [
      "8 brainrot zones (Skibidi Toilet, Rizzler Zone, Ohio Realm, Fanum Tax Office, Gyatt District, Sigma Sanctuary, Mewing Academy, Goofy Ahh Zone)",
      "200+ collectible brainrots",
      "Trait breeding and mutation system",
      "Community marketplace and trading",
      "Taco Tuesday weekly events",
      "Competitive leaderboards",
    ],
    status: "completed",
  },
  {
    phase: "Current Phase",
    title: "Ongoing Updates",
    items: [
      "New brainrot variants being added",
      "Trait balancing and meta adjustments",
      "Trading economy improvements",
      "New zone expansions in development",
      "Seasonal event system preparation",
      "Community feedback-driven improvements",
    ],
    status: "in-progress",
  },
  {
    phase: "Planned",
    title: "Future Updates",
    items: [
      "Brand new brainrot zones",
      "Advanced mutation combinations",
      "Guild and clan system",
      "Cross-platform trading",
      "Achievement and title system",
      "More language support",
    ],
    status: "planned",
  },
  {
    phase: "Long-term Vision",
    title: "Development Direction",
    items: [
      "Community workshop support for custom brainrots",
      "Esports-grade competitive trading leagues",
      "Cross-game crossover events",
      "Player-hosted marketplace servers",
      "AI-powered brainrot generation",
    ],
    status: "planned",
  },
];
