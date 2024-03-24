const { fontFamily, colors } = require('tailwindcss/defaultTheme');

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using 'src' directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem', // Corrected from 'passing' to 'padding'
      screens: {
        '2xl': '1360px'
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans], // Corrected the syntax for 'var(--font-inter)'
      },
      colors: {
        ...colors, // This now spreads the default colors from Tailwind's theme
        'light-gray': '#f5f5f5', // Added custom color
      },
    },
  },
  plugins: [],
};
