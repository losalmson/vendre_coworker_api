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
        <img :src="coworker.avatar" :alt="coworker.email"/>
        <h3>{{ coworker.first_name}} {{ coworker.last_name }}</h3>
        <span> {{ coworker.email }}</span>
    </article>
</template>