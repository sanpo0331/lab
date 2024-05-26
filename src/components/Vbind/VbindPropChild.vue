<script setup>
const greet = '子コンポーネントからHello'
</script>

<template>
  <div>
    <slot :foo="greet"></slot>
  </div>
</template>
