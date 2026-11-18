/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'p-display': ['var(--p-font-display)'],
        'p-body': ['var(--p-font-body)'],
        'p-mono': ['var(--p-font-mono)'],
      },
      colors: {
        p: {
          bg: 'rgb(var(--p-bg) / <alpha-value>)',
          panel: 'rgb(var(--p-panel) / <alpha-value>)',
          fg: 'rgb(var(--p-fg) / <alpha-value>)',
          muted: 'rgb(var(--p-muted) / <alpha-value>)',
          subtle: 'rgb(var(--p-subtle) / <alpha-value>)',
          accent: 'rgb(var(--p-accent) / <alpha-value>)',
          ink: 'rgb(var(--p-ink) / <alpha-value>)',
        },
      },
      borderRadius: {
        p: 'var(--p-radius)',
        'p-sm': 'var(--p-radius-sm)',
      },
      boxShadow: {
        p: 'var(--p-shadow)',
      },
      keyframes: {
        slideUp: {
          from: { opacity: 0, transform: 'translateY(10px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
