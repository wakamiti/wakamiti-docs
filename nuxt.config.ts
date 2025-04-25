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
    '@nuxtjs/color-mode'
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

  css: [
    "assets/css/main.scss"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use '@/assets/css/config/_mixins.scss' as *;
          `
        }
      }
    }
  },
  // build: {
  //   extend(config, { isDev, isClient }) {
  //     const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
  //     types.forEach(type => {
  //       const rule = config.module.rules.find(r => r.test && r.test.toString().includes('scss'));
  //       if (rule) {
  //         rule.oneOf.forEach(oneOf => {
  //           if (oneOf.resourceQuery) {
  //             oneOf.use.push({
  //               loader: 'style-resources-loader',
  //               options: {
  //                 patterns: [
  //                   path.resolve(__dirname, './assets/scss/config/*.scss')
  //                 ]
  //               }
  //             });
  //           }
  //         });
  //       }
  //     });
  //   }
  // },

  colorMode: { classSuffix: '' },
  devtools: { enabled: false },
  compatibilityDate: '2025-04-17'
})