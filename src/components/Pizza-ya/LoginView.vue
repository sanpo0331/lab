<script setup>
import { ref, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'
import { firebaseDb } from '../../plugins/firebase'
import { getDoc, doc } from 'firebase/firestore'

import { useUserStore } from '../../stores/user'
import AppBar from './AppBar.vue'
import FooterView from './FooterView.vue'
import CustomButton from './CustomButton.vue'

const { name } = useDisplay()
const router = useRouter()
const store = useUserStore()
const login = ref('')
const errMessage = ref('')
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
  required: (v) => (!validate.value ? true : !!v || '入力必須です')
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
const btnWidth = computed(() => {
  switch (name.value) {
    case 'xs':
      return 300
    default:
      return 400
  }
})

watch(login, () => {
  errMessage.value = ''
})

function routing(page) {
  router.push({ name: page })
}
function getData() {
  validate.value = true
  frmValid.value.validate().then(async function (data) {
    if (!data.valid) return
    const docSnap = await getDoc(doc(firebaseDb, 'users', login.value))
    if (docSnap.exists()) {
      store.userName = docSnap.data().userName
      store.userNameKana = docSnap.data().userNameKana
      store.tel = docSnap.id
      store.zip = docSnap.data().zip
      store.address = docSnap.data().address
      store.blockAddress = docSnap.data().blockAddress
      store.roomNumber = docSnap.data().roomNumber
      routing('PizzaYa')
    } else {
      errMessage.value = 'ログインIDをご確認ください。'
    }
  })
}
</script>

<template>
  <v-app theme="pizzayaTheme">
    <app-bar :app-menu="appMenu" />
    <v-main>
      <v-sheet style="max-width: 1400px; min-height: 80vh; margin: 0 auto">
        <v-form ref="frmValid" class="d-flex justify-center">
          <v-sheet :width="mainWidth" class="pa-10">
            <v-row justify="center">
              <v-col md="5" sm="5" cols="12" class="mb-10">
                <h3>ログインID</h3>
                <v-text-field
                  v-model="login"
                  :rules="[rules.required]"
                  placeholder="ご登録のお電話番号"
                  type="number"
                />
                <p>{{ errMessage }}</p>
              </v-col>
              <v-col cols="12" class="text-center">
                <custom-button
                  btn-text="トップページ"
                  color="white"
                  icon="fa-solid fa-house"
                  :width="btnWidth"
                  class="mr-3 mb-3"
                  @click="routing('PizzaYa')"
                />
                <custom-button
                  btn-text="ログイン"
                  color="primary"
                  icon="fa-solid fa-right-to-bracket"
                  :width="btnWidth"
                  @click="getData"
                />
              </v-col>
            </v-row>
          </v-sheet>
        </v-form>
      </v-sheet>
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
</style>
