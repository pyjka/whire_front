Whire button — use for every action; one primary per view, secondary for the alternative, ghost for tertiary/inline.
```jsx
<Button>Create transfer</Button>
<Button variant="secondary">View docs</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button mono variant="secondary">whire.transfers.create</Button>
```
Variants: primary (electric), secondary (outlined), ghost, inverse (cream on ink / ink on cream). Sizes sm 36px, md 44px, lg 52px. `mono` switches the label to Roboto Mono for code-like actions. Never pill-shaped.
