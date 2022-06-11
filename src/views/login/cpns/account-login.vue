<template>
  <div>
    <el-form
             :model="ruleForm"
             status-icon
             :rules="rules"
             label-width="70px"
             class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
                  v-model="ruleForm.password"
                  type="password"
                  autocomplete="off"
                  placeholder="请输入密码" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import localCache from '@/utils/cache'
import { rules } from '../config/account-config'
const store = useStore()

const ruleForm = reactive({
  name: localCache.getCache('name') || '',
  password: localCache.getCache('password') || ''
})

const handleLogin = (remember: boolean) => {
  if (remember) {
    localCache.setCache('name', ruleForm.name)
    localCache.setCache('password', ruleForm.password)
  } else {
    localCache.deleteCache('name')
    localCache.deleteCache('password')
  }
  store.dispatch('login/accountLoginAction', ruleForm)
}

defineExpose({
  handleLogin
})
</script>

<style scoped>
</style>
