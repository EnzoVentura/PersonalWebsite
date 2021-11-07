module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'Exo2-SemiBold': ["Exo2-SemiBold", "Exo2-SemiBold", "sans-serif"],
        'Exo2-Medium': ["Exo2-Medium", "Exo2-Medium", "sans-serif"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
