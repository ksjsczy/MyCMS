<template>
  <div>
    <login-panel></login-panel>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'

export default defineComponent({
  setup() {
    const form = reactive({
      username: "",
      password: ""
    });
    return {
      form,
    };
  },
  components: { LoginPanel }
})
</script>

<style scoped>
</style>