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
    <h1>Vi som jobbar på Vendre</h1>
    <Coworkers
    :coworkers="coworkers"
    />
</template>