"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const nextStep = {
  label: "Next step",
  title: "What We Do",
  description: "Escrow, REIT-style investment, legal services, and trusted agency connections for selling your property.",
  href: "#what-we-do",
  cta: "Explore our services",
};

export default function NextStepFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-navy/10 bg-white py-12 md:py-16"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Link
          href={nextStep.href}
          className="group flex flex-col items-start gap-2 rounded-sm border border-navy/10 bg-white p-6 transition-colors hover:border-orange/30 hover:bg-navy/[0.02] md:flex-row md:items-center md:justify-between md:gap-6"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-navy/60">
              {nextStep.label}
            </p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight text-navy md:text-2xl">
              {nextStep.title}
            </h3>
            <p className="mt-1 text-sm text-navy/70">{nextStep.description}</p>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-orange transition-colors group-hover:gap-2">
            {nextStep.cta}
            <ChevronRight size={18} />
          </span>
        </Link>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-navy/10 pt-8">
          <p className="text-sm text-navy/60">© TradeFront South. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-navy/70 hover:text-navy">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-navy/70 hover:text-navy">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
