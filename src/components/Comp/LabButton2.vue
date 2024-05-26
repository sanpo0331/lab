<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const value = ref(0)
const toggle = ref(null)
const snackbar = ref(false)

function onClick() {
  snackbar.value = false
}

function routing(page) {
  router.push({ name: page })
}
</script>

<template>
  <v-app>
    <v-app-bar title="Button2" color="grey-lighten-2">
      <v-spacer />
      <v-btn icon="fa-solid fa-flask" @click="routing('Home')" />
    </v-app-bar>

    <v-main>
      <section class="ma-5">
        <v-btn color="primary">action</v-btn>
      </section>
      <section class="ma-5">
        <v-banner lines="one" color="primary" bg-color="grey-lighten-4">
          <template #text> Banner with one line of text. </template>
          <template #actions>
            <v-btn>action</v-btn>
            <v-btn>action</v-btn>
          </template>
        </v-banner>
      </section>
      <section class="ma-5">
        <v-layout class="overflow-visible" style="height: 56px">
          <v-bottom-navigation v-model="value" color="primary" active>
            <v-btn>home</v-btn>
            <v-btn>Recents</v-btn>
          </v-bottom-navigation>
        </v-layout>
      </section>
      <section class="mb-5">
        <div class="d-flex align-center flex-column">
          <v-btn-toggle v-model="toggle" variant="outlined" color="primary" density="default">
            <v-btn icon="mdi mdi-format-align-left"></v-btn>
            <v-btn icon="mdi mdi-format-align-center"></v-btn>
            <v-btn icon="mdi mdi-format-align-right"></v-btn>
            <v-btn icon="mdi mdi-format-align-justify"></v-btn>
          </v-btn-toggle>
        </div>
      </section>
      <section>
        <v-card
          class="mx-auto"
          max-width="500"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
          title="Card Title"
          color="grey-lighten-4"
        >
          <v-card-actions>
            <v-btn color="primary">button</v-btn>
            <v-btn color="error">button</v-btn>
          </v-card-actions>
        </v-card>
      </section>
      <section>
        <v-sheet class="position-relative" min-height="100">
          <div class="position-absolute d-flex align-center justify-center w-100 h-100">
            <v-btn size="x-large" @click="snackbar = !snackbar">Toggle Snackbar</v-btn>
          </div>
          <v-snackbar v-model="snackbar" location="center" timeout="4000">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum id nihil magni
            temporibus voluptatibus ullam atque deleniti vitae. Atque doloremque omnis id? Quae ex
            repudiandae natus nemo est neque praesentium?
            <template #actions>
              <v-btn @click="onClick">button</v-btn>
            </template>
          </v-snackbar>
        </v-sheet>
      </section>
      <section>
        <v-toolbar title="Toolbar">
          <v-toolbar-items>
            <v-btn>dashboard</v-btn>
            <v-btn>resources</v-btn>
          </v-toolbar-items>
          <v-divider class="mx-2" vertical></v-divider>
          <v-btn icon="mdi mdi-dots-vertical"></v-btn>
        </v-toolbar>
      </section>
    </v-main>
  </v-app>
</template>
