<script setup>
import { ref, onMounted, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/user'
import { firebaseDb } from '../../plugins/firebase'
import { setDoc, doc } from 'firebase/firestore'

import AppBar from './AppBar.vue'
import FooterView from './FooterView.vue'
import CustomButton from './CustomButton.vue'
import addressJson from './address.json'

const { name } = useDisplay()
const router = useRouter()
const store = useUserStore()
const dialog = ref(false)
const dialogTitle = ref('ご登録ありがとうございます！')
const dialogSubtitle = ref('ご登録いただいた電話番号でログインできます。')
const userName = ref('')
const userNameKana = ref('')
const tel = ref('')
const zip = ref('')
const address = ref('')
const blockAddress = ref('')
const roomNumber = ref('')
const frmValid = ref(null)
const validate = ref(false)
const appMenu = ref([
  {
    title: 'トップページ',
    icon: 'fa-solid fa-house',
    route: 'PizzaYa'
  }
])
const rules = ref({
  required: (v) => (!validate.value ? true : !!v || '入力必須です'),
  counterZip: (v) => (!validate.value ? true : v.length === 7 || '７文字入力してください')
})
const mainWidth = computed(() => {
  switch (name.value) {
    case 'xs':
    case 'sm':
      return '90%'
    default:
      return '70%'
  }
})

onMounted(() => {
  if (store.userName) {
    userName.value = store.userName
    userNameKana.value = store.userNameKana
    tel.value = store.tel
    zip.value = store.zip
    address.value = store.address
    blockAddress.value = store.blockAddress
    roomNumber.value = store.roomNumber
    dialogTitle.value = '更新しました。'
    dialogSubtitle.value = ''
  }
})

function routing(page) {
  router.push({ name: page })
}

function getAddress() {
  const result = addressJson.find((obj) => obj.zipcode == zip.value)
  if (result) {
    address.value = result.address
    blockAddress.value = ''
    roomNumber.value = ''
  }
}
function setData() {
  validate.value = true
  frmValid.value.validate().then(async function (data) {
    if (!data.valid) return
    await setDoc(doc(firebaseDb, 'users', tel.value), {
      userName: userName.value,
      userNameKana: userNameKana.value,
      zip: zip.value,
      address: address.value,
      blockAddress: blockAddress.value,
      roomNumber: roomNumber.value
    })
    store.userName = userName.value
    store.userNameKana = userNameKana.value
    store.tel = tel.value
    store.zip = zip.value
    store.address = address.value
    store.blockAddress = blockAddress.value
    store.roomNumber = roomNumber.value
    dialog.value = true
  })
}
function dialogClose() {
  dialog.value = false
  routing('PizzaYa')
}
</script>

<template>
  <v-app theme="pizzayaTheme">
    <v-dialog v-model="dialog" width="auto" persistent>
      <v-card
        class="pa-5"
        color="secondary-lighten-1"
        rounded="lg"
        :title="dialogTitle"
        :subtitle="dialogSubtitle"
      >
        <template #prepend>
          <v-icon icon="fa-regular fa-face-smile-beam" size="x-large" color="amber-darken-3" />
        </template>
        <v-card-actions>
          <v-spacer />
          <v-btn elevation="2" @click="dialogClose">閉じる</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <app-bar :app-menu="appMenu" />
    <v-main>
      <v-form ref="frmValid" class="d-flex justify-center">
        <v-sheet :width="mainWidth" class="pa-10">
          <v-row>
            <v-col md="6" sm="6" cols="12">
              <h3>お名前<v-chip class="ml-3">入力必須</v-chip></h3>
              <v-text-field v-model="userName" :rules="[rules.required]" />
            </v-col>
            <v-col md="6" sm="6" cols="12">
              <h3>フリガナ<v-chip class="ml-3">入力必須</v-chip></h3>

              <v-text-field v-model="userNameKana" :rules="[rules.required]" required />
            </v-col>
            <v-col md="6" sm="6" cols="12">
              <h3>
                電話番号<span>(番号のみ。-ハイフンは入力不要)</span
                ><v-chip class="ml-3">入力必須</v-chip>
              </h3>
              <v-text-field v-model="tel" :rules="[rules.required]" required />
            </v-col>
            <v-col cols="6"></v-col>
            <v-divider />
            <v-col cols="12">
              <h3>ご住所<v-chip class="ml-3">入力必須</v-chip></h3>
            </v-col>
            <v-col ld="5" xl="5" md="6" sm="7" cols="9">
              <h3 style="border: none">郵便番号<span>(番号のみ。-ハイフンは入力不要)</span></h3>
              <div class="d-flex justify-start">
                <v-text-field
                  v-model="zip"
                  :counter="7"
                  :rules="[rules.required, rules.counterZip]"
                  required
                />
                <v-btn color="secondary" class="ml-3" @click="getAddress">住所自動入力</v-btn>
              </div>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="address"
                :rules="[rules.required]"
                placeholder="京都市中京区寺町通御池上る"
              />
            </v-col>
            <v-col md="6" sm="6" cols="12">
              <h3 style="border: none">丁目・番地</h3>
              <v-text-field v-model="blockAddress" placeholder="488" />
            </v-col>
            <v-col md="6" sm="6" cols="12">
              <h3 style="border: none">建物名・部屋番号</h3>
              <v-text-field v-model="roomNumber" />
            </v-col>
            <v-col cols="12" class="text-center">
              <custom-button
                btn-text="トップページ"
                color="white"
                icon="fa-solid fa-house"
                min-width="300"
                class="mr-3 mb-3"
                @click="routing('PizzaYa')"
              />
              <custom-button
                btn-text="入力内容で更新する"
                color="primary"
                icon="fa-solid fa-pen-to-square"
                min-width="300"
                @click="setData"
              />
            </v-col>
          </v-row>
        </v-sheet>
      </v-form>
    </v-main>
    <footer-view />
  </v-app>
</template>

<style scoped>
h3 {
  border-left: 5px solid #f44336;
  padding-left: 6px;
  margin-bottom: 6px;
}
span {
  font-size: 0.75rem;
  color: #999;
}
</style>
