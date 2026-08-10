"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-config";

/** Inline emphasis for the words that matter — tech names, project names, key strengths. */
function Hl({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

const paragraphs: ReactNode[] = [
  <>
    I&rsquo;m a third-year Computer Science and Systems Engineering undergraduate at
    Lendi Institute of Engineering and Technology, maintaining an{" "}
    <Hl>8.7 CGPA</Hl>. I&rsquo;m a passionate learner who enjoys building things from
    scratch and turning ideas into practical, working solutions.
  </>,
  <>
    That shows up in what I build. <Hl>QuizEm</Hl> is an <Hl>AI-powered</Hl> quiz
    generator built with <Hl>TypeScript</Hl> and <Hl>PostgreSQL</Hl>. <Hl>EduCore</Hl>{" "}
    organizes academic data through a <Hl>Python</Hl>-and-PostgreSQL backend wired
    together with REST <Hl>APIs</Hl>. <Hl>isCandid</Hl> is a browser extension, built
    in Python and JavaScript, that flags fake shopping websites. I&rsquo;ve also
    shipped <Hl>KraftKala</Hl>, a <Hl>PHP</Hl> marketplace connecting local artisans
    with customers — after starting out with a Pong game built from scratch in
    vanilla JavaScript.
  </>,
  <>
    I enjoy exploring new technologies, solving problems, and continuously improving
    the way I build. Alongside technical skills, I value clear <Hl>communication</Hl>,{" "}
    <Hl>teamwork</Hl>, and taking responsibility in <Hl>leadership roles</Hl>. I&rsquo;m
    hardworking, enthusiastic, and enjoy contributing both as an individual and as
    part of a team.
  </>,
];

export function About() {
  return (
    <section id="about" className="section-y">
      <div className="container">
        <SectionHeading eyebrow="About" title="A little about how I work" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.7fr] md:gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center md:sticky md:top-28 md:h-full md:items-center md:justify-center md:self-start"
          >
            <div className="relative aspect-square w-full max-w-[240px] overflow-hidden rounded-lg border border-border bg-surface-card">
              <Image
                src={siteConfig.aboutImage}
                alt={`${siteConfig.name} at work`}
                fill
                sizes="(min-width: 768px) 240px, 60vw"
                className="object-cover grayscale-[15%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/20 via-transparent to-transparent" />
            </div>
          </motion.div>

          <div className="max-w-prose space-y-4">
            {paragraphs.map((node, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-base leading-relaxed text-ink-secondary md:text-[17px]"
              >
                {node}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
