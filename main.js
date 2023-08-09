const app = Vue.createApp({
    data() {
        return {
            product: "Socks",
            description: "Wonderful wool socks",
            image: "./assets/images/socks_green.jpg",
            url: "https://google.com",
            inStock: true,
            stockNumber: 1,
        }
    }
});