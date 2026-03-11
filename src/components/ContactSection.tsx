"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-navy/10 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-navy/70">
            Get in touch
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Speak to an Advisor
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Whether you need escrow, investment, legal support, or help selling your property—send a message and an advisor will reply.
          </p>
        </motion.div>
        <ContactForm />
      </div>
    </section>
  );
}
