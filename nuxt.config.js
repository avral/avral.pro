const pkg = require('./package')


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Avral's digital lab.",

    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Web/DApps/Services development." }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "manifest", href: "/site.webmanifest" },

      { rel: 'canonical', href: 'https://avral.pro' },

      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Varela+Round' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Monoton' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-155995508-1'
    }]
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '55054210',
        webvisor: true,
      }
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
