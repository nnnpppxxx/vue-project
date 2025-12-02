import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'
import CartView from '../views/CartView.vue'
import Checkout from '../views/Checkout.vue'


const routes = [
{ path: '/', component: Home },
{ path: '/products', component: Products },
{ path: '/product/:id', component: ProductDetail, props: true },
{ path: '/cart', component: CartView },
{ path: '/checkout', component: Checkout }
]


const router = createRouter({
history: createWebHistory(),
routes
})


export default router