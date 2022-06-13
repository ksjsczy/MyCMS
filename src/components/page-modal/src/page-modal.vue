<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" title="Warning" width="30%" center>
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
const props = defineProps<{
  modalFormConfig: any,
}>()

const originValue: any = {}
props.modalFormConfig.formItems.forEach((item: any) => {
  originValue[item.field] = ''
})

const formData = ref(originValue)
const dialogVisible = ref(false)

const handleComfirmClick = () => {
  dialogVisible.value = false
  console.log(formData.value);
}
defineExpose({
  dialogVisible,
  formData,
  originValue
})
</script>

<style scoped>
</style>