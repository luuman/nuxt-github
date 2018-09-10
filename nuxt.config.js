const resolve = require('path').resolve
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-demo',
    meta: [
      {
        charset: 'utf-8'
      },
      // SEO
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      },
      {
        hid: 'http-equiv',
        name: 'http-equiv',
        content: 'X-UA-Compatible'
      },
      // 移动端
      {
        name: 'format-detection',
        content: 'email=no'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      },
    ],
    link: [
      { rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#3B8070'
  },
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/api.js'
  ],
  router: {
    middleware: 'i18n',
    // base: '/app/', // '/'
    // mode: 'hash', // 'history'
    // linkActiveClass: 'active-link', // 'nuxt-link-active'
    // 在每页渲染前运行 middleware/user-agent.js 中间件的逻辑
    // middleware: 'user-agent',
    // extendRoutes (routes) {
    //   routes.push({
    //     name: 'custom',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/error.vue')
    //   })
    // },
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

