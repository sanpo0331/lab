<template>
  <!-- <section class="ma-5">
    <v-container class="bg-surface-variant mb-6">
      <v-row align="start" style="height: 150px">
        <v-col v-for="n in 3" :key="n">
          <v-sheet class="pa-2">align start</v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="bg-surface-variant mb-6">
      <v-row align="center" style="height: 150px">
        <v-col v-for="n in 3" :key="n">
          <v-sheet class="pa-2">align center</v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="bg-surface-variant mb-6">
      <v-row align="end" style="height: 150px">
        <v-col v-for="n in 3" :key="n">
          <v-sheet class="pa-2">align end</v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="bg-surface-variant">
      <v-row style="height: 150px">
        <v-col align-self="start">
          <v-sheet class="pa-2">align start</v-sheet>
        </v-col>
        <v-col align-self="center">
          <v-sheet class="pa-2">align center</v-sheet>
        </v-col>
        <v-col align-self="end">
          <v-sheet class="pa-2">align end</v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section> -->
  <!-- <section class="ma-5">
    <v-container class="bg-surface-variant">
      <v-row>
        <v-col>
          <v-sheet class="pa-2">v-col auto</v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-2">v-col auto</v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-sheet class="pa-2">v-col auto</v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-2">v-col auto</v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-2">v-col auto</v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-sheet class="pa-2">v-col 2</v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-2">v-col auto</v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section> -->
  <!-- <section class="ma-5">
    <v-container class="bg-surface-variant">
      <v-row>
        <v-col v-for="n in 2" :key="n" cols="4">
          <v-sheet class="pa-2">justify nothing</v-sheet>
        </v-col>
      </v-row>
      <v-row justify="start">
        <v-col v-for="n in 2" :key="n" cols="4">
          <v-sheet class="pa-2">justify start</v-sheet>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col v-for="n in 2" :key="n" cols="4">
          <v-sheet class="pa-2">justify center</v-sheet>
        </v-col>
      </v-row>
      <v-row justify="end">
        <v-col v-for="n in 2" :key="n" cols="4">
          <v-sheet class="pa-2">justify end</v-sheet>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-col v-for="n in 2" :key="n" cols="4">
          <v-sheet class="pa-2">justify space-around</v-sheet>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col v-for="n in 2" :key="n" cols="4">
          <v-sheet class="pa-2">justify space-between</v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section> -->
  <!-- <section class="ma-5">
    <v-container class="bg-surface-variant">
      <v-row class="mb-6">
        <v-col cols="4">
          <v-sheet class="pa-2">col-4</v-sheet>
        </v-col>
        <v-col cols="4">
          <v-sheet class="pa-2">col-4</v-sheet>
        </v-col>
      </v-row>
      <v-row class="mb-6">
        <v-col cols="4">
          <v-sheet class="pa-2">col-4</v-sheet>
        </v-col>
        <v-col cols="4" offset="1">
          <v-sheet class="pa-2">col-4 offset-1</v-sheet>
        </v-col>
      </v-row>
      <v-row class="mb-6">
        <v-col cols="4">
          <v-sheet class="pa-2">col-4</v-sheet>
        </v-col>
        <v-col cols="4" offset="2">
          <v-sheet class="pa-2">col-4 offset-2</v-sheet>
        </v-col>
      </v-row>
      <v-row class="mb-6">
        <v-col cols="4">
          <v-sheet class="pa-2">col-4</v-sheet>
        </v-col>
        <v-col cols="4" offset="3">
          <v-sheet class="pa-3">col-4 offset-3</v-sheet>
        </v-col>
      </v-row>
      <v-row class="mb-6">
        <v-col cols="4">
          <v-sheet class="pa-2">col-4</v-sheet>
        </v-col>
        <v-col cols="4" offset="4">
          <v-sheet class="pa-2">col-4 offset-4</v-sheet>
        </v-col>
      </v-row>
      <v-row class="mb-6">
        <v-col cols="4">
          <v-sheet class="pa-2">col-4</v-sheet>
        </v-col>
        <v-col cols="4" offset="5">
          <v-sheet class="pa-2">col-4 offset-5</v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section> -->
  <!-- <section class="ma-5">
    <v-container class="bg-surface-variant">
      <v-row>
        <v-col order="6">
          <v-sheet class="pa-2">markup 1, order=6</v-sheet>
        </v-col>
        <v-col order="12">
          <v-sheet class="pa-2">markup 2, order=12</v-sheet>
        </v-col>
        <v-col order="1">
          <v-sheet class="pa-2">markup 3, order=1</v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-sheet class="pa-2">markup 1</v-sheet>
        </v-col>
        <v-col order="last">
          <v-sheet class="pa-2">markup 2, order=last</v-sheet>
        </v-col>
        <v-col order="first">
          <v-sheet class="pa-2">markup 3, order=first</v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-2">markup 4</v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section> -->
  <!-- <section class="ma-5">
    <v-container class="bg-surface-variant">
      <v-row>
        <v-col cols="9">
          <v-sheet class="pa-2">col-9</v-sheet>
        </v-col>
        <v-col cols="4">
          <v-sheet class="pa-2">col-4</v-sheet>
        </v-col>
        <v-col cols="6">
          <v-sheet class="pa-2">col-6</v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet class="pa-2">col-3</v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section> -->
  <section class="ma-5">
    <v-container class="bg-surface-variant">
      <v-row>
        <v-col cols="4" sm="12" md="2" lg="1">
          <v-sheet class="pa-2">auto-1</v-sheet>
        </v-col>
        <v-col cols="4" sm="12" md="4" lg="5">
          <v-sheet class="pa-2">auto-2</v-sheet>
        </v-col>
        <v-col cols="4" sm="12" md="4" lg="3">
          <v-sheet class="pa-2">auto-3</v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
