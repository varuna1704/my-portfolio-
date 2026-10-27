/**
 * Curated Case Studies & Featured Work for Varuna Nikam
 * Preserving verified facts, actual contributions, and working links.
 */

export const FEATURED_WORK = [
  {
    id: "artisan-coffee-shopify",
    title: "Artisan Coffee House Storefront",
    subtitle: "Complete Custom Shopify Store Build on Dawn Theme",
    category: "Shopify Storefront",
    badge: "Client Build",
    badgeType: "client",
    image: "/images/projects/photo-studio.png", // Crisp high-res showcase frame
    tagline: "Tailor-made Liquid sections, roast level visual guides, and responsive collection architecture built from scratch.",
    contribution: "Architected complete store theme from scratch on Shopify Dawn. Built custom Liquid sections for roast flavor profiles and bean origin stories, configured collection filters, drawer cart, and mobile-first checkout navigation.",
    outcome: "Replaced an unbranded generic template with a distinctive, fast-loading storefront that empowered the client to launch seasonal single-origin drops independently.",
    technologies: ["Shopify Liquid", "Dawn Theme", "JavaScript", "CSS3", "Shopify Admin API"],
    stats: [
      { label: "Scope", value: "Complete Build" },
      { label: "Architecture", value: "Liquid & Dawn" },
      { label: "Target", value: "100% Mobile Ready" }
    ],
    links: {
      caseStudy: true,
      live: null, // Private client staging / launch
      github: "https://github.com/varuna1704"
    },
    // Case Study In-Depth Content
    overview: "A specialty coffee merchant required a bespoke e-commerce presence to sell single-origin beans, brewing equipment, and subscription packs with distinct visual storytelling.",
    problem: "The client was struggling with rigid off-the-shelf Shopify templates that either required expensive monthly apps for simple layout adjustments or bogged down page load speed with unoptimized scripts.",
    roleScope: "Sole theme developer. Responsible for custom Liquid section architecture, responsive CSS styling, catalog navigation setup, and checkout process testing.",
    featuresDelivered: [
      "Custom Origin Map & Roast Profile section highlighting tasting notes (acidity, body, roast depth).",
      "Dynamic Bean Grind dropdown that synchronizes inventory SKUs between Whole Bean and Espresso Grind.",
      "Custom Liquid snippets for announcement ribbons and stock urgency indicators without third-party app overhead.",
      "Optimized mobile navigation drawer with sticky quick-add functionality for repeat customers."
    ],
    technicalDecisions: "Adopted Shopify's reference Dawn architecture to ensure strict adherence to Online Store 2.0 standards. Avoided jQuery and bloated third-party plugins in favor of vanilla JavaScript and CSS Grid.",
    validation: "Verified across Chrome, Safari iOS, and Android Viewport profiles. Passed Shopify theme check linting with zero critical errors.",
    results: "Delivered a clean, maintainable theme codebase that reduced the client's monthly app costs to zero for basic presentation features.",
    tradeoffs: "Opted for native Liquid section schemas rather than headless Hydrogen to allow the non-technical store owner to customize copy and banners directly from the native Shopify visual customizer."
  },
  {
    id: "shopify-multi-store-fleet",
    title: "Commercial Multi-Store Shopify Fleet",
    subtitle: "Theme Customization & Store Operations Across 4 Brands",
    category: "Shopify Operations",
    badge: "Production Fleet",
    badgeType: "client",
    image: "/images/projects/farm-system.png",
    tagline: "Ongoing maintenance, Liquid snippets, and review widget integrations across 4 commercial stores.",
    contribution: "Managed and maintained 4 live commercial Shopify stores: Mavena (Women's Fashion), MidFox (Pet Products), Pawfully (Pet Products), and Retromedy (Lifestyle Products). Developed custom Liquid theme snippets, product catalog structures, and review integrations.",
    outcome: "Eliminated app bloat by writing lightweight custom Liquid alternatives, kept storefront inventories synchronized, and ensured zero downtime during flash sales.",
    technologies: ["Shopify Liquid", "Dawn Theme", "Theme Architecture", "Review Widgets", "Store Operations"],
    stats: [
      { label: "Stores", value: "4 Live Brands" },
      { label: "Focus", value: "Theme Optimization" },
      { label: "Uptime", value: "Zero Downtime" }
    ],
    stores: [
      { name: "Mavena", niche: "Women's Fashion", url: "https://mavenaco.com/" },
      { name: "MidFox", niche: "Pet Products", url: "https://midfox.com/" },
      { name: "Pawfully", niche: "Pet Supplies & Care" },
      { name: "Retromedy", niche: "Lifestyle & Apparel" }
    ],
    links: {
      caseStudy: true,
      live: "https://mavenaco.com/",
      github: "https://github.com/varuna1704"
    },
    overview: "Indigen Services manages multiple direct-to-consumer e-commerce storefronts requiring continuous UI updates, seasonal banner rollouts, and catalog expansion.",
    problem: "Managing multiple storefronts simultaneously often causes CSS regressions, fragmented app installations, and slow collection page loading times.",
    roleScope: "Shopify Developer responsible for theme customizations, snippet template creation, app widget injection, and store catalog hygiene.",
    featuresDelivered: [
      "Custom responsive Liquid snippets for promotional alert bars with auto-expiry timestamps.",
      "Unified review widget styling to match each individual brand's typography and color scheme.",
      "Custom product card hover reveals showcasing alternate lifestyle images without layout shifts.",
      "Clean collection filtering rules and tag-based catalog architecture."
    ],
    technicalDecisions: "Standardized all reusable components into modular snippets (`snippets/custom-promo-banner.liquid`, `snippets/review-stars-compact.liquid`) to ensure consistent updates across storefronts.",
    validation: "Conducted weekly cross-browser sanity checks and speed tests on mobile networks.",
    results: "Maintained seamless operations for all 4 stores, supporting continuous marketing campaigns and product launches without technical disruptions.",
    tradeoffs: "Balancing client brand requests with strict page-weight limits by actively auditing third-party tracking scripts and recommending native Liquid solutions."
  },
  {
    id: "ai-review-generator",
    title: "AI-Powered Customer Review Generator",
    subtitle: "Prompt-Engineered Testimonial Simulator for E-Commerce",
    category: "Frontend & AI Tooling",
    badge: "Personal Project",
    badgeType: "personal",
    image: "/images/projects/review-gen.png",
    tagline: "Generates realistic, contextual product review variations for stress-testing e-commerce UI layouts.",
    contribution: "Designed and developed the complete web application. Implemented dynamic prompt engineering logic, sentiment toggles, and responsive card layouts to simulate customer feedback before store launches.",
    outcome: "Enables designers and merchants to preview real-world review densities, star-rating alignments, and multi-paragraph layout stability during theme development.",
    technologies: ["JavaScript", "Prompt Engineering", "HTML5", "CSS Grid", "Netlify"],
    stats: [
      { label: "Deployment", value: "Netlify Live" },
      { label: "Category", value: "Developer Tool" },
      { label: "Stack", value: "Vanilla JS" }
    ],
    links: {
      caseStudy: true,
      live: "https://aicustomerreviewgenerator.netlify.app/",
      github: "https://github.com/varuna1704/AI-customer-reviews-generator"
    },
    overview: "When building product detail pages (PDP) in Shopify, developer dummy text like 'Lorem Ipsum' fails to simulate how real-world customer reviews will wrap, break, and display across mobile screens.",
    problem: "Store builders need realistic, varied review content (short praise, detailed sizing notes, critical feedback) to test review widgets and card containers before customer data exists.",
    roleScope: "Sole creator. Designed the user experience, structured the prompt generation logic, and deployed the tool on Netlify.",
    featuresDelivered: [
      "Sentiment and rating selector (1 to 5 stars) producing naturally toned review bodies.",
      "Category presets (Apparel, Tech, Food, Pet supplies) matching popular e-commerce niches.",
      "Instant copy-to-clipboard functionality formatted for direct CSV or Shopify review import.",
      "Responsive side-by-side preview panel showing cards at mobile and tablet container widths."
    ],
    technicalDecisions: "Built with pure vanilla JavaScript to maintain lightning-fast load times and zero dependencies, ensuring the tool runs instantly on any device.",
    validation: "Tested output against actual customer language patterns to verify authentic phrasing and realistic variance.",
    results: "Frequently utilized as a developer utility during theme builds to verify line-clamp rules and card overflows.",
    tradeoffs: "Engineered specifically for layout testing and developer evaluation, with explicit transparency that content is simulated."
  }
];

