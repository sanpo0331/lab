<script setup>
import { ref } from 'vue'

const dialog = ref(false)
</script>

<template>
  <section class="ma-5">
    <v-dialog max-width="500">
      <template #activator="{ props }">
        <v-btn v-bind="props" color="primary" text="Open Dialog" variant="flat" />
      </template>
      <template #default="{ isActive }">
        <v-card title="Dialog" color="grey-darken-2">
          <v-card-text>v-card text(Lorem ipsum dolor sit amet)</v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn text="Close Dialog" color="secondary" @click="isActive.value = false" />
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </section>

  <section class="ma-5">
    <v-btn text="open dialog" color="primary" @click="dialog = true" />
    <v-dialog v-model="dialog" width="auto">
      <v-card
        max-width="400"
        prepend-icon="mdi mdi-update"
        text="card text(Your application will relaunch)"
        title="Card Title"
        color="grey-darken-2"
      >
        <template #actions>
          <v-btn class="ms-auto" text="ok" @click="dialog = false" />
        </template>
      </v-card>
    </v-dialog>
  </section>

  <section class="ma-5">
    <v-dialog transition="dialog-top-transition" width="auto">
      <template #activator="{ props }">
        <v-btn v-bind="props" color="primary" text="transition from bottom" />
      </template>
      <template #default="{ isActive }">
        <v-card>
          <v-toolbar title="Opening from the Bottom" />
          <v-card-text class="text-h2 pa-12">Card Text</v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text="close" color="secondary" @click="isActive.value = false" />
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </section>

  <v-container>
    <v-row>
      <v-col cols="6">
        <v-dialog max-width="340">
          <template #activator="{ props }">
            <v-btn v-bind="props" width="204" text="slot activator" color="primary" />
          </template>
          <template #default="{ isActive }">
            <v-card text="Card Text" title="Slot Activator" color="grey-darken-2">
              <template #actions>
                <v-btn
                  class="ml-auto"
                  text="close"
                  color="secondary"
                  @click="isActive.value = false"
                />
              </template>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>
