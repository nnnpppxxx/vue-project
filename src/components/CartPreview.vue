<template>
<div class="cart-preview">
<div v-if="items.length">
<div v-for="it in items" :key="it.id" class="cart-item">
<div>{{ it.title }} x{{ it.qty }}</div>
<div>€{{ it.price * it.qty }}</div>
</div>
<div class="cart-total">Celkom: €{{ total }}</div>
<router-link to="/cart">Prejsť do košíka</router-link>
</div>
<div v-else>Košík je prázdny</div>
</div>
</template>


<script>
import { useProductsStore } from '../store/products'


export default {
name: 'CartPreview',
computed: {
items() {
const s = useProductsStore()
return s.cart
},
total() {
const s = useProductsStore()
return s.cartTotal
}
}
}
</script>