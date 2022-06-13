<template>
  <div class="table">
    <slot name="header">
      <div class="header">
        <div class="title">
          <slot name="title">
            <h2>用户列表</h2>
          </slot>
        </div>
        <div class="create-button" @click="handleCreateButtonClick">
          <slot name="createButton">
            <el-button type="primary" size="large">
              <el-icon>
                <FolderAdd />
              </el-icon>
              <span>新建</span>
            </el-button>
          </slot>
        </div>
      </div>
    </slot>
    <el-table :data="pageList" border style="width: 100%">
      <template v-for="propitem in propList" :key="propitem.prop">
        <el-table-column v-bind="propitem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propitem.slotName" :row="scope.row">
              {{ scope.row[propitem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="pagination">
      <el-pagination
                     :currentPage="pageInfo.offset / pageInfo.size + 1"
                     :page-size="pageInfo.size"
                     @update:current-page="handleChangeCurrentPage"
                     @update:page-size="handleChangePageSize"
                     :page-sizes="[5, 10, 15, 20]"
                     :small="true"
                     :background="false"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="totalCount" />
    </div>
  </div>

</template>

<script setup lang="ts">
import { FolderAdd } from '@element-plus/icons-vue';

const props = defineProps<{
  propList: any[],
  pageList: any[],
  pageInfo: any,
  totalCount: number
}>()

const emit = defineEmits(['changeCurrentPage', 'changePageSize', 'createButtonClick'])

const handleChangeCurrentPage = (currentPage: number) => {
  emit('changeCurrentPage', currentPage)
}
const handleChangePageSize = (pageSize: number) => {
  emit('changePageSize', pageSize)
}

const handleCreateButtonClick = () => {
  emit('createButtonClick')
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pagination {
  display: flex;
  justify-content: right;
  margin-top: 20px;
}
</style>