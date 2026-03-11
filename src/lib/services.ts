export const services = [
  {
    slug: "escrow",
    title: "Fully managed escrow",
    content: [
      "Our escrow service is built for real estate transactions in the Dominican Republic. Funds are held securely in a neutral account and released only when agreed milestones are met—so buyers are protected, and developers receive the capital they need for construction at the right time.",
      "We handle documentation, timelines, and disbursements so all parties can focus on the deal instead of the mechanics. Whether you're a developer, buyer, or investor, our escrow process keeps your transaction safe and transparent.",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
  },
  {
    slug: "investment",
    title: "Real estate investment",
    content: [
      "TradeFront South offers REIT-style real estate investment with regular dividend payouts, similar to traditional REIT funds. You get access to institutional-style real estate returns and income without managing properties yourself.",
      "Our investment vehicles are designed for the Dominican Republic market, with a focus on income-producing assets and long-term value. Returns are distributed according to the fund terms, so you can plan for steady income alongside potential appreciation.",
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200",
  },
  {
    slug: "legal",
    title: "Legal services",
    content: [
      "We provide legal support for real estate transactions in the Dominican Republic. From due diligence and title review to contracts, compliance, and closings, we help keep your deals secure and compliant with local law.",
      "Our team supports buyers, sellers, and developers with documentation, structuring, and coordination so that nothing is left to chance. When you work with us, you get clarity on every step of the process.",
    ],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200",
  },
  {
    slug: "sell",
    title: "Sell your property",
    content: [
      "If you're a homeowner in the Dominican Republic and want to sell, we connect you with the most trusted real estate agencies in the country. We don't list properties ourselves—we match you with vetted partners who can market and close your sale.",
      "You get access to a curated network of professionals, so you can list with confidence and reach serious buyers. Tell us about your property and goals, and we'll point you to the right advisor.",
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200",
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug) ?? null;
}
