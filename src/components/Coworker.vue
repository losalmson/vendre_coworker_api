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
        <p>Jobba med mig:</p>
        <span class="material-symbols-outlined">mail</span>
    </article>
</template>

<style scoped>
.coworker {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 16px;
  margin-top: 50px;
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
}

.coworker-name:hover {
    color: #AE9EF6;
}

.material-symbols-outlined.mail-icon {
    cursor: pointer;
}

.material-symbols-outlined.mail-icon:hover {
    color: #5432ED;
}
</style>