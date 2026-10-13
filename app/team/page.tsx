import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import JoinWaitlistButton from "@/components/JoinWaitlistButton";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Whire is built by financial-infrastructure engineers with 6+ years shipping production-grade systems where uptime, compliance and scale are non-negotiable."
};

const navItems = [
  { label: "Features", href: "/#features" },
  { label: "Platform", href: "/#platform" },
  { label: "Team", href: "/team" }
];

const team = [
  {
    name: "Alex",
    photo: "/team/alex-neofitov.png",
    hook: "The engineer a top-tier bank trusted with compliance at 3M+ requests a day.",
    bio: [
      "Alex has already built what most fintechs only promise. At Alfa-Bank he engineered the compliance risk-scoring and automated account-opening systems for small-business customers across Russia and the CIS: APIs handling 3M+ requests a day, and ML models served across the entire bank.",
      "He scaled backend and API architecture at VK, a platform of 95M monthly users, and at Sequoia-backed Huspy led the backend squad that built the mortgage-broker portal and an AI document service from zero.",
      "Then he founded clogg.ai, an LLM-powered automation layer for e-commerce, and took it from zero to one as CTO. Whire is where both halves of that career meet: bank-grade compliance and agent-native product."
    ],
    trace: "→ Alfa-Bank · VK · Huspy · clogg.ai"
  },
  {
    name: "Pavel",
    photo: "/team/pavel-ianonis.png",
    hook: "Shipped the payment rails that Europe's banks already trust.",
    bio: [
      "Pavel has built payment infrastructure at the highest level in Europe. As Tech Lead at Wise he ran a six-engineer team on Wise Platform, automating KYC across four major EU bank partners and protecting £30M in monthly FX volume. He also built the API gateway Wise business clients integrate against.",
      "At ICBC Standard Bank he engineered low-latency Java trading systems that process 150k messages a second at a 2.5ms median, where a slow message costs real money. At B2C2, one of the world's leading crypto liquidity providers, he built exchange integrations, a market-making framework and real-time PnL tracking.",
      "Before that he launched Moscow Exchange's finance marketplace and scaled it to 1M+ monthly users, leading a team of eight. Applied mathematics, Moscow State University."
    ],
    trace: "→ Wise · ICBC Standard Bank · B2C2"
  },
  {
    name: "Konstantin",
    photo: "/team/konstantin-koloskov.png",
    hook: "The regulatory path, solved before customers ever have to ask.",
    bio: [
      "Konstantin is why Whire can promise compliance rather than hope for it. He owns the licensing roadmap from aggregator umbrella to Whire's own PISP authorization with the Dutch central bank (DNB), and the capital plan that gets there.",
      "In M&A he led due diligence, deal structuring and financial modelling on four acquisitions worth €20M+, including a payment provider he ran as interim CFO, cutting costs by 10% while redesigning its operations.",
      "He started at PwC, advising multinational clients on tax structuring and corporate reorganization. Few regulatory leads have sat on both sides of a payments company's books."
    ],
    trace: "→ PwC · €20M+ in M&A · PISP licensing"
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen px-4 py-4 sm:py-6 md:px-6 md:py-8">
      <div className="mx-auto flex w-full max-w-container flex-col gap-20 md:gap-24">
        <section className="wh-grid--columns relative rounded-xl border border-border px-5 py-6 md:px-12 md:py-10">
          <header className="mb-12 flex flex-col items-start gap-8 md:mb-20 md:flex-row md:items-center md:justify-between">
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
            <nav className="flex items-center gap-6 md:gap-8">
              {navItems.map((item) => {
                const isActive = item.href === "/team";

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative shrink-0 px-1 pb-2 pt-1 font-mono text-xs uppercase tracking-label transition-colors md:font-sans md:text-sm md:font-medium md:normal-case md:tracking-normal ${
                      isActive ? "text-fg-strong" : "text-fg-body hover:text-fg-strong"
                    }`}
                  >
                    {item.label}
                    {isActive ? (
                      <span className="absolute -bottom-px left-0 right-0 h-[1.5px] bg-accent" />
                    ) : null}
                  </Link>
                );
              })}
            </nav>
          </header>

          <div className="max-w-prose space-y-6 pb-6 md:pb-12">
            <p className="wh-eyebrow">Team</p>
            <h1 className="text-balance text-4xl font-light leading-tight tracking-display text-fg-strong sm:text-5xl md:text-6xl">
              Built by financial-infrastructure engineers.
            </h1>
            <p className="text-lg leading-normal text-fg-body">
              This team has shipped production financial infrastructure at Wise, Alfa-Bank,
              and ICBC Standard Bank. Uptime, compliance and scale were never optional
              there, and they are not optional at Whire.
            </p>
          </div>
        </section>

        <section aria-labelledby="founders-heading" className="space-y-10">
          <h2 id="founders-heading" className="wh-label">
            03 · founders
          </h2>

          <ol className="grid list-none gap-4 p-0 md:grid-cols-3">
            {team.map((member, index) => (
              <li
                key={member.name}
                className="flex flex-col rounded-lg border border-border bg-surface-panel p-6 transition-[border-color] hover:border-border-strong md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <Image
                    src={member.photo}
                    alt={`Portrait of ${member.name}`}
                    width={360}
                    height={360}
                    className="h-28 w-28 rounded border border-border object-cover"
                  />
                  <span className="font-mono text-xs tracking-label text-fg-muted">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-normal leading-snug tracking-title text-fg-strong">
                  {member.name}
                </h3>
                <p className="mt-3 text-lg font-normal leading-snug tracking-title text-fg-strong">
                  {member.hook}
                </p>

                <ul className="mb-6 mt-5 space-y-3 text-base leading-normal text-fg-body">
                  {member.bio.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>

                <p className="mt-auto border-t border-border pt-4 font-mono text-sm text-fg-accent">
                  {member.trace}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="flex flex-col gap-6 rounded-lg border border-border bg-surface-panel p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="space-y-2">
            <p className="wh-label">Early access</p>
            <p className="text-xl font-normal leading-snug tracking-title text-fg-strong">
              Building agent payments on SEPA Instant? Talk to the founders.
            </p>
          </div>
          <JoinWaitlistButton variant="secondary" />
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
