<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getCoworkers } from '../services/peopleService';
import Coworkers from './Coworkers.vue';
import { ICoworker } from '../models/ICoworker';

const coworkers = ref<ICoworker[]>([]);
const currentPage = ref(1);
const totalPages = ref(0);

const fetchCoworkers = async (page:number) => {
    const response = await getCoworkers(page);
    coworkers.value = response.data;
    totalPages.value = response.total_pages;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
        fetchCoworkers(currentPage.value);
    }
};

const previousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
        fetchCoworkers(currentPage.value)
    }
}

onMounted(async () => {
   fetchCoworkers(currentPage.value);
});
</script>

<template>
    <section class="info-section">
    <h1 class="coworker-heading">Vi jobbar på Vendre</h1>
    <p class="info-text">
        På Vendre arbetar vårt team som en enda stor familj. 
        Vi är förenade av passionen för försäljning och drömmen att
        skapa Sveriges ledande e-handelsplattformar. Vi värdesätter
        varandra, både kunder och kollegor, och har dessutom
        roligt på jobbet. Kanske blir du nästa eldsjäl i
        Vendre-familjen?
    </p>
    </section>
    <Coworkers
    :coworkers="coworkers"
    />
    <div class="pagination">
        <button 
            @click="previousPage" 
            :disabled="currentPage === 1">
        Föregående
        </button>
        <button 
            v-for="page in totalPages" 
            :key="page"
            :class="{ active: page === currentPage }">
            {{ page }}
        </button>
        <button 
            @click="nextPage" 
            :disabled="currentPage === totalPages"
            :class="{ hidden: currentPage === totalPages }">
        Nästa
        </button>
    </div>
</template>

<style scoped>
.info-section {
    text-align: center;
    margin-bottom: 2rem;
}

.coworker-heading {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #000000;
}

.info-text {
max-width: 600px;
margin: 0 auto;
line-height: 1.5;
color: #000000;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 1.5rem;
}

.pagination button {
  color: #000000;
  padding: 10px 20px;
  text-decoration: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 5px;
}

.pagination button.active {
  background-color: #674AEF;
  color: #FFFFFF;
}

.pagination button:hover:not(.active) {
  background-color: #EDEBFE;
}

.pagination button.hidden {
    display: none;
}
</style>