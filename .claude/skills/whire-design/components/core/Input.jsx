import React from "react";
/** Whire text input with optional mono label, hint, prefix and error state. */
export function Input({ label, hint, error, prefix, mono = false, size = "md", id, className = "", ...rest }) {
  const inputId = id || (label ? "wh-" + String(label).toLowerCase().replace(/[^a-z0-9]+/g, "-") : undefined);
  const inputCls = ["wh-input", mono ? "wh-input--mono" : "", size !== "md" ? "wh-input--" + size : "", className].filter(Boolean).join(" ");
  const input = <input id={inputId} className={inputCls} aria-invalid={error ? true : undefined} {...rest} />;
  return (
    <div className={"wh-field" + (error ? " wh-field--error" : "")}>
      {label ? <label className="wh-field__label" htmlFor={inputId}>{label}</label> : null}
      {prefix ? <div className="wh-input-group"><span className="wh-input-group__prefix">{prefix}</span>{input}</div> : input}
      {error || hint ? <div className="wh-field__hint">{error || hint}</div> : null}
    </div>
  );
}
