"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NextStepFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-navy/10 bg-white py-12 md:py-16"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
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
