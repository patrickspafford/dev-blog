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
        deepBlack: '#030815',
        pink: '#cc007a'
      },
      fontFamily: {
        sourceCode: 'SourceCode'
      },
      maxWidth: {
        '1/2': '50%'
      },
      minHeight: {
        huge: '500vh'
      },
      zIndex: {
        '-1': '-1'
      },
      transitionProperty: {
        'width': 'width',
      },
      backgroundImage: {
        'react-native': 'url(/react-native.png)',
        'golang': 'url(/golang.png)',
        'solidity': 'url(/solidity.png)',
        'swift-ui': 'url(/swift-ui.png)'
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
