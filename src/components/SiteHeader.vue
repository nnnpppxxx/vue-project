<template>
  <header class="header">
    <div class="logo">Laptop-Nitra</div>
    <nav class="nav">
      <router-link to="/" class="nav-btn">Home</router-link>
      <router-link to="/products" class="nav-btn">Laptops</router-link>
      <router-link to="/cart" class="nav-btn">Cart</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "SiteHeader"
};
</script>
