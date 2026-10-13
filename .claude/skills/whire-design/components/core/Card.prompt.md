Whire card — the "node" of the system: a panel with mono index, title, body and a mono footer. Chain cards with `.wh-connector` for flows.
```jsx
<Card index="01" title="Mandate & consent" footer="→ scoped · SCA once · revocable">Users grant scoped authority once.</Card>
<Card variant="accent" index="02" title="Policy Guard" footer="→ max €250 / transfer">Rules enforced at execution.</Card>
```
Use `accent` for the one card that is Whire's role in a diagram; `filled` only for a settled/result chip. Radius 10px, border 1.5px, no shadow.
