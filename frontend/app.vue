<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
  useHead({
    titleTemplate: (titleChunk) => {
      if (titleChunk == "Home") {
        titleChunk = ""
      } else if (titleChunk == "") {
        titleChunk = "Not Found"
      }
      return titleChunk ? `${titleChunk} - Victor's Library` : "Victor's Library";
    }
  })
</script>
