<script setup>
import { ref } from 'vue'
import AppBar from '../Pizza-ya/AppBar.vue'
import FooterView from '../Pizza-ya/FooterView.vue'

const appMenu = ref([
  {
    title: 'トップページ',
    icon: 'fa-solid fa-house',
    route: 'PizzaYa'
  },
  {
    title: '注文に戻る',
    icon: 'fa-solid fa-pizza-slice',
    route: 'PizzaYaOrder'
  }
])
</script>
<template>
  <v-app theme="pizzayaTheme">
    <app-bar :app-menu="appMenu" />
    <v-main>
      <v-sheet style="max-width: 1400px; min-height: 75vh; margin: 0 auto"> </v-sheet>
    </v-main>
    <footer-view />
  </v-app>
</template>
