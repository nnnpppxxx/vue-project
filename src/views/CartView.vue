<template>
<div class="cart-page">
  <div class="container">
    <h1 class="cart-title">Košík</h1>
    
    <div v-if="items.length" class="cart-content">
      <div class="cart-items">
        <div v-for="it in items" :key="it.id" class="cart-item">
          <div class="item-image">
            <img :src="it.img" :alt="it.title" />
          </div>
          <div class="item-details">
            <h3 class="item-title">{{ it.title }}</h3>
            <p class="item-specs">{{ it.cpu }} · {{ it.ram }}</p>
            <div class="item-price">€{{ it.price }} × {{ it.qty }}</div>
          </div>
          <div class="item-actions">
            <button @click="remove(it.id)" class="remove-btn">Odstrániť</button>
          </div>
        </div>
      </div>
      
      <div class="cart-summary">
        <div class="summary-row">
          <span class="summary-label">Celkom:</span>
          <span class="summary-value">€{{ total }}</span>
        </div>
        <router-link to="/checkout" class="checkout-btn">Pokračovať k pokladni</router-link>
      </div>
    </div>
    
    <div v-else class="empty-cart">
      <div class="empty-icon">🛒</div>
      <h2>Košík je prázdny</h2>
      <p>Pridajte produkty do košíka a pokračujte v nákupe.</p>
      <router-link to="/products" class="shop-btn">Pozrieť si produkty</router-link>
    </div>
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