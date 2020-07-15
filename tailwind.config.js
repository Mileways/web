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
          '100': '#f5f5ff',
          '200': '#eeedff',
          '300': '#e1e1e6',
          '400': '#bcbccc',
          '500': '#9a9ab5',
          '600': '#747387',
          '700': '#605e7d',
          '800': '#312F4C',
          '900': '#191826'
        },

        primary: '#00a1f2'
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
