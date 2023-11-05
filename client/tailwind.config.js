/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      neutral: {
        foreground: {
          1: 'var(--neutral-foreground-1)',
          2: 'var(--neutral-foreground-2)',
          3: 'var(--neutral-foreground-3)',
          link: {
            base: 'var(--neutral-foreground-link)',
            hover: 'var(--neutral-foreground-link-hover)'
          },
          inverted: {
            base: 'var(--neutral-foreground-inverted)',
            hover: 'var(--neutral-foreground-inverted-hover)'
          }
        },
        background: {
          1: 'var(--neutral-background-1)',
          2: 'var(--neutral-background-2)',
          3: 'var(--neutral-background-3)',
          inverted: {
            base: 'var(--neutral-background-inverted)',
            hover: 'var(--neutral-background-inverted-hover)'
          }
        },
        stroke: {
          base: 'var(--neutral-stroke)',
          selected: 'var(--neutral-stroke-selected)'
        }
      },
      brand: {
        1: 'var(--brand-1)',
        2: 'var(--brand-2)',
        hover: 'var(--brand-1-hover)'
      },
      white: 'var(--white)',
      black: 'var(--black)',
      transparent: 'transparent'
    }
  },
  plugins: []
}
