const app = Vue.createApp({
    data() {
        return {
            product: "Socks",
            description: "Wonderful wool socks",
            image: "./assets/images/socks_green.jpg",
            url: "https://google.com",
            inStock: true,
            stockNumber: 1,
            details: ["50% cotton", "30% wool", "20% polyester"],
            variants: [
                { id: 2234, color: "green" },
                { id: 2235, color: "blue" }
            ],
            sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
        }
    }
});