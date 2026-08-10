"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section-y">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description="Grouped by the layer of the stack each tool belongs to — from interface to infrastructure."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-md border border-border bg-surface-card p-5 transition-colors duration-300 ease-premium hover:bg-surface-hover hover:border-ink/20"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium tabular-nums text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base font-medium text-ink">
                  {category.title}
                </h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xs border border-border bg-base px-3 py-1.5 text-[13px] text-ink-secondary transition-colors duration-300 ease-premium hover:border-ink/30 hover:text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
