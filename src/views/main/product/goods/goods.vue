<template>
  <div class="goods">
    <page-content
                  store-name="product"
                  page-name="goods"
                  :contentTableConfig="contentTableConfig"
                  ref="pageContentRef"
                  @editButtonClick="handleEditButtonClick"
                  @deleteButtonClick="handleDeleteButtonClick"
                  @createButtonClick="handleCreateButtonClick">
    </page-content>
    <page-modal
                ref="pageModalRef"
                :modalFormConfig="modalFormConfig"
                :dialogTitle="dialogTitle"
                pageName="goods"
                storeName="product">
    </page-modal>
  </div>
</template>

<script lang="ts" setup>
import { contentTableConfig } from './config/content-config'
import { modalFormConfig } from './config/modal-config.ts'
import { usePageModal } from '@/hooks/use-page-modal.ts'
const {
  handleEditButtonClick,
  handleCreateButtonClick,
  handleDeleteButtonClick,
  dialogTitle,
  pageModalRef
} = usePageModal('商品')

</script>

<style scoped>
</style>
