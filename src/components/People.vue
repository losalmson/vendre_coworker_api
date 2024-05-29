<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getCoworkers } from '../services/peopleService';
import Coworkers from './Coworkers.vue';
import { ICoworker } from '../models/ICoworker';

const state = ref<ICoworker>({
    coworkers: [],
});

onMounted(async () => {
    state.value.coworkers = await getCoworkers();
});
</script>

<template>
    <h1>Vi som jobbar på Vendre</h1>
    <Coworkers
    :coworkers="state.coworkers"
    />
</template>