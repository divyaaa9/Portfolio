import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col items-center gap-2 py-10 text-center">
        <p className="text-sm text-ink-muted">
          Designed &amp; developed by{" "}
          <span className="text-ink-secondary">{siteConfig.name}</span>.
        </p>
        <p className="text-xs text-ink-muted/80">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
