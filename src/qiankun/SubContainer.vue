<template>
  <div id="sub-container">123</div>
</template>

<script lang="ts" setup>
import { start } from 'qiankun'
import { registerApps } from './index'
import { onMounted } from 'vue'

onMounted(() => {
  if (!window.qiankunStarted) {
    window.qiankunStarted = true
    registerApps()
    start({
      sandbox: {
        experimentalStyleIsolation: true // 样式隔离
      }
    })
  }
})
</script>

<style lang="scss" scoped>
#sub-container {
  width: 100%;
  height: 100%;
  :deep(#__qiankun_microapp_wrapper_for_test_three__) {
    width: 100%;
    height: 100%;
  }
}
</style>
