<template>
  <div class="product-card">
    <img :src="product.img" :alt="product.title" />
    <h3>{{ product.title }}</h3>
    <p class="specs">{{ product.cpu }} · {{ product.ram }}</p>
    <div class="row">
      <div class="price">€{{ product.price }}</div>
      <div class="buttons">
        <button @click="viewDetails">Details</button>
        <button @click="addToCart">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    viewDetails() {
      this.$router.push(`/product/${this.product.id}`);
    },
    addToCart() {
      this.$emit("add", this.product);
    }
  }
};
</script>
