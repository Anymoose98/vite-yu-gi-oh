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
                console.log(this.cardList)
            });
        }
    }
}
</script>

<template lang="">
    <main>
        <div class="card">
            <img src="" alt="">
        </div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
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
        height: 300px;

    }

}
</style>