<script setup lang="ts">
</script>

<template>
    <div class="loader-background">
        <div class="loader">
            <img 
                src="/src/assets/vendre-optimizers_logo.png" 
                alt="Loading"
            />
        </div>
    </div>
</template>

<style scoped>
.loader-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #edebfe;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.loader-background-leave-active {
  opacity: 0;
  transform: translateY(-100%);
}

.loader img {
  width: auto; 
  height: auto;
  max-width: 100px;
  max-height: 100px;
  animation: pulsate 1s infinite ease-in-out;
}

@keyframes pulsate {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}
</style>