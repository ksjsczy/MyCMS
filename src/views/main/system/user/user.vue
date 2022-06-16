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
                pageName="users"
                storeName="system">
    </page-modal>

  </div>
</template>

<script lang="ts" setup>
import { searchFormConfig } from './config/search-config';
import { contentTableConfig } from './config/content-config';
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
import { modalFormConfig } from './config/modal-config'
import { useStore } from '@/store'

//处理page-search的搜索和重置按钮的逻辑
const { pageContentRef, handleSearchBtnClick, handleResetBtnClick } = usePageSearch()

//处理page-modal的相关逻辑
const editCb = () => {
  //如果有不需要展示的内容，则将其隐藏（比如编辑用户对话框中，不需要展示密码）
  modalFormConfig.formItems.forEach(item => {
    if (item.isHidden !== undefined) {
      item.isHidden = true
    }
  })
}
const createCb = () => {
  //在新建对话框中，显示所有内容（包括在编辑对话框中被隐藏的内容）
  modalFormConfig.formItems.forEach(item => {
    if (item.isHidden !== undefined) {
      item.isHidden = false
    }
  })
}
//用于展示select输入框中展示的内容
const store = useStore()
//加载下拉选择框中的选择内容
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



const {
  handleEditButtonClick,
  handleCreateButtonClick,
  handleDeleteButtonClick,
  dialogTitle,
  pageModalRef
} = usePageModal('用户', editCb, createCb)


</script>

<style scoped>
</style>
