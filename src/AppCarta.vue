<script>
export default {
    name: 'AppCarta',
    props: {
        card: Object
    }
}
</script>


<template lang="">
<div class="card">
            <img :src="card.card_images[0].image_url" alt="">
            <h3>{{card.name}}</h3>
            <h5>{{card.archetype}}</h5>
        </div>
</template>

<style lang="scss">
.card {
    width: calc(100% / 5 - 10px);
    margin: 5px;
    background-color: orange;
    text-align: center;

    h5 {
        margin-top: 5px;
    }

    h3 {
        margin-top: 5px;
        color: white;
    }

    img {
        width: 100%;
    }
}
</style>