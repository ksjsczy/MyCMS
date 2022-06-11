<template>
  <div>
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumb" :key="item.name">
        <el-breadcrumb-item :to="{ path: $route.path }">
          {{ (item as any).name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  breadcrumb: string[]
}>()
</script>

<style scoped>
</style>