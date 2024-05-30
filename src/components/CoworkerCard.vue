<script setup lang="ts">
import { ICoworker } from "../models/ICoworker";

interface CoworkerCardProps {
    coworker: ICoworker;
}

defineProps<CoworkerCardProps>();
 
 defineEmits<{
 }>();

</script>

<template>
    <article class="coworker-card">
        <img class="avatar-image" :src="coworker.avatar" :alt="coworker.email" loading="lazy"/>
        <div class="coworker-info">
        <h3 class="coworker-name">{{ coworker.first_name}} {{ coworker.last_name }}</h3>
        <a :href="'mailto:' + coworker.email" class="coworker-email">{{ coworker.email }}</a>
        </div>
    </article>
</template>

<style scoped>
.coworker-card {
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #D8D9D9;
  box-sizing: border-box;
  background: #fff;
  margin-top: 16px;
  transition: box-shadow 0.3s ease;
  max-width: 300px;
}

.coworker-card:hover,
.coworker-card.active {
  box-shadow: 0 0 8px 2px rgba(84, 50, 237, 0.3);
}

.avatar-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #5432ED;
  margin-right: 16px;
  transition: box-shadow 0.3s ease;
}

.coworker-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.coworker-name {
  color: #5432ED;
  margin: 0;
  font-size: 1.2em;
}

.coworker-email {
  color: #000000;
  font-size: 0.9em;
  margin-top: 4px;
  text-decoration: underline;
}
</style>