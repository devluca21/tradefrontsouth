"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "Escrow", label: "Fully managed, DR-focused" },
  { value: "REIT-style", label: "Investment & dividends" },
  { value: "Sell", label: "Trusted agency network" },
  { value: "Advisors", label: "Ready to guide you" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function StatBar() {
  return (
    <section className="border-y border-navy/10 bg-white py-12 md:py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-6 md:grid-cols-4 md:gap-0 md:px-10"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={item}
            transition={{ duration: 0.4 }}
            className={`flex flex-col items-center text-center md:items-start md:text-left ${
              i > 0 && i < 4 ? "md:border-l md:border-navy/15 md:pl-10" : ""
            }`}
          >
            <span className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
              {stat.value}
            </span>
            <span className="mt-1 text-xs font-medium uppercase tracking-widest text-navy/70">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
