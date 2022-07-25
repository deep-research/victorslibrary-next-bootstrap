<template>
  <div>
    <div v-if="article.slug!=='index'">
      <b-breadcrumb><NuxtLink to="/">Home Page</NuxtLink></b-breadcrumb>
      <h1>{{ article.title }}</h1>
    </div>
    <p>{{ article.description }}</p>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app, params, error }) {
    const path = `/${params.pathMatch || 'index'}`

    const [article] = await $content({ deep: true }).where({ path }).fetch()

    if (!article) {
      return error({ statusCode: 404, message: 'Article not found' })
    }

    return {
      article,
    }
  },
}
</script>
