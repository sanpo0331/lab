<template>
  <h3>Dialog</h3>
  <v-dialog max-width="500">
    <template #activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" text="Open Dialog" variant="flat" />
    </template>
    <template #default="{ isActive }">
      <v-card title="Dialog">
        <v-card-text
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus inventore
          quibusdam tempore architecto fugiat cum, magni soluta reprehenderit. Culpa repellat
          repellendus suscipit, voluptatibus ut veniam voluptas quod debitis alias
          delectus.</v-card-text
        >
        <v-card-action>
          <v-spacer />
          <v-btn text="Close Dialog" @click="isActive.value = false" />
        </v-card-action>
      </v-card>
    </template>
  </v-dialog>
</template>
