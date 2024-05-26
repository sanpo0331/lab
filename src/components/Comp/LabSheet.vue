<script setup>
import { ref } from 'vue'

const elevations = ref([0, 4, 8, 12, 16, 20, 24])
</script>
<template>
  <section class="ma-5">
    <v-container>
      <v-row justify="start">
        <v-col v-for="elevation in elevations" :key="elevation" cols="4">
          <v-sheet class="pa-6" color="grey-lighten-2">
            <v-sheet :elevation="elevation" class="mx-auto" height="100" width="100">
              <p>elevation:{{ elevation }}</p>
            </v-sheet>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <section class="ma-5">
    <v-container>
      <v-row justify="space-around">
        <v-col v-for="rounded in [false, true, 'xl']" :key="String(rounded)" cols="4">
          <v-sheet class="pa-6" color="grey-lighten-2">
            <v-sheet :rounded="rounded" class="mx-auto pa-2" height="100" width="100">
              <p>{{ rounded }}</p>
            </v-sheet>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <section class="ma-5">
    <v-sheet
      class="d-flex align-center justify-center text-center mx-auto px-4"
      color="grey-darken-2"
      elevation="4"
      height="250"
      max-width="800"
      rounded
    >
      <div>
        <h2 class="text-h4 font-weight-black text-orange">Conguratulations!</h2>
        <p class="text-h5 font-weight-medium mb-2">
          You are officially a part of the Vuetify Community!
        </p>
        <p class="text-body-2 mb-4">
          Please head over to your inbox/spam or others folder to find our verificaiton email.
        </p>
        <v-btn color="orange" variant="text">go to login</v-btn>
      </div>
    </v-sheet>
  </section>
</template>
