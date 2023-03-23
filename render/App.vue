<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { EventKeys, IpcWindowOptions } from '@quiteer/electron-ipc/web'
import HelloWorld from './components/HelloWorld.vue'

const changeWin = (keys: IpcWindowOptions) => {
  window.$ipc.send(EventKeys.WindowOptionsKey, keys)
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
  </div>
  <n-button @click="changeWin(IpcWindowOptions.MAXIMIZE)">
    窗口最大化
  </n-button>
  <n-button @click="changeWin(IpcWindowOptions.UNMAXIMIZE)">
    取消窗口最大化
  </n-button>
  <n-button @click="changeWin(IpcWindowOptions.MINIMIZE)">
    窗口最小化
  </n-button>
  <n-button @click="changeWin(IpcWindowOptions.RESTORE)">
    窗口恢复
  </n-button>
  <n-button @click="changeWin(IpcWindowOptions.RELOAD)">
    窗口刷新
  </n-button>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
