<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { EventKeys, IpcWindowOptions } from '@quiteer/electron-ipc/web'
import HelloWorld from './components/HelloWorld.vue'

const changeWin = (keys: IpcWindowOptions) => {
  window.$ipc.send(EventKeys.WindowOptionsKey, keys)
}

const btns = [{
  label: '窗口最大化',
  key: IpcWindowOptions.MAXIMIZE
}, {
  label: '取消窗口最大化',
  key: IpcWindowOptions.UNMAXIMIZE
}, {
  label: '窗口最小化',
  key: IpcWindowOptions.MINIMIZE
}, {
  label: '窗口恢复',
  key: IpcWindowOptions.RESTORE
}, {
  label: '窗口刷新',
  key: IpcWindowOptions.RELOAD
}, {
  label: '窗口失去焦点',
  key: IpcWindowOptions.BLUR
}, {
  label: '销毁窗口',
  key: IpcWindowOptions.DESTROY
}]
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
  <n-button v-for="item in btns" :key="item.key" @click="changeWin(item.key)">
    {{ item.label }}
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
