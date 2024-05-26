<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function routing(page) {
  router.push({ name: page })
}
</script>

<template>
  <v-layout>
    <v-system-bar color="grey-darken-3"></v-system-bar>

    <v-navigation-drawer color="primary" width="72" permanent></v-navigation-drawer>
    <v-navigation-drawer color="grey-darken-1" width="150"></v-navigation-drawer>

    <v-app-bar title="Layout4" color="grey" height="48" flat>
      <v-spacer />
      <v-btn icon="fa-solid fa-flask" @click="routing('Home')" />
    </v-app-bar>

    <v-navigation-drawer
      color="secondary"
      width="150"
      location="right"
      permanent
    ></v-navigation-drawer>

    <v-app-bar color="grey-lighten-2" height="48" location="bottom" flat></v-app-bar>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      Main Content
    </v-main>
  </v-layout>
</template>
