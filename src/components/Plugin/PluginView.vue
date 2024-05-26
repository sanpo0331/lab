<script setup>
import PluginTestComponent from '../PluginTestComponent.vue'
</script>

<template>
  <h3 class="mb-5">Plugin Test(自作プラグインの検証)</h3>
  <p>FirstPlugin.js:プラグイン読み込み時にコンソールに情報を表示</p>
  <p>SecondPlugin.js:名前付きスロットを利用してデータを送って下記を表示</p>
  <v-divider class="ma-5" />
  <plugin-test-component>
    <template #title>*** Plugin Test ***</template>
    <template #btnTitle>送信</template>
    <template #dropdown>
      <a class="dropdown-item">Vue.js</a>
      <a class="dropdown-item">Vuetify</a>
      <a class="dropdown-item">React</a>
    </template>
  </plugin-test-component>
</template>

<style>
.dropdown-item {
  display: block;
  padding: 0.25rem 1.5rem;
  font-weight: 400;
  color: green;
  text-decoration: none;
}
</style>
