<script setup>
import { ref, computed, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/user'

import AppBar from './AppBar.vue'
import CustomButton from './CustomButton.vue'
import FooterView from './FooterView.vue'
import carousel01 from '../../assets/pizza-ya-image/carousel-01.jpg'
import carousel02 from '../../assets/pizza-ya-image/carousel-02.jpg'
import carousel03 from '../../assets/pizza-ya-image/carousel-03.jpg'
import img01 from '../../assets/pizza-ya-image/menu-pizza-02.jpg'
import img02 from '../../assets/pizza-ya-image/curt.jpg'
import img03 from '../../assets/pizza-ya-image/sign.jpg'

const selMenu = ref([])
const { name } = useDisplay()
const router = useRouter()
const store = useUserStore()
const carouselItems = ref([{ src: carousel01 }, { src: carousel02 }, { src: carousel03 }])
const lists = ref([
  '4/2 メールが届かない事象について',
  '3/25 値段の改定について',
  '3/13 新しいメニューが追加されました！ '
])

const height = computed(() => {
  switch (name.value) {
    case 'xs':
    case 'sm':
      return 300
    default:
      return 500
  }
})

const btnWidth = computed(() => {
  switch (name.value) {
    case 'xs':
      return 300
    default:
      return 400
  }
})
const appMenu = ref([
  {
    title: 'Lab',
    icon: 'fa-solid fa-flask',
    route: 'Home',
    subject: true
  },
  {
    title: 'メニュー',
    icon: 'fa-solid fa-pizza-slice',
    route: 'PizzaYaOrder',
    subject: true
  },
  {
    title: 'ログイン',
    icon: 'fa-solid fa-right-to-bracket',
    route: 'PizzaYaLogin',
    subject: true
  },
  {
    title: '会員登録',
    icon: 'fa-solid fa-user-plus',
    route: 'RegisterUser',
    subject: true
  },
  {
    title: '会員情報更新',
    icon: 'fa-solid fa-user-plus',
    route: 'RegisterUser',
    subject: false
  }
])

onMounted(() => {
  if (store.userName) {
    appMenu.value[1].subject = false
    appMenu.value[2].subject = false
    appMenu.value[3].subject = true
  }
  selMenu.value = appMenu.value.filter((obj) => obj.subject)
})

function routing(page) {
  router.push({ name: page })
}
</script>

<template>
  <v-app theme="pizzayaTheme">
    <app-bar :app-menu="selMenu" />
    <v-main>
      <v-row>
        <v-col cols="12">
          <v-carousel :height="height" width="100%" :show-arrows="false" hide-delimiters cycle>
            <v-carousel-item
              v-for="item in carouselItems"
              :key="item.src"
              :src="item.src"
              cover
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-sheet style="margin: 40px auto">
        <v-row justify="center" class="my-10">
          <v-col cols="12" lg="4" md="5" sm="6" xs="10" class="text-center">
            <custom-button
              btn-text="メニューを探す"
              color="secondary"
              icon="fa-solid fa-pizza-slice"
              :min-width="btnWidth"
              @click="routing('PizzaYaOrder')"
            />
          </v-col>
          <v-col cols="12" lg="3" md="4" sm="4" xs="10">
            <v-layout>
              <v-img :src="img01" width="300" />
            </v-layout>
          </v-col>
        </v-row>
        <v-row justify="center" class="my-10">
          <v-col cols="12" lg="4" md="5" sm="6" xs="10" class="text-center">
            <custom-button
              btn-text="かごの中を見る"
              color="primary-darken-1"
              icon="fa-solid fa-basket-shopping"
              :min-width="btnWidth"
              @click="routing('PizzaYaBasket')"
            />
          </v-col>
          <v-col cols="12" lg="3" md="4" sm="4" xs="10">
            <v-layout>
              <v-img :src="img02" width="300" />
            </v-layout>
          </v-col>
        </v-row>
        <v-row v-if="store.userName" justify="center" class="my-10">
          <v-col cols="12" lg="4" md="5" sm="6" xs="10" class="text-center">
            <custom-button
              btn-text="会員情報更新"
              color="primary-darken-1"
              icon="fa-solid fa-user-pen"
              :min-width="btnWidth"
              @click="routing('RegisterUser')"
            />
          </v-col>
          <v-col cols="12" lg="3" md="4" sm="4" xs="10">
            <v-layout>
              <v-img :src="img03" width="300" />
            </v-layout>
          </v-col>
        </v-row>
        <v-divider />
        <v-row justify="center">
          <v-col cols="12" lg="7" md="9" sm="10" xs="10">
            <v-list>
              <v-list-subheader>Information</v-list-subheader>
              <v-list-item v-for="item in lists" :key="item">
                <v-list-item-title class="ml-3">{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-sheet>
    </v-main>
    <footer-view />
  </v-app>
</template>
