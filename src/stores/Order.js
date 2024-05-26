import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', () => {
  // State
  const order = ref([])
  // Getters
  const kaikei = computed(() => {
    const cnt = ref(0)
    order.value.forEach((item) => {
      cnt.value += item.total
    })
    return cnt.value
  })
  // Actions
  function updOrder(code, size, price, newValue, oldValue) {
    order.value.forEach((item) => {
      if (item.code === code) {
        item.total -= price * oldValue
        item.total += price * newValue
        switch (size) {
          case 'N':
            item.quantityN = newValue
            break
          case 'S':
            item.quantityS = newValue
            break
          case 'M':
            item.quantityM = newValue
            break
          case 'L':
            item.quantityL = newValue
            break
        }
      }
    })
  }

  return { order, kaikei, updOrder }
})
