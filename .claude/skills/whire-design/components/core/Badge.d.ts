import * as React from "react";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "accent" | "outline-accent" | "strong" | "positive" | "negative" | "warning";
  /** Leading status dot. */
  dot?: boolean;
  size?: "md" | "lg";
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
