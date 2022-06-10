<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="aside">
        <nav-menu></nav-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main class="main">Main页面</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavMenu from '@/components/nav-menu';</script>

<style scoped>
.aside {
  height: 100vh;
  background-color: #001529;
  color: #fff;
}

.main {
  background-color: #f0f2f5;
}
</style>
