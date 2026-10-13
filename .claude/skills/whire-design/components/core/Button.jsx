import React from "react";
/** Whire button. variant: primary | secondary | ghost | inverse. size: sm | md | lg. */
export function Button({ variant = "primary", size = "md", mono = false, block = false, className = "", children, ...rest }) {
  const cls = ["wh-btn", "wh-btn--" + variant, size !== "md" ? "wh-btn--" + size : "", mono ? "wh-btn--mono" : "", block ? "wh-btn--block" : "", className].filter(Boolean).join(" ");
  return <button type="button" className={cls} {...rest}>{children}</button>;
}
