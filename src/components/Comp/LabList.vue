<script setup>
import { ref } from 'vue'

// const items = ref([
//   { title: 'Item #1', value: 1 },
//   { title: 'Item #2', value: 2 },
//   { title: 'Item #3', value: 3 }
// ])

// const items2 = ref([
//   { name: 'Item #1', id: 1 },
//   { name: 'Item #2', id: 2 },
//   { name: 'Item #3', id: 3 }
// ])

// const items3 = ref([
//   { type: 'subheader', title: 'Group #1' },
//   { title: 'Item #1', value: 1 },
//   { title: 'Item #2', value: 2 },
//   { title: 'Item #3', value: 3 },
//   { type: 'divider' },
//   { type: 'subheader', title: 'Group #2' },
//   { title: 'Item #4', value: 4 },
//   { title: 'Item #5', value: 5 },
//   { title: 'Item #6', value: 6 }
// ])

// const items4 = ref([
//   { title: 'Item #1', value: 1, props: { prependIcon: 'mdi mdi-home' } },
//   { title: 'Item #2', value: 2, props: { appendIcon: 'mdi mdi-close' } },
//   { title: 'Item #3', value: 3, props: { color: 'primary' } }
// ])
// const items5 = [
//   { text: 'Real-Time', icon: 'mdi mdi-clock' },
//   { text: 'Audience', icon: 'mdi mdi-account' },
//   { text: 'Conversions', icon: 'mdi mdi-flag' }
// ]
// const items6 = [
//   { text: 'My Files', icon: 'mdi mdi-folder' },
//   { text: 'Shared with me', icon: 'mdi mdi-account-multiple' },
//   { text: 'Starred', icon: 'mdi mdi-star' },
//   { text: 'Recent', icon: 'mdi mdi-history' },
//   { text: 'Offline', icon: 'mdi mdi-check-circle' },
//   { text: 'Uploads', icon: 'mdi mdi-upload' },
//   { text: 'Backups', icon: 'mdi mdi-cloud-upload' }
// ]
// const open = ref(['Users'])
// const admins = ref([
//   ['Management', 'mdi mdi-account-multiple-outline'],
//   ['Settings', 'mdi mdi-cog-outline']
// ])
// const cruds = ref([
//   ['Create', 'mdi mdi-plus-outline'],
//   ['Read', 'mdi mdi-file-outline'],
//   ['Update', 'mdi mdi-update'],
//   ['Delete', 'mdi mdi-delete']
// ])
const files = ref([
  {
    color: 'blue',
    icon: 'mdi mdi-clipboard-text',
    subtitle:
      '2行のサブタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルＥＮＤ',
    title: 'Vacation itinerary'
  },
  {
    color: 'amber',
    icon: 'mdi mdi-gesture-tap-button',
    subtitle:
      '2行以上のサブタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルＥＮＤ',

    title: 'Kitchen remodel'
  }
])
const folders = ref([
  { subtitle: 'Jan 9, 2014', title: 'Photos' },
  { subtitle: 'Jan 17, 2014', title: 'Recipes' },
  { subtitle: 'Jan 28, 2014', title: 'Work' }
])
</script>

<template>
  <!-- <section class="ma-5">
    <v-list lines="one">
      <v-list-item
        v-for="n in 3"
        :key="n"
        :title="'Item ' + n"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
      />
    </v-list>
  </section>

  <section class="ma-5">
    <v-card max-width="300" color="grey-lighten-4">
      <v-list :items="items" />
    </v-card>
  </section>

  <section class="ma-5">
    <v-card max-width="300">
      <v-list :items="items2" item-title="name" item-value="id" />
    </v-card>
  </section>

  <section class="ma-5">
    <v-card max-width="300">
      <v-list :items="items3" />
    </v-card>
  </section>

  <section class="ma-5">
    <v-card max-width="300">
      <v-list :items="items4" />
    </v-card>
  </section> -->

  <!-- <section class="ma-5">
    <v-card max-width="300">
      <v-list density="compact">
        <v-list-subheader>List Subheader</v-list-subheader>
        <v-list-item v-for="item in items5" :key="item.text" :value="item" color="primary">
          <template #prepend>
            <v-icon :icon="item.icon" />
          </template>
          <v-list-item-title v-text="item.text" />
        </v-list-item>
      </v-list>
    </v-card>
  </section> -->

  <!-- <section class="ma-5">
    <v-card width="256">
      <v-layout>
        <v-navigation-drawer absolute permanent>
          <v-list>
            <v-list-item
              prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
              subtitle="john@google.com"
              title="List Item Title"
            >
              <template #append>
                <v-btn icon="mdi mdi-menu-down" size="small" />
              </template>
            </v-list-item>
          </v-list>
          <v-divider />
          <v-list :lines="false" density="compact" nav>
            <v-list-item v-for="item in items6" :key="item" :value="item" color="primary">
              <template #prepend>
                <v-icon :icon="item.icon" />
              </template>
              <v-list-item-text v-text="item.text" />
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 354px" />
      </v-layout>
    </v-card>
  </section> -->

  <!-- <section class="ma-5">
    <v-card width="310">
      <v-list v-model:opened="open">
        <v-list-item prepend-icon="mdi mdi-home" title="Home" />
        <v-list-group value="Users">
          <template #activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi mdi-account-circle" title="Users" />
          </template>
          <v-list-group value="Admin">
            <template #activator="{ props }">
              <v-list-item v-bind="props" title="Admin" />
            </template>
            <v-list-item
              v-for="([title, icon], i) in admins"
              :key="i"
              :prepend-icon="icon"
              :title="title"
              :value="title"
            />
          </v-list-group>
          <v-list-group value="Actions">
            <template #activator="{ props }">
              <v-list-item v-bind="props" title="Actions" />
            </template>
            <v-list-item
              v-for="([title, icon], i) in cruds"
              :key="i"
              :prepend-icon="icon"
              :title="title"
              :value="title"
            />
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-card>
  </section> -->

  <section class="ma-5">
    <v-card max-width="600">
      <v-toolbar color="secondary">
        <v-btn icon="mdi mdi-menu" />
        <v-toolbar-title>Toolbar Title</v-toolbar-title>
        <v-spacer />
        <v-btn icon="mdi mdi-magnify" />
        <v-btn icon="mdi mdi-view-module" />
      </v-toolbar>
      <v-list lines="two">
        <v-list-subheader inset>List Subheader1</v-list-subheader>
        <v-list-item
          v-for="item in folders"
          :key="item.title"
          :title="item.title"
          :subtitle="item.subtitle"
        >
          <template #prepend>
            <v-avatar color="grey-lighten-1">
              <v-icon color="white">mdi mdi-folder</v-icon>
            </v-avatar>
          </template>
          <template #append>
            <v-btn color="grey-lighten-1" icon="mdi mdi-information" />
          </template>
        </v-list-item>
        <v-divider inset />
        <v-list-subheader inset>List Subheader2</v-list-subheader>
        <v-list-item
          v-for="item in files"
          :key="item.title"
          :title="item.title"
          :subtitle="item.subtitle"
        >
          <template #prepend>
            <v-avatar :color="item.color">
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-avatar>
          </template>
          <template #append>
            <v-btn color="grey-lighten-1" icon="mdi mdi-information" />
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </section>
</template>
