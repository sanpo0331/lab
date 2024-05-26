<template>
  <section class="ma-5">
    <v-card width="500" height="150" class="mb-4">
      <v-toolbar title="Application">
        <v-spacer />
        <v-btn icon="$menu" />
        <v-btn icon="mdi mdi-dots-vertical" />
      </v-toolbar>
      <v-card-text>
        <p>default</p>
      </v-card-text>
    </v-card>
    <v-card width="500" height="150" class="mb-4">
      <v-toolbar title="Application" elevation="4" density="compact">
        <v-spacer />
        <v-btn icon="$menu" />
        <v-btn icon="mdi mdi-dots-vertical" />
      </v-toolbar>
      <v-card-text>
        <p>elevation=4</p>
        <p>density=compact</p>
      </v-card-text>
    </v-card>
    <v-card width="500" height="150">
      <v-toolbar title="Application" border>
        <v-spacer />
        <v-btn icon="$menu" />
        <v-btn icon="mdi mdi-dots-vertical" />
      </v-toolbar>
      <v-card-text>
        <p>border</p>
      </v-card-text>
    </v-card>
  </section>
  <section class="ma-5">
    <div style="width: 500px">
      <v-toolbar image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-app-bar-nav-icon />
        <v-toolbar-title>Toolbar-Title</v-toolbar-title>
        <v-spacer />
        <v-btn icon="mdi mdi-export" />
      </v-toolbar>
    </div>
  </section>
  <section class="ma-5">
    <v-card color="grey-lighten-4" height="150" width="500" rounded="0" flat>
      <v-toolbar collapse color="grey-darken-3">
        <v-btn icon="mdi mdi-magnify" />
        <v-btn icon="mdi mdi-dots-vertical" />
      </v-toolbar>
    </v-card>
  </section>
  <!-- Extended  extension slotを使用せずに拡張する-->
  <section class="ma-5">
    <v-card color="grey-lighten-4" height="150" width="500" rounded="0" flat>
      <v-toolbar extended color="grey-darken-3">
        <v-app-bar-nav-icon />
        <v-toolbar-title>Toolbar-Title</v-toolbar-title>
        <v-spacer />
        <v-btn icon="mdi mdi-export" />
        <v-btn icon="mdi mdi-heart" />
        <v-btn icon="mdi mdi-dots-vertical" />
      </v-toolbar>
    </v-card>
  </section>
  <!-- Floating width search フローティング ツールバーは、必要なだけのスペースを占めるインライン要素に変わります。これは、コンテンツの上にツールバーを配置する場合に特に便利です。  -->
  <section class="ma-5">
    <v-card color="grey-lighten-4" height="200" width="500" rounded="0" flat>
      <v-toolbar extended extension-height="100" color="grey-darken-3">
        <v-app-bar-nav-icon />
        <v-toolbar-title>Toolbar-Title</v-toolbar-title>
        <v-spacer />
        <v-btn icon="mdi mdi-export" />
        <v-btn icon="mdi mdi-heart" />
        <v-btn icon="mdi mdi-dots-vertical" />
      </v-toolbar>
    </v-card>
  </section>
</template>
