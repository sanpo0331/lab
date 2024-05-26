<template>
  <h5>{{ title }}</h5>
  <v-table>
    <thead>
      <tr>
        <!-- propsで受け取った「headers」を使って見出し部を出力する。 -->
        <th v-for="header in headers" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <!-- propsで受け取った、「data」を使って明細部を出力する。 -->
      <!-- dataの１つのデータがループ処理により。「row」に格納される。 -->
      <!-- rowの表示の仕方については、親コンポーネントに委ねる。 -->
      <slot name="table-item" v-for="row in data" v-bind="row"></slot>
    </tbody>
  </v-table>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    headers: {
      type: Array
    },
    data: {
      type: Array
    }
  }
}
</script>

<style></style>
