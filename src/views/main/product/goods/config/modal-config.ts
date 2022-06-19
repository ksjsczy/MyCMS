export const modalFormConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入您要创建的商品名称'
    },
    {
      field: 'oldPrice',
      type: 'input',
      label: '原价',
      placeholder: '请输入商品原价'
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '现价',
      placeholder: '请输入商品现价'
    },
    {
      field: 'imgUrl',
      type: 'input',
      label: '商品图片',
      placeholder: '请输入商品图片的url'
    },
    {
      field: 'status',
      type: 'input',
      label: '状态',
      placeholder: '请输入商品状态'
    }
  ],
  labelWidth: '70px',
  itemLayout: { padding: '10px 40px' },
  span: 24
}