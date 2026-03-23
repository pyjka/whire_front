"use client";

import {
  motion,
  type MotionValue,
  type Variants,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CreditCard,
  LayoutDashboard,
  type LucideIcon,
  ShieldCheck,
  Sparkles,
  Wand2
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import CalDemoButton from "./CalDemoButton";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Platform", href: "#platform" }
];

const metrics = [
  { label: "SEPA instant finality", value: "<10s" },
  { label: "Verification of payee", value: "Built-in" },
  { label: "Card rails dependency", value: "Zero" }
];

const featureCards = [
  {
    eyebrow: "Gateway",
    title: "Intent-to-IBAN orchestration",
    description:
      "Translate agent purchase intent into bank-ready payment instructions routed through SEPA Instant rails.",
    detail: "Bridge AI decisions to direct account movement without human checkout loops.",
    icon: CreditCard
  },
  {
    eyebrow: "Guardrails",
    title: "Protocol-level policy enforcement",
    description:
      "Set spend limits, merchant constraints, and approval logic once, then enforce them before funds move.",
    detail: "Keep autonomous payments controlled by design, not by manual intervention.",
    icon: ShieldCheck
  },
  {
    eyebrow: "Compliance",
    title: "EU-ready transaction handshake",
    description:
      "Identity checks and delegated authorization are embedded so machine-to-machine payments stay compliant.",
    detail: "Verification of payee and regulated routing are handled in the transaction flow.",
    icon: BrainCircuit
  },
  {
    eyebrow: "Architecture",
    title: "Zero-card payment rails",
    description:
      "Replace card-network overhead with direct agent-to-agent settlement on account-native infrastructure.",
    detail: "Improve margin by removing legacy gateway tax from autonomous commerce.",
    icon: Wand2
  },
  {
    eyebrow: "Visibility",
    title: "Real-time settlement visibility",
    description:
      "Track intent, policy decisions, and final settlement state in one clear operational surface.",
    detail: "Know what executed, why it executed, and when funds reached finality.",
    icon: LayoutDashboard
  },
  {
    eyebrow: "Developer Experience",
    title: "SDK-first autonomous checkout",
    description:
      "Integrate quickly with existing agents through a simple SDK and API model designed for production velocity.",
    detail: "Plug in once, define policies, and let agents transact safely at scale.",
    icon: Sparkles
  }
];

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07
    }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

