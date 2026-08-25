"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Start a conversation
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              Tell us where you are. We will reply with care.
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
