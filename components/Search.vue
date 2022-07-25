<template>
  <div>
    <div  v-for="(article, index) in articles" :key="index">
      {{index+1}}. <NuxtLink :to="'/' + article.slug">{{ article.title }}</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: null,
    }
  },
  async fetch() {
    this.articles = await this.$content('', { deep: true }).fetch()
  },
}
</script>
