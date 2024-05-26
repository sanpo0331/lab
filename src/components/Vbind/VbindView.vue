<script setup>
import { ref } from 'vue'
import VbindComp from './VbindComp.vue'
import VbindPropChild from './VbindPropChild.vue'

const myMessage = ref('')
const isWhite = ref(false)
const isMa = ref(false)
const dynmcItems2 = ref([])
const dynmcSel1 = ref('')
const dynmcSel2 = ref('')
const dynmcArr1 = ['outlined', 'underlined', 'solo']
const dynmcArr2 = ['fa-brands fa-tiktok', 'fa-brands fa-youtube', 'fa-brands fa-wordpress']
const dynmcArr3 = ['default', 'comfortable', 'compact']
const dynmcAttrName = ref('variant')
const dynmcAttrContent = ref('outlined')

function sel1Selected() {
  console.log('dynmcSel1:', dynmcSel1.value)
  dynmcItems2.value = []
  dynmcSel2.value = ''
  switch (dynmcSel1.value) {
    case 'variant':
      dynmcItems2.value = [...dynmcArr1]
      break
    case 'prepend-inner-icon':
      dynmcItems2.value = [...dynmcArr2]
      break
    case 'density':
      dynmcItems2.value = [...dynmcArr3]
      break
  }
}

function dynmcApply() {
  dynmcAttrName.value = dynmcSel1.value
  dynmcAttrContent.value = dynmcSel2.value
}
</script>

<template>
  <h2>v-bind</h2>
  <v-row style="max-width: 100%">
    <v-col lg="5" md="5" sm="8" cols="11">
      <v-card variant="elevated" class="bg-primary-lighten-1 pa-5">
        <h3>Componentに使用</h3>
        <!-- テンプレート内のpropsの属性名は、ケバブケースとする -->
        <v-text-field
          v-model="myMessage"
          label="vbindCompへのメッセージ"
          density="compact"
          class="mb-5"
          hide-details
        />
        <vbind-comp :props-message="myMessage" class="ml-2" />
      </v-card>
    </v-col>

    <v-col lg="5" md="5" sm="8" cols="11">
      <v-card variant="elevated" class="bg-primary-lighten-1 pa-5">
        <!-- オブジェクト形式：{ 'class名' : 真偽値 } -->
        <h3>class属性に利用</h3>
        <p style="font-size: 0.8rem">チェックボックスをチェックすると、</p>
        <p style="font-size: 0.8rem" class="mb-3">テキストボックスのスタイルが変わります。</p>
        <v-checkbox v-model="isWhite" label="背景色を白に変更" density="compact" hide-details />
        <v-checkbox v-model="isMa" label="左マージンを適用" density="compact" hide-details />
        <v-text-field
          density="compact"
          hide-details
          :class="{ 'bg-white': isWhite, 'ma-3': isMa }"
        />
        <!-- 通常のclass属性と配列指定を併用 -->
        <p class="mt-3" :class="['colorRed', 'hutoji']">配列形式でclassにbindしている。</p>
      </v-card>
    </v-col>

    <v-col lg="5" md="5" sm="8" cols="11">
      <v-card variant="elevated" class="bg-primary-lighten-1 pa-5">
        <!-- オブジェクト形式：{ 'class名' : 真偽値 } -->
        <h3 class="mb-3">動的属性名</h3>
        <p class="mb-3">動的に属性名と属性値を変更する</p>
        <v-select
          v-model="dynmcSel1"
          label="属性名選択"
          variant="outlined"
          hide-details
          :items="['variant', 'prepend-inner-icon', 'density']"
          class="mb-3"
          @update:model-value="sel1Selected"
        />
        <v-select
          v-model="dynmcSel2"
          label="属性値"
          variant="outlined"
          hide-details
          :items="dynmcItems2"
          class="mb-2"
        />
        <v-btn color="primary-darken-1" class="mb-3" rounded="lg" @click="dynmcApply">適用</v-btn>
        <v-text-field label="動的変更" hide-details :[dynmcAttrName]="dynmcAttrContent" />
      </v-card>
    </v-col>

    <v-col lg="5" md="5" sm="8" cols="11">
      <v-card variant="elevated" class="bg-primary-lighten-1 pa-5">
        <h3 class="mb-3">引数なし(オブジェクトをバインド)</h3>
        <v-text-field v-bind="{ label: '引数なしLabel', density: 'compact' }" hide-details />
        <p>propsのバインド</p>
      </v-card>
    </v-col>

    <v-col lg="5" md="5" sm="8" cols="11">
      <v-card variant="elevated" class="bg-primary-lighten-1 pa-5">
        <h3 class="mb-3">slotでv-bindを使用</h3>
        <p>slotPropsを使用して、子コンポーネントから</p>
        <p class="mb-3">親コンポーネントにデータを渡します。</p>
        <vbind-prop-child>
          <template #default="slotProps">{{ slotProps.foo }} world!</template>
        </vbind-prop-child>
      </v-card>
    </v-col>
  </v-row>
</template>

<style>
.colorRed {
  color: red;
}
.hutoji {
  font-weight: bold;
}
</style>