function GlassPanel({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={`rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-300 hover:border-[#94bbd1]/30 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] hover:shadow-[0_16px_44px_rgba(148,187,209,0.14)] ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

function FeatureCard({
  feature,
  index
}: {
  feature: (typeof featureCards)[number];
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, scale: 1.01 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="h-full"
    >
      <Card className="h-full rounded-[1.75rem] border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.035))] transition-[border-color,box-shadow,background-color] duration-300 hover:border-[#94bbd1]/35 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))] hover:shadow-[0_14px_40px_rgba(148,187,209,0.16)]">
        <CardContent className="flex h-full flex-col gap-6 p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#94bbd1]/20 bg-[#94bbd1]/10 text-[#94bbd1]">
              <Icon className="h-5 w-5" />
            </div>
            <Badge variant="subtle" className="bg-white/[0.06] text-[#fff6e5]/60">
              0{index + 1}
            </Badge>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-[#94bbd1]/90">
              {feature.eyebrow}
            </p>
            <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#fff6e5] md:text-2xl">
              {feature.title}
            </h3>
            <p className="text-sm leading-7 text-[#fff6e5]/68">{feature.description}</p>
          </div>

          <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#fff6e5]/58">
            {feature.detail}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function Hero({
  heroY,
  heroOpacity,
  heroScale,
  activeSection
}: {
  heroY: MotionValue<number>;
  heroOpacity: MotionValue<number>;
  heroScale: MotionValue<number>;
  activeSection: string;
}) {
  return (
    <motion.section
      style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative min-h-[92svh] rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(46,85,107,0.34),rgba(31,56,71,0.84))] px-5 py-6 shadow-[0_35px_120px_rgba(0,0,0,0.24)] md:min-h-[94svh] md:px-10 md:py-10"
    >
      <motion.header
        variants={fadeUp}
        className="mb-8 flex items-center justify-between gap-6 md:mb-12 lg:mb-16"
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,#94bbd1,#2e556b)] shadow-[0_0_0_8px_rgba(148,187,209,0.14)]" />
          <span className="text-base font-medium tracking-tight text-[#fff6e5]">Whire</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative px-1 pb-2 pt-1 transition-colors duration-200 ${
                activeSection === item.href.slice(1)
                  ? "text-[#fff6e5]"
                  : "text-[#fff6e5]/68 hover:text-[#fff6e5]/92"
              }`}
            >
              {item.label}
              {activeSection === item.href.slice(1) ? (
                <motion.span
                  layoutId="desktop-nav-active-underline"
                  className="absolute -bottom-[1px] left-0 right-0 h-[2px] rounded-full bg-[#94bbd1]"
                  transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.35 }}
                />
              ) : null}
            </a>
          ))}
        </nav>
      </motion.header>

      <motion.nav variants={fadeUp} className="mb-8 flex items-center gap-4 overflow-x-auto md:hidden">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`relative shrink-0 px-1 pb-2 pt-1 text-xs uppercase tracking-[0.14em] transition-colors duration-200 ${
              activeSection === item.href.slice(1)
                ? "text-[#fff6e5]"
                : "text-[#fff6e5]/72"
            }`}
          >
            {item.label}
            {activeSection === item.href.slice(1) ? (
              <motion.span
                layoutId="mobile-nav-active-underline"
                className="absolute -bottom-[1px] left-0 right-0 h-[2px] rounded-full bg-[#94bbd1]"
                transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.35 }}
              />
            ) : null}
          </a>
        ))}
      </motion.nav>

      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
        <motion.div variants={fadeUp} className="space-y-7">
          <Badge
            variant="accent"
            className="border-[#94bbd1]/20 bg-[#94bbd1]/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.24em] text-[#fff6e5]"
          >
            Infrastructure for Europe&apos;s autonomous payment era
          </Badge>

          <h1 className="text-balance text-4xl font-semibold leading-[0.94] tracking-[-0.05em] text-[#fff6e5] sm:text-5xl md:text-7xl">
            Give AI agents the ability to pay and get paid.
          </h1>

          <p className="max-w-xl text-base leading-8 text-[#fff6e5]/70 md:text-lg">
            Whire is the transaction layer between agents, merchants, and banks,
            turning autonomous intent into secure, compliant, real-time settlement.
          </p>

          <div id="join" className="flex flex-col gap-4 pt-3 sm:flex-row sm:items-center">
            <CalDemoButton
              className={buttonVariants({
                size: "lg",
                variant: "secondary",
                className:
                  "rounded-[1.1rem] border border-white/10 bg-white/[0.05] px-7 py-6 text-[#fff6e5] shadow-[0_12px_36px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.09] hover:shadow-[0_18px_44px_rgba(0,0,0,0.25)]"
              })}
            >
              Learn more
            </CalDemoButton>
            <p className="text-sm leading-7 text-[#fff6e5]/58">
              Explore how your agent can start transacting in minutes, not weeks.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <GlassPanel className="p-5 md:p-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.22em] text-[#94bbd1]">Overview</p>
              <ArrowRight className="h-4 w-4 text-[#94bbd1]" />
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0.9 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ y: -2, scale: 1.01 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.24, delay: index * 0.04 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-[border-color,box-shadow,background-color] duration-300 hover:border-[#94bbd1]/35 hover:bg-white/[0.08] hover:shadow-[0_12px_30px_rgba(148,187,209,0.14)]"
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#fff6e5]/55">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-[#fff6e5]">
                    {metric.value}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,246,229,0.05),rgba(148,187,209,0.04))] p-4 text-sm leading-7 text-[#fff6e5]/70">
              One focused layer for intent capture, policy checks, account routing, and
              irrevocable settlement feedback.
            </div>
          </GlassPanel>
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

  const heroY = useTransform(smoothProgress, [0, 1], [0, -64]);
  const heroOpacity = useTransform(smoothProgress, [0, 1], [1, 0.63]);
  const heroScale = useTransform(smoothProgress, [0, 1], [1, 0.986]);

  return (
    <main
      ref={mainRef}
      data-scroll-root="landing"
      className="relative h-screen scroll-smooth overflow-y-auto overflow-x-hidden px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 md:gap-16">
        <Hero
          heroY={heroY}
          heroOpacity={heroOpacity}
          heroScale={heroScale}
          activeSection={activeSection}
        />

        <motion.section
          id="features"
          ref={featuresRef}
          className="space-y-8 md:space-y-10"
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
            <div>
              <Badge
                variant="subtle"
                className="mb-4 bg-white/[0.05] px-4 py-1.5 text-[11px] uppercase tracking-[0.24em] text-[#fff6e5]/70"
              >
                Agentic Gateway
              </Badge>
              <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-[#fff6e5] md:text-5xl">
                Built to make autonomous transactions practical.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#fff6e5]/65 md:justify-self-end">
              Purpose-built middleware that helps agents transact safely, instantly, and
              with compliance logic embedded from day one.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </motion.section>

        <motion.section
          id="platform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="pb-6 md:pb-12"
        >
          <GlassPanel className="p-5 md:p-8">
            <motion.div variants={fadeUp} className="mb-8 md:mb-10">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#94bbd1]">
                How It Works
              </p>
              <h3 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.03em] text-[#fff6e5] md:text-4xl">
                Integrate once, enforce policy, and settle from intent to bank rails in seconds.
              </h3>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Intent is established",
                  description:
                    "A payment request is created with clear context so the next step is automatic."
                },
                {
                  title: "Payment checks are verified",
                  description:
                    "Built-in safeguards confirm the payment details before funds are routed."
                },
                {
                  title: "SEPA instant settles in under 10s",
                  description:
                    "Funds move quickly with near real-time confirmation and visible final status."
                }
              ].map((step) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ duration: 0.24 }}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5 transition-[border-color,box-shadow,background-color] duration-300 hover:border-[#94bbd1]/35 hover:bg-white/[0.08] hover:shadow-[0_12px_30px_rgba(148,187,209,0.14)]"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[#94bbd1]/95">
                    {step.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#fff6e5]/68">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </motion.section>
      </div>
    </main>
  );
}
