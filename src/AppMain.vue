<script>
import { store } from '../src/store.js';
import AppCarta from './AppCarta.vue';

export default {

    components: {
        AppCarta,
    },

    name: 'AppMain',

    data() {
        return {
            store
        }
    },
}
</script>

<template lang="">
    <main>
        <AppCarta v-for="card, index in store.cardList" :key="index" :card="card" />
    </main>
</template>

<style lang="scss" scoped>
main {
    max-width: 1200px;
    margin: 30px auto;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
}
</style>