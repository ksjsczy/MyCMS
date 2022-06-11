import type { FormRules } from 'element-plus'

export const rules = reactive<FormRules>({
  cellphone: [
    {
      required: true,
      message: '手机号不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  verifyCode: [
    {
      required: true,
      message: '验证码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6}$/,
      message: '请输入正确的验证码',
      trigger: 'blur'
    }
  ]
})
