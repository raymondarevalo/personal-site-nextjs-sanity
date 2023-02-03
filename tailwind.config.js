const { theme } = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...theme,
    // Overriding fontFamily to use @next/font loaded families
    fontFamily: {
      mono: 'var(--font-mono)',
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
    },
    extend: {
      screens: {
        sm: '32em',
        md: '48em',
        lg: '64em',
        xl: '80em',
        '2xl': '96em',
        'sm-max': { max: '48em' },
        'sm-only': { min: '32em', max: '48em' },
        'md-only': { min: '48em', max: '64em' },
        'lg-only': { min: '64em', max: '80em' },
        'xl-only': { min: '80em', max: '96em' },
        '2xl-only': { min: '96em' },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
