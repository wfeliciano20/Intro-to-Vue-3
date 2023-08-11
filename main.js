const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: false
        }
    },
    methods: {
        addToCart(itemId) {
            this.cart.push(itemId)
        },
        removeFromCart(itemId) {
            const index = this.cart.indexOf(itemId)
            if (index > -1) {
                this.cart.splice(index, 1)
            }
        }
    }
});