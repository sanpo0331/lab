import 'vuetify/styles'
import { createVuetify } from 'vuetify'
// コンポーネント(v-btn、v-cardなど)を一括import
// createVuetifyのオプションでimport設定することで全てのvueファイルで利用可能
// ※ビルドサイズが大きくなる
import * as components from 'vuetify/components'
// Vuetify独自のディレクティブ(v-click-outside、v-scrollなど)を一括import
// ※Vueの「v-if、v-show」と同様
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

// Almeida用テーマ
const almeidaTheme = {
  colors: {
    primary: '#028760',
    'primary-darken-1': '#015f43',
    'primary-lighten-1': '#cce7df',
    secondary: '#024087',
    'secondary-darcken-1': '#012651',
    'secondary-lighten-1': '#678cb7',
    error: '#B71C1C'
  }
}
// pizza-ya用テーマ
const pizzayaTheme = {
  colors: {
    primary: '#F44336',
    'primary-darken-1': '#D32F2F',
    'primary-lighten-1': '#FFCDD2',
    secondary: '#8BC34A',
    'secondary-darcken-1': '#689F38',
    'secondary-lighten-1': '#DCEDC8',
    error: '#B71C1C'
  }
}
// Statistics用テーマ
const statisticsTheme = {
  colors: {
    primary: '#2a83a2',
    'primary-lighten-1': '#7fb5c7',
    'primary-darken-1': '#194f61',
    secondary: '#a2492a',
    'secondary-lighten-1': '#c7927f',
    'secondary-darken-1': '#612c19',
    success: '#487b44',
    warning: '#7b7944',
    error: '#b7282e'
  }
}

// Vuetifyを初期化
export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#007bbb',
          'primary-lighten-1': '#66b0d6',
          'primary-darken-1': '#004a70',
          secondary: '#BB4000',
          'secondary-lighten-1': '#d68c66',
          'secondary-darken-1': '#702600',
          success: '#487b44',
          warning: '#7b7944',
          error: '#b7282e'
        }
      },
      almeidaTheme,
      pizzayaTheme,
      statisticsTheme
    }
  },
  defaults: {
    VTextField: {
      variant: 'outlined',
      rounded: 'lg',
      hide_details: true
    },
    VChip: {
      color: 'primary-darken-1',
      variant: 'flat',
      rounded: 'lg',
      size: 'x-small'
    }
  },
  icons: {
    defaultSet: 'fa' || 'mdi',
    aliases,
    sets: {
      fa,
      mdi
    }
  }
})
