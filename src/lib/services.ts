export const services = [
  {
    slug: "stewardship",
    title: "Portfolio stewardship",
    content: [
      "TradeFront South provides oversight across holdings so each company stays aligned with its purpose, capital plan, and operating priorities. We bring structure without bureaucracy—clear reporting, thoughtful governance, and accountability that scales.",
      "Whether you are consolidating ventures or building a multi-entity portfolio across development, technology, real estate, or enterprise, we help leadership see the whole picture and act with discipline.",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600",
  },
  {
    slug: "development",
    title: "Business development",
    content: [
      "Growth needs more than ambition. We work alongside founders and operators to shape market strategy, partnerships, and the operating rhythm that turns plans into durable progress.",
      "From early scaling through mature expansion, our guidance is practical: prioritize what moves the business, remove friction, and build relationships that compound over time.",
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600",
  },
  {
    slug: "capital",
    title: "Capital & investment",
    content: [
      "We support structured capital and investment decisions across development firms, technology companies, real estate ventures, and broader enterprise opportunities.",
      "Our approach favors clarity over complexity—capital that serves the business model, timelines that match execution, and partners who understand the long view.",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600",
  },
  {
    slug: "advisory",
    title: "Strategic advisory",
    content: [
      "Leadership rarely lacks options—it lacks clarity. We advise on structure, transactions, risk, and the decisions that reshape a company’s trajectory.",
      "You get candid counsel grounded in how businesses actually operate across sectors, so you can move with confidence instead of noise.",
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600",
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug) ?? null;
}
