<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function routing(page) {
  router.push({ name: page })
}
</script>

<template>
  <v-layout>
    <v-navigation-drawer color="primary">
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar title="Layout2" color="grey-lighten-2">
      <v-spacer />
      <v-btn icon="fa-solid fa-flask" @click="routing('Home')" />
    </v-app-bar>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      Main Content
    </v-main>
  </v-layout>
</template>
