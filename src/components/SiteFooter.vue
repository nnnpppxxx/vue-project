<template>
  <footer class="footer">
    <div class="footer-content container">
      <div class="footer-left">
        <div class="logo">Laptop-Nitra</div>
        <p>2026 Laptop-Nitra.</p>
      </div>
      <div class="footer-right">
        <router-link to="/about" class="footer-link">About</router-link>
        <router-link to="/contact" class="footer-link">Contact</router-link>
        <a href="#" class="footer-link">Privacy</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter"
};
</script>
