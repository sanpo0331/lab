<script setup>
import { ref, onMounted, watch } from 'vue'
import { useOrderStore } from '../../stores/Order'
import { useUserStore } from '../../stores/user'

const orderStore = useOrderStore()
const userStore = useUserStore()
const props = defineProps({
  menuCode: {
    type: String,
    default: 'n00'
  },
  menuText: {
    type: String,
    default: 'no menu'
  },
  imgName: {
    type: String,
    default: ''
  },
  priceN: {
    type: Number,
    default: 0
  },
  priceS: {
    type: Number,
    default: 0
  },
  priceM: {
    type: Number,
    default: 0
  },
  priceL: {
    type: Number,
    default: 0
  }
})
const quantities = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
const propImg = ref('')
const img = ref('')
const chgSw = ref(false)
const quantityN = ref(null)
const quantityS = ref(null)
const quantityM = ref(null)
const quantityL = ref(null)
const bgColorN = ref('white')
const bgColorS = ref('white')
const bgColorM = ref('white')
const bgColorL = ref('white')

onMounted(() => {
  propImg.value = props.imgName
  if (orderStore.order.length === 0) return
  const ix = orderStore.order.findIndex((item) => item.code === props.menuCode)
  quantityN.value = orderStore.order[ix].quantityN
  quantityS.value = orderStore.order[ix].quantityS
  quantityM.value = orderStore.order[ix].quantityM
  quantityL.value = orderStore.order[ix].quantityL
  // orderStore.order.forEach((element) => {
  //   if (element.code === props.menuCode) {
  //     quantityN.value = element.quantityN
  //     quantityS.value = element.quantityS
  //     quantityM.value = element.quantityM
  //     quantityL.value = element.quantityL
  //     return
  //   }
  // })
})

watch(propImg, (newValue) => {
  imgImport(newValue)
})

watch(quantityN, (newValue, oldValue) => {
  if (chgSw.value) {
    orderStore.updOrder(props.menuCode, 'N', props.priceN, newValue, oldValue)
    chgSw.value = false
  }
  newValue ? (bgColorN.value = 'secondary-lighten-1') : (bgColorN.value = 'white')
})
watch(quantityS, (newValue, oldValue) => {
  if (chgSw.value) {
    orderStore.updOrder(props.menuCode, 'S', props.priceS, newValue, oldValue)
    chgSw.value = false
  }
  newValue ? (bgColorS.value = 'secondary-lighten-1') : (bgColorS.value = 'white')
})
watch(quantityM, (newValue, oldValue) => {
  if (chgSw.value) {
    orderStore.updOrder(props.menuCode, 'M', props.priceM, newValue, oldValue)
    chgSw.value = false
  }
  newValue ? (bgColorM.value = 'secondary-lighten-1') : (bgColorM.value = 'white')
})
watch(quantityL, (newValue, oldValue) => {
  if (chgSw.value) {
    orderStore.updOrder(props.menuCode, 'L', props.priceL, newValue, oldValue)
    chgSw.value = false
  }
  newValue ? (bgColorL.value = 'secondary-lighten-1') : (bgColorL.value = 'white')
})

async function imgImport(nv) {
  const result = await import(`../../assets/pizza-ya-image/${nv}.jpg`)
  img.value = result.default
}
</script>

<template>
  <v-sheet border color="surface-light" min-height="250" class="ma-4 pa-5">
    <v-row justify="center">
      <v-col sm="6" md="12" lg="6" cols="12">
        <v-layout>
          <v-img :src="img" width="200" height="auto" class="ma-2" />
        </v-layout>
      </v-col>
      <v-col sm="6" md="12" lg="6" cols="12">
        <v-row>
          <v-col cols="12">{{ menuText }}</v-col>
          <v-col cols="12">
            <v-row
              v-if="props.priceN != 0"
              no-gutters
              justify="space-around"
              align="center"
              class="pb-2"
            >
              <v-col cols="6">&yen;{{ priceN }}</v-col>
              <v-col v-if="userStore.userName" cols="6">
                <v-select
                  v-model="quantityN"
                  variant="outlined"
                  density="compact"
                  hide-details
                  clearable
                  label="数量"
                  width="150"
                  :items="quantities"
                  :bg-color="bgColorN"
                  @update:model-value="chgSw = true"
                />
              </v-col>
            </v-row>
            <v-row
              v-if="props.priceN === 0"
              no-gutters
              justify="space-around"
              align="center"
              class="pb-2"
            >
              <v-col cols="2">
                <v-avatar color="grey-darken-3" size="small">S</v-avatar>
              </v-col>
              <v-col cols="4">\{{ priceS }}</v-col>
              <v-col v-if="userStore.userName" cols="6">
                <v-select
                  v-model="quantityS"
                  variant="outlined"
                  density="compact"
                  hide-details
                  clearable
                  label="数量"
                  width="150"
                  :items="quantities"
                  :bg-color="bgColorS"
                  @update:model-value="chgSw = true"
                />
              </v-col>
            </v-row>
            <v-row
              v-if="props.priceN === 0"
              no-gutters
              justify="space-around"
              align="center"
              class="pb-2"
            >
              <v-col cols="2">
                <v-avatar color="grey-darken-3" size="small">M</v-avatar>
              </v-col>
              <v-col cols="4">\{{ priceM }}</v-col>
              <v-col v-if="userStore.userName" cols="6">
                <v-select
                  v-model="quantityM"
                  variant="outlined"
                  density="compact"
                  hide-details
                  clearable
                  label="数量"
                  width="150"
                  :items="quantities"
                  :bg-color="bgColorM"
                  @update:model-value="chgSw = true"
                />
              </v-col>
            </v-row>
            <v-row v-if="props.priceN === 0" no-gutters justify="space-around" align="center">
              <v-col cols="2">
                <v-avatar color="grey-darken-3" size="small">L</v-avatar>
              </v-col>
              <v-col cols="4">\{{ priceL }}</v-col>
              <v-col v-if="userStore.userName" cols="6">
                <v-select
                  v-model="quantityL"
                  variant="outlined"
                  density="compact"
                  hide-details
                  clearable
                  label="数量"
                  width="150"
                  :items="quantities"
                  :bg-color="bgColorL"
                  @update:model-value="chgSw = true"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-sheet>
</template>
