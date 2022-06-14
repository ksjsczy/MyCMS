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
                  @editButtonClick="handleEditButtonClick"
                  @deleteButtonClick="handleDeleteButtonClick"
                  @createButtonClick="handleCreateButtonClick"
                  ref="pageContentRef">
    </page-content>
    <page-modal
                ref="pageModalRef"
                :modalFormConfig="modalForm"
                :dialogTitle="dialogTitle"
                pageName="users">
    </page-modal>
  </div>
</template>

<script lang="ts" setup>
import { searchFormConfig } from './config/search-config';
import { contentTableConfig } from './config/content-config';
import { modalFormConfig } from './config/modal-config'
import { usePageSearch } from '@/hooks/use-page-search'
import { useStore } from '@/store';

//处理page-search的搜索和重置按钮的逻辑
const { pageContentRef, handleSearchBtnClick, handleResetBtnClick } = usePageSearch()

//处理page-modal的相关逻辑
const store = useStore()
const pageModalRef = ref()
const dialogTitle = ref('')

const modalForm = computed(() => {
  modalFormConfig.formItems.forEach((item: any) => {
    if (item.field === 'departmentId') {
      item.options = store.state.departmentList.map(depItem => ({ title: depItem.name, value: depItem.id }))
    } else if (item.field === 'roleId') {
      item.options = store.state.roleList.map(roleItem => ({ title: roleItem.name, value: roleItem.id }))
    }
  })
  return modalFormConfig
})

const handleEditButtonClick = (item: any) => {
  modalFormConfig.formItems.forEach(item => {
    if (item.isHidden !== undefined) {
      item.isHidden = true
    }
  })
  dialogTitle.value = '编辑用户'
  pageModalRef.value.dialogVisible = true
  pageModalRef.value.formData = item
  pageModalRef.value.isCreate = false
}

const handleDeleteButtonClick = (item: any) => {
  store.dispatch('system/deleteItemAction', {
    pageName: 'users',
    requestParams: item.id
  })
}

const handleCreateButtonClick = () => {
  modalFormConfig.formItems.forEach(item => {
    if (item.isHidden !== undefined) {
      item.isHidden = false
    }
  })
  dialogTitle.value = '创建用户'
  pageModalRef.value.dialogVisible = true
  pageModalRef.value.formData = pageModalRef.value.originValue
  pageModalRef.value.isCreate = true
}

</script>

<style scoped>
</style>
