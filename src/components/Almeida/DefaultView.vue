<script setup>
import MainView from './MainView.vue'
import SideBar from './SideBar.vue'
import NavBar from './NavBar.vue'
</script>

<template>
  <v-app theme="almeidaTheme">
    <nav-bar />
    <side-bar />
    <main-view />
  </v-app>
</template>
