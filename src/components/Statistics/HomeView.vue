<script setup>
import AppBar from './AppBar.vue'
import MenuCard from './MenuCard.vue'
</script>

<template>
  <v-app theme="statisticsTheme">
    <app-bar />
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col sm="6" md="5" cols="12">
            <menu-card
              title="データアップロード"
              icon="fa-solid fa-cloud-arrow-up"
              href="satisticsUpload"
            />
          </v-col>
          <!-- <v-col sm="6" md="5" cols="12"> </v-col> -->
          <v-col sm="6" md="5" cols="12">
            <menu-card
              title="住民基本台帳人口移動統計"
              icon="fa-solid fa-truck-moving"
              href="moving"
            />
          </v-col>
          <!-- <v-col sm="6" md="5" cols="12"> </v-col> -->
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
