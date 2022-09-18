module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html'],
  darkMode: true,
  theme: {
    extend: {},
    screens: {
      'lg': {'max': '992px'},
      'md': {'max':'768px'},
      'sm': {'max': '480px'}
    },
    container: {
      padding: '20px',
      center: true,
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
