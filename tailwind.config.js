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
        300: '#323232',
      },
      accent: {
        300: '#dc3b3a',
      },
      primary: {
        300: '#34275d',
      },
      white: '#FFFFFF',

    }
  },
  plugins: [],
}
