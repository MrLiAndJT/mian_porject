<template>
  <div class="main-wrap">
    <header class="header"></header>
    <div class="container">
      <div class="menu">
        <el-menu default-active="/home" :collapse="isCollapse" router>
          <el-menu-item index="/test-three">
            <el-icon><plus /></el-icon>
            <template #title>子应用vue3</template>
          </el-menu-item>
          <el-menu-item index="/About">
            <el-icon><document /></el-icon>
            <template #title>主应用About页面</template>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
$header-height: 70px;
$menu-width: 250px;
.main-wrap {
  .header {
    height: $header-height;
    background-color: #bfc0d2;
  }
  .container {
    height: calc(100vh - #{$header-height});
    display: flex;
    .menu {
      height: 100%;
      width: $menu-width;
      background-color: beige;
    }
    .content {
      flex: 1;
      height: 100%;
      background-color: darkcyan;
    }
  }
}
</style>
