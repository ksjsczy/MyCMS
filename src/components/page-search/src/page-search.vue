<template>
  <div class="page-search">
    <div class="my-form">
      <h1 class="title">高级检索</h1>
      <el-form label-width="120px">
        <el-row>
          <template v-for="item in searchConfig">
            <el-col :span="8">
              <el-form-item :label="item.label">
                <el-input :placeholder="item.placeholder"
                          v-model="formdata[item.field]">
                </el-input>
              </el-form-item>
            </el-col>
          </template>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  searchConfig: any[]
}>()

const formdata = ref({
  [props.field]: ''
})

</script>

<style scoped>
.title {
  text-align: center;
}

.page-search {
  background-color: #fff;
}
</style>