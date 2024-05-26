<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useRouter } from 'vue-router'

const { name } = useDisplay()
const router = useRouter()

const menus1 = ref([
  { title: 'トップページ', route: 'PizzaYa' },
  { title: '企業情報', route: '' },
  { title: 'プライバシーポリシー', route: '' }
])
const menus2 = ref([
  { title: 'ご利用規約', route: '' },
  { title: 'アルバイト募集', route: '' },
  { title: 'お問い合わせ', route: '' }
])

const spacer = computed(() => {
  switch (name.value) {
    case 'xs':
      return false
    default:
      return true
  }
})

function routing(page) {
  router.push({ name: page })
}
</script>

<template>
  <v-footer color="primary">
    <v-row justify="space-between">
      <v-col cols="12" md="3" sm="4">
        <span class="logo mr-3">P</span>
        <span class="shop-name">Pizza-ya</span>
      </v-col>
      <v-spacer v-if="spacer" />
      <v-col cols="12" xl="2" lg="2" md="3" sm="4">
        <v-list bg-color="primary">
          <v-list-item
            v-for="(item, ix) in menus1"
            :key="item.title"
            :title="item.title"
            :value="ix"
            @click="routing(item.route)"
          />
        </v-list>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="3" sm="3">
        <v-list bg-color="primary">
          <v-list-item
            v-for="(item, ix) in menus2"
            :key="item.title"
            :title="item.title"
            :value="ix"
          />
        </v-list>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
.logo {
  font-family: 'Bungee Shade', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3.3rem;
  line-height: 3.5rem;
  color: white;
}
.shop-name {
  font-family: 'Alfa Slab One', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.5rem;
  color: white;
}
</style>
