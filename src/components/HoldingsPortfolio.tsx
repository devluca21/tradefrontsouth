"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import DelEsteLogo from "./DelEsteLogo";
import SocoLogo from "./SocoLogo";

const holdings = [
  {
    name: "Ad Pretzel",
    domain: "adpretzel.com",
    href: "https://www.adpretzel.com",
    sector: "Digital agency & AI development",
    kind: "image" as const,
    logo: {
      src: "/portfolio/ad-pretzel.svg",
      alt: "Ad Pretzel logo",
      width: 500,
      height: 500,
      className: "h-[10.5rem] w-auto md:h-[12.5rem]",
    },
  },
  {
    name: "SOCO Acquisitions",
    domain: "socoacquisitions.com",
    href: "https://www.socoacquisitions.com",
    sector: "Real estate & development",
    kind: "soco" as const,
  },
  {
    name: "Del Este Financial",
    domain: null,
    href: null,
    sector: "Private equity & financing",
    kind: "deleste" as const,
  },
] as const;

export default function HoldingsPortfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted"
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl"
          >
            Companies under management
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-5 text-lg leading-relaxed text-muted"
          >
            Operating businesses in the TradeFront South holding company.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-16 md:mt-20 lg:grid-cols-3 lg:gap-0">
          {holdings.map((company, i) => {
            const cardClass = `group flex flex-col ${
              i > 0 ? "lg:border-l lg:border-line lg:pl-10" : ""
            } ${i < holdings.length - 1 ? "lg:pr-10" : ""}`;
            const motionProps = {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: i * 0.1 },
            };
            const body = (
              <>
                <div className="flex min-h-[12rem] items-center justify-center md:min-h-[14rem]">
                  {company.kind === "soco" ? (
                    <SocoLogo className="transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                  ) : company.kind === "deleste" ? (
                    <DelEsteLogo className="transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                  ) : (
                    <img
                      src={company.logo.src}
                      alt={company.logo.alt}
                      width={company.logo.width}
                      height={company.logo.height}
                      decoding="async"
                      className={`${company.logo.className} object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]`}
                    />
                  )}
                </div>

                <div className="mt-2 text-center md:mt-4">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted">
                    {company.sector}
                  </p>
                  <h3 className="mt-2.5 font-display text-2xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent md:text-[1.85rem]">
                    {company.name}
                  </h3>
                  {company.href && company.domain ? (
                    <span className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-medium text-accent">
                      Visit {company.domain}
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  ) : null}
                </div>
              </>
            );

            if (company.href) {
              return (
                <motion.a
                  key={company.name}
                  href={company.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                  {...motionProps}
                >
                  {body}
                </motion.a>
              );
            }

            return (
              <motion.div key={company.name} className={cardClass} {...motionProps}>
                {body}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
