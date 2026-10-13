"use client";

import type { ReactNode } from "react";

import { Button, type ButtonProps } from "@/components/ui/button";

/** Tally popup form. The embed script is loaded once in app/layout.tsx. */
export const TALLY_FORM_ID = "D4roQZ";

const tallyAttributes = {
  "data-tally-open": TALLY_FORM_ID,
  "data-tally-layout": "modal",
  "data-tally-width": "600",
  "data-tally-overlay": "1",
  "data-tally-emoji-text": "👋",
  "data-tally-emoji-animation": "wave"
} as const;

type JoinWaitlistButtonProps = {
  children?: ReactNode;
  className?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  /** Render as a bare text button (for footers and inline links) instead of a styled Button. */
  plain?: boolean;
};

/** Opens the Tally waitlist popup. Drop it anywhere; every instance opens the same form. */
export default function JoinWaitlistButton({
  children = "Join waitlist",
  className,
  variant,
  size,
  plain = false
}: JoinWaitlistButtonProps) {
  if (plain) {
    return (
      <button type="button" className={className} {...tallyAttributes}>
        {children}
      </button>
    );
  }

  return (
    <Button variant={variant} size={size} className={className} {...tallyAttributes}>
      {children}
    </Button>
  );
}
