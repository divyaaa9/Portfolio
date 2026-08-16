"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center pt-20 md:pt-14"
    >
      <div className="container grid grid-cols-1 items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-10 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 md:order-1"
        >
          <div className="relative mx-auto aspect-square w-full max-w-sm md:mx-0 md:max-w-sm">
            <div
              className="absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(circle,rgba(245,245,242,0.14),rgba(245,245,242,0)_70%)] blur-xl"
              aria-hidden="true"
            />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-border bg-surface-card">
              <Image
                src={siteConfig.heroImage}
                alt={`Portrait of ${siteConfig.name}`}
                fill
                priority
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover grayscale-[15%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/30 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-1 md:order-2"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0 text-ink/90 [filter:drop-shadow(0_0_5px_rgba(245,245,242,0.65))_drop-shadow(0_0_12px_rgba(245,245,242,0.3))]"
              aria-hidden="true"
            >
              <path
                d="M12 2V22M3.5 7L20.5 17M20.5 7L3.5 17"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </svg>
            {siteConfig.role}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-4 font-accent text-display-xl font-bold tracking-normal text-ink"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 max-w-lg text-lg leading-relaxed text-ink-secondary"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-4">
            <Button size="lg" onClick={() => scrollToId("projects")}>
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToId("contact")}
            >
              Contact
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-7 inline-flex items-start gap-3 rounded-md border border-border bg-surface-card/60 px-4 py-3 backdrop-blur-sm"
          >
            <Award className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium text-ink">President, E-Cell · LIET</p>
              <p className="mt-0.5 text-xs text-ink-muted">
                National Entrepreneurship Challenge · E-Cell IIT Bombay · LIET &rsquo;28
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
