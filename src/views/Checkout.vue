<template>
<div>
<h2>Dokončenie objednávky</h2>
<p>nič nemám tu.</p>
<div class="checkout-box">
<p>Celkom: €{{ total }}</p>
<button @click="placeOrder">Objednať</button>
</div>
</div>
</template>


<script>
import { useProductsStore } from '../store/products'

export default {
name: 'Checkout',
computed: { total() { return useProductsStore().cartTotal } },
methods: {
placeOrder() {
useProductsStore().clearCart()
this.$router.push('/')
}
}
}
</script>