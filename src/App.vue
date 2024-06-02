<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Loader from './components/Loader.vue'; 
import People from './components/People.vue';

const isLoading = ref(true);
const people = ref(false);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
    people.value = true;
  }, 2000);
});
</script>

<template>
        <Loader v-if="isLoading" />
        <People v-else="people" />
</template>

<style scoped>
</style>
