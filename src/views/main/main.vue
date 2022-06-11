<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '65px' : '210px'" class="aside">
        <nav-menu :menulist="menulist" :is-collapse="isCollapse"></nav-menu>
      </el-aside>
      <el-container>
        <el-header>
          <nav-header @icon-click="foldNavMenu"></nav-header>
        </el-header>
        <el-main class="main">
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
  background-color: #f0f2f5;
}

.aside {
  overflow-x: hidden;
  height: 100vh;
  background-color: #001529;
  transition: width 0.3s linear;
}
</style>
