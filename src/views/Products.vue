<template>
  <div class="container products-page">
    <header class="products-header">
      <h1>Katalóg notebookov</h1>
      <p class="products-desc">
       Vyberte si najlepší notebook na prácu, štúdium alebo zábavu. Pohodlný filter vám pomôže nájsť vhodný model!

      </p>
    </header>
    <ProductList />
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue";

export default {
  name: "Products",
  components: { ProductList },
};
</script>
