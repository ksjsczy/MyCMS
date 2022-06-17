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
                :modalFormConfig="modalForm"
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
import { useStore } from '@/store'
const { pageContentRef, handleSearchBtnClick, handleResetBtnClick } = usePageSearch()

//用于展示select输入框中展示的内容
const store = useStore()
//加载下拉选择框中的选择内容
const modalForm = computed(() => {
  modalFormConfig.formItems.forEach((item: any) => {
    if (item.field === 'parentId') {
      item.options = store.state.departmentList.map(depItem => ({ title: depItem.name, value: depItem.id }))
    }
  })
  return modalFormConfig
})

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