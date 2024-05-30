<script setup lang="ts">
import { ICoworker } from "../models/ICoworker";

interface ContactProps {
    coworker: ICoworker;
}
defineProps<ContactProps>();
</script>

<template>
    <article>
        <img class="avatar-image" :src="coworker.avatar" :alt="coworker.email" loading="lazy"/>
        <div class="coworker-info">
        <h3 class="coworker-name">{{ coworker.first_name}} {{ coworker.last_name }}</h3>
        <btn><
        <a :href="'mailto:' + coworker.email" class="coworker-email">{{ coworker.email }}</a>
        </div>
    </article>
</template>