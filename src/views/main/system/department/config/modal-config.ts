export const modalFormConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入您要创建的部门名称'
    },
    {
      field: 'parentId',
      type: 'select',
      label: '上级部门',
      placeholder: '请选择上级部门',
      options: []
    },
    {
      field: 'leader',
      type: 'input',
      label: '领导名称',
      placeholder: '请输入您要创建的部门领导名称'
    }
  ],
  labelWidth: '70px',
  itemLayout: { padding: '10px 40px' },
  span: 24
}