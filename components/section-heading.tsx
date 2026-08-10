"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-8 md:mb-10",
        align === "center" && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
        <span className="h-px w-6 bg-ink-muted/60" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-display-md font-medium text-ink">{title}</h2>
      {description ? (
        <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-secondary">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
