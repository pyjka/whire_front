import * as React from "react";
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  /** Mono uppercase label above the field. */
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Error message — switches the field to the negative state. */
  error?: React.ReactNode;
  /** Mono prefix inside the field (€, IBAN, https://). */
  prefix?: React.ReactNode;
  /** Roboto Mono value — IBANs, amounts, keys. */
  mono?: boolean;
  size?: "sm" | "md" | "lg";
}
export declare function Input(props: InputProps): JSX.Element;
