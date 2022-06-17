<template>
  <div class="role">
    <page-search
                 :searchFormConfig="searchFormConfig"
                 @searchBtnClick="handleSearchBtnClick"
                 @resetBtnClick="handleResetBtnClick">
    </page-search>
    <page-content
                  pageName="role"
                  storeName="system"
                  :contentTableConfig="contentTableConfig"
                  @editButtonClick="handleEditButtonClick"
                  @deleteButtonClick="handleDeleteButtonClick"
                  @createButtonClick="handleCreateButtonClick"
                  ref="pageContentRef">
    </page-content>
    <page-modal
                ref="pageModalRef"
                :modalFormConfig="modalFormConfig"
                :dialogTitle="dialogTitle"
                pageName="role"
                storeName="system">
      <el-tree
               :data="$store.state.menuList"
               show-checkbox
               node-key="id"
               :props="{ children: 'children', label: 'name' }" />
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { searchFormConfig } from './config/search-config';
import { contentTableConfig } from './config/content-config';
import { modalFormConfig } from './config/modal-config'
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

const { pageContentRef, handleSearchBtnClick, handleResetBtnClick } = usePageSearch()
const {
  handleEditButtonClick,
  handleCreateButtonClick,
  handleDeleteButtonClick,
  dialogTitle,
  pageModalRef
} = usePageModal('角色')

</script>

<style scoped>
</style>