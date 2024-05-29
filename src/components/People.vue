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
    <section class="info-section">
    <h1 class="coworker-heading">Vi jobbar på Vendre</h1>
    <p class="info-text">
        På Vendre arbetar vårt team som en enda stor familj. 
        Vi är förenade av passionen för försäljning och målet att
        skapa Sveriges ledande e-handelsplattformar. Vi värdesätter
        varandra, både kunder och kollegor, och har dessutom
        roligt på jobbet. Kanske blir du nästa eldsjäl i
        Vendre-familjen?
    </p>
    </section>
    <Coworkers
    :coworkers="coworkers"
    />
</template>

<style scoped>

.info-text {
max-width: 600px;
margin: 0 auto;
}
</style>