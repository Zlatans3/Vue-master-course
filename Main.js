const app = Vue.createApp({
    data: function() {
        return {
            cart:0,
            product: 'SpejlFarver: under solen',
            image: './Assets/images/Circle.jpg',
            inStock: false,
            details: ['Tadow', 'Balladen', 'Begginers luck', 'Kabob jam', 'Lasses flamingo', 'Time to pretend', 'Graceland', 'first aid kit', 'lasses Ambiland'],
            variants: [
                {id: 1, var: 'circle', image: './assets/images/Circle.jpg'},
                {id: 2, var: 'nocircle', image: './assets/images/NoCircle.jpg'},
            ],
            
        }
    },
    methods: {
        addToCart() {
            this.cart += 1,
            this.inventory -= 1
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        removeFromCart(){
            this.cart -= 1,
            this.inventory += 1
        }
    }
}).mount('#app')