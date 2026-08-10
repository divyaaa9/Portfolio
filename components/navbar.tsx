"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-premium",
        scrolled ? "border-b border-border bg-base/70 backdrop-blur-lg" : "border-b border-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between md:h-18">
        <a
          href="#home"
          className="font-display text-sm font-semibold tracking-tight text-ink"
        >
          {siteConfig.name}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={cn(
                    "relative block rounded-xs px-3.5 py-2 text-[13px] font-medium tracking-tight transition-colors duration-300 ease-premium",
                    isActive ? "text-ink" : "text-ink-muted hover:text-ink-secondary"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute inset-x-3 -bottom-[1px] h-px bg-ink"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-[13px] font-medium text-ink-secondary transition-colors duration-300 ease-premium hover:border-ink/30 hover:text-ink hover:bg-surface-hover"
          >
            Resume
            <ArrowDownToLine className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-sm text-ink lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-border bg-base/95 backdrop-blur-lg lg:hidden"
        >
          <ul className="container flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-[15px] font-medium text-ink-secondary transition-colors duration-300 ease-premium hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={siteConfig.resumeUrl}
                download
                className="inline-flex items-center gap-2 py-3 text-[15px] font-medium text-ink"
              >
                Resume
                <ArrowDownToLine className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
