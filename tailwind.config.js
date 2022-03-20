module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'default': ['Yrsa',],
      },
    },
    colors: {
      gray: {
        100: '#b3b3b3',
      },
      accent: {
        300: '#dc3b3a',
        400: '#9a2929',
      },
      primary: {
        300: '#34275d',
      },
      white: '#FFFFFF',
      black: '#000000',

    }
  },
  plugins: [],
}
