<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(false)

function load() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

function routing(page) {
  router.push({ name: page })
}
</script>

<template>
  <v-app>
    <v-app-bar title="Button" color="grey-lighten-2">
      <v-spacer />
      <v-btn icon="fa-solid fa-flask" @click="routing('Home')" />
    </v-app-bar>

    <v-main>
      <div class="pa-5">
        <v-btn class="ma-3" color="primary">default</v-btn>
        <v-btn class="ma-3" color="primary" variant="outlined">outlined</v-btn>
        <v-btn class="ma-3" color="primary" variant="tonal">tonal</v-btn>
        <v-btn class="ma-3" color="primary" variant="text">text</v-btn>
        <v-btn class="ma-3" color="primary" variant="plain">plain</v-btn>
      </div>
      <section>
        <p>Density</p>
        <v-btn class="ma-3" color="primary" density="compact">compact</v-btn>
        <v-btn class="ma-3" color="primary" density="comfortable">comfortable</v-btn>
        <v-btn class="ma-3" color="primary" density="default">default</v-btn>
      </section>
      <section>
        <p>Size</p>
        <v-btn class="ma-3" color="primary" size="x-small">x-small</v-btn>
        <v-btn class="ma-3" color="primary" size="small">small</v-btn>
        <v-btn class="ma-3" color="primary">設定なし</v-btn>
        <v-btn class="ma-3" color="primary" size="large">large</v-btn>
        <v-btn class="ma-3" color="primary" size="x-large">x-large</v-btn>
      </section>
      <section>
        <p>Rounded</p>
        <v-btn class="ma-3" color="primary" rounded="0">rounded(0)</v-btn>
        <v-btn class="ma-3" color="primary" rounded="xs">rounded(xs)</v-btn>
        <v-btn class="ma-3" color="primary" rounded="sm">rounded(sm)</v-btn>
        <v-btn class="ma-3" color="primary">設定なし</v-btn>
        <v-btn class="ma-3" color="primary" rounded="lg">rounded(lg)</v-btn>
        <v-btn class="ma-3" color="primary" rounded="xl">rounded(xl)</v-btn>
      </section>
      <section style="margin-bottom: 60px">
        <p>Elevation</p>
        <v-btn class="ma-3" color="primary">button</v-btn>
        <v-btn class="ma-3" color="primary" elevation="4">elevation(4)</v-btn>
        <v-btn class="ma-3" color="primary" elevation="8">elevation(8)</v-btn>
        <v-btn class="ma-3" color="primary" elevation="12">elevation(12)</v-btn>
        <v-btn class="ma-3" color="primary" elevation="16">elevation(16)</v-btn>
        <v-btn class="ma-3" color="primary" elevation="20">elevation(20)</v-btn>
        <v-btn class="ma-3" color="primary" elevation="24">elevation(24)</v-btn>
      </section>
      <section>
        <p>Ripple</p>
        <v-btn class="ma-3" color="secondary">button</v-btn>
        <v-btn class="ma-3" color="secondary" :ripple="false">button</v-btn>
      </section>
      <section>
        <p>Icon(v-tool-bar,v-app-barでよく使用される)</p>
        <v-btn class="ma-3" color="secondary" density="compact" icon="fa-solid fa-plus" />
        <v-btn class="ma-3" color="secondary" density="comfortable" icon="$vuetify" />
        <v-btn
          class="ma-3"
          color="secondary"
          density="default"
          icon="fa-solid fa-arrow-up-right-from-square"
        />
        <v-btn class="ma-3" color="secondary" size="x-small" icon="fa-solid fa-user" />
        <v-btn class="ma-3" color="secondary" size="small" icon="fa-solid fa-plus" />
        <v-btn class="ma-3" color="secondary" icon="$vuetify" />
        <v-btn
          class="ma-3"
          color="secondary"
          size="large"
          icon="fa-solid fa-arrow-up-right-from-square"
        />
        <v-btn class="ma-3" color="secondary" size="x-large" icon="fa-solid fa-calendar" />
      </section>
      <section>
        <p>Loading(loaderスロットを使用)</p>
        <v-btn class="ma-3" color="secondary" :loading="loading" @click="load">button</v-btn>
      </section>
      <section>
        <p>Inside of bars(一般的には、v-toolbarやv-app-bar内のiconプロパティで使用する)</p>
        <v-toolbar color="primary">
          <template #prepend>
            <v-btn icon="mdi mdi-arrow-left" />
          </template>
          <v-btn icon="mdi mdi-archive-plus-outline" />
          <v-btn icon="mdi mdi-alert-circle-outline" />
          <v-btn icon="mdi mdi-delete-outline" />
        </v-toolbar>
      </section>
      <section>
        <p>Slots(Icon color)</p>
        <v-btn
          color="grey-lighten-3"
          append-icon="mdi mdi-account-circle"
          prepend-icon="mdi mdi-check-circle"
        >
          <template #prepend>
            <v-icon color="success"></v-icon>
          </template>
          button
          <template #append>
            <v-icon color="warning"></v-icon>
          </template>
        </v-btn>
      </section>
    </v-main>
  </v-app>
</template>

<style scoped>
section {
  margin: 10px;
}
</style>
