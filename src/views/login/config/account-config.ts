import type { FormRules } from 'element-plus'

export const rules = reactive<FormRules>({
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
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{0,16}$/,
      message: '密码由长度小于16的数字和字母组成',
      trigger: 'blur'
    }
  ]
})
