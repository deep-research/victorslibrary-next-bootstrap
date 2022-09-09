import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('bootstrap', bootstrap)
})

// Add Bootstrap JS in components/pages with:
// const { $bootstrap } = useNuxtApp()

// https://stackoverflow.com/questions/71795143/how-to-use-bootstrap5-with-vite-and-nuxt3
// https://getbootstrap.com/docs/5.2/getting-started/vite/
