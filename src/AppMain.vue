<script>
import axios from 'axios';
import { store } from '../src/store.js';

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    created() {
        this.getcard();
    },

    methods: {
        getcard() {
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=25&offset=0').then((response) => {
                store.cardList = response.data.data;
                console.log(store.cardList)
            });
        }
    }
}
</script>

<template lang="">
    <main>
        <div class="card" v-for="card, index in store.cardList" :key="index" >
            <img :src="card.card_images[0].image_url" alt="">
            <h3>{{card.name}}</h3>
            <h5>{{card.archetype}}</h5>
        </div>

    </main>
</template>

<style lang="scss" scoped>
main {
    max-width: 1200px;
    margin: 30px auto;
    background-color: white;
    display: flex;
    flex-wrap: wrap;

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

}
</style>