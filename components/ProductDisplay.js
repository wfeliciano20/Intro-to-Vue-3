app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
        `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :class="{'out-of-stock-img': !inStock}" :src="image" alt="Green Socks">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p>Shipping: {{ shipping }}</p>
                <p v-if="inStock" style="color: green">In Stock</p>
                <p style="color: red" v-else>Out Stock</p>
                <p>Stock: {{stockNumber}}</p>
                <p>{{sale}}</p>
                <p>{{ description }}</p>
                <!-- <a :href="url">Google</a> -->
                <!-- <ul>
                    <li v-for="detail in details">{{ detail}}</li>
                </ul> -->
                <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{ backgroundColor: variant.color}"></div>
                <!-- <div v-for="size in sizes">{{size}}</div> -->
                <button class="button" :class="{ disabledButton: !inStock}" :disabled="!inStock" @click="addToCart">Add to Cart</button>
                <button class="button" :disabled="cart == 0" @click="removeFromCart" :class="{disabledButton: cart == 0}">Remove</button>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
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
            this.stockNumber -= 1
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        removeFromCart() {
            this.stockNumber += 1
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
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
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99;
        }
    }
})