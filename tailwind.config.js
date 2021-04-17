module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: ['header-desktop-dark', 'header-mobile-dark']
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'very-dark-blue-bg': 'hsl(207, 26%, 17%)',
        'very-dark-blue-text': 'hsl(200, 15%, 8%)',
        'dark-gray': 'hsl(0, 0%, 52%)',
        'very-light-gray': 'hsl(0, 0%, 98%)'
      },
      backgroundImage: theme => ({

      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}