<template>
  <h2>スロット</h2>
  <section class="ma-5">
    <h3>単一スロット</h3>
    <v-sheet width="200px" class="mb-3">
      <v-text-field
        v-model="singleSlot"
        label="SlotPartsBtnに送る文字"
        density="compact"
        hide-details
      ></v-text-field>
    </v-sheet>
    <!-- 変数singleSlotは、そのコンポーネント自身(親コンポーネント)の変数として展開される。 -->
    <!-- 親コンポーネントから子コンポーネント側の変数にアクセスできない。 -->
    <!-- 親コンポーネントから子コンポーネントにアクセスする方法が、スコープ付きスロットである。 -->
    <slot-parts-btn>{{ singleSlot }}</slot-parts-btn>

    <h3 class="mt-5">名前付きスロット</h3>
    <slot-parts-div>
      <template #header>見出し</template>
      <!-- v-slot:footer は、#footerと書ける -->
      <template #footer>フッター</template>
      メイン
    </slot-parts-div>

    <h3 class="mt-5">動的スロット</h3>
    <v-radio-group v-model="dynamicValue" density="compact">
      <v-radio label="赤色" color="red" value="red"></v-radio>
      <v-radio label="青色" color="blue" value="blue"></v-radio>
      <v-radio label="緑色" color="green" value="green"></v-radio>
    </v-radio-group>
    <slot-dynamic>
      <template #[dynamicValue]>
        <!-- <template #[dynamicValue]> 省略表記 -->
        <p>上記ラジオボタンで選択された色で表示。</p>
      </template>
    </slot-dynamic>

    <h3 class="mt-5">スコープ付きスロット</h3>
    <!-- 子コンポーネントからpropsを受け取る -->
    <!-- スロットコンテンツが、「無し」の場合 -->
    <slot-child />
    <!-- スロットコンテンツが、「次郎」の場合 -->
    <slot-child>次郎</slot-child>
    <!-- スロットコンテンツにおいて、スコープ付きスロットを利用した場合 -->
    <slot-child>
      <!-- 
        v-slotは、template要素にしか記述できない。
        mySlotPropsを通して、子コンポーネント(SlotChild)のデータにアクセスする。 
        mySlotPropsには、SlotChildにて設定されたuserプロパティが格納されている。
        userプロパティの内容は、userNameオブジェクトの内容となる。
      -->
      <!-- 
        以下の記述はすべて同じ内容となる。 
        <template v-slot="mySlotProps">
        <template v-slot.default="mySlotProps">
        <template #default="mySlotProps">
      -->
      <template #default="mySlotProps">
        <span style="color: red">{{ mySlotProps.user.nameJa }}</span>
      </template>
      <template #test-slot="testValue">{{ testValue.value }}</template>
    </slot-child>

    <h3 class="mt-5">props & slot</h3>
    <!-- propsで、「title」「headers」「data」を、子コンポーネントに渡す。 -->
    <slot-parts-dynamic :title="title" :headers="headers" :data="details">
      <!-- 名前付きスロット(table-item)に、<row> を設定する -->
      <template #table-item="row">
        <tr>
          <td v-for="(column, jx) in row" :key="jx">{{ column }}</td>
        </tr>
      </template>
    </slot-parts-dynamic>
  </section>
</template>

<script>
import SlotPartsBtn from './SlotPartsBtn.vue'
import SlotPartsDiv from './SlotPartsDiv.vue'
import SlotPartsDynamic from './SlotPartsDynamic.vue'
import SlotChild from './SlotChild.vue'
import SlotDynamic from './SlotDynamic.vue'

export default {
  components: {
    SlotPartsBtn,
    SlotPartsDiv,
    SlotPartsDynamic,
    SlotChild,
    SlotDynamic
  },
  data: () => ({
    singleSlot: 'singleSlot',
    title: 'Title',
    headers: ['C1', 'C2', 'C3', 'C4'],
    details: [
      {
        c1: `R1-C1`,
        c2: `R1-C2`,
        c3: `R1-C3`,
        c4: `R1-C4`
      },
      {
        c1: `R2-C1`,
        c2: `R2-C2`,
        c3: `R2-C3`,
        c4: `R2-C4`
      }
    ],
    dynamicValue: 'red'
  })
}
</script>

<style></style>
