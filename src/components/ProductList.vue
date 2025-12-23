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
import { useRouter } from "vue-router";

export default {
  name: "ProductList",
  components: { ProductCard },
  setup() {
    const store = useProductsStore();
    const router = useRouter();
    return {
      products: store.products,
      addToCart: (product) => {
        store.addToCart(product);
        router.push('/cart');
      },
    };
  },

};
</script>
