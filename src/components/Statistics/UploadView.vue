<script setup>
import { ref } from 'vue'
import { firebaseDbLab } from '../../plugins/firebaseLab'
import { collection, setDoc, doc } from 'firebase/firestore'
import AppBar from './AppBar.vue'
import CustomButton from './CustomButton.vue'
// 転入者数
import moveIn from './move-in.json'
// 転出者数
import moveOut from './move-out.json'

const frmValid = ref(null)
const validate = ref(null)
const uploadData = ref(null)

const rules = ref({
  required: (v) => (!validate.value ? true : !!v || 'アップロードするデータを選択してください。')
})

const data = ref([
  { name: '転入者数データ', value: 'moveIn' },
  { name: '転出者数データ', value: 'moveOut' }
])

function upload() {
  validate.value = true
  let docRef = ''
  frmValid.value.validate().then(function () {
    switch (uploadData.value) {
      case 'moveIn':
        docRef = collection(firebaseDbLab, 'moveIn')
        moveIn.forEach((element) => updData(docRef, element))
        break
      case 'moveOut':
        docRef = collection(firebaseDbLab, 'moveOut')
        moveOut.forEach((element) => updData(docRef, element))
        break
      default:
        break
    }
  })
}
async function updData(ref, data) {
  await setDoc(doc(ref), data)
}
</script>

<template>
  <v-app theme="statisticsTheme">
    <app-bar />
    <v-main>
      <v-row justify="center">
        <v-col cols="12">
          <v-sheet color="grey-lighten-2" height="150" class="mt-10 bg">
            <v-row class="justify-center">
              <v-col sm="10" cols="12">
                <h3 class="ma-10 pl-3">データアップロード</h3>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
        <v-col sm="8" md="5" cols="10">
          <v-form ref="frmValid">
            <h4>アップロードデータ</h4>
            <v-select
              v-model="uploadData"
              :items="data"
              variant="outlined"
              item-title="name"
              item-value="value"
              :rules="[rules.required]"
            />
            <custom-button
              btn-text="アップロード"
              color="primary"
              icon="fa-solid fa-cloud-arrow-up"
              :min-width="400"
              @click="upload"
            />
          </v-form>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<style scoped>
.bg {
  background: linear-gradient(90deg, rgba(224, 224, 224, 1) 30%, rgba(224, 224, 224, 0) 100%),
    url('../../assets/statistics-image/UploadViewImage.jpg');
}
h3 {
  border-left: 8px solid #2a83a2;
}
</style>
