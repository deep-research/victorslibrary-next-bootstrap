<template>
  <div>
    <h1 v-if="error.statusCode === 404">{{ error.message }}</h1>
    <h1 v-else>An error occurred</h1>
    <h2>⚠️</h2>
    <br />
    <NuxtLink to="/"> <b-button>Home Page</b-button></NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>
