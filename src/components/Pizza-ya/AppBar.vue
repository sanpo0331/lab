<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'

const drawer = ref(false)
const router = useRouter()
const { name } = useDisplay()

defineProps({
  appMenu: {
    type: Array,
    default: () => {}
  }
})

const navIcon = computed(() => {
  switch (name.value) {
    case 'xs':
      return true
    default:
      return false
  }
})

const btn = computed(() => {
  switch (name.value) {
    case 'xs':
      return false
    default:
      return true
  }
})

function routing(page) {
  router.push({ name: page })
}
</script>

<template>
  <v-app-bar color="primary" theme="pizzayaTheme">
    <v-app-bar-nav-icon v-if="navIcon" @click="drawer = !drawer" />
    <v-app-bar-title>
      <span class="logo mr-3">P</span>
      <span class="shop-name">Pizza-ya</span>
    </v-app-bar-title>
    <v-spacer v-if="btn" />
    <template v-if="btn">
      <v-btn
        v-for="item in appMenu"
        :key="item.title"
        :prepend-icon="item.icon"
        :text="item.title"
        @click="routing(item.route)"
      />
    </template>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" color="primary" disable-resize-watcher>
    <v-list nav>
      <v-list-item
        v-for="(item, ix) in appMenu"
        :key="item.title"
        :value="ix"
        @click="routing(item.route)"
      >
        <template #prepend>
          <v-icon :icon="item.icon" />
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.logo {
  font-family: 'Bungee Shade', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3.3rem;
  line-height: 3.5rem;
  color: white;
}
.shop-name {
  font-family: 'Alfa Slab One', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.5rem;
  color: white;
}
</style>
