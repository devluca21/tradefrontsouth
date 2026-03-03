"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#what-we-do", label: "What We Do" },
  { href: "#strategies", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(0, 28, 61, 0.98)" : "rgba(0, 28, 61, 0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/0 transition-colors"
      style={{
        borderBottomColor: scrolled ? "rgba(255,255,255,0.08)" : "transparent",
      }}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white"
        >
          TRADEFRONT
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="nav-link group relative py-2 text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-orange transition-[width] duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              className="inline-flex items-center rounded-sm bg-orange px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-hover"
            >
              Speak to an Advisor
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-white/10 bg-navy md:hidden"
        >
          <ul className="flex flex-col gap-0 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-white/10 py-4 text-white/90 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 block rounded-sm bg-orange px-5 py-3 text-center font-medium text-white"
              >
                Speak to an Advisor
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
