module.exports = {
  content: ['./docs/**/*.{html,njk,md,liquid}'],
  theme: {
    extend: {
      colors: {
        'base-bg': 'var(--color-bg)',
        'base-fg': 'var(--color-fg)',
        'base-05': 'var(--color-05)',
        'base-10': 'var(--color-10)',
        'base-20': 'var(--color-20)',
        'base-30': 'var(--color-30)',
        'base-40': 'var(--color-40)',
        'base-50': 'var(--color-50)',
        'base-60': 'var(--color-60)',
        'base-70': 'var(--color-70)',
        'base-80': 'var(--color-80)',
        'base-90': 'var(--color-90)',
        'base-95': 'var(--color-95)',
        'brand-green': 'var(--color-brand-green)',
        'brand-blue': 'var(--color-brand-blue)',
        accent: 'var(--color-accent)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
    },
  },
  plugins: [require("@nocksock/tw-layout")],
}
