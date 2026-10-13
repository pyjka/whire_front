import Image from "next/image";
import Link from "next/link";

import JoinWaitlistButton from "@/components/JoinWaitlistButton";
import { site } from "@/lib/site";

const columns = [
  {
    label: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Platform", href: "/#platform" },
      { label: "Join waitlist", waitlist: true }
    ]
  },
  {
    label: "Company",
    links: [
      { label: "Team", href: "/team" },
      { label: "LinkedIn", href: site.linkedin, external: true },
      { label: site.email, href: `mailto:${site.email}` }
    ]
  },
  {
    label: "Legal",
    links: [{ label: "Privacy policy", href: "/privacy" }]
  }
];

export default function SiteFooter() {
  return (
    <footer className="wh-grid--columns rounded-xl border border-border px-5 py-8 md:px-12 md:py-10">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,0.6fr))] md:gap-8">
        <div className="space-y-4">
          <Image
            src="/whire-wordmark-sand.svg"
            alt="Whire"
            width={496}
            height={162}
            className="h-4 w-auto"
          />
          <p className="max-w-xs text-sm leading-normal text-fg-body">{site.tagline}</p>
          <p className="font-mono text-xs tracking-[0.08em] text-fg-muted">
            SEPA Instant first · every A2A rail next
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.label} className="space-y-3">
            <p className="wh-label">{column.label}</p>
            <ul className="space-y-2 text-sm">
              {column.links.map((link) =>
                "waitlist" in link ? (
                  <li key={link.label}>
                    <JoinWaitlistButton
                      plain
                      className="text-fg-body transition-colors hover:text-fg-strong"
                    />
                  </li>
                ) : "external" in link && link.external ? (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fg-body transition-colors hover:text-fg-strong"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-fg-body transition-colors hover:text-fg-strong"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-border pt-5 font-mono text-xs tracking-[0.08em] text-fg-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.legalName} · {site.address}
        </p>
        <p>Sandbox stage · not yet live on production rails</p>
      </div>
    </footer>
  );
}
