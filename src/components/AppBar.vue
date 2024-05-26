<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'

const emit = defineEmits(['navOpen'])
function emitNavOpen() {
  emit('navOpen')
}

const router = useRouter()
const { name } = useDisplay()

const btn = computed(() => {
  switch (name.value) {
    case 'md':
    case 'sm':
      return false
    default:
      return true
  }
})

function routerPush(page) {
  router.push({ name: page })
}
</script>

<template>
  <v-app-bar>
    <v-app-bar-nav-icon v-if="!btn" @click="emitNavOpen" />
    <v-app-bar-title class="poppins-medium">Lab</v-app-bar-title>
    <template v-if="btn">
      <v-btn @click="routerPush('PizzaYa')">Pizza-ya</v-btn>
      <v-btn @click="routerPush('statistics')">Statistics</v-btn>
    </template>
  </v-app-bar>
</template>

<style scoped>
.poppins-medium {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 2rem;
}
</style>
