<template>
  <div class="nav-header">
    <el-icon @click="handleIconClick">
      <div>
        <Fold class="icon" v-if="isFold" />
        <Expand class="icon" v-else />
      </div>
    </el-icon>
    <div class="nav-header-content">
      <breadcrumb :breadcrumb="breadcrumb"></breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/base-ui/breadcrumb/src/breadcrumb.vue';
import { mapPathsToBreadcrumb } from '@/utils/map-menus'
import { useStore } from '@/store';
import UserInfo from './cpns/user-info.vue';
import { Fold, Expand } from '@element-plus/icons-vue';

const emit = defineEmits(['iconClick'])

const route = useRoute()
const store = useStore()
const menulist = store.state.login.menu

const breadcrumb = computed(() => mapPathsToBreadcrumb(menulist, route.path))
const isFold = ref(true)
const handleIconClick = () => {
  isFold.value = !isFold.value
  emit('iconClick')
}
</script>

<style scoped>
.icon {
  width: 30px;
  height: 30px;
  /* margin-right: -15px; */
  cursor: pointer;
}

.nav-header {
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-header-content {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-left: 15px;
}
</style>