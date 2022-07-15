<template>
  <div>
    <Navbar class="mb-4" />
    <b-container class="body">
      <Nuxt />
    </b-container>
  </div>
</template>

<style>
@media only screen and (min-width: 576px) {
  .body {
    padding-right: 0;
    padding-left: 0;
  }
}
@media only screen and (min-width: 992px) {
  .body {
    padding-right: 15px;
    padding-left: 15px;
  }
}
</style>
