<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '65px' : '210px'" class="aside">
        <nav-menu :menulist="menulist" :is-collapse="isCollapse"></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header>
          <nav-header @icon-click="foldNavMenu" class="header"></nav-header>
        </el-header>
        <div class="divider"></div>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store';
import NavHeader from '../../components/nav-header/src/nav-header.vue';
const store = useStore()
const menulist = store.state.login.menu
const isCollapse = ref(false)
const foldNavMenu = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.page,
.main-content {
  height: 100%;
}

.page-content {
  background-color: #f0f2f5;
  padding-top: 0 !important;
}

.aside {
  overflow-x: hidden;
  height: 100vh;
  background-color: #001529;
  transition: width 0.3s linear;
}

.divider {
  height: 22px;
  background-color: #f0f2f5;
}
</style>
