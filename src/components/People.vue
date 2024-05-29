<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getCoworkers } from '../services/peopleService';
import Coworkers from './Coworkers.vue';
import { ICoworker } from '../models/ICoworker';

const coworkers = ref<ICoworker[]>([]);

onMounted(async () => {
    const response = await getCoworkers(1);
    coworkers.value = response.data;
});
</script>

<template>
    <h1>Vi jobbar på Vendre</h1>
    <p>På Vendre arbetar vårt team som en enda stor familj, 
        förenade av passionen för försäljning och målet att
        skapa Sveriges ledande e-handelsplattformar. Vi värdesätter
        varandra, både kunder och kollegor, och har dessutom
        roligt på jobbet. Kanske blir du nästa eldsjäl i
        Vendre-familjen?</p>
    <Coworkers
    :coworkers="coworkers"
    />
</template>