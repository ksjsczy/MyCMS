<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search/src/page-search.vue'
const searchFormConfig = [
  {
    field: 'id',
    type: 'input',
    label: 'id',
    placeholder: '请输入id'
  },
  {
    field: 'name',
    type: 'input',
    label: '用户名',
    placeholder: '请输入用户名'
  }
]
</script>

<style scoped>
</style>
