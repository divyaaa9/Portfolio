"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-config";

const paragraphs = [
  "I'm a third-year Computer Science and Systems Engineering undergraduate at Lendi Institute of Engineering and Technology, maintaining an 8.7 GPA. I'm a passionate learner who enjoys building things from scratch and turning ideas into practical, working solutions.",
  "I work primarily with C, Python, and web technologies, with a focus on building backend-driven applications, automation tools, and AI-powered systems. I'm particularly interested in creating applications where software, intelligent systems, and structured data come together to solve real-world problems.",
  "I enjoy exploring new technologies, solving problems, and continuously improving the way I build. Alongside technical skills, I value clear communication, teamwork, and taking responsibility in leadership roles. I'm hardworking, enthusiastic, and enjoy contributing both as an individual and as part of a team.",
];

export function About() {
  return (
    <section id="about" className="section-y">
      <div className="container">
        <SectionHeading eyebrow="About" title="A little about how I work" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.7fr] md:gap-14 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center md:sticky md:top-28 md:h-full md:items-center md:justify-center md:self-start"
          >
            <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-lg border border-border bg-surface-card">
              <Image
                src={siteConfig.aboutImage}
                alt={`${siteConfig.name} at work`}
                fill
                sizes="(min-width: 768px) 280px, 60vw"
                className="object-cover grayscale-[15%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/20 via-transparent to-transparent" />
            </div>
          </motion.div>

          <div className="max-w-prose space-y-6">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-base leading-relaxed text-ink-secondary md:text-[17px]"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
