/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      neutral: {
        background: 'var(--neutral-background)',
        foreground: 'var(--neutral-foreground)'
      },
      transparent: 'transparent'
    }
  },
  plugins: []
}
