export const modalFormConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入您要创建的用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入您的真实姓名'
    },
    {
      field: 'password',
      type: 'input',
      label: '密码',
      placeholder: '请输入设置您的密码',
      isHidden:true
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入您的电话号码'
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择部门',
      options: []
    },
    {
      field: 'roleId',
      type: 'select',
      label: '选择角色',
      placeholder: '请选择角色',
      options: []
    }
  ],
  labelWidth: '70px',
  itemLayout: { padding: '10px 40px' },
  span: 24
}