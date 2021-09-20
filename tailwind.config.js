module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: '#fff',
        typescriptBlue: '#007acc',
        deepBlue: '#050a30'
      },
      fontFamily: {
        sourceCode: 'SourceCode'
      },
      maxWidth: {
        '1/2': '50%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
