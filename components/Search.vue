<template>
    <div>
        {{articles}}
    </div>
</template>

<script>
export default {
  data() {
    return {
        articles: null
    }
  },
  async fetch() {
    this.articles = await this.$content("", { deep: true }).fetch();
  }
}
</script>