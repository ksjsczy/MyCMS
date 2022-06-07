<template>
  <h1>{{ counter }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const counter = ref(1)
    return {
      counter
    }
  }
})
</script>

<style scoped>
</style>