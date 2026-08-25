"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./Logo";

export default function NextStepFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-line bg-surface/80 py-14 md:py-16"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo href="/" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              A next-generation holding company.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 text-sm text-muted">
            <Link href="/#vision" className="hover:text-ink">
              Vision
            </Link>
            <Link href="/#what-we-do" className="hover:text-ink">
              Approach
            </Link>
            <Link href="/#contact" className="hover:text-ink">
              Contact
            </Link>
            <Link href="#" className="hover:text-ink">
              Privacy
            </Link>
            <Link href="#" className="hover:text-ink">
              Terms
            </Link>
          </div>
        </div>
        <p className="mt-12 text-sm text-muted/80">
          © TradeFront South. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
