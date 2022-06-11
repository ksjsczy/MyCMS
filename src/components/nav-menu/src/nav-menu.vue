<template>
  <div class="nav-menu">
    <el-row class="tac">
      <div class="title">
        <img src="@/assets/img/logo.svg" class="logo">
        <h5 class="mb-2">Vue3+TS</h5>
      </div>
      <el-menu
               default-active="39"
               class="el-menu-vertical-demo"
               background-color="#001529"
               text-color="#b7bdc3">
        <template v-for="item in menulist" :key="item.id">
          <el-sub-menu :index="item.id + ''" class="el-sub-menu">
            <template #title>
              <component :is="icons[item.id]" class="icon"></component>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''"
                            @click="handleMenuItemClick(subitem)">{{ subitem.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>

    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { Monitor, Setting, ShoppingBag, ChatLineRound } from '@element-plus/icons-vue'
const router = useRouter()
const icons: any = {
  38: Monitor,
  1: Setting,
  9: ShoppingBag,
  41: ChatLineRound
}
const props = defineProps<{
  menulist: any[]
}>()
const handleMenuItemClick = (item: any) => {
  router.push(item.url)
}
</script>


<style scoped lan="less">
.el-menu-vertical-demo {
  width: 100%;
  border-right: 0;
}

.is-active {
  background-color: #0a60bd !important;
  color: #fff;
}

.el-menu-item {
  background-color: #0c2135;
}

.el-menu-item:hover {
  color: #fff !important;
  background-color: #001529;
}

.logo {
  width: 28px;
  height: 28px;
  margin-right: 10px;
}

.title {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  height: 48px;
  box-sizing: border-box;
  font-size: 20px;
}

.icon {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}
</style>