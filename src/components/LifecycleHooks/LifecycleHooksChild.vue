<script setup>
import { ref, onBeforeMount, onBeforeUpdate, onMounted, onUpdated } from 'vue'
import { useLifecycleStore } from '@/stores/lifecycle'

const store = useLifecycleStore()
onBeforeMount(() => {
  store.events.push('child---onBeforeMount')
})
onMounted(() => {
  store.events.push('child---onMounted')
})
onBeforeUpdate(() => {
  store.events.push('child---onBeforeUpdate')
})
onUpdated(() => {
  store.events.push('child---onUpdated')
})
const count = ref(0)
const btnsw = ref(true)
const btnsw2 = ref(true)
const sample = ref('')

function switching() {
  btnsw.value = !btnsw.value
}

function switching2() {
  btnsw2.value = !btnsw2.value
}
</script>

<template>
  <v-card max-width="600px" variant="elevated" class="pa-2">
    <h3>子コンポーネント(LifecycleHooksChild)</h3>
    <p>count:{{ count }}</p>
    <v-btn color="secondary" class="mb-5" @click="count++">increment</v-btn>
    <hr />
    <section>
      <p>下のボタンで表示・非表示を切り替えます</p>
      <p v-show="btnsw">メッセージ(v-showの場合)</p>
      <p>
        <v-btn color="secondary" class="mb-5" @click="switching">{{
          btnsw ? '表示' : '非表示'
        }}</v-btn>
      </p>
      <p v-if="btnsw2">メッセージ(v-ifの場合)</p>
      <p>
        <v-btn color="secondary" class="mb-5" @click="switching2">{{
          btnsw2 ? '表示' : '非表示'
        }}</v-btn>
      </p>
      <v-text-field v-model="sample" label="sample" />
    </section>
  </v-card>
</template>
