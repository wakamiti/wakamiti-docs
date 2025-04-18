// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
  ],

  srcDir: 'src',
  // appDir: 'src',

  image: {
    dir: 'assets/img',
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  css: ["assets/css/main.css"],
  colorMode: { classSuffix: '' },
  devtools: { enabled: true },
  compatibilityDate: '2025-04-17'
})