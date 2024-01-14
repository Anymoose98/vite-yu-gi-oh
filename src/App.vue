<script>
import AppHeader from './AppHeader.vue';
import AppCerca from './AppCerca.vue';
import AppMain from './AppMain.vue';
import axios from 'axios';
import { store } from '../src/store.js';

export default {
  components: {
    AppHeader,
    AppCerca,
    AppMain,

  },
  data() {
    return {
      store,

    }
  },
  created() {
    this.getcard();
  },
  methods: {
    getcard() {
      let apiModificabile = store.apiUrl

      if (store.ricercaArchetype != '') {
        apiModificabile += '&name= ${store.ricercaArchetype}';
        console.log(apiModificabile)
      }

      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=55&offset=0').then((response) => {
        store.cardList = response.data.data;
      });
    },


  }
}
</script>


<template lang="">
    <AppHeader />
    <AppCerca />
    <AppMain />
</template>


<style lang="scss">
@use './style/generals.scss';
</style>