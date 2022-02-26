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
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '2rem',
      'lg': '2.125rem',
      'xl': '2.25rem',
      '2xl': '2.5rem',
      '3xl': '2.875rem',
      '4xl': '3.25rem',
      '5xl': '4rem',
      '6xl': '5rem',
      '7xl': '6rem',
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
