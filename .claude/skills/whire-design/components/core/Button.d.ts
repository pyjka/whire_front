import * as React from "react";
/** @startingPoint section="Core" subtitle="Primary, secondary, ghost and inverse buttons" viewport="700x200" */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  size?: "sm" | "md" | "lg";
  /** Roboto Mono label — for technical actions (Run, Copy IBAN). */
  mono?: boolean;
  block?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
