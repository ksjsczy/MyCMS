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
                storeName="system"
                :other-info="otherInfo">
      <div class="menu-tree">
        <el-tree
                 @check="handleCheckClick"
                 ref="treeRef"
                 :data="$store.state.menuList"
                 show-checkbox
                 node-key="id"
                 :props="{ children: 'children', label: 'name' }" />
      </div>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { searchFormConfig } from './config/search-config';
import { contentTableConfig } from './config/content-config';
import { modalFormConfig } from './config/modal-config'
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
import { ElTree } from 'element-plus';
import { mapMenuListToLeafKeys } from '@/utils/map-menus'

const { pageContentRef, handleSearchBtnClick, handleResetBtnClick } = usePageSearch()
const treeRef = ref<InstanceType<typeof ElTree>>()
const editCb = (item: any) => {
  const leafKeys = mapMenuListToLeafKeys(item.menuList)
  nextTick(() => {
    treeRef.value?.setCheckedKeys(leafKeys, false)
  })
}
const otherInfo = ref()
const handleCheckClick = (data1: any, data2: any) => {
  otherInfo.value = { menuList: [...data2.checkedKeys, ...data2.halfCheckedKeys] }
}
const {
  handleEditButtonClick,
  handleCreateButtonClick,
  handleDeleteButtonClick,
  dialogTitle,
  pageModalRef
} = usePageModal(editCb)

</script>

<style scoped>
.menu-tree {
  margin-left: 40px;
}
</style>