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

const stats = ["8.7 GPA", "President, E-Cell", "3rd-Year CS & SE"];

export function About() {
  return (
    <section id="about" className="section-y">
      <div className="container">
        <SectionHeading eyebrow="About" title="A little about how I work" />

        <div className="flex flex-col items-start gap-6 sm:flex-row sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square w-24 shrink-0 self-start overflow-hidden rounded-full border border-border bg-surface-card md:w-28"
          >
            <Image
              src={siteConfig.aboutImage}
              alt={`${siteConfig.name} at work`}
              fill
              sizes="112px"
              className="object-cover grayscale-[15%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/20 via-transparent to-transparent" />
          </motion.div>

          <div className="min-w-0 flex-1">
            {paragraphs.map((node, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.08 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="mb-4 text-base leading-relaxed text-ink-secondary md:text-[17px]"
              >
                {node}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.08 + paragraphs.length * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {stats.map((stat) => (
                <span
                  key={stat}
                  className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-ink-secondary"
                >
                  {stat}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
