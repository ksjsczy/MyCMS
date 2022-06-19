import { useStore } from '@/store'

export function usePermissions(handleName: string, pageName: string): boolean {
  const store = useStore()
  if (pageName === undefined) {
    for (const permission of store.state.login.permissions) {
      if (permission.endsWith(handleName)) return true
    }
  } else {
    const varifyPermission = `system:${pageName}:${handleName}`
    for (const permission of store.state.login.permissions) {
      if (varifyPermission === permission) return true
    }
  }
  return false
}
