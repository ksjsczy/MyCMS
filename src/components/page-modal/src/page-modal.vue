<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible"
               :title="dialogTitle"
               width="30%"
               center
               destroy-on-close>
      <template v-if="dialogType !== 'delete'">
        <my-form
                 v-bind="modalFormConfig"
                 :model-value="formData"
                 @updata:model-value="formData = $event">
        </my-form>
        <slot></slot>
      </template>
      <template v-else>
        <div class="delete-text">确定要删除该{{ itemName }}吗?</div>
      </template>
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
  pageName: string,
  storeName: string,
  otherInfo?: any
}>()
const store = useStore()

const itemName = ref('')

const originValue: any = {}
props.modalFormConfig.formItems.forEach((item: any) => {
  originValue[item.field] = ''
})

const formData = ref(originValue)
const dialogVisible = ref(false)
const dialogType = ref('create')

const handleComfirmClick = () => {
  dialogVisible.value = false

  if (dialogType.value === 'create') {
    //创建
    const requestParams = { ...formData.value, ...props.otherInfo }
    store.dispatch(`${props.storeName}/createItemAction`, {
      pageName: props.pageName,
      requestParams
    })
  } else if (dialogType.value === 'edit') {
    //编辑
    let requestParams: any = {}
    props.modalFormConfig.formItems.forEach((item: any) => {
      if (item.isHidden !== true) {
        requestParams[item.field] = formData.value[item.field]
      }
    })
    requestParams = { ...requestParams, ...props.otherInfo }
    store.dispatch(`${props.storeName}/editItemAction`, {
      pageName: props.pageName,
      requestParams,
      id: formData.value.id
    })
  } else if (dialogType.value === 'delete') {
    //删除
    store.dispatch(`${props.storeName}/deleteItemAction`, {
      pageName: props.pageName,
      requestParams: formData.value.id
    })
  }
  //当创建/编辑/删除了item，需要刷新数据，否则更新的数据不能同步在页面上。
  //比如创建了一个部门后，在别的部门选择上级部门的下拉菜单时，不能显示刚才创建的那个部门，刷新页面后可以显示
  store.dispatch('getInitialDataAction')
}
defineExpose({
  dialogVisible,
  formData,
  originValue,
  dialogType,
  itemName
})
</script>

<style scoped>
.delete-text {
  font-size: 16px;
}
</style>