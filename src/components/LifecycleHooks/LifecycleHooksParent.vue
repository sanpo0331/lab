<script setup>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated } from 'vue'
import { useLifecycleStore } from '@/stores/lifecycle'
import LifecycleHooksChild from './LifecycleHooksChild.vue'

const store = useLifecycleStore()
onBeforeMount(() => {
  store.events.push('parent---onBeforeMount')
})
onMounted(() => {
  store.events.push('parent---onMounted')
})
onBeforeUpdate(() => {
  store.events.push('parent---onBeforeUpdate')
})
onUpdated(() => {
  store.events.push('parent---onUpdated')
})
</script>

<template>
  <v-row>
    <v-col cols="11">
      <h3>親コンポーネント(LifecycleHooksParent)</h3>
      <v-card variant="elevated" max-width="600px" rounded="lg" class="bg-amber pa-3">
        <lifecycle-hooks-child />
      </v-card>
    </v-col>
  </v-row>
</template>
