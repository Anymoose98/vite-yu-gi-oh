<script>
import AppHeader from './AppHeader.vue';
import AppMain from './AppMain.vue';
import axios from 'axios';
import { store } from '../src/store.js';

export default {
  components: {
    AppHeader,
    AppMain,
  },
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
      });
    }
  }
}
</script>


<template lang="">
    <AppHeader />
    <AppMain />
</template>


<style lang="scss">
@use './style/generals.scss';
</style>