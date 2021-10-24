module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // 'media'
  theme: {
    extend: {
      colors: {
        white: '#fff',
        transparentWhite: 'rgba(255, 255, 255, 0.9)',
        typescriptBlue: '#007acc',
        deepBlue: '#050a30',
        deepBlack: '#030815'
      },
      fontFamily: {
        sourceCode: 'SourceCode'
      },
      maxWidth: {
        '1/2': '50%'
      },
      zIndex: {
        '-1': '-1'
      },
      transitionProperty: {
        'width': 'width',
      }
    },
  },
  variants: {
    extend: {
      gradient: ['dark'],
      border: ['dark'],
      borderWidth: ['dark']
    },
  },
  plugins: [],
}
