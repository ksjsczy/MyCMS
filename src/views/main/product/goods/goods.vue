<template>
  <div class="goods">
    <page-content
                  store-name="product"
                  page-name="goods"
                  :contentTableConfig="contentTableConfig"
                  ref="pageContentRef">
    </page-content>
  </div>
</template>

<script lang="ts" setup>
import { contentTableConfig } from './config/content-config'
</script>

<style scoped>
</style>
