
export const contentTableConfig = {
  title: '菜单列表',
  showIndexColumn: true,
  showSelectColumn: true,

  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '150' },
    { prop: 'type', label: '级别', maxWidth: '100' },
    { prop: 'type', label: '类型', minWidth: '100' },
    { prop: 'url', label: '菜单url', minWidth: '150' },
    { prop: 'icon', label: '菜单icon', minWidth: '100' },
    { prop: 'sort', label: '序号', maxWidth: '100' },
    { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ]
}