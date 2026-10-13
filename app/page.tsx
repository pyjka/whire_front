"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  type MotionValue,
  type Variants,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import JoinWaitlistButton from "@/components/JoinWaitlistButton";
import SiteFooter from "@/components/SiteFooter";
import {
  Card,
  CardContent,
  CardDescription,
  CardIndex,
  CardTitle
} from "@/components/ui/card";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Platform", href: "#platform" },
  { label: "Team", href: "/team" }
];

const metrics = [
  { label: "Settlement finality", value: "<10s" },
  { label: "Verification of payee", value: "Built-in" },
  { label: "Card rails dependency", value: "Zero" }
];

const featureCards = [
  {
    eyebrow: "Gateway",
    title: "Intent-to-IBAN orchestration",
    description:
      "Translate agent purchase intent into bank-ready payment instructions routed through real-time payment rails.",
    detail: "Bridge AI decisions to direct account movement without human checkout loops."
  },
  {
    eyebrow: "Guardrails",
    title: "Protocol-level policy enforcement",
    description:
      "Set spend limits, merchant constraints, and approval logic once, then enforce them before funds move.",
    detail: "Keep autonomous payments controlled by design, not by manual intervention."
  },
  {
    eyebrow: "Compliance",
    title: "EU-ready transaction handshake",
    description:
      "Identity checks and delegated authorization are embedded so machine-to-machine payments stay compliant.",
    detail: "Verification of Payee and regulated routing are handled in the transaction flow."
  },
  {
    eyebrow: "Architecture",
    title: "Zero-card payment rails",
    description:
      "Replace card-network overhead with direct agent-to-agent settlement on account-native infrastructure.",
    detail: "Improve margin by removing legacy gateway tax from autonomous commerce."
  },
  {
    eyebrow: "Visibility",
    title: "Real-time settlement visibility",
    description:
      "Track intent, policy decisions, and final settlement state in one clear operational surface.",
    detail: "Know what executed, why it executed, and when funds reached finality."
  },
  {
    eyebrow: "Developer experience",
    title: "SDK-first autonomous checkout",
    description:
      "Integrate quickly with existing agents through a simple SDK and API model designed for production velocity.",
    detail: "Plug in once, define policies, and let agents transact safely at scale."
  }
];

const steps = [
  {
    index: "01",
    label: "Intent",
    title: "Intent is established",
    description:
      "A payment request is created with clear context so the next step is automatic."
  },
  {
    index: "02",
    label: "Verification",
    title: "Payment checks are verified",
    description:
      "Built-in safeguards confirm the payment details before funds are routed."
  },
  {
    index: "03",
    label: "Settlement",
    title: "Settlement completes in under 10 seconds",
    description:
      "Funds move on SEPA Instant with real-time confirmation and a visible final status."
  }
];

// Motion is restrained: 120–180ms ease-out fades, no bounce, no scale.
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.18,
      ease: [0.2, 0.7, 0.2, 1]
    }
  }
};

function NavLinks({
  activeSection,
  layoutId,
  className,
  linkClassName
}: {
  activeSection: string;
  layoutId: string;
  className: string;
  linkClassName: string;
}) {
  return (
    <nav className={className}>
      {navItems.map((item) => {
        const isHash = item.href.startsWith("#");
        const isActive = isHash && activeSection === item.href.slice(1);
        const LinkComponent = isHash ? "a" : Link;

        return (
          <LinkComponent
            key={item.href}
            href={item.href}
            className={`relative shrink-0 px-1 pb-2 pt-1 transition-colors ${linkClassName} ${
              isActive ? "text-fg-strong" : "text-fg-body hover:text-fg-strong"
            }`}
          >
            {item.label}
            {isActive ? (
              <motion.span
                layoutId={layoutId}
                className="absolute -bottom-px left-0 right-0 h-[1.5px] bg-accent"
                transition={{ duration: 0.18, ease: "easeOut" }}
              />
            ) : null}
          </LinkComponent>
        );
      })}
    </nav>
  );
}

function TracePanel() {
  return (
    <div className="wh-panel">
      <div className="wh-panel__bar">
        <span>transfer · sandbox</span>
        <span>sepa_instant</span>
      </div>
      <pre className="wh-panel__code">
        <span className="c">{"// agent → Whire → bank"}</span>
        {"\n"}
        <span className="k">intent</span>
        {"     pay "}
        <span className="s">€250</span>
        {" to DE89 3704 0044 0532 0130 00\n"}
        <span className="k">policy</span>
        {"     Policy Guard · max €250 / transfer · "}
        <span className="s">pass</span>
        {"\n"}
        <span className="k">vop</span>
        {"        Verification of Payee · "}
        <span className="s">match</span>
        {"\n"}
        <span className="r">{"→ settled · 8.2s · vop_verified"}</span>
      </pre>
    </div>
  );
}

