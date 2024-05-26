<script setup>
import { ref } from 'vue'

defineProps({
  btnText: {
    type: String,
    default: 'no text'
  },
  color: {
    type: String,
    default: 'primary'
  },
  icon: {
    type: String,
    default: 'fa-solid fa-exclamation'
  }
})
const elevation = ref('10')
function hoverFnc(v) {
  elevation.value = v
}
</script>

<template>
  <v-btn
    :prepend-icon="icon"
    :color="color"
    :elevation="elevation"
    rounded="pill"
    height="70"
    @mouseover="hoverFnc('0')"
    @mouseleave="hoverFnc('10')"
    >{{ btnText }}</v-btn
  >
</template>
