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

  // computed: {
  //   computedCardList() {
  //     this.getcard();
  //     return store.ricercaArchetype;
  //   },
  // },

  created() {
    this.getcard();
  },

  watch: {
    'store.ricercaArchetype': 'getcard',
  },

  methods: {
    getcard() {

      let apiModificabile = store.apiUrl


      if (store.ricercaArchetype !== '' && store.ricercaArchetype !== 'Tutti') {
        apiModificabile += '&archetype=' + store.ricercaArchetype;
      }

      axios.get(apiModificabile)
        .then((response) => {
          store.cardList = response.data.data;
        });
    },
  },


}
</script>


<template lang="">
    <AppHeader />
    <AppCerca /> 
    <!-- @ricerca="getcard" -->
    <AppMain />
</template>


<style lang="scss">
@use './style/generals.scss';
</style>