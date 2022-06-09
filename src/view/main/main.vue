<template>
  <div>
    我是main界面
  </div>
  <button @click="showRoles">显示所有角色</button>
</template>

<script setup lang="ts">
import myRequest from '@/service';


const showRoles = () => {
  myRequest.post({
    url: '/role/list',
    data: {
      offset: 0,
      size: 100
    }
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
}
</script>

<style scoped>
</style>