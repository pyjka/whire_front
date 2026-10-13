import React from "react";
/** Whire badge: mono uppercase pill. variant: neutral | accent | outline-accent | strong | positive | negative | warning. */
export function Badge({ variant = "neutral", dot = false, size = "md", className = "", children, ...rest }) {
  const cls = ["wh-badge", variant !== "neutral" ? "wh-badge--" + variant : "", size === "lg" ? "wh-badge--lg" : "", className].filter(Boolean).join(" ");
  return <span className={cls} {...rest}>{dot ? <span className="wh-badge__dot" /> : null}{children}</span>;
}
