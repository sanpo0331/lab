import PluginTestComponent from '@/components/PluginTestComponent.vue'

export const SecondPlugin = (app) => {
  app.component('PluginTestComponent', PluginTestComponent)
}
