<script setup lang="ts">
import { ICoworker } from "../models/ICoworker";

interface CoworkerProps {
    coworker: ICoworker;
}

defineProps<CoworkerProps>();
 
 defineEmits<{
 }>();

</script>

<template>
    <article class="coworker">
        <img class="avatar-image" :src="coworker.avatar" :alt="coworker.email" loading="lazy"/>
        <h3 class="coworker-name">{{ coworker.first_name}} {{ coworker.last_name }}</h3>
        <span> {{ coworker.email }}</span>
    </article>
</template>

<style scoped>

.avatar-image {
   border-radius: 50%;
   transition: box-shadow 0.3s ease;
}

.avatar-image:hover {
    box-shadow: inset 0 0 0 2px #ffffff, 0 0 0 2px #5432ED;
}

.coworker-name {
    color: #5432ED
}

.coworker-name:hover {
    color: #AE9EF6
}
</style>