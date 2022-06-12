import myRequest from '@/service'

export function getPageList(pageName: string, data: any) {
  return myRequest.post({
    url: `${pageName}/list`,
    data
  })
}
