<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible"
               :title="dialogTitle"
               width="30%"
               center
               destroy-on-close>
      <my-form
               v-bind="modalFormConfig"
               :model-value="formData"
               @updata:model-value="formData = $event">
      </my-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="handleComfirmClick">确定</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import MyForm from '@/base-ui/form'
import { useStore } from '@/store';
const props = defineProps<{
  modalFormConfig: any,
  dialogTitle: string,
  pageName: string
}>()
const store = useStore()

const originValue: any = {}
props.modalFormConfig.formItems.forEach((item: any) => {
  originValue[item.field] = ''
})

const formData = ref(originValue)
const dialogVisible = ref(false)
const isCreate = ref(true)

const handleComfirmClick = () => {
  dialogVisible.value = false

  if (isCreate.value) {
    //创建
    store.dispatch('system/createItemAction', {
      pageName: props.pageName,
      requestParams: formData.value
    })
  } else {
    //编辑
    const requestParams: any = {}
    props.modalFormConfig.formItems.forEach((item: any) => {
      if (item.isHidden !== true) {
        requestParams[item.field] = formData.value[item.field]
      }
    })
    store.dispatch('system/editItemAction', {
      pageName: props.pageName,
      requestParams,
      id: formData.value.id
    })
  }

}
defineExpose({
  dialogVisible,
  formData,
  originValue,
  isCreate
})
</script>

<style scoped>
</style>