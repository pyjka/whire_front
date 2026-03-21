"use client";

import { getCalApi } from "@calcom/embed-react";
import type { ReactNode } from "react";
import { useEffect } from "react";

import { cn } from "@/lib/utils";

type CalDemoButtonProps = {
  className?: string;
  children: ReactNode;
};

export default function CalDemoButton({
  className,
  children
}: CalDemoButtonProps) {
  useEffect(() => {
    (async function loadCal() {
      await getCalApi({
        namespace: "15min",
        embedJsUrl: "https://app.cal.eu/embed/embed.js"
      });

      const cal = (globalThis as typeof globalThis & { Cal?: unknown }).Cal as
        | (((...args: unknown[]) => void) & {
            ns?: Record<string, (...args: unknown[]) => void>;
          })
        | undefined;

      cal?.("init", "15min", { origin: "https://app.cal.eu" });
      cal?.ns?.["15min"]?.("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#fff6e5" },
          dark: { "cal-brand": "#2e556b" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <button
      type="button"
      className={cn(className)}
      data-cal-namespace="15min"
      data-cal-link="whire/15min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
    >
      {children}
    </button>
  );
}
