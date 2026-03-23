"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import type { Engine, ISourceOptions } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function SubtleNodeNetworkBackground() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncMotionPreference);
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      background: { color: "transparent" },
      fullScreen: { enable: false },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: { enable: false, mode: [] },
          onHover: {
            enable: !prefersReducedMotion,
            mode: "grab"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 175,
            links: {
              opacity: 0.95,
              blink: false
            }
          }
        }
      },
      particles: {
        color: { value: "#00f3ff" },
        links: {
          color: "#00f3ff",
          distance: 135,
          enable: true,
          opacity: 0.4,
          width: 1.15
        },
        move: {
          direction: "none",
          enable: !prefersReducedMotion,
          outModes: { default: "out" },
          random: true,
          speed: 0.32,
          straight: false
        },
        number: {
          density: { enable: true, area: 820 },
          limit: 140,
          value: 120
        },
        opacity: {
          value: { min: 0.35, max: 0.8 }
        },
        shape: { type: "circle" },
        size: {
          value: { min: 1.1, max: 2.6 }
        }
      },
      detectRetina: true
    }),
    [prefersReducedMotion]
  );

  if (!isHydrated) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.28
      }}
    >
      <Particles
        id="subtle-node-network"
        init={particlesInit}
        options={options}
        width="100vw"
        height="100vh"
        style={{
          position: "absolute",
          inset: 0,
          width: "100vw",
          height: "100vh"
        }}
      />
    </div>
  );
}
