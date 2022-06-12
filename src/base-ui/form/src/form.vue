<template>
  <div class="form">
    <slot name="header"></slot>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" key="item.field">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemLayout">
              <template v-if="item.type === 'input'">
                <el-input
                          :model-value="modelValue[item.field]"
                          @update:model-value="handleValueChange($event, item.field)"
                          :placeholder="item.placeholder">
                </el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :model-value="modelValue[item.field]"
                           @update:model-value="handleValueChange($event, item.field)"
                           :placeholder="item.placeholder">
                  <el-option
                             v-for="option in item.options"
                             :key="option.value"
                             :label="option.title"
                             :value="option.value" />
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker :model-value="modelValue[item.field]"
                                @update:model-value="handleValueChange($event, item.field)"
                                v-bind="item.otherOptions"
                                range-separator="To" />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: any,
  formItems: any[],
  labelWidth?: string,
  itemLayout?: any
  colLayout?: any,
}>()
const emit = defineEmits(['updata:model-value'])

const handleValueChange = (value: any, field: string) => {
  emit('updata:model-value', { ...props.modelValue, [field]: value })
}

</script>

<style scoped>
.el-select {
  width: 100%;
}
</style>