<script setup lang="ts">
import { ref } from 'vue';
import { IPeopleState } from '../models/IPeopleState';

const state = ref<IPeopleState>({
    coworkers: [],
});

</script>