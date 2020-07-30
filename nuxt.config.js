import tailwindConfig from './tailwind.config'

export default {
  mode: 'universal',

  target: 'static',

  server: {
    port: 8000,
    host: '0.0.0.0'
  },

  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    GTM_CONTAINER_ID: process.env.GTM_CONTAINER_ID,
    MAILCHIMP_CONFIG: process.env.MAILCHIMP_CONFIG,
    MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
    APP_STORE_URL: process.env.APP_STORE_URL
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Mileways | Go Travel',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mileways | Go Travel' },
      { name: 'msapplication-TileColor', content: tailwindConfig.theme.extend.colors.primary },
      { name: 'theme-color', content: tailwindConfig.theme.extend.colors.primary }
    ],
    link: [

      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: tailwindConfig.theme.extend.colors.primary },
      { rel: 'preconnect', href: 'https://www.googletagmanager.com' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: tailwindConfig.theme.extend.colors.primary },

  /*
  ** Global CSS
  */
  css: [
    './assets/css/main'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/google-tag-manager.client.js',
    '~/plugins/api-clients.js',
  ],

  generate: {
    exclude: [
      /^\/flights/
    ],

    fallback: 'spa.html'
  },

  /*
  ** Build configuration
  */
  build: {
    filenames: {
      app: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js',
      chunk: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js'
    },

    postcss: {
      plugins: {
        tailwindcss: {}
      }
    }
  }
}
