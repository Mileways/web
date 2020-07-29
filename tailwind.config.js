/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          '200': '#eeeff0',
          '300': '#ced5d9',
          '400': '#a8afb3',
          '500': '#939799',
          '600': '#797d80',
          '700': '#616466',
          '800': '#3b3c3d',
          '900': '#272829'
        },

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
