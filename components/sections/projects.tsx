"use client";

import * as React from "react";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isPointerDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  // Shared with every card so a click right after a drag doesn't fire navigation.
  const dragDistance = useRef(0);

  function onPointerDown(e: React.PointerEvent) {
    if (!scrollerRef.current) return;
    isPointerDown.current = true;
    startX.current = e.clientX;
    startScrollLeft.current = scrollerRef.current.scrollLeft;
    dragDistance.current = 0;
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!isPointerDown.current || !scrollerRef.current) return;
    const dx = e.clientX - startX.current;
    dragDistance.current = Math.abs(dx);
    scrollerRef.current.scrollLeft = startScrollLeft.current - dx;
  }

  function onPointerUp() {
    isPointerDown.current = false;
  }

  return (
    <section id="projects" className="section-y overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Drag or scroll sideways to browse. Click any card to open the live project."
        />
      </div>

      <div
        ref={scrollerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className="no-scrollbar container flex cursor-grab gap-6 overflow-x-auto select-none active:cursor-grabbing"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} dragDistanceRef={dragDistance} />
        ))}
        {/* trailing spacer so the last card can clear the viewport edge */}
        <div className="w-px shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  dragDistanceRef,
}: {
  project: (typeof projects)[number];
  index: number;
  dragDistanceRef: React.MutableRefObject<number>;
}) {
  const hasLive = Boolean(project.liveUrl);
  const liveUrl = project.liveUrl;

  function handleClick() {
    if (!liveUrl) return;
    if (dragDistanceRef.current > 6) return; // treat as a drag, not a click
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
      className={`group w-[79vw] shrink-0 select-none rounded-md border border-border bg-surface-card transition-colors duration-300 ease-premium hover:border-ink/25 hover:bg-surface-hover sm:w-[400px] ${
        hasLive ? "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40" : ""
      }`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-md border-b border-border bg-base">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          draggable={false}
          sizes="(min-width: 640px) 400px, 79vw"
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
