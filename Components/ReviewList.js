app.conponent('review-list', {
    props:{
        reiews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-contatiner">
    <h3></h3>
    <ul>
        <li v-for="(review, index) in reviews" :key="index">
        {{ review.name}} gave this {{ review.rating }} <i class="fas fa-star"></i>
        <br/>
        "{{ review.review }}"
        </li>
    </ul>
</div>
    `

})