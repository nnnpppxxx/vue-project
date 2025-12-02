<template>
  <transition-group name="fade" tag="div" class="product-list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add="addToCart"
    />
  </transition-group>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { useProductsStore } from "../store/products";

export default {
  name: "ProductList",
  components: { ProductCard },
  setup() {
    const store = useProductsStore();
    return {
      products: store.products,
      addToCart: (product) => store.addToCart(product),
    };
  },
};
</script>
