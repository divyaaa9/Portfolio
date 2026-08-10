"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="section-y bg-base-alt">
      <div className="container">
        <SectionHeading eyebrow="Achievements" title="Milestones along the way" />

        <div className="relative max-w-2xl">
          <div
            className="absolute left-[5px] top-2 bottom-2 w-px bg-border"
            aria-hidden="true"
          />
          <ol className="space-y-12">
            {achievements.map((item, i) => {
              const eyebrow = item.date ?? item.organization;
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-9"
                >
                  <span
                    className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-ink bg-base"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
                    {eyebrow}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-medium text-ink">
                    {item.title}
                  </h3>
                  {item.date ? (
                    <p className="mt-1 text-sm text-ink-secondary">{item.organization}</p>
                  ) : null}
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
