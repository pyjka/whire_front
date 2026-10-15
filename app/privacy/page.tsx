import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} collects, uses and protects personal data on this website.`
};

const sections = [
  {
    id: "who",
    title: "Who we are",
    body: [
      `${site.legalName} ("Whire", "we") operates this website at ${site.url.replace("https://", "")}. Our registered address is ${site.address}. We are the data controller for the personal data described in this policy. You can reach us at ${site.email}.`
    ]
  },
  {
    id: "what",
    title: "What we collect",
    body: [
      "Waitlist form. When you join the waitlist we collect the details you enter in the form, such as your name, email address, company and anything you write in free-text fields.",
      "Demo bookings. If you book a call, we collect the details you enter in the booking form, including your name, email address and the time you choose.",
      "Technical data. Our hosting provider records standard server logs, including IP address, browser type and the pages requested, to keep the site running and secure."
    ]
  },
  {
    id: "why",
    title: "Why we use it",
    body: [
      "To contact you about early access to Whire, including sandbox invitations and product updates. Legal basis: your consent, which you give by submitting the form and can withdraw at any time.",
      "To schedule and hold the demo you requested. Legal basis: taking steps at your request before entering into a contract.",
      "To keep the website secure and available. Legal basis: our legitimate interest in running a reliable service."
    ]
  },
  {
    id: "processors",
    title: "Who processes it for us",
    body: [
      "Tally (waitlist forms), Cal.com (demo bookings) and our hosting provider process data on our behalf under data processing agreements. Some of these providers may store data outside the European Economic Area under standard contractual clauses or an adequacy decision.",
      "We do not sell personal data and we do not share it with advertisers."
    ]
  },
  {
    id: "cookies",
    title: "Cookies",
    body: [
      "This website does not set analytics or advertising cookies. Embedded forms and booking widgets may set strictly necessary cookies to function."
    ]
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: [
      "Waitlist and demo data is kept until you ask us to remove it or until the waitlist is closed, whichever comes first. Server logs are retained for a short, fixed period by our hosting provider."
    ]
  },
  {
    id: "rights",
    title: "Your rights",
    body: [
      "Under the GDPR you can ask us to access, correct, delete or export your personal data, to restrict or object to how we use it, and to withdraw consent at any time. You can also lodge a complaint with your local data protection authority.",
      `To exercise any of these rights, email ${site.email}. We respond within one month.`
    ]
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: [
      "We will update this page when our practices change. The date at the top shows the latest revision."
    ]
  }
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-4 py-4 sm:py-6 md:px-6 md:py-8">
      <div className="mx-auto flex w-full max-w-container flex-col gap-16 md:gap-20">
        <section className="wh-grid--columns relative rounded-xl border border-border px-5 py-6 md:px-12 md:py-10">
          <header className="mb-12 flex items-center justify-between gap-6 md:mb-16">
            <Link href="/" aria-label="Whire home" className="flex shrink-0 items-center">
              <Image
                src="/whire-wordmark-sand.svg"
                alt="Whire"
                width={496}
                height={162}
                priority
                className="h-5 w-auto md:h-6"
              />
            </Link>
            <Link
              href="/"
              className="font-mono text-xs uppercase tracking-label text-fg-body transition-colors hover:text-fg-strong"
            >
              ← Home
            </Link>
          </header>

          <div className="max-w-prose space-y-6">
            <p className="wh-eyebrow">Legal</p>
            <h1 className="text-balance text-4xl font-light leading-tight tracking-display text-fg-strong md:text-5xl">
              Privacy policy
            </h1>
            <p className="font-mono text-sm text-fg-muted">
              Last updated · {site.privacyUpdated}
            </p>
          </div>
        </section>

        <article className="mx-auto w-full max-w-prose space-y-12">
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} className="space-y-4">
              <p className="wh-label">0{index + 1}</p>
              <h2 className="text-2xl font-normal leading-snug tracking-title text-fg-strong">
                {section.title}
              </h2>
              <div className="space-y-4 text-base leading-normal text-fg-body">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </article>

        <SiteFooter />
      </div>
    </main>
  );
}
