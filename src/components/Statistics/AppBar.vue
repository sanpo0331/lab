<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function routing(to) {
  router.push({ name: to })
}
</script>

<template>
  <v-app-bar :elevation="2">
    <v-app-bar-title class="app-title">Statistics</v-app-bar-title>
    <v-spacer />
    <v-btn icon="fa-solid fa-flask" color="primary" @click="routing('Home')" />
    <v-btn icon="fa-solid fa-house" color="primary" @click="routing('statistics')" />
  </v-app-bar>
</template>

<style scoped>
.app-title {
  font-family: 'Salsa', cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
  color: #2a83a2;
}
</style>
