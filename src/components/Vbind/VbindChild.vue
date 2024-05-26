<template>
  <v-sheet>
    <h4>child</h4>
    <slot :foo="myFoo" />
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    myFoo: 'Hello'
  })
}
</script>

<style></style>
