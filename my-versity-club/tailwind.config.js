module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'versity-blue': '#003566',
        'versity-red': '#C20C0C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};