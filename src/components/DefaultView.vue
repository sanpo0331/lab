<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useRouter } from 'vue-router'
import MainView from './MainView.vue'

const router = useRouter()
const { name } = useDisplay()

const selPattern = ref('ptn1')
const open = ref([])
const drawer = ref(true)
const items1 = [
  {
    title: 'Home',
    value: 'Home',
    props: {
      prependIcon: 'fa-solid fa-house',
      appendIcon: ''
    }
  },
  {
    title: 'LifecycleHooks',
    value: 'LifecycleHooks',
    props: {
      prependIcon: '',
      appendIcon: 'fa-solid fa-angle-right'
    }
  },
  {
    title: 'Slot',
    value: 'Slot',
    props: {
      prependIcon: '',
      appendIcon: 'fa-solid fa-angle-right'
    }
  },
  {
    title: 'v-bind',
    value: 'Vbind',
    props: {
      prependIcon: '',
      appendIcon: 'fa-solid fa-angle-right'
    }
  },
  {
    title: 'Plugin',
    value: 'Plugin',
    props: {
      prependIcon: '',
      appendIcon: 'fa-solid fa-angle-right'
    }
  },
  {
    title: 'Activator',
    value: 'Activator',
    props: {
      prependIcon: '',
      appendIcon: 'fa-solid fa-angle-right'
    }
  }
]
const items2 = [
  { text: 'Home', value: 'Home', prependIcon: 'fa-solid fa-house', appendIcon: '' },
  {
    text: 'LifecycleHooks',
    value: 'LifecycleHooks',
    prependIcon: '',
    appendIcon: 'fa-solid fa-angle-right'
  },
  {
    text: 'Slot',
    value: 'Slot',
    prependIcon: '',
    appendIcon: 'fa-solid fa-angle-right'
  },
  {
    text: 'v-bind',
    value: 'Vbind',
    prependIcon: '',
    appendIcon: 'fa-solid fa-angle-right'
  },
  {
    text: 'Plugin',
    value: 'Plugin',
    prependIcon: '',
    appendIcon: 'fa-solid fa-angle-right'
  },
  {
    text: 'Activator',
    value: 'Activator',
    prependIcon: '',
    appendIcon: 'fa-solid fa-angle-right'
  }
]
const layout = [
  { title: 'Layout1', route: 'layout1' },
  { title: 'Layout2', route: 'layout2' },
  { title: 'Layout3', route: 'layout3' },
  { title: 'Layout4', route: 'layout4' }
]

const button = [
  { title: 'Button1', route: 'button1' },
  { title: 'Button2', route: 'button2' }
]

const btn = computed(() => {
  console.log(name.value)
  switch (name.value) {
    case 'md':
    case 'sm':
    case 'xs':
      return true
    default:
      return false
  }
})

function routing(arg) {
  if (typeof arg.id === 'object') {
    router.push({ name: arg.id.value })
  } else {
    router.push({ name: arg.id })
  }
}
function routerPush(page) {
  router.push({ name: page })
}
</script>

<template>
  <v-layout>
    <v-app-bar>
      <v-app-bar-nav-icon v-if="btn" @click="drawer = !drawer" />
      <v-app-bar-title class="poppins-medium">Lab</v-app-bar-title>
      <v-btn icon="fa-solid fa-circle-h" @click="routerPush('Almeida')" />
      <v-btn icon="fa-solid fa-pizza-slice" @click="routerPush('PizzaYa')" />
      <v-btn icon="fa-solid fa-chart-simple" @click="routerPush('statistics')" />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" class="bg-primary">
      <v-radio-group v-model="selPattern">
        <template #label>
          <div>select pattern</div>
        </template>
        <v-radio label="pattern1" value="ptn1" />
        <v-radio label="pattern2" value="ptn2" />
        <v-radio label="pattern3" value="ptn3" />
      </v-radio-group>
      <v-divider />
      <!-- valueを指定することで、「v-list-item--link」が付加され、cursorが「pointer」となる -->
      <v-list
        v-if="selPattern == 'ptn1'"
        density="compact"
        :items="items1"
        @click:select="routing"
      ></v-list>
      <v-divider />
      <v-list
        v-if="selPattern == 'ptn2' || selPattern == 'ptn3'"
        :nav="selPattern == 'ptn2'"
        density="compact"
        @click:select="routing"
      >
        <v-list-item
          v-for="(item, ix) in items2"
          :key="ix"
          :value="item"
          :variant="selPattern == 'ptn2' ? 'text' : 'plain'"
        >
          <template v-if="item.prependIcon" #prepend>
            <v-icon :icon="item.prependIcon"></v-icon>
          </template>
          <template v-if="item.appendIcon" #append>
            <v-icon :icon="item.appendIcon"></v-icon>
          </template>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list v-model:opened="open">
        <v-list-group value="Layout">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Layout"></v-list-item>
          </template>
          <v-list-item v-for="(item, ix) in layout" :key="item.title" :value="ix">
            <v-list-item-title @click="routerPush(item.route)">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-group value="Button">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Button"></v-list-item>
          </template>
          <v-list-item v-for="(item, ix) in button" :key="item.title" :value="ix">
            <v-list-item-title @click="routerPush(item.route)">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-item
          title="Card"
          append-icon="fa-solid fa-angle-right"
          @click="routerPush('card')"
        />
      </v-list>
    </v-navigation-drawer>
    <main-view />
  </v-layout>
</template>

<style scoped>
.poppins-medium {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 2rem;
}
</style>
