module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // 'media',
  theme: {
    extend: {
      colors: {
        white: '#fff',
        transparentWhite: 'rgba(255, 255, 255, 0.9)',
        typescriptBlue: '#007acc',
        reactNative: 'rgb(84,210,249)',
        github: '#999999',
        ethereum: 'rgb(194,155,249)',
        swiftUI: 'rgb(11,74,194)',
        golang: 'rgb(19,158,207)',
        npm: 'rgb(189, 0, 4)',
        buyMeACoffee: 'rgb(77, 100, 255)',
        linkedIn: '#0072b1',
        nextjs: '#eaeaea',
        deepBlue: '#050a30',
        evComputing: 'rgb(4, 120, 87)',
        transparentDeepBlue: 'rgba(5, 10, 48, 0.5)',
        deepBlack: '#030815',
        pink: '#cc007a'
      },
      fontFamily: {
        sourceCode: 'SourceCode'
      },
      minWidth: {
        'sm': '150px',
        'md': '250px',
        'lg': '300px',
        'xl': '450px'
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
        '-1': '-1',
        '1': '1'
      },
      transitionProperty: {
        'width': 'width',
        'boxShadow': 'box-shadow',
        'gridTemplateColumns': 'grid-template-columns'
      },
      backgroundImage: {
        'react-native': 'url(/react-native.png)',
        'golang': 'url(/golang.png)',
        'solidity': 'url(/solidity.png)',
        'swift-ui': 'url(/swift-ui.png)',
        'mountain': 'url(/mountain.jpg)',
        'eth': 'url(/eth.png)',
        'rainier': 'url(/rainier.png)'
      },
      boxShadow: {
        'next': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%'
      },
      transitionDuration: {
        '5000': '5000ms'
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
