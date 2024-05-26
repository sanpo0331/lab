<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function routing(page) {
  router.push({ name: page })
}
</script>

<template>
  <v-layout>
    <v-app-bar title="Layout3" color="grey-lighten-2">
      <v-spacer />
      <v-btn icon="fa-solid fa-flask" @click="routing('Home')" />
    </v-app-bar>

    <v-navigation-drawer color="primary">
      <v-list>
        <v-list-item title="Drawer Left"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer color="secondary" location="right">
      <v-list>
        <v-list-item title="Drawer right"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      Main Content
    </v-main>
  </v-layout>
</template>
