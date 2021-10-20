const app = Vue.createApp({
    data: function() {
        return {
            product: 'logo',
            image: './Assets/images/Circle.jpg',
            inStock: true,

        }
    }
}).mount('#app')