<template>
<div v-if="product">
<div class="detail">
<img :src="product.img" alt="" />
<div class="info">
<h2>{{ product.title }}</h2>
<p>{{ product.cpu }} · {{ product.ram }}</p>
<div class="price">€{{ product.price }}</div>
<button @click="addToCart">Add to cart</button>
</div>
</div>
</div>
<div v-else>
<p>Product not found</p>
</div>
</template>


<script>
import { useProductsStore } from '../store/products'


export default {
name: 'ProductDetail',
props: ['id'],
data() {
return { product: null }
},
created() {
const store = useProductsStore()
const pid = Number(this.$route.params.id)
this.product = store.products.find(p => p.id === pid) || null
},
methods: {
addToCart() {
const store = useProductsStore()
store.addToCart(this.product)
this.$router.push('/cart')
}
}
}
</script>