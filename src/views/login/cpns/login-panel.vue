<template>
  <div class="login-panel" @keyup.enter="handleLoginClick">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" v-model="selected" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <Avatar />
            </el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <account-login ref="accountRef"></account-login>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <Iphone />
            </el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <cellphone-login ref="cellphoneRef"></cellphone-login>
      </el-tab-pane>
    </el-tabs>
    <div class="options">
      <div>
        <el-checkbox v-model="remember" v-if="selected === '0'">记住密码</el-checkbox>
      </div>
      <div class="forgot">忘记密码</div>
    </div>
    <el-button class="login-button" type="primary" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import { Avatar } from '@element-plus/icons-vue'
import { Iphone } from '@element-plus/icons-vue'
import AccountLogin from './account-login.vue'
import CellphoneLogin from './cellphone-login.vue'

const remember = ref(true)
const selected = ref('0')
const accountRef = ref<InstanceType<typeof AccountLogin>>()
const cellphoneRef = ref<InstanceType<typeof CellphoneLogin>>()

const handleLoginClick = () => {
  if (selected.value === '0') {
    //账号登录
    accountRef.value?.handleLogin(remember.value)
  } else {
    //手机登录
    cellphoneRef.value?.handleLogin(remember.value)
  }
}

defineExpose({
  handleLoginClick
})
</script>

<style scoped>
.login-panel {
  width: 320px;
  height: 200px;
  margin: 200px auto;
}

.title {
  text-align: center;
}

.el-tab-pane {
  margin-top: 20px;
}

.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}

.options {
  display: flex;
  justify-content: space-between;
}

.login-button {
  width: 320px;
}

.forgot {
  font-size: 14px;
  line-height: 32px;
}
</style>
