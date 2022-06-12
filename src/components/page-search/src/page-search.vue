<template>
  <div class="page-search">
    <my-form
             v-bind="searchFormConfig"
             :model-value="formData"
             @updata:model-value="formData = $event">
      <template #header>
        <h1 class="title">高级检索</h1>
      </template>
      <template #footer>
        <div class="footer">
          <div class="reset">
            <el-button size="large">
              <el-icon>
                <Refresh class="icon" />
              </el-icon>
              <span>重置</span>
            </el-button>
          </div>
          <div class="search" @click="handleSearchClick">
            <el-button size="large" type="primary">
              <el-icon>
                <Search class="icon" />
              </el-icon>
              <span>搜索</span>
            </el-button>
          </div>
        </div>
      </template>
    </my-form>
  </div>
</template>

<script lang="ts" setup>
import MyForm from '@/base-ui/form'
import { ISearchFormConfig } from '@/base-ui/form/types'
import { Refresh, Search } from '@element-plus/icons-vue';
const props = defineProps<{
  searchFormConfig: ISearchFormConfig
}>()

//创建formData的初始值
const originValue: any = {}
props.searchFormConfig.formItems.forEach(item => {
  originValue[item.field] = ''
})

//初始化formData
const formData = ref(originValue)

//处理搜索按钮逻辑


</script>

<style scoped>
.title {
  text-align: center;
}

.page-search {
  background-color: #fff;
  overflow: hidden;
}

.footer {
  display: flex;
  justify-content: right;
  margin-right: 40px;
  margin-bottom: 30px;
}

.search {
  margin-left: 15px;
}
</style>