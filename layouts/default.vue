<template>
  <div>
    <Navbar class="mb-4" />
    <b-container>
      <Nuxt />
    </b-container>
  </div>
</template>

<style>
  /* This Media Query was needed to add a container to the menu in Navbar.vue  */
  .container {
    padding: 0
  }
  @media only screen and (max-width: 575px) {
    .container {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

</style>