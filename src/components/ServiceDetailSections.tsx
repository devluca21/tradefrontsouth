"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { services } from "@/lib/services";

export default function ServiceDetailSections() {
  return (
    <div>
      {services.map((section, i) => (
        <section
          key={section.slug}
          id={section.slug}
          className={`scroll-mt-24 border-t border-line py-16 md:py-20 ${i === 0 ? "border-t-0" : ""}`}
        >
          <div className="mx-auto max-w-[1200px] px-6 md:px-10">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl"
            >
              {section.title}
            </motion.h2>
            <div className="mt-6 max-w-2xl space-y-4 text-ink-soft">
              {section.content.map((para, j) => (
                <motion.p
                  key={j}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>
            <div className="mt-10">
              <p className="mb-6 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted">
                Speak with us
              </p>
              <ContactForm
                defaultService={section.slug}
                formId={`${section.slug}-form`}
                compact
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
