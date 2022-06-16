<template>
  <div>
    <page-search :searchFormConfig="searchFormConfig"
                 @search-btn-click="handleSearchBtnClick"
                 @reset-btn-click="handleResetBtnClick">
    </page-search>
    <page-content
                  :content-table-config="contentTableConfig"
                  page-name="category"
                  store-name="product"
                  ref="pageContentRef"
                  @create-button-click="handleCreateButtonClick"
                  @edit-button-click="handleEditButtonClick"
                  @delete-button-click="handleDeleteButtonClick">
    </page-content>
    <page-modal
                :modal-form-config="modalFormConfig"
                :dialog-title="dialogTitle"
                page-name="category"
                store-name="product"
                ref="pageModalRef">
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { searchFormConfig } from './config/search-config'
import { contentTableConfig } from './config/content-config';
import { modalFormConfig } from './config/modal-config'
import { usePageSearch } from '@/hooks/use-page-search';
import { usePageModal } from '@/hooks/use-page-modal'

const { pageContentRef, handleSearchBtnClick, handleResetBtnClick } = usePageSearch()
const {
  handleEditButtonClick,
  handleCreateButtonClick,
  handleDeleteButtonClick,
  dialogTitle,
  pageModalRef } = usePageModal('类别')
</script>

<style scoped>
</style>