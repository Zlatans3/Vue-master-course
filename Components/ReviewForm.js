app.component('app-review', {
    template:
    /*html */
    `<form class="form alert alert-dark" @submit.prevent="onSubmit">
    
    <div class="form-group">
    <h3>Leave a review</h3>
    <label for="name" v-model="name">Name:</label>
    <input id="name" class="form-control">
    </div>

    <div class="form-group">
    <label for="review" v-model="review">Review:</label>
    <textarea id="review" class="form-control"></textarea>
    </div>

    <div class="form-group">
    <label for="rating" v-model.number="rating">Rating:</label>
    <select name="rating" class="form-control"   id="rating">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    </div>


    <input type="submit" class="btn btn-outline-primary" value="submit">

    </form>`,
data(){
    return{
        Name: '',
        review: '',
        rating: null
    }
},
methods:{
    onSubmit(){
        let submitReview = {
            name: this.name,
            review: this.review,
            rating: this.rating
        }
        this.$emit(review-submitted, submitReview)

        this.name = '',
        this.review = '',
        this.rating = null
    }
}
})