<script setup lang="ts">
import { ref } from 'vue';
import { ICoworker } from "../models/ICoworker";

interface ContactProps {
    coworker: ICoworker;
}
defineProps<ContactProps>();

const showEmailContainer = ref(false);

const toggleEmailContainer = () => {
    showEmailContainer.value = !showEmailContainer.value;
}

</script>

<template>
    <article>
        <img class="avatar-image" :src="coworker.avatar" :alt="coworker.email" loading="lazy"/>
        <div class="coworker-info">
        <h3 class="coworker-name">{{ coworker.first_name}} {{ coworker.last_name }}</h3>
        <button @click="toggleEmailContainer">Kontakta mig</button>
        <div 
        v-if="showEmailContainer"
        class="email-container">
        <a :href="'mailto:' + coworker.email" class="coworker-email">{{ coworker.email }}</a>
        </div>
        </div>
    </article>
</template>