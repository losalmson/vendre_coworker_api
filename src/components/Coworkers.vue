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