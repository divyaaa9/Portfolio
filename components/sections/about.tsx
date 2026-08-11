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
    I&rsquo;m a <Hl>third-year Computer Science and Systems Engineering</Hl> undergraduate
    at Lendi Institute of Engineering and Technology (LIET), with an <Hl>8.7 GPA</Hl>. I
    enjoy learning by building and turning ideas into practical software, with interests
    in <Hl>full-stack development</Hl>, <Hl>backend systems</Hl>, and{" "}
    <Hl>AI-powered applications</Hl>.
  </>,
  <>
    I work with <Hl>C</Hl>, <Hl>Python</Hl>, <Hl>HTML</Hl>, <Hl>CSS</Hl>,{" "}
    <Hl>JavaScript</Hl>, and <Hl>PostgreSQL</Hl>, building{" "}
    <Hl>full-stack applications</Hl>, <Hl>REST APIs</Hl>,{" "}
    <Hl>database-driven systems</Hl>, and <Hl>AI-assisted solutions</Hl>. I enjoy
    working across the stack, from application logic and structured data to{" "}
    <Hl>API integration</Hl> and intelligent features that make software more useful.
  </>,
  <>
    Beyond development, I value <Hl>communication</Hl>, <Hl>teamwork</Hl>, and{" "}
    <Hl>leadership</Hl>. As the <Hl>President of the National Entrepreneurship Cell (E-Cell), IIT Bombay</Hl> at
    LIET, I lead initiatives that encourage entrepreneurship and student participation.
    My experiences in <Hl>chess</Hl>, <Hl>editorial work</Hl>, and college activities
    have strengthened my ability to collaborate, take responsibility, and adapt to new
    challenges.
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
