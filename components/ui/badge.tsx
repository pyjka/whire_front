import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/** Whire badge: mono uppercase status pill — the only pill shape in the system. */
const badgeVariants = cva(
  "inline-flex h-[26px] items-center gap-2 whitespace-nowrap rounded-full border bg-transparent px-3 font-mono text-xs uppercase leading-none tracking-[0.1em]",
  {
    variants: {
      variant: {
        default: "border-border text-fg-muted",
        accent: "border-accent bg-accent text-fg-on-accent",
        "outline-accent": "border-accent text-fg-accent",
        strong: "border-surface-inverse bg-surface-inverse text-fg-inverse",
        positive: "border-positive text-positive",
        negative: "border-negative text-negative",
        warning: "border-warning text-warning"
      },
      size: {
        default: "",
        lg: "h-8 px-4 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

function Badge({ className, variant, size, dot = false, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot ? <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-current" /> : null}
      {children}
    </span>
  );
}

export { Badge, badgeVariants };
