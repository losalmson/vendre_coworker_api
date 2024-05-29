<script setup lang="ts">
import { ICoworker } from '../models/ICoworker';
import Coworker from './Coworker.vue';

interface CoworkersProp {
    coworkers: ICoworker[];
}

defineProps<CoworkersProp>();

</script>

<template>
    <section class="coworkers">
        <Coworker 
        v-for="coworker in coworkers"
        :coworker="coworker"
        :key="coworker.id"/>
    </section>
</template>

<style scoped>
.coworkers {
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  margin: 50px;
}

.coworker {
    flex: 0 0 calc(33.33% - 16px);
    box-sizing: border-box;
}
</style>