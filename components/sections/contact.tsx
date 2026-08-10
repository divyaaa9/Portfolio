"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Code2,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const contactRows = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "Location", value: siteConfig.location, href: undefined, icon: MapPin },
];

const profileLinks = [
  { label: "GitHub", href: siteConfig.social.github, icon: Github },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
  { label: "LeetCode", href: siteConfig.social.leetcode, icon: Code2 },
  { label: "GeeksforGeeks", href: siteConfig.social.gfg, icon: Code2 },
  { label: "Resume", href: siteConfig.resumeUrl, icon: FileText },
];

export function Contact() {
  return (
    <section id="contact" className="section-y">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
            <span className="h-px w-6 bg-ink-muted/60" aria-hidden="true" />
            Contact
          </span>
          <h2 className="mt-3 font-display text-display-md font-medium text-ink">
            Let&rsquo;s Connect
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-secondary">
            Whether it&rsquo;s a project, an opportunity, or a conversation, my inbox is
            always open.
          </p>

          <div className="mt-7">
            <Button size="lg" onClick={() => window.location.assign(`mailto:${siteConfig.email}`)}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              Get In Touch
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {contactRows.map((row) => {
            const Icon = row.icon;
            const content = (
              <>
                <Icon className="h-4 w-4 text-ink-muted" aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-[0.1em] text-ink-muted">
                  {row.label}
                </span>
                <span className="text-sm text-ink-secondary">{row.value}</span>
              </>
            );
            const rowClass =
              "flex flex-col items-center gap-2 rounded-md border border-border bg-surface-card p-5 text-center transition-colors duration-300 ease-premium hover:border-ink/20 hover:bg-surface-hover";

            return row.href ? (
              <a key={row.label} href={row.href} className={rowClass}>
                {content}
              </a>
            ) : (
              <div key={row.label} className={rowClass}>
                {content}
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-3"
        >
          {profileLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2.5 text-[13px] font-medium text-ink-secondary transition-colors duration-300 ease-premium hover:border-ink/30 hover:bg-surface-hover hover:text-ink"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {link.label}
                <ArrowUpRight
                  className="h-3 w-3 text-ink-muted transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
