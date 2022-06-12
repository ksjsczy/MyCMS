<template>
  <div class="user">
    <page-search
                 :searchFormConfig="searchFormConfig"
                 @searchBtnClick="handleSearchBtnClick"
                 @resetBtnClick="handleResetBtnClick">
    </page-search>
    <page-content
                  pageName="users"
                  storeName="system"
                  :contentTableConfig="contentTableConfig"
                  ref="pageContentRef">
    </page-content>
  </div>
</template>

<script lang="ts" setup>
import { searchFormConfig } from './config/search-config';
import { contentTableConfig } from './config/content-config';
import { usePageSearch } from '@/hooks/use-page-search'

//处理page-search的搜索和重置按钮的逻辑
const { pageContentRef, handleSearchBtnClick, handleResetBtnClick } = usePageSearch()

</script>

<style scoped>
</style>
