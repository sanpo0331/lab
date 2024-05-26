<script setup>
import LifecycleHooksParent from '../LifecycleHooks/LifecycleHooksParent.vue'
import { useLifecycleStore } from '@/stores/lifecycle'

const store = useLifecycleStore()
function reset() {
  store.$reset()
}
// function updated() {
//   console.log('LifecycleHooks updated')
// }
</script>

<template>
  <h2>ライフサイクルフック</h2>
  <lifecycle-hooks-parent />
  <v-row>
    <v-col md="8" cols="11">
      <v-list density="compact">
        <v-list-item v-for="(item, ix) in store.events" :key="ix" :title="item"></v-list-item>
      </v-list>
      <v-btn color="secondary" @click="reset">メッセージクリア</v-btn>
    </v-col>
  </v-row>
</template>

<style></style>
