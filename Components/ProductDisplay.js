app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
    template:
    /*Html*/
    `<!--Product-->
    <div class="product-display">
    <div class="container">
      <div class="row">
        <div class="product-image">
          <!-- Billede her-->
          <img :src="image" alt="Logo" height="500" width="500" />
        </div>

        <!-- displays prroducts info and stock/ out of stock -->
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inStock" class="stock" style="color: green">In stock</p>
          <p
            v-else-if="inStock < 10 && inStock > 0"
            class="stock"
            style="color: rgb(247, 247, 10)"
          >
            Alomst sold out
          </p>
          <p v-else class="stock" style="color: rgb(191, 4, 4)">
            Out of stock
          </p>
          <p class="page">shipping cost: {{ shipping }}</p>

          <!-- Detials -->
          <ul>
            <li class="stock" v-for="detail in details">{{ detail }}</li>
          </ul>
          <div
            class="stock"
            v-for="(variants, index) in variants"
            :key="variants.id"
            @mouseover="updateVar(index)"
          >
            {{ variants.var }}
          </div>

          <!-- add to cart -->
          <button
            type="button"
            class="btn btn-primary"
            :class="{ disabledButton: !inStock }"
            :disabled="!inStock"
            @click="addToCart"
            style="margin-left: 20px"
          >
            add to cart
          </button>

          <!-- remove from cart-->
          <button
            type="button"
            class="btn btn-outline-danger"
            style="margin-left: 20px"
            v-if="cart > 0"
            @click="removeFromCart"
          >
            remove from cart
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`,

data: function() {
    return {
        product: 'under solen',
        band: 'SpejlFarver',
        selectedVars: 0,
        details: ['Tadow', 'Balladen', 'Begginers luck', 'Kabob jam', 'Lasses flamingo', 'Time to pretend', 'Graceland', 'first aid kit', 'lasses Ambiland'],
        variants: [
            {id: 1, var: 'circle', image: './assets/images/Circle.jpg', stk: 12},
            {id: 2, var: 'nocircle', image: './assets/images/NoCircle.jpg', stk: 0},
        ],
        
    }
},
methods: {
    addToCart() {
        this.$emit('add-to-cart', this.variants[this.selectedVars].id),
        this.variants[this.selectedVars].stk -= 1
    },
    updateVar(index){
        this.selectedVars = index
    },
    removeFromCart(){
        this.$emit('remove-from-cart')
        this.variants[this.selectedVars].stk += 1
    }
},
computed:{
    title(){
        return this.band + ': ' + this.product
    },
    image(){
        return this.variants[this.selectedVars].image
    },
    inStock(){
        return this.variants[this.selectedVars].stk
    },
    shipping(){
        if (this.premium){
          return 'Free'
        }
        return '29.-'
    }
}

})