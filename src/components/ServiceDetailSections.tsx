"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const sections = [
  {
    id: "escrow",
    title: "Fully managed escrow",
    content: [
      "Our escrow service is built for real estate transactions in the Dominican Republic. Funds are held securely in a neutral account and released only when agreed milestones are met—so buyers are protected, and developers receive the capital they need for construction at the right time.",
      "We handle documentation, timelines, and disbursements so all parties can focus on the deal instead of the mechanics. Whether you’re a developer, buyer, or investor, our escrow process keeps your transaction safe and transparent.",
    ],
  },
  {
    id: "investment",
    title: "Real estate investment",
    content: [
      "TradeFront South offers REIT-style real estate investment with regular dividend payouts, similar to traditional REIT funds. You get access to institutional-style real estate returns and income without managing properties yourself.",
      "Our investment vehicles are designed for the Dominican Republic market, with a focus on income-producing assets and long-term value. Returns are distributed according to the fund terms, so you can plan for steady income alongside potential appreciation.",
    ],
  },
  {
    id: "legal",
    title: "Legal services",
    content: [
      "We provide legal support for real estate transactions in the Dominican Republic. From due diligence and title review to contracts, compliance, and closings, we help keep your deals secure and compliant with local law.",
      "Our team supports buyers, sellers, and developers with documentation, structuring, and coordination so that nothing is left to chance. When you work with us, you get clarity on every step of the process.",
    ],
  },
  {
    id: "sell",
    title: "Sell your property",
    content: [
      "If you’re a homeowner in the Dominican Republic and want to sell, we connect you with the most trusted real estate agencies in the country. We don’t list properties ourselves—we match you with vetted partners who can market and close your sale.",
      "You get access to a curated network of professionals, so you can list with confidence and reach serious buyers. Tell us about your property and goals, and we’ll point you to the right advisor.",
    ],
  },
];

export default function ServiceDetailSections() {
  return (
    <div className="bg-white">
      {sections.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-24 border-t border-navy/10 py-16 md:py-20 ${i === 0 ? "border-t-0" : ""}`}
        >
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold tracking-tight text-navy md:text-3xl"
            >
              {section.title}
            </motion.h2>
            <div className="mt-6 space-y-4 text-navy/85 md:max-w-3xl">
              {section.content.map((para, j) => (
                <motion.p
                  key={j}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>
            <div className="mt-10">
              <p className="mb-6 text-sm font-medium uppercase tracking-widest text-navy/70">
                Speak to an advisor
              </p>
              <ContactForm
                defaultService={section.id === "sell" ? "sell" : section.id}
                formId={`${section.id}-form`}
                compact
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