function FeatureCard({
  feature,
  index
}: {
  feature: (typeof featureCards)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.18,
        delay: index * 0.04,
        ease: [0.2, 0.7, 0.2, 1]
      }}
      className="h-full"
    >
      <Card className="h-full hover:border-border-strong">
        <CardContent className="flex h-full flex-col gap-5">
          <div className="flex items-center justify-between gap-4">
            <CardIndex>{feature.eyebrow}</CardIndex>
            <span className="font-mono text-xs tracking-label text-fg-muted">
              0{index + 1}
            </span>
          </div>

          <div className="space-y-2">
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.description}</CardDescription>
          </div>

          <p className="mt-auto border-t border-border pt-4 text-sm leading-normal text-fg-muted">
            {feature.detail}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function Hero({
  heroY,
  heroOpacity,
  activeSection
}: {
  heroY: MotionValue<number>;
  heroOpacity: MotionValue<number>;
  activeSection: string;
}) {
  return (
    <motion.section
      style={{ y: heroY, opacity: heroOpacity }}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="wh-grid--columns relative min-h-[92svh] rounded-xl border border-border px-5 py-6 md:min-h-[94svh] md:px-12 md:py-10"
    >
      <motion.header
        variants={fadeUp}
        className="mb-10 flex items-center justify-between gap-6 md:mb-16 lg:mb-20"
      >
        <Link href="/" aria-label="Whire home" className="flex items-center">
          <Image
            src="/whire-wordmark-sand.svg"
            alt="Whire"
            width={496}
            height={162}
            priority
            className="h-5 w-auto md:h-6"
          />
        </Link>
        <NavLinks
          activeSection={activeSection}
          layoutId="desktop-nav-active-underline"
          className="hidden items-center gap-8 md:flex"
          linkClassName="text-sm font-medium"
        />
      </motion.header>

      <motion.div variants={fadeUp} className="mb-10 md:hidden">
        <NavLinks
          activeSection={activeSection}
          layoutId="mobile-nav-active-underline"
          className="flex items-center gap-6 overflow-x-auto"
          linkClassName="font-mono text-xs uppercase tracking-label"
        />
      </motion.div>

      <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] xl:gap-16">
        <motion.div variants={fadeUp} className="min-w-0 space-y-8">
          <p className="wh-eyebrow">Infrastructure for Europe&apos;s autonomous payment era</p>

          <h1 className="text-balance text-5xl font-light leading-display tracking-display text-fg-strong sm:text-6xl md:text-7xl xl:text-[88px]">
            Give AI agents the ability to pay and get paid, safely.
          </h1>

          <p className="max-w-prose text-lg leading-normal text-fg-body">
            Whire is the transaction layer between agents, merchants, and banks,
            turning autonomous intent into secure, compliant, real-time settlement.
          </p>

          <div id="join" className="flex flex-col items-start gap-4 pt-2">
            <JoinWaitlistButton size="lg" />
            <p className="font-mono text-sm text-fg-muted">
              → early access · EU-based · developer-led
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="min-w-0 space-y-4">
          <TracePanel />

          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-border bg-surface-panel p-5"
              >
                <p className="wh-label">{metric.label}</p>
                <p className="mt-3 whitespace-nowrap font-mono text-xl text-fg-strong">{metric.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default function Home() {
  const mainRef = useRef<HTMLElement | null>(null);
  const featuresRef = useRef<HTMLElement | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const root = mainRef.current;
    if (!root) {
      return;
    }

    const trackedIds = ["features", "platform"];
    const trackedSections = trackedIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!trackedSections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
          return;
        }

        if (root.scrollTop < 180) {
          setActiveSection("");
        }
      },
      {
        root,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.6]
      }
    );

    trackedSections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    container: mainRef,
    target: featuresRef,
    offset: ["start 95%", "start 58%"]
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 58,
    damping: 34,
    mass: 0.95
  });

  const heroY = useTransform(smoothProgress, [0, 1], [0, -32]);
  const heroOpacity = useTransform(smoothProgress, [0, 1], [1, 0.7]);

  return (
    <main
      ref={mainRef}
      data-scroll-root="landing"
      className="relative h-screen scroll-smooth overflow-y-auto overflow-x-hidden px-4 py-4 sm:py-6 md:px-6 md:py-8"
    >
      <div className="mx-auto flex w-full max-w-container flex-col gap-20 md:gap-24">
        <Hero
          heroY={heroY}
          heroOpacity={heroOpacity}
          activeSection={activeSection}
        />

        <section
          id="features"
          ref={featuresRef}
          className="space-y-10 md:space-y-12"
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
            <div className="space-y-4">
              <p className="wh-eyebrow">Agentic gateway</p>
              <h2 className="text-balance text-4xl font-light leading-tight tracking-display text-fg-strong md:text-5xl">
                Built to make autonomous transactions practical.
              </h2>
            </div>
            <p className="max-w-md text-base leading-normal text-fg-body lg:justify-self-end">
              Purpose-built middleware that helps agents transact safely, instantly, and
              with compliance logic embedded from day one.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </section>

        <motion.section
          id="platform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="space-y-12 md:space-y-16"
        >
          <motion.div variants={fadeUp} className="min-w-0 space-y-4">
            <p className="wh-eyebrow">How it works</p>
            <h3 className="max-w-3xl text-balance text-3xl font-light leading-tight tracking-display text-fg-strong md:text-4xl">
              Integrate once, enforce policy, and settle from intent to bank rails in seconds.
            </h3>
          </motion.div>

          <motion.ol variants={fadeUp} className="wh-rail list-none p-0">
            {steps.map((step, index) => (
              <li
                key={step.index}
                className={`wh-rail__stop ${
                  index === steps.length - 1 ? "wh-rail__stop--active" : ""
                }`}
              >
                <p className="wh-label">
                  {step.index} · {step.label}
                </p>
                <p className="text-xl font-normal leading-snug tracking-title text-fg-strong">
                  {step.title}
                </p>
                <p className="text-base leading-normal text-fg-body">{step.description}</p>
              </li>
            ))}
          </motion.ol>
        </motion.section>

        <SiteFooter />
      </div>

    </main>
  );
}
