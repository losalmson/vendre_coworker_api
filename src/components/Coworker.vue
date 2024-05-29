<script setup lang="ts">
import { ICoworker } from "../models/ICoworker";

interface CoworkerProps {
    coworker: ICoworker[];
}

defineProps<CoworkerProps>();
 
 defineEmits<{
    (e:)
 }>();

</script>

<template>
    <article class="coworker">
        <h3>{{ coworker. }}</h3>
    </article>
</template>