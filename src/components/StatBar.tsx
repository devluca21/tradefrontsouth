"use client";

import { motion } from "framer-motion";

export default function StatBar() {
  return (
    <section id="vision" className="border-y border-line bg-surface/70 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted"
        >
          Vision
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-snug tracking-tight text-ink md:text-4xl lg:text-[2.75rem]"
        >
          Built to support companies across business, development, technology, and real estate—wherever growth needs steady hands.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          One holding company. A broad field of work. Judgment over complexity.
        </motion.p>
      </div>
    </section>
  );
}
