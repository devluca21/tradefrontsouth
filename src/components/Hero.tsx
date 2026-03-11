"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const eyebrow = "TRADEFRONT SOUTH";
const headline = "Trusted Real Estate Services in the Dominican Republic";
const subline =
  "Escrow that protects buyers and developers. REIT-style investments with dividend payouts. Legal services for your transactions. And connections to the country’s most trusted agencies to sell your property.";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden md:min-h-[95vh]">
      {/* High-res background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
          alt="Real estate in the Dominican Republic"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark blue overlay gradient */}
        <div
          className="absolute inset-0 bg-navy/70"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,28,61,0.5) 0%, rgba(0,28,61,0.75) 40%, rgba(0,28,61,0.92) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[90vh] flex-col justify-end px-6 pb-20 pt-28 md:min-h-[95vh] md:max-w-[1400px] md:px-10 md:pb-28 md:pt-36">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/80"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
        >
          {headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg"
        >
          {subline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10"
        >
          <a
            href="#what-we-do"
            className="inline-flex items-center rounded-sm bg-orange px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-orange-hover"
          >
            Explore
          </a>
        </motion.div>
      </div>
    </section>
  );
}
