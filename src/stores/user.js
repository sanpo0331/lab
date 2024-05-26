import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  // State
  const userName = ref('')
  const userNameKana = ref('')
  const tel = ref('')
  const zip = ref('')
  const address = ref('')
  const blockAddress = ref('')
  const roomNumber = ref('')
  return {
    userName,
    userNameKana,
    tel,
    zip,
    address,
    blockAddress,
    roomNumber
  }
})
