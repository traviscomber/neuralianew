import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Colors
    "bg-background",
    "text-foreground",
    "bg-card",
    "text-primary",
    "border-border",
    "bg-primary",
    "text-primary-foreground",
    "text-muted-foreground",
    "bg-muted/10",
    "bg-primary/90",
    "bg-primary/10",
    "bg-primary/5",
    "border-primary/30",
    "border-primary/50",
    "border-border/50",
    // Layout
    "min-h-screen",
    "flex",
    "items-center",
    "justify-center",
    "justify-between",
    "gap-4",
    "gap-6",
    "gap-8",
    "px-4",
    "py-4",
    "py-8",
    "py-12",
    "py-24",
    "mx-auto",
    "max-w-4xl",
    "max-w-5xl",
    "max-w-6xl",
    // Grid
    "grid",
    "grid-cols-3",
    "md:grid-cols-2",
    "md:grid-cols-3",
    "lg:grid-cols-3",
    // Typography
    "text-5xl",
    "text-7xl",
    "text-4xl",
    "text-3xl",
    "text-2xl",
    "text-lg",
    "text-base",
    "text-sm",
    "font-bold",
    "font-semibold",
    "font-medium",
    "leading-tight",
    "leading-relaxed",
    // Hover States
    "hover:bg-primary/90",
    "hover:border-primary/30",
    "hover:text-primary",
    "hover:translate-x-1",
    "group-hover:text-primary",
    "group-hover:translate-x-1",
    "hover:shadow-lg",
    "hover:-translate-y-1",
    "hover:shadow-md",
    "hover:bg-muted/10",
    "hover:bg-primary/20",
    // Transitions
    "transition-all",
    "transition-colors",
    "transition-transform",
    "duration-300",
    // Display
    "inline-flex",
    "block",
    "w-full",
    "h-full",
    "w-12",
    "h-12",
    "w-4",
    "h-4",
    "w-2",
    "h-2",
    "w-6",
    "h-6",
    // Borders
    "rounded-lg",
    "rounded-full",
    "border",
    "border-border/50",
    // Flex
    "flex-col",
    "sm:flex-row",
    "flex-1",
    // Responsive
    "sm:text-7xl",
    "sm:text-5xl",
    "md:grid-cols-2",
    // Container
    "container",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        mono: ["var(--font-inter)", "monospace"],
      },
      fontSize: {
        "h1": ["64px", { lineHeight: "1.1", fontWeight: "300" }],
        "h1-medium": ["64px", { lineHeight: "1.1", fontWeight: "500" }],
        "h2": ["48px", { lineHeight: "1.2", fontWeight: "300" }],
        "h3": ["32px", { lineHeight: "1.3", fontWeight: "400" }],
        "body-lg": ["24px", { lineHeight: "1.6", fontWeight: "400" }],
        "body": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "subtle-float": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-8px) translateX(-3px)" },
        },
        "gentle-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "1.05" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "subtle-float": "subtle-float 20s ease-in-out infinite",
        "gentle-pulse": "gentle-pulse 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
} satisfies Config

export default config
