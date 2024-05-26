<template>
  <p style="font-size: 1.5rem; color: yellow; background-color: black; padding: 10px">
    <slot name="title"></slot>
  </p>
  <div>
    <slot name="dropdown"></slot>
  </div>
  <v-btn density="compact" color="primary">
    <slot name="btnTitle"></slot>
  </v-btn>
</template>

<script>
export default {}
</script>

<style></style>
