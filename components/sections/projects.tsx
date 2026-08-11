"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isPointerDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  // Shared with every card so a click right after a drag doesn't fire navigation.
  const dragDistance = useRef(0);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    function updateScrollState() {
      if (!el) return;
      setCanScrollLeft(el.scrollLeft > 8);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
    }

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  function scrollByAmount(direction: "left" | "right") {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("[data-project-card]")?.clientWidth ?? 400;
    el.scrollBy({ left: direction === "left" ? -(cardWidth + 24) : cardWidth + 24, behavior: "smooth" });
  }

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
        <SectionHeading eyebrow="Projects" title="Selected work" />
      </div>

      <div className="relative">
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

        <CarouselArrow
          direction="left"
          visible={canScrollLeft}
          onClick={() => scrollByAmount("left")}
        />
        <CarouselArrow
          direction="right"
          visible={canScrollRight}
          onClick={() => scrollByAmount("right")}
        />
      </div>
    </section>
  );
}

function CarouselArrow({
  direction,
  visible,
  onClick,
}: {
  direction: "left" | "right";
  visible: boolean;
  onClick: () => void;
}) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Scroll projects left" : "Scroll projects right"}
      className={`absolute top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-base/70 text-ink-secondary backdrop-blur-md transition-all duration-300 ease-premium hover:border-ink/30 hover:bg-surface-hover hover:text-ink md:flex ${
        direction === "left" ? "left-2 lg:left-6" : "right-2 lg:right-6"
      } ${visible ? "opacity-60 hover:opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </button>
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
      data-project-card
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
      className={`group w-[79vw] shrink-0 select-none rounded-md border border-border bg-surface-card transition-all duration-300 ease-premium hover:border-ink/25 hover:bg-surface-hover hover:shadow-[0_0_50px_-18px_rgba(245,245,242,0.4)] sm:w-[400px] ${
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

      <div className="p-5">
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

        <div className="mt-4 flex flex-wrap gap-2">
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
            className="relative z-10 mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-ink-secondary transition-colors duration-300 ease-premium hover:text-ink"
          >
            GitHub <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </div>
    </motion.div>
  );
}
