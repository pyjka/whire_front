import React from "react";
/** Whire node card: index, title, body, mono footer. variant: default | accent | filled. */
export function Card({ variant = "default", index, title, footer, interactive = false, compact = false, className = "", children, ...rest }) {
  const cls = ["wh-card", variant !== "default" ? "wh-card--" + variant : "", interactive ? "wh-card--interactive" : "", compact ? "wh-card--compact" : "", className].filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      {index ? <div className="wh-card__index">{index}</div> : null}
      {title ? <div className="wh-card__title">{title}</div> : null}
      {children ? <div className="wh-card__body">{children}</div> : null}
      {footer ? <div className="wh-card__footer">{footer}</div> : null}
    </div>
  );
}
