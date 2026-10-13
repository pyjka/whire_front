import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/** Whire button. One primary per view, secondary for the alternative, ghost for tertiary. Never pill-shaped. */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded border font-medium leading-none transition-[background-color,border-color,color,transform] active:translate-y-px focus-visible:outline-none focus-visible:shadow-focus disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        primary:
          "border-accent bg-accent text-fg-on-accent hover:border-accent-hover hover:bg-accent-hover active:border-accent-press active:bg-accent-press",
        secondary:
          "border-border-strong bg-transparent text-fg-strong hover:border-fg-muted hover:bg-surface-raised",
        ghost:
          "border-transparent bg-transparent text-fg-body hover:bg-accent-tint hover:text-fg-strong",
        inverse:
          "border-surface-inverse bg-surface-inverse text-fg-inverse hover:opacity-90"
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-5 text-base",
        lg: "h-[52px] px-6 text-lg",
        icon: "h-11 w-11"
      },
      mono: {
        true: "font-mono font-normal"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, mono, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, mono, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
