import { defineStore } from 'pinia'

export const useLifecycleStore = defineStore('lifecycle', {
  state: () => ({
    events: []
  })
})
