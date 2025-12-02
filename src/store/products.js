import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [
      {
        id: 1,
        title: "UltraBook Pro 14",
        price: 1299,
        ram: "16GB",
        cpu: "Intel i7",
        img: "/assets/laptop1.jpg",
      },
      {
        id: 2,
        title: "Workmate 15",
        price: 899,
        ram: "8GB",
        cpu: "Intel i5",
        img: "/assets/laptop2.jpg",
      },
      {
        id: 3,
        title: "Gaming Beast 17",
        price: 1999,
        ram: "32GB",
        cpu: "AMD Ryzen 9",
        img: "/assets/laptop3.jpg",
      },
      {
        id: 4,
        title: "TravelAir 13",
        price: 749,
        ram: "8GB",
        cpu: "Intel i3",
        img: "/assets/laptop4.jpg",
      },
      {
        id: 5,
        title: "Laptop 5",
        price: 1200,
        ram: "16GB",
        cpu: "Intel i7",
        img: "/assets/laptop5.jpg",
      },
      {
        id: 6,
        title: "Laptop 6",
        price: 1500,
        ram: "32GB",
        cpu: "AMD Ryzen 7",
        img: "/assets/laptop6.jpg",
      },
    ],
    cart: [],
  }),
  getters: {
    cartCount: (state) => state.cart.reduce((s, p) => s + p.qty, 0),
    cartTotal: (state) => state.cart.reduce((s, p) => s + p.qty * p.price, 0),
  },
  actions: {
    addToCart(product) {
      const found = this.cart.find((p) => p.id === product.id);
      if (found) found.qty++;
      else this.cart.push({ ...product, qty: 1 });
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((p) => p.id !== id);
    },
    clearCart() {
      this.cart = [];
    },
  },
});
