module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // 'media'
  theme: {
    extend: {
      colors: {
        white: '#fff',
        transparentWhite: 'rgba(255, 255, 255, 0.9)',
        typescriptBlue: '#007acc',
        nextjs: '#eaeaea',
        deepBlue: '#050a30',
        transparentDeepBlue: 'rgba(5, 10, 48, 0.5)',
        deepBlack: '#030815',
        pink: '#cc007a'
      },
      fontFamily: {
        sourceCode: 'SourceCode'
      },
      minWidth: {
        'sm': '150px',
        'lg': '300px'
      },
      maxWidth: {
        '1/2': '50%',
        'article': '500px',
        'paragraph': '1024px'
      },
      minHeight: {
        lg: '300px',
        '1/2': '50vh',
        '96': '24rem',
        '144': '36rem',
        '192': '48rem',
        huge: '500vh'
      },
      zIndex: {
        '-1': '-1'
      },
      transitionProperty: {
        'width': 'width',
        'boxShadow': 'box-shadow'
      },
      backgroundImage: {
        'react-native': 'url(/react-native.png)',
        'golang': 'url(/golang.png)',
        'solidity': 'url(/solidity.png)',
        'swift-ui': 'url(/swift-ui.png)',
        'mountain': 'url(/mountain.png)',
        'eth': 'url(/eth.png)',
        'rainier': 'url(/rainier.png)'
      },
      boxShadow: {
        'next': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%'
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
