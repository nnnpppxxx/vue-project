<template>
<div>
<h2>Košík</h2>
<div v-if="items.length">
<div v-for="it in items" :key="it.id" class="cart-row">
<div>{{ it.title }}</div>
<div>€{{ it.price }} × {{ it.qty }}</div>
<button @click="remove(it.id)">Odstrániť</button>
</div>
<div class="cart-summary">
<div>Celkom: €{{ total }}</div>
<router-link to="/checkout">Pokračovať k pokladni</router-link>
</div>
</div>
<div v-else>
<p>Košík je prázdny</p>
<router-link to="/products">Pozrieť si produkty</router-link>
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