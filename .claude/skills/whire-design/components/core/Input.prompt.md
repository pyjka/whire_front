Whire input — labelled text field; use `mono` + `prefix` for amounts, IBANs and API keys.
```jsx
<Input label="Recipient IBAN" mono placeholder="DE89 3704 0044 0532" />
<Input label="Amount" mono prefix="€" defaultValue="250.00" hint="Max €250 per transfer" />
<Input label="Mandate" mono defaultValue="mnd_7f3a" error="Mandate expired" />
```
Height 44px (sm 36, lg 52), 1.5px border, electric focus ring. Labels are always Roboto Mono uppercase.
