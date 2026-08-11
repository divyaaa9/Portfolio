"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { certifications } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

export function Certifications() {
  return (
    <section id="certifications" className="section-y">
      <div className="container">
        <SectionHeading eyebrow="Certifications" title="Certifications & credentials" />

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={siteConfig.social.linkedinCertifications}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-start justify-between gap-4 rounded-md border border-border bg-surface-card p-5 transition-all duration-300 ease-premium hover:border-ink/25 hover:bg-surface-hover hover:shadow-[0_0_40px_-16px_rgba(245,245,242,0.35)]"
            >
              <div>
                <h3 className="font-display text-base font-medium leading-snug text-ink">
                  {cert.name}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{cert.issuer}</p>
              </div>
              <ArrowUpRight
                className="mt-1 h-4 w-4 shrink-0 text-ink-muted transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                aria-hidden="true"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
