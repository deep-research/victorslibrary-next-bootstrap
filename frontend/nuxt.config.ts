import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },

  modules: [
    '@nuxt/content',
  ],
  
  content: {
    // https://content.nuxtjs.org/api/configuration
    documentDriven: true
  },

  css: [
    '~/assets/styles/main.scss'
    // main.sass contains the classes and styles
    // https://stackoverflow.com/questions/70547375/global-sass-import-usage-nuxt-3-static-assets
  ],

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/styles/_variables.sass"',
          // _variables.sass contains the mixins, variables, maps, etc
        },
      },
    },
  },
})
