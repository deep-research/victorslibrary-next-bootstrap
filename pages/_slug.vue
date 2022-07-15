<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app, params, error }) {
    const slug = params.slug || 'index'

    try {
      const article = await $content('/', slug).fetch()

      return {
        article,
      }
    } catch (err) {
      return error({ statusCode: 404, message: 'Article not found' })
    }
  },
}
</script>
