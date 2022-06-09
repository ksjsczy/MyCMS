<template>
  <div>
    <el-form
             :model="ruleForm"
             status-icon
             :rules="rules"
             label-width="70px"
             class="demo-ruleForm">
      <el-form-item label="手机" prop="cellphone">
        <el-input v-model="ruleForm.cellphone"
                  placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode">
        <el-input v-model="ruleForm.verifyCode"
                  placeholder="请输入动态验证码" />
      </el-form-item>
    </el-form>
  </div>


</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import localCache from '@/utils/cache'
import { rules } from '../config/cellphone-config';
const store = useStore()

const ruleForm = reactive({
  cellphone: '',
  verifyCode: ''
})


const handleLogin = (remember: boolean) => {
  //处理手机号登录的逻辑
  console.log('处理手机号登录的逻辑');

}

defineExpose({
  handleLogin
})

</script>

<style scoped>
</style>