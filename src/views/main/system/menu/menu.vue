<template>
  <div class="menu">
    <page-content
                  pageName="menu"
                  storeName="system"
                  :contentTableConfig="contentTableConfig"
                  @editButtonClick="handleEditButtonClick"
                  @deleteButtonClick="handleDeleteButtonClick"
                  @createButtonClick="handleCreateButtonClick"
                  ref="pageContentRef">>
    </page-content>
    <page-modal
                ref="pageModalRef"
                :modalFormConfig="modalFormConfig"
                :dialogTitle="dialogTitle"
                pageName="menu"
                storeName="system">
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { contentTableConfig } from './config/content-config.ts'
import { modalFormConfig } from './config/modal-config.ts'
import { usePageModal } from '@/hooks/use-page-modal.ts'
const pageContentRef = ref()
const {
  handleEditButtonClick,
  handleCreateButtonClick,
  handleDeleteButtonClick,
  dialogTitle,
  pageModalRef
} = usePageModal('菜单')
</script>

<style scoped>
</style>