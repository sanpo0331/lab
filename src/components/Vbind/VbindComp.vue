<script setup>
// propsの属性名は、キャメルケース
// テンプレート内では、ケバブケース
defineProps({
  propsMessage: {
    type: String,
    default: 'no message'
  }
})
</script>

<template>
  <div class="ml-5">
    <h4>VbindComp</h4>
    <p>message:{{ propsMessage }}</p>
  </div>
</template>
