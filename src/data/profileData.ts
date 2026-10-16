export interface CarouselPost {
  id: number;
  postNumber: number;
  url: string;
  title: string;
  subtitle: string;
  aspectHint?: string;
}

export const PROFILE_DATA = {
  name: "Bryant Rose",
  username: "rose_santo_bryant",
  instagramUrl: "https://www.instagram.com/rose_santo_bryant/",
  avatarUrl: "https://i.postimg.cc/NFWpjvGR/Captura-de-tela-2026-10-16-082433.png",
  category: "Entrepreneur",
  title: "Entrepreneur & Investor",
  intro:
    "Entrepreneur & Investor, Gemologist, and Gem Trader specializing in diamond grading, gemstone identification, and certified precious stone trade.",
  
  // Professional Bio & Description directly matching supplied reference
  descriptionLines: [
    "Entrepreneur & Investor, Gemologists, Gem trader. 💎",
    "GIA Gemologists Certified",
    "Diamond grading report",
    "Gemstones identification",
    "EGL, AGL",
  ],

  // Structured Credentials for the Professional Content Section
  expertise: {
    primaryRole: "Entrepreneur & Investor",
    gemologyPillars: [
      {
        title: "GIA Gemologist Certification",
        organization: "Gemological Institute of America (GIA)",
        description: "Comprehensive gemological evaluation, grading standards, and material analysis.",
      },
      {
        title: "Diamond Grading Reports",
        organization: "Cut, Clarity, Color & Carat",
        description: "Detailed 4Cs assessments, proportion analysis, and laser inscription verification.",
      },
      {
        title: "Gemstone Identification",
        organization: "Colored Stones & Origin",
        description: "Spectroscopic, refractive, and microscopic analysis to distinguish natural, synthetic, and treated gems.",
      },
      {
        title: "EGL & AGL Standards",
        organization: "European & American Gemological Laboratories",
        description: "Adherence to international trade certification benchmarks and recognized laboratory protocols.",
      },
    ],
  },

  // Exactly the 8 supplied images in exact order
  carouselPosts: [
    {
      id: 1,
      postNumber: 1,
      url: "https://i.postimg.cc/xjLpTcVX/rose-santo-bryant-1780901198-3914802483087995749-2858708408.jpg",
      title: "50,000+ certified gemstones.",
      subtitle: "50.000+ gemas certificadas · Pigeon blood ruby",
    },
    {
      id: 2,
      postNumber: 2,
      url: "https://i.postimg.cc/YC0xgSZB/rose-santo-bryant-1780901198-3914802484128227476-2858708408.jpg",
      title: "50,000+ certified gemstones.",
      subtitle: "50.000+ gemas certificadas · Pigeon blood ruby",
    },
    {
      id: 3,
      postNumber: 3,
      url: "https://i.postimg.cc/c4H3kbmh/rose-santo-bryant-1780901198-3914802488121095991-2858708408.jpg",
      title: "50,000+ certified gemstones.",
      subtitle: "50.000+ gemas certificadas · Pigeon blood ruby",
    },
    {
      id: 4,
      postNumber: 4,
      url: "https://i.postimg.cc/ZRH9V8yB/rose-santo-bryant-1780901198-3914802487550597383-2858708408.jpg",
      title: "50,000+ certified gemstones.",
      subtitle: "50.000+ gemas certificadas · Pigeon blood ruby",
    },
    {
      id: 5,
      postNumber: 5,
      url: "https://i.postimg.cc/ZK2W7K0m/rose-santo-bryant-1780901198-3914802486787180406-2858708408.jpg",
      title: "50,000+ certified gemstones.",
      subtitle: "50.000+ gemas certificadas · Pigeon blood ruby",
    },
    {
      id: 6,
      postNumber: 6,
      url: "https://i.postimg.cc/9FRM7515/rose-santo-bryant-1780901198-3914802486099486941-2858708408.jpg",
      title: "50,000+ certified gemstones.",
      subtitle: "50.000+ gemas certificadas · Pigeon blood ruby",
    },
    {
      id: 7,
      postNumber: 7,
      url: "https://i.postimg.cc/yYZ1NhYs/rose-santo-bryant-1780901198-3914802485629740184-2858708408.jpg",
      title: "50,000+ certified gemstones.",
      subtitle: "50.000+ gemas certificadas · Pigeon blood ruby",
    },
    {
      id: 8,
      postNumber: 8,
      url: "https://i.postimg.cc/pTrxMz65/rose-santo-bryant-1780901198-3914802485168244808-2858708408.jpg",
      title: "50,000+ certified gemstones.",
      subtitle: "50.000+ gemas certificadas · Pigeon blood ruby",
    },
  ] as CarouselPost[],

  featuredWatchDiamondPosts: [
    {
      id: 101,
      postNumber: 1,
      url: "https://i.postimg.cc/Qx8MfKXD/rose-santo-bryant-1780008750-3907318808129708681-2858708408.jpg",
      title: "Fine Timepieces & Diamonds",
      subtitle: "The perfect combination is always a fine watch paired with a luxurious diamond.",
    },
    {
      id: 102,
      postNumber: 2,
      url: "https://i.postimg.cc/QMxPPsF6/rose-santo-bryant-1780008750-3907318809782314580-2858708408.jpg",
      title: "Haute Horlogerie & Diamonds",
      subtitle: "The perfect combination is always a fine watch paired with a luxurious diamond.",
    },
    {
      id: 103,
      postNumber: 3,
      url: "https://i.postimg.cc/xCB4cztd/rose-santo-bryant-1780008750-3907318809404644376-2858708408.jpg",
      title: "Luxury Pairing",
      subtitle: "The perfect combination is always a fine watch paired with a luxurious diamond.",
    },
    {
      id: 4,
      postNumber: 4,
      url: "https://i.postimg.cc/gJ1TnZN5/rose-santo-bryant-1780008750-3907318808272416635-2858708408.jpg",
      title: "Watch & Diamond Statement",
      subtitle: "The perfect combination is always a fine watch paired with a luxurious diamond.",
    },
  ] as CarouselPost[],
};
