<template>
  <div class="page-content">
    <my-table v-bind="contentTableConfig"
              :pageInfo="pageInfo"
              :page-list="pageList"
              :total-count="totalCount"
              @changeCurrentPage="handleChangeCurrentPage"
              @changePageSize="handleChangePageSize">
      <template #status="scope">
        <el-button plain type="success">{{ scope.row.enable === 1 ? '启用' : '禁用' }}</el-button>
      </template>
      <template #createAt="scope">
        {{ formatUtcString(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ formatUtcString(scope.row.updateAt) }}
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <div class="edit">
            <el-icon>
              <Edit />
            </el-icon>
            <el-button link type="primary" size="small" class="edit-btn">
              编辑
            </el-button>
          </div>
          <div class="delete">
            <el-icon>
              <Delete />
            </el-icon>
            <el-button link type="primary" size="small" class="delete-btn">
              删除
            </el-button>
          </div>
        </div>
      </template>
    </my-table>

  </div>
</template>

<script setup lang="ts">
import MyTable from '@/base-ui/table'
import { useStore } from '@/store';
import { formatUtcString } from '@/utils/formatter'
import { Edit, Delete } from '@element-plus/icons-vue';
const store = useStore()

const props = defineProps<{
  contentTableConfig: any,
  pageName: string,
  storeName: string
}>()

//保存从page-search传递过来的queryInfo
const queryInfoRef = ref({})

//定义getPageList函数，用来请求pageList的数据
const getPageList = (queryInfo: any = {}) => {
  queryInfoRef.value = queryInfo
  store.dispatch(`${props.storeName}/getPageListAction`, {
    pageName: props.pageName,
    requestParams: {
      ...pageInfo.value,
      ...queryInfo
    }
  })
}
const pageList = computed(() => (store.state as any)[props.storeName][`${props.pageName}List`])
const totalCount = computed(() => (store.state as any)[props.storeName][`${props.pageName}Count`])

//实现分页的逻辑
const pageInfo = ref({
  offset: 0,
  size: 10
})

//页面创建时调用一次getPageList函数，请求需要展示的pageList数据
getPageList()

const handleChangeCurrentPage = (currentPage: any) => {
  pageInfo.value.offset = (currentPage - 1) * pageInfo.value.size
}
const handleChangePageSize = (pageSize: any) => {
  pageInfo.value.size = pageSize
}

watch(pageInfo, () => {
  getPageList(queryInfoRef.value)
}, { deep: true })

//定义组件暴露出来的变量及函数
defineExpose({
  getPageList
})
</script>

<style scoped>
/* .title {
  margin: 10px 20px 5px;
}

.create-button {
  margin: 10px 20px 5px;
} */

.page-content {
  background-color: #fff;
  overflow: hidden;
  margin-top: 20px;
  padding: 10px 40px 20px;
}

.handle-btns {
  display: flex;
  justify-content: center;
  align-items: center;
}

.edit {
  margin-right: 10px;
}

.edit,
.delete {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.edit-btn,
.delete-btn {
  padding: 0;
}
</style>