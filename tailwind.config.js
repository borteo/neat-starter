module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
    fontSize: {
      '2xs': '1.2rem',
      'xs': '1.4rem',
      'tiny': '1.55rem',
      'base': '1.85rem',
      'lg': '2.225rem',
      'xl': '2.25rem',
      '2xl': '2.5rem',
      '3xl': '2.875rem',
      '4xl': '3.25rem',
      '5xl': '4rem',
      '6xl': '5rem',
      '7xl': '6rem',
    },
    fontFamily: {
      'serif': ['freight-text-pro', 'ui-serif', 'Georgia']
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
