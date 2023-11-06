/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      neutral: {
        foreground: {
          1: 'hsl(var(--neutral-foreground-1) / <alpha-value>)',
          2: 'hsl(var(--neutral-foreground-2) / <alpha-value>)',
          3: 'hsl(var(--neutral-foreground-3) / <alpha-value>)',
          link: {
            base: 'hsl(var(--neutral-foreground-link) / <alpha-value>)',
            hover: 'hsl(var(--neutral-foreground-link-hover) / <alpha-value>)'
          },
          inverted: {
            base: 'hsl(var(--neutral-foreground-inverted) / <alpha-value>)',
            hover: 'hsl(var(--neutral-foreground-inverted-hover) / <alpha-value>)'
          }
        },
        background: {
          1: 'hsl(var(--neutral-background-1) / <alpha-value>)',
          2: 'hsl(var(--neutral-background-2) / <alpha-value>)',
          3: 'hsl(var(--neutral-background-3) / <alpha-value>)',
          inverted: {
            base: 'hsl(var(--neutral-background-inverted) / <alpha-value>)',
            hover: 'hsl(var(--neutral-background-inverted-hover) / <alpha-value>)'
          }
        },
        stroke: {
          base: 'hsl(var(--neutral-stroke) / <alpha-value>)',
          selected: 'hsl(var(--neutral-stroke-selected) / <alpha-value>)'
        }
      },
      brand: {
        1: 'hsl(var(--brand-1) / <alpha-value>)',
        2: 'hsl(var(--brand-2) / <alpha-value>)',
        hover: 'hsl(var(--brand-1-hover) / <alpha-value>)'
      },
      white: 'hsl(var(--white) / <alpha-value>)',
      black: 'hsl(var(--black) / <alpha-value>)',
      transparent: 'transparent'
    }
  },
  plugins: []
}
