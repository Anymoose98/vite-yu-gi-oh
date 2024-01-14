import { reactive } from 'vue';

export const store = reactive({
    cardList: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=25&offset=0',
    apiArchetypeUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    ricercaArchetype: 'Tutti',
    ArchetypesList: [],
})