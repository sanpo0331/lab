<script setup>
import { ref } from 'vue'

const variants = ref(['elevated', 'flat', 'tonal', 'outlined'])
const color = ref('indigo')
const messages = ref([
  {
    from: 'You',
    message: `Sure, I'll see you later.`,
    time: '10:42am',
    color: 'deep-purple-lighten-1'
  },
  {
    from: 'John Doe',
    message: 'Yeah, sure. Does 1:00pm work?',
    time: '10:37am',
    color: 'green'
  },
  {
    from: 'You',
    message: 'Did you still want to grab lunch today?',
    time: '9:47am',
    color: 'deep-purple-lighten-1'
  }
])
const cards = ref([
  { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
  { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
  { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 }
])
const labels = ref({ 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' })
const expand = ref(false)
const time = ref(0)
const forecast = ref([
  { day: 'Tuesday', icon: 'mdi mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
  { day: 'Wednesday', icon: 'mdi mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
  { day: 'Thursday', icon: 'mdi mdi-cloud', temp: '25\xB0/15\xB0' }
])
</script>
<template>
  <section>
    <v-card
      title="Card Title"
      subtitle="subtitle(with props)"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat accusamus sunt animi libero culpa magni mollitia inventore officiis voluptatem soluta, dicta harum sint nulla laboriosam totam facilis? Id, magni minima!"
      width="400"
      color="grey-lighten-4"
      class="ma-5"
    />
    <v-card width="400" color="grey-lighten-4" class="ma-5">
      <template #title>Card Title</template>
      <template #subtitle>subtitle(with slots)</template>
      <template #text
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat accusamus sunt animi
        libero culpa magni mollitia inventore officiis voluptatem soluta, dicta harum sint nulla
        laboriosam totam facilis? Id, magni minima!</template
      >
    </v-card>
    <v-card width="400" color="grey-lighten-4" class="ma-5">
      <v-card-item>
        <v-card-title>Card Title</v-card-title>
        <v-card-subtitle>subtitle(with markup)</v-card-subtitle>
      </v-card-item>
      <v-card-text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat accusamus sunt animi
        libero culpa magni mollitia inventore officiis voluptatem soluta, dicta harum sint nulla
        laboriosam totam facilis? Id, magni minima!
      </v-card-text>
    </v-card>
  </section>

  <section>
    <v-container>
      <v-row align="center" justify="center">
        <v-col v-for="item in variants" :key="item" cols="auto">
          <v-card
            :variant="item"
            title="Variant & Color test"
            :subtitle="item"
            :color="color"
            text="variant propを使用すると、いくつかの異なるカード スタイルに簡単にアクセスできます。"
            class="mx-auto"
            max-width="350"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>

  <section>
    <v-card class="mx-auto ma-10" elevation="16" max-width="300" hover>
      <v-card-item>
        <v-card-title>Card Title</v-card-title>
        <v-card-subtitle>subtitle(elevation)</v-card-subtitle>
      </v-card-item>
      <v-card-text>elevationプロパティは、影の深さ0～24で指定します。</v-card-text>
    </v-card>
  </section>

  <section>
    <v-card class="mx-auto ma-10" max-width="300" hover>
      <v-card-item>
        <v-card-title>Card Title</v-card-title>
        <v-card-subtitle>subtitle(hover)</v-card-subtitle>
      </v-card-item>
      <v-card-text
        >hover propを使用すると、カードの上にマウスを置くと、カードの高度が増加します。</v-card-text
      >
    </v-card>
  </section>

  <section>
    <v-card
      append-icon="mdi mdi-open-in-new"
      class="mx-auto"
      color="primary"
      href="https://github.com/vuetifyjs/vuetify/"
      max-width="300"
      prepend-icon="mdi mdi-github"
      target="_blank"
      title="Vuetify on GitHub"
    />
  </section>

  <section>
    <v-card
      class="mx-auto my-5"
      height="200"
      image="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      max-width="200"
      title="Card Title"
    />
  </section>

  <section>
    <v-card
      prepend-icon="mdi mdi-account"
      append-icon="mdi mdi-check"
      title="Card Title"
      subtitle="prepend-icon and append-icon"
      max-width="350"
      class="ma-5"
    >
      <v-card-text
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text
      >
    </v-card>
    <v-card
      title="Card Title"
      subtitle="prepend-icon and append-icon"
      max-width="350"
      class="ma-5"
      color="grey-lighten-2"
    >
      <template #prepend>
        <v-icon icon="mdi mdi-account" color="primary"></v-icon>
      </template>
      <template #append>
        <v-icon icon="mdi mdi-check" color="success"></v-icon>
      </template>
      <v-card-text
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text
      >
    </v-card>
    <v-card
      prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
      append-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
      title="Card Title"
      subtitle="prepend-avatar and append-avatar"
      max-width="350"
      class="ma-5"
    >
      <v-card-text
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text
      >
    </v-card>
    <v-card
      title="Card Title"
      subtitle="prepend-icon and append-icon"
      max-width="350"
      class="ma-5"
      color="grey-lighten-2"
    >
      <template #prepend>
        <v-avatar color="blue-darken-2">
          <v-icon icon="mdi mdi-alarm" />
        </v-avatar>
      </template>
      <template #append>
        <v-avatar size="24">
          <v-img alt="john" src="https://cdn.vuetifyjs.com/images/john.png" />
        </v-avatar>
      </template>
      <v-card-text
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text
      >
    </v-card>
  </section>
  <section>
    <v-card width="400" class="ma-4" color="grey-darken-2">
      <v-toolbar theme="dark">
        <template #prepend>
          <v-btn icon="$menu" />
        </template>
        <template #append>
          <v-btn icon="mdi mdi-dots-vertical" />
        </template>
        <v-toolbar-title class="text-h6">Messages</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <p class="font-weight-bold ms-1 mb-2">Today</p>
        <v-timeline align="start" density="compact">
          <v-timeline-item
            v-for="message in messages"
            :key="message.time"
            :dot-color="message.color"
            size="x-small"
          >
            <div class="mb-4">
              <p class="font-weight-normal">
                <strong>{{ message.from }}</strong> @{{ message.time }}
              </p>
              <p>{{ message.message }}</p>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </section>

  <section class="ma-5">
    <v-card max-width="500">
      <v-container fluid>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <v-card>
              <v-img :src="card.src" class="align-end" height="200" cover>
                <v-card-title class="text-white" v-text="card.title" />
              </v-img>
              <v-card-actions>
                <v-spacer />
                <v-btn color="surface-variant" icon="mdi mdi-heart" size="small" />
                <v-btn color="surface-variant" icon="mdi mdi-bookmark" size="small" />
                <v-btn color="surface-variant" icon="mdi mdi-share-variant" size="small" />
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </section>

  <section class="ma-5">
    <v-card max-width="400">
      <v-img
        class="align-end text-white"
        height="200"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      >
        <v-card-title>Card Title</v-card-title>
      </v-img>
      <v-card-subtitle class="pt-4">subtitle</v-card-subtitle>
      <v-card-text>
        <p>Whitehaven Beach</p>
        <p>Whitsunday Island, Whitsunday Islands</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="orange">button1</v-btn>
        <v-btn color="orange">button2</v-btn>
      </v-card-actions>
    </v-card>
  </section>

  <section class="ma-5">
    <v-card max-width="368">
      <v-card-item title="Card Item Title">
        <template #subtitle>
          <v-icon class="me-1 pb-1" color="error" icon="mdi mdi-alert" size="18" />
          Sub-title
        </template>
      </v-card-item>

      <v-card-text class="py-0">
        <v-row align="center" no-gutters>
          <v-col class="text-h2" col="6"> 64&deg;F </v-col>
          <v-col class="text-right" cols="6">
            <v-icon color="error" icon="mdi mdi-weather-hurricane" size="68" />
          </v-col>
        </v-row>
      </v-card-text>

      <div class="d-flex py-3 justify-space-between">
        <v-list-item density="compact" prepend-icon="mdi mdi-weather-windy">
          <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
        </v-list-item>
        <v-list-item density="compact" prepend-icon="mdi mdi-weather-pouring">
          <v-list-item-subtitle>48%</v-list-item-subtitle>
        </v-list-item>
      </div>

      <v-expand-transition>
        <div v-if="expand">
          <div class="py-2">
            <v-slider
              v-model="time"
              :max="6"
              :step="1"
              :ticks="labels"
              class="mx-4"
              color="primary"
              density="compact"
              show-ticks="always"
              thumb-size="10"
              hide-details
            />
          </div>
          <v-list class="bg-transparent">
            <v-list-item
              v-for="item in forecast"
              :key="item.day"
              :append-icon="item.icon"
              :title="item.day"
              :subtitle="item.temp"
            />
          </v-list>
        </div>
      </v-expand-transition>

      <v-divider />

      <v-card-actions>
        <v-btn @click="expand = !expand">{{ !expand ? 'Full Report' : 'Hide Report' }}</v-btn>
      </v-card-actions>
    </v-card>
  </section>
</template>
