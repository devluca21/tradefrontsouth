"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Home, Scale } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Fully managed escrow",
    description:
      "Escrow tailored to Dominican Republic real estate. Funds stay safe and are released when milestones are met—so developers get what they need for construction and all parties are protected.",
  },
  {
    icon: TrendingUp,
    title: "Real estate investment",
    description:
      "REIT-style investment with dividend payouts, similar to traditional REIT funds. Access institutional-style real estate returns and regular income.",
  },
  {
    icon: Scale,
    title: "Legal services",
    description:
      "Legal support for real estate transactions in the Dominican Republic. From due diligence and contracts to compliance and closings, we help keep your deals secure and compliant.",
  },
  {
    icon: Home,
    title: "Sell your property",
    description:
      "If you’re a homeowner in the country, we connect you with the most trusted real estate agencies in the Dominican Republic to get your property sold.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-medium uppercase tracking-[0.25em] text-navy/70"
        >
          What We Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl"
        >
          Four ways we serve you in the Dominican Republic
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/80"
        >
          Escrow for safe transactions, REIT-style investment and dividends, legal services for your deals, and a trusted path to sell your property.
        </motion.p>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border-t border-navy/10 pt-8"
            >
              <service.icon
                className="text-navy/80"
                size={28}
                strokeWidth={1.5}
              />
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-navy">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-navy/75">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
