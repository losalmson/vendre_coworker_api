<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { IPeopleState } from '../models/IPeopleState';
import { getCoworkers } from '../services/peopleService';

const state = ref<IPeopleState>({
    coworkers: [],
});

onMounted(async () => {
    state.value.coworkers = await getCoworkers();
});
</script>