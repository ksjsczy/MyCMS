<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search/src/page-search.vue'
import { searchFormConfig } from './config/search-config';
</script>

<style scoped>
</style>
