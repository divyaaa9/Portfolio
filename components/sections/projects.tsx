"use client";

import * as React from "react";
import { useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragRange, setDragRange] = useState(0);

  useLayoutEffect(() => {
    function measure() {
      if (!trackRef.current || !containerRef.current) return;
      const overflow = trackRef.current.scrollWidth - containerRef.current.clientWidth;
      setDragRange(Math.max(overflow, 0));
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section id="projects" className="section-y overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Drag sideways to browse. Click any card to open the live project."
        />
      </div>

      <div ref={containerRef} className="container cursor-grab active:cursor-grabbing">
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -dragRange, right: 0 }}
          dragElastic={0.06}
          className="flex gap-6"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
          {/* trailing spacer so the last card can clear the viewport edge */}
          <div className="w-px shrink-0" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const hasLive = Boolean(project.liveUrl);
  const liveUrl = project.liveUrl;

  // The card itself opens the live project; only the pointer-up (not a drag)
  // triggers navigation, so dragging the carousel never fires a false click.
  const pointerDownX = useRef(0);

  function handlePointerDown(e: React.PointerEvent) {
    pointerDownX.current = e.clientX;
  }

  function handleClick(e: React.MouseEvent) {
    if (!liveUrl) return;
    const moved = Math.abs(e.clientX - pointerDownX.current);
    if (moved > 6) return; // treat as a drag, not a click
    window.open(liveUrl, "_blank", "noreferrer");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      role={hasLive ? "link" : undefined}
      tabIndex={hasLive ? 0 : undefined}
      aria-label={hasLive ? `Open ${project.name} live project` : undefined}
      onPointerDown={hasLive ? handlePointerDown : undefined}
      onClick={hasLive ? handleClick : undefined}
      onKeyDown={
        hasLive
          ? (e) => {
              if (e.key === "Enter" && liveUrl) {
                window.open(liveUrl, "_blank", "noreferrer");
              }
            }
          : undefined
      }
      className={`group w-[82vw] shrink-0 select-none rounded-md border border-border bg-surface-card transition-colors duration-300 ease-premium hover:border-ink/25 hover:bg-surface-hover sm:w-[420px] ${
        hasLive ? "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40" : ""
      }`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-md border-b border-border bg-base">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          draggable={false}
          sizes="(min-width: 640px) 420px, 82vw"
          className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-lg font-medium text-ink">{project.name}</h3>
          {hasLive ? (
            <ArrowUpRight
              className="mt-1 h-4 w-4 shrink-0 text-ink-muted transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
              aria-hidden="true"
            />
          ) : null}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-xs border border-border px-2.5 py-1 text-[12px] text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            className="relative z-10 mt-5 inline-flex items-center gap-1 text-[13px] font-medium text-ink-secondary transition-colors duration-300 ease-premium hover:text-ink"
          >
            GitHub <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </div>
    </motion.div>
  );
}
