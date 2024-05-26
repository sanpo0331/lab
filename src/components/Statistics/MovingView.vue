<script setup>
import { ref } from 'vue'
import { firebaseDbLab } from '@/plugins/firebaseLab'
import { collection, query, getDocs, where, orderBy } from 'firebase/firestore'
import AppBar from './AppBar.vue'
import jsonAddress from './address.json'
import CustomButton from './CustomButton.vue'

// const year = ['全て', '2020年', '2021年', '2022年', '2023年']
const itemNames = [
  '0歳～4歳',
  '5歳～9歳',
  '10歳～14歳',
  '15歳～19歳',
  '20歳～24歳',
  '25歳～29歳',
  '30歳～34歳',
  '35歳～39歳',
  '40歳～44歳',
  '45歳～49歳',
  '50歳～54歳',
  '55歳～59歳',
  '60歳～64歳',
  '65歳～69歳',
  '70歳～74歳',
  '75歳～79歳',
  '80歳～84歳',
  '85歳～89歳',
  '90歳以上'
]

const frmValid = ref(null)
const validate = ref(null)
const inout = ref('moveIn')
const selAddress = ref('北海道')
const selAge = ref('')

const dspList = ref([])
const dspAge = ref([])

const rules = ref({
  required: (v) => (!validate.value ? true : !!v || '検索する所在地を選択してください。')
})

function chkForm() {
  validate.value = true
  frmValid.value.validate().then(function () {
    search()
  })
}
async function search() {
  let q = null
  let querySnapshot = ''
  const snapList = []

  getDspAge()

  if (inout.value === 'moveIn') {
    q = query(
      collection(firebaseDbLab, 'moveIn'),
      where('afterMoving', '==', selAddress.value),
      orderBy('year')
    )
  } else {
    q = query(
      collection(firebaseDbLab, 'moveOut'),
      where('beforeMoving', '==', selAddress.value),
      orderBy('year')
    )
  }
  querySnapshot = await getDocs(q)
  let snapIx = 0
  querySnapshot.forEach((doc) => {
    snapList.push([doc.data().year])
    if (dspAge.value[0]) snapList[snapIx].push(doc.data().age_0_4)
    if (dspAge.value[1]) snapList[snapIx].push(doc.data().age_5_9)
    if (dspAge.value[2]) snapList[snapIx].push(doc.data().age_10_14)
    if (dspAge.value[3]) snapList[snapIx].push(doc.data().age_15_19)
    if (dspAge.value[4]) snapList[snapIx].push(doc.data().age_20_24)
    if (dspAge.value[5]) snapList[snapIx].push(doc.data().age_25_29)
    if (dspAge.value[6]) snapList[snapIx].push(doc.data().age_30_34)
    if (dspAge.value[7]) snapList[snapIx].push(doc.data().age_35_39)
    if (dspAge.value[8]) snapList[snapIx].push(doc.data().age_40_44)
    if (dspAge.value[9]) snapList[snapIx].push(doc.data().age_45_49)
    if (dspAge.value[10]) snapList[snapIx].push(doc.data().age_50_54)
    if (dspAge.value[11]) snapList[snapIx].push(doc.data().age_55_59)
    if (dspAge.value[12]) snapList[snapIx].push(doc.data().age_60_64)
    if (dspAge.value[13]) snapList[snapIx].push(doc.data().age_65_69)
    if (dspAge.value[14]) snapList[snapIx].push(doc.data().age_70_74)
    if (dspAge.value[15]) snapList[snapIx].push(doc.data().age_75_79)
    if (dspAge.value[16]) snapList[snapIx].push(doc.data().age_80_84)
    if (dspAge.value[17]) snapList[snapIx].push(doc.data().age_85_89)
    if (dspAge.value[18]) snapList[snapIx].push(doc.data().age_90)
    ++snapIx
  })
  snapIx = 0
  dspList.value = snapList[0].map((_, i) => snapList.map((row) => row[i]))
  dspList.value[snapIx].unshift('年')

  itemNames.forEach((item, ix) => {
    if (dspAge.value[ix]) {
      ++snapIx
      dspList.value[snapIx].unshift(item)
    }
  })
}

function getDspAge() {
  // dspAge初期化(1をセット)
  dspAge.value = []
  if (selAge.value.length == 0) {
    for (let ix = 0; ix < 19; ix++) {
      dspAge.value.unshift(1)
    }
  } else {
    for (let ix = 0; ix < 19; ix++) {
      dspAge.value.unshift(0)
    }
    // 選択された年代をONにする
    selAge.value.forEach((item) => {
      const ix = itemNames.indexOf(item)
      if (ix > -1) dspAge.value[ix] = 1
    })
  }
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
                <h3 class="ma-10 pl-3">住民基本台帳人口移動統計</h3>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col sm="8" md="4" cols="10">
          <v-form ref="frmValid">
            <v-radio-group v-model="inout">
              <v-radio label="転入者数検索" value="moveIn" />
              <v-radio label="転出者数検索" value="moveOut" />
            </v-radio-group>
            <v-select
              v-model="selAddress"
              variant="outlined"
              label="所在地"
              item-title="name"
              :items="jsonAddress"
              :rules="[rules.required]"
              class="mb-5"
            />
            <!-- <v-select v-model="selYear" variant="outlined" label="年" :items="year" /> -->
            <v-select
              v-model="selAge"
              variant="outlined"
              label="年代"
              :items="itemNames"
              multiple
              clearable
            />
            <v-sheet class="text-center">
              <custom-button
                btn-text="検索"
                color="primary"
                icon="fa-solid fa-magnifying-glass"
                :width="400"
                @click="chkForm"
              />
            </v-sheet>
          </v-form>
        </v-col>
      </v-row>
      <v-divider class="my-5" />
      <v-row justify="center">
        <v-col md="7" lg="6" cols="11">
          <v-table density="compact">
            <tbody>
              <tr v-for="(list, ix) in dspList" :key="ix">
                <td v-for="(item, jx) in list" :key="jx" class="text-right">{{ item }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<style scoped>
.bg {
  background: linear-gradient(90deg, rgba(224, 224, 224, 1) 30%, rgba(224, 224, 224, 0) 100%),
    url('../../assets/statistics-image/InAndOutImage.jpg');
}
h3 {
  border-left: 8px solid #2a83a2;
}
</style>
