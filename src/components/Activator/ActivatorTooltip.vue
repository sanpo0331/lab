<template>
  <h3>Tooltips</h3>
  <v-tooltip text="Tooltip">
    <template #activator="{ props }">
      <v-btn v-bind="props">Tooltip</v-btn>
    </template>
  </v-tooltip>
</template>
