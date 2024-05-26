<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const dprops = defineProps({
  title: {
    type: String,
    default: 'no title'
  },
  icon: {
    type: String,
    default: 'fa-regular fa-comment-dots'
  },
  dynamicParams: {
    type: String,
    default: ''
  },
  href: {
    type: String,
    default: 'satistics'
  }
})

function onClick(href) {
  router.push({ name: href, query: { plan: dprops.dynamicParams } })
}
</script>

<template>
  <v-hover v-if="dprops.dynamicParams">
    <template #default="{ isHovering, props }">
      <v-card
        v-bind="props"
        height="200"
        :elevation="isHovering ? 0 : 6"
        rounded="lg"
        link
        @click="onClick(href)"
      >
        <v-row class="justify-center">
          <v-col cols="3" class="mt-5 text-center">
            <v-icon :icon="icon" color="primary" size="48" />
          </v-col>
        </v-row>
        <v-card-item>
          <p class="text-center mt-5">{{ title }}</p>
          <p class="text-center mt-5">
            <v-avatar :color="isHovering ? 'primary-lighten-1' : 'grey-lighten-4'" size="24">
              <v-icon icon="fa-solid fa-angle-right" size="x-small" />
            </v-avatar>
          </p>
        </v-card-item>
      </v-card>
    </template>
  </v-hover>
  <v-hover v-else>
    <template #default="{ isHovering, props }">
      <v-card
        v-bind="props"
        height="200"
        :elevation="isHovering ? 0 : 6"
        rounded="lg"
        link
        @click="onClick(href)"
      >
        <v-row class="justify-center">
          <v-col cols="3" class="mt-5 text-center">
            <v-icon :icon="icon" color="primary" size="48" />
          </v-col>
        </v-row>
        <v-card-item>
          <p class="text-center mt-5">{{ title }}</p>
          <p class="text-center mt-5">
            <v-avatar :color="isHovering ? 'primary-lighten-1' : 'grey-lighten-4'" size="24">
              <v-icon icon="fa-solid fa-angle-right" size="x-small" />
            </v-avatar>
          </p>
        </v-card-item>
      </v-card>
    </template>
  </v-hover>
</template>