export const ALL_PROJECTS = [
  ...FEATURED_WORK,
  {
    id: "railexam-mastery",
    title: "RailExam Mastery",
    subtitle: "RRB/RRC Recruitment Exam Preparation Platform",
    category: "Frontend Application",
    badge: "Full-Stack Project",
    badgeType: "personal",
    image: "/images/projects/stock-market.png",
    tagline: "Timed mock tests, question bank filtering, and real-time score analytics.",
    contribution: "Built interactive exam simulator with timed test modes, subject-wise practice modules, and score tracking dashboards.",
    outcome: "Full-fledged preparation suite deployed on Vercel with responsive mobile and desktop exam interfaces.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts"],
    links: {
      caseStudy: false,
      live: "https://rail-exam.vercel.app/",
      github: "https://github.com/varuna1704/Exam-railway"
    }
  },
  {
    id: "vastra-bharat-legacy",
    title: "Vastra Bharat Legacy",
    subtitle: "Cultural Heritage & Textile Showcase Platform",
    category: "Frontend Application",
    badge: "Showcase Project",
    badgeType: "personal",
    image: null,
    tagline: "Showcasing regional Indian textile heritage and artisan craft through modern responsive UI.",
    contribution: "Engineered interactive state-wise catalog browsing, fabric filtering, and responsive gallery cards.",
    outcome: "Clean, fast-loading React web app deployed on Netlify celebrating traditional Indian attire.",
    technologies: ["React", "TypeScript", "CSS Modules", "Netlify"],
    links: {
      caseStudy: false,
      live: "https://vastra-bharat-legacy.netlify.app/",
      github: "https://github.com/varuna1704/vastra-bharat-legacy"
    }
  },
  {
    id: "farm-management-system",
    title: "Online System for Farm",
    subtitle: "Crop Tracking & Inventory Management Web Portal",
    category: "Web Application",
    badge: "Academic Project",
    badgeType: "academic",
    image: "/images/projects/farm-system.png",
    tagline: "Structured agricultural inventory and crop harvest logging system.",
    contribution: "Designed relational database schema in PostgreSQL and implemented PHP backend endpoints for crop records, inventory counts, and farmer logistics.",
    outcome: "Practical academic project built during MCA studies to digitize regional farm records.",
    technologies: ["PHP", "PostgreSQL", "HTML5", "CSS3"],
    links: {
      caseStudy: false,
      live: null,
      github: "https://github.com/varuna1704/online-system-for-farm"
    }
  },
  {
    id: "the-photowala",
    title: "The Photowala Studio Showcase",
    subtitle: "Photography Portfolio & Booking Showcase",
    category: "Frontend Application",
    badge: "Client Concept",
    badgeType: "personal",
    image: "/images/projects/photo-studio.png",
    tagline: "Visual gallery and client inquiry system tailored for wedding and commercial photographers.",
    contribution: "Developed masonry grid image layout with lightbox previews and smooth section transitions.",
    outcome: "High-contrast visual portfolio emphasizing high-resolution imagery and client lead capture.",
    technologies: ["React", "TypeScript", "CSS Grid", "Vite"],
    links: {
      caseStudy: false,
      live: null,
      github: "https://github.com/varuna1704/the_photowala"
    }
  }
];
