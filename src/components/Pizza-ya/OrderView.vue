<script setup>
import { ref, onMounted, computed } from 'vue'
import { useDisplay } from 'vuetify'

import { useRouter } from 'vue-router'
import { useOrderStore } from '../../stores/Order'
import { useUserStore } from '../../stores/user'
import menu from '../../assets/pizza-ya-menu.json'
import StepperView from './StepperView.vue'
import CustomButton from './CustomButton.vue'
import AppBar from './AppBar.vue'
import FooterView from './FooterView.vue'
import OrderItem from './OrderItem.vue'

const { name } = useDisplay()
const router = useRouter()
const orderStore = useOrderStore()
const userStore = useUserStore()
const selMenu = ref([])
const appMenu = ref([
  {
    title: 'トップページ',
    icon: 'fa-solid fa-house',
    route: 'PizzaYa',
    subject: true
  },
  {
    title: 'かごの中を見る',
    icon: 'fa-solid fa-basket-shopping',
    route: 'PizzaYaBasket',
    subject: false
  }
])
const stepper = computed(() => {
  switch (name.value) {
    case 'sm':
    case 'md':
    case 'lg':
    case 'xl':
    case 'xxl':
      return true
    default:
      return false
  }
})
// order listの順番
// 1280px以上は、１
const order1 = computed(() => {
  switch (name.value) {
    case 'lg':
    case 'xl':
    case 'xxl':
      return '1'
    default:
      return '2'
  }
})
// お会計表示の順番
// 1280px以上は、２
const order2 = computed(() => {
  switch (name.value) {
    case 'lg':
    case 'xl':
    case 'xxl':
      return '2'
    default:
      return '1'
  }
})
onMounted(() => {
  // JSONファイルはimportされるとJavaScriptオブジェクトになる
  // それをストアのStateにコピー
  // さらに、数量を格納するためのプロばてぃを追加
  if (orderStore.order.length === 0) {
    orderStore.order = [...menu]
    orderStore.order.forEach((item) => {
      item['quantityN'] = null
      item['quantityS'] = null
      item['quantityM'] = null
      item['quantityL'] = null
      item['total'] = null
    })
  }
  if (userStore.userName) {
    appMenu.value[1] = true
  } else {
    appMenu.value[1] = false
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
      <v-sheet style="max-width: 1400px; min-height: 80vh; margin: 0 auto">
        <v-row justify="center">
          <v-col v-if="userStore.userName" cols="5">
            <stepper-view v-if="stepper" model-value="1" />
          </v-col>

          <v-col md="10" lg="9" :order="order1">
            <v-row justify="center">
              <!-- sm:600px以上 md: -->
              <v-col v-for="item in menu" :key="item.code" sm="10" md="6" cols="10">
                <order-item
                  :menu-code="item.code"
                  :menu-text="item.text"
                  :img-name="item.image"
                  :price-n="item.priceN"
                  :price-s="item.priceS"
                  :price-m="item.priceM"
                  :price-l="item.priceL"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col v-if="userStore.userName" lg="3" md="10" cols="10" :order="order2">
            <v-sheet color="secondary-lighten-1" class="pa-5" rounded="lg" elevation="4">
              <p class="text-h5">お会計</p>
              <p class="text-h4 text-center mb-5">&yen;{{ orderStore.kaikei }}</p>
              <div class="text-center">
                <v-spacer />
                <custom-button
                  btn-text="かごの中を見る"
                  color="primary"
                  icon="fa-solid fa-basket-shopping"
                  min-width="250"
                  min-height="50"
                  class="mb-5"
                  @click="routing('PizzaYaBasket')"
                />
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-sheet>
    </v-main>
    <footer-view />
  </v-app>
</template>
