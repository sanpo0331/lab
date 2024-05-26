<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'

import { useOrderStore } from '../../stores/Order'
import StepperView from './StepperView.vue'
import CustomButton from './CustomButton.vue'
import AppBar from './AppBar.vue'
import FooterView from './FooterView.vue'

const { name } = useDisplay()
const dialog1 = ref(false)
const dialog2 = ref(false)
const router = useRouter()
const store = useOrderStore()
const order = ref([])

function routing(page) {
  router.push({ name: page })
}
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
const appMenu = ref([
  {
    title: 'トップページ',
    icon: 'fa-solid fa-house',
    route: 'PizzaYa'
  },
  {
    title: '注文に戻る',
    icon: 'fa-solid fa-pizza-slice',
    route: 'PizzaYaOrder'
  }
])

onMounted(() => {
  if (!store.kaikei) {
    dialog1.value = true
  }
  store.order.forEach((item) => {
    if (item.total) {
      order.value.push(item)
    }
  })
})

function dialogClose(dno) {
  if (dno === '1') {
    dialog1.value = false
    routing('PizzaYaOrder')
  } else {
    dialog2.value = false
    store.order = []
    routing('PizzaYa')
  }
}
</script>

<template>
  <v-app theme="pizzayaTheme">
    <v-dialog v-model="dialog1" width="auto" persistent>
      <v-card
        class="pa-5"
        color="grey-lighten-2"
        rounded="lg"
        title="かごに商品はありません。"
        subtitle="閉じるボタンをクリックすると、このメッセージが閉じられます。"
      >
        <template #prepend>
          <v-icon icon="fa-solid fa-triangle-exclamation" size="x-large" color="amber-darken-3" />
        </template>
        <v-card-actions>
          <v-spacer />
          <v-btn elevation="2" @click="dialogClose('1')">閉じる</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog2" width="auto" persistent>
      <v-card
        class="pa-5"
        color="secondary-lighten-1"
        rounded="lg"
        title="ご注文ありがとうございます！"
        subtitle="配達までしばらくお待ちください。"
      >
        <template #prepend>
          <v-icon icon="mdi mdi-moped" size="x-large" color="amber-darken-3" />
        </template>
        <v-card-actions>
          <v-spacer />
          <v-btn elevation="2" @click="dialogClose('2')">閉じる</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <app-bar :app-menu="appMenu" />
    <v-main>
      <v-sheet style="max-width: 1400px; min-height: 80vh; margin: 0 auto">
        <v-row justify="center">
          <v-col cols="5">
            <stepper-view v-if="stepper" model-value="2" />
          </v-col>
          <v-col md="8" cols="12">
            <v-table>
              <thead class="bg-grey-lighten-2">
                <tr>
                  <th rowspan="2">商品名</th>
                  <th colspan="4">注文数</th>
                  <th rowspan="2">小計</th>
                </tr>
                <tr>
                  <th>Ｓ</th>
                  <th>Ｍ</th>
                  <th>Ｌ</th>
                  <th>ー</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in order" :key="item.code">
                  <td>{{ item.text }}</td>
                  <td>{{ item.quantityS ? item.quantityS : '-' }}</td>
                  <td>{{ item.quantityM ? item.quantityM : '-' }}</td>
                  <td>{{ item.quantityL ? item.quantityL : '-' }}</td>
                  <td>{{ item.quantityN ? item.quantityN : '-' }}</td>
                  <td>{{ item.total }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
          <v-col md="3" cols="10">
            <v-sheet color="secondary-lighten-1" class="pa-5" rounded="lg" elevation="4">
              <p class="text-h5">お会計</p>
              <p class="text-h4 text-center mb-5">\{{ store.kaikei }}</p>
              <div class="text-center">
                <custom-button
                  btn-text="注文を確定"
                  color="primary"
                  icon="fa-solid fa-cash-register"
                  min-width="250"
                  min-height="50"
                  class="mb-5"
                  @click="dialog2 = true"
                />
              </div>
              <div class="text-center">
                <custom-button
                  btn-text="注文に戻る"
                  color="secondary"
                  icon="fa-solid fa-pizza-slice"
                  min-width="250"
                  min-height="50"
                  @click="routing('PizzaYaOrder')"
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
