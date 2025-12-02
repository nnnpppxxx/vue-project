<template>
<div>
<h2>Корзина</h2>
<div v-if="items.length">
<div v-for="it in items" :key="it.id" class="cart-row">
<div>{{ it.title }}</div>
<div>€{{ it.price }} × {{ it.qty }}</div>
<button @click="remove(it.id)">Remove</button>
</div>
<div class="cart-summary">
<div>Total: €{{ total }}</div>
<router-link to="/checkout">Proceed to checkout</router-link>
</div>
</div>
<div v-else>
<p>Корзина пуста</p>
<router-link to="/products">Посмотреть товары</router-link>
</div>
</div>
</template>


<script>
import { useProductsStore } from '../store/products'


export default {
name: 'CartView',
computed: {
items() { return useProductsStore().cart },
total() { return useProductsStore().cartTotal }
},
methods: {
remove(id) { useProductsStore().removeFromCart(id) }
}
}
</script>