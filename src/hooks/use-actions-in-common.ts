import { getPageList, createItem, deleteItem, editItem } from '@/service/main'

export async function useGetPageList(commit: any, payload: any) {
  const { pageName, requestParams } = payload
  const pageListResult = await getPageList(pageName, requestParams)
  const itemList = pageListResult.data.data.list
  const itemCount = pageListResult.data.data.totalCount
  const pageNameCapital = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
  commit(`change${pageNameCapital}List`, itemList)
  commit(`change${pageNameCapital}Count`, itemCount)
}

export async function useCreateItem(dispatch: any, payload: any) {
  const { pageName, requestParams } = payload
  await createItem(pageName, requestParams)
  dispatch('getPageListAction', { pageName })
}

export async function useDeleteItem(dispatch: any, payload: any) {
  const { pageName, requestParams } = payload
  await deleteItem(pageName, requestParams)
  dispatch('getPageListAction', { pageName })
}

export async function useEditItem(dispatch: any, payload: any) {
  const { pageName, id, requestParams } = payload
  await editItem(pageName, id, requestParams)
  dispatch('getPageListAction', { pageName })
}
