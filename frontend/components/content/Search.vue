<template>
  <div>
    <ol>
      <li v-for="item in data">
        <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
      </li>
    </ol>

    <!-- <slot /> -->
  </div>
</template>

<script setup>
  const { data } = await useAsyncData('home', () => queryContent('/').find())
</script>
