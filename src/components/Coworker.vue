<script setup lang="ts">
import { ref } from 'vue';
import { ICoworker } from "../models/ICoworker";

interface CoworkerProps {
    coworker: ICoworker;
}

const props = defineProps<CoworkerProps>();

const showEmailContainer = ref(false);

const toggleEmailContainer = () => {
    showEmailContainer.value = !showEmailContainer.value;
}

const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
        showEmailContainer.value = false;
    });
}

</script>

<template>
    <article class="coworker">
        <img class="avatar-image" :src="props.coworker.avatar" :alt="props.coworker.email" loading="lazy"/>
        <h3 class="coworker-name">{{ props.coworker.first_name}} {{ props.coworker.last_name }}</h3>
        <button 
        class="coworker-btn"
        @click="toggleEmailContainer">
        Jobba med mig
        </button>
        <div 
        v-if="showEmailContainer"
        class="email-container">
        <a :href="'mailto:' + coworker.email" class="coworker-email">{{ coworker.email }}</a>
        <span 
            @click="copyToClipboard(props.coworker.email)"
            class="material-symbols-outlined">
            content_copy
            </span>
        </div>
    </article>
</template>

<style scoped>
.coworker {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 16px;
  margin-top: 30px;
  box-sizing: border-box;
}

.avatar-image {
   width: 200px;
   height: 200px;
   border-radius: 50%;
   transition: box-shadow 0.3s ease;
}

.avatar-image:hover {
    box-shadow: inset 0 0 0 3px #ffffff, 0 0 0 3px #5432ED;
}

.coworker-name {
    color: #5432ED;
    font-size: 1.2rem;
    margin: 10px 0;
}

.coworker-name:hover {
    color: #AE9EF6;
}

.coworker-btn {
    background-color: #5432ED;
    color: #ffffff;
    padding: 10px 16px;
    border: none;
    border-radius: 12px;
    transition: background-color 0.3s ease, color 0.3s ease;
    margin: 10px;
}

.coworker-btn:hover {
    background-color: #674AEF;
    color: #ffffff;
    border: none;
}

.email-container {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 12px;
    margin-top: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: box-shadow 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.email-container:hover {
    box-shadow: inset 0 0 0 3px #EDEBFE;
}

.coworker-email {
    color: #5432ED;
    text-decoration: none;
    font-size: 0.9rem;
    cursor: pointer;
}

.coworker-email:hover {
    text-decoration: underline;
}

.material-symbols-outlined {
    font-size: 1.2em;
    padding: 5px;
    color: #5432ED;
    cursor: pointer;
    transition: color 0.3s ease;
}

.material-symbols-outlined:hover {
    color: #674AEF;
}

@keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>