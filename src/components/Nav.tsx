"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "/#vision", label: "Vision" },
  { href: "/#what-we-do", label: "Approach" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 lg:px-10">
        <Logo />

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="group relative py-2 text-[0.8rem] font-medium tracking-[0.08em] uppercase text-ink/65 transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-[width] duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              className="inline-flex items-center border border-ink/15 bg-ink px-5 py-2.5 text-[0.8rem] font-medium tracking-wide text-white transition-colors hover:bg-ink-soft"
            >
              Start a conversation
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
        >
          {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line bg-canvas md:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block border-b border-line py-4 text-ink/80 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 block bg-ink px-5 py-3 text-center text-sm font-medium text-white"
                >
                  Start a conversation
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
