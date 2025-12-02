<template>
<div>
<h2>Оформление заказа</h2>
<p>Здесь можно ввести данные и завершить покупку. (Демо)</p>
<div class="checkout-box">
<p>Итого: €{{ total }}</p>
<button @click="placeOrder">Place order</button>
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
alert('Order placed (demo)')
useProductsStore().clearCart()
this.$router.push('/')
}
}
}
</script>