/** @type {import('tailwindcss').Config} */
// Values mirror the Whire design system (.claude/skills/whire-design/tokens).
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-roboto)", "Roboto", "system-ui", "sans-serif"],
      mono: ["var(--font-roboto-mono)", "Roboto Mono", "ui-monospace", "monospace"]
    },
    // Soft radii, never pill — except badges.
    borderRadius: {
      none: "0",
      sm: "6px",
      DEFAULT: "8px",
      md: "8px",
      lg: "10px",
      xl: "16px",
      full: "9999px"
    },
    // 1.5px borders everywhere.
    borderWidth: {
      DEFAULT: "1.5px",
      0: "0",
      2: "2px",
      3: "3px"
    },
    // The system is flat: no shadows, only the focus ring.
    boxShadow: {
      none: "none",
      focus: "0 0 0 3px rgba(255, 122, 89, 0.35)"
    },
    extend: {
      colors: {
        petrol: {
          950: "#04110F",
          900: "#06191C",
          800: "#092023",
          700: "#0B2529",
          600: "#133236",
          500: "#1B3A3E",
          400: "#2D5257",
          300: "#7E9890"
        },
        sand: {
          50: "#FBF3E3",
          100: "#F6E7C8",
          200: "#E9D7B4",
          300: "#D4C09A",
          400: "#B9A47C"
        },
        sage: {
          200: "#C7C6B0",
          300: "#A3A692"
        },
        coral: {
          50: "#FFF1EB",
          100: "#FFE1D6",
          300: "#FFB59E",
          500: "#FF7A59",
          600: "#E0603F",
          700: "#B0432A"
        },
        positive: { DEFAULT: "#3FAE7A", soft: "#D7EFE3" },
        negative: { DEFAULT: "#E05252", soft: "#F7DADA" },
        warning: { DEFAULT: "#E5A83A", soft: "#F8EBD2" },

        // Semantic aliases — flip with .theme-sand.
        surface: {
          app: "var(--surface-app)",
          panel: "var(--surface-panel)",
          raised: "var(--surface-raised)",
          field: "var(--surface-field)",
          inverse: "var(--surface-inverse)"
        },
        fg: {
          strong: "var(--text-strong)",
          body: "var(--text-body)",
          muted: "var(--text-muted)",
          accent: "var(--text-accent)",
          "on-accent": "var(--text-on-accent)",
          inverse: "var(--text-inverse)"
        },
        border: {
          DEFAULT: "var(--border)",
          strong: "var(--border-strong)",
          rail: "var(--border-rail)",
          focus: "var(--border-focus)"
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          press: "var(--accent-press)",
          soft: "var(--accent-soft)",
          tint: "var(--accent-tint)"
        },

        // shadcn-style names kept so existing utilities keep working.
        background: "var(--surface-app)",
        foreground: "var(--text-strong)",
        card: {
          DEFAULT: "var(--surface-panel)",
          foreground: "var(--text-body)"
        },
        muted: {
          DEFAULT: "var(--surface-raised)",
          foreground: "var(--text-muted)"
        },
        primary: {
          DEFAULT: "var(--accent)",
          foreground: "var(--text-on-accent)"
        },
        secondary: {
          DEFAULT: "var(--surface-raised)",
          foreground: "var(--text-strong)"
        },
        input: "var(--border)",
        ring: "var(--border-focus)"
      },
      letterSpacing: {
        display: "-0.03em",
        title: "-0.015em",
        label: "0.14em",
        eyebrow: "0.18em"
      },
      lineHeight: {
        display: "1",
        tight: "1.1",
        snug: "1.25"
      },
      transitionDuration: {
        DEFAULT: "180ms",
        fast: "120ms"
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.2, 0.7, 0.2, 1)",
        out: "cubic-bezier(0.2, 0.7, 0.2, 1)"
      },
      maxWidth: {
        container: "1200px",
        prose: "720px"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
