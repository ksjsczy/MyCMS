export function usePageModal(
  translatedPageName: string,
  editCb: (item: any) => void = () => {},
  createCb: () => void = () => {}
) {
  const pageModalRef = ref()

  //dialogTitle用于dialog对话框标题的切换(新建用户/编辑用户)
  const dialogTitle = ref('')

  const handleEditButtonClick = (item: any) => {
    //显示相应的标题
    dialogTitle.value = '编辑' + translatedPageName
    //显示出相应的dialog对话框
    pageModalRef.value.dialogVisible = true
    //编辑用户的对话框，应当展示出相应的初始值
    pageModalRef.value.formData = item
    pageModalRef.value.dialogType = 'edit'
    editCb(item)
  }

  const handleCreateButtonClick = () => {
    //显示相应的标题
    dialogTitle.value = '创建' + translatedPageName
    //显示出相应的dialog对话框
    pageModalRef.value.dialogVisible = true
    //创建用户的对话框中的初始数据应当为空
    pageModalRef.value.formData = pageModalRef.value.originValue
    pageModalRef.value.dialogType = 'create'
    createCb()
  }

  const handleDeleteButtonClick = (item: any) => {
    pageModalRef.value.itemName = translatedPageName
    //显示相应的标题
    dialogTitle.value = '删除' + translatedPageName
    //显示出相应的dialog对话框
    pageModalRef.value.dialogVisible = true
    //将item的值赋值给formData，以便获取到需要删除的item的value
    pageModalRef.value.formData = item
    pageModalRef.value.dialogType = 'delete'
  }

  return {
    handleEditButtonClick,
    handleCreateButtonClick,
    handleDeleteButtonClick,
    dialogTitle,
    pageModalRef
  }
}
