module.exports = {
  darkMode: 'media',
  purge: {
    // needs to be set if we want to purge all unused
    // @tailwind/typography styles
    mode: 'all',
    content: ['./src/**/*.svelte', './src/**/*.html'],
  },
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
  },
  plugins: [require('@tailwindcss/typography')],
};