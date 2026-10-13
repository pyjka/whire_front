import * as React from "react";
/** @startingPoint section="Core" subtitle="Node card with index, title, body and mono footer" viewport="700x260" */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** accent = electric border + dot (the Whire node); filled = solid electric (settled/result). */
  variant?: "default" | "accent" | "filled";
  /** Mono index or label, e.g. "01" or "PILOT". */
  index?: React.ReactNode;
  title?: React.ReactNode;
  /** Mono footer line, e.g. "→ scoped · SCA once · revocable". */
  footer?: React.ReactNode;
  interactive?: boolean;
  compact?: boolean;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
