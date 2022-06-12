export function usePageSearch() {
  const pageContentRef = ref()

  const handleSearchBtnClick = (payload: any) => {
    pageContentRef.value.getPageList(payload)
  }
  const handleResetBtnClick = () => {
    pageContentRef.value?.getPageList()
  }
  return {
    pageContentRef,
    handleSearchBtnClick,
    handleResetBtnClick
  }
}
