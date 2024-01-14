<script>
import { store } from '../src/store.js';
import axios from 'axios';

export default {
    name: 'AppCerca',

    data() {
        return {
            store,
            ricercaArchetype: "Tutti",
            ArchetypesList: []
        }
    },
    created() {
        this.getArchetypesList();
    },
    methods: {
        getArchetypesList() {
            axios.get(store.apiArchetypeUrl).then((response) => {
                this.ArchetypesList = response.data
            });
        },

        metodoRicerca() {
            axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
                .then((response) => {
                    // Solo il primo 
                    {
                        store.ricercaArchetype = response.data[2].archetype_name;
                        console.log(store.ricercaArchetype);
                    }

                });
        },
    }
}


</script>


<template lang="">
    <div>{{store.ricercaArchetype}}</div>
    <div>
        <select v-model="ricercaArchetype"  @change="metodoRicerca">
            <option value="Tutti">Tutti</option>
            <option :value="Archetype.archetype_name" v-for="Archetype, index in ArchetypesList" :key="index" > {{Archetype.archetype_name}} </option>
            
        </select>
    </div>
</template>


<style lang="scss" scoped>
div {
    max-width: 1200px;
    margin: 30px auto;

    select {
        padding: 5px 10px;
        font-weight: 800;
        border-radius: 10px;
    }
}
</style>