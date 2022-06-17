import { useStore } from '@/store'

export function mapDepartmentIdToName(id: number) {
  const store = useStore()
  const departmentItem = store.state.system.departmentList.find((item) => item.id === id)
  if (departmentItem) {
    return departmentItem.name
  } else {
    return '---'
  }
}
