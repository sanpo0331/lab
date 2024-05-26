<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '1'
  }
})
</script>

<template>
  <v-stepper :model-value="modelValue" flat>
    <v-stepper-header>
      <v-stepper-item value="1" title="ご注文"></v-stepper-item>
      <v-divider />
      <v-stepper-item value="2" title="ご注文内容の確認・確定"></v-stepper-item>
    </v-stepper-header>
  </v-stepper>
</template>
