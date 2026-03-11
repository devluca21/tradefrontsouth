"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Fully managed escrow",
    description:
      "Escrow tailored to DR real estate. Funds stay safe; developers get what they need for construction. All parties protected.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
    href: "#contact",
    cta: "Speak to an Advisor",
  },
  {
    title: "Real estate investment",
    description:
      "REIT-style investment with dividend payouts, like traditional REIT funds. Institutional-style returns and regular income.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800",
    href: "#contact",
    cta: "Learn more",
  },
  {
    title: "Legal services",
    description:
      "Legal support for DR real estate: due diligence, contracts, compliance, and closings so your transactions stay secure and compliant.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800",
    href: "#contact",
    cta: "Speak to an Advisor",
  },
  {
    title: "Sell your property",
    description:
      "We connect homeowners with the most trusted real estate agencies in the Dominican Republic to get your property sold.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800",
    href: "#contact",
    cta: "Connect with an Advisor",
  },
];

export default function PortfolioGrid() {
  return (
    <section id="strategies" className="bg-navy py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-medium uppercase tracking-[0.25em] text-white/70"
        >
          Services
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
        >
          Our core services
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Dark blue footer overlay - expands on hover */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-navy via-navy/95 to-transparent p-6 pt-24 transition-all duration-300 group-hover:from-navy group-hover:pt-12">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-orange transition-colors hover:text-orange-light"
                >
                  {card.cta}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
