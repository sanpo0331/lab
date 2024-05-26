<template>
  <section>
    <h4>SlotChild</h4>
    <!-- 親コンポーネントにデータを渡す -->
    <!-- 子コンポーネントのスロットに渡されたpropsの値に、親コンポーネントからアクセスする。 -->
    <!-- slotに「user」というプロパティ(スロットプロパティ)を渡している。※スコープ付きスロットの特徴 -->
    <p class="ml-3">
      name:<slot :user="userName">{{ userName.nameEn }}</slot>
    </p>
    <p class="ml-3">
      名前付きスロット：
      <!-- 引数なしのv-bindの内容は、オブジェクトとする。 -->

      <slot name="test-slot" v-bind="testValue">default</slot>
    </p>
  </section>
</template>

<script>
export default {
  data: () => ({
    userName: {
      nameEn: 'Taro Yamada',
      nameJa: '山田　太郎'
    },
    testValue: {
      code: '001',
      value: 'from SlotChild(testValue)'
    }
  })
}
</script>

<style></style>
