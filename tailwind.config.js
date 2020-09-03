/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    whitelist: ['html', 'body'],
    whitelistPatterns: [/\[disabled]/g],
    extractors: [{
      extractor: content => content.match(/[A-z0-9-:\/]+/g) || [],
      extensions: ['js', 'vue', 'scss', 'css']
    }]
  },

  theme: {
    extend: {
      colors: {
        gray: {
          '100': '#f5f7f7',
          '200': '#eeeff0',
          '300': '#ced5d9',
          '400': '#a8afb3',
          '500': '#939799',
          '600': '#797d80',
          '700': '#616466',
          '800': '#3b3c3d',
          '900': '#272829'
        },

        red: '#EE3D3D',
        green: '#34C816',

        blue: '#006DA4',

        primary: '#00a1f2'
      },

      borderRadius: {
        xl: '24px'
      }
    },

    container: {
      padding: '2rem'
    },

    fontFamily: {
      body: ['Inter', 'sans-serif']
    }
  },
  variants: {},
  plugins: []
}
