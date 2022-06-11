<template>
  <div class="user-info">
    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        <el-icon>
          <Avatar />
        </el-icon>
        <span class="username">{{ $store.state.login.userinfo.name }}</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleLogoutClick">
            <el-icon>
              <CircleClose />
            </el-icon>退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { Avatar, ArrowDown, CircleClose } from '@element-plus/icons-vue';
import localCache from '@/utils/cache'
const router = useRouter()
const handleLogoutClick = () => {
  localCache.deleteCache('name')
  localCache.deleteCache('password')
  localCache.deleteCache('token')
  router.push('/')
}
</script>

<style scoped>
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
}

.username {
  margin-left: 2px;
}

.example-showcase .el-dropdown+.el-dropdown {
  margin-left: 15px;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>