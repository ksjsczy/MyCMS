<template>
  <div>
    <el-form
             :model="ruleForm"
             status-icon
             :rules="rules"
             label-width="70px"
             class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"
                  placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"
                  type="password"
                  autocomplete="off"
                  placeholder="请输入密码" />
      </el-form-item>
    </el-form>
  </div>


</template>

<script lang="ts" setup>
import type { FormRules } from 'element-plus'
import { useStore } from 'vuex';
const store = useStore()

const ruleForm = reactive({
  name: '',
  password: ''
})
const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{0,20}$/,
      message: '用户名由长度小于20的数字和字母组成',
      trigger: 'blur'
    },
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{0,20}$/,
      message: '用户名由长度小于20的数字和字母组成',
      trigger: 'blur'
    },
  ]
})

const handleLogin = () => {
  store.dispatch('login/accountLoginAction', ruleForm)
}

defineExpose({
  handleLogin
})

</script>

<style scoped>
</style>