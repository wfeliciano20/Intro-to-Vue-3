const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            brand: "Vue Mastery",
            product: "Socks",
            onSale: true,
            description: "Wonderful wool socks",
            url: "https://google.com",
            details: ["50% cotton", "30% wool", "20% polyester"],
            selectedVariant: 0,
            variants: [
                { id: 2234, color: "green", image: "./assets/images/socks_green.jpg", quantity: 50 },
                { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0 },
            ],
            sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
            this.stockNumber -= 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        removeFromCart() {
            this.cart -= 1
            this.stockNumber += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity > 0
        },
        stockNumber() {
            return this.variants[this.selectedVariant].quantity
        },
        sale() {
            return this.brand + ' ' + this.product + ' are on sale!'
        }


    }
});