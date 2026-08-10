"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="section-y bg-base-alt">
      <div className="container">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-md border border-border bg-surface-card p-5 transition-colors duration-300 ease-premium hover:bg-surface-hover hover:border-ink/20"
            >
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-sm border border-border bg-base">
                <Image
                  src={item.logo}
                  alt={`${item.institution} logo`}
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain opacity-90"
                />
              </div>

              {item.years ? (
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
                  {item.years}
                </p>
              ) : (
                <div className="mt-4" />
              )}
              <h3 className="mt-1.5 font-display text-base font-medium text-ink">
                {item.level}
              </h3>
              <p className="mt-1 text-sm text-ink-secondary">{item.institution}</p>
              <p className="mt-0.5 text-sm text-ink-muted">{item.detail}</p>

              {item.score ? (
                <div className="mt-3 border-t border-border pt-3">
                  <p className="text-sm font-medium text-ink">{item.score}</p>
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
