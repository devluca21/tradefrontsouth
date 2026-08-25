"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden md:min-h-[95vh]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400"
          alt="Contemporary urban architecture"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(246,247,249,0.92) 0%, rgba(246,247,249,0.78) 45%, rgba(246,247,249,0.55) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-[1200px] flex-col justify-center px-6 pb-16 pt-24 md:min-h-[95vh] md:px-10 md:pb-20 md:pt-28">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="font-display text-5xl font-semibold tracking-[0.02em] text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          TRADEFRONT
          <span className="mt-1 block font-sans text-xs font-medium uppercase tracking-[0.5em] text-ink/50 sm:text-sm md:mt-2">
            South
          </span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-8 max-w-2xl font-display text-2xl font-medium leading-snug tracking-tight text-ink-soft md:mt-10 md:text-3xl lg:text-[2.15rem]"
        >
          A next-generation holding company.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg"
        >
          We guide and manage businesses with clarity, stewardship, and a long view.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.5 }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center bg-ink px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
          >
            Speak with us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
