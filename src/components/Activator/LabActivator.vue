<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const menu = ref(['activatorTooltips', 'activatorDialog'])
function toChildren(event) {
  router.push({ name: event })
}
</script>

<template>
  <h2>Activator</h2>
  <v-sheet max-width="500">
    <v-select label="Select" :items="menu" @update:model-value="toChildren" />
    <button @click="toChildren">children</button>
  </v-sheet>
  <router-view />
</template>
