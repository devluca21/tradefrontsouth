"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    title: "Portfolio stewardship",
    description:
      "Oversight across holdings—performance, governance, and alignment so each business stays focused on what matters.",
    href: "/services/stewardship",
  },
  {
    title: "Business development",
    description:
      "Guidance for growth: market entry, partnerships, operating rhythm, and the decisions that unlock the next stage.",
    href: "/services/development",
  },
  {
    title: "Capital & investment",
    description:
      "Structured capital and investment support for ventures across development, technology, real estate, and enterprise.",
    href: "/services/capital",
  },
  {
    title: "Strategic advisory",
    description:
      "Counsel on structure, transactions, and risk—so leadership can move with clarity instead of guesswork.",
    href: "/services/advisory",
  },
];

export default function PortfolioGrid() {
  return (
    <section id="strategies" className="border-y border-line bg-surface/60 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted"
        >
          Capabilities
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl"
        >
          How we work with companies
        </motion.h2>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={item.href}
                className="group grid gap-4 py-8 transition-colors md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)_auto] md:items-center md:gap-10 md:py-10"
              >
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-[1.65rem]">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-muted">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-transform group-hover:translate-x-1">
                  Learn more
                  <ArrowRight size={16} strokeWidth={1.5} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
