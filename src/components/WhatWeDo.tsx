"use client";

import { motion } from "framer-motion";

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted"
        >
          Approach
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl"
        >
          Holding with purpose.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
        >
          We partner with leadership to set direction, oversee what matters, and stay for the long work—structure without noise, capital with care, and a network activated only when it helps.
        </motion.p>
      </div>
    </section>
  );
}
