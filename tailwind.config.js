/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '500px'
      },
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
      fontSize: {
        '2xs': '0.5rem'
      },
      height: {
        'full-minus-header': 'calc(100vh - 6rem)'
      },
      minWidth: {
        'sm': '150px',
        'md': '250px',
        'lg': '300px',
        'xl': '450px'
      },
      gridTemplateColumns: {
        'post': '1fr',
        'toc': '1fr 350px',
        '2-col': '300px 1fr',
      },
      maxWidth: {
        '1/2': '50%',
        'article': '500px',
        'post': '768px',
        'paragraph': '1024px'
      },
      minHeight: {
        lg: '300px',
        '1/2': '50vh',
        '52': '13rem',
        '64': '16rem',
        '68': '17rem',
        '72': '18rem',
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
      },
      width: {}
    },
  },
  variants: {
    extend: {
      gradient: ['dark'],
      border: ['dark'],
      borderWidth: ['dark']
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
