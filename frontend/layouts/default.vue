<template>
  <div class="d-flex flex-column min-vh-100">
    <TheHeader />

    <div class="container">
      <slot />
    </div>

    <!-- https://radu.link/make-footer-stay-bottom-page-bootstrap/ -->
    <footer class="footer mt-auto py-3 text-center">
      <div class="container">
        <span class="text-muted">© {{ new Date().getFullYear() }} Victor Fisher</span>
      </div>
    </footer>
  </div>
</template>
