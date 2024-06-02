<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ICoworker } from '../models/ICoworker';
import Coworker from './Coworker.vue';
import CoworkerCard from './CoworkerCard.vue';


interface CoworkersProp {
    coworkers: ICoworker[];
}

defineProps<CoworkersProp>();

const isMobile = ref(window.innerWidth <= 768);

const handleResize = () => {
    isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
})

</script>

<template>
    <section :class="{ coworkers: true, 'coworkers-mobile': isMobile }">
    <template v-if="!isMobile">
        <Coworker 
        v-if="!isMobile"
        v-for="coworker in coworkers"
        :coworker="coworker"
        :key="coworker.id"/>
    </template>
    <template v-else>
        <div class="coworker-card-container">
        <CoworkerCard
        v-for="coworker in coworkers"
        :coworker="coworker"
        :key="coworker.id" />
        </div>
    </template>
    </section>
</template>

<style scoped>
.coworkers {
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  margin: 50px auto;
}

.coworkers-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.coworker {
  flex: 0 0 calc(33.33% - 16px);
  box-sizing: border-box;
}
</style>