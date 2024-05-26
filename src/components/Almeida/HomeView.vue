<script setup>
import CardGairaiTanto from './CardGairaiTanto.vue'
import CardNurseTanto from './CardNurseTanto.vue'
</script>

<template>
  <div class="d-flex justify-space-start mb-5">
    <v-row>
      <v-col lg="5" cols="12">
        <card-gairai-tanto class="mr-4" />
      </v-col>
      <v-col lg="5" cols="12">
        <card-nurse-tanto class="mr-4" />
      </v-col>
    </v-row>
  </div>
</template>
