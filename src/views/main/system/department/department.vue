<template>
  <div class="department">
    <page-search
                 :searchFormConfig="searchFormConfig"
                 @searchBtnClick="handleSearchBtnClick"
                 @resetBtnClick="handleResetBtnClick">
    </page-search>
    <page-content
                  pageName="department"
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
                pageName="department"
                storeName="system">
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { searchFormConfig } from './config/search-config'
import { usePageSearch } from '@/hooks/use-page-search'
import { contentTableConfig } from './config/content-config'
import { usePageModal } from '@/hooks/use-page-modal'
import { modalFormConfig } from './config/modal-config'
const { pageContentRef, handleSearchBtnClick, handleResetBtnClick } = usePageSearch()
const {
  handleEditButtonClick,
  handleCreateButtonClick,
  handleDeleteButtonClick,
  dialogTitle,
  pageModalRef
} = usePageModal('部门')
</script>

<style scoped>
</style>