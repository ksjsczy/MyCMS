import { BASE_URL, TIME_OUT } from './request/config'

// axios
//   .request({
//     method: 'GET',
//     url: '/home/multidata',
//     baseURL: 'http://123.207.32.32:8000'
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

import MyRequest from './request'
const myRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
myRequest
  .post({
    url: '/login',
    data: {
      name: 'coderwhy',
      password: '123456'
    }
  })
  .then((res: any) => {
    console.log(res.data)
  })
